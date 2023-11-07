import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import ReorderIcon from "@mui/icons-material/Reorder";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { Grid, List, ListItem, Typography, anchor } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import Settings from "./Settings";

export default function Leftnavbar() {
    const [opening, setOpening] = useState(false);
    const openingHandler = () => {
        let opn = true;
        setOpening(opn);
    };
    const onClose = () => {
        let cls = false;
        setOpening(cls);
    };
    return (
        <Grid>
            <ReorderIcon onClick={openingHandler} />
            <Drawer open={opening} onClose={onClose} >
                <div style={{ display: "flex" }}>
                    <p style={{ marginTop: "25px" }}>
                        <WaterDropIcon style={{ fill: "rgb(35 137 219)" }} />
                    </p>
                    <p style={{ marginTop: "0" }}>
                        <h2>Bubbles</h2>

                        <p style={{ marginTop: "-15px", fontSize: 10 }}>Water Can Traker</p>
                    </p>
                </div>
                <List>
                    <ListItem>
                        <Link to="/" style={{ textDecoration: 'none', color: "black" }}><Typography >Home</Typography></Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/history" style={{ textDecoration: 'none', color: "black" }}> <Typography>History</Typography></Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/transactions" style={{ textDecoration: 'none', color: "black" }}><Typography>Transactions</Typography></Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/Settings' style={{ textDecoration: 'none', color: "black" }}> <Typography>Settings</Typography></Link>
                    </ListItem>
                    <ListItem>
                    <Link to='/Advanced' style={{ textDecoration: 'none', color: "black" }}> <Typography>Advanced</Typography></Link>
                    </ListItem>
                </List>
            </Drawer>
        </Grid>
    );
}