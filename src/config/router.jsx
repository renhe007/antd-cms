import React from "react"
import {Route,Router,browserHistory,IndexRoute,Link} from "react-router"
import LeftMenu from '../leftmenu'

 class Root extends React.Component{
  render(){
    return (
      <div className='main-app'>
        <LeftMenu />
        {this.props.children}
      </div>
    )
  }
}
let RouteConfig = (
  <Router history={browserHistory}>
    <Route path='/' component={ Root }>

    </Route>
  </Router>
);
export default RouteConfig;
