import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import clsx from 'clsx';
import { forwardRef, useImperativeHandle, useState } from 'react';
import FusePageCardedSidebarContent from './FusePageCardedSidebarContent';

function FusePageCardedSidebar(props, ref) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    toggleSidebar: handleToggleDrawer,
  }));

  const handleToggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Hidden lgUp={props.variant === 'permanent'}>
        
          <FusePageCardedSidebarContent {...props} />
      
      </Hidden>
      
    </>
  );
}

export default forwardRef(FusePageCardedSidebar);
