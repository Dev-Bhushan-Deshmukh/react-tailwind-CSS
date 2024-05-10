import { Info } from "./components/Info/Info"
import { About } from "./components/about/about"
import { Nav } from "./components/nav/Navbar"
import { Home } from "./components/pages/homepage/home"
import { Section } from "./components/section/section"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { Skills } from "./components/skills/skills"

function App() {
let router=createBrowserRouter([
{path:'',element:<Home/>, children:[
  {index:true,element:<Info/>},
{path:'about',element:<About/>},
{path:'project',},
{path:'skills',element:<Skills/>},
{path:'contact',}




]}



])

  return (
  <RouterProvider router={router}>


  </RouterProvider>
  )
}

export default App
