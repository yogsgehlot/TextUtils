import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);    
    props.showAlert("Converted to lowercase","success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);    
    props.showAlert("Text cleared","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return ( 
    <>
    <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="light"?"white":"#425a72", color: props.mode==="light"?"black":"white"}}></textarea>
      </div>

      <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>

    </div>
      <div className="container my-3" style={{color: props.mode==="light"?"black":"white"}}> 
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the text box to preview it here"}</p>
      </div>
      </>
  );
}
