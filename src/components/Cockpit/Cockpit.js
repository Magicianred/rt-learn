import React from 'react'
import classes from './Cockpit.css';

const cockpit = props => {
    const classes_ = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        classes_.push(classes.red); // classes = ['red]
    }
    if (props.persons.length <= 1) {
        classes_.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes_.join(' ')}> Bolum7-->70.videoda kaldım </p>
            <button
                className={btnClass}
                onClick={props.togglePersonHandler}>Show Persons
            </button>
        </div>
    )
};

export default cockpit;
