
import React from 'react';
import './App.css';
import Layout_content from "./components/Layout"
import {StudenOverview} from "./components/Overview"


const infoStudent = [

  {
    firstName: "Jimbei",
    secondName:"Alexandru",
    gender:"male",
    age:22,
    height:180,
    univerity: "UTM",
    speciality:"RM",
  }
]

function App() {
  return (
    <div className="App">
        <Layout_content
        />
        <StudenOverview 
        students = {infoStudent}
        />
    </div>
  );
}

export default App;
