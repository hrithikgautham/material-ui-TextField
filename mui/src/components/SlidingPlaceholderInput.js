import React from 'react';
import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
    container: {
        position : "relative",
        "& p": {
            width: "100%",
            height: "100%",
            color: "#ccc",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%)",
            paddingBottom: 10,
            cursor: "text",
            transition: "all 0.1s linear",
            fontSize: "20px",
            zIndex: "100",
        },
        "& label": {
            position: "relative",
            top : "50px",
            "& input": {
                border: "none",
                outline: "none",
                borderBottom : "1px solid #ccc",
            },
        },
    },
});

export default function SlidingPlaceholderInput({ value, placeholder, onChange }){
    const classes = styles();
    function handleBlur(e){
        var p = document.querySelector('.p');
        if(value === ''){
            p.style.top = "50%";
            p.style.fontSize = "20px";
        }
    }
    function handleClick(e){
        var p =document.querySelector(".p");
        document.querySelector(".inp").focus();
        p.style.fontSize = "15px";
        e.currentTarget.style.top = "15px"
    }
    return (
        <div className = {classes.container}>
            <p className = "p" onClick = {handleClick}>{placeholder}</p>
            <label><input className = "inp" onBlur = {handleBlur} onChange = {onChange} value = {value}/></label>
        </div>
    )
}