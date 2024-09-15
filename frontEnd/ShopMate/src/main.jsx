import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home, AboutUs, Cart, SignUp, LogIn, Profile } from "./pages"
import { Provider } from 'react-redux';
import store from './store/store.js';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Home />
        ),
      },
      {
        path: "/about",
        element: (
          <AboutUs />
        ),
      },
      {
        path: "/cart",
        element: (
          <Cart />
        ),
      },
      {
        path: "/signUp",
        element: (
          <SignUp />
        ),
      },
      {
        path: "/logIn",
        element: (
          <LogIn />
        ),
      },
      {
        path: "/profile",
        element: (
          <Profile />
        ),
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
