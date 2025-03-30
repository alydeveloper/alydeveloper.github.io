import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}><MenuRoundedIcon></MenuRoundedIcon></Button>
            <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}


