import React from "react";
import {render} from "react-dom";
import route from "./src/config/router.jsx";
require('./src/style/main.css')
import 'antd/dist/antd.css'
import LeftMenu from './src/leftmenu'

render(
  <div style={{backgroundColor:"#ececec",padding:"20px 0",height:"100%"}}>
    <div className='main-app'>
      <LeftMenu />
      <div className='main-right'>
        {route}
      </div>
    </div>
  </div>
  ,document.getElementById('root')
);
