import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  Divider,
  Fab,
  Tooltip,
  Typography,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import * as yup from "yup";
import axios from "axios";
import { constants } from "../../../../../constants";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import {selectNavigation} from "app/store/fuse/navigationSlice";
import { useDispatch, useSelector } from "react-redux";

// const schema = yup.object().shape({
  // lugar_ultimarose: yup.string().required('Por Favor Ingrese minimamente el lugar de la ultima entrada a USA '),
// });

function RoseSheet(props, { id, jsonGetById }) {
  const datos = localStorage.getItem("datos");
  const datos_cliente = JSON.parse(datos);
  const pay = localStorage.getItem('result');
  const payload = JSON.parse(pay);
  console.log("paaaaaaaaaaaaay77", payload.id)
  
  let history = useHistory();

  const [active, setActive] = useState(false);
  const { handleSubmit, control, setValue, getValues, formState } = useForm({
    mode: "onChange",
  });
  const { isValid, dirtyFields } = formState;

  useEffect(async () => {
    if (props.props != 0) {
      handleUser(props.props);
      setActive(true);
    }
  }, []);

  async function handleUser(id) {
    try {
      const response = await axios.get(
        `${constants.URLLOCAL}/pink-sheet/${id}`,  {headers: {'token' : localStorage.getItem('token')}}
      );
      const datos = await response.data;

      const { informacion_hijos, client_id } = datos;
      setValue("client_id", client_id);

      if (informacion_hijos && informacion_hijos.length >= 1) {
        setInputhijos(informacion_hijos);
        setValue("informacion_hijos", informacion_hijos);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const [informacion_hijos, setInputhijos] = useState([
    {
      id: uuidv4(),
      nombrecompleto: "",
      fechanacimiento: "",
      estatusmigracion: "",
      lugarnac: "",
      ssnumero: "",
      anumero: "",
      domicilioactual: "",
    },
  ]);

  const handleChangehijos = (id, event) => {
    const newInputFields = informacion_hijos.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setInputhijos(newInputFields);
  };

  const handleAddhijos = () => {
    setInputhijos([
      ...informacion_hijos,
      {
        id: uuidv4(),
        nombrecompleto: "",
        fechanacimiento: "",
        estatusmigracion: "",
        lugarnac: "",
        ssnumero: "",
        anumero: "",
        domicilioactual: "",
      },
    ]);
    setValue("informacion_hijos", informacion_hijos);
  };

  const handleRemoveFields = (id) => {
    const values = [...informacion_hijos];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputhijos(values);
    setValue("informacion_hijos", values);
  };
  const mostrarAlerta = () => {
    Swal.fire({
      html:`<b class="letra" style="font-size: x-large">Sus datos se Guardaron Satisfactoriamente,</b> <b class="letra" style="font-size: x-large">su cliente_id es: ${payload.id} </b>`,
      icon:'success',
      background:'#000',
      confirmButtonColor:'#008000'
    });
  };

  const mostrarAlertaError = () => {
    Swal.fire({
      html:'<b class="letra" style="font-size: x-large">Sus datos No se Guardaron Satisfactoriamente</b>',
      icon:'error',
      background:'#000',
      confirmButtonColor:'#FF0000'
    });
  };
  const mostrarAlertaActualizar = () => {
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
  async function handleSaveRose(data) {
    try {
      data.client_id = datos_cliente.id_user;
      const response = await axios.post(
        `${constants.URLLOCAL}/pink-sheet/new`,
        data,
        {headers: {'token' : localStorage.getItem('token')}}
      );
      const datos = await response.data;
      mostrarAlerta();
      history.push("/academy/courses");
    } catch (error) {
      mostrarAlertaErrorGuardar()
    }
  }

  async function handleUpdateRose() {
    try {
      const response = await fetch(
        `${constants.URLLOCAL}/pink-sheet/update/${props.props}`,
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
    handleSaveRose(data);
    // handleUpdateRose(data)
  }

  let inputField = [];

  const navigation = useSelector(selectNavigation);
  return (
    <div
      className="flex flex-1 flex-col justify-center p-12"
      style={{ backgroundColor: "pink" }}
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
                {navigation[160].title}
              </Typography>

              <Controller
                name="informacion_hijos"
                control={control}
                render={({ field }) => (
                  <>
                    {informacion_hijos.map((inputField) => (
                      <div key={inputField.id}>
                        <div className="flex -mx-6">
                          <Controller
                            name="nombrecompleto"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[161].title}
                                id="nombrecompleto"
                                type={"text"}
                                variant="outlined"
                                value={inputField.nombrecompleto}
                                onChange={(event) =>
                                  handleChangehijos(inputField.id, event)
                                }
                                fullWidth
                                InputProps={{
                                  shrink: true,
                                }}
                              />
                            )}
                          />

                          <Controller
                            name="fechanacimiento"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[162].title}
                                name="fechanacimiento"
                                id="fechanacimiento"
                                variant="outlined"
                                value={inputField.fechanacimiento}
                                onChange={(event) =>
                                  handleChangehijos(inputField.id, event)
                                }
                                fullWidth
                                InputProps={{
                                  shrink: true,
                                }}
                              />
                            )}
                          />
                        </div>

                        <div className="flex -mx-6">
                          <Controller
                            name="estatusmigracion"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                id="estatusmigracion"
                                className="mt-8 mb-16 mx-2"
                                label={navigation[162].title}
                                variant="outlined"
                                value={inputField.estatusmigracion}
                                onChange={(event) =>
                                  handleChangehijos(inputField.id, event)
                                }
                                fullWidth
                                InputProps={{
                                  shrink: true,
                                }}
                              />
                            )}
                          />

                          <Controller
                            name="lugarnac"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                id="lugarnac"
                                className="mt-8 mb-16 mx-2"
                                label={navigation[163].title}
                                variant="outlined"
                                value={inputField.lugarnac}
                                onChange={(event) =>
                                  handleChangehijos(inputField.id, event)
                                }
                                fullWidth
                                InputProps={{
                                  shrink: true,
                                }}
                              />
                            )}
                          />
                        </div>

                        <div className="flex -mx-6">
                          <Controller
                            name="ssnumero"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[164].title}
                                id="ssnumero"
                                variant="outlined"                             
                                value={inputField.ssnumero}
                                onChange={(event) =>
                                  handleChangehijos(inputField.id, event)
                                }
                                fullWidth
                                InputProps={{
                                  shrink: true,
                                }}
                              />
                            )}
                          />

                          <Controller
                            name="anumero"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[165].title}
                                id="anumero"
                                variant="outlined"
                                value={inputField.anumero}
                                onChange={(event) =>
                                  handleChangehijos(inputField.id, event)
                                }
                                InputProps={{
                                  shrink: true,
                                }}
                                fullWidth
                              />
                            )}
                          />

                          <Controller
                            name="domicilioactual"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[166].title}
                                id="domicilioactual"
                                variant="outlined"
                                value={inputField.domicilioactual}
                                onChange={(event) =>
                                  handleChangehijos(inputField.id, event)
                                }
                                InputProps={{
                                  shrink: true,
                                }}
                                fullWidth
                              />
                            )}
                          />
                        </div>

                        <Divider></Divider>

                        <div className="flex flex-grow flex-shrink-0 px-12 justify-end">
                          <Tooltip title="Add hijos" className=" mx-8">
                            <Fab
                              color="primary"
                              size="small"
                              onClick={handleAddhijos}
                            >
                              <AddIcon />
                            </Fab>
                          </Tooltip>

                          <Tooltip title="Remove hijos">
                            <Fab
                              color="primary"
                              size="small"
                              disabled={informacion_hijos.length === 1}
                              onClick={() => handleRemoveFields(inputField.id)}
                            >
                              <RemoveIcon />
                            </Fab>
                          </Tooltip>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              />
              <br />
              <Divider></Divider>
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
                  onClick={handleUpdateRose}
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
                  onClick={handleSaveRose}
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

export default RoseSheet;
