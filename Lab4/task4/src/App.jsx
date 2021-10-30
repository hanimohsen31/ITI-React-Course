import { Route, Redirect, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Posts } from "./pages/Posts";
import { UserDetails } from "./pages/UserDetails";
import { Users } from "./pages/Users";
import { ContactUs } from "./pages/ContactUs";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Login } from './pages/Login/index';

export const App = () => {
  return (
    <>
      <div className="container">
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/posts">
          <Navbar />
            <Posts />
          </Route>

          <ProtectedRoute path="/users/:id">
          <Navbar />

            <UserDetails />
          </ProtectedRoute>

          <ProtectedRoute path="/users">
          <Navbar />

            <Users />
          </ProtectedRoute>

          <Route path="/contactus">
          <Navbar />

            <ContactUs />
          </Route>

          <Route path="/">
            <Redirect to="/login" />
          </Route>
          
        </Switch>
      </div>
    </>
  );
};
