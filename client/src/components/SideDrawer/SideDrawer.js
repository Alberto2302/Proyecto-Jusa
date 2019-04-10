import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
            <Drawer 
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
            >
                Salir
            
            </Drawer>
    );
    };

export default SideDrawer;