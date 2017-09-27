import React, {
  Component,
} from 'react';
//connecting the store to component
import { connect } from 'react-redux';
import { move } from '../actions';
import GridDisplay from './grid_display'

class ControlPanel extends Component {
constructor(){
    super(

    )
}
  render() {

    return (
      <div>
          <p>Gas:{this.props.gas}</p>
          <p>Score:{this.props.score}</p>
          <p>Position:({this.props.x}, {this.props.y})</p>
          <section id="buttons">
              <div>
                  <button onClick={()=> this.props.up()}>Up</button>
              </div>
              <div>
                  <button onClick={()=> this.props.left()}>Left</button>
                  <button onClick={()=> this.props.right()}>Right</button>
              </div>
              <div>
                  <button onClick={()=> this.props.down()}>Down</button>
              </div>

          </section>


      </div>
    );
  }
}


function stateToProps(state){

    return{
    gas: state.gas,
    score: state.score,
    x: state.x,
    y: state.y,
};
}

function dispatchTwoProps(dispatch){

    return{
        up: ()=> dispatch(move(0, 1)),
        down: ()=> dispatch(move(0, -1)),
        left: ()=> dispatch(move(-1, 0)),
        right: ()=> dispatch(move(1, 0)),
    };

}
export default connect(stateToProps,dispatchTwoProps) (ControlPanel);
