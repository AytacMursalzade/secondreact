import React, { Component } from 'react';
import style from './Cardapp.module.css';
import PropTypes from 'prop-types';





class Cardapp extends Component {

  static defaultProps = {
    name : "Bilgi yok",
    salary : "Sanane",
    department : "Bilgi yok"
  }

  constructor (props){
    super(props)

    this.onClickEvent = this.onClickEvent.bind(this);
  }

  onClickEvent = (e) => {
    if(this.name !== "John"){
      console.log("qazandiniz!");
     
    }else{
      console.log("Malesef!");
      return;
    }
  }
  render() {
     //Destructing
      const {name, salary , department} = this.props


    return (
      <>
        <ul>
          <li>Name :{name} </li>
          <li>Salary : {salary} </li>
          <li>Department : {department}</li>

        </ul>
        <button className={`${style.btnClass}`} onClick={this.onClickEvent}>Please</button>
      </>
    );
  }
}


Cardapp.propTypes ={
  name : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired
}

export default Cardapp;
