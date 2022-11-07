import React, { useState } from 'react';
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
import { Avatar, Toolbar } from '@mui/material';
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
  Badge
} from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import moment from 'moment';
import { NestCamWiredStandTwoTone } from '@mui/icons-material';

const drawerWidth = 240;
export default function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let dataAssessment = [
    {
      type:"Sistem",
      time:"2022-11-01T12:45:3.417-07:00",
      title:"Asesmen Anda dijadwalkan kembali pada tanggal 20/8/2022",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
      from:"Sistem",
      sorted:"Terbaru"
    },
    {
      type:"Sistem",
      time:"2022-11-01T14:43:20.417-07:00",
      title:"Asesmen level 6 telah tersedia",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
      from:"Sistem",
      sorted:"Belum dibaca"
    },
    {
      type:"Asesor",
      time:"2022-11-01T12:30:25.417-07:00",
      title:"Asesmen Anda dijadwalkan kembali pada tanggal 20/8/2022",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
      from:"Asesor",
      sorted:"Terlama"
    },
    {
      type:"Asesor",
      time:"2022-11-01T11:51:50.417-07:00",
      title:"Asesmen level 6 telah tersedia",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
      from:"Asesor",
      sorted:"Terlama"
    },
  ]
  
  const [filterTime, setFilterTime] = React.useState(dataAssessment)

  const handlefilterTime= (e) => {

    let word = e.target.value
    
    if(word === 'terbaru') {
      setFilterTime(dataAssessment)
    }
    else if(word === 'terlama') {
      const filtered = dataAssessment.filter(dataAssessment => dataAssessment.from === 'Terlama');
      setFilterTime(filtered)
      console.log(filtered)
    }
    else if(word === 'asesor') {
      const filtered = dataAssessment.filter(dataAssessment => dataAssessment.from === 'Asesor');
      setFilterTime(filtered)
      console.log(filtered)
    }
    else {
      setFilterTime(dataAssessment)
    }

  }
  const [filterItem, setFilterItem] = React.useState(dataAssessment)

  const handleFilterItem= (e) => {

    let word = e.target.value
    
    if(word === 'semua') {
      setFilterItem(dataAssessment)
    }
    else if(word === 'sistem') {
      const filtered = dataAssessment.filter(dataAssessment => dataAssessment.from === 'Sistem');
      setFilterItem(filtered)
      console.log(filtered)
    }
    else if(word === 'asesor') {
      const filtered = dataAssessment.filter(dataAssessment => dataAssessment.from === 'Asesor');
      setFilterItem(filtered)
      console.log(filtered)
    }
    else {
      setFilterItem(dataAssessment)
    }

  }
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
        <Toolbar sx={{ width:'auto', ml:'3rem' }}>
        <Typography sx={{ ml:'1px' }} fontSize={'24px'} fontFamily={'Poppins'} color={'black'} paddingLeft={'3rem'}>
          Notifikasi
        </Typography>
      </Toolbar>
          </AppBar>
    <Grid container sx={{mt:'70px'}}>
    <Grid item md={8} sx={{p:"35px",height:'auto',borderRight:'1px solid #EAEAEA'}}>
      {
        filterItem.map((item,index)=>(
          <Card elevation={0} sx={{p:3,backgroundColor:'#F5F5F5',mb:"31px"}}>
            <Box>
              <Box flexDirection="row" display="flex">
                <Typography sx={{color:'#2A68C4',fontSize:14}}>{item.type}</Typography>
                <Typography sx={{color:'#ababab',fontSize:14, paddingLeft: '0.3rem'}}>{item.time}</Typography>
              </Box>
              <Typography sx={{color:'#2A68C4',mt:'10px',mb:'10px',fontSize:16}}><b>{item.title}</b></Typography>
              <Typography sx={{color:'#272729',mb:'10px',fontSize:14}}>{item.description}</Typography>
            </Box>
          </Card>
        ))
      }
    </Grid>
    <Grid item md={4} sx={{height:400,px:"26px",py:"20px", position:'fixed', ml:'40rem'}}>
      <Box sx={{mt:"38px"}}>
        <Typography><b>Filter</b></Typography>
      </Box>


      <Box sx={{mt:'20px'}}>
      <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group" style={{color:"black"}}>Diurutkan berdasarkan</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
      >
        <Grid container>
          <Grid item md={12}>
            <Grid container justifyContent={'space-between'}>
        <FormControlLabel value="terbaru" control={<Radio id="terbaru"  />} label="Terbaru" />
        <FormControlLabel value="belum dibaca" control={<Radio id="belum dibaca"  />} label="Belum dibaca" /> 
        </Grid>
        </Grid>
        <Grid item md={12}>
        <FormControlLabel value="terlama" control={<Radio id="terlama" />} label="Terlama" />
        </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
    </Box>


    <Box sx={{mt:'20px'}}>
      <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group" style={{color:"black"}}>Dari siapa</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
      >
        <Grid container>
          <Grid item md={12}>
            <Grid container justifyContent={'space-between'}>
        <FormControlLabel value="semua" control={<Radio id="semua" onChange={handleFilterItem}/>} label="Semua" />
        <FormControlLabel value="sistem" control={<Radio id="sisem" onChange={handleFilterItem}/>} label="Sistem" />
        </Grid>
        </Grid>
        <Grid item md={12}>
        <FormControlLabel value="asesor" control={<Radio id="asesor" onChange={handleFilterItem}/>} label="Asesor" />
        </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
    </Box>
    </Grid>
  </Grid>
  </Box>
  );
}