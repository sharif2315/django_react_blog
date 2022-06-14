import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Container, Button, CardActions, Link } from '@mui/material';

const Posts = (props) => {
	const { posts } = props;

	if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
	return (
		// <React.Fragment>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{posts.map((post) => {
						return (
							<Container maxWidth="md" component="main">
								<Grid item key={post.id} xs={12} md={4}>
									<Card sx={{ maxWidth: 345 }}>	
										<Link
											color="textPrimary"
											href={'post/' + post.id}
										>								
										<CardMedia
											component="img"
											height="140"
											image="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
											alt="green iguana"
										/>
										</Link>
										<CardContent>
											<Typography gutterBottom variant="h5" component="div">
												{post.title.substr(0, 50)}...
											</Typography>
											<Typography variant="body2" color="text.secondary">
												{post.excerpt.substr(0, 60)}...
											</Typography>
										</CardContent>
										<CardActions>
											<Button size="small">Share</Button>
											<Button size="small">Learn More</Button>
										</CardActions>
									</Card>
								</Grid>
							</Container>
						);
					})}
				</Grid>
			</Container>
		// </React.Fragment>
	);
};
export default Posts;
