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

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardText
} from "material-ui/Card";


class App extends Component {
  render = () => {
    return (
      <div>
        <AppBar title={"emoShere"} />
        <div style={{ margin: 8 }} >
        </div>
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
      <App />
    </MuiThemeProvider>,
    rootElement
  );
}
