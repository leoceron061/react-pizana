import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectMainTheme } from "app/store/fuse/settingsSlice";

function ProductsHeader(props) {
  const dispatch = useDispatch();
  const searchText = useSelector(
    ({ eCommerceApp }) => eCommerceApp.products.searchText
  );
  const mainTheme = useSelector(selectMainTheme);

  return (
    <div className="flex flex-1  items-center justify-between">
      <div className="flex items-center">
        <Icon
          component={motion.span}
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { delay: 0.2 } }}
          className="text-24 md:text-32"
        >
          contact_page
        </Icon>
        <Typography
          style={{ color: "white" }}
          component={motion.span}
          initial={{ x: -20 }}
          animate={{ x: 0, transition: { delay: 0.2 } }}
          delay={300}
          className="hidden sm:flex text-16 md:text-24 mx-12 font-bold"
        >
          Lista de Clientes
        </Typography>
      </div>
      <div className="flex flex-1 items-center justify-center px-12">
        <ThemeProvider theme={mainTheme}>
          <Paper
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
              value={searchText}
              inputProps={{
                "aria-label": "Search",
              }}
              onChange={(ev) => dispatch(setProductsSearchText(ev))}
            />
          </Paper>
        </ThemeProvider>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      >
        {/* button para redireccionar a un nuevo material */}

        <Button
          style={{ color: "white" }}
          component={Link}
          to="/users/hoja/new"
          className="whitespace-nowrap mx-6"
          variant="contained"
          color="third"
        >
          <Icon color="white">person_add</Icon>
          <span style={{ color: "white" }} className="hidden sm:flex">
            Crear Cliente
          </span>
          <span className="flex sm:hidden">Nuevo</span>
        </Button>
      </motion.div>
    </div>
  );
}

export default ProductsHeader;
