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

const BACKEND_URL = window.location.port === '3000'
    ? window.location.protocol +'//'+window.location.hostname +':18083' : window.location.origin;
class TableExampleSimple extends Component {

    //-----------------------------------------------------------------------------------------------------------------
    constructor(props) {
        super(props);
        var themeNum   = this.props.theme;
        var urlParams = this.props.params;

        this.state = {'users': '', theme: themeNum, urlParams: urlParams} ; // <-- initializing state

    }

    //-----------------------------------------------------------------------------------------------------------------
    getData() {
        var params = this.state.urlParams;
        var apiBaseUrl= null;
        console.log("GET params: " + params);
        //for prod
        apiBaseUrl =` ${BACKEND_URL}/getMortgageDecisions?${params}`;

        //for my testing
        // if(params[0] === ""){
        //     apiBaseUrl = `${BACKEND_URL}/emptyListTest`;
        //      // apiBaseUrl = `${BACKEND_URL}/getAll`;
        // } else {
        //      // apiBaseUrl = `http://localhost:18083/getMortgageDecisions?${params}`;
        //     // apiBaseUrl = `http://localhost:18083/emptyListTest`;
        //     // apiBaseUrl = `http://localhost:18083/emptyListTest`;
        //     apiBaseUrl =` ${BACKEND_URL}/getMortgageDecisions?${params}`;
        // }
        console.log("Target uri: " + apiBaseUrl);
        // var self = this;
        var payload = {}
        axios.get(apiBaseUrl, payload)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log("Login successfulllllll");
                    console.log("target uri: " + apiBaseUrl);

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
    displayRow( user, themNumber) {
        var codeNumber = themNumber;
        // var themeNum = this.state.theme;
        // if ( [user.themeCode] == codeNumber) {
            if ( [user.ThemeCode] == codeNumber) {
            return (<TableRow>
                    {/*<TableRowColumn  colSpan="5" style={{textAlign: 'right', whiteSpace: "normal"}}>{user.answerDescription}</TableRowColumn>*/}
                    {/*<TableRowColumn  colSpan="5" style={{textAlign: 'right', whiteSpace: "normal"}}>{user.questionDescription}</TableRowColumn>*/}
                    <TableRowColumn  colSpan="5" style={{textAlign: 'right', whiteSpace: "normal"}}>{user.AnswerDescription}</TableRowColumn>
                    <TableRowColumn  colSpan="5" style={{textAlign: 'right', whiteSpace: "normal"}}>{user.QuestionDescription}</TableRowColumn>
                </TableRow>
            );
        }
    }
    //-----------------------------------------------------------------------------------------------------------------
   table(users1, themNumber){
        return (
            <Table allRowsSelected={false}
                   selectable={false}
            >
                <TableBody displayRowCheckbox={false}
                           showRowHover={true}
                           stripedRows={true}
                >
                    { users1.map((user) => this.displayRow(user, themNumber)) }
                </TableBody>
            </Table>
        )
   }

   //---------------------------------------------
    displayTable(users){
        var users1 = users;
        if (Array.isArray ( users1 ) && users1.length > 0){

                return (

                    <div className="App" align="center">

                        <div class="col-sm-6">
                            <h1 className="tableName" align="right">מהות הבקשה</h1>
                            <p/>
                            {this.table(users1,1)}
                            <p/>

                            <h1 className="tableName" align="right">נתוני בקשה ונכס</h1>
                            <p/>
                            {this.table(users1,4)}

                        </div>
                        <div class="col-sm-6">

                            <h1 className="tableName"  align="right">פרטי לקוח</h1>
                            <p/>
                            {this.table(users1,2)}
                            <p/>
                            <h1 className="tableName" align="right">פרטים נוספים</h1>
                            <p/>
                            {this.table(users1,3)}
                        </div>

                    </div>

                ); // return

        }else{

            return (
                <div>
                <h1 className="errorMessage" align="right" >לא נמצאו פריטים תואמים </h1>
                </div>
            )
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
            return(
            <div>
                <h1 className="errorMessage" align="right" >טוען נתונים</h1>
            </div>
            )
        }
    }//render
    //-----------------------------------------------------------------------------------------------------------------
}//class

export default TableExampleSimple;