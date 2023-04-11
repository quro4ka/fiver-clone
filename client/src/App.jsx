import './App.css'
import './SwiperCustom.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Gigs } from './pages/gigs/Gigs'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'
import { FormRegister } from './components/formRegister/FormRegister'
import { FormAuth } from './components/formAuth/FormAuth'
import { FullCategory } from './pages/fullCategory/FullCategory'

const Layout = () => {
  return (
    <>
      <FormRegister />
      <FormAuth />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/gigs',
        element: <Gigs />,
      },
      {
        path: '/gig/:id',
        element: <FullCategory />,
      },
    ],
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
