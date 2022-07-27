import { HashRouter, Route } from "react-router-dom";
import Detail from "./views/Detail/Detail";
import Home from "./views/Home/Home";

const App = ()  =>{
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/" component={Home}></Route>
        <Route path="/:id" component={Detail}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
