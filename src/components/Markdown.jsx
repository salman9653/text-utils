import React, { useState } from 'react'
import { marked } from 'marked';

export default function Markdown(props) {
    marked.setOptions({ breaks: true });

    const [text, setText] = useState("");

    function handelChange(event) {
        setText(event.target.value);
    }
    
    function markdown() {
        return { __html: marked.parse(text) };
    }

    return (
        <div style={{ color: props.mode === 'dark' && 'white' }} >
            <div className="container">
                <h3>{props.heading}</h3>
                <textarea
                    style={{
                        backgroundColor: props.mode === 'dark' && '#414c5c',
                        color: props.mode === 'dark' && 'white'
                    }}
                    className="form-control my-3"
                    onChange={handelChange}
                    id="TextArea" rows="7"
                    value={text}
                >
                </textarea>
                
            </div>
            <div className="container my-3">
                <h3>MarkUp Preview</h3>
                <div id='preview' dangerouslySetInnerHTML={markdown()}></div>
            </div>
        </div>
    )
}
