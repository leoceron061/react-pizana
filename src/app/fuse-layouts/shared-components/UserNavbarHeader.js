import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { FileUploader } from "react-drag-drop-files";
import { postImage } from "../../main/Register_v2/CompanyRegisterForms/CompanyRegisterFunctions";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import Dialog from "@mui/material/Dialog";
import store from "../../main/ID_store/store";
import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { constants } from "../../../constants";
import axios from "axios";
import Check_refresh from '../../Check_refresh';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  "& .username, & .email": {
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },

  "& .avatar": {
    background: theme.palette.background.secondary,
    transition: theme.transitions.create("all", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),

    bottom: 0,
    background: theme.palette.background.secondary,
    transition: theme.transitions.create("all", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
    "& > img": {
      borderRadius: "50%",
    },
  },
}));

function UserNavbarHeader(props) {
  const user = useSelector(({ auth }) => auth.user);
  const [logo, setLogo] = useState("");
  const {nombrecliente,email} = store.getState()

  useEffect(async () => {
    await Check_refresh();
    let key = store.getState().photo;
    let resp = await getS3Location(key);
    setLogo(resp?.data?.data?.fileLocation);
  }, [store.getState().photo]);

  const fileTypes = ["JPEG", "PNG", "JPG"];
  const [view, setView] = useState(false);

  const handleOpen = () => {
    setView(true);
  };

  const handleClose = () => {
    setView(false);
  };

  const getS3Location = async (key) => {
    if (key != null && key != "") {
      let data = {
        key: key,
      };
      return await getDataFromS3(data);
    }
  };

  const handleConvert = async (file) => {
    //convert to base 64 to display
    function readFileAsync() {
      return new Promise((resolve, reject) => {
        if (!file) {
          return;
        }
        const reader = new FileReader();
        const { id } = store.getState();
        reader.onload = async () => {
          const res = await postImage({
            baseString: `${btoa(reader.result)}`,
            company_id: id,
            fileType: "company",
            fileName: file.name.replace(/ /g, ""),
          });
          if (res.status) {
            let info = {
              id: id,
              logo: res.data.key,
            };
            updateCompanyLogo(info);
            let resp = await getS3Location(res.data.key);
            setLogo(resp.data.data.fileLocation);
            store.dispatch({ type: "PHOTO", payload: { photo: res.data.key } });
            handleClose();
          }
        };
        reader.onerror = reject;
        reader.readAsBinaryString(file);
      });
    }
    const newImage = await readFileAsync();
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  return (
    <StyledAppBar
      position="static"
      color="primary"
      className="user relative flex flex-col items-center justify-center pt-24 pb-64 mb-32 z-0 shadow-0"
    >
      <Typography
        className="username text-16 whitespace-nowrap font-Regular mb-4"
        color="inherit"
      >
      {nombrecliente}
      </Typography>
      <Typography
        className="email text-14 opacity-50 whitespace-nowrap font-Regular"
        color="inherit"
      >
      {email}
      </Typography>
      {/* <div className="flex items-center justify-center absolute bottom-0 -mb-44">
        <img
          onClick={handleOpen}
          className=" avatar w-96 h-72 p-8 box-content"
          alt="user photo"
          src={logo ? logo : "assets/images/avatars/profile.jpg"}
        />
        <Dialog open={view} onClose={handleClose}>
          <FileUploader
            children={
              <div>
                <Box
                  sx={{
                    width: 300,
                    height: 300,
                    border: "5px dashed lightblue",
                    borderRadius: 20,
                    pl: 10,
                    pr: 23,
                    pt: 20,
                    pb: 20,
                  }}
                >
                  <div className="flex flex-col sm:flex sm:flex-row pb-32">
                    <Icon color="action">add_photo_alternate</Icon> &nbsp;
                    <div>{fileTypes[0]}</div>
                    <div>,{fileTypes[1]} </div>
                    <div>,{fileTypes[2]} </div>
                  </div>
                </Box>
              </div>
            }
            handleChange={handleConvert}
            name="file"
            types={fileTypes}
          />
        </Dialog>
      </div> */}
      
    </StyledAppBar>
    



    
  );
}

export default UserNavbarHeader;
