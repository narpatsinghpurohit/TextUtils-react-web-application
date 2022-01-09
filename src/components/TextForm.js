import React, { useState } from 'react'

// State - avastha
export default function TextForm(props) {

    const [text, setText] = useState("");
    // text = "new Text"; //Wrong way
    // setText("New Text"); //Correct Way

    // Upper Case Funtion
    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Upper Case', 'success');
    }
    // Upper Case Funtion END


    // Lower Case Funtion
    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lower Case', 'success');
    }
    // Lower Case Funtion END

    // To Camel Case
    const handleCamelCaseClick = () => {
        let newText = text.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
            if (+match === 0) return " "; // or if (/\s+/.test(match)) for white spaces
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
        setText(newText);
        props.showAlert('Converted to Camel Case', 'success');
    }
    // To Camel Case END

    // Clear Text funtion
    const handleClearClick = () => {
        setText("");
        props.showAlert('Text Cleared', 'success');
    }
    // Clear Text funtion END

    // Handle On change
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    // Handle On change END

    return (
        <>
            <div className='container'>
                <h1 style={{
                    color: props.mode === 'light' ? 'black' : 'white'
                }}>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" rows="8" style={{
                        backgroundColor: props.mode === 'light' ? 'white' : props.color.lightColor, color: props.mode === 'light' ? 'black' : 'white'
                    }}></textarea>
                </div>
                <button className="btn btn-secondary border-0 my-2" style={{ backgroundColor: props.mode==="dark"?props.color.darkColor:"blue" }} onClick={handleUpperCaseClick}>Convert to Uppercase</button>
                <button className="btn btn-secondary border-0 mx-2 my-2" style={{ backgroundColor: props.mode==="dark"?props.color.darkColor:"blue" }} onClick={handleLowerCaseClick}>Convert to Lowercase</button>
                <button className="btn btn-secondary border-0 my-2" style={{ backgroundColor: props.mode==="dark"?props.color.darkColor:"blue" }} onClick={handleCamelCaseClick}>Convert to Camel Case</button>
                <button className="btn btn-secondary border-0 my-2 mx-2" style={{ backgroundColor: props.mode==="dark"?props.color.darkColor:"blue" }} onClick={handleClearClick}>Clear text</button>
            </div>

            <div className="container my-3" style={{
                color: props.mode === 'light' ? 'black' : 'white'
            }}>
                <h2>Text Summary</h2>
                <p>No of Words are {
                       (text.split(" ")[0] === '' && text.split(" ").length === 1)? (0):text.split(" ").length
                    }</p>
                <p>No of Characters are {text.length}</p>
                <p>{0.008 * text.split(" ").length} minutes to read the whole text</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something to preview"}</p>
            </div>
        </>
    )
}
