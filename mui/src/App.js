import React from "react";
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SlidingPlaceholderInput from "./components/SlidingPlaceholderInput";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: 20,
    marginRight: 20,
    width: 200,
  },
  dense: {
    marginTop: 20,
  },
  menu: {
    width: 200,
  },
});

export default function App(){
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    age: "",
    multiline: "controlled",
    currency: "EUR"
  });
  const handleChange = name => e => {
    setValues({...values, [name]: e.currentTarget.value})
  }
  return (
    <div>
      <form className = {classes.container} noValidate autoComplete = "off">
        <p>material-ui TextField</p>
        <TextField 
          value = {values.name}
          className = {classes.textField}
          label = "name"
          onChange = {handleChange('name')}
        />
        <p>Emulated material-ui TextField</p>
        <SlidingPlaceholderInput 
          value = {values.name} 
          placeholder = "enter name"
          onChange = {handleChange('name')}
        />
      </form>
    </div>
  )
}
