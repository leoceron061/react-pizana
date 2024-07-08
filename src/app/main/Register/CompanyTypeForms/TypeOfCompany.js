import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import {useHistory, useParams } from 'react-router-dom';

import _ from '@lodash';

function TypeOfCompany() {

    let history = useHistory()
    const routeParams= useParams()


    const handleClick= e => {
        if(e.target.id === "independent")
        {history.push(`/${routeParams.id}/usr-type/comp-driver/1`)}//push to the follow up registration page
        if(e.target.id === "enterprise")
        {history.push(`/${routeParams.id}/usr-type/company/1`)}
      }





  return (
    <div className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32">
              <img className="w-128 m-32" src="assets/images/logos/stah_logo2.png" alt="logo" />

              <Typography variant="h6" className="mt-16 mb-24 font-Regular text-18 sm:text-24">
                Choose Your Company Structure
              </Typography>

             
                
                <Button
                  variant="contained"
                  color="third"
                  className="w-224 mx-auto mt-16"
                  aria-label="Reset"
                  id ="independent" 
                  onClick={(e) => handleClick(e)}
                >
                  Independent Driver 
                </Button>
      

                <Button
                  variant="contained"
                  color="third"
                  className="w-224 mx-auto mt-16"
                  aria-label="Reset"
                  id ="enterprise" 
                  onClick={(e) => handleClick(e)}
                >
                Enterpise
                </Button>
              

              <div className="flex flex-col items-center justify-center pt-32 pb-24">
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default TypeOfCompany;
