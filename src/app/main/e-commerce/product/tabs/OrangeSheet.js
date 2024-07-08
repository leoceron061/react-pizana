import TextField from "@mui/material/TextField";
import { Controller,  useForm } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Autocomplete, Divider, Fab, Tooltip, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { constants } from "../../../../../constants";
import Swal from "sweetalert2";
import {selectNavigation} from "app/store/fuse/navigationSlice";
import { useDispatch, useSelector } from "react-redux";

const defaultValues = {
  calleynumero_domicilio: "",
  ciudad_domicilio: "",
  estado_domicilio: "",
  pais_domicilio: "",
  codigopostal_domicilio: "",
  desdemes_annio_domicilio: "",
  hastames_annio_domicilio: "",
  nombre_ultimo_empleo: "",
  ciudad_ultimo_empleo: "",
  codigopostal_ultimo_empleo: "",
  estado_ultimo_empleo: "",
  desdemes_annio_ultimo_empleo: "",
  hastames_annio_ultimo_empleo: "",
};

// const schema = yup.object().shape({
  // calleynumero_domicilio: yup.string().required('Por Favor Ingrese minimamente la calle y el numero de domicilio '),
// });

function OrangeSheet(props, { id, jsonGetById }) {
  const [active, setActive] = useState(false);
  const datos = localStorage.getItem("datos");
  const datos_cliente = JSON.parse(datos);
  const pay = localStorage.getItem('result');
  const payload = JSON.parse(pay);
  console.log("paaaaaaaaaaaaay77", payload)
  

  useEffect(async () => {
    if (props.props != 0) {
      handleUser(props.props);
      setActive(true);
    }
  }, []);

  async function handleUser(id) {
    try {
      const response = await axios.get(
        `${constants.URLLOCAL}/orange-sheet/${id}`, {headers: {'token' : localStorage.getItem('token')}}
      );
      const datos = await response.data[0];

      const {
        calleynumero_domicilio,
        ciudad_domicilio,
        estado_domicilio,
        pais_domicilio,
        codigopostal_domicilio,
        desdemes_annio_domicilio,
        hastames_annio_domicilio,
        nombre_ultimo_empleo,
        ciudad_ultimo_empleo,
        codigopostal_ultimo_empleo,
        estado_ultimo_empleo,
        desdemes_annio_ultimo_empleo,
        hastames_annio_ultimo_empleo,
        historial_trabajo,
        client_id,
        historia_domicilio,
      } = datos;

      setValue("calleynumero_domicilio", calleynumero_domicilio);
      setValue("ciudad_domicilio", ciudad_domicilio);
      setValue("estado_domicilio", estado_domicilio);
      setValue("pais_domicilio", pais_domicilio);
      setValue("codigopostal_domicilio", codigopostal_domicilio);
      setValue("desdemes_annio_domicilio", desdemes_annio_domicilio);
      setValue("hastames_annio_domicilio", hastames_annio_domicilio);
      setValue("nombre_ultimo_empleo", nombre_ultimo_empleo);
      setValue("ciudad_ultimo_empleo", ciudad_ultimo_empleo);
      setValue("codigopostal_ultimo_empleo", codigopostal_ultimo_empleo);
      setValue("estado_ultimo_empleo", estado_ultimo_empleo);
      setValue("desdemes_annio_ultimo_empleo", desdemes_annio_ultimo_empleo);
      setValue("hastames_annio_ultimo_empleo", hastames_annio_ultimo_empleo);
      setValue("client_id", client_id);

      if (historia_domicilio && historia_domicilio.length >= 1) {
        setInputdomicilio(historia_domicilio);
        setValue("historia_domicilio", historia_domicilio);
      }

      if (historial_trabajo && historial_trabajo.length >= 1) {
        setInputtrabajo(historial_trabajo);
        setValue("historial_trabajo", historial_trabajo);
      }
    } catch (error) {
       console.log(error)
    }
  }

  const { handleSubmit, control, getValues, setValue, formState } = useForm({
    mode: "onChange",
    defaultValues,
    // resolver: yupResolver(schema),
  });
  const { isValid, dirtyFields } = formState;

  const [domicilio, setInputdomicilio] = useState([
    {
      id: uuidv4(),
      ciudaddomicilio: "",
      calleynumerodomicilio: "",
      paisycodigopostaldomicilio: "",
      estadodomicilio: "",
      desdemesdomicilio: "",
      hastamesdomicilio: "",
    },
  ]);

  const [trabajo, setInputtrabajo] = useState([
    {
      id: uuidv4(),
      nombreydomiciliotrabajo: "",
      ocupaciontrabajo: "",
      desdetrabajo: "",
      hastatrabajo: "",
    },
  ]);

  const handleChangedomicilio = (id, event) => {
    const newInputFields = domicilio.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setInputdomicilio(newInputFields);
  };

  const handleChangetrabajo = (id, event) => {
    const newInputFields = trabajo.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setInputtrabajo(newInputFields);
  };

  const handleAdddomicilio = () => {
    setInputdomicilio([
      ...domicilio,
      {
        id: uuidv4(),
        ciudaddomicilio: "",
        calleynumerodomicilio: "",
        paisycodigopostaldomicilio: "",
        estadodomicilio: "",
        desdemesdomicilio: "",
        hastamesdomicilio: "",
      },
    ]);
    setValue("historia_domicilio", domicilio);
  };

  const handleAddtrabajo = () => {
    setInputtrabajo([
      ...trabajo,
      {
        id: uuidv4(),
        nombreydomiciliotrabajo: "",
        ocupaciontrabajo: "",
        desdetrabajo: "",
        hastatrabajo: "",
      },
    ]);
    setValue("historial_trabajo", trabajo);
  };

  const handleRemoveFields = (id) => {
    const values = [...domicilio];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputdomicilio(values);
    setValue("historia_domicilio", values);
  };

  const handleRemovetrabajo = (id) => {
    const values = [...trabajo];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputtrabajo(values);
    setValue("historial_trabajo", values);
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
      icon:'success',
      background:'#000',
      confirmButtonColor:'#008000'
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
  async function handleSaveOrange(data) {
    try {
      data.client_id = datos_cliente.id_user;
      const response = await axios.post(
        `${constants.URLLOCAL}/orange-sheet/new`,
        data,
        {headers: {'token' : localStorage.getItem('token')}}
      );
      const datos = await response.data;
      mostrarAlerta();
    } catch (error) {
      mostrarAlertaErrorGuardar()
    }
  }

  async function handleUpdateOrange() {
    try {
      const response = await fetch(
        `${constants.URLLOCAL}/orange-sheet/update/${props.props}`,
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

  function onSubmit(data) {
    handleSaveOrange(data);
    // handleUpdateOrange(data)
  }

  let inputField = [];


  const navigation = useSelector(selectNavigation);


  return (
    <div
      className="flex flex-1 flex-col justify-center p-12"
      style={{ backgroundColor: "#FFB74D" }}
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
                {navigation[124].title}
              </Typography>

              <Controller
                name="domicilio"
                control={control}
                render={({ field }) => (
                  <>
                    {domicilio.map((inputField) => (
                      <div key={inputField.id}>
                        <div className="flex -mx-6">
                          <TextField
                            {...field}
                            id="ciudaddomicilio"
                            className="mt-8 mb-16 mx-4"
                            label={navigation[125].title}
                            variant="outlined"
                            value={inputField.ciudaddomicilio}
                            onChange={(event) =>
                              handleChangedomicilio(inputField.id, event)
                            }
                            InputProps={{
                              shrink: true,
                            }}
                            fullWidth
                          />

                          <Controller
                            name="calleynumerodomicilio"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[126].title}
                                id="calleynumerodomicilio"
                                variant="outlined"
                                value={inputField.calleynumerodomicilio}
                                onChange={(event) =>
                                  handleChangedomicilio(inputField.id, event)
                                }
                                InputProps={{
                                  shrink: true,
                                }}
                                fullWidth
                              />
                            )}
                          />

                          <Controller
                            name="paisycodigopostaldomicilio"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[127].title}
                                id="paisycodigopostaldomicilio"
                                variant="outlined"
                                value={inputField.paisycodigopostaldomicilio}
                                onChange={(event) =>
                                  handleChangedomicilio(inputField.id, event)
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
                            name="estadodomicilio"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                id="estadodomicilio"
                                className="mt-8 mb-16 mx-2"
                                label={navigation[128].title}
                                variant="outlined"
                                value={inputField.estadodomicilio}
                                onChange={(event) =>
                                  handleChangedomicilio(inputField.id, event)
                                }
                                InputProps={{
                                  shrink: true,
                                }}
                                fullWidth
                              />
                            )}
                          />

                          <Controller
                            name="desdemesdomicilio"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[129].title}
                                id="desdemesdomicilio"
                                variant="outlined"
                                value={inputField.desdemesdomicilio}
                                onChange={(event) =>
                                  handleChangedomicilio(inputField.id, event)
                                }
                                InputProps={{
                                  shrink: true,
                                }}
                                fullWidth
                              />
                            )}
                          />

                          <Controller
                            name="hastamesdomicilio"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[130].title}
                                id="hastamesdomicilio"
                                variant="outlined"
                                value={inputField.hastamesdomicilio}
                                onChange={(event) =>
                                  handleChangedomicilio(inputField.id, event)
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

              <div className="flex flex-grow flex-shrink-0 px-12 justify-end">
                <Tooltip title="Add domicilio">
                  <Fab
                    color="primary"
                    size="small"
                    onClick={handleAdddomicilio}
                  >
                    <AddIcon />
                  </Fab>
                </Tooltip>

                <Tooltip title="Remove domicilio">
                  <Fab
                    color="primary"
                    size="small"
                    disabled={domicilio.length === 1}
                    onClick={() => handleRemoveFields(inputField.id)}
                  >
                    <RemoveIcon />
                  </Fab>
                </Tooltip>
              </div>

              <Divider></Divider>

              <br />
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"
              >
                {navigation[131].title}
              </Typography>

              <Controller
                name="trabajo"
                control={control}
                render={({ field }) => (
                  <>
                    {trabajo.map((inputField) => (
                      <div key={inputField.id}>
                        <div className="flex -mx-6">
                          <Controller
                            name="nombreydomiciliotrabajo"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                id="nombreydomiciliotrabajo"
                                className="mt-8 mb-16 mx-2"
                                label={navigation[132].title}
                                variant="outlined"
                                value={inputField.nombreydomiciliotrabajo}
                                onChange={(event) =>
                                  handleChangetrabajo(inputField.id, event)
                                }
                                InputProps={{
                                  shrink: true,
                                }}
                                fullWidth
                              />
                            )}
                          />

                          <Controller
                            name="ocupaciontrabajo"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[133].title}
                                id="ocupaciontrabajo"
                                variant="outlined"
                                value={inputField.ocupaciontrabajo}
                                onChange={(event) =>
                                  handleChangetrabajo(inputField.id, event)
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
                            name="desdetrabajo"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[134].title}
                                name="desdetrabajo"
                                variant="outlined"
                                value={inputField.desdetrabajo}
                                onChange={(event) =>
                                  handleChangetrabajo(inputField.id, event)
                                }
                                InputProps={{
                                  shrink: true,
                                }}
                                fullWidth
                              />
                            )}
                          />

                          <Controller
                            name="hastatrabajo"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[135].title}
                                name="hastatrabajo"
                                variant="outlined"
                                value={inputField.hastatrabajo}
                                onChange={(event) =>
                                  handleChangetrabajo(inputField.id, event)
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

              <div className="flex flex-grow flex-shrink-0 px-12 justify-end">
                <Tooltip title="Add trabajo">
                  <Fab color="primary" size="small" onClick={handleAddtrabajo}>
                    <AddIcon />
                  </Fab>
                </Tooltip>

                <Tooltip title="Remove trabajo">
                  <Fab
                    color="primary"
                    size="small"
                    disabled={trabajo.length === 1}
                    onClick={() => handleRemovetrabajo(inputField.id)}
                  >
                    <RemoveIcon />
                  </Fab>
                </Tooltip>
              </div>

              <Divider></Divider>

              <br />
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"
              >
                {navigation[136].title}
              </Typography>

              <div className="flex -mx-6">
                <Controller
                  name="calleynumero_domicilio"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[137].title}
                      autoFocus
                      required
                      id="calleynumero_domicilio"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="ciudad_domicilio"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[138].title}
                      id="ciudad_domicilio"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="estado_domicilio"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[139].title}
                      id="estado_domicilio"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </div>

              <div className="flex -mx-6">
                <Controller
                  name="pais_domicilio"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mb-4"
                      label={navigation[140].title}
                      autoFocus
                      id="pais_domicilio"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="codigopostal_domicilio"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mb-4"
                      label={navigation[132].title}
                      autoFocus
                      id="codigopostal_domicilio"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="desdemes_annio_domicilio"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[133].title}
                      id="desdemes_annio_domicilio"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </div>

              <div className="flex -mx-6">
                <Controller
                  name="hastames_annio_domicilio"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mx-4"
                      label={navigation[134].title}
                      id="hastames_annio_domicilio"
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
                {navigation[135].title}
              </Typography>

              <div className="flex -mx-6">
                <Controller
                  name="nombre_ultimo_empleo"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[136].title}
                      autoFocus
                      id="nombre_ultimo_empleo"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="ciudad_ultimo_empleo"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[137].title}
                      id="ciudad_ultimo_empleo"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="codigopostal_ultimo_empleo"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[138].title}
                      id="codigopostal_ultimo_empleo"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </div>

              <div className="flex -mx-6">
                <Controller
                  name="estado_ultimo_empleo"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[139].title}
                      id="estado_ultimo_empleo"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="desdemes_annio_ultimo_empleo"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[140].title}
                      id="desdemes_annio_ultimo_empleo"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="hastames_annio_ultimo_empleo"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[141].title}
                      id="hastames_annio_ultimo_empleo"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
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
                  onClick={handleUpdateOrange}
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
                  onClick={handleSaveOrange}
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

export default OrangeSheet;
