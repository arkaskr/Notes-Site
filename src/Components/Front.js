import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc,onSnapshot,doc, deleteDoc} from "firebase/firestore";

export default function Front() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [notes, setNotes] = useState([]);

    useEffect(()=>{
        // async function fetchData(){
        //     const snapShot=await getDocs(collection(db, "notes"));

        //     const notes=snapShot.docs.map((doc)=>{
        //         return{
        //             ...doc.data()
        //         }
        //     })
        //     setNotes(notes);
        // }

        // fetchData();

        const unsub=onSnapshot(collection(db,"notes"),(snapShot)=>{
            const notes=snapShot.docs.map((doc)=>{
                        return{
                            id: doc.id,
                            ...doc.data()
                        }
                    })
                    setNotes(notes);
                    console.log("Notes fetched:", notes);
        })
    },[]);

    async function handleSubmit(e) {
        e.preventDefault();

        //setNotes([{ title, content }, ...notes]);

        // Add a new document with a generated id.
        /* const docRef =  */await addDoc(collection(db, "notes"), {
            title: title,
            content: content,
            createdOn: new Date()
        });
        // console.log("Document written with ID: ", docRef.id);

        setTitle("");
        setContent("");
    }

    async function removeNote(id) {
        //setNotes(notes.filter((note, index) => i !== index));
        const docRef=doc(db, "notes", id);
        await deleteDoc(docRef);
    }

    return (
        <>
            <h1>Write Notes</h1>

            <div className="section">

                <form onSubmit={handleSubmit}>

                    <Row label="Title">
                        <input className="input"
                            placeholder="Enter the title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Row>

                    <Row label="Content">
                        <textarea
                            className="input content"
                            placeholder="Enter the content here..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </Row>

                    <button className="btn">ADD</button>
                </form>
            </div>

            <hr />

            <h2>Notes</h2>

            {notes.map((note, i) => (
                <div className="notes" key={i}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>

                    <div className="delbtn">
                        <button className="delete"
                            onClick={() => removeNote(note.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </>
    )
}

function Row(props) {
    const { label } = props;
    return (
        <>
            <label>
                {label}
                <br />
            </label>
            {props.children}
            <hr />
        </>
    )
}