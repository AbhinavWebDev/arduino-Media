import React,{useState,useRef} from "react";
import ProfileImage from "../../img/Profile.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
 import { UilTimes } from "@iconscout/react-unicons";
function PostShare() {
    const [image,setImage]=useState(null)
    const imageRef=useRef()
    const onImageChange=(event)=>{
if(event.target.files && event.target.files[0]){
let img= event.target.files[0];
setImage({
    image:URL.createObjectURL(img),
})
}

    }
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="Whats happening" />
        <div className="PostOption">
        <div className="Option"
        style={{color:'var(--photo)'}}
        onClick={()=>imageRef.current.click()}>
          <UilScenery />
          Photo
        </div>
        <div className="Option"
        style={{color:'var(--video)'}}>
          <UilPlayCircle />
          Video
        </div>
        <div className="Option"
        style={{color:'var(--location)'}}>
          <UilLocationPoint />
          Location
        </div>
        <div className="Option"
        style={{color:'var(--shedule)'}}>
          <UilSchedule />
          Shedule
        </div>
       
            <div style={{display:'none'}}>
                <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
                
            </div>

      </div>
      
      {image && (
        <div className="previewImage">
          
<UilTimes onClick={()=>setImage(null)}/>
<img src={image.image}/>
<button className="button ps-button">
            Share
            </button>
        </div>
      )}
       
      </div>
      
    </div>
  );
}

export default PostShare;
