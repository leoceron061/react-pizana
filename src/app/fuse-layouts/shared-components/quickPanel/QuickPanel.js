import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import Tooltip from '@mui/material/Tooltip';
import withReducer from 'app/store/withReducer';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './store';
import { toggleQuickPanel } from './store/stateSlice';
import { TextareaAutosize } from '@mui/material';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useCallback, useEffect, useState } from 'react';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import Switch from '@mui/material/Switch';
import InfoIcon from '@mui/icons-material/Info';
import store from '../../../main/ID_store/store';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { InfoIconWithTooltip } from 'icon-with-tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { updateSettings } from './quickPanelFunctions';
import Check_refresh from '../../../Check_refresh';

const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 250,
  },
}));

function QuickPanel(props) {
  const dispatch = useDispatch();
  const state = useSelector(({ quickPanel }) => quickPanel.state);

  const [contIns, setContIns] = useState(true)
  const [insNotif, setinsNotif] = useState(true)
  const [skipInsEmpl, setskipInsEmpl] = useState(true)
  const [timeclockCont, settimeclockCont] = useState(true)
  const [timeclockfeat, settimeclockfeat] = useState(true)
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  useEffect(() => {
    if (state == true) {
      setContIns(store.getState().settings.contractor_inspection)
      setinsNotif(store.getState().settings.inspection_notification)
      setskipInsEmpl(store.getState().settings.skip_inspection_employee)
      settimeclockCont(store.getState().settings.timeclock_io_contractor)
      settimeclockfeat(store.getState().settings.timeclock_io_feature)
    }
  }, [state]);//this works but initial switch state is all wrong out the store.settings in usestate initi



  async function handleconinsSetting(set) {
    const setting = "contractor_inspection"
    const option = set
    const id = store.getState().id
    const result = await updateSettings({ setting, option, id })
  }
  const handleconins = async (e) => {
    setContIns(e.target.checked)
    handleconinsSetting(e.target.checked)

  }

  async function handleinsnotifSetting(set) {
    const setting = "inspection_notification"
    const option = set
    const id = store.getState().id
    const result = await updateSettings({ setting, option, id })
  }
  const handleinsnotif = async (e) => {
    setinsNotif(e.target.checked)
    handleinsnotifSetting(e.target.checked)
  }

  async function handleskipinsemplSetting(set) {
    const setting = "skip_inspection_employee"
    const option = set
    const id = store.getState().id
    const result = await updateSettings({ setting, option, id })
  }
  const handleskipinsempl = async (e) => {
    setskipInsEmpl(e.target.checked)
    handleskipinsemplSetting(e.target.checked)

  }

  async function handletimeclockcontSetting(set) {
    const setting = "timeclock_io_contractor"
    const option = set
    const id = store.getState().id
    const result = await updateSettings({ setting, option, id })
  }
  const handletimeclockcont = async (e) => {
    settimeclockCont(e.target.checked)
    handletimeclockcontSetting(e.target.checked)

  }
  async function handletimeclockfeatSetting(set) {
    const setting = "timeclock_io_feature"
    const option = set
    const id = store.getState().id
    const result = await updateSettings({ setting, option, id })
  }
  const handletimeclockfeat = async (e) => {
    settimeclockfeat(e.target.checked)
    handletimeclockfeatSetting(e.target.checked)

  }




  return (
    <StyledSwipeableDrawer
      open={state}
      anchor="right"
      onOpen={(ev) => { }}
      onClose={(ev) => dispatch(toggleQuickPanel())}
      disableSwipeToOpen
    >
      <FuseScrollbars className="p-10">
        <div className="flex justify-between items-end pt-13 mb-16">
          <Typography className="text-28 font-Regular leading-none">Settings</Typography>
        </div>
        <div className="flex-start" >
          <div className=" py-5">

            <Button style={{  color:"black"}}
              component={NavLinkAdapter}
              to="/tickets"
            
              className=" w-full rounded-10 shadow flex-start">
              <div className='w-full flex mt-8 mb-12 mx-4' >
                <Icon>  confirmation_number</Icon>
                Ticket Status
              </div>
            </Button>

          </div>

          <div className=" py-5">

            <Button style={{  color:"black"}}
              component={NavLinkAdapter}
              to="/inspection"
              className="w-full rounded-5 shadow flex-start">
              <div className='w-full flex mt-8 mb-12 mx-4'>
                <Icon>assignment_turned_in</Icon>

                Inspection Questions
              </div>
            </Button>
          </div>

          {/* <div className="py-5">
        
            
            <Button
              component={NavLinkAdapter}
              to="/catmaterials"
              className="w-full rounded-10 shadow ">
                    <div className='w-full flex t-8 mb-12  mx-4'>
                  <Icon>category</Icon>
               Categories
               </div>
            </Button>
          </div> */}

          <div className="py-5">


            <Button style={{  color:"black"}}
              component={NavLinkAdapter}
              to="/users"
              className="w-full rounded-10 shadow ">
              <div className='w-full flex mt-8 mb-12  mx-4'>
                <Icon>shopping_car</Icon>
                Materials
              </div>
            </Button>
          </div>

          <div className=" py-5">


            <Button style={{ color:"black"}}
              component={NavLinkAdapter}
              to="/unitTemps"
              className="w-full rounded-10 shadow ">
              <div className='w-full flex mt-8 mb-12 mx-4'>
                <Icon>square_foot</Icon>
                Units
              </div>
            </Button>
          </div>

          <div className="py-5">


            <Button style={{  color:"black"}}
              component={NavLinkAdapter}
              to="/locations"
              className="w-full rounded-10 shadow">
              <div className=' w-full flex mt-8 mb-12  mx-4'>
                <Icon>place</Icon>
                Quarries
              </div>
            </Button>
          </div>
          <span className='font-bold'>Inspection Settings </span>

          <div className="flex" >

            {/* <Tooltip title="Enable to allow Contractors to have access to the inspection module on the driver app" disableInteractive> */}

            <FormControlLabel

              label="Enable Contractors"//link to read page
              control={<Switch checked={contIns} onClick={handleconins} />}

            />
            {/* <InfoIconWithTooltip  text="Enable to allow Contractors to have access to the inspection module on the driver app" placement="right" /> */}

            <Tooltip className="flex flex-grow flex-shrink-0 px-12 justify-end" title="Enable to allow Contractors to have access to the inspection module on the driver app" disableInteractive>
              <IconButton>
                <InfoOutlinedIcon sx={{ color: 'black' }} />
              </IconButton></Tooltip>

          </div>
          <div className="flex">

            <FormControlLabel
              label="Employee can Skip"//link to read page
              control={<Switch checked={skipInsEmpl} onClick={handleskipinsempl} />}
            />
            <Tooltip className="flex flex-grow flex-shrink-0 px-12 justify-end" title="Enable to allow Employees to Skip Inspection" disableInteractive >
              <IconButton>
                <InfoOutlinedIcon sx={{ color: 'black' }} />
              </IconButton>
            </Tooltip>
          </div>
          <div className="flex">

            <FormControlLabel
              label="Enable Notifications"//link to read page
              control={<Switch checked={insNotif} onClick={handleinsnotif} />}
            />
            <Tooltip className="flex flex-grow flex-shrink-0 px-12 justify-end" title="Enable to allow notifications to Contractors, or Employees regarding Inspection Reminders" disableInteractive  >
              <IconButton>
                <InfoOutlinedIcon sx={{ color: 'black' }} />
              </IconButton>
            </Tooltip>
          </div>


          <span className='font-bold'>Time Clock Settings </span>


          <div className="flex">

            <FormControlLabel

              label="Contractors"//link to read page
              control={<Switch checked={timeclockCont} onClick={handletimeclockcont} />}
            />
            <Tooltip className="flex flex-grow flex-shrink-0 px-12 justify-end" title="Enable to require Contractors to Time Clock Module" disableInteractive >
              <IconButton>
                <InfoOutlinedIcon sx={{ color: 'black' }} />
              </IconButton>
            </Tooltip>
          </div>

          <div className="flex">

            <FormControlLabel

              label="Employees"//link to read page
              control={<Switch checked={timeclockfeat} onClick={handletimeclockfeat} />}
            />
            <Tooltip className="flex flex-grow flex-shrink-0 px-12 justify-end" title="Enable to require employees to Time Clock Module" disableInteractive >
              <IconButton>
                <InfoOutlinedIcon sx={{ color: 'black' }} />
              </IconButton>
            </Tooltip>
          </div>


        </div>
      </FuseScrollbars>
    </StyledSwipeableDrawer>
  );
}

export default withReducer('quickPanel', reducer)(memo(QuickPanel));
