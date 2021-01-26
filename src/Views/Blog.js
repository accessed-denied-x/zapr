import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../Context/GlobalState';
import { useParams } from 'react-router-dom';

export default function Blog() {
	const { blog, getBlog } = useContext(GlobalContext);

	const { id } = useParams();

	useEffect(() => {
		getBlog(id)
	})

	return (
		<div>
			<div className="blog-header">
				<p>{blog.title}</p>
				<p>{blog.description}</p>
			</div>
			<div>
				<p>{blog.body}</p>
			</div>
		</div>
	)
}
