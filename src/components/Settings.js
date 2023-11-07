import React, { useState } from 'react';
import { Box, Grid, Button } from '@mui/material/';
import TextField from '@mui/material/TextField';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Leftnavbar from './Leftnavbar';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SellIcon from '@mui/icons-material/Sell';

export default function Settings() {

    return (
        <Box
            sx={{
                width: 1000,
                maxWidth: '100%',
            }}
        >
            <Grid container>
                <Grid item xs={5}><Leftnavbar /></Grid>
                <Grid item xs={7} sx={{ marginTop: "-24px" }}><h2>Settings</h2>
                    <Grid container sx={{ marginTop: "50px", gap: "15px" }}>
                        <Grid item xs={12}>
                            <FormControl fullWidth sx={{ m: 1,background:"white" }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Can capacity (Litres)</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start"><LocalMallIcon sx={{ fill: "rgb(42 42 209)" }} /></InputAdornment>}
                                    label="Can capacity (Litres)"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth sx={{ m: 1,background:"white" }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Price per can</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start"><SellIcon sx={{ fill: 'rgb(0 128 0)' }} /></InputAdornment>}
                                    label="Price per can"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth sx={{ m: 1,background:"white" }}>
                                <InputLabel htmlFor="outlined-adornment-amount" >Family strength</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start"><FavoriteIcon sx={{ fill: "red" }} /></InputAdornment>}
                                    label="Family strength"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid sx={{ display: "flex", marginTop: "30px", justifyContent: "center" }}><Button style={{ background: "rgb(35 137 219)", color: "white", width: "100%", padding: "10px" }}><b>Save</b></Button></Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
