import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from './navbar/NavBar.js';
import Search from './search/Search.js';



class Application extends Component {
      render() {
            return ( <
                  MuiThemeProvider >
                  <
                  div >
                  <
                  NavBar / >
                  <
                  Search / >
                  </div> 
                  </MuiThemeProvider>
            );
      }
}


export default Application;