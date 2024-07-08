import { styled } from "@mui/material/styles";
import FusePageSimple from "@fuse/core/FusePageSimple";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { motion } from "framer-motion";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material";
import Icon from "@mui/material/Icon";
import { Controller,  useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useState } from "react";
import store from "../../main/ID_store/store";
import Dialog from "@mui/material/Dialog";
import { FileUploader } from "react-drag-drop-files";
import Box from "@mui/material/Box";
import { postImage } from "../../main/Register_v2/CompanyRegisterForms/CompanyRegisterFunctions";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import {selectNavigation} from "app/store/fuse/navigationSlice";
import { useSelector } from "react-redux";


const Root = styled(FusePageSimple)(({ theme }) => ({
  "& .FusePageSimple-toolbar": {
    width: "100%",
    maxWidth: 1120,
    margin: "auto",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minHeight: "auto",
    height: "auto",
    aliginItesm: "flex-start",
  },
}));

const defaultValues = {
  user_fname: "",
  user_lname: "",
  id_cliente: "",
  email: "",
  phone: "",
  gender: "",
  birth: "",
};

function ProfilePage(props) {
  const [active, setActive] = useState(false);
  const [logo, setLogo] = useState("");
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const [view, setView] = useState(false);

  const handleOpen = () => {
    setView(true);
  };

  const handleClose = () => {
    setView(false);
  };

  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const {
    register,
    reset,
    handleSubmit,
    formState,
    getValues,
    setValue,
    control,
  } = useForm({
    mode: "onChange",
    defaultValues,
  });

  const dispatch = useDispatch();
  async function onSubmit(data) {
    console.log(data);
  }

  const fileTypes = ["JPEG", "PNG", "JPG", "PDF"];
  /************************************************* */

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
  const navigation = useSelector(selectNavigation);

  return (
    <div
      className="flex flex-1 flex-col justify-center p-24"
      style={{ backgroundColor: "#E3D3C6" }}
    >
      <Grid>
        <form>
          <div
            style={{
              borderTop: "3px solid black",
              borderBottom: "3px solid black",
              borderLeft: "3px solid black",
              borderRight: "3px solid black",
              borderRadius: "20px",
            }}
          >
            <div className="flex flex-1 flex-col p-6">
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 px-96 mx-96"
                color="black"
              >
                {navigation[168].title}
              </Typography>

              <div className="flex -mx-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, transition: { delay: 0.1 } }}
                >
                  <Avatar
                    sx={{
                      borderWidth: 4,
                      borderStyle: "solid",
                      borderColor: "background.default",
                    }}
                    className="-mt-64 ml-24 w-128 h-128 rounded-none"
                  >
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
                                <Icon color="action">add_photo_alternate</Icon>{" "}
                                &nbsp;
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
                  </Avatar>
                </motion.div>

                {/* <Controller
            name="client_id"
            control={control}
            render={({ field }) => (
              <TextField
                className="mt-32 mb-16 mx-4"
                {...field}
                style={{ width: "999px" }}
                label="Cliente ID"
                autoFocus
                id="client_id"
                variant="outlined"
                type="number"
                fullWidth
                required
              />
            )}
          /> */}

                <FormControl className="w-3/5">
                  <Controller
                    name="nombrecliente"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mt-8 mb-16 mx-4"
                        label={navigation[169].title}
                        autoFocus
                        id="nombrecliente"
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  />
                </FormControl>

                <FormControl className="w-3/5 mx-6"></FormControl>
              </div>
            </div>
            <div className="flex flex-1 flex-col  px-96 ">
              <div className="flex -mx-36 w-full ">
                <FormControl className="w-full">
                  <InputLabel className="mx-96">
                  {navigation[170].title}
                  </InputLabel>
                  <Controller
                    name="apellidocliente"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mt-8 mb-16 mx-96 w-10/12"
                        autoFocus
                        id="apellidocliente"
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  />
                </FormControl>
                <FormControl className="w-3/5"></FormControl>
              </div>
            </div>

            <div className="flex flex-1 flex-col  px-96 ">
              <div className="flex -mx-36 w-full ">
                <FormControl className="w-full">
                  <InputLabel className="mx-96">{navigation[171].title}</InputLabel>
                  <Select
                    className="mt-8 mb-16 mx-96 w-10/12"
                    placeholder="Genero"
                    id="gender"
                    labelId="select-label"
                    label="Genero"
                    variant="outlined"
                  >
                    <MenuItem value={"Masculino"}>{navigation[172].title}</MenuItem>
                    <MenuItem value={"Femenino"}>{navigation[173].title}</MenuItem>
                  </Select>
                </FormControl>

                <FormControl className="w-3/5"></FormControl>
              </div>
            </div>

            <div className="flex flex-1 flex-col  px-96 ">
              <div className="flex -mx-36 w-full ">
                <FormControl className="w-full">
                  <InputLabel className="mx-96">{navigation[174].title}</InputLabel>
                  <Controller
                    name="fechacumpleanos"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mt-8 mb-16 mx-96 w-10/12"
                        autoFocus
                        id="fechacumpleanos"
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  />
                </FormControl>

                <FormControl className="w-3/5"></FormControl>
              </div>
            </div>

            <div className="flex flex-1 flex-col  px-96 ">
              <div className="flex -mx-36 w-full ">
                <FormControl className="w-full">
                  <InputLabel className="mx-96">{navigation[175].title}</InputLabel>
                  <Controller
                    name="telefono"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mt-8 mb-16 mx-96 w-10/12"
                        autoFocus
                        id="telefono"
                        variant="outlined"
                      />
                    )}
                  />
                </FormControl>

                <FormControl className="w-3/5"></FormControl>
              </div>
            </div>

            <div
              className="flex flex-grow mt-8 mb-16 px-8 justify-center"
              style={{ alignSelf: "center" }}
            >
              <Button
                className="whitespace-nowrap  mx-4"
                style={{ alignSelf: "center" }}
                variant="contained"
                color="secondary"
                disabled={!active}
                // onClick={handleUpdateUser}
              >
                {navigation[30].title}
              </Button>

              <Button
                className="whitespace-nowrap mx-4"
                style={{ alignSelf: "center" }}
                variant="contained"
                color="secondary"
                type="submit"
                disabled={active}
                // onClick={handleSaveUser}
              >
                {navigation[31].title}
              </Button>
            </div>
          </div>
        </form>
      </Grid>
    </div>
  );
}

export default ProfilePage;
