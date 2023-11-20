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
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateSettings } from "./redux-components/Watercancount";

export default function Settings() {

    const [canCapacity, setCanCapacity] = useState(20);
    const [pricePerCan, setPricePerCan] = useState(10);
    const [familyStrength, setFamilyStrength] = useState(2);

    const dispatch = useDispatch();

    const handleSave = (e) => {
        e.preventDefault();

        // set data to store on submit
        dispatch(updateSettings({ pricePerCan, canCapacity, familyStrength }));
    };


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
                            <FormControl fullWidth sx={{ m: 1, background: "white" }}>
                                <InputLabel htmlFor="outlined-adornment-amount" onChange={(e) => setCanCapacity(e.target.value)}
                                    value={canCapacity}>Can capacity (Litres)</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start"><LocalMallIcon sx={{ fill: "rgb(42 42 209)" }} /></InputAdornment>}
                                    label="Can capacity (Litres)"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth sx={{ m: 1, background: "white" }}>
                                <InputLabel htmlFor="outlined-adornment-amount" onChange={(e) => setPricePerCan(e.target.value)}
                                    value={pricePerCan}>Price per can</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start"><SellIcon sx={{ fill: 'rgb(0 128 0)' }} /></InputAdornment>}
                                    label="Price per can"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth sx={{ m: 1, background: "white" }}>
                                <InputLabel htmlFor="outlined-adornment-amount" onChange={(e) => setFamilyStrength(e.target.value)}
                                    value={familyStrength}>Family strength</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start"><FavoriteIcon sx={{ fill: "red" }} /></InputAdornment>}
                                    label="Family strength"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid sx={{ display: "flex", marginTop: "30px", marginLeft: "15px", justifyContent: "center" }}><Button style={{ background: "rgb(35 137 219)", marginLeft: "15px", color: "white", width: "100%", padding: "10px", margin: 1 }} onClick={handleSave}><b>Save</b></Button></Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
