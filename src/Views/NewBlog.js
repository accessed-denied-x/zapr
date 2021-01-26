import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export default function NewBlog() {
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [body, setBodyText] = useState('');
    const [submitted, setSubmitted] = useState(null);

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
            <input type="text" value={submitted ? "Submitted!" : title} onChange={(e) => setTitle(e.target.value)} required />
            
            <label htmlFor="description">Description: </label>
            <input type="text" value={submitted ? "Submitted!" : description} onChange={(e) => setDesc(e.target.value)} required />

            <label htmlFor="body">Body: </label>
            <textarea placeholder="Let inspiration strike..." value={submitted ? "Submitted!" : body} onChange={(e) => setBodyText(e.target.value)} required></textarea>

            <button onClick={() => {
                setSubmitted(true);
            }}>
                Submit
            </button>
        </form>
    )
}
