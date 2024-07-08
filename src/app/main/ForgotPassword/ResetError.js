import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ResetError() {
  
 
  return (
    <div className="flex flex-col flex-auto items-center justify-center  sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div initial={{ opacity: 10, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
        <Card className="w-full max-w-384 " style={{backgroundColor:"black"}}  >
            <CardContent  className="flex flex-col items-center justify-center p-1 sm:p-10 text-center">
              <img className="w-128 m-32" src="assets/images/logos/pizana.png" alt="logo" />

              <Typography color="white" className="max-w-288">
                 Unfortunately your link has expired. 
              </Typography>
              
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default ResetError;
