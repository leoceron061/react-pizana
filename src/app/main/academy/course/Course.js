import FusePageSimple from "@fuse/core/FusePageSimple";
import { useTheme, styled } from "@mui/material/styles";
import FuseScrollbars from "@fuse/core/FuseScrollbars";
import { green } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import Hidden from "@mui/material/Hidden";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import withReducer from "app/store/withReducer";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import reducer from "../store";
import { getCourse, updateCourse } from "../store/courseSlice";

const Root = styled(FusePageSimple)(({ theme }) => ({
  "& .FusePageSimple-header": {
    minHeight: 0,
    height: 0,
    [theme.breakpoints.up("sx")]: {
      borderBottomLeftRadius: 20,
    },
  },
  "& .FusePageSimple-content": {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  "& .FusePageSimple-sidebar": {
    padding: 12,
    border: 0,
  },
}));

function Course(props) {
  const dispatch = useDispatch();
  const course = useSelector(({ academyApp }) => academyApp.course);
  const theme = useTheme();
  const routeParams = useParams();
  console.log(course);
  const { id_user } = routeParams;

  const pageLayout = useRef(null);

  async function handleUser(id) {
    try {
      const response = await axios.get(
        `${constants.URLLOCAL}/blue-sheet/${id}`
      );
      const datos = await response.data[0];
      console.log(
        "Datos que retorna el backend que se guardaron en blue-sheet ",
        datos
      );

      // const {
      //   nombreactanac, console.log("Datos enviados al backend blue sheet  ", id)
      //   fechannac,
      //   etnicidad,
      //   lugarnacimiento,
      //   raza,
      //   estatura,
      //   peso,
      //   colorojos,
      //   colorcabello,
      //   numeropasaporte,
      //   pais,
      //   nombremadre,
      //   nombrepadre,
      //   dirmadre,
      //   dirpadre,
      //   fechanacmadre,
      //   fechanacpadre,
      //   nompadrastro,
      //   nommadrastra,
      //   dirmadrastra,
      //   dirpadrastro,
      //   client_id,
      //   nombrehoja_id,
      //   nomactanacimiento,
      //   diractanacimiento,
      //   feexpactanacimiento,
      //   nompasaporte,
      //   dirpasaporte,
      //   feexppasaporte,
      //   nomvisalaser,
      //   dirvisalaser,
      //   feexpvisalaser,
      //   nommatriculaconsular,
      //   dirmatriculaconsular,
      //   feexpmatriculaconsular,
      //   nomlicenciamatrimonio,
      //   dirlicenciamatrimonio,
      //   feexplicenciamatrimonio,
      //   nomactamatrimonio,
      //   diractamatrimonio,
      //   feexpactamatrimonio,
      //   nomtarjetaife,
      //   dirtarjetaife,
      //   feexptarjetaife,
      //   nomactdivorcio1,
      //   diractdivorcio1,
      //   feactdivorcio1,
      //   nomactdivorcio2,
      //   diractdivorcio2,
      //   feactdivorcio2
      // } = datos

      // setValue("nombreactanac", nombreactanac,)
      // setValue("fechannac", fechannac,)
      // setValue("etnicidad", etnicidad,)
      // setValue("lugarnacimiento", lugarnacimiento,)
      // setValue("raza", raza,)
      // setValue("estatura", estatura,)
      // setValue("peso", peso,)
      // setValue("colorojos", colorojos,)
      // setValue("colorcabello", colorcabello,)
      // setValue("numeropasaporte", numeropasaporte,)
      // setValue("pais", pais,)
      // setValue("nombremadre", nombremadre,)
      // setValue("nombrepadre", nombrepadre,)
      // setValue("dirmadre", dirmadre,)
      // setValue("dirpadre", dirpadre,)
      // setValue("fechanacmadre", fechanacmadre,)
      // setValue("fechanacpadre", fechanacpadre,)
      // setValue("nompadrastro", nompadrastro,)
      // setValue("nommadrastra", nommadrastra,)
      // setValue("dirmadrastra", dirmadrastra,)
      // setValue("dirpadrastro", dirpadrastro,)
      // setValue("client_id", client_id,)
      // setValue("nombrehoja_id", nombrehoja_id,)
      // setValue("nomactanacimiento", nomactanacimiento,)
      // setValue("diractanacimiento", diractanacimiento,)
      // setValue("feexpactanacimiento", feexpactanacimiento,)
      // setValue("nompasaporte", nompasaporte,)
      // setValue("dirpasaporte", dirpasaporte,)
      // setValue("feexppasaporte", feexppasaporte,)
      // setValue("nomvisalaser", nomvisalaser,)
      // setValue("dirvisalaser", dirvisalaser,)
      // setValue("feexpvisalaser", feexpvisalaser,)
      // setValue("nommatriculaconsular", nommatriculaconsular,)
      // setValue("dirmatriculaconsular", dirmatriculaconsular,)
      // setValue("feexpmatriculaconsular", feexpmatriculaconsular,)
      // setValue("nomlicenciamatrimonio", nomlicenciamatrimonio,)
      // setValue("dirlicenciamatrimonio", dirlicenciamatrimonio,)
      // setValue("feexplicenciamatrimonio", feexplicenciamatrimonio,)
      // setValue("nomactamatrimonio", nomactamatrimonio,)
      // setValue("diractamatrimonio", diractamatrimonio,)
      // setValue("feexpactamatrimonio", feexpactamatrimonio,)
      // setValue("nomtarjetaife", nomtarjetaife,)
      // setValue("dirtarjetaife", dirtarjetaife,)
      // setValue("feexptarjetaife", feexptarjetaife,)
      // setValue("nomactdivorcio1", nomactdivorcio1,)
      // setValue("diractdivorcio1", diractdivorcio1,)
      // setValue("feactdivorcio1", feactdivorcio1,)
      // setValue("nomactdivorcio2", nomactdivorcio2,)
      // setValue("diractdivorcio2", diractdivorcio2,)
      // setValue("feactdivorcio2", feactdivorcio2)
    } catch (error) {
      // console.log(error)
    }
  }

  // useDeepCompareEffect(() => {
  //   /**
  //    * Get the Course Data
  //    */
  //   dispatch(getCourse(routeParams));
  // }, [dispatch, routeParams]);

  useEffect(() => {
    handleUser(id_user);
  }, []);

  // useEffect(() => {
  //   handleUser(id_user);
  //   /**
  //    * If the course is opened for the first time
  //    * Change ActiveStep to 1
  //    */
  //   if (course && course.activeStep === 0) {
  //     dispatch(updateCourse({ activeStep: 1 }));
  //   }
  // }, [dispatch, course]);

  function handleChangeActiveStep(index) {
    dispatch(updateCourse({ activeStep: index + 1 }));
  }

  function handleNext() {
    dispatch(updateCourse({ activeStep: course.activeStep + 1 }));
  }

  function handleBack() {
    dispatch(updateCourse({ activeStep: course.activeStep - 1 }));
  }

  const activeStep = course && course.activeStep !== 0 ? course.activeStep : 1;

  return (
    <Root
      header={
        <div>
          <Hidden lgUp>
            <IconButton
              onClick={(ev) => pageLayout.current.toggleLeftSidebar()}
              aria-label="open left sidebar"
              size="large"
            >
              <Icon>menu</Icon>
            </IconButton>
          </Hidden>
          <IconButton to="/academy/courses" component={Link} size="large">
            <Icon>
              {theme.direction === "ltr" ? "arrow_back" : "arrow_forward"}
            </Icon>
          </IconButton>
          {course && (
            <Typography className="flex-1 text-20 mx-16">
              {course.title}
            </Typography>
          )}
        </div>
      }
      content={
        course && (
          <div className="flex flex-1 relative overflow-hidden">
            <FuseScrollbars className="w-full overflow-auto">
              <SwipeableViews
                className="overflow-hidden"
                index={activeStep - 1}
                enableMouseEvents
                onChangeIndex={handleChangeActiveStep}
              >
                {course.steps.map((step, index) => (
                  <div
                    className="flex justify-center p-16 pb-64 sm:p-24 sm:pb-64 md:p-48 md:pb-64"
                    key={step.id}
                  >
                    <Paper className="w-full max-w-lg rounded-20 p-16 md:p-24 shadow text-14 leading-normal">
                      <div
                        dangerouslySetInnerHTML={{ __html: step.content }}
                        dir={theme.direction}
                      />
                    </Paper>
                  </div>
                ))}
              </SwipeableViews>
            </FuseScrollbars>

            <div className="flex justify-center w-full absolute left-0 right-0 bottom-0 pb-16 md:pb-32">
              <div className="flex justify-between w-full max-w-xl px-8">
                <div>
                  {activeStep !== 1 && (
                    <Fab className="" color="secondary" onClick={handleBack}>
                      <Icon>
                        {theme.direction === "ltr"
                          ? "chevron_left"
                          : "chevron_right"}
                      </Icon>
                    </Fab>
                  )}
                </div>
                <div>
                  {activeStep < course.steps.length ? (
                    <Fab className="" color="secondary" onClick={handleNext}>
                      <Icon>
                        {theme.direction === "ltr"
                          ? "chevron_right"
                          : "chevron_left"}
                      </Icon>
                    </Fab>
                  ) : (
                    <Fab
                      sx={{
                        background: `${green[500]}!important`,
                        color: "white!important",
                      }}
                      to="/academy/courses"
                      component={Link}
                    >
                      <Icon>check</Icon>
                    </Fab>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      }
      leftSidebarContent={
        course && (
          <Stepper
            classes={{ root: "bg-transparent" }}
            activeStep={activeStep - 1}
            orientation="vertical"
          >
            {course.steps.map((step, index) => {
              return (
                <Step
                  key={step.id}
                  onClick={() => handleChangeActiveStep(index)}
                >
                  <StepLabel sx={{ cursor: "pointer!important" }}>
                    {step.title}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        )
      }
      innerScroll
      ref={pageLayout}
    />
  );
}

export default withReducer("academyApp", reducer)(Course);
