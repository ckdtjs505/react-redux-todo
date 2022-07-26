import { HashRouter, Route } from "react-router-dom";
import Detail from "./router/Detail";
import Home from "./router/Home";

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
