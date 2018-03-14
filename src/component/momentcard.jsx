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
  title: string,
  video: ?any,
  message: ?Array<string>
|};

class momentCard extends React.Component<momentCardProps, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card  style={{
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 30,
        paddingTop: 10,
        paddingBottom: 10
      }}>
        <CardHeader title={this.props.title} />
        <CardMedia>
          <Player
            playsInline
            src={this.props.video}
          />   
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>コメントが入るらしい</CardText>
        <CardActions>
          <FlatButton label="comment" />
          <FlatButton label="like" />
        </CardActions>
      </Card>
    );
  }
}
export default momentCard;
