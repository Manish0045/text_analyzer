import React, { useState } from "react";
import "../App.css";

function Textform(props) {

  const [text, setText] = useState("");

  const [btnEmoji, setBtnEmoji] = useState("🔆");
  const [btnText, setBtnText] = useState("Dark Mode");

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });


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
  
  const handleCopy = (e) => {
    var txt=document.getElementById('mytext');
    txt.select();
    navigator.clipboard.writeText(txt.value);
  };
  const handleExtraSpace = (e) => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnEmoji("🔆");
      setBtnText("Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnEmoji("🔦");
      setBtnText("Dark Mode");
    }
  };

  return (
    <div style={myStyle} id="mainContainer">
      <div
        className="btn btn-primary my-3"
        id="drkbtn"
        onClick={toggleStyle}
      >
        {btnText} {btnEmoji}
      </div>
      <h2 className="text-center text-secondary my-5" >Text Analyzer</h2>
      <div className="container my-3">
        <form className="col-md-8 m-auto">
          <div className="form-group ">
            <h2 className="label text-primary">{props.heading}</h2>
            <textarea
              className="form-control text-secondary"
              id="mytext"
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
          <div className="btn btn-warning mx-2" onClick={handleCopy}>
            Copy Text
          </div>
          <div className="btn btn-success mx-2" onClick={handleExtraSpace}>
            Remove Extra Space
          </div>
          <div className="btn btn-primary mx-2" onClick={speak}>
            Speak
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
        <p>Required {0.008 * text.split(" ").length} minutes to read it...</p>

        <h2 className="text-primary">Preview:</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Textform;
