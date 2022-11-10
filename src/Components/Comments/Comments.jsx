import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import CommentShare from "./CommentShare";
import { useEffect } from "react";
import { getComment } from "../../Api/CommentRequest";
import { CommentBody } from "./CommentBody";




export default function Comments(PostID) {
  const [comment,setComment]=useState([])


  const fetchComment = async () => {
    const { data } = await getComment(PostID.PostID);
    setComment(data);
  };

    useEffect(() => {
      
      fetchComment();
    }, []);


  return (
    <>
   
    <div style={{ padding: 14 ,marginTop: 50}} className="App">
     
   
    
    { comment.map((comments) => { 
       return (
      <CommentBody data={comments} key={comments._id}/>
  
   ) })}
    </div>
     
    <Paper >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid justifyContent="left" item xs zeroMinWidth>
          <CommentShare  PostID={PostID.PostID} key={PostID.PostID} fetchComment={fetchComment} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
