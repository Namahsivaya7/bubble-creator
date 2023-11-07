import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Leftnavbar from "./Leftnavbar";

export default function Advanced() {

    return (
        <Box>
            <Grid container>
                <Grid item xs={1}><Leftnavbar /></Grid>
                <Grid item sx={{ marginTop: "-24px" }}><h2>Advanced</h2></Grid> </Grid>
            <Grid>
                <p>Please be aware that App stores all data in your local storage. This means that the data is stored on your device and is not transferred or stored on any external servers. By using our app, you consent to the storage of your data in this manner.</p><br />
                <p>We only retain data for a six-month period, ensuring that we always have the most current information for better tracking. Plus, it helps us keep your local data storage tidy and streamlined.</p><br />
                <hr />
                <p>Experience an issue with your data? No problem! Simply click the 'RESET DATA' button to start fresh.</p>
                <Button variant="contained" color="error" sx={{ background: "#af001f", color: "white" }}>RESET DATA</Button>
                <hr />
                <p>Found your balance confusing? Simply click the 'RESET BALANCE' button to start the accounting fresh.</p>
                <Button variant="contained" color="error" sx={{ background: "#af001f", color: "white" }}>RESET BALANCE</Button>
            </Grid>
        </Box>
    );
}