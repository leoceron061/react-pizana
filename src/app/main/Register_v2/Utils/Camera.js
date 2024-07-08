import React, {forwardRef} from 'react'
import Webcam from "react-webcam";
import Button from '@mui/material/Button';



const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

const Camera = React.forwardRef((props, ref)=> (
  
    <div >
      <Webcam
        audio={false}
        height={720}
        ref = {ref}
        screenshotFormat="image/*"
        width={1280}
        videoConstraints={videoConstraints}
      />
        <span>
          <Button className="w-200 mx-auto " variant="outlined" onClick={props.handleClick}>Capture photo</Button>
          <Button className="w-150 mx-auto" variant="outlined" onClick={()=>{props.setTakePic(false)}}> Close</Button>
        </span>
    </div>
  ))



    


export default Camera

