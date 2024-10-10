
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './layouts/LayoutOne'
import Home from './pages/Home'

function App() {
  const MyRoute= createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>} />
    </Route>
  ))
  


  return (
    <>
      <RouterProvider router={MyRoute}/>
    </>
  )
}

export default App
