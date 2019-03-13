import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";

import Home from "./components/pages/Home";
import FileImport from "./components/pages/FileImport";
import Assembly from "./components/pages/Assembly";
import Indexing from "./components/pages/Indexing";
import CommitReview from "./components/pages/CommitReview";
import BatchLog from "./components/pages/BatchLog";
import Dashboard from "./components/pages/Dashboard";
import DeniedDocuments from "./components/pages/DeniedDocuments";

import Footer from "./components/footer/Footer";
import "./App.css"; // App.js uses these styles

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <div className="mainWrap">
            <Header />

            <Route exact name="home" path="/" component={Home} />
            <Route
              name="file import"
              path="/fileimport"
              component={FileImport}
            />
            <Route name="assembly" path="/Assembly" component={Assembly} />
            <Route
              name="Commit Review"
              path="/commitreview"
              component={CommitReview}
            />
            <Route name="batch log" path="/batchlog" component={BatchLog} />
            <Route name="indexing" path="/indexing" component={Indexing} />
            <Route name="dashboard" path="/dashboard" component={Dashboard} />
            <Route
              name="denied documents"
              path="/denieddocuments"
              component={DeniedDocuments}
            />

            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
