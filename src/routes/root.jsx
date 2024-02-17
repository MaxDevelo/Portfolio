import {
  Outlet
} from "react-router-dom";

import './index.scss'
import Header from './Header/header'

function Root() {

  return (
    <div className="parent">
      <Header />
      <Outlet />
    </div>
  )
}

export default Root;
