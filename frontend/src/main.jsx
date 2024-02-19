import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import AdminScreen from './screens/AdminScreen.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import App from './App.jsx';
import {
  UsersTable,
  MotorsTable,
  UsedCarsTable,
  PlacesTable,
} from './components/Admin/ContentTable';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      {/* Admin users */}
      <Route path="" element={<AdminScreen />}>
        <Route path="/admin/users" element={<UsersTable />} />
        <Route path="/admin/motors" element={<MotorsTable />} />
        <Route path="/admin/used-cars" element={<UsedCarsTable />} />
        <Route path="/admin/places" element={<PlacesTable />} />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
