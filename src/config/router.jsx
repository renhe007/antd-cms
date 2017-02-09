import React from "react"
import {Route,Router,browserHistory,IndexRoute,Link} from "react-router"

import TablePage from '../table/index'

 class Root extends React.Component{
  render(){
    return (
      <div >
        {this.props.children}
      </div>
    )
  }
}
let RouteConfig = (
  <Router history={browserHistory}>
    <Route path='/' component={ Root }>
      <IndexRoute  component={ TablePage } />

    </Route>
  </Router>
);
export default RouteConfig;
