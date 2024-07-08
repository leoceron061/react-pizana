import { lazy } from 'react';
import UserType from './UserType'



const UserTypeConfig = {
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
      path: '/:id/usr-type/:type?/:step?',
      component: UserType,
    },
  ],
};

export default UserTypeConfig
