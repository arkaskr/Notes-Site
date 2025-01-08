import {useState} from "react";
export default function Front(){

    const[title,setTitle]=useState("");
    const[content,setContent]=useState("");
    const[notes,setNotes]=useState([]);

    function handleSubmit(e){
        e.preventDefault();

        setNotes([{title,content}, ...notes]);
        setTitle("");
        setContent("");
    }

    function removeNote(i){
        setNotes(notes.filter((note,index)=>i!==index));
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

        {notes.map((note,i)=>(
            <div className="notes" key={i}>
                <h3>{note.title}</h3>
                <p>{note.content}</p>

                <div className="delbtn">
                    <button className="delete"
                            onClick={()=>removeNote(i)}>Delete</button>
                </div>
            </div>
        ))}
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