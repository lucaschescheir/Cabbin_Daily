import { createStore } from 'redux';

//Reducer (functions)
//imnutability is important in Redux, if you mutate the state object things will likely //break.
//three rules for mutaion
// Primitives: dont modify them. create new object instead.
//Objects: create a copy of the onject and change the copy. object.assign()
// Arrays: dont push(), sort(), or other mutable operations. concat(), two arrays to add //things
function reducer(state, action){
console.log(action)
if(action.type === 'MOVE'){
    return {
        gas: state.gas -1,
        score: state.score +1,
        x: state.x + action.payload.x,
        y: state.y + action.payload.y
    };
}
    return state;
}
//Store (object create stre)
export const store= createStore(reducer, {
    gas: 20,
    score: 0,
    x: 1,
    y: 3,
})
