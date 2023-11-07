import  React,{useState} from 'react';
import { Box, Grid, Button } from '@mui/material/';
import TextField from '@mui/material/TextField';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import EditIcon from '@mui/icons-material/Edit';


export default function Addingqtys() {
    
    return (
        <Box
            sx={{
                width: 1000,
                maxWidth: '100%',
            }}
        >
            <Grid sx={{ display: "flex", marginTop: "30px", justifyContent: "center" }}><BloodtypeIcon style={{ border: "1px solid", background: "rgb(35 137 219)", color: "white", borderRadius: "50%", width: "45px", height: "48px" }} /></Grid>
            <Grid container sx={{ marginTop: "50px", gap: "15px" }}>
                <Grid item xs={12}><TextField fullWidth label="Can capacity(Litres)" id="fullWidth" required /></Grid>
                <Grid item xs={12}><TextField fullWidth label="Price per can" id="fullWidth" required /></Grid>
                <Grid item xs={12}><TextField fullWidth label="Date" id="fullWidth" defaultValue={new Date().toDateString()} disabled required /></Grid>
            </Grid>
            <Grid sx={{ display: "flex", marginTop: "30px", justifyContent: "center" }}><Button style={{ background: "rgb(35 137 219)", color: "white", width: "100%", padding: "10px" }}><BloodtypeIcon /><b>WATER CAN</b></Button></Grid>
            <EditIcon />
        </Box>
    );
}
