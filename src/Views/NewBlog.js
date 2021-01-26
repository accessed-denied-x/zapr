import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export default function NewBlog() {
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [body, setBodyText] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            title,
            description,
            body
        }

        addTransaction(newTransaction)
    }

    console.log('NEW BLOG PAGE RENDERED')

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="title">Title: </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            
            <label htmlFor="description">Description: </label>
            <input type="text" value={description} onChange={(e) => setDesc(e.target.value)} required />

            <label htmlFor="body">Body: </label>
            <textarea placeholder="Release your ideas..." value={body} onChange={(e) => setBodyText(e.target.value)} required></textarea>

            <button>Submit</button>
        </form>
    )
}
