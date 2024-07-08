import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import _ from "@lodash";
import { ThemeProvider } from "@mui/material/styles";
import { selectMainTheme } from "app/store/fuse/settingsSlice";

function ProductHeader(props) {
  const dispatch = useDispatch();
  const methods = useFormContext();
  const { watch, getValues } = methods;

  const name = watch("name");
  const theme = useTheme();
  const history = useHistory();
  const mainTheme = useSelector(selectMainTheme);

  // function handleSaveProduct() {
  //   dispatch(saveProduct(getValues())).then(() => {
  //     history.push("/users/hoja");
  //   });
  // }

  // function handleEditProduct() {
  //   dispatch(editProduct(getValues())).then(() => {
  //     history.push("/users/hoja");
  //   });
  // }

  function handleRemoveProduct() {
    history.push("/users/hoja");
  }

  return (
    <div className="flex flex-1  items-center justify-between">
      <div className="flex items-center">
        <Typography
          style={{ color: "white" }}
          className="flex items-center sm:mb-12"
          component={Link}
          role="button"
          to="/users/hoja"
        >
          <Icon className="text-20">
            {theme.direction === "ltr" ? "arrow_back" : "arrow_forward"}
          </Icon>
          <span className="hidden sm:flex text-16 md:text-24 mx-12 font-bold">
            Nuevo Cliente
          </span>
        </Typography>
      </div>
      <div className="flex flex-1 items-center justify-center px-12">
        <ThemeProvider theme={mainTheme}>
          {/* <Paper
          component={motion.div}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          className="flex items-center w-full  px-8 py-4 rounded-16 shadow"
        >
          <Icon color="action">search</Icon>

          <Input
            placeholder="Search"
            className="flex flex-1 mx-8"
            disableUnderline
            fullWidth
            // value={searchText}
            inputProps={{
              'aria-label': 'Search',
            }}
            // onChange={(ev) => dispatch(setProductsSearchText(ev))}
          />
        </Paper> */}
        </ThemeProvider>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      >
        <Button
          style={{ backgroundColor: "red", color: "black" }}
          className="whitespace-nowrap mx-6"
          variant="contained"
          onClick={handleRemoveProduct}
          startIcon={
            <Icon className="hidden sm:flex" style={{ color: "black" }}>
              cancel
            </Icon>
          }
        >
          Cancelar
        </Button>
      </motion.div>
    </div>
  );
}

export default ProductHeader;
