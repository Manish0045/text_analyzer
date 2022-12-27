import React, { useState } from "react";

function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (e) => {
    console.log("Onchange fired");
    setText(e.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
    <h2 className="text-center text-secondary my-5">Text Analyzer</h2>
      <div className="container my-3">
        <form className="col-md-8 m-auto">
          <div className="form-group ">
            <h2 className="label text-primary">{props.heading}</h2>
            <textarea
              className="form-control text-secondary"
              id="exampleFormControlTextarea1"
              rows="5"
              value={text}
              onChange={handleOnChange}
              placeholder="Enter text here.."
            ></textarea>
          </div>
          <div className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert Uppercase
          </div>
          <div className="btn btn-warning mx-2" onClick={handleLowClick}>
            Convert Lowercase
          </div>
          <div className="btn btn-danger mx-2" onClick={handleClearClick}>
            Clear Text
          </div>
          {/* <div className="btn btn-primary">Convert Uppercase</div> */}
        </form>
      </div>

      <div className="container my-4 text-center">
        <h3 className="text-primary">Your text summary:</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters...
        </p>
        <p>Required {0.008*text.split(" ").length} minutes to read it...</p>

        <h2 className="text-primary">Preview:</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Textform;
