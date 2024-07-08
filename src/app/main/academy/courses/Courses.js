import _ from "@lodash";
import { styled, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import NavLinkAdapter from "@fuse/core/NavLinkAdapter";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import Icon from "@mui/material/Icon";
import InputLabel from "@mui/material/InputLabel";
import LinearProgress from "@mui/material/LinearProgress";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import withReducer from "app/store/withReducer";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { constants } from "../../../../constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import reducer from "../store";
import { getCategories, selectCategories } from "../store/categoriesSlice";
import { getCourses, selectCourses } from "../store/coursesSlice";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import InputAdornment from "@mui/material/InputAdornment";

import "./Courses.css";
function Courses(props) {
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);
  const categories = useSelector(selectCategories);
  const theme = useTheme();
  const [FilteredAzul, setFilteredAzul] = useState([]);
  const [FilteredAmarillo, setFilteredAmarillo] = useState([]);
  const [FilteredNaranja, setFilteredNaranja] = useState([]);
  const [FilteredRojo, setFilteredRojo] = useState([]);
  const [FilteredRosa, setFilteredRosa] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedData, setSelectedData] = useState("all");

  // useEffect(() => {
  //   function getFilteredArray() {
  //     if (searchText.length === 0 && selectedCategory === 'all') {
  //       return courses;
  //     }

  //     return _.filter(courses, (item) => {
  //       if (selectedCategory !== 'all' && item.category !== selectedCategory) {
  //         return false;
  //       }
  //       return item.title.toLowerCase().includes(searchText.toLowerCase());
  //     });
  //   }

  //   if (courses) {
  //     setFilteredData(getFilteredArray());
  //   }
  // }, [courses, searchText, selectedCategory]);

  async function getFilteredArray(id_client) {
    try {
      const response = await axios.post(
        `${constants.URLLOCAL}/dashboard/search`,
        { id_client: id_client }
      );
      const data = await response.data;
      console.log(data[0]);

      setSelectedData(data[0] ? data[0] : []);
      setFilteredAzul(data[0] ? data[0].Blue : []);
      setFilteredAmarillo(data[0] ? data[0].Yellow : []);
      setFilteredNaranja(data[0] ? data[0].Orange : []);
      setFilteredRojo(data[0] ? data[0].Red : []);
      setFilteredRosa(data[0] ? data[0].Rose : []);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSelectedCategory(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchText(event) {
    setSearchText(event.target.value);
    console.log(event.target.value);

    // const searchText = event.target.value

    if (event.target.value) {
      console.log("vuelve a buscar");
      getFilteredArray(event.target.value);
    } else {
      console.log("no hay nada");
      setSearchText("");
      setSelectedData([]);
      setFilteredAzul([1]);
      setFilteredAmarillo([2]);
      setFilteredNaranja([3]);
      setFilteredRojo([4]);
      setFilteredRosa([5]);
    }
  }

  function buttonStatus(course) {
    switch (course.activeStep) {
      case course.totalSteps:
        return "Ver";
      case 0:
        return "Start";
      default:
        return "Continue";
    }
  }

  // console.log(FilteredAzul[0])
  // console.log(FilteredAmarillo[0])
  // console.log(FilteredNaranja[0])
  // console.log(FilteredRojo[0])
  // console.log(FilteredRosa[0])

  return (
    <>
      <div className="px-96" style={{ backgroundColor: "#000000" }}>
        <input
          type="text"
          style={{ backgroundColor: "#000000", color: "white" }}
          name="campo"
          class="search"
          placeholder="Buscar cliente ..."
          value={searchText}
          onChange={handleSearchText}
          label="Busqueda"
        />
        <Icon className="mt-32 whitespace-nowrap mx-16" color="action">
          person_search
        </Icon>
        
        {/* <Button
          style={{ color: "white" }}
          component={Link}
          to="/users"
          className="whitespace-nowrap mx-6"
          variant="contained"
          color="third"
        >
          <Icon className="mx-6" color="white">recent_actors</Icon>
          <span style={{ color: "white" }} className="hidden sm:flex">
          Lista de Clientes
          </span>
        </Button>

        <Button
          style={{ color: "white" }}
          component={Link}
          to="/users/hoja/new"
          className="whitespace-nowrap mx-6"
          variant="contained"
          color="third"
        >
          <Icon className="mx-6" color="white">person_add</Icon>
          <span style={{ color: "white" }} className="hidden sm:flex">
            Crear Cliente
          </span>
          <span className="flex sm:hidden">Nuevo</span>
        </Button> */}
      </div>

      <div
        className="flex flex-1 flex-col items-center justify-center p-24"
        style={{ backgroundColor: "#000000", color: "white" }}
      >
        {useMemo(() => {
          const container = {
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          };

          const item = {
            hidden: {
              opacity: 0,
              y: 20,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          };

          return (
            FilteredAzul &&
            (FilteredAzul.length > 0 ? (
              <motion.div
                className="flex flex-wrap"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {FilteredAzul.map((course) => {
                  return (
                    <motion.div
                      variants={item}
                      className="sm:w-1/3 lg:w-1/3 sm:p-16"
                      key={course.nombrehoja_id}
                    >
                      <Card className="shadow">
                        <div style={{ backgroundColor: "#a4eef9" }}>
                          <div
                            className="flex flex-shrink-0 items-center justify-between h-56"
                            style={{
                              color: theme.palette.getContrastText("#91E9F7"),
                              background: "#91E9F7",
                            }}
                          >
                            <Typography className="flex flex-grow flex-shrink-0 px-12 justify-center font-bold text-14">
                              {course.nombrehoja_id}. HOJA AZUL
                            </Typography>
                          </div>
                          <CardContent
                            className="flex flex-col flex-auto items-center justify-center"
                            style={{ background: "#a4eef9" }}
                          >
                            <img
                              className=" flex items-center justify-center opacity-75 w-80 my-32"
                              src="assets/images/logos/listblueking.png"
                              alt="logo"
                            />

                            <Typography
                              className="text-center text-16 font-medium"
                              style={{ color: "black" }}
                            >
                              {selectedData ? selectedData.nombrecliente : null}
                            </Typography>
                            <Typography
                              className="text-center text-13 mt-8 font-normal"
                              style={{ color: "black" }}
                            >
                              Ultima Actualización:
                              <br />
                              {course.fechaactualizacion}
                            </Typography>

                            <CardActions className="justify-center">
                              <Button
                                to={`/academy/courses/blue-sheet/${course.id_hojaazul1}/${course.client_id}`}
                                role="button"
                                component={NavLinkAdapter}
                                color="secondary"
                                variant="contained"
                              >
                                {buttonStatus(course)}
                              </Button>
                            </CardActions>

                            {/* <LinearProgress
                          className="w-full"
                          variant="determinate"
                          value={(course.activeStep * 100) / course.totalSteps}
                          color="secondary"
                        /> */}
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}

                {FilteredAmarillo.map((course) => {
                  return (
                    <motion.div
                      variants={item}
                      className="sm:w-1/3 lg:w-1/3 sm:p-16"
                      key={course.nombrehoja_id}
                    >
                      <Card className="shadow">
                        <div style={{ backgroundColor: "#f9eb81" }}>
                          <div
                            className="flex flex-shrink-0 items-center justify-between h-56"
                            style={{
                              color: theme.palette.getContrastText("#FFF176"),

                              background: "#FFF176",
                            }}
                          >
                            <Typography className="flex flex-grow flex-shrink-0 px-12 justify-center font-bold text-14">
                              {course.nombrehoja_id}. HOJA AMARILLA
                            </Typography>
                          </div>
                          <CardContent
                            className="flex flex-col flex-auto items-center justify-center"
                            style={{ background: "#f9eb81" }}
                          >
                            <img
                              className="w-80 my-32"
                              src="assets/images/logos/listyellow.png"
                              alt="logo"
                            />

                            <Typography
                              className="text-center text-16 font-medium"
                              style={{ color: "black" }}
                            >
                              {selectedData ? selectedData.nombrecliente : null}
                            </Typography>
                            <Typography
                              className="text-center text-13 mt-8 font-normal"
                              style={{ color: "black" }}
                            >
                              Ultima Actualización:
                              <br />
                              {course.fechaactualizacion}
                            </Typography>

                            <CardActions
                              className="justify-center "
                              style={{ background: "#f9eb81" }}
                            >
                              <Button
                                to={`/academy/courses/yellow-sheet${course.id_hojaazul1}/${course.id_hojaazul2}`}
                                role="button"
                                component={NavLinkAdapter}
                                color="secondary"
                                variant="contained"
                              >
                                {buttonStatus(course)}
                              </Button>
                            </CardActions>
                            {/* <LinearProgress
                          className="w-full"
                          variant="determinate"
                          value={(course.activeStep * 100) / course.totalSteps}
                          color="secondary"
                        /> */}
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}

                {FilteredNaranja.map((course) => {
                  return (
                    <motion.div
                      variants={item}
                      className="sm:w-1/3 lg:w-1/3 sm:p-16"
                      key={course.nombrehoja_id}
                    >
                      <Card className="shadow">
                        <div style={{ backgroundColor: "#f7b65b" }}>
                          <div
                            className="flex flex-shrink-0 items-center justify-between h-56"
                            style={{
                              color: theme.palette.getContrastText("#FFB74D"),

                              background: "#FFB74D",
                            }}
                          >
                            <Typography className="flex flex-grow flex-shrink-0 px-12 justify-center font-bold text-14">
                              {course.nombrehoja_id}. HOJA NARANJA
                            </Typography>
                          </div>
                          <CardContent
                            className="flex flex-col flex-auto items-center justify-center"
                            style={{ background: "#f7b65b" }}
                          >
                            <img
                              className="flex items-center justify-center opacity-75 w-80 my-32"
                              src="assets/images/logos/listOrange.png"
                              alt="logo"
                            />

                            <Typography
                              className="text-center text-16 font-medium"
                              style={{ color: "black" }}
                            >
                              {selectedData ? selectedData.nombrecliente : null}
                            </Typography>
                            <Typography
                              className="text-center text-13 mt-8 font-normal"
                              style={{ color: "black" }}
                            >
                              Ultima Actualización:
                              <br />
                              {course.fechaactualizacion}
                            </Typography>

                            <CardActions
                              className="justify-center "
                              style={{ background: "#f7b65b" }}
                            >
                              <Button
                                to={`/academy/courses/orange-sheet${course.id_hojaazul1}/${course.id_hojaazul2}`}
                                role="button"
                                component={NavLinkAdapter}
                                color="secondary"
                                variant="contained"
                              >
                                {buttonStatus(course)}
                              </Button>
                            </CardActions>
                            {/* <LinearProgress
                          className="w-full"
                          variant="determinate"
                          value={(course.activeStep * 100) / course.totalSteps}
                          color="secondary"
                        /> */}
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}

                {FilteredRojo.map((course) => {
                  return (
                    <motion.div
                      variants={item}
                      className="sm:w-1/3 lg:w-1/3 sm:p-16"
                      key={course.nombrehoja_id}
                    >
                      <Card className="shadow">
                        <div style={{ backgroundColor: "#ea605d" }}>
                          <div
                            className="flex flex-shrink-0 items-center justify-between h-56"
                            style={{
                              color: theme.palette.getContrastText("#EF5350"),

                              background: "#EF5350",
                            }}
                          >
                            <Typography
                              className="flex flex-grow flex-shrink-0 px-12 justify-center font-bold text-14"
                              color="black"
                            >
                              {course.nombrehoja_id}. HOJA ROJA
                            </Typography>
                          </div>
                          <CardContent
                            className="flex flex-col flex-auto items-center justify-center"
                            style={{ background: "#ea605d" }}
                          >
                            <img
                              className=" flex items-center justify-center opacity-75 w-80 my-32"
                              src="assets/images/logos/listred.png"
                              alt="logo"
                            />

                            <Typography
                              className="text-center text-16 font-medium"
                              style={{ color: "black" }}
                            >
                              {selectedData ? selectedData.nombrecliente : null}
                            </Typography>
                            <Typography
                              className="text-center text-13 mt-8 font-normal"
                              style={{ color: "black" }}
                            >
                              Ultima Actualización:
                              <br />
                              {course.fechaactualizacion}
                            </Typography>

                            <CardActions
                              className="justify-center"
                              style={{ background: "#ea605d" }}
                            >
                              <Button
                                to={`/academy/courses/red-sheet${course.id_hojaazul1}/${course.id_hojaazul2}`}
                                role="button"
                                component={NavLinkAdapter}
                                color="secondary"
                                variant="contained"
                              >
                                {buttonStatus(course)}
                              </Button>
                            </CardActions>
                            {/* <LinearProgress
                          className="w-full"
                          variant="determinate"
                          value={(course.activeStep * 100) / course.totalSteps}
                          color="secondary"
                        /> */}
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}

                {FilteredRosa.map((course) => {
                  return (
                    <motion.div
                      variants={item}
                      className="sm:w-1/3 lg:w-1/3 sm:p-16"
                      key={course.nombrehoja_id}
                    >
                      <Card className="shadow">
                        <div style={{ backgroundColor: "#f7cdd4" }}>
                          <div
                            className="flex flex-shrink-0 items-center justify-between h-56"
                            style={{
                              color: theme.palette.getContrastText("#FFC0CB"),
                              background: "#FFC0CB",
                            }}
                          >
                            <Typography
                              className="flex flex-grow flex-shrink-0 px-12 justify-center font-bold text-14"
                              color="inherit"
                            >
                              {course.nombrehoja_id}. HOJA ROSADA
                            </Typography>
                          </div>
                          <CardContent
                            className="flex flex-col flex-auto items-center justify-center"
                            style={{ background: "#f7cdd4" }}
                          >
                            <img
                              className="flex items-center justify-center opacity-75 w-80 my-32"
                              src="assets/images/logos/listrose.png"
                              alt="logo"
                            />

                            <Typography
                              className="text-center text-16 font-medium"
                              style={{ color: "black" }}
                            >
                              {selectedData ? selectedData.nombrecliente : null}
                            </Typography>
                            <Typography
                              className="text-center text-13 mt-8 font-normal"
                              style={{ color: "black" }}
                            >
                              Ultima Actualización:
                              <br />
                              {course.fechaactualizacion}
                            </Typography>

                            <CardActions
                              className="justify-center"
                              style={{ background: "#f7cdd4" }}
                            >
                              <Button
                                to={`/academy/courses/pink-sheet${course.id_hojaazul1}/${course.id_hojaazul2}`}
                                component={NavLinkAdapter}
                                role="button"
                                color="secondary"
                                variant="contained"
                              >
                                {buttonStatus(course)}
                              </Button>
                            </CardActions>
                            {/* <LinearProgress
                          className="w-full"
                          variant="determinate"
                          value={(course.activeStep * 100) / course.totalSteps}
                          color="secondary"
                        /> */}
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
                {[6].map((course) => {
                  return (
                    <motion.div
                      variants={item}
                      className="sm:w-1/3 lg:w-1/3 sm:p-16"
                      key={course.nombrehoja_id}
                    >
                      <Card className="shadow">
                        <div style={{ backgroundColor: "#EEEEEE" }}>
                          <div
                            className="flex flex-shrink-0 items-center justify-between h-56"
                            style={{
                              color: theme.palette.getContrastText("#c2c2c2"),

                              background: "#c2c2c2",
                            }}
                          >
                            <Typography
                              className="flex flex-grow flex-shrink-0 px-12 justify-center font-bold text-14"
                              style={{ color: "black" }}
                            >
                              DOCUMENTOS
                            </Typography>
                          </div>
                          <CardContent
                            className="flex flex-col flex-auto items-center justify-center"
                            style={{ background: "#EEEEEE" }}
                          >
                            <div className="flex items-center justify-center opacity-75">
                              <img
                                className="w-80 my-32"
                                src="assets/images/logos/doc.png"
                                alt="logo"
                              />
                            </div>

                            <Typography
                              className="text-center text-16 font-medium"
                              style={{ color: "black" }}
                            >
                              {selectedData ? selectedData.nombrecliente : null}
                            </Typography>
                            <Typography
                              className="text-center text-13 mt-8 font-normal"
                              style={{ color: "black" }}
                            >
                              Ultima Actualización:
                              <br />
                              {course.fechaactualizacion}
                            </Typography>

                            <CardActions
                              className="justify-center "
                              style={{ background: "#EEEEEE" }}
                            >
                              <Button
                                to={`/academy/courses/orange-sheet${course.id_hojaazul1}/${course.id_hojaazul2}`}
                                role="button"
                                component={NavLinkAdapter}
                                color="secondary"
                                variant="contained"
                              >
                                {buttonStatus(course)}
                              </Button>
                            </CardActions>
                            {/* <LinearProgress
                          className="w-full"
                          variant="determinate"
                          value={(course.activeStep * 100) / course.totalSteps}
                          color="secondary"
                        /> */}
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <div className="flex flex-1 items-center justify-center">
                <Typography color="textSecondary" className="text-24 my-24">
                  No tiene hojas creadas!
                </Typography>
              </div>
            ))
          );
        }, [
          FilteredAzul,
          FilteredAmarillo,
          FilteredNaranja,
          FilteredRojo,
          FilteredRosa,
          categories,
          theme.palette,
        ])}
      </div>
    </>
  );
}

export default withReducer("academyApp", reducer)(Courses);
