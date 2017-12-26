import React,{Component} from 'react';
import axios from 'axios';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class TableExampleSimple extends Component {
    //-----------------------------------------------------------------------------------------------------------------
    constructor(props) {
        super(props);
       // var  params= {
       //      fixedHeader: true,
       //      fixedFooter: true,
       //      stripedRows: false,
       //      showRowHover: false,
       //      selectable: true,
       //      multiSelectable: false,
       //      enableSelectAll: false,
       //      deselectOnClickaway: true,
       //      showCheckboxes: false,
       //      height: '300px'
       //  };
        var themeNum   = this.props.theme;

        this.state = {'users': '', theme: themeNum} ; // <-- initializing state

    }

    //-----------------------------------------------------------------------------------------------------------------
    getData() {
        var apiBaseUrl = "http://localhost:8080/getAll";
        // var self = this;
        var payload = {}
        axios.get(apiBaseUrl, payload)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log("Login successfull");
                    this.setState({'users': response.data});
                }
            }/*.then-func*/)
        /*.then*/
    }

    //-----------------------------------------------------------------------------------------------------------------
    componentDidMount() {
        this.getData();
    }

    //-----------------------------------------------------------------------------------------------------------------
    displayRow( user) {

        var themeNum = this.state.theme;
        if ( [user.themeCode] == themeNum) {


            return (<TableRow>
                    <TableRowColumn colSpan="2" style={{textAlign: 'right'}}>{user.answerDescription}</TableRowColumn>
                    <TableRowColumn colSpan="1" style={{textAlign: 'right'}}>{user.questionDescription}</TableRowColumn>
                </TableRow>
            );
        }
    }
    //-----------------------------------------------------------------------------------------------------------------
    displayTable(users){
        var users1 = users;
        if (Array.isArray ( users1 ) ){
            return (
                <div>

                    <Table allRowsSelected={false}
                           selectable={false}
                           >
                        <TableBody displayRowCheckbox={false}
                                   showRowHover={true}
                                   stripedRows={true}

                        >
                            { users1.map( (user) => this.displayRow(user) ) }
                        </TableBody>

                    </Table>
                </div>
            ); // return
        }else{
            return ( { users1 } );
        }
    }
    //-----------------------------------------------------------------------------------------------------------------
    render(){
        var users = this.state.users;
        if (users !== null && users !== ""){
            return(
                this.displayTable(users)
            );
        }else{
            return ("No users");
        }
    }//render
    //-----------------------------------------------------------------------------------------------------------------
}//class

export default TableExampleSimple;