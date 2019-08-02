import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/customer';
import './App.css';

const customers = [
  {
  'id':1,
  'image': 'http://placeimg.com/64/64/1',
  'name':'강은호',
  'birthday':'970817',
  'gender':'남자',
  'job':'대학생'
   },
  {
  'id':2,
  'image': 'http://placeimg.com/64/64/2',
  'name':'강은호2',
  'birthday':'970817',
  'gender':'남자',
  'job':'대학생'
   },
  {
   'id':3,
   'image': 'http://placeimg.com/64/64/3',
   'name':'강은호3',
   'birthday':'970817',
   'gender':'남자',
   'job':'대학생'
  }
]

class App extends Component {
  render(){
    return (
      <div>
        {customers.map(c =>{
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
          />
          )
        })}
      </div>
    );
  }
}

export default App;
