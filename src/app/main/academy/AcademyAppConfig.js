import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const AcademyAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/academy/courses/:courseId/:courseHandle/:id_user',
      component: lazy(() => import('./course/Course')),
    },
    {
      path: '/academy/courses',
      component: lazy(() => import('./courses/Courses')),
    },
    {
      path: '/academy',
      component: () => <Redirect to="/academy/courses" />,
    },
  ],
};

export default AcademyAppConfig;
