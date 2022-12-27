import React from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

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
		return data;
	}

render() {
	return(
	<div>
		<h1>Blog Post Index</h1>
		              {this.state.blogPosts((post, index) => (
						  <h2 key={index}> {post}</h2>
              ))}

	</div>
	);
}
}

export default BlogPostIndex;