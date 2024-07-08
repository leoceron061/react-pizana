import { lazy } from 'react';



const PrivacyConfig = {
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
      path: '/privacy/:privacy_code?',
      component: lazy(() => import('./PrivacyView')),
    },
  ],
};

export default PrivacyConfig
