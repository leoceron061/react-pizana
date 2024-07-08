import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Resend() {
  
 
  return (
    <div className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center p-16 sm:p-32 text-center">
              <img className="w-128 m-32" src="assets/images/logos/logo1pizaña.png" alt="logo" />

              <Typography color="textSecondary" className="max-w-288">
                 Unfortunately your invite link has expired. We have sent you another invite link.
              </Typography>
              
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default Resend;
