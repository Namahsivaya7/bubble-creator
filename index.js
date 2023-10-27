import React from "react";
import Box from '@mui/material/Box';
import { Button, Grid } from "@mui/material";

import Paper from '@mui/material/Paper';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import OpacityIcon from '@mui/icons-material/Opacity';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import EditIcon from '@mui/icons-material/Edit';
import Drawer from '@mui/material/Drawer';
import Addingqtys from "./Addingqtys";
import Leftnavbar from "./Leftnavbar";

export default function BubbleCreator() {


    return (
        <Box sx={{ margin: "70px auto" }} >
            <Grid><Leftnavbar /></Grid>
            <Grid container style={{ gap: "40px 40px", justifyContent: "center" }}>
                <Grid item xs={2}>
                    <Paper style={{ height: "200px", borderRadius: "5px" }}><Paper elevation={3} /><CalendarMonthIcon style={{ margin: "20px 0 0 20px", fill: "#a92586" }} />
                        <p style={{ textAlign: "center" }}><b>0</b><WaterDropIcon style={{ fill: "rgb(33 135 214)", paddingTop: "10px" }} /><p>This month</p></p>
                    </Paper>
                </Grid>

                <Grid item xs={2}>
                    <Paper style={{ height: "200px", borderRadius: "5px" }}><Paper /> <InsertInvitationIcon style={{ margin: "20px 0 0 20px", fill: "#8923d0" }} />
                        <p style={{ textAlign: "center" }}><b>0</b><WaterDropIcon style={{ fill: "rgb(33 135 214)" }} /><p>Day</p></p></Paper>
                </Grid>
            </Grid>
            <Grid container style={{ gap: "40px 40px", margin: "40px 0", justifyContent: 'center' }}>
                <Grid item xs={2}>
                    <Paper style={{ height: "200px", borderRadius: "5px" }}><Paper /><OpacityIcon style={{ margin: "20px 0 0 20px", fill: "rgb(33 135 214)" }} />
                        <p style={{ textAlign: "center" }}><b>0 L</b><p>Person / Day</p></p></Paper>
                </Grid>

                <Grid item xs={2}>
                    <Paper style={{ height: "200px", borderRadius: "5px" }}><Paper /> <AccountBalanceWalletIcon style={{ margin: "20px 0 0 20px", fill: "rgb(45 201 136)" }} />
                        <p style={{ textAlign: "center" }}><b>0 ₹</b><p>Balance</p></p>
                    </Paper>
                </Grid>
            </Grid>
            <Grid style={{ display: "flex", justifyContent: 'center', gap: "20px" }}>
                <Button style={{ background: "rgb(35 137 219)", color: "white", borderRadius: '50px', padding: "10px" }}><BloodtypeIcon /><b>WATER CAN</b></Button>
                <Button style={{ padding: "10px", borderRadius: "50%", background: "rgb(35 137 219)", color: "white" }} ><EditIcon /></Button>
            </Grid>

        </Box>

    );
}