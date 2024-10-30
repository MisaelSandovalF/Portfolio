import { createBrowserRouter } from "react-router-dom"

import FrameCurriculum from "../pages/FrameCurriculum"
import LayoutPublic from "../pages/LayoutPublic"



export const router = createBrowserRouter([

  {
      path: '/',
      element: <LayoutPublic/>
  },
  {
    path: '/CV',
    element: <FrameCurriculum/>
  }
])