import {useState} from "react";
export default function Front(){

    const[title,setTitle]=useState("");
    const[content,setContent]=useState("");

    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <>
        <h1>Write Notes</h1>

        <div className="section">

            <form onSubmit={handleSubmit}>

                <Row label="Title">
                    <input className="input"
                            placeholder="Enter the title..."
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                            />
                </Row>

                <Row label="Content">
                     <textarea
                            className="input content"
                            placeholder="Enter the content here..."
                            value={content}
                            onChange={(e)=>setContent(e.target.value)}
                        />
                </Row>

                <button className="btn">ADD</button>
            </form>
        </div>

        <hr/>

        <h2>Notes</h2>
        </>
    )
}

function Row(props){
    const{label}=props;
    return(
        <>
        <label>
            {label}
            <br/>
        </label>
        {props.children}
        <hr/>
        </>
    )
}