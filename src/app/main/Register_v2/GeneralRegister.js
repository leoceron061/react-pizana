import FormHelperText from '@mui/material/FormHelperText';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link, useHistory, useParams } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import * as yup from 'yup';
import _ from '@lodash';
import { Controller, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { showMessage } from 'app/store/fuse/messageSlice';
import { generalRegister, verifyToken } from './GeneralRegisterFunctions';
import { constants, category_states } from '../../../constants'
import store from '../ID_store/store'
import { position } from 'stylis';
import "./GeneralRegister.css"
import { styled, darken } from '@mui/material/styles';
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
const Root = styled('div')(({ theme }) => ({
  '& .Login3-leftSection': {},

  '& .Login3-rightSection': {
    background: `linear-gradient(to right, ${theme.palette.action.disabled} 0%, ${darken(
      theme.palette.action.disabled,
      0.5
    )} 100%)`,

  },
}));
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#365376',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#365376',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

//the register page
//will eventually have token/user validation to swiftly go to dashboard if token is still valid

/**
 * Form Validation Schema
 */

const schema = yup.object().shape({
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(8, 'Password is too short - should be 8 characters minimum.'),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  acceptTermsConditions: yup.boolean().oneOf([true], 'The terms and conditions must be accepted.'),
});



function GeneralRegister() {
  let history = useHistory(); // used to redirect after submit
  const routeParams = useParams()
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);


  const { register, formState: { errors }, handleSubmit,control } = useForm({
    resolver: yupResolver(schema)
  });




  const onSubmitForm = async (data) => {
    try {
      const { email, password } = data
      console.log("dataaaregistrar",data)
      const proof = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password)
      if (!proof) {
        return dispatch(
          showMessage({
            message: "Password incorrect must include a Capital, Special Character and number",//text or html
            autoHideDuration: 6000,//ms
            anchorOrigin: {
              vertical: 'top',//top bottom
              horizontal: 'right'//left center right
            },
            variant: 'error'//success error info warning null
          }))
      }


      const { type } = routeParams


      const body = { email, password, type }
      console.log("boooooody",body)
      const result = await generalRegister(body)
      const { id } = result
      store.dispatch({ type: 'LOG_IN', payload: { id } })

      if (result.id) { history.replace(`/login`) }
      else {
        return dispatch(
          showMessage({
            message: (result),//text or html
            autoHideDuration: 6000,//ms
            anchorOrigin: {
              vertical: 'top',//top bottom
              horizontal: 'right'//left center right
            },
            variant: 'error'//success error info warning null
          }))
      }
    }
    catch (err) {
      console.error(err.message)
    }
  }

  return (

    <div
      style={{ backgroundColor: "#1E1E2F" }}
      className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Card className="w-full max-w-384">
            <CardContent
              style={{ backgroundColor: "#27293d" }}
              className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32"
            >
              <img
                className="w-129 m-62"
                src="assets/images/logos/pizanalogo.png"
                alt="logo"
              />

              <Typography style={{ color: "white" }}
                variant="h6"
                className="mt-16 mb-24 font-Regular text-18 sm:text-24"
              >
                Crea una cuenta
              </Typography>

              <form
                name="registerForm"
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit(onSubmitForm)}
              >

                <TextField
                  style={{ backgroundColor: "white" }}
                  {...register("email")}
                  className="mb-16"
                  placeholder="Correo electrónico"
                  defaultValue={localStorage.getItem("user_name") ? localStorage.getItem("user_name") : ""}
                  type="email"
                  error={!!errors.email}
                  helperText={errors?.email?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment >
                        <Icon className="text-20" color="#27293d" style={{color:"#27293d"}}>
                          email
                        </Icon>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  required
                  fullWidth
                />

                <TextField
                  style={{ backgroundColor: "white" }}
                  {...register("password")}
                  className="mb-16"
                  placeholder="Contraseña"
                  type="password"
                  error={!!errors.password}
                  helperText={errors?.password?.message}
                  variant="outlined"
                  required
                  fullWidth
                  InputProps={{
                    className: "pr-2",
                    type: showPassword ? "text" : "password",
                    endAdornment: (
                      <InputAdornment>
                        {/* <Icon className="text-20" color="action">
                          lock
                        </Icon> */}
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <Icon color='#27293d'  style={{color:"#27293d"}}>
                            {showPassword ? "visibility" : "visibility_off"}
                          </Icon>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />


                <TextField
                  style={{ textDecorationColor: "white", backgroundColor: "white" }}
                  {...register("passwordConfirm")}

                  className="mb-16"
                  placeholder="Contraseña (Confirmar)"
                  type="password"
                  error={!!errors.passwordConfirm}
                  helperText={errors?.passwordConfirm?.message}
                  variant="outlined"
                  required
                  fullWidth
                  InputProps={{
                    className: 'pr-2',
                    type: showPassword ? 'text' : 'password',
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                          <Icon color="#27293d"  style={{color:"#27293d"}}>
                            {showPassword ? 'visibility' : 'visibility_off'}
                          </Icon>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}

                />

                {/* <Controller
                  name="status_cat"
                  // control={control}
                  render={({ field: { onChange, value } }) => (
                    <Autocomplete
                      freeSolo
                      className="mt-8 mb-16"
                       options={category_states}
                       defaultValue={[category_states]}
                      value={value}
                      fullWidth
                      onChange={(event, newValue) => {
                        onChange(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select"
                          label="Status"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      )}
                    />
                  )}
                />
 */}

                <FormControl className="mt-8 mb-16" fullWidth>
                  <FormLabel className="mx-12" style={{color:"white"}}>Tipo de usuario</FormLabel>
                  <Controller
                   style={{ textDecorationColor: "white", backgroundColor: "white" }}
                    name="user_type"
                    control={control}
                    render={({ field }) => (
                      <Select className="mt-6 mb-16 mx-8"{...field} variant="outlined" style={{ width: "305px", textDecorationColor: "white", backgroundColor: "white" }} >
                        {/* 1 es activo---2 inactivo */}
                        <MenuItem key="1" value={"admin"}>Administrador</MenuItem>
                        <MenuItem key="2" value={"cliente"}>Cliente</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
                <FormControl className="items-center" error={!!errors.acceptTermsConditions}>
                  <div>
                    <Checkbox style={{ color: "#0B56BF" }} {...register("acceptTermsConditions")} />

                    <Link style={{ color: "#0B56BF" }} className="font-Regular" to="/terms">

                      He leído y acepto los términos y condiciones
                    </Link>
                  </div>
                  <FormHelperText>{errors?.acceptTermsConditions?.message}</FormHelperText>


                </FormControl>

                <Button style={{ color: "white", backgroundColor: "#29314c", borderColor: "#0B56BF" }}
                  variant="outlined"

                  className="w-224 mx-auto mt-16"
                  aria-label="Register"
                  type="submit"
                >
                  Crea una cuenta
                </Button>
              </form>

              <div className="flex flex-col items-center justify-center pt-32 pb-24">
                <span style={{ color: "white" }} className="font-Regular">
                  ¿Ya tienes una cuenta?</span>
                <Link style={{ color: "#0B56BF" }} className="font-Regular" to="/">
                  Iniciar sesiòn
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>

  );
}

export default GeneralRegister
