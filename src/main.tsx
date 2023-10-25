import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Birth_mortal from './components/Birth_mortal';
import Deficient_infra from './components/Deficient_infra';
import Doctors_per_cap from './components/Doctors_per_cap';
import Gdp from './components/Gdp';
import Illiteracy from './components/Illiteracy';
import No_healthcare from './components/No_healthcare';
import Population from './components/Population';
import Poverty from './components/Poverty';
import School_dropout from './components/School_dropout';
import { data, Data } from './data/data';
import ErrorPage from './components/ErrorPage.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/birth_mortal',
        element: <Birth_mortal data={data as Data[]} />,
      },
      {
        path: '/deficient_infra',
        element: <Deficient_infra data={data as Data[]} />,
      },
      {
        path: '/doctors_per_cap',
        element: <Doctors_per_cap data={data as Data[]} />,
      },
      {
        path: '/gdp',
        element: <Gdp data={data as Data[]} />,
      },
      {
        path: '/illiteracy',
        element: <Illiteracy data={data as Data[]} />,
      },
      {
        path: '/no_healthcare',
        element: <No_healthcare data={data as Data[]} />,
      },
      {
        path: '/population',
        element: <Population data={data as Data[]} />,
      },
      {
        path: '/poverty',
        element: <Poverty data={data as Data[]} />,
      },
      {
        path: '/school_dropout',
        element: <School_dropout data={data as Data[]} />,
      },
    ]
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		{/* <App /> */}
	</React.StrictMode>
);
