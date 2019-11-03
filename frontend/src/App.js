import React from 'react';
import {Provider} from "react-redux";
import store from "./store";
import Register from "./components/LoginPage";
import {BrowserRouter, Route} from "react-router-dom";
import SitePage from "./components/SitePage";
import AddSiteComponent from "./components/AddSiteComponent";
import UppdateSiteComponent from "./components/UppdateSiteComponent";
function App() {
  return (

      <Provider store={store}>
          <BrowserRouter>
              <div className="App">

                  <Route exact path="/" component={Register}/>
                  <Route  exact path="/success/:id" component={SitePage}/>
                  <Route exact path="/addSite" component={AddSiteComponent}/>
                  <Route exact path="/EditSite/:id" component={UppdateSiteComponent}/>

              </div>
          </BrowserRouter>

      </Provider>


  );
}

export default App;
