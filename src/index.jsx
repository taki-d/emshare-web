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

const URLENDPOINT="http://localhost:8000"


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
  now_c_page:string
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
    now_c_page:"/"
  };

  handleAdd = () => {
    this.setState({
      now_c_page:"/upload",
    });
    this.props.history.push('/upload');
    };

  render = () => {
    return (
      <div>
        <div style={{ margin: 8 }} >
          <Paper
            style={{
              position: "relative",
            }}
          >
            <MomentCard title={"hoge"} video={"path"}/>

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
