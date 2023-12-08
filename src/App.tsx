import React from 'react';
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom';
import Landing from './pages/Landing';
import theme from './theme';
import { ColorModeScript } from '@chakra-ui/react'
import Dashboard from './pages/Dashboard';
import Footer from './utils/Footer';
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route index path="/" element={<Landing />}/>
    <Route path="dashboard" element={<Dashboard />}/>
    <Route path="login" element={<Login />}/>
    </Route>

  )
)


function App() {

  return (
    <div className="App">
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />

    <RouterProvider router={router} />
    <Footer/>
    </div>

  );
}

export default App;
