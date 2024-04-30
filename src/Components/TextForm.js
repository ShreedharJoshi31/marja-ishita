import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
    // console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to Uppercase", "success");
  }

  const handleOnChange = (event) => {
    // console.log("Handle on change");
    setText(event.target.value);
  }

  const handleOnClick = () => {
    if(text == "Enter text here"){
      setText("");
    }
  }

  const [text, setText] = useState("Enter text here");

  return (
    <>
    <div className="container">
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
          onClick={handleOnClick}
          ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperCase}>Convert to UpperCase</button>
    </div>
    <div className="conatiner">
      <h2>Word Count</h2>
      <p>Number of words is {text.split(" ").length} and Number of letters is {text.length}</p>
      <h2>Time to read</h2>
      <p>Time to read is {0.008 * text.split(" ").length}</p>
    </div>
    </>
  );
}
