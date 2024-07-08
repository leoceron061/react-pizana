import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

import {useHistory, useParams } from 'react-router-dom';
import { TextField } from '@mui/material';


import Error404Page from '../404/Error404Page'
import GeneralRegister from './GeneralRegister'
import CompanyRegisterFirstStep from './CompanyRegisterForms/CompanyRegisterFirstStep';
import CompanyRegisterSecondStep from './CompanyRegisterForms/CompanyRegisterSecondStep';

import store from '../ID_store/store'

const Root = styled('div')(({ theme }) => ({
  '& .PricingStyle3Page-header': {
    backgroundColor:"000000",
  },
  '& .PricingStyle3Page-price': {
    backgroundColor:"#edca33",
  },
}));



function SubscriptionView() {
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
  if(e.target.id === "company")
  {history.push(`/subscription/${e.target.id}`)}
  else{console.log("This is not working at the moment")}
}


//////conditional rendering
if(routeParams.type == "admin")
{console.log(store.getState())
    if(!store.getState().id && !routeParams.step)
        {return(<GeneralRegister/>)}
    if(routeParams.step)
    {
      if(routeParams.step == '1'){return <CompanyRegisterFirstStep/>}
      if(routeParams.step == '2'){return <CompanyRegisterSecondStep/>}

    }

}


//////////////////////

////// render more buttons within the card
//instead of button redirecting change true/false flag taht creates more buttons that will redirect
//step screens needs to clarify in what step they are in out of how many
//allow users entry into dashboard sooner, and add a redirect button to dasahboard
if(!routeParams.type && !routeParams.step){return (
    <Root  className="w-full" >
      <div  style={{backgroundColor:"#000000"}}  className="PricingStyle3Page-header flex">
        <div style={{backgroundColor:"#000000"}}className="p-24 w-full max-w-2xl mx-auto" >
          <div style={{backgroundColor:"#000000"}}className="text-center my-128 mx-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}//0,40 is default, animates the title
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            >
              <Typography color="#edca33" className="font-Regular text-32 md:text-52">
                Choose Your Subscription!
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <Typography color="white" className="text-16 opacity-75 mt-16 mx-auto max-w-512">
              The most advanced Load & Hauling Ticketing Solution with simple and affordable pricing. 
              Try it for 30 days in our free trial
              </Typography>
            </motion.div>
          </div>
        </div>
      </div>
<br></br>
<br></br>
<br></br>
<br></br>
     
      <div className="-mt-192">
        <div className="w-full max-w-2xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex items-center justify-center flex-wrap"
          >
            <motion.div variants={item} className="w-full max-w-320 sm:w-1/3 p-12">
              <Card className="relative rounded-16" raised>
                <div className="p-32 text-center">
                  <Typography className="text-32 font-Regular">Contractor</Typography>
                  <Typography color="textSecondary" className="text-16 font-Regular">
                    Driver Under a Company
                  </Typography>
                </div>

                <CardContent className="text-center p-0">
                  <div className="PricingStyle3Page-price flex items-end justify-center py-16 px-32">
                    <div className="flex justify-center">
                      <Typography color="inherit" className="font-bold">
                        $
                      </Typography>
                      <Typography
                        color="inherit"
                        className="text-32 mx-4  tracking-tight font-bold leading-none"
                      >
                        9.95
                      </Typography>
                    </div>
                    <div>
                    <Typography color="inherit" className="mx-4 font-Regular">monthly</Typography>
                    <Typography color="inherit" className="mx-4 font-Regular">per user</Typography>
                    </div>
                  </div>

                  <div className="flex flex-col p-32" >
                  
                      <ul className="text-left ">Driver: </ul>
                      <li className="text-justify"> Haul Ticketing</li>
                      <li className="text-justify ">Job Board</li>
                      <li className="text-justify"> Paycheck Advance</li>
                        <li className="text-justify "> Pre Trip Inspection</li>
                        <li className="text-justify"> Post Trip Inspection</li>
                      
                      
                 
                    <Typography color="textSecondary" className="text-justify">
                      Unlimited pages
                    </Typography>
                    
                    
                  </div>
                </CardContent>

                <div className="flex flex-col items-center justify-center pb-32 px-32">{/*///////////////////////////////////////////////////////////////*/}
                  <Button  variant="contained"  className="w-full" id ="contractor" 
 color="secondary" onClick={(e) => handleClick(e)}>
                    Contractor Button
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
                      <Typography color="inherit" className="font-bold">
                        $
                      </Typography>
                      <Typography
                        color="inherit"
                        className="text-32 mx-4  tracking-tight font-bold leading-none"
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
                    
                     <ul className="text-left ">Independent Operator:</ul> 
                        <li className="text-justify" >Self employed</li>
                        <li className="text-justify" > Only driver of the Company</li>
                        <li className="text-justify">Can be hired by other companies to work for them</li>
                    
                      
                        <ul className="text-justify">Enterprise:</ul> 
                        <li className="text-justify">Invites Drivers and Independent Operators</li>
                        
                    
                  </div>
                </CardContent>

                <div className="flex flex-col items-center justify-center pb-32 px-32">{/*/////////////////////////////////////////////////////////////////////////*/}
                <Button variant="contained" className="w-full" id ="company" color="secondary"
 onClick={(e) => handleClick(e)}>
                    Company Button
                  </Button>
                  <Typography color="textSecondary" className="mt-16">
                    30 day free trial to start
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

export default SubscriptionView
