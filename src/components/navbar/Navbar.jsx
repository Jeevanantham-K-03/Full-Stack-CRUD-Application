import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from './Menu'
import ShortMenu from './ShortMenu'
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import { React,useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Link } from 'react-router';

const drawerWidth = 240;
const shortWidth = 80;

export default function Navbar({content}) {

    const [isBigMenu,setIsBigMenu] = useState(false)

    const changeMenu = () =>{
        setIsBigMenu(!isBigMenu)
    }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
            <IconButton onClick={changeMenu} sx={{color:'white',marginRight:'30px'}}>
                {isBigMenu ? <MenuOpenIcon/> :<MenuIcon/>}
            </IconButton>
          <Typography variant="h5" noWrap component="div" component={Link} to={'/'} sx={{textDecoration:'none',color:'white'}}>
            NammaGround
          </Typography>
          <IconButton>
            <SportsCricketIcon sx={{
                color:'white'
            }}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: isBigMenu ? drawerWidth : shortWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width:isBigMenu ? drawerWidth : shortWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        {isBigMenu ? <Menu/> : <ShortMenu/>}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {content}
      </Box>
    </Box>
  );
}
