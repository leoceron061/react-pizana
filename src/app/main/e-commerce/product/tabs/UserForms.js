import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { constants } from "../../../../../constants";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import * as React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { sendInvitacion, userVerify } from "../../../ForgotPassword/ForgotPasswordFunctions";
import { useDispatch, useSelector } from "react-redux";
import { selectNavigation } from "app/store/fuse/navigationSlice";
import { showMessage } from 'app/store/fuse/messageSlice';
import { makeStyles } from '@material-ui/core/styles';
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import 'react-phone-number-input/style.css'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(12, 4),
  },
  card: {
    height: '100%',
    width: '100%',
    minWidth: '250px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'left',
    border: '1px  black',
    borderRadius: '5px',
    textAlign: 'justify',
  },
  icon: {
    padding: theme.spacing(2, 0),
  },
  title: {
    padding: theme.spacing(2),
  },
  featureList: {
    padding: theme.spacing(2),
  },
}));

const defaultValues = {
  // client_id: "",
  nombrecliente: "",
  apellidocliente: "",
  fechacumpleanos: "",
  telefono: "",
  genero: "",
  email: "",
  contrasena: "",
  nombre_caso: "",
  descripcion_caso: "",
  user_type: "",
  user_preferencia: "",
  codigo_rossy: false,
  invitacion: false,
  country_code:"",
};
let datos = {};
// const schema = yup.object().shape({
//   nombrecliente: yup
//     .string()
//     .required("Por Favor Ingrese minimamente el ID del cliente "),
// });

function DeatilsForms(props) {

  const dispatch = useDispatch();
  // const [ activeupdated, setactiveupdated ]=useState(false);
  const [checked, setChecked] = React.useState(false);
  const [checkedinvi, setCheckedInvi] = React.useState(false);
  const pay = localStorage.getItem('result');
  const payload = JSON.parse(pay);
  console.log("paaaaaaaaaaaaay77", payload.id)
  const [value, setVal] = useState();
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChangeInvi = (event) => {
    setCheckedInvi(event.target.checked);
  };
  const history = useHistory();
  const [active, setActive] = useState(false);
  const { handleSubmit, control, setValue, getValues, reset } = useForm({
    mode: "onChange",
    defaultValues,
    // resolver: yupResolver(schema),
  });

  useEffect(async () => {
    if (props.props != 0) {
      handleUser(props.props);
      setActive(true);
    }
  }, []);

  async function handleUser(id) {
    try {
      const response = await axios.get(`${constants.URLLOCAL}/user/${id}`, { headers: { 'token': localStorage.getItem('token') } });
      const datos = await response.data[0];

      const {
        // client_id,
        nombrecliente,
        apellidocliente,
        fechacumpleanos,
        telefono,
        genero,
        email,
        contrasena,
        nombre_caso,
        descripcion_caso,
        codigo_rossy,
        invitacion,
        user_type,
        country_code,
      } = datos;

      // setValue("client_id", client_id);
      setValue("nombrecliente", nombrecliente);
      setValue("apellidocliente", apellidocliente);
      setValue("fechacumpleanos", fechacumpleanos);
      setValue("telefono", telefono);
      setValue("genero", genero);
      setValue("email", email);
      setValue("contrasena", contrasena);
      setValue("nombre_caso", nombre_caso);
      setValue("descripcion_caso", descripcion_caso);
      setValue("codigo_rossy", codigo_rossy);
      setValue("invitacion", invitacion);
      setValue("user_type", user_type);
      setValue("country_code", country_code);
    } catch (error) {
      console.log(error)
    }
  }
  const mostrarAlerta = () => {
    Swal.fire({
      html: `<b class="letra" style="font-size: x-large">Sus datos se Guardaron Satisfactoriamente,</b> <b class="letra" style="font-size: x-large">su cliente_id es: ${payload.id} </b>`,
      icon: 'success',
      background: '#000',
      confirmButtonColor: '#008000'
    });
  };

  const mostrarAlertaActualizar = () => {
    Swal.fire({
      html: `<b class="letra" style="font-size: x-large">Sus datos se Actualizaron Satisfactoriamente,</b> <b class="letra" style="font-size: x-large">su cliente_id es: ${payload.id} </b>`,
      icon: 'success',
      background: '#000',
      confirmButtonColor: '#008000'
    });
  };

  const mostrarAlertaError = () => {
    Swal.fire({
      html: '<b class="letra" style="font-size: x-large">Sus datos No se Actualizaron Satisfactoriamente</b>',
      icon: 'error',
      background: '#000',
      confirmButtonColor: '#FF0000'
    });
  };
  const mostrarAlertaErrorGuardar = () => {
    Swal.fire({
      html: '<b class="letra" style="font-size: x-large">Sus datos No se Guardaron Satisfactoriamente</b>',
      icon: 'error',
      background: '#000',
      confirmButtonColor: '#FF0000'
    });
  };
  async function handleSaveUser(data) {
    try {


      const resultado = await userVerify(data.email)


      if (resultado === true) {
        dispatch(
          showMessage({
            message: (
              "Correo ya registrado"
            ),//text or html
            autoHideDuration: 6000,//ms
            anchorOrigin: {
              vertical: 'top',//top bottom
              horizontal: 'right'//left center right
            },
            variant: 'success'//success error info warning null
          }))


      }
      else {
        const response = await axios.post(`${constants.URLLOCAL}/user/new`, data, { headers: { 'token': localStorage.getItem('token') } });
        datos = await response.data;
        const invitacion = await sendInvitacion(data)
        //reset(nombrecliente="",apellidocliente="",fechacumpleanos="",telefono="", genero="", email="", contrasena="", nombre_caso="", descripcion_caso="", user_type="", user_preferencia="", codigo_rossy= null, invitacion=null)
        mostrarAlerta();
      }

    } catch (error) {
      console.log(error);
      mostrarAlertaErrorGuardar()
    }
  }
  localStorage.setItem("datos", JSON.stringify(datos));


  async function handleUpdateUser() {

    try {

      const response = await fetch(

        `${constants.URLLOCAL}/user/update/${props.props}`,

        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            'token': `${payload.token}`,
          },
          body: JSON.stringify(getValues()),
        }

      );

      mostrarAlertaActualizar()
    } catch (error) {
      mostrarAlertaError()
    }
  }

  const onSubmit = async (data) => {
    handleSaveUser(data);

  };
  const classes = useStyles();
  const navigation = useSelector(selectNavigation);
  return (

    <div className="flex flex-1 flex-col justify-center p-24" style={{ backgroundColor: "#E2CAAE" }}>
      <Grid xs={12} alignItems="stretch">

        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ borderTop: "3px solid black", borderBottom: "3px solid black", borderLeft: "3px solid black", borderRight: "3px solid black", borderRadius: "20px" }}>
            <div className={classes.card} >

              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"

              >
                {navigation[14].title}
              </Typography>


              <div className="flex -mx-6">

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

                <Controller
                  name="nombrecliente"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[15].title}
                      autoFocus
                      id="nombrecliente"
                      variant="outlined"
                      fullWidth

                    />
                  )}
                />


                <Controller
                  name="apellidocliente"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[16].title}
                      autoFocus
                      id="apellidocliente"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />



              </div>
            </div>
            <div className="flex flex-1 flex-col  p-6" >
              <div className="flex -mx-6 ">

                <Controller
                  name="genero"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[17].title}
                      autoFocus
                      id="genero"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
                <Controller
                  name="country_code"
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      id="country_code"
                      style={{ width: "100px" }}
                      international
                      defaultCountry="US"
                      value={value} />
                  )}
                />
                <Controller
                  name="telefono"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      style={{ width: "500px" }}
                      className="mt-8 mb-16 mx-4 "
                      label={navigation[18].title}
                      autoFocus
                      id="telefono"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="fechacumpleanos"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[19].title}
                      autoFocus
                      id="fechacumpleanos"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

              </div>

            </div>
          </div>

          <br />
          <br />

          <div style={{ borderTop: "3px solid black", borderBottom: "3px solid black", borderLeft: "3px solid black", borderRight: "3px solid black", borderRadius: "30px" }}>
            <div className="flex flex-1 flex-col p-6" >
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"
              >
                {navigation[20].title}
              </Typography>

              <div className="flex -mx-6">
                <FormControl className="mt-8 mb-16" >
                  <FormLabel className="mx-12">{navigation[20].title}</FormLabel>
                  <Controller
                    name="user_type"
                    control={control}
                    render={({ field }) => (
                      <Select className="mt-6 mb-16 mx-2"{...field} variant="outlined" style={{ width: "300px" }} >
                        {/* 1 es activo---2 inactivo */}
                        <MenuItem key="1" value={"admin"}>{navigation[21].title}</MenuItem>
                        <MenuItem key="2" value={"cliente"}>{navigation[22].title}</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>

                <FormControl className="mt-8 mb-16" >
                  <FormLabel className="mx-12">Preference</FormLabel>
                  <Controller
                    name="user_preferencia"
                    control={control}
                    render={({ field }) => (
                      <Select className="mt-6 mb-16 mx-2"{...field} variant="outlined" style={{ width: "250px" }} >
                        {/* 1 es activo---2 inactivo */}
                        <MenuItem key="1" value={"es"}>Spanish</MenuItem>
                        <MenuItem key="2" value={"en"}>English</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>




                <Controller

                  name="codigo_rossy"
                  control={control}
                  render={({ field }) => (
                    <FormControl
                      {...field}
                      className="mt-8 mb-16 mx-2"
                      autoFocus
                      id="codigo_rossy"
                      variant="outlined"

                    >
                      <FormGroup>
                        <FormControlLabel
                          className="mt-1 mb-16 mx-2"
                          control={<Switch name="codigo_rossy" checked={checked} onChange={handleChange} />}
                          label={navigation[29].title}
                        />
                      </FormGroup>
                    </FormControl>
                  )}
                />


                <Controller
                  name="invitacion"
                  control={control}
                  render={({ field }) => (
                    <FormControl
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      autoFocus
                      id="invitacion"
                      variant="outlined"

                    >
                      <FormGroup>
                        <FormControlLabel
                          control={<Switch name="invitacion" checked={checkedinvi} onChange={handleChangeInvi} />}
                          label={navigation[23].title}
                        />
                      </FormGroup>
                    </FormControl>
                  )}
                />

              </div>
            </div>
          </div>



          <br />
          <br />
          <div style={{ borderTop: "3px solid black", borderBottom: "3px solid black", borderLeft: "3px solid black", borderRight: "3px solid black", borderRadius: "30px" }}>
            <div className="flex flex-1 flex-col p-6" >

              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"
              >
                {navigation[24].title}
              </Typography>

              <div className="flex -mx-6">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label="Email"
                      autoFocus
                      id="email"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="contrasena"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[25].title}
                      autoComplete='off'
                      id="contrasena"
                      variant="outlined"
                      type="password"
                      fullWidth
                    />
                  )}
                />
              </div>

            </div>
          </div>

          <br />
          <br />

          <div style={{ borderTop: "3px solid black", borderBottom: "3px solid black", borderLeft: "3px solid black", borderRight: "3px solid black", borderRadius: "30px" }}>
            <div className="flex flex-1 flex-col p-6" >

              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"
              >
                {navigation[26].title}
              </Typography>

              <div className="flex -mx-6">
                <Controller
                  name="nombre_caso"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[27].title}
                      autoFocus
                      id="nombre_caso"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

              </div>
              <div className="flex -mx-6">
                <Controller
                  name="descripcion_caso"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      id="descripcion_caso"
                      label={navigation[28].title}
                      type="text"
                      multiline
                      rows={5}
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <br />

          <div
            className="flex flex-grow flex-shrink-0 px-12 justify-end"
            style={{ alignSelf: "end" }}
          >
            <Button
              className="whitespace-nowrap mx-4"
              style={{ alignSelf: "end" }}
              variant="contained"
              color="secondary"
              disabled={!active}
              onClick={handleUpdateUser}
            >
              {navigation[30].title}
            </Button>

            <Button
              className="whitespace-nowrap mx-4"
              style={{ alignSelf: "end" }}
              variant="contained"
              color="secondary"
              type="submit"
              disabled={active}
              onClick={handleSaveUser}
            >
              {navigation[31].title}
            </Button>
          </div>

        </form>
      </Grid>

    </div>

  );
}

export default DeatilsForms;
