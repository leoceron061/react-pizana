import { lazy } from 'react';



const TermsViewConfig = {
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
      path: '/terms/:terms_code?',
      component: lazy(() => import('./TermsView')),
    },
  ],
};

export default TermsViewConfig
