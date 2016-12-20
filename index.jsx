import React from "react";
import {render} from "react-dom";
import route from "./src/config/router.jsx";
require('./src/style/main.css')

render(
  <div style={{backgroundColor:"#ececec",padding:"20px 0"}}>
    {route}
  </div>
  ,document.getElementById('root')
);
