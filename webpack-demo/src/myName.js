import _ from 'lodash';


//const myName = (name) => 'Hi! My name is ' + name;

const myName = (name) => _.join(['Hi!', 'My', 'name', 'is', name], ' ');


export default myName;