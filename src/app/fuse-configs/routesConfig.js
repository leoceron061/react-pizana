import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import ComingSoonPageConfig from 'app/main/Register/ComingSoonPageConfig';
import ErrorPageConfig from 'app/main/404/Error404PageConfig';
import FuseLoading from '@fuse/core/FuseLoading';
import Error404Page from 'app/main/404/Error404Page';
import Login from 'app/main/Login_v2/Login_v2';
import EmployeeRegisterConfig from 'app/main/Register_v2/EmployeeRegisterForms/EmployeeRegisterConfig';
import ResendConfig from 'app/main/Register_v2/EmployeeRegisterForms/ResendConfig';
import OTPConfig from 'app/main/Register_v2/EmployeeRegisterForms/OTPConfig';
import EmployeeLoginConfig from 'app/main/Login_v2/EmployeeLoginForms/EmployeeLoginConfig';
import EmployeeLoginOTPConfig from 'app/main/Login_v2/EmployeeLoginForms/EmployeeLoginOTPConfig';
import SubscriptionViewConfig from 'app/main/Register_v2/SubscriptionViewConfig';
import TermsViewConfig from 'app/main/Register_v2/TermsViewConfig';
import PrivacyConfig from 'app/main/Register_v2/PrivacyConfig';
import Login_v2Config from 'app/main/Login_v2/Login_v2Config'
import VerifyConfig from 'app/main/Verify/VerifyConfig';
import ForgotPasswordConfig from 'app/main/ForgotPassword/ForgotPasswordConfig';
import ResetErrorConfig from 'app/main/ForgotPassword/ResetErrorConfig';
import appsConfigs from 'app/main/appsConfigs'
import UserTypeConfig from 'app/main/Register/UserTypeConfig';

//to add a new page to the routes the Config file must go here 

//not sure if we need to add routes down below, so far it has worked by adding the routes and not adding them
const maint = false
if(maint == true){
  const routeConfigs = [Login_v2Config]

  var routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
    {
      exact: true,
      path: '/login',
      component: () => <Redirect to="/login" />,
    },
    {
      component: () => <Redirect to="/login" />,
    },
  ]
}


if(maint == false){
const routeConfigs = [
  ...appsConfigs,
  Login_v2Config,
  VerifyConfig
  ,EmployeeRegisterConfig,ForgotPasswordConfig,
  ComingSoonPageConfig,ResetErrorConfig,
  ErrorPageConfig,
  ResendConfig,OTPConfig,EmployeeLoginConfig,
  EmployeeLoginOTPConfig,SubscriptionViewConfig,TermsViewConfig,PrivacyConfig,
  UserTypeConfig
];//multiple config files go here 



//the comment below was already here 
var routes = [
  // if you want to make whole app auth protected by default change defaultAuth for example:
  // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
  // The individual route configs which has auth option won't be overridden.
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
  {
    exact: true,
    path: '/',
    component: () => <Redirect to="/login" />,
  },

  {
    path: '/loading',
    exact: true,
    component: () => <FuseLoading />,
  },
  {
    path: '/404',
    component: () => <Error404Page />,
  },
  {
    component: () => <Redirect to="/404" />,
  },
];

}

export default routes;
