import React from 'react';
import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ListItem from '@mui/material/ListItem';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemButton from '@mui/material/ListItemButton';
// import { Link } from 'react-router-dom'
import ListItemIcon from '@mui/material/ListItemIcon';
import ME from '../../assets/Ellipse.png'
import ListItemText from '@mui/material/ListItemText';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
// import Paper from '@mui/material/Paper';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// import MenuIcon from '@mui/icons-material/Menu';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Avatar, CardActions, Toolbar } from '@mui/material';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HomeIcon from '@mui/icons-material/Home';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Typography from '@mui/material/Typography';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery'
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import SearchIcon from '@mui/icons-material/Search';
import {
  Grid,
  Card,
  InputBase,
  Paper,
  IconButton,
  CssBaseline,
  AppBar,
  Button,
  Checkbox,
  Stack
} from '@mui/material'
import TextField from '@mui/material/TextField';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const drawerWidth = 240;
export default function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ maxWidth:'100%', display:'flex', ml:'17rem' }}>
        <CssBaseline />
      <AppBar
        elevation={1}
        position= "fixed"
        sx={{
          width: { md: `calc(200vh)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: 'white',
          paddingTop: '10px',
          paddingLeft:'4rem'
        }}
        >
        <Toolbar sx={{ width:'auto', ml:'3rem', height: 'auto' }}>
        <Typography sx={{ ml:'1px' }} fontSize={'24px'} fontFamily={'Poppins'} color={'black'} paddingLeft={'3rem'} >
          <b>Tambah Perusahaan</b>
        </Typography>
      </Toolbar>
      </AppBar>
      <Grid container sx={{mt:'70px'}}>
    <Grid item md={8} sx={{p:"15px",height:'auto'}}>
    <Grid sx={{mt:-0.5, width:'100%', height:'auto', mr:'20px'}}>
      <Stack direction="row" alignItems="center" spacing={2}>
      <IconButton aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <Box sx={{backgroundColor: '#ababab', borderRadius:10, height:40, width:40}}>
        <CameraAltOutlinedIcon sx={{color: 'action', m:1}}/>
        </Box>
      </IconButton>
      <Button sx={{ borderRadius:'10px'}} variant="contained" component="label">
        Upload logo
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </Stack>
    </Grid>
    <Grid item md={6} sx={{mt:3}}>
    <Typography sx={{position: 'absolute', height: 20}}><b>Nama Organisasi</b></Typography>
    <Grid sx={{mt:0}}>
    <Paper
        component="form"
        elevation={0}
        sx={{ p: '2px 4px', display: 'flex', position: 'absolute', alignItems: 'center', width: 450, mt: 3, height: 50, border:'1px solid #EAEAEA',borderRadius:"10px" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Nama Organisasi"
          inputProps={{ 'aria-label': 'Nama Organisasi' }}
        />
      </Paper>
      </Grid>
      </Grid>
      <Grid item md={6} sx={{mt:3, justifyContent:'space-between', ml:70}}>
    <Typography sx={{position: 'absolute', height: 20}}><b>Tagline</b></Typography>
    <Grid sx={{mt:0}}>
    <Paper
        component="form"
        elevation={0}
        sx={{ p: '2px 4px', display: 'flex', position: 'absolute', alignItems: 'center', width: 450, mt: 3, height: 50, border:'1px solid #EAEAEA',borderRadius:"10px" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Nama Customer"
          inputProps={{ 'aria-label': 'Nama Customer' }}
        />
      </Paper>
      </Grid>
      </Grid>
      <Grid sx={{mt:13}}>
    <Typography sx={{position: 'absolute', height: 20}}><b>Industri</b></Typography>
    <Grid sx={{mt:0}}>
    <Paper
        component="form"
        elevation={0}
        sx={{ p: '2px 4px', display: 'flex', position: 'absolute', alignItems: 'center', width: 450, mt: 3, height: 50, border:'1px solid #EAEAEA',borderRadius:"10px" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Nama Industri"
          inputProps={{ 'aria-label': 'Nama Industri' }}
        />
      </Paper>
      </Grid>
      </Grid>
      <Grid item md={6} sx={{mt:3, justifyContent:'space-between', ml:70}}>
    <Typography sx={{position: 'absolute', height: 20}}><b>Sektor Bisnis</b></Typography>
    <Grid sx={{mt:0}}>
    <Paper
        component="form"
        elevation={0}
        sx={{ p: '2px 4px', display: 'flex', position: 'absolute', alignItems: 'center', width: 450, mt: 3, height: 50, border:'1px solid #EAEAEA',borderRadius:"10px" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Nama Sektor Bisnis"
          inputProps={{ 'aria-label': 'Nama Sektor Bisnis' }}
        />
      </Paper>
      </Grid>
      </Grid>
      <Grid sx={{mt:23}}>
    <Typography sx={{position: 'absolute', height: 20}}><b>Website</b></Typography>
    <Grid sx={{mt:0}}>
    <Paper
        component="form"
        elevation={0}
        sx={{ p: '2px 4px', display: 'flex', position: 'absolute', alignItems: 'center', width: 450, mt: 3, height: 50, border:'1px solid #EAEAEA',borderRadius:"10px" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Nama Website"
          inputProps={{ 'aria-label': 'Nama Website' }}
        />
      </Paper>
      </Grid>
      </Grid>
      <Grid item md={6} sx={{mt:3, justifyContent:'space-between', ml:70}}>
    <Typography sx={{position: 'absolute', height: 20}}><b>Email</b></Typography>
    <Grid sx={{mt:0}}>
    <Paper
        component="form"
        elevation={0}
        sx={{ p: '2px 4px', display: 'flex', position: 'absolute', alignItems: 'center', width: 450, mt: 3, height: 50, border:'1px solid #EAEAEA',borderRadius:"10px" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Nama Email"
          inputProps={{ 'aria-label': 'Nama Email' }}
        />
      </Paper>
      </Grid>
      </Grid>
      <Grid sx={{mt:33}}>
    <Typography sx={{position: 'absolute', height: 20}}><b>Nomor Telepon</b></Typography>
    <Grid sx={{mt:0}}>
    <Paper
        component="form"
        elevation={0}
        sx={{ p: '2px 4px', display: 'flex', position: 'absolute', alignItems: 'center', width: 450, mt: 3, height: 50, border:'1px solid #EAEAEA',borderRadius:"10px" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Nomor Telepon "
          inputProps={{ 'aria-label': 'Nomor Telepon' }}
        />
      </Paper>
      </Grid>
      </Grid>
      <Grid item md={6} sx={{mt:3, justifyContent:'space-between', ml:70}}>
    <Typography sx={{position: 'absolute', height: 20}}><b>Alamat</b></Typography>
    <Grid sx={{mt:0}}>
    <Paper
        component="form"
        elevation={0}
        sx={{ p: '2px 4px', display: 'flex', position: 'absolute', alignItems: 'center', width: 450, mt: 3, height: 50, border:'1px solid #EAEAEA',borderRadius:"10px" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Alamat"
          inputProps={{ 'aria-label': 'Alamat' }}
        />
      </Paper>
      </Grid>
      </Grid>
      <Grid sx={{mt:43}}>
    <Typography sx={{position: 'absolute', height: 20}}><b>Tahun Berdiri</b></Typography>
    <Grid sx={{mt:0}}>
    <Paper
        component="form"
        elevation={0}
        sx={{ p: '2px 4px', display: 'flex', position: 'absolute', alignItems: 'center', width: 450, mt: 3, height: 50, border:'1px solid #EAEAEA',borderRadius:"10px" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Tahun Berdiri"
          inputProps={{ 'aria-label': 'Tahun Berdiri' }}
        />
      </Paper>
      </Grid>
      </Grid>
      <Grid item md={6} sx={{mt:3, justifyContent:'space-between', ml:70}}>
    <Typography sx={{position: 'absolute', height: 20}}><b>Deskripsi</b></Typography>
    <Grid sx={{mt:0}}>
    <Paper
        component="form"
        elevation={0}
        sx={{ p: '2px 4px', display: 'flex', position: 'absolute', alignItems: 'center', width: 450, mt: 3, height: 50, border:'1px solid #EAEAEA',borderRadius:"10px" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Deskripsi"
          inputProps={{ 'aria-label': 'Deskripsi' }}
        />
      </Paper>
      </Grid>
      </Grid>
      <Grid sx={{mt:53}}>
      <Typography sx={{position: 'absolute', height: 20}}><b>Gambar Cover</b></Typography>
      <Button sx={{ mt:'3px', borderRadius:'10px', mt:'30px'}} variant="contained"> 
        Upload Cover
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      </Grid>
      <Grid sx={{mt:3}}>
    <Checkbox {...label} defaultChecked />
    <textField sx={{ position: 'absolute', fontSize:12}}>Saya menyatakan bahwa saya adalah perwakilan resmi organisasi ini dan berhak untuk bertindak atas nama perusahaan dalam pengelolaan dan pembuatan halaman ini.</textField>
    </Grid>
    <CardActions>
    <Button sx={{mb:'0px', borderRadius:'10px', ml: '53.5rem', mt:'50px'}} variant="outlined" component="label">
      Batal
    </Button>
    <Button sx={{mt:'0px', borderRadius:'10px', ml: '53.5rem', mt:'50px'}}variant="contained" component="label">
      Submit
    </Button>
    </CardActions>
      </Grid>
    </Grid>
      </Box>
  );
}