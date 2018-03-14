// @flow
"use strict";
import React ,{Component} from "react";
import ReactDom  from "react-dom";
import {
  deepPurple500,
  deepPurple700,
  deepPurple100,
  deepOrangeA400
} from "material-ui/styles/colors";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import AppBar from "material-ui/AppBar";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

import { BrowserRouter as Router, Route, Link ,withRouter} from "react-router-dom";

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardText
} from "material-ui/Card";
import Paper from "material-ui/Paper";
import MomentCard from "./component/momentcard";

//const URLENDPOINT="http://localhost:8000"
const API_ENDPOINT="https://3zeeqw5v91.execute-api.us-west-1.amazonaws.com/prod";
type moment = {|
  id: number,
  video:any,
|};
// type comment = {|
//   comment:
// //   comment_childs:  
// // |}
type AppState = {|
  edit_dialog_open:boolean,
  edit_dialog:string,
  now_c_page:string,
  getNewMoment:JSON
|};

const FloatingStyle = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
};
const customContentStyle = {
  width: "100%",
  maxWidth: "none",
};

class App extends Component<> {
  
  state: AppState ={
    edit_dialog_open:false,
    edit_dialog:"",
    now_c_page:"/",
    getNewMoment:{}
  };

  handleAdd = () => {
    this.setState({
      now_c_page:"/upload",
    });
    this.props.history.push('/upload');
  };

  getNewMomentList = (session, user, count) => {
    (() => {
      const onAddState = (data) =>{
        console.log(data);
        this.setState({
          getNewMoment:data,
        });
        console.log(data);
      };
      fetch(`${API_ENDPOINT}/select/list?session=${session}&user=${user}&count=${count}`,{
        method: 'GET',
      }).then(function(response) {
        return response.json();
      }).then(function(json) {
        onAddState(json)
      });
    })();
  };
  render = () => {
    const {
      getNewMoment,
    } = this.state;
    const momentList = getNewMoment["moments"];
    return (
      <div>
        <div style={{ margin: 8 }} >
          <Paper
            style={{
              position: "relative",
            }}
          >
            {this.getNewMomentList(3490840, 35480, 1)}
            {
              momentList&&momentList.map(({ moment }) =>(
                <MomentCard name={moment["user"]["name"]} icon={moment["user"]["icon"]} video={moment["video"]} />
              ))
            }
        
            <FloatingActionButton
              style={FloatingStyle}
              onClick={this.handleAdd}
            >
              <ContentAdd />
            </FloatingActionButton>
          </Paper>
        </div>
      </div>
    );
  };
};


class Upload extends Component<> {
  render = () => {
    return (
      <div>
        <Paper
          style={{
            position: "relative",
          }}
        >
        </Paper>
      </div>
    );
  };
};

const rootElement = document.getElementById("app");

if (rootElement) {
  injectTapEventPlugin();

  const muiTheme = getMuiTheme({
    fontFamily: "Noto Sans Japanese, sans-serif",
    palette: {
      primary1Color: deepPurple500,
      primary2Color: deepPurple700,
      primary3Color: deepPurple100,
      accent1Color: deepOrangeA400
    }
  });

  ReactDom.render(
    <MuiThemeProvider
      muiTheme={muiTheme}
      style={{
        fontFamily: "Noto Sans Japanese, sans-serif"
      }}
    >
      <AppBar title={"emShere"} style={{margin: "-5px"}}/>
      <Router>
        <div>
          <Route exact path='/' component={App} />
          <Route path='/upload' component={Upload} />
        </div>
      </Router>

    </MuiThemeProvider>,
    rootElement
  );
}
// (()=>(fetch(`https://3zeeqw5v91.execute-api.us-west-1.amazonaws.com/test/select/list?session=3490840&user=35480&count=1`,{
//   method: 'GET',
//   mode: 'cors',
//   }).then(function(response) {
//     console.log(response);
//   return response.json();
// }).then(function(json) {
//   console.log('Request successful', json);
// })))();

// (()=>(fetch(`https://3zeeqw5v91.execute-api.us-west-1.amazonaws.com/test/select/list2?session=3490840&user=35480&count=1`,{
//   method: 'GET',
//   mode: 'cors',
//   }).then(function(response) {
//     console.log(response);
//   })))();

// fetch(`https://3zeeqw5v91.execute-api.us-west-1.amazonaws.com/test/select/list?session=3490840&user=35480&count=1`,{
//     method: 'GET',
//     mode: 'cors',
//     headers: {
//       "Access-Control-Allow-Origin":"*"
//     },
// }).then(function(response) {
//   console.log(response);
// })