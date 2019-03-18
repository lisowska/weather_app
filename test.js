class Developer {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname
    }

    getName() {
        return this.firstname + ' ' + this.lastname;
    }
}

var me = new Developer('Anna', 'Lisowska');

console.log(me.getName());


import React, { Component } from 'react';

class App extends Component {
    render() {
        return(
            <div>
                <h1>react</h1>
            </div>
        );
    }
}

export default App;


class App extends Component {
    getGreeting() {
        return 'Welcome to react'
    }

    render() {
        return (
            <div>
                <h1>{this.getGreeting()}</h1>
            </div>
        );
    }
}

export default App;

function getGreeting() {
    return 'welcome to js'
}

const getGreeting = () => {
    return 'welcome to js'
}

const getGreeting = () =>  'welcome to js'



var array = [1,2,3];

for (var i = 0; i < array.length; i++){
    console.log(i);
}

var array = [1,2,3]

array.forEach(function(i) {
    console.log(i);
});

array.forEach(function(i){
    console.log(i);
})