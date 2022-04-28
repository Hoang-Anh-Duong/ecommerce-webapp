import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import AdminComponent from "./js/AdminRoute";
import UserComponent from "./js/UserRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer />
        <Switch>
          <Route path="/admin" component={AdminComponent} />
          <Route path="/" component={UserComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
