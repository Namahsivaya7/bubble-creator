import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Leftnavbar from "./Leftnavbar";
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';


export default function ThisMonth() {
    return (
        <Box>
            <Grid container>
                <Grid item xs={1}><Leftnavbar /></Grid>
                <Grid item sx={{ marginTop: "-24px" }}><h2>History (This month)</h2></Grid> </Grid>
            <Grid><LocalDrinkIcon style={{ fill: "rgb(33 135 214)" }} /></Grid>
        </Box>
    );
}