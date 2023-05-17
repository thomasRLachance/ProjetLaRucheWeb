import { Grid, IconButton, Paper } from "@mui/material";
import { Box } from "@mui/system";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React from "react";

export default function AdminConnected(){
    return(<Grid container direction="column">
        <Grid>
            <Paper  elevation={3} sx={{ p: 2, marginTop: 5, marginRight: 5, marginLeft: 5, marginBottom: 2, height: 100}}>
                <Box>
                    Accès modifier calendrier 
                    <IconButton>
                    <CalendarMonthIcon fontSize="large"/>
                    </IconButton>
                    
                </Box>
            </Paper>
        </Grid>
        <Grid>            
            <Paper  elevation={3} sx={{ p: 2, marginTop: 2, marginRight: 5, marginLeft: 5, marginBottom: 2, height: 100 }}>
                <Box>
                    Accès modifier users
                    tab avec tous les users et crayon en coin pour modifier
                </Box>
            </Paper>
        </Grid>
        <Grid>
            <Paper elevation={3} sx={{ p: 2, marginTop: 2, marginRight: 5, marginLeft: 5, marginBottom: 2, height: 100 }}>
                <Box>
                    Accès modifier bistro
                    tab avec les deux menu et un crayon par menu pour aller modifier
                </Box>
            </Paper>
        </Grid>
        <Grid>            
            <Paper elevation={3} sx={{ p: 2, marginTop: 2, marginRight: 5, marginLeft: 5, marginBottom: 2, height: 100 }}>
                <Box>
                    Accès modifier cafe
                </Box>
            </Paper>
        </Grid>
    </Grid>)
}