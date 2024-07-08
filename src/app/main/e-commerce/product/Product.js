import FuseLoading from "@fuse/core/FuseLoading";
import FusePageCarded from "@fuse/core/FusePageCarded";
import { useDeepCompareEffect } from "@fuse/hooks";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import withReducer from "app/store/withReducer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import _ from "@lodash";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { styled } from "@mui/material/styles";
import { resetProduct, newProduct, getProduct } from "../store/productSlice";
import reducer from "../store";
import ProductHeader from "./ProductHeader";
import UserForm from "./tabs/UserForms";
import BlueSheet from "./tabs/BlueSheet";
import YellowSheet from "./tabs/YellowSheet";
import OrangeSheet from "./tabs/OrangeSheet";
import RedSheet from "./tabs/RedSheet";
import RoseSheet from "./tabs/RoseSheet";
import UploadsFiles from "./tabs/UploadsFiles";


import {selectNavigation} from "app/store/fuse/navigationSlice";



const Root = styled(FusePageCarded)(({ theme }) => ({
  "& .FusePageCarded-header": {
    minHeight: 50,
    height: 50,
    alignItems: "center",
    [theme.breakpoints.up("sx")]: {
      minHeight: 50,
      height: 50,
    },
  },
  // '& .FusePageCarded-content': {
  //   display: 'flex',
  // },
  // '& .FusePageCarded-contentCard': {
  //   overflow: 'hidden',
  // },
}));

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  nombrecliente: yup
    .string()
    .required("You must enter a material name")
    .min(5, "The material name must be at least 1 character"),
});

function Product(props) {
  const dispatch = useDispatch();
  const product = useSelector(({ eCommerceApp }) => eCommerceApp.product);
  const navigation = useSelector(selectNavigation);
  const routeParams = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [noProduct, setNoProduct] = useState(false);

  const methods = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = methods;
  const form = watch();

  useDeepCompareEffect(() => {
    function updateProductState() {
      const { productId } = routeParams;

      if (productId === "new") {
        /**
         * Create New Product data
         */

        dispatch(newProduct());
      } else {
        /**
         * Get Product data
         */

        dispatch(getProduct(routeParams)).then((action) => {
          /**
           * If the requested product is not exist show message
           */

          if (!action.payload) {
            setNoProduct(true);
          }
        });
      }
    }
    updateProductState();
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (!product) {
      return;
    }
    /**
     * Reset the form on product state changes
     */
    reset(product);
  }, [product, reset]);

  useEffect(() => {
    return () => {
      /**
       * Reset Product on component unload
       */

      dispatch(resetProduct());
      setNoProduct(false);
    };
  }, [dispatch]);

  /**
   * Tab Change
   */
  function handleTabChange(event, value) {
    setTabValue(value);
  }

  /**
   * Show Message if the requested products is not exists
   */

  if (noProduct) {
    return (
      <motion.div>
        <Typography color="textSecondary" variant="h5">
          No hay Clientes !
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/users/hoja"
          color="inherit"
        >
          Ir a la pagina de Inicio
        </Button>
      </motion.div>
    );
  }

  if (
    _.isEmpty(form) ||
    (product &&
      routeParams.productId != product.client_id &&
      routeParams.productId !== "new")
  ) {
    return <FuseLoading />;
  }

  







  
  return (
    <FormProvider {...methods}>
      <Root
        header={<ProductHeader />}
        contentToolbar={
          <Tabs
            style={{ borderRadius: "30px" }}
            className="mt-8 "
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              className="h-60 text-14 truncate font-bold"
              id='DetalleCaso'
              style={{ backgroundColor: "#EEEEEE", color: "black" }}
              label={navigation[7].title}
            />
            <Tab
              className="h-60 text-14 truncate font-bold"
              style={{ backgroundColor: "#91e9f7", color: "black" }}
              label={navigation[8].title}
            />
            <Tab
              className="h-60 text-14 truncate font-bold"
              style={{ backgroundColor: "#FFF176", color: "black" }}
              label={navigation[9].title}
            />
            <Tab
              className="h-60 text-14 truncate font-bold"
              style={{ backgroundColor: "#FFB74D", color: "black" }}
              label={navigation[10].title}
            />
            <Tab
              className="h-60 text-14 truncate font-bold"
              style={{ backgroundColor: "#EF5350", color: "black" }}
              label={navigation[11].title}
            />
            <Tab
              className="h-60 text-14 truncate font-bold"
              style={{ backgroundColor: "pink", color: "black" }}
              label={navigation[12].title}
            />
            <Tab
              className="h-60 text-14 truncate font-bold"
              style={{ backgroundColor: "#EEEEEE", color: "black" }}
              label={navigation[13].title}
            />
          </Tabs>
        }
        content={
          // se pone los tab para crear un material new o editar

          <div>
            <div className={tabValue !== 0 ? "hidden" : ""}>
              <UserForm props={product.client_id} />
            </div>

            <div className={tabValue !== 1 ? "hidden" : ""}>
              <BlueSheet props={product.client_id} />
            </div>

            <div className={tabValue !== 2 ? "hidden" : ""}>
              <YellowSheet props={product.client_id} />
            </div>

            <div className={tabValue !== 3 ? "hidden" : ""}>
              <OrangeSheet props={product.client_id} />
            </div>

            <div className={tabValue !== 4 ? "hidden" : ""}>
              <RedSheet props={product.client_id} />
            </div>

            <div className={tabValue !== 5 ? "hidden" : ""}>
              <RoseSheet props={product.client_id} />
            </div>

            <div className={tabValue !== 6 ? "hidden" : ""}>
              <UploadsFiles props={product.client_id} />
            </div>
          </div>
        }
        innerScroll
      />
    </FormProvider>
  );
}

export default withReducer("eCommerceApp", reducer)(Product);
