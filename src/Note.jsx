import React from "react";
import { Button } from "@material-ui/core";
import { Delete } from "@mui/icons-material";

const Note = (props) => {

    const deletenote = () => {
        props.delete(props.id);
    }

    if(props.title === '' && props.text === ''){
        return
    } else 
    {
        return (<div className="note">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <Button className="btn" onClick={deletenote}>
                <Delete className="delete_icon" />
            </Button>
        </div>)
    }
}

export default Note;