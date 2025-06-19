import { createBrowserRouter, RouterProvider } from 'react-router'
import DefaultLayout from '@/routes/layouts/Default'
import Home from '@/routes/pages/Home'
import About from '@/routes/pages/About'
import Movies from '@/routes/pages/Movies'
import MovieDetails from '@/routes/pages/MovieDetails'
import NotFound from '@/routes/pages/NotFound'
import SignIn from '@/routes/pages/SignIn'
import { requiresAuth } from '@/routes/loaders/requiresAuth'
import { onlyGuest } from '@/routes/loaders/onlyGuest'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/', // http://localhost:5173/
        element: <Home />
      },
      {
        path: '/about', // http://localhost:5173/about
        element: <About />
      },
      {
        path: '/movies', // http://localhost:5173/movies
        loader: requiresAuth,
        element: <Movies />,
        children: [
          {
            path: '/movies/:movieId', // http://localhost:5173/movies/영화ID
            element: <MovieDetails />
          }
        ]
      },
      {
        path: '/signin',
        loader: onlyGuest,
        element: <SignIn />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
