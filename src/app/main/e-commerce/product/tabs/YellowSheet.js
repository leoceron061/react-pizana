import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Divider, Fab, Tooltip } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";
import { constants } from "../../../../../constants";
import Grid from "@mui/material/Grid";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Swal from "sweetalert2";
import {selectNavigation} from "app/store/fuse/navigationSlice";
import { useDispatch, useSelector } from "react-redux";
import "./BlueSheet.css"
const defaultValues = {
  nombreesposoactual: "",
  fechadenacesposo: "",
  lugardenacesposo: "",
  domicilioactualesposo: "",
  lugardeempleoesposo: "",
  nombreprevioesposo: "",
  fechadematrimonio: "",
  lugardematrimonio: "",
  numerohijosjuntos: "",
  numerohijastros: "",
  numeromatrimoniosesposo: "",
  numerodivorciosesposo: "",
  lugardedivorcioesposo: "",
  fechadivorcioesposo: "",
  estatusmigracionesposo: "",
  numeroalienesposo: "",
  aliases: "",
  pasado_marital: "",
};

// const schema = yup.object().shape({
//   nombreesposoactual: yup
//     .string()
//     .required(
//       "Por Favor Ingrese minimamente el nombre de su Esposo(a) actual "
//     ),
// });

function YellowSheet(props, { id, jsonGetById }) {
  const datos = localStorage.getItem("datos");
  const datos_cliente = JSON.parse(datos);
  const [active, setActive] = useState(false);
  const { handleSubmit, control, setValue, getValues, formState } = useForm({
    mode: "onChange",
    defaultValues,
    // resolver: yupResolver(schema),
  });
  const pay = localStorage.getItem('result');
  const payload = JSON.parse(pay);
  console.log("paaaaaaaaaaaaay77", payload.id)
  const { isValid, dirtyFields } = formState;

  // if(props.props!=0)
  //  {
  //    console.log("entro props")
  //    handleUser(props.props);
  //    // setactiveupdated(true)
  //  }
  useEffect(async () => {
    if (props.props != 0) {
      handleUser(props.props);
      setActive(true);
    }
  }, []);

  async function handleUser(id) {
    try {
      const response = await axios.get(
        `${constants.URLLOCAL}/yellow-sheet/${id}`, {headers: {'token' : localStorage.getItem('token')}}
      );
      const datos = await response.data[0];

      const {
        nombreesposoactual,
        fechadenacesposo,
        lugardenacesposo,
        domicilioactualesposo,
        lugardeempleoesposo,
        nombreprevioesposo,
        fechadematrimonio,
        lugardematrimonio,
        numerohijosjuntos,
        numerohijastros,
        numeromatrimoniosesposo,
        numerodivorciosesposo,
        lugardedivorcioesposo,
        fechadivorcioesposo,
        estatusmigracionesposo,
        numeroalienesposo,
        aliases,
        pasado_marital,
        //client_id,
      } = datos;

      setValue("nombreesposoactual", nombreesposoactual);
      setValue("fechadenacesposo", fechadenacesposo);
      setValue("lugardenacesposo", lugardenacesposo);
      setValue("domicilioactualesposo", domicilioactualesposo);
      setValue("lugardeempleoesposo", lugardeempleoesposo);
      setValue("nombreprevioesposo", nombreprevioesposo);
      setValue("fechadematrimonio", fechadematrimonio);
      setValue("lugardematrimonio", lugardematrimonio);
      setValue(" numerohijosjuntos", numerohijosjuntos);
      setValue("numerohijastros", numerohijastros);
      setValue("numeromatrimoniosesposo", numeromatrimoniosesposo);
      setValue("numerodivorciosesposo", numerodivorciosesposo);
      setValue("lugardedivorcioesposo", lugardedivorcioesposo);
      setValue("fechadivorcioesposo", fechadivorcioesposo);
      setValue("estatusmigracionesposo,", estatusmigracionesposo);
      setValue("numeroalienesposo", numeroalienesposo);
      setValue("aliases", aliases);

      if (pasado_marital && pasado_marital.length >= 1) {
        setInputmarital(pasado_marital);
        setValue("pasado_marital", pasado_marital);
      }
      // setValue(' client_id ',  client_id )
    } catch (error) {
      console.log(error);
    }
  }

  const [marital, setInputmarital] = useState([
    {
      id: uuidv4(),
      nombreexesposo: "",
      estatusmigracionexesposo: "",
      fechanacimientoexesposo: "",
      paisnacimientoexesposo: "",
      fechamatrimonioexesposo: "",
      fechadedivorcioexesposo: "",
      terminacionmatrimonioant: "",
    },
  ]);

  const handleChangemarital = (id, event) => {
    const newInputFields = marital.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setInputmarital(newInputFields);
  };

  const handleAddmarital = () => {
    setInputmarital([
      ...marital,
      {
        id: uuidv4(),
        nombreexesposo: "",
        estatusmigracionexesposo: "",
        fechanacimientoexesposo: "",
        paisnacimientoexesposo: "",
        fechamatrimonioexesposo: "",
        fechadedivorcioexesposo: "",
        terminacionmatrimonioant: "",
      },
    ]);
    setValue("pasado_marital", marital);
  };

  const handleRemovemarital = (id) => {
    const values = [...marital];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputmarital(values);
    setValue("pasado_marital", values);
  };

  const mostrarAlerta = () => {
    Swal.fire({
      html:`<b class="letra" style="font-size: x-large">Sus datos se Guardaron Satisfactoriamente,</b> <b class="letra" style="font-size: x-large">su cliente_id es: ${payload.id} </b>`,
      icon:'success',
      background:'#000',
      confirmButtonColor:'#008000'
    });
  };

  const mostrarAlertaActualizar = () => {
    Swal.fire({
      html:`<b class="letra" style="font-size: x-large">Sus datos se Actualizaron Satisfactoriamente,</b> <b class="letra" style="font-size: x-large">su cliente_id es: ${payload.id} </b>`,
      // text:'Id_user'+`${payload.id}`,
      icon:'success',
      background:'#000',
      confirmButtonColor:'#008000',
      confirmButton:'button',

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
      html:'<b class="letra" style="font-size: x-large">Sus datos No se Guardaron Satisfactoriamente</b>',
      icon:'error',
      background:'#000',
      confirmButtonColor:'#FF0000'
    });
  };
  // funcion que se conecta con el backend de yellow sheet
  async function handleSaveYellow(data) {
    try {
      data.client_id = datos_cliente.id_user;
      const response = await axios.post(
        `${constants.URLLOCAL}/yellow-sheet/new`,
        data,
        {headers: {'token' : localStorage.getItem('token')}}
      );
      const datos = await response.data[0];
      mostrarAlerta();
    } catch (error) {
      console.log(error);
      mostrarAlertaErrorGuardar()
    }
  }

  async function handleUpdateYellow() {
    try {
      const response = await fetch(
        `${constants.URLLOCAL}/yellow-sheet/update/${props.props}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            'token': `${payload.token}`,
          },
          body: JSON.stringify(getValues()), // body data type must match "Content-Type" header
        }
      );
      mostrarAlertaActualizar()
    } catch (error) {
      console.log(error);
      mostrarAlertaError()
    }
  }

  function onSubmit(data) {
    handleSaveYellow(data);
    //handleUpdateYellow(data);
  }
  const navigation = useSelector(selectNavigation);

  return (
    <div
      className="flex flex-1 flex-col justify-center p-12"
      style={{ backgroundColor: "#FFF176" }}
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
               {navigation[88].title}
              </Typography>

              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"
              >
                {navigation[89].title}
              </Typography>

              <div className="flex -mx-6">
                <Controller
                  name="nombreesposoactual"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[90].title}
                      id="nombreesposoactual"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="fechadenacesposo"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[91].title}
                      id="fechadenacesposo "
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="lugardenacesposo"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[92].title}
                      id="lugardenacesposo"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </div>
              <div className="flex -mx-6">
                <Controller
                  name="domicilioactualesposo"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[93].title}
                      id="domicilioactualesposo"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
                <Controller
                  name="lugardeempleoesposo"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[94].title}
                      id="lugarDeEmpleoEsposo"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
                <Controller
                  name="nombreprevioesposo"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      style={{ backgroundColor: "#FFFFFF" }}
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[95].title}
                      id="nombreprevioesposo"
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
                {navigation[96].title}
              </Typography>

              <div className="flex -mx-6">
                <Controller
                  name="fechadematrimonio"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[97].title}
                      id="fechadematrimonio"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="lugardematrimonio"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[98].title}
                      id="lugardematrimonio"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </div>
              <div className="flex -mx-6">
                <Controller
                  name="numerohijosjuntos"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[99].title}
                      id="numerohijosjuntos"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="numerohijastros"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[100].title}
                      id="numerohijastros"
                      variant="outlined"
                      autoFocus
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="numeromatrimoniosesposo"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[101].title}
                      id="numeromatrimoniosesposo"
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
                {navigation[102].title}
              </Typography>
              <div className="flex -mx-6">
                <Controller
                  name="numerodivorciosesposo"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[103].title}
                      id=" numerodivorciosesposo"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="lugardedivorcioesposo"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[104].title}
                      id="lugardedivorcioesposo"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="fechadivorcioesposo"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[105].title}
                      id="fechadivorcioesposo"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </div>
              <div className="flex -mx-6">
                <Controller
                  name="estatusmigracionesposo"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[106].title}
                      id="estatusmigracionesposo"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="numeroalienesposo"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[107].title}
                      id="numeroalienesposo"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="aliases"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[108].title}
                      id=" aliases"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </div>
              <br />

              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"
              >
                {navigation[109].title}
              </Typography>

              <Controller
                name="pasado_marital"
                control={control}
                render={({ field }) => (
                  <>
                    {marital.map((inputField) => (
                      <div key={inputField.id} className="flex- mx-6">
                        <div className="flex -mx-6">
                          <TextField
                            {...field}
                            name="nombreexesposo"
                            id="nombreexesposo"
                            className="mt-8 mb-16 mx-4"
                            label={navigation[110].title}
                            variant="outlined"
                            value={inputField.nombreexesposo}
                            onChange={(event) =>
                              handleChangemarital(inputField.id, event)
                            }
                            InputProps={{
                              shrink: true,
                            }}
                            fullWidth
                          />

                          <Controller
                            name="estatusmigracionexesposo"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                id="estatusmigracionexesposo"
                                className="mt-8 mb-16 mx-4"
                                label={navigation[111].title}
                                variant="outlined"
                                value={inputField.estatusmigracionexesposo}
                                onChange={(event) =>
                                  handleChangemarital(inputField.id, event)
                                }
                                InputProps={{
                                  shrink: true,
                                }}
                                fullWidth
                              />
                            )}
                          />
                        </div>
                        <div className="flex -mx-6">
                          <Controller
                            name="fechanacimientoexesposo"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-4"
                                label={navigation[111].title}
                                id="fechanacimientoexesposo"
                                variant="outlined"
                                value={inputField.fechanacimientoexesposo}
                                onChange={(event) =>
                                  handleChangemarital(inputField.id, event)
                                }
                                InputProps={{
                                  shrink: true,
                                }}
                                fullWidth
                              />
                            )}
                          />

                          <Controller
                            name="paisnacimientoexesposo"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-4"
                                label={navigation[112].title}
                                id="paisnacimientoexesposo"
                                variant="outlined"
                                value={inputField.paisnacimientoexesposo}
                                onChange={(event) =>
                                  handleChangemarital(inputField.id, event)
                                }
                                InputProps={{
                                  shrink: true,
                                }}
                                fullWidth
                              />
                            )}
                          />
                        </div>
                        <div className="flex -mx-6">
                          <Controller
                            name="fechamatrimonioexesposo"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-4"
                                label={navigation[113].title}
                                id="fechamatrimonioexesposo"
                                variant="outlined"
                                value={inputField.fechamatrimonioexesposo}
                                onChange={(event) =>
                                  handleChangemarital(inputField.id, event)
                                }
                                InputProps={{
                                  shrink: true,
                                }}
                                fullWidth
                              />
                            )}
                          />

                          <Controller
                            name="fechadedivorcioexesposo"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-4"
                                label={navigation[114].title}
                                id='fechadedivorcioexesposo'
                                
                                variant="outlined"
                                value={inputField.fechadedivorcioexesposo}
                                onChange={(event) =>
                                  handleChangemarital(inputField.id, event)
                                }
                                InputProps={{
                                  shrink: true,
                                }}
                                fullWidth
                              />
                            )}
                          />

                          <Controller
                            name="terminacionmatrimonioant"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-4"
                                label={navigation[115].title}
                                id="terminacionmatrimonioant"
                                variant="outlined"
                                value={inputField.terminacionmatrimonioant}
                                onChange={(event) =>
                                  handleChangemarital(inputField.id, event)
                                }
                                InputProps={{
                                  shrink: true,
                                }}
                                fullWidth
                              />
                            )}
                          />
                        </div>
                      </div>
                    ))}
                  </>
                )}
              />

              <Divider></Divider>
              <br />
              <div className="flex flex-grow flex-shrink-0 px-12 justify-end">
                <Tooltip title="Add pasado marital" className=" mx-8">
                  <Fab color="primary" size="small" onClick={handleAddmarital}>
                    <AddIcon />
                  </Fab>
                </Tooltip>

                <Tooltip title="Remove domicilio">
                  <Fab
                    color="primary"
                    size="small"
                    disabled={marital.length === 1}
                    onClick={() => handleRemovemarital(inputField.id)}
                  >
                    <RemoveIcon />
                  </Fab>
                </Tooltip>
              </div>
              <br />
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
                  onClick={handleUpdateYellow}
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
                  onClick={handleSaveYellow}
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

export default YellowSheet;
