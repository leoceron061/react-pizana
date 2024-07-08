import { lazy } from 'react';
import Login from './LoginPage'


//sets the pages display settings

const LoginPageConfig = {
    settings: {
        layout: {
            style : 'layout1',
            config: {
              
                navbar : {
                    display : false,
                    
                },
                toolbar: {
                    display : false,
                },
                footer : {
                    display : false,
                    
                },
                mode   : 'fullwidth'
            }
        },
        
    },
  routes: [
    {
      path: '/login',
      component: Login,
    },
    
  ],
};

export default LoginPageConfig;
