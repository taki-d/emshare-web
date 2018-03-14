// @flow
"use strict";
import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import { Player } from 'video-react';

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardText,
  CardTitle
} from "material-ui/Card";

type momentCardProps = {|
  video: string,
  name: string,
  time: number,
  icon: ?string
|};

const Unix_timestamp = (t) => {
    var dt = new Date(t*1000);
    var hr = dt.getHours();
    var m = "0" + dt.getMinutes();
    var s = "0" + dt.getSeconds();
    return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
};

class momentCard extends React.Component<momentCardProps, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card style={{
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 30,
        paddingTop: 10,
        paddingBottom: 10
      }}>
        <CardHeader
          title={this.props.name}
          subtitle={Unix_timestamp()}
          avatar={this.props.icon}
        />
        <CardMedia>
          <Player
            playsInline
            src={this.props.video}
          />   
        </CardMedia>
        <CardActions>
          <FlatButton label="comment" />
          <FlatButton label="like" />
        </CardActions>
      </Card>
    );
  }
}
export default momentCard;
