import React from 'react';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Single from './components/Single';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path='/register' element={<Register/>} />
				<Route path='/login' element={<Login/>} />
				<Route path='/logout' element={<Logout/>} />
				<Route path="/post/:pk" element={<Single/>} />
			</Routes>
	  </BrowserRouter>
	);
}
export default App;