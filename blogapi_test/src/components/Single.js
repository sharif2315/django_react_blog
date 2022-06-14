import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axios";

import { Container } from "@mui/material";
import Typography from '@mui/material/Typography';

export default function Post() {
    const { pk } = useParams();

	const [data, setData] = useState({ posts: [] });

	useEffect(() => {
		axiosInstance.get(pk).then((res) => {
			setData({ posts: res.data });
			console.log(res.data);
		});
	}, [setData]);

    return (
        <Container>
            <Typography>
                {data.posts.title}
            </Typography>

            <Typography>
                {data.posts.excerpt}
            </Typography>
        </Container>

    );

}