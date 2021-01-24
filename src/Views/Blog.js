import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../Context/GlobalState';
import { useParams } from 'react-router-dom';

export default function Blog() {
	const { transactions, getBlog } = useContext(GlobalContext);

	const { id } = useParams();

	useEffect(() => {

	})

	return (
		<div>
			<div className="blog-header">
				<p>{transactions.title}</p>
				<p>Placeholder description</p>
			</div>
			<div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor porta posuere. Nam in tellus sed lacus posuere vulputate ut porttitor enim. Integer pretium est eget nibh facilisis dignissim. Vestibulum malesuada felis dolor, eget finibus ipsum mattis ut. Proin dictum mi eget ipsum consequat porta. Etiam nec sem consequat, tempus purus a, tempus orci. Curabitur facilisis tortor metus, vel tincidunt orci aliquet sit amet. Suspendisse quis volutpat nisl.

					Sed nec odio elementum, mattis enim sit amet, pharetra eros. Morbi justo mi, lobortis vel neque vitae, commodo sodales turpis. Quisque augue augue, consequat tempus luctus a, laoreet at felis. Donec sed dapibus mi, eget pretium mi. Proin pulvinar eu elit in feugiat. In hac habitasse platea dictumst. Curabitur tristique gravida vehicula. Praesent eget arcu leo. Integer gravida ac tellus non semper. Curabitur felis tellus, fermentum sed felis vel, faucibus auctor dui.
				</p>
			</div>
		</div>
	)
}
