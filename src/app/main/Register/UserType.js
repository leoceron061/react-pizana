import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

import {useHistory, useParams } from 'react-router-dom';
import { TextField } from '@mui/material';

import UserDriverForm from './DriverTypeForms/UserDriverForm'
import DriverRegisterSecondStep from './DriverTypeForms/DriverRegisterSecondStep'
import DriverRegisterThirdStep from './DriverTypeForms/DriverRegisterThirdStep'

import UserCompanyForm from './CompanyTypeForms/UserCompanyForm'
import CompanyRegisterSecondStep from './CompanyTypeForms/CompanyRegisterSecondStep'
import TypeOfCompany from './CompanyTypeForms/TypeOfCompany';
import Error404Page from '../404/Error404Page'



const Root = styled('div')(({ theme }) => ({
  '& .PricingStyle3Page-header': {
    height: 500,//600 is default, length of blue header
    backgroundColor:"#000000",
    color: theme.palette.primary.contrastText,
  },
  '& .PricingStyle3Page-price': {
    backgroundColor: theme.palette.primary[600],//600 is default , the opacity f the banner in the cards
    color: theme.palette.getContrastText(theme.palette.primary[600]),
  },
}));



function UserType() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,//0.1 is default time between show
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 1 },//y decides which way they come from
    show: { opacity: 1, y: 0 },//y moves it down-0 is default
  };

///////////////////////////////////////////
//function area
let history = useHistory(); // used to redirect after submit
const routeParams= useParams()//to access url variable

const handleClick= e => {
  //clicking on this buttons means they want to be a driver
  //get user from url variable
  
  console.log("user info: "+routeParams.id)//not saved at this step
  if(e.target.id === "driver")
  {history.push(`/${routeParams.id}/usr-type/${e.target.id}`)}//push to the follow up registration page

  else if(e.target.id === "company")
  {history.push(`/${routeParams.id}/usr-type/${e.target.id}`)}
  else{console.log("This is not working at the moment")}
}

//////////////////////////////////////////




//////conditional rendering
/////////driver rendering
  if(routeParams.type == "driver" && !routeParams.step){//prep for type page
    return(<UserDriverForm/>)}
  if(routeParams.step && routeParams.type == "driver" ){
    if(routeParams.step === "2"){return(<DriverRegisterSecondStep/>)}  
    if(routeParams.step === "3"){return(<DriverRegisterThirdStep/>)}}
///////////
///////////company rendering
  if(routeParams.type == "company" && !routeParams.step){
    //make a form before that will direct to company type or comp-driver
    return(<TypeOfCompany/>)
  }
  if(routeParams.step && routeParams.type == "company" ){
    if(routeParams.step === "1"){return(<UserCompanyForm/>)}
    if(routeParams.step === "2"){return(<CompanyRegisterSecondStep/>)} }
////////////////
/////////////Company Driver rendering 
  if(routeParams.step && routeParams.type == "comp-driver" ){
    if(routeParams.step === "1"){return(<UserDriverForm/>)}
    if(routeParams.step === "2"){return(<DriverRegisterSecondStep/>)}  
    if(routeParams.step === "3"){return(<DriverRegisterThirdStep/>)}
    if(routeParams.step === "4"){return(<UserCompanyForm/>)}
    if(routeParams.step === "5"){return(<CompanyRegisterSecondStep/>)}}
  







//////////////////////
////// render more buttons within the card
//instead of button redirecting change true/false flag taht creates more buttons that will redirect
//step screens needs to clarify in what step they are in out of how many
//allow users entry into dashboard sooner, and add a redirect button to dasahboard
if(!routeParams.type && !routeParams.step){return (
    <Root className="w-full">
      <div className="PricingStyle3Page-header flex">
        <div className="p-24 w-full max-w-2xl mx-auto">
          <div className="text-center my-128 mx-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}//0,40 is default, animates the title
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            >
              <Typography color="inherit" className="font-Regular text-32 md:text-52">
                Choose Your Subscription!
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <Typography color="inherit" className="text-16 opacity-75 mt-16 mx-auto max-w-512">
              The most advanced Load & Hauling Ticketing Solution with simple and affordable pricing. 
              Try it for 30 days in our free trial
              </Typography>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="-mt-192">
        <div className="w-full max-w-2xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex items-center justify-center flex-wrap"
          >
            <motion.div variants={item} className="w-full max-w-320 sm:w-1/3 p-12">
              <Card className="relative rounded-16">
                <div className="p-32 text-center">
                  <Typography className="text-32 font-Regular">Driver</Typography>
                  <Typography color="textSecondary" className="text-16 font-Regular">
                    Driver Under a Company
                  </Typography>
                </div>

                <CardContent className="text-center p-0">
                  <div className="PricingStyle3Page-price flex items-end justify-center py-16 px-32">
                    <div className="flex justify-center">
                      <Typography color="inherit" className="font-Regular">
                        $
                      </Typography>
                      <Typography
                        color="inherit"
                        className="text-32 mx-4  tracking-tight font-Regular leading-none"
                      >
                        9.95
                      </Typography>
                    </div>
                    <div>
                    <Typography color="inherit" className="mx-4 font-Regular">monthly</Typography>
                    <Typography color="inherit" className="mx-4 font-Regular">per user</Typography>
                    </div>
                  </div>

                  <div className="flex flex-col p-32">
                  
                      <ul>Driver: </ul>
                      <li> Haul Ticketing</li>
                      <li> Job Board</li>
                      <li> Paycheck Advance</li>
                        <li> Pre Trip Inspection</li>
                        <li> Post Trip Inspection</li>
                      
                      
                 
                    <Typography color="textSecondary" className="mb-16">
                      Unlimited pages
                    </Typography>
                    <Typography color="textSecondary" className="mb-16">
                      Unlimited disk space
                    </Typography>
                    <Typography color="textSecondary">24 / 7 Free support</Typography>
                  </div>
                </CardContent>

                <div className="flex flex-col items-center justify-center pb-32 px-32">{/*///////////////////////////////////////////////////////////////*/}
                  <Button variant="outlined" className="w-full" id ="driver" onClick={(e) => handleClick(e)}>
                    Driver Button
                  </Button>
                  <Typography color="textSecondary" className="mt-16">
                    7 day free trial to start
                  </Typography>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item} className="w-full max-w-320 sm:w-1/3 p-12">
              <Card className="relative rounded-16" raised>
                <div className="p-32 text-center">
                  <Typography className="text-32 font-Regular">Company</Typography>
                  <Typography color="textSecondary" className="text-16 font-Regular">
                    Create a Company 
                  </Typography>
                </div>

                <CardContent className="text-center p-0">
                  <div className="PricingStyle3Page-price flex items-end justify-center py-16 px-32">
                    <div className="flex justify-center">
                      <Typography color="inherit" className="font-Regular">
                        $
                      </Typography>
                      <Typography
                        color="inherit"
                        className="text-32 mx-4  tracking-tight font-Regular leading-none"
                      >
                        74.95
                      </Typography>
                    </div>
                    <div>
                    <Typography color="inherit" className="mx-4 font-Regular"> monthly </Typography>
                     <Typography color="inherit" className="mx-4 font-Regular"> up to 50 users</Typography>
                    </div>
                  </div>

                  <div className="flex flex-col p-32">
                    
                     <ul>Independent Operator:</ul> 
                        <li>Self employed</li>
                        <li>Only driver of the Company</li>
                        <li>Can be hired by other companies to work for them</li>
                    
                      
                        <ul>Enterprise:</ul> 
                        <li>Invites Drivers and Independent Operators</li>
                        
                    <Typography color="textSecondary" className="mb-16">
                      Unlimited disk space
                    </Typography>
                    <Typography color="textSecondary">24 / 7 Free support</Typography>
                    <Typography color="textSecondary">Advanced reporting</Typography>
                    <Typography color="textSecondary">Customizable interface</Typography>
                    <Typography color="textSecondary">CRM Integration</Typography>
                  </div>
                </CardContent>

                <div className="flex flex-col items-center justify-center pb-32 px-32">{/*/////////////////////////////////////////////////////////////////////////*/}
                <Button variant="outlined" className="w-full" id ="company" onClick={(e) => handleClick(e)}>
                    Company Button
                  </Button>
                  <Typography color="textSecondary" className="mt-16">
                    30 day free trial to start
                  </Typography>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item} className="w-full max-w-320 sm:w-1/3 p-12">
              <Card className="relative rounded-16">
                <div className="p-32 text-center">
                  <Typography className="text-32 font-Regular">Contractor</Typography>
                  <Typography color="textSecondary" className="text-16 font-Regular">
                    For big teams
                  </Typography>
                </div>

                <CardContent className="text-center p-0">
                  <div className="PricingStyle3Page-price flex items-end justify-center py-16 px-32">
                    <div className="flex justify-center">
                      <Typography color="inherit" className="font-Regular">
                        $
                      </Typography>
                      <Typography
                        color="inherit"
                        className="text-32 mx-4  tracking-tight font-Regular leading-none"
                      >
                        34.95
                      </Typography>
                    </div>
                    <div>
                    <Typography color="inherit" className="mx-4 font-Regular"> monthly</Typography>
                    <Typography color="inherit" className="mx-4 font-Regular">up to 10 users</Typography>
                    </div>
                  </div>

                  <div className="flex flex-col p-32">
                    <Typography color="textSecondary" className="mb-16">
                      Unlimited projects
                    </Typography>
                    <Typography color="textSecondary" className="mb-16">
                      Unlimited pages
                    </Typography>
                    <Typography color="textSecondary" className="mb-16">
                      Unlimited disk space
                    </Typography>
                    <Typography color="textSecondary">For full feature list, call us</Typography>
                  </div>
                </CardContent>

                <div className="flex flex-col items-center justify-center pb-32 px-32">
                  <Button variant="outlined" className="w-full">
                    Call Us
                  </Button>
                  <Typography color="textSecondary" className="mt-16">
                    90 day free trial to start
                  </Typography>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">
              Frequently Asked Questions
            </Typography>

            <div className="flex flex-wrap w-full">
              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">How does free trial work?</Typography>
                <Typography className="text-16" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec
                  augue tincidunt accumsan. In dignissim laoreet ipsum eu interdum.
                </Typography>
              </div>

              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">Can I cancel any time?</Typography>
                <Typography className="text-16" color="textSecondary">
                  Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed
                  quis neque tellus. Donec maximus ipsum in malesuada hendrerit.
                </Typography>
              </div>

              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">What happens after my trial ended?</Typography>
                <Typography className="text-16" color="textSecondary">
                  Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed
                  quis neque tellus. Donec maximus ipsum in malesuada hendrerit.
                </Typography>
              </div>

              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">Can I have a discount?</Typography>
                <Typography className="text-16" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec
                  augue tincidunt accumsan. In dignissim laoreet ipsum eu interdum.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  )}
  else{return(<Error404Page/>)}
}

export default UserType;
