import React from "react"
import { BrowserRouter , Switch , Route }  from "react-router-dom"
import Menu from "./components/Menu"
import Albums from "./components/Albums"
import Posts from "./components/Posts"
import Todos from "./components/Todos"

const Routes = () =>(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Menu}/>
      <Route path="/posts" component={Posts}/>
      <Route path="/albums" component={Albums}/>
      <Route path="/todos" component={Todos}/>
    </Switch>
  </BrowserRouter>
)

export default Routes