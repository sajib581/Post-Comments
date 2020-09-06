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
    let {email,body,id} = props.comment ;
     if(id>100){
       const lastNumber = id%10 ;
      id = Math.round((id/10) + lastNumber) ;
      
     }
  
    const classes = useStyles();
    return (
      <div className="comment">
          <div className="upper">
              <Avatar alt="Remy Sharp" src={`https://randomuser.me/api/portraits/men/${id}.jpg`} />
              <span className="email">{email}</span>
          </div>
          <div className="lower">
            {body}
          </div>
      </div>
    );
};

export default Comment;