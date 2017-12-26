import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TableExampleSimple from './Table1';

class App extends Component {
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <h1 className="App-title">YL Users Demo list </h1>
//      </header>

    render() {
        return (
            <MuiThemeProvider>


                <div className="App">
                    <div>
                    <h1>פרטי לקוח</h1>
                    </div>
                    <TableExampleSimple theme ="2"/>
                    <h1>פרטים נוספים</h1>
                    <TableExampleSimple theme ="3"/>
                    <h1>מהות הבקשה</h1>
                    <TableExampleSimple theme ="1"/>
                    <h1>נתוני בקשה ונכס</h1>
                    <TableExampleSimple theme ="4"/>
                </div>
            </MuiThemeProvider>
        ); // return
    }//render()
}//class App

export default App;