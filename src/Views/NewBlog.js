import React from 'react'

export default function NewBlog() {
    return (
        <form>
            <label for="title">Title: </label>
            <input name="title" type="text" required />
            
            <label for="description">Description: </label>
            <input name="description" type="text" required />

            <label for="body">Body: </label>
            <textarea name="body" placeholder="Release your ideas..." required></textarea>

            <button>Submit</button>
        </form>
    )
}
