import { MdDeleteForever } from 'react-icons/md';

const Note = ({id, header, text, date, handleDeleteNote}) => {
    return(
        <div className="note">
            <div claasName="note-header">
                <span>{header}</span>
            </div>
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever 
                    onClick={()=> handleDeleteNote(id)} 
                    className='delete-icon' 
                    size='1.3em' 
                />
            </div>
        </div>
    );
};

export default Note;