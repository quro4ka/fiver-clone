import './App.css'
import './SwiperCustom.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Gigs } from './pages/gigs/Gigs'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'
import { FormRegister } from './components/formRegister/FormRegister'
import { FormAuth } from './components/formAuth/FormAuth'
import { Gig } from './pages/gig/Gig'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <FormRegister />
          <FormAuth />
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
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
          element: <Gig />,
        },
      ],
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
