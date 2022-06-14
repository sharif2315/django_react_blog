import React, { useEffect, useState } from 'react';
import Posts from './Posts';
import PostLoadingComponent from './PostLoading';
import Header from './Header';
import Footer from './Footer';
import './../App.css';

function Home(){
    
    const PostLoading = PostLoadingComponent(Posts);
	
	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});

	useEffect(() => {
		setAppState({ loading: true });

		const apiUrl = `http://127.0.0.1:8000/api/`;
		
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				console.log(posts);
				setAppState({ loading: false, posts: posts });
			});

	}, [setAppState]);

    return (
		<div className="App">
			
			<Header />
            
			<h1>Latest Posts</h1>
			<br/>
			<br/>
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
            
			<Footer/>
        
		</div>
    )
}

export default Home;