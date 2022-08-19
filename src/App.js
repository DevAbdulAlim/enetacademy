import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <Fragment>
      <CssBaseline>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </CssBaseline>
    </Fragment>
  );
}

export default App;
