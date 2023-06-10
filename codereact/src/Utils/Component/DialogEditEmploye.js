import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  Paper,
  Typography,
  Table,
  TableContainer,
  Toolbar,
  Stack,
  TextField,
  MenuItem,
  Grid,
  Divider,
} from "@mui/material";

export default function DialogEditEmploye({ rows, title, open, setIsOpen }) {
  return (
    <Dialog open={open} fullWidth maxWidth="sm">
      <TableContainer component={Paper}>
        <Toolbar>
          <Stack justifyContent="space-between" direction="row" spacing={2}>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
          </Stack>
        </Toolbar>
        <Table title={title}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center">
            {rows.map((row) => (
              <>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                  padding={2}>
                  <Grid item xs={6}>
                    <TextField value={row.name} label="Nom" />
                  </Grid>
                  <Grid item xs={6} fullWidth>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Location"
                      select>
                      <MenuItem value="Bistro Boudreau">
                        Bistro Boudreau
                      </MenuItem>
                      <MenuItem value="Caféteria Comme Chez nous">
                        Caféteria Comme Chez nous
                      </MenuItem>
                      <MenuItem value="Administration">Administration</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField value={row.username} label="Nom d'utilisateur" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField value={row.password} label="Mot de passe" />
                  </Grid>
                </Grid>
                <Divider style={{ width: "100%" }} />
              </>
            ))}
          </Grid>
        </Table>
      </TableContainer>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)}>ANNULER</Button>
      </DialogActions>
    </Dialog>
  );
}
