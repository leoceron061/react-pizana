import TextField from "@mui/material/TextField";
import { Controller,  useForm } from "react-hook-form";
import { useEffect,  useState } from "react";
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
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { constants } from "../../../../../constants";
import Swal from "sweetalert2";
import {selectNavigation} from "app/store/fuse/navigationSlice";
import { useDispatch, useSelector } from "react-redux";


const defaultValues = {
  lugar_ultima: "",
  fechadecruze_ultima: "",
  manera_ultima: "",
  client_id: "",
};

// const schema = yup.object().shape({
  // lugar_ultima: yup.string().required('Por Favor Ingrese minimamente el lugar de la ultima entrada a USA '),
// });

function RedSheet(props, { id, jsonGetById }) {
  const datos = localStorage.getItem("datos");
  const datos_cliente = JSON.parse(datos);
  const [active, setActive] = useState(false);
  const pay = localStorage.getItem('result');
  const payload = JSON.parse(pay);
  console.log("paaaaaaaaaaaaay77", payload.id)
  
  const { handleSubmit, control, setValue, getValues, formState } = useForm({
    mode: "onChange",
    defaultValues,
    // resolver: yupResolver(schema),
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
      const response = await axios.get(`${constants.URLLOCAL}/red-sheet/${id}`,  {headers: {'token' : localStorage.getItem('token')}});
      const datos = await response.data;

      const {
        detenciones,
        policia,
        entradas_sin_inspeccion,
        lugar_ultima,
        fechadecruze_ultima,
        manera_ultima,
        client_id,
      } = datos[0];

      setValue("policia", policia);
      setValue("entradas_sin_inspeccion", entradas_sin_inspeccion);
      setValue("lugar_ultima", lugar_ultima);
      setValue("fechadecruze_ultima", fechadecruze_ultima);
      setValue("manera_ultima", manera_ultima);
      setValue("client_id", client_id);
      if (detenciones && detenciones.length >= 1) {
        setInputdetenciones(detenciones);
        setValue("detenciones", detenciones);
      }

      if (policia && policia.length >= 1) {
        setInputpolicia(policia);
        setValue("policia", policia);
      }

      if (entradas_sin_inspeccion && entradas_sin_inspeccion.length >= 1) {
        setInputinspeccion(entradas_sin_inspeccion);
        setValue("entradas_sin_inspeccion", entradas_sin_inspeccion);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const [detenciones, setInputdetenciones] = useState([
    {
      id: uuidv4(),
      lugar_detenciones: "",
      fecha_detenciones: "",
      motivo_detenciones: "",
    },
  ]);

  const [policia, setInputpolicia] = useState([
    {
      id: uuidv4(),
      lugar_policia: "",
      fecha_policia: "",
      cargo_policia: "",
      resultado_policia: "",
    },
  ]);

  const [inspeccion, setInputinspeccion] = useState([
    {
      id: uuidv4(),
      lugar_inspeccion: "",
      fecha_inspeccion: "",
      metodo_inspeccion: "",
      resultado_inspeccion: "",
    },
  ]);

  const handleChangedetencion = (id, event) => {
    const newInputFields = detenciones.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setInputdetenciones(newInputFields);
  };

  const handleChangepolicia = (id, event) => {
    const newInputFields = policia.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setInputpolicia(newInputFields);
  };

  const handleChangeinspeccion = (id, event) => {
    const newInputFields = inspeccion.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setInputinspeccion(newInputFields);
  };

  const handleAdddetencion = () => {
    setInputdetenciones([
      ...detenciones,
      {
        id: uuidv4(),
        lugar_detenciones: "",
        fecha_detenciones: "",
        motivo_detenciones: "",
      },
    ]);
    setValue("detenciones", detenciones);
  };

  const handleAddpolicia = () => {
    setInputpolicia([
      ...policia,
      {
        id: uuidv4(),
        lugar_policia: "",
        fecha_policia: "",
        cargo_policia: "",
        resultado_policia: "",
      },
    ]);
    setValue("policia", policia);
  };

  const handleAddinspeccion = () => {
    setInputinspeccion([
      ...inspeccion,
      {
        id: uuidv4(),
        lugar_inspeccion: "",
        fecha_inspeccion: "",
        metodo_inspeccion: "",
        resultado_inspeccion: "",
      },
    ]);
    setValue("entradas_sin_inspeccion", inspeccion);
  };

  const handleRemoveFields = (id) => {
    const values = [...detencion];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputdetenciones(values);
    setValue("detenciones", values);
  };

  const handleRemovepolicia = (id) => {
    const values = [...policia];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputpolicia(values);
    setValue("policia", values);
  };

  const handleRemoveinspeccion = (id) => {
    const values = [...inspeccion];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputinspeccion(values);
    setValue("entradas_sin_inspeccion", values);
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
  async function handleSaveRed(data) {
    try {
      data.client_id = datos_cliente.id_user;
      const response = await axios.post(
        `${constants.URLLOCAL}/red-sheet/new`,
        data,
        {headers: {'token' : localStorage.getItem('token')}}
      );
      const datos = await response.data;
      mostrarAlerta();
    } catch (error) {mostrarAlertaErrorGuardar()}
  }
  async function handleUpdateRed() {
    try {
      const response = await fetch(
        `${constants.URLLOCAL}/red-sheet/update/${props.props}`,
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
    handleSaveRed(data);
   // handleUpdateRed(data);
  }

  const navigation = useSelector(selectNavigation);


  return (
    <div
      className="flex flex-1 flex-col justify-center p-12"
      style={{ backgroundColor: "#EF5350" }}
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
               {navigation[142].title}
              </Typography>

              <Controller
                name="detenciones"
                control={control}
                render={({ field }) => (
                  <>
                    {detenciones.map((inputField) => (
                      <div key={inputField.id}>
                        <div className="flex -mx-6">
                          <Controller
                            name="lugar_detenciones"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                id="lugar_detenciones"
                                className="mt-8 mb-16 mx-2"
                                label={navigation[143].title}
                                type={"text"}
                                variant="outlined"
                                value={inputField.lugar_detenciones}
                                onChange={(event) =>
                                  handleChangedetencion(inputField.id, event)
                                }
                                fullWidth
                                InputProps={{
                                  shrink: true,
                                }}
                              />
                            )}
                          />

                          <Controller
                            name="fecha_detenciones"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[144].title}
                                id="fecha_detenciones"
                                variant="outlined"
                                value={inputField.fecha_detenciones}
                                onChange={(event) =>
                                  handleChangedetencion(inputField.id, event)
                                }
                                fullWidth
                                InputProps={{
                                  shrink: true,
                                }}
                              />
                            )}
                          />

                          <Controller
                            name="motivo_detenciones"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[145].title}
                                id="motivo_detenciones"
                                variant="outlined"
                                value={inputField.motivo_detenciones}
                                onChange={(event) =>
                                  handleChangedetencion(inputField.id, event)
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
                          <Tooltip title="Add detenciones">
                            <Fab
                              color="primary"
                              size="small"
                              onClick={handleAdddetencion}
                            >
                              <AddIcon />
                            </Fab>
                          </Tooltip>
                          <Tooltip title="Remove detenciones">
                            <Fab
                              color="primary"
                              size="small"
                              disabled={detenciones.length === 1}
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

              <Divider></Divider>

              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"
              >
                {navigation[146].title}
              </Typography>

              <Controller
                name="policia"
                control={control}
                render={({ field }) => (
                  <>
                    {policia.map((inputField) => (
                      <div key={inputField.id}>
                        <div className="flex -mx-6">
                          <Controller
                            name="lugar_policia"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                id="lugar_policia"
                                className="mt-8 mb-16 mx-2"
                                label={navigation[147].title}
                                type={"text"}
                                variant="outlined"
                                value={inputField.lugar_policia}
                                onChange={(event) =>
                                  handleChangepolicia(inputField.id, event)
                                }
                                fullWidth
                                InputProps={{
                                  shrink: true,
                                }}
                              />
                            )}
                          />

                          <Controller
                            name="fecha_policia"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[148].title}
                                id="fecha_policia"
                                variant="outlined"
                                value={inputField.fecha_policia}
                                onChange={(event) =>
                                  handleChangepolicia(inputField.id, event)
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
                            name="cargo_policia"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[149].title}
                                id="cargo_policia"
                                variant="outlined"
                                value={inputField.cargo_policia}
                                onChange={(event) =>
                                  handleChangepolicia(inputField.id, event)
                                }
                                InputProps={{
                                  shrink: true,
                                }}
                                fullWidth
                              />
                            )}
                          />

                          <Controller
                            name="resultado_policia"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[150].title}
                                id="resultado_policia"
                                variant="outlined"
                                value={inputField.resultado_policia}
                                onChange={(event) =>
                                  handleChangepolicia(inputField.id, event)
                                }
                                InputProps={{
                                  shrink: true,
                                }}
                                fullWidth
                              />
                            )}
                          />
                        </div>
                        <div className="flex flex-grow flex-shrink-0 px-12 justify-end">
                          <Tooltip title="Add Policia">
                            <Fab
                              color="primary"
                              size="small"
                              onClick={handleAddpolicia}
                            >
                              <AddIcon />
                            </Fab>
                          </Tooltip>

                          <Tooltip title="Remove Policia">
                            <Fab
                              color="primary"
                              size="small"
                              disabled={policia.length === 1}
                              onClick={() => handleRemovepolicia(inputField.id)}
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

              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"
              >
                {navigation[151].title}
              </Typography>

              <Controller
                name="entradas_sin_inspeccion"
                control={control}
                render={({ field }) => (
                  <>
                    {inspeccion.map((inputField) => (
                      <div key={inputField.id}>
                        <div className="flex -mx-6">
                          <Controller
                            name="lugar_inspeccion"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                id="lugar_inspeccion"
                                className="mt-8 mb-16 mx-2"
                                label={navigation[152].title}
                                type={"text"}
                                variant="outlined"
                                value={inputField.lugar_inspeccion}
                                onChange={(event) =>
                                  handleChangeinspeccion(inputField.id, event)
                                }
                                fullWidth
                                InputProps={{
                                  shrink: true,
                                }}
                              />
                            )}
                          />

                          <Controller
                            name="fecha_inspeccion"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[153].title}
                                id="fecha_inspeccion"
                                variant="outlined"
                                value={inputField.fecha_inspeccion}
                                onChange={(event) =>
                                  handleChangeinspeccion(inputField.id, event)
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
                            name="metodo_inspeccion"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[154].title}
                                id="metodo_inspeccion"
                                variant="outlined"
                                value={inputField.metodo_inspeccion}
                                onChange={(event) =>
                                  handleChangeinspeccion(inputField.id, event)
                                }
                                InputProps={{
                                  shrink: true,
                                }}
                                fullWidth
                              />
                            )}
                          />

                          <Controller
                            name="resultado_inspeccion"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                className="mt-8 mb-16 mx-2"
                                label={navigation[155].title}
                                id="resultado_inspeccion"
                                variant="outlined"
                                value={inputField.resultado_inspeccion}
                                onChange={(event) =>
                                  handleChangeinspeccion(inputField.id, event)
                                }
                                InputProps={{
                                  shrink: true,
                                }}
                                fullWidth
                              />
                            )}
                          />
                        </div>

                        <div className="flex flex-grow flex-shrink-0 px-12 justify-end">
                          <Tooltip title="Add  Entradas Sin inspección ">
                            <Fab
                              color="primary"
                              size="small"
                              onClick={handleAddinspeccion}
                            >
                              <AddIcon />
                            </Fab>
                          </Tooltip>

                          <Tooltip title="Remove  Entradas Sin inspección ">
                            <Fab
                              color="primary"
                              size="small"
                              disabled={inspeccion.length === 1}
                              onClick={() =>
                                handleRemoveinspeccion(inputField.id)
                              }
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
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="hidden sm:flex text-16 md:text-24 justify-start"
                color="black"
              >
                {navigation[156].title}
              </Typography>

              <div className="flex -mx-6">
                <Controller
                  name="lugar_ultima"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[157].title}
                      autoFocus
                      id="lugar_ultima"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="fechadecruze_ultima"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[158].title}
                      id="fechadecruze_ultima"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="manera_ultima"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8 mb-16 mx-4"
                      label={navigation[159].title}
                      id="manera_ultima"
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
                  onClick={handleUpdateRed}
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
                  onClick={handleSaveRed}
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
export default RedSheet;
