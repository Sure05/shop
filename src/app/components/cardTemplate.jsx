import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCard} from "../redux/cardSlice";

const description = (text, limit) => {
	text = text.trim();
	if(text.length > limit) {
		text.toString();
		return text.substring(0, limit) + '...'
	} else return text
}

function CardTemplate({data}) {
	const dispatch = useDispatch();
	const add = () => {
		dispatch(addToCard(data))
	}
	
	return (
		<Card>
			<CardMedia
				component="img"
				image={data.image}
				alt={data.name}
				style={{"objectFit": "none", boxShadow: "0px 1px 1px 0px rgb(0 0 0 / 14%)"}}
			/>
			<CardContent>
				<Typography fontSize={21} gutterBottom variant="h5" display={"flex"} justifyContent={"space-between"}>
					<Link to={`/product/${data.id}`}>{data.name}</Link>
					<div>${data.price}</div>
				</Typography>
				<Typography variant="body" color="text.secondary">
					{description(data.description, 100)}
				</Typography>
			</CardContent>
			<CardActions style={{justifyContent: "center"}} >
				<Button onClick={add} style={{marginRight: 5}} variant={"outlined"}>Buy now</Button>
				<Button component={Link} to={`/product/${data.id}`} variant={"outlined"} color={"inherit"}>More info</Button>
			</CardActions>
		</Card>
	);
}

export default CardTemplate;
