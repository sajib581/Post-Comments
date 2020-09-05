import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './Comment.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const Comment = (props) => {
    let {email,body} = props.comment ;
    const [image, setImage] = useState(0);
    useEffect(()=>{
      const URL = 'https://randomuser.me/api/?results=1'
      fetch(URL)
      .then(res => res.json())
      .then(data=> setImage(data.results[0].picture.medium) )
    },[])
    const classes = useStyles();
    return (
      <div className="comment">
          <div className="upper">
              <Avatar alt="Remy Sharp" src={image} />
              <span className="email">{email}</span>
          </div>
          <div className="lower">
            {body}
          </div>
      </div>
    );
};

export default Comment;