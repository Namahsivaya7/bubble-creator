import React from "react";
import { useState } from "react";
import { Button, List, ListItem } from "@mui/material";
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


import { useDispatch, useSelector } from "react-redux";
import { recordPayment } from "./redux-components/Watercancount";

export default function Transactions() {
    const balance = useSelector((state) => state.water.balance);

    const [payment, setPayment] = useState(Math.abs(balance));
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();

        dispatch(recordPayment({ payment, date: new Date() }));
        setPayment(Math.abs(balance) - payment);
    };
    const transactions = useSelector((state) => state.water.transactions);
    console.log({ transactions })
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
                    {/* <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount"
                            defaultValue={Math.abs(balance)}
                            onChange={(e) => setPayment(Number(e.target.value))}
                            value={payment}
                        >Amount</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start"><PaymentsIcon sx={{ fill: "#17751d" }} /></InputAdornment>}
                            label="Amount"
                        />
                    </FormControl> */}

                    <TextField
                        placeholder="Amount"
                        defaultValue={Math.abs(balance)}
                        onChange={(e) => setPayment(Number(e.target.value))}
                        value={payment}
                    />

                    <Grid sx={{ display: "flex", marginTop: "30px", justifyContent: "center" }}><Button style={{ background: "rgb(97 0 237)", color: "white", width: "100%", padding: "10px" }} onClick={handleChange}><b>RECORD PAYMENT</b></Button> </Grid>
                    <List>
                        {transactions?.map(({ payment, date }, i) => (
                            <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
                                <span>{payment} /-</span>
                                <p>{date.toLocaleString().split(",")[0]}</p>

                            </ListItem>
                        ))}
                    </List>

                </Grid>
            </Grid>
        </Box>
    );
}