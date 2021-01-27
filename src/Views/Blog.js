import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../Context/GlobalState';
import { useParams } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export default function Blog() {
	const { blog, getBlog } = useContext(GlobalContext);
	const { user, isLoading } = useAuth0();

	const { id } = useParams();

	console.log('BLOG RENDERED');

	useEffect(() => {
		getBlog(id)
	}, [id]);

	return (
		<div>
			<div className="blog-header">
				<p>{blog.title}</p>
				<p>{"Author: " + user.name}</p>
				<p>{blog.description}</p>
			</div>
			<div>
				<p>{blog.body}</p>
			</div>
		</div>
	)
}
