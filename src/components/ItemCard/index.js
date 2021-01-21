import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import CommentIcon from "@material-ui/icons/Comment";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import Fade from "@material-ui/core/Fade";
import moment from "moment";
import { Link } from "@reach/router";
import { useNearScreen } from "../../hooks/useNearScreen";
import { useDispatch } from "react-redux";

import { eraseItem } from "../../actions/itemListActions";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    marginBottom: "15px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ItemCard = ({ data = {} }) => {
  const classes = useStyles();

  const [show, element] = useNearScreen();

  const dispatch = useDispatch();

  const handleDelete = (itemId) => {
    dispatch(eraseItem(itemId));
  };

  return (
    <article className="item-card-container" ref={element}>
      {show && (
        <Fade in={show} timeout={1000}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              title={<Link to={`/detail/${data.id}`}>{data.title}</Link>}
              subheader={moment.unix(data.created).fromNow()}
              action={
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(data.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            />

            {data.thumbnail && data.thumbnail.startsWith("http") ? (
              <CardMedia className={classes.media} image={data.thumbnail} />
            ) : null}

            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Autor: {data.author}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add comments">
                <CommentIcon /> Comments
                {data.num_comments}
              </IconButton>
              <IconButton aria-label="read unread icon">
                {data.visited ? (
                  <DoneAllIcon aria-label="read" />
                ) : (
                  <MarkunreadIcon aria-label="unread" />
                )}
              </IconButton>
              VISITED
            </CardActions>
          </Card>
        </Fade>
      )}
    </article>
  );
};

export default ItemCard;
