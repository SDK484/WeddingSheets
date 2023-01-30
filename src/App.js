import React, { useState } from 'react';
import './App.css';
import { appendSpreadsheet } from './Sheets.js';

function App() {

  const [formObj, setFormObj] = useState({
    Name: '',
    Attending: 'Yes',
    Starter: '',
    Mains: '',
    Dessert: '',
    DietRequire: '',
    ToastChoice: ''
  });

  const handleChange = (event, opt) => {
    setFormObj({ ...formObj, [opt]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formObj)
    let bool = true
    if (formObj.Name === null || formObj.Name === "" || formObj.Starter === "" ||
      formObj.Mains === "" || formObj.Dessert === "" || formObj.ToastChoice === "") {
      bool = false;
    }
    if (bool) {
      appendSpreadsheet(formObj);
      alert('Thank you! We look forward to seeing you at the Wedding!');
    } else {
      alert('Please fill in all options');
    }
  };

  return (
    <div className="App">
      <div className="AppTop">
        <img className="AppImg" src="https://media4.giphy.com/media/Yg12tqyJwylsk/giphy.gif?cid=ecf05e47cnjmyz3rxjx2qbs3i3m4oa5k60s9q76vloj0ctuz&rid=giphy.gif&ct=g"/>
        <div className="AppTitle">The Wedding ~ 20 May 2020 ~ Person A & Person B</div>
      </div>
      <div className="AppBody">
        <form onSubmit={handleSubmit}>
          <label>Enter your name: ...........
            <input
              type="text" 
              name="name" 
              value={formObj.Name || ""} 
              onChange={(e) => handleChange(e, 'Name')}
            />
          </label>
          <div className="space"></div>
          <div>
            <label>Attending ......................</label>
            <div className="select">
              <select className="mySelectArrow" value={formObj.Attending} onChange={(e) => handleChange(e, 'Attending')}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className="space"></div>
          <div>
            <label>Starter ..........................</label>
            <div className="select">
              <select className="mySelectArrow" value={formObj.Starter} onChange={(e) => handleChange(e, 'Starter')}>
                <option defaultValue value=""> -- select an option -- </option>
                <option value="Salad">Salad</option>
                <option value="Cheese">Cheese</option>
                <option value="Mushrooms">Mushrooms</option>
              </select>
            </div>
          </div>
          <div className="space"></div>
          <div>
            <label>Mains ...........................</label>
            <div className="select">
              <select className="mySelectArrow" value={formObj.Mains} onChange={(e) => handleChange(e, 'Mains')}>
                <option defaultValue value=""> -- select an option -- </option>
                <option value="Steak">Steak</option>
                <option value="Burger">Burger</option>
                <option value="Chips">Chips</option>
              </select>
            </div>
          </div>
          <div className="space"></div>
          <div>
            <label>Dessert ...........................</label>
            <div className="select">
              <select className="mySelectArrow" value={formObj.Dessert} onChange={(e) => handleChange(e, 'Dessert')}>
                <option defaultValue value=""> -- select an option -- </option>
                <option value="Ice_Cream">Ice Cream</option>
                <option value="Cheesecake">Cheesecake</option>
                <option value="Pudding">Pudding</option>
              </select>
            </div>
          </div>
          <div className="space"></div>
          <label>Diet Requirements? .......
            <input 
              type="text" 
              name="diet" 
              value={formObj.DietRequire || ""} 
              onChange={(e) => handleChange(e, 'DietRequire')}
            />
          </label>
          <div className="space"></div>
          <div>
            <label>Toast Choice ..................</label>
            <div className="select">
              <select className="mySelectArrow" value={formObj.ToastChoice} onChange={(e) => handleChange(e, 'ToastChoice')}>
                <option defaultValue value=""> -- select an option -- </option>
                <option value="Cider">Cider</option>
                <option value="Wine">Wine</option>
                <option value="Coke">Coke</option>
              </select>
            </div>
          </div>
          <div className="space"></div>
          <input type="submit" className="submitBtn" />
          <div className="space"></div>
        </form>
      </div>
    </div>
  );
}

export default App;
