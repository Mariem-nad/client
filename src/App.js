import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Topbar from "./components/topbar/Topbar";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter as Router , Switch,Route } from "react-router-dom";
function App ()  {
    const user = false;
    return (
        <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts">
            <Home />
          </Route>
          <Route path="/register">
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/login">{user? <Home /> : <Login />}</Route>
          <Route path="/post/:id">
            <Single />
          </Route>
          <Route path="/write">{user ? <Write /> : <Login />}</Route>
          <Route path="/settings">
            {user ? <Settings /> : <Login />}
          </Route>
        </Switch>
      </Router>
    );
}
export default App;