const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Sequelize, DataTypes } = require("sequelize");

const app = express();
const secretKey = "yourSecretKey";

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());

// Create a Sequelize instance and connect to the database
const sequelize = new Sequelize(
  "mysql://avnadmin:AVNS_x0Njzz9bjlnHsELIEv4@laruche-api-cegeplimoilou-6ad2.aivencloud.com:20719/rucheDB?ssl-mode=REQUIRED"
);

const Product = sequelize.define(
  "product",
  {
    productId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(64),
      allowNull: true,
    },
  },
  {
    tableName: "product",
  }
);

const Location = sequelize.define(
  "location",
  {
    locationId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(64),
      allowNull: true,
    },
  },
  {
    tableName: "location",
  }
);

const ProductLocation = sequelize.define(
  "productLocation",
  {
    productLocationId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "product",
        key: "productId",
      },
    },
    locationId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "location",
        key: "locationId",
      },
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: "productLocation",
  }
);

const ProductSale = sequelize.define(
  "productSale",
  {
    productSaleId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    productLocationId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "productLocation",
        key: "productLocationId",
      },
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    total: {
      type: Sequelize.DECIMAL(5, 2),
      allowNull: false,
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: "productSale",
  }
);

const User = sequelize.define(
  "user",
  {
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING(32),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    firstName: {
      type: Sequelize.STRING(32),
      allowNull: true,
    },
    lastName: {
      type: Sequelize.STRING(32),
      allowNull: true,
    },
    privileges: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    locationId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "location",
        key: "locationId",
      },
    },
  },
  {
    tableName: "user",
  }
);

// Establish connections
ProductLocation.belongsTo(Product, { foreignKey: "productId" });
ProductLocation.belongsTo(Location, { foreignKey: "locationId" });

ProductSale.belongsTo(ProductLocation, { foreignKey: "productLocationId" });

User.belongsTo(Location, { foreignKey: "locationId" });

// Sync the model with the database
sequelize
  .sync()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

// POST Endpoint to create a new user
// Body parameters: username, password, firstName, lastName, privilege
app.post("/users", async (req, res) => {
  try {
    const { username, password, firstName, lastName, privileges } = req.body; // Extract user details from the request body

    // Check if the username is already taken
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(409).json({ message: "Username already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      password: hashedPassword,
      firstName,
      lastName,
      privileges,
    }); // Create a new user record

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET Endpoint to get a list of all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll(); // Retrieve all users

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT Endpoint to update a user
// Body parameters: username, password, firstName, lastName, privileges
// Mind you these parameters are optional, anything not declared wont be updated
// eg: if you only send values for the username and firstName, only they will be updated
app.put("/users/:userId", async (req, res) => {
  try {
    const { userId } = req.params; // Extract the userId from the request parameters

    const user = await User.findByPk(userId); // Find the user by their id

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user's properties
    if (req.body.username) {
      user.username = req.body.username;
    }
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      user.password = hashedPassword;
    }
    if (req.body.firstName) {
      user.firstName = req.body.firstName;
    }
    if (req.body.lastName) {
      user.lastName = req.body.lastName;
    }
    if (req.body.privileges) {
      user.privileges = req.body.privileges;
    }
    if (req.body.locationId) {
      user.locationId = req.body.locationId;
    }
    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET Endpoint to get a user from their username
app.get("/users/:username", async (req, res) => {
  try {
    const { username } = req.params; // Extract the username from the request parameters

    const user = await User.findOne({
      where: { username },
      include: [Location], // Include the associated Location model
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// User login endpoint
// Body parameters: username, password
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  //console.log(username + " " + password);

  try {
    // Find the user in the database
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token with an expiration time of 1 hour
    const token = jwt.sign({ username: user.username }, secretKey, {
      expiresIn: "1h",
    });

    // Return the token
    res.json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Protected route example
app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "Protected route accessed successfully" });
});

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    req.user = user;
    next();
  });
}

// POST Endpoint to create a product
// Body params: name
app.post("/products", async (req, res) => {
  try {
    const { name } = req.body; // Extract the product name from the request body
    const product = await Product.create({ name }); // Create a new product record
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET endpoint to get all products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT Endpoint to update a product
// Body params: name
app.put("/products/:productId", async (req, res) => {
  try {
    const { productId } = req.params; // Extract the productId from the request parameters
    const { name } = req.body; // Extract the updated product name from the request body

    const product = await Product.findByPk(productId); // Find the product by its id

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Update the product's name
    product.name = name;
    await product.save();

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// POST Endpoint to associate an item with a location
// Body parameters: productId
// eg: /location/1/productLocations with 4 as the productId will associate the product 4 to the location 1
app.post("/locations/:locationId/productLocations", async (req, res) => {
  try {
    const { locationId } = req.params; // Extract the locationId from the request parameters
    const { productId, price } = req.body; // Extract the productId and isActive from the request body

    const location = await Location.findByPk(locationId); // Find the location by its id

    if (!location) {
      return res.status(404).json({ error: "Location not found" });
    }

    // Check if an association between the same product and location already exists
    const existingProductLocation = await ProductLocation.findOne({
      where: {
        productId,
        locationId,
      },
    });

    if (existingProductLocation) {
      return res
        .status(400)
        .json({ error: "Product location association already exists" });
    }

    const isActive = true;
    const productLocation = await ProductLocation.create({
      locationId,
      productId,
      price,
      isActive,
    }); // Create a new product location record

    res.json(productLocation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET Endpoint to get a list of product locations per location
// eg: /location/1/productLocations will return all productLocations for the location 1
app.get("/locations/:locationId/productLocations", async (req, res) => {
  try {
    const { locationId } = req.params; // Extract the locationId from the request parameters

    const productLocations = await ProductLocation.findAll({
      where: { locationId },
      include: [{ model: Product }],
    }); // Retrieve product locations for the specified locationId and include the associated Product

    res.json(productLocations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT Endpoint to update a product location and deactivate it
// Body parameters: isActive
// eg: /productLocations/1 with isActive set to false will turn off the productLocation 1
app.put("/productLocations/:productLocationId", async (req, res) => {
  try {
    const { productLocationId } = req.params; // Extract the productLocationId from the request parameters
    const { isActive } = req.body; // Extract the isActive parameter from the request body

    const productLocation = await ProductLocation.findByPk(productLocationId); // Find the product location by its id

    if (!productLocation) {
      return res.status(404).json({ error: "Product location not found" });
    }

    productLocation.isActive = isActive; // Update the isActive property

    await productLocation.save(); // Save the changes

    res.json(productLocation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
