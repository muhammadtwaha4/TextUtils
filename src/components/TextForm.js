import React, { useState } from "react";


export default function TextForm({heading="default heading value",mode,showAlert}) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        showAlert('Converted to UpperCase!', 'success')
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        showAlert('Converted to LowerCase!', 'success')
    }

    const handleCleareClick = () => {
      let newText = '';
        setText(newText)
        showAlert('Text cleared!', 'success')
    }

    const handleItalicClick = () => {
      (setItalic(!italic))
        showAlert('Converted to Italic!', 'success')
     
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const handleCopy = () => {
      let text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      showAlert('Text copied!', 'success')
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      showAlert('Extra Space removed!', 'success')
    }

    const [text,setText] = useState("")
    const [italic,setItalic] = useState(false)

  return (
    <>
    <div className="container" style={{color: mode === "light" ? "black" : "white"}}> 
        <h1>{heading}</h1>
      <div className="mb-3">
        <textarea style={{ fontStyle: italic ? "italic" : "normal",backgroundColor: mode === "light" ? "white" : "#13466e",color: mode === "light" ? "black" : "white"}}
          className="form-control"
          id="myBox"
          rows="9"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button disabled={text.length === 0} className="btn btn-info mx-2 my-2" onClick={handleUpClick}>Convert to upper case</button>
      <button disabled={text.length === 0}  className="btn btn-info mx-2 my-2" onClick={handleLoClick}>Convert to lower case</button>
      <button disabled={text.length === 0}  className="btn btn-info mx-2 my-2" onClick={handleCleareClick}>Cleare text</button>
      <button disabled={text.length === 0}  className="btn btn-info mx-2 my-2" onClick={handleItalicClick}>Convert to Italic</button>
      <button disabled={text.length === 0}  className="btn btn-info mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length === 0}  className="btn btn-info mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color: mode === "light" ? "black" : "white"}}>
      <h2>Your text summary</h2>
      <p>{text.split(' ').filter((element)=>{return element.length !==0 }).length } words, {text.length} charachteres </p>
      <p>{0.008 *  text.split(' ').filter((element)=>{return element.length !==0 }).length} Minutes read </p>

      <h3>Preview</h3>
      <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
    </div>

    </>);
}
