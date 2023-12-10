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
import Login from './pages/Login';
import Domains from './pages/Domains';
import Huddle from './pages/Huddle';
import Trending from './pages/Trending';
import ProjectForm from './components/ProjectForm';
import Footer from './utils/Footer';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route index path="/" element={<Landing />}/>
    <Route path="dashboard" element={<Dashboard />}/>
    <Route path="login" element={<Login />}/>
    <Route path="domains" element={<Domains />}/>
    <Route path="huddle" element={<Huddle />}/>
    <Route path="trending" element={<Trending />}/>
    <Route path="project" element={<ProjectForm />}/>
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



