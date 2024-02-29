import React, {useState, useEffect} from "react";
import Country from "./Countryitem";
import Example from "./Example";
import Input from "./Input";
import { connect } from "react-redux";
import { Increment, Decrement} from "./Action";
import PropStyle from "prop-types";
import './App.css';

function App(props) {
  const {counter, InCrement, DeCrement} = props;
  
  const [listCountry, setListCountry] = useState([]);
  const [state, setState] = useState('')
  
  //component will mount + component did mount 
  useEffect(() => {
  // call here => chỉ được gọi lần đầu tiên  
  fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(data => {
      console.log('data---', data)
      setListCountry(data)
    })
    .catch((err)=>{
      console.log("-----err-----", err)
    });  
  }, []);

  useEffect(()=>{
    return()=>{

    }
  }, []);

  useEffect(()=>{

  },[]);

  const handleIncrement = () =>{
    InCrement()
  };
  const handlDecrement = () =>{
    DeCrement()
  };
  
  const handleInputOnChange = (event) =>{
    const value = event.target.value
    setState(value)
  }
  return (
    <React.Fragment>
      <div className="App">
        <Example/>
        <Input
          type="text"
          name="search"
          value={state}
          onChange={(event) => handleInputOnChange(event)}
          placeholder="search..."
        />
        <h2>Counter: {counter}</h2>
        <button onClick={handleIncrement}>Increment (+)</button>
        <button onClick={handlDecrement}>Decrement (-)</button>
        <h2>ListCountry</h2>
        <div className="list">
          {listCountry.map((item, array, index)=>{
            return <Country key={item.name} country={item}/>
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) =>{
  return{
    counter: state.counter,
    listCountry: state.listCountry,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    InCrement: () => dispatch(Increment()),
    DeCrement: () => dispatch(Decrement()),
  }
}

App.prototype={

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
