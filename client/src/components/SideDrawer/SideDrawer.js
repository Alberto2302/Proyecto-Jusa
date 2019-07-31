import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
            <Drawer 
            anchor="left"
            open={props.open}
            onClose={()=> props.onClose(false)}
            >
               <List component="nav">
                    <ListItem button onClick={()=> console.log('Limpiar')}>Limpiar</ListItem>
                    <ListItem button onClick={()=> console.log('Regresar')}>Regresar</ListItem>
                    <ListItem button onClick={()=> console.log('Salir')}>Salir</ListItem>
               </List>
            
            </Drawer>
    );
    };

export default SideDrawer;