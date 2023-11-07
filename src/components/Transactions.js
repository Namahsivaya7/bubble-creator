import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Leftnavbar from "./Leftnavbar";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import PaymentsIcon from '@mui/icons-material/Payments';

export default function Transactions() {

    return (
        <Box sx={{
            width: 1000,
            maxWidth: '100%'
        }}>
            <Grid container>
                <Grid item xs={1}><Leftnavbar /></Grid>
                <Grid item sx={{ marginTop: "-24px" }}><h2>Transactions</h2></Grid>
                 </Grid>
            <Grid container>
                <Grid item>
                    {/* <TextField fullWidth label="Amount" id="fullWidth" required /> */}
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start"><PaymentsIcon sx={{fill:"#17751d"}}/></InputAdornment>}
                            label="Amount"
                        />
                    </FormControl>
                    <Grid sx={{ display: "flex", marginTop: "30px", justifyContent: "center" }}><Button style={{ background: "rgb(97 0 237)", color: "white", width: "100%", padding: "10px" }}><b>RECORD PAYMENT</b></Button></Grid>
                </Grid>
            </Grid>
        </Box>
    );
}