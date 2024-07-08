import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const ECommerceAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/users/hoja/:productId/:productName?',
      component: lazy(() => import('./product/Product')),
    },
    {
      path: '/users/hoja',
      component: lazy(() => import('./products/Products')),
    },
    {
      path: '/users',
      component: () => <Redirect to="/users/hoja" />,
    },
  ],
};

export default ECommerceAppConfig;
