import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route,RouterProvider,createBrowserRouter,
  createRoutesFromElements} from "react-router-dom";
import './index.css'
import Layout from './Layout';
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Home from './components/Home/Home.jsx'
import Github, { gitHubDataloader } from './components/Github/Github.jsx'





const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" 
     // element={<Github/:username />}/>
      element={<Github />}  loader={gitHubDataloader}/>
    </Route>
  )

)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
