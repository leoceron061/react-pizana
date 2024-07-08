import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeLanguage } from 'app/store/i18nSlice';
import Icon from '@mui/material/Icon';
import { red } from '@mui/material/colors';
const languages = [
  { id: 'en', title: 'English', flag: 'us' },
  { id: 'tr', title: 'Turkish', flag: 'tr' },
  { id: 'ar', title: 'Arabic', flag: 'sa' },
];

function Youtube(props) {
  const dispatch = useDispatch();

 

  const langMenuClick = (event) => {
    // setMenu(event.currentTarget);
  };


  return (
    <>
      <Button style={{ backgroundColor: "#ffffff" }} target="_blank" href='https://www.youtube.com/' >
        {/* <Icon sx={{ color: red[500],fontSize: 40 }}>play_circle_outline</Icon> */}
        <Icon sx={{ color: red[500],fontSize: 30 }}>play_circle</Icon>
      </Button>

      
    </>
  );
}

export default Youtube;
