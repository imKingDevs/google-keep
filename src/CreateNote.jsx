import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Add } from "@mui/icons-material";

const CreateNote = (props) => {

    const [usernote, setusernote] = useState({
        title: '',
        text: ''
    })

    const inputEvent = (event) => {
        const {value, name} = event.target;
        setusernote((prevdata) => {
            return{
                ...prevdata,
                [name]: value,
            }
        })
    }

    const addnote = () => {
        props.note(usernote);
        setusernote({
            title: '',
            text: ''
        })
    }

    const [letcreate, setletcreate] = useState(false)
    const letnote = () => {
        setletcreate(true);
    }
    const compnote = () => {
        setletcreate(false);
    }

    return (
        <>
            <div className="main_note">
                <form>
                    { letcreate ? <input type='text' placeholder="Title" autoComplete="off" name='title' 
                    onChange={inputEvent} value={usernote.title} /> : null}
                    
                    <textarea rows='' cols='' placeholder="Take a note..." name="text" 
                    onChange={inputEvent} value={usernote.text} onClick={letnote} onDoubleClickCapture={compnote} >
                    </textarea>
                    
                    { letcreate ? <Button className="btn" onClick={addnote} >
                        <Add className="add_icon" />
                    </Button> : null}
                </form>
            </div>
        </>
    )
}

export default CreateNote;