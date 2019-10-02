import React, { useState } from 'react';
const NewSongForm = ({ addSong }) => {
    const [title, setTitle] = useState('');
    const handleSubmint = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('')
    }
    return (
        <form onSubmit={handleSubmint} >
            <label htmlFor="">SongName</label>
            <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
            <input type="submit" value="add song" />
        </form>

    );
}

export default NewSongForm;
