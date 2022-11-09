import React from 'react'
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import { AvatarGroup } from '@mui/material';
import { format } from "timeago.js";


export const CommentBody = (data) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div><Paper style={{ padding: "6px 6px" ,marginTop: 10}}>
     
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
          <Avatar  aria-label="recipe">
           <img style={{width: '2.5rem',height: '2.5rem'}} src={
          data.data.profilePicture
            ? serverPublic + data.data.profilePicture
            : serverPublic + "defaultCover.jpg"
        } alt="" />
          </Avatar>
      </Grid>
     
      <Grid justifyContent="left" item xs zeroMinWidth>
        <h5 style={{ margin: 0, textAlign: "left" }}> {data.data.firstName}</h5>
        <p style={{ textAlign: "left" }}>

        
         {data.data.comment}
        </p>
        <p style={{ textAlign: "left", color: "gray" }}>
        {format(data.data.createdAt)}
        </p>
      </Grid>
    </Grid>

  </Paper></div>
  )
}
