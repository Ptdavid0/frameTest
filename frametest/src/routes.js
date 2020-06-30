import React from "react"
import { Switch , Route }  from "react-router-dom"
import Menu from "./components/Menu"
import Albums from "./components/Albums"
import Posts from "./components/Posts"
import Todos from "./components/Todos"

const Routes = () =>(
  
    <Switch>
      <Route path="/" exact component={Menu}/>
      <Route path="/posts" component={Posts}/>
      <Route path="/albums" component={Albums}/>
      <Route path="/todos" component={Todos}/>
    </Switch>
)

export default Routes