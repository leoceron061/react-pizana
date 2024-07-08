import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'app/auth/store/userSlice';
import store from '../../main/ID_store/store'
import { constants } from '../../../constants'
import { Link, useHistory } from 'react-router-dom'
import Check_refresh from '../../Check_refresh';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
function UserMenu(props) {
  const { nombrecliente, email } = store.getState()
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);
  let history = useHistory();
  const [userMenu, setUserMenu] = useState(null);


  function sendToProfile() {
    history.push('/profile');
  }

  useEffect(async () => {
    await Check_refresh();
  });

  const userMenuClick = (event) => {
    setUserMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setUserMenu(null);
  };

  async function LogOff() {// logs user off to prevent auto redirect to dahsboard
    const response = await fetch(`${constants.URLLOCAL}/login/logout`,
      {
        method: "GET",
        headers: { token: localStorage.token }
        //body: JSON.stringify(body)
      })

    store.dispatch({ type: 'LOG_OUT' })
    const parseRes = await response.json()
    if (parseRes === true) {
      console.log("Log out successful!")
      localStorage.clear()
      history.replace("/")
    }

    else {
      console.log("Unauthorized user, Server Error")
      history.replace("/")
    }
  }

  async function LogOff() {// logs user off to prevent auto redirect to dahsboard
    const response = await fetch(`${constants.URLLOCAL}/login/logout`,
      {
        method: "GET",
        headers: { token: localStorage.token }
        //body: JSON.stringify(body)
      })

    store.dispatch({ type: 'LOG_OUT' })
    const parseRes = await response.json()
    if (parseRes === true) {
      console.log("Log out successful!")
      localStorage.clear()
      history.replace("/")
    }

    else {
      console.log("Unauthorized user, Server Error")
      history.replace("/")
    }
  }


  return (
    <>
{/* 
      <Tooltip
        title="Salir"

      >
        <IconButton
          className="min-h-40 min-w-40 px-0 md:px-16 py-0 md:py-6"
          onClick={userMenuClick}
          color="inherit"
          size="large"
        >
          <Icon>exit_to_app</Icon>
        </IconButton>
      </Tooltip>

      <Popover
        open={Boolean(userMenu)}
        anchorEl={userMenu}
        onClose={userMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper: 'py-8',
        }}
      >
        <>

          <div>

            <MenuItem onClick={LogOff} >
              <ListItemIcon className="min-w-40">
                <Icon>exit_to_app</Icon>
              </ListItemIcon>
              <ListItemText primary="Cerrar Sesión" />
            </MenuItem>
          </div>
        </>

      </Popover> */}
    </>
  );
}

export default UserMenu;