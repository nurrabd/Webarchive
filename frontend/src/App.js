import React from 'react';
import {Provider} from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Register from "./components/LoginPage";
import Footer from "./components/Footer";
import {BrowserRouter, Router, Route} from "react-router-dom";
import SitePage from "./components/SitePage";
import AddSiteComponent from "./components/AddSiteComponent";
function App() {
  return (

      <Provider store={store}>
          <BrowserRouter>
    <div className="App">

        <Header/>

        <Route exact path="/" component={Register}/>
        <Route  exact path="/success/:id" component={SitePage}/>
        <Route exact path="/addSite" component={AddSiteComponent}/>
   <Footer/>

    </div>
          </BrowserRouter>

      </Provider>


  );
}

export default App;
