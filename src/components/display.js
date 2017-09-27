import React, { Component } from 'react';
import { move } from '../actions';

import { connect } from 'react-redux';

class Display extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: parseInt(this.props.x),
            y: parseInt(this.props.y),
    };
}

    render() {

        if(this.props.playX === this.state.x && this.props.playY === this.state.y) {
            return (
                <div className="selected">
                </div>
            );
        }else {
            return (
                <div className="grids">
                </div>
            );
        }
  }
}

function state2props(state) {
    return {
        playX: state.x,
        playY: state.y,
    };
}

function dispatch2props(dispatch) {
    return {
    };
}

export default connect(state2props, dispatch2props)(Display);
