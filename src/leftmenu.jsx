import React from "react";
import {render} from "react-dom";
import route from "./config/router.jsx";
import {Route,Router,browserHistory,IndexRoute,Link} from "react-router"

export default class LeftMenu extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className='leftmenu'>
        <ul>
          <Link to='/' ><li>菜单1</li></Link>
          <Link to='/' ><li>菜单1</li></Link>
          <Link to='/' ><li>菜单1</li></Link>
          <Link to='/' ><li>菜单1</li></Link>
          <Link to='/' ><li>菜单1</li></Link>
        </ul>
      </div>
    )
  }
}
