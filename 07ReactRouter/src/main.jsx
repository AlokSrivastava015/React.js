import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Layout from './Layout.jsx'
import Contact from './Components/Contact/Contact.jsx'

// const router = createBrowserRouter([
//   {path :'/',
//     element: <Layout/>,
//     children : [
//       {
//          path: "",
//          elemant: <Home />
//       },
//       {
//         path: "About",
//         elemant: <About/> 
//       },
//       {
         
//         path: "Contact",
//         elemant: <Contact/> 
//       }
      
//     ]
//   }
// ]) 

const router = createBrowerRouter(
  createRoutesFromElements(
    <Route path='/' elemant={<Layout/>}>
      <Route path='' elemant ={<Home/>}/>
      <Route path='about' elemant ={<About/>}/>
      <Route path='contact' elemant ={<Contact/>}/>

    </Route>
  )
)
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
