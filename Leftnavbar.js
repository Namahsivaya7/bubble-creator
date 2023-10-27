import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import ReorderIcon from "@mui/icons-material/Reorder";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { Grid, List, ListItem, Typography, anchor } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

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
                    <p style={{marginTop:"25px"}}>
                        <WaterDropIcon style={{ fill: "rgb(35 137 219)" }} />
                    </p>
                    <p style={{marginTop:"0"}}>
                        <h2>Bubbles</h2>

                        <p style={{ marginTop: "-15px", fontSize: 10 }}>Water Can Traker</p>
                    </p>
                </div>
                <List>
                    <ListItem>
                        <Typography >Home</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>History</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Transactions</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Settings</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Advanced</Typography>
                    </ListItem>
                </List>
            </Drawer>
        </Grid>
    );
}