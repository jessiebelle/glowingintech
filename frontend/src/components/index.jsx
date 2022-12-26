import React from 'react';
import axios from 'axios';

class BlogPostIndex extends React.Component {

	state = {
		blogPosts : [],
	}

	componentDidMount() {

		let data ;

		axios.get('/api/v2/pages/')
		.then(res => {
			data = res.data;
			this.setState({
				blogPosts : {data}
			});
		})
		.catch(err => {})
	}

render() {
	return(
	<div>
		{/*{this.setState.blogPosts?.items?.map((post, key) => (*/}
		{/*	<div key={key}>*/}
		{/*	<div >*/}
		{/*		<div >*/}
		{/*				<h1>{post.title} </h1>*/}
		{/*				<h1>{post.items.meta.slug} </h1>*/}
		{/*				<footer >--- by*/}
		{/*				<cite title="Source Title">*/}
		{/*				{post.meta.detail_url}</cite>*/}
		{/*				</footer>*/}
		{/*		</div>*/}
		{/*	</div>*/}
		{/*	</div>*/}
		{/*	)*/}
		{/*)}*/}
		<h1>Blog Post Index</h1>
	</div>
	);
}
}

export default BlogPostIndex;