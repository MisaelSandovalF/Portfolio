import {  createHashRouter } from "react-router-dom"

import FrameCurriculum from "../pages/FrameCurriculum"
import LayoutPublic from "../pages/LayoutPublic"



export const router = createHashRouter([

  {
      path: '/',
      element: <LayoutPublic/>
  },
  {
    path: '/CV',
    element: <FrameCurriculum/>
  }
])