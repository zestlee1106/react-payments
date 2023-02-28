import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import List from "./routes/card/List";
import Layout from "./components/Layout";
import Add from "./routes/card/Add";
import Complete from "./routes/card/Complete";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/add" />
        </Route>
        <Route path="/add">
          <Layout>
            <Add></Add>
          </Layout>
        </Route>
        <Route path="/complete/:id">
          <Layout>
            <Complete></Complete>
          </Layout>
        </Route>
        <Route path="/complete">
          <Layout>
            <Complete></Complete>
          </Layout>
        </Route>
        <Route path="/list">
          <Layout>
            <List></List>
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
