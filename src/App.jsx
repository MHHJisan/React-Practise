import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Postcard } from './components'
import { BaseLayout } from './layouts/BaseLayout'
import { Route, RouterProvider } from "react-router-dom";
import { Router } from "./Router";

function App() {
  return <RouterProvider router={Router} />
}

export default App
