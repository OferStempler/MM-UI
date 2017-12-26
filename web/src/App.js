import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TableExampleSimple from './Table1';

function getParams(){

    var params = window.location.search.substring(1).split("?");
    // var test = "123";
    return params;
}


function f1() {
    alert("test");
}
class App extends Component {




    render() {
        return (
            <MuiThemeProvider>


                {/*<div onLoad={getParams()} className="App" align="center" >*/}
                <div className="App" align="center" >


                    <div class="col-sm-6">
                        <h1 className="tableName" align="right">מהות הבקשה</h1>
                        <TableExampleSimple params = {getParams()} theme ="1" />
                        <h1 className="tableName" align="right">נתוני בקשה ונכס</h1>
                        <TableExampleSimple params = {getParams()} theme ="4"/>
                    </div>
                    <div class="col-sm-6">
                    <h1 className="tableName"  align="right">פרטי לקוח</h1>

                    <TableExampleSimple params = {getParams()} theme ="2"/>

                    <h1 className="tableName" align="right">פרטים נוספים</h1>
                    <TableExampleSimple params = {getParams()} theme ="3"/>
                    </div>

                </div>
            </MuiThemeProvider>
        ); // return
    }//render()
}//class App

export default App;