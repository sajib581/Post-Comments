import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Post.css'
import { useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  aaaa:{
    display: 140
  },
});
const Post = (props) => {
    const {title,body,id} = props.post
    const [image, setImage] = useState(0);

    useEffect(()=>{
      const URL = 'https://randomuser.me/api/?results=1'
      fetch(URL)
      .then(res => res.json())
      .then(data=> setImage(data.results[0].picture.medium) )
    },[])

    let history = useHistory()
    const postHandeler = () => {
      history.push(`/post/${id}`)
    }
    
    const classes = useStyles();
    return (
        <div className={"post"}>            
            <Card className={classes.root}>
      <CardActionArea>        
        <CardContent>
          <Typography className={classes.aaaa} gutterBottom variant="h5" component="h2">
           
          <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
            <Box >
              <Avatar alt="Remy Sharp" src={image} />
            </Box>
            <Box p={1} >
              {title.slice(0,12)+" ....."}
            </Box>
          </Box>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body.slice(0,60)+"  ........"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>        
        <Button size="small" color="primary" onClick={postHandeler}>
          Learn More
        </Button>
      </CardActions>
    </Card>

    
        </div>
    );
};

export default Post;