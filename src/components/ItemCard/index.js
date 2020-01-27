import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import CommentIcon from "@material-ui/icons/Comment";
import SpeakerNotesOffIcon from "@material-ui/icons/SpeakerNotesOff";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Fade from "@material-ui/core/Fade";
import moment from "moment";
import { Link } from "@reach/router";
import { useNearScreen } from "../../hooks/useNearScreen";

const useStyles = makeStyles(theme => ({
	card: {
		maxWidth: 600,
		marginBottom: "12px"
	},
	media: {
		height: 0,
		paddingTop: "56.25%" // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: "rotate(180deg)"
	},
	avatar: {
		backgroundColor: red[500]
	}
}));

const ItemCard = ({ data = {} }) => {
	const classes = useStyles();

	const [show, element] = useNearScreen();

	return (
		<article className="item-card-container" ref={element}>
			{show && (
				<Fade in={show} timeout={1000}>
					<Card className={classes.card}>
						<Link to={`/detail/${data.id}`}>
							<CardHeader
								avatar={
									<Avatar aria-label="recipe" className={classes.avatar}>
										R
									</Avatar>
								}
								action={
									<IconButton aria-label="settings">
										<MoreVertIcon />
									</IconButton>
								}
								title={data.title}
								subheader={moment.unix(data.created).fromNow()}
							/>
						</Link>

						{data.thumbnail ? (
							<CardMedia className={classes.media} image={data.thumbnail} />
						) : null}

						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								Autor: {data.author}
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label="add comments">
								<CommentIcon />
								{data.num_comments}
							</IconButton>
							{data.visited ? <DoneAllIcon /> : <SpeakerNotesOffIcon />}
						</CardActions>
					</Card>
				</Fade>
			)}
		</article>
	);
};

export default ItemCard;
