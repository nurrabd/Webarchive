import React from 'react';
import {Provider} from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Register from "./components/LoginPage";
import Footer from "./components/Footer";
import {BrowserRouter, Router, Route} from "react-router-dom";
import SitePage from "./components/SitePage";
function App() {
  return (

      <Provider store={store}>
          <BrowserRouter>
    <div className="App">

        <Header/>

        <Route exact path="/" component={Register}/>
        <Route  path="/success/:id" component={SitePage}/>
   <Footer/>

    </div>
          </BrowserRouter>

      </Provider>


  );
}

export default App;
