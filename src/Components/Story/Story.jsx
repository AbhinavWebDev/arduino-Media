import ReactInstaStories from "react-insta-stories";
import React from 'react';
import { useSelector } from "react-redux";
import { format } from "timeago.js";
import defaultProfile from '../../Images/Default_DP.jpg'

function SeeMore() {
  return <div>see more</div>;
}

 export default function Story({data,setOpenLogout}) {
  // const { story, loading } = useSelector((state) => state.postReducer);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const stories = [
    {
      url: serverPublic+data.data.image[0],
      header: {
        heading: data.data.firstName,
        subheading:  format(data.data.createdAt),
        profileImage: data.data.profilePicture? serverPublic+data.data.profilePicture:defaultProfile
      }
    },
    
    
  ];
  return (
    
    <ReactInstaStories
      stories={stories}
      defaultInterval={10000}
      width={432}
      height={670}
      onAllStoriesEnd={()=>setOpenLogout(false)}
    />
  );
}


