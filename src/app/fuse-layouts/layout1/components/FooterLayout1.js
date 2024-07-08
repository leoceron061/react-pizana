import AppBar from '@mui/material/AppBar';
import FormHelperText from '@mui/material/FormHelperText';
import { ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { memo } from 'react';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { selectFooterTheme } from 'app/store/fuse/settingsSlice';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
function FooterLayout1(props) {
  const footerTheme = useSelector(selectFooterTheme);

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar
        align="right"
        id="fuse-footer"
        className={clsx('relative z-20 shadow-md', props.className)}
        color="default"
        style={{ backgroundColor: footerTheme.palette.background.paper }}
      >
        <Toolbar>
          <div  className="flex flex-grow flex-shrink-0 px-12 justify-end">
            <Link  className="mx-10" style={{ textDecoration: 'none', color: "white", float: "right", align: "right", textAlign: "right" }} to="/privacy">
              
            </Link>

            <Link className="mx-4" style={{ textDecoration: 'none', color: "white", float: "right", align: "right", textAlign: "right" }} to="/terms">
              
            </Link>
          </div>

          

        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(FooterLayout1);
