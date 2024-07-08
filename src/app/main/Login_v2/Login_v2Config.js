import { lazy } from 'react';


//sets the pages display settings

const Login_v2Config = {
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
      component: lazy(() => import('./Login_v2')),
    },
    
  ],
};

export default Login_v2Config;
