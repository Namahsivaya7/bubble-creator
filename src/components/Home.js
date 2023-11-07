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
import TextField from '@mui/material/TextField';
import History from "./History";

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link, Outlet } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addWaterCan } from "./redux-components/Watercancount";
import { Balance } from "@mui/icons-material";
// import { increment } from "./redux/CountSlice";
// import { increment } from "../redux/CountSlice";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};

export default function Home() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const dispatch = useDispatch();
    const waterCans = useSelector((state) => state.water.waterCans);
    // const price = useSelector((state) => state.water.waterCans);
    console.log(waterCans);
    return (
        <Box sx={{ margin: "70px auto" }} >
            <Grid><Leftnavbar /></Grid>

            <Grid container style={{ gap: "40px 40px", justifyContent: "center" }}>
                <Grid item xs={2}>
                    <Link to="history" style={{ textDecoration: 'none' }}><Paper style={{ height: "200px", borderRadius: "5px" }}><Paper elevation={3} /><CalendarMonthIcon style={{ margin: "20px 0 0 20px", fill: "#a92586" }} />
                        <p style={{ textAlign: "center" }}><b>{waterCans.length}</b><WaterDropIcon style={{ fill: "rgb(33 135 214)", paddingTop: "10px" }} /><p>This month</p></p>
                    </Paper></Link>
                    {<Outlet />}
                </Grid>

                <Grid item xs={2}>
                    <Link to="history" style={{ textDecoration: 'none' }}><Paper style={{ height: "200px", borderRadius: "5px" }}><Paper /> <InsertInvitationIcon style={{ margin: "20px 0 0 20px", fill: "#8923d0" }} />
                        <p style={{ textAlign: "center" }}><b>{(waterCans.length / 30).toFixed(1)}</b><WaterDropIcon style={{ fill: "rgb(33 135 214)" }} /><p>Day</p></p></Paper></Link>
                </Grid>
            </Grid>
            <Grid container style={{ gap: "40px 40px", margin: "40px 0", justifyContent: 'center' }}>
                <Grid item xs={2}>
                    <Paper style={{ height: "200px", borderRadius: "5px" }}><Paper /><OpacityIcon style={{ margin: "20px 0 0 20px", fill: "rgb(33 135 214)" }} />
                        <p style={{ textAlign: "center" }}><b>0 L</b><p>Person / Day</p></p></Paper>
                </Grid>

                <Grid item xs={2}>
                    <Link to="/Transactions" style={{ textDecoration: 'none' }}><Paper style={{ height: "200px", borderRadius: "5px" }}><Paper /> <AccountBalanceWalletIcon style={{ margin: "20px 0 0 20px", fill: "rgb(45 201 136)" }} />
                        <p style={{ textAlign: "center" }}><b>0 ₹</b><p>Balance</p></p>
                    </Paper></Link>
                </Grid>
            </Grid>
            <Grid style={{ display: "flex", justifyContent: 'center', gap: "20px" }}>
                <Button style={{ background: "rgb(35 137 219)", color: "white", borderRadius: '50px', padding: "10px" }}
                    onClick={() =>
                        dispatch(
                            addWaterCan({
                                waterCapacity: 20,
                                price: 10,
                                date: new Date(),
                            })
                        )
                    }>
                    <BloodtypeIcon /><b>WATER CAN</b>
                </Button>
                <Button onClick={handleOpen} style={{ padding: "10px", borderRadius: "50%", background: "rgb(35 137 219)", color: "white" }} ><EditIcon /></Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                            }}
                        >
                            <Grid sx={{ display: "flex", marginTop: "30px", justifyContent: "center" }}><BloodtypeIcon style={{ border: "1px solid", background: "rgb(35 137 219)", color: "white", borderRadius: "50%", width: "45px", height: "48px" }} /></Grid>
                            <Grid container sx={{ marginTop: "50px", gap: "15px" }}>
                                <Grid item xs={12}><TextField fullWidth label="Can capacity(Litres)" id="fullWidth" required /></Grid>
                                <Grid item xs={12}><TextField fullWidth label="Price per can" id="fullWidth" required /></Grid>
                                <Grid item xs={12}><TextField fullWidth label="Date" id="fullWidth" defaultValue={new Date().toDateString()} disabled required /></Grid>
                            </Grid>
                            <Grid sx={{ display: "flex", marginTop: "30px", justifyContent: "center" }}><Button onClick={() => dispatch(addWaterCan({ waterCapacity: 20, price: 10, date: new Date() }))}
                                style={{ background: "rgb(35 137 219)", color: "white", width: "100%", padding: "10px" }}><BloodtypeIcon /><b>WATER CAN</b></Button></Grid>
                        </Box>
                    </Box>
                </Modal>
            </Grid>

        </Box>

    );
}