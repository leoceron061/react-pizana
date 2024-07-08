import { lazy} from 'react';

//sets the pages display settings

const ResendConfig = {

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
      exact: true,
      path: "/resend",
      component: lazy(() => import('./Resend')),
    },
  ],
};

export default ResendConfig;
