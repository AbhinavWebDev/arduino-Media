import ReactInstaStories from "react-insta-stories";
import Page1 from "../../img/Profile.jpg";
import Page2 from "../../img/Logo_KBD.jpg";
import React from 'react';
import { useSelector } from "react-redux";
import { format } from "timeago.js";


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
        profileImage: serverPublic+data.data.profilePicture
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


