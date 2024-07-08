import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { constants } from "../../../../../constants";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import {IntlProvider,FormattedMessage} from 'react-intl'
import en from '../../../../../traducciones/en.json'
import {selectNavigation} from "app/store/fuse/navigationSlice";

//datos que se van a enviar al backend el nombre de cada dato pertenece a cada input
const defaultValues = {
  nombreactanac: "",
  fechannac: "",
  etnicidad: "",
  lugarnacimiento: "",
  raza: "",
  estatura: "",
  peso: "",
  colorojos: "",
  colorcabello: "",
  numeropasaporte: "",
  pais: "",
  nombremadre: "",
  nombrepadre: "",
  dirmadre: "",
  dirpadre: "",
  fechanacmadre: "",
  fechanacpadre: "",
  nompadrastro: "",
  nommadrastra: "",
  dirmadrastra: "",
  dirpadrastro: "",
  client_id: "",
  nombrehoja_id: "",
  //
  nomactanacimiento: "",
  diractanacimiento: "",
  feexpactanacimiento: "",
  nompasaporte: "",
  dirpasaporte: "",
  feexppasaporte: "",
  nomvisalaser: "",
  dirvisalaser: "",
  feexpvisalaser: "",
  nommatriculaconsular: "",
  dirmatriculaconsular: "",
  feexpmatriculaconsular: "",
  nomlicenciamatrimonio: "",
  dirlicenciamatrimonio: "",
  feexplicenciamatrimonio: "",
  nomactamatrimonio: "",
  diractamatrimonio: "",
  feexpactamatrimonio: "",
  nomtarjetaife: "",
  dirtarjetaife: "",
  feexptarjetaife: "",
  nomactdivorcio1: "",
  diractdivorcio1: "",
  feactdivorcio1: "",
  nomactdivorcio2: "",
  diractdivorcio2: "",
  feactdivorcio2: "",
  fechaactualizacion: new Date(),
};

//valida que se cumpla minimo este dato
const schema = yup.object().shape({
  nombreactanac: yup
    .string()
    .required("Por Favor Ingrese minimamente el acta de nacimiento"),
});

//funcion principal
function BlueSheet(props) {
  const [active, setActive] = useState(false);
  const product = useSelector(({ eCommerceApp }) => eCommerceApp.product);
  const pay = localStorage.getItem('result');
  const payload = JSON.parse(pay);
  console.log("paaaaaaaaaaaaay77", payload.token)
  
  const { handleSubmit, control, setValue, getValues, formState } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { isValid, dirtyFields } = formState;
  const datos = localStorage.getItem("datos");
  const datos_cliente = JSON.parse(datos);

  useEffect(async () => {
    if (props.props != 0) {
      handleUser(props.props);
      setActive(true);
    }
  }, []);

  async function handleUser(id) {
    try {
      // console.log("Datos enviados al backend blue sheet  ", id)
      const response = await axios.get(
        `${constants.URLLOCAL}/blue-sheet/${id}`, {headers: {'token' : localStorage.getItem('token')}}
      );
      const datos = await response.data[0];
      // console.log("Datos que retorna el backend que se guardaron en blue-sheet ", datos);

      const {
        nombreactanac,
        fechannac,
        etnicidad,
        lugarnacimiento,
        raza,
        estatura,
        peso,
        colorojos,
        colorcabello,
        numeropasaporte,
        pais,
        nombremadre,
        nombrepadre,
        dirmadre,
        dirpadre,
        fechanacmadre,
        fechanacpadre,
        nompadrastro,
        nommadrastra,
        dirmadrastra,
        dirpadrastro,
        client_id,
        nombrehoja_id,
        nomactanacimiento,
        diractanacimiento,
        feexpactanacimiento,
        nompasaporte,
        dirpasaporte,
        feexppasaporte,
        nomvisalaser,
        dirvisalaser,
        feexpvisalaser,
        nommatriculaconsular,
        dirmatriculaconsular,
        feexpmatriculaconsular,
        nomlicenciamatrimonio,
        dirlicenciamatrimonio,
        feexplicenciamatrimonio,
        nomactamatrimonio,
        diractamatrimonio,
        feexpactamatrimonio,
        nomtarjetaife,
        dirtarjetaife,
        feexptarjetaife,
        nomactdivorcio1,
        diractdivorcio1,
        feactdivorcio1,
        nomactdivorcio2,
        diractdivorcio2,
        feactdivorcio2,
      } = datos;

      setValue("nombreactanac", nombreactanac);
      setValue("fechannac", fechannac);
      setValue("etnicidad", etnicidad);
      setValue("lugarnacimiento", lugarnacimiento);
      setValue("raza", raza);
      setValue("estatura", estatura);
      setValue("peso", peso);
      setValue("colorojos", colorojos);
      setValue("colorcabello", colorcabello);
      setValue("numeropasaporte", numeropasaporte);
      setValue("pais", pais);
      setValue("nombremadre", nombremadre);
      setValue("nombrepadre", nombrepadre);
      setValue("dirmadre", dirmadre);
      setValue("dirpadre", dirpadre);
      setValue("fechanacmadre", fechanacmadre);
      setValue("fechanacpadre", fechanacpadre);
      setValue("nompadrastro", nompadrastro);
      setValue("nommadrastra", nommadrastra);
      setValue("dirmadrastra", dirmadrastra);
      setValue("dirpadrastro", dirpadrastro);
      setValue("client_id", client_id);
      setValue("nombrehoja_id", nombrehoja_id);
      setValue("nomactanacimiento", nomactanacimiento);
      setValue("diractanacimiento", diractanacimiento);
      setValue("feexpactanacimiento", feexpactanacimiento);
      setValue("nompasaporte", nompasaporte);
      setValue("dirpasaporte", dirpasaporte);
      setValue("feexppasaporte", feexppasaporte);
      setValue("nomvisalaser", nomvisalaser);
      setValue("dirvisalaser", dirvisalaser);
      setValue("feexpvisalaser", feexpvisalaser);
      setValue("nommatriculaconsular", nommatriculaconsular);
      setValue("dirmatriculaconsular", dirmatriculaconsular);
      setValue("feexpmatriculaconsular", feexpmatriculaconsular);
      setValue("nomlicenciamatrimonio", nomlicenciamatrimonio);
      setValue("dirlicenciamatrimonio", dirlicenciamatrimonio);
      setValue("feexplicenciamatrimonio", feexplicenciamatrimonio);
      setValue("nomactamatrimonio", nomactamatrimonio);
      setValue("diractamatrimonio", diractamatrimonio);
      setValue("feexpactamatrimonio", feexpactamatrimonio);
      setValue("nomtarjetaife", nomtarjetaife);
      setValue("dirtarjetaife", dirtarjetaife);
      setValue("feexptarjetaife", feexptarjetaife);
      setValue("nomactdivorcio1", nomactdivorcio1);
      setValue("diractdivorcio1", diractdivorcio1);
      setValue("feactdivorcio1", feactdivorcio1);
      setValue("nomactdivorcio2", nomactdivorcio2);
      setValue("diractdivorcio2", diractdivorcio2);
      setValue("feactdivorcio2", feactdivorcio2);
    } catch (error) {
      console.log(error);
    }
  }

  const mostrarAlerta = () => {
    Swal.fire({
      html:`<b class="letra" style="font-size: x-large">Sus datos se Guardaron Satisfactoriamente,</b><b class="letra" style="font-size: x-large">su cliente_id es: ${payload.id} </b> `,
      icon:'success',
      background:'#000',
      confirmButtonColor:'#008000'
    });
  };

  const mostrarAlertaActualizar = () => {
    Swal.fire({
      html:`<b class="letra" style="font-size: x-large">Sus datos se Actualizaron Satisfactoriamente,</b> <b class="letra" style="font-size: x-large">su cliente_id es: ${payload.id} </b>`,
      icon:'success',
      background:'#000',
      confirmButtonColor:'#008000',
      customClass:{
        closeButton:'button'
      }
    });
  };

  const mostrarAlertaError = () => {
    Swal.fire({
      html:'<b class="letra" style="font-size: x-large">Sus datos No se Actualizaron Satisfactoriamente</b>',
      icon:'error',
      background:'#000',
      confirmButtonColor:'#FF0000'
    });
  };
  const mostrarAlertaErrorGuardar = () => {
    Swal.fire({
      html:`<b class="letra" style="font-size: x-large">Sus datos se Guardaron Satisfactoriamente,</b> <b class="letra" style="font-size: x-large">su cliente_id es: ${payload.id} </b>`,
      icon:'error',
      background:'#000',
      confirmButtonColor:'#FF0000'
    });
  };
  // funcion que se conecta con el backend
  async function handleSaveBlue(data) {
    try {
      data.client_id = datos_cliente.id_user;
      // console.log("Datos enviados al backend hoja azul ", data)
      const response = await axios.post(
        `${constants.URLLOCAL}/blue-sheet/new`, 
        data,
        {headers: {'token' : localStorage.getItem('token')}}
      );
      const datos = await response.data;
      // console.log("Datos que retorna el backend que se guardaron en hoja azul ", datos);
      mostrarAlerta();
    } catch (error) {
      console.log(error);
      mostrarAlertaErrorGuardar()
    }
  }

  async function handleUpdateBlue() {
    try {
      const response = await fetch(
        `${constants.URLLOCAL}/blue-sheet/update/${props.props}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            'token': `${payload.token}`,
          },
          body: JSON.stringify(getValues()), // body data type must match "Content-Type" header
        }
      );
      mostrarAlertaActualizar();
    } catch (error) {
      console.log(error);
      mostrarAlertaError()
    }
  }

  //Obtiene los datos del formulario osea de cada input y
  //posteriormente envia los datos a la funcion handleSaveBlue() que se encuentra arriba
  function onSubmit(data) {
    handleSaveBlue(data);
    // handleUpdateBlue(data)
  }

  //Obtiene los datos del formulario osea de cada input y
  //posteriormente envia los datos a la funcion handleSaveBlue() que se encuentra arriba
  function onSubmit(data) {
    handleSaveBlue(data);
    // handleUpdateBlue(data)
  }

  const navigation = useSelector(selectNavigation);

  //Inicia todo el frontend que se va a mostrar
  return (
    <div
      className="flex flex-1 flex-col justify-center p-12"
      style={{ backgroundColor: "#91E9F7" }}
    >
      <Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div
              className="flex flex-1 flex-col p-6"
              style={{ backgroundColor: "#FFFFFF", borderRadius: "30px" }}
            >
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"
              >
                {navigation[32].title}
              </Typography>

              <div className="flex -mx-6">
                <Controller
                  name="nombreactanac"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}                     
                      className="mt-8 mb-16 mx-4"
                      label={navigation[33].title}
                      autoFocus
                      id="nombreactanac"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                /> 
                <Controller
                  name="fechannac"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[34].title}
                      id="fechannac"
                      variant="outlined"
                      fullWidth
                      // type='date'
                    />
                  )}
                />

                <Controller
                  name="lugarnacimiento"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[35].title}
                      id="lugarnacimiento"
                      variant="outlined"
                      fullWidth
                      // type='date'
                    />
                  )}
                />
              </div>

              <div className="flex -mx-6">
                <Controller
                  name="etnicidad"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[36].title}
                      id="etnicidad"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="raza"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[37].title}
                      id="raza"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </div>

              <div className="flex -mx-6">
                <Controller
                  name="colorojos"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[40].title}
                      id="colorojos"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="colorcabello"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[41].title}
                      id="colorcabello"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </div>

              <div className="flex -mx-6">
                <Controller
                  name="estatura"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[38].title}
                      id="estatura"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="peso"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[39].title}
                      id="peso"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </div>

              <div className="flex -mx-6">
                <Controller
                  name="numeropasaporte"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      id="numeropasaporte"
                      label={navigation[42].title}
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="pais"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[43].title}
                      id="pais"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </div>

              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"
              >
                {navigation[44].title}
              </Typography>

              <div className="flex -mx-6">
                <Controller
                  name="nombremadre"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[45].title}
                      id="nombremadre"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="fechanacmadre"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[50].title}
                      id="fechanacmadre"
                      variant="outlined"
                      fullWidth
                      // type="date"
                    />
                  )}
                />

                <Controller
                  name="dirmadre"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[46].title}
                      id="dirmadre"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </div>

              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"
              >
                {navigation[47].title}
              </Typography>
              <div className="flex -mx-6">
                <Controller
                  name="nombrepadre"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[48].title}
                      id="nombrepadre"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="fechanacpadre"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[51].title}
                      id="fechanacpadre"
                      variant="outlined"
                      size=""
                      fullWidth
                      // type="date"
                    />
                  )}
                />

                <Controller
                  name="dirpadre"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[49].title}
                      id="dirpadre"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />
              </div>

              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"
              >
                {navigation[83].title}
              </Typography>

              <div className="flex -mx-6">
                <Controller
                  name="nommadrastra"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[53].title}
                      id="nommadrastra"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="dirmadrastra"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[54].title}
                      id="dirmadrastra"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />
              </div>

              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"
              >
                {navigation[84].title}
              </Typography>
              <div className="flex -mx-6">
                <Controller
                  name="nompadrastro"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[52].title}
                      id="nompadrastro"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="dirpadrastro"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[55].title}
                      id="dirpadrastro"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />
              </div>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"
              >
                {navigation[85].title}
                
              </Typography>

              <div className="flex -mx-6">
                <Controller
                  name="nomactanacimiento"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[56].title}
                      id="nomactanacimiento"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="diractanacimiento"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[57].title}
                      id="diractanacimiento"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="feexpactanacimiento"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[58].title}
                      id="feexpactanacimiento"
                      variant="outlined"
                      size=""
                      fullWidth
                      // type="date"
                    />
                  )}
                />
              </div>

              <div className="flex -mx-6">
                <Controller
                  name="nompasaporte"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[59].title}
                      id="nompasaporte"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="dirpasaporte"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[60].title}
                      id="dirpasaporte"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="feexppasaporte"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[61].title}
                      id="feexppasaporte"
                      variant="outlined"
                      size=""
                      fullWidth
                      // type="date"
                    />
                  )}
                />
              </div>

              <div className="flex -mx-6">
                <Controller
                  name="nomvisalaser"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[62].title}
                      id="nomvisalaser"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="dirvisalaser"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[63].title}
                      id="dirvisalaser"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="feexpvisalaser"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[64].title}
                      id="feexpvisalaser"
                      variant="outlined"
                      size=""
                      fullWidth
                      // type="date"
                    />
                  )}
                />
              </div>

              <div className="flex -mx-6">
                <Controller
                  name="nommatriculaconsular"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[65].title}
                      id="nommatriculaconsular"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="dirmatriculaconsular"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[66].title}
                      id="dirmatriculaconsular"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="feexpmatriculaconsular"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[67].title}
                      id="feexpmatriculaconsular"
                      variant="outlined"
                      size=""
                      fullWidth
                      // type="date"
                    />
                  )}
                />
              </div>

              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"
              >
                {navigation[86].title}
              </Typography>

              <div className="flex -mx-6">
                <Controller
                  name="nomlicenciamatrimonio"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[68].title}
                      id="nomlicenciamatrimonio"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="dirlicenciamatrimonio"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[69].title}
                      id="dirlicenciamatrimonio"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="feexplicenciamatrimonio"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[70].title}
                      id="feexplicenciamatrimonio"
                      variant="outlined"
                      size=""
                      fullWidth
                      // type="date"
                    />
                  )}
                />
              </div>

              <div className="flex -mx-6">
                <Controller
                  name="nomactamatrimonio"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[71].title}
                      id="nomactamatrimonio"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="diractamatrimonio"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[72].title}
                      id="diractamatrimonio"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="feexpactamatrimonio"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[73].title}
                      id="feexpactamatrimonio"
                      variant="outlined"
                      size=""
                      fullWidth
                      // type="date"
                    />
                  )}
                />
              </div>

              <div className="flex -mx-6">
                <Controller
                  name="nomtarjetaife"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[74].title}
                      id="nomtarjetaife"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="dirtarjetaife"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[75].title}
                      id="dirtarjetaife"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="feexptarjetaife"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[76].title}
                      id="feexptarjetaife"
                      variant="outlined"
                      size=""
                      fullWidth
                      // type="date"
                    />
                  )}
                />
              </div>

              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"
              >
                {navigation[87].title}
              </Typography>

              <div className="flex -mx-6">
                <Controller
                  name="nomactdivorcio1"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[77].title}
                      id="nomactdivorcio1"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="diractdivorcio1"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[78].title}
                      id="diractdivorcio1"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="feactdivorcio1"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[79].title}
                      id="feactdivorcio1"
                      variant="outlined"
                      size=""
                      fullWidth
                      // type="date"
                    />
                  )}
                />
              </div>

              <div className="flex -mx-6">
                <Controller
                  name="nomactdivorcio2"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[80].title}
                      id="nomactdivorcio2"
                      variant="outlined"
                      size=""
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="diractdivorcio2"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[81].title}
                      id="diractdivorcio2"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="feactdivorcio2"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[82].title}
                      id="feactdivorcio2"
                      variant="outlined"
                      fullWidth
                      // type="date"
                    />
                  )}
                />
              </div>
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
                  onClick={handleUpdateBlue}
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
                  onClick={handleSaveBlue}
                >
                  {navigation[31].title}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Grid>
    </div>
  );
}

export default BlueSheet;
