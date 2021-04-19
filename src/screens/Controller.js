import React from 'react';
import Header from  '../common/header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class Controller extends React.Component {
        
          render(){
              return(
                  <Router>
                  <div>
                      <Route path='/' component={Header}/>
                  </div>
                  </Router>
              )

          }  
        
};
export default Controller;