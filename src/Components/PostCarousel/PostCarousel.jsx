import Carousel from "react-bootstrap/Carousel";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../Redux/Actions/PostActions";

function PostCarousel() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(2244));
  }, []);
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={
            posts[0].image
              ? process.env.REACT_APP_PUBLIC_FOLDER + posts[0].image
              : ""
          }
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={
            posts[1].image
              ? process.env.REACT_APP_PUBLIC_FOLDER + posts[1].image
              : ""
          }
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={
            posts[2].image
              ? process.env.REACT_APP_PUBLIC_FOLDER + posts[2].image
              : ""
          }
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={
            posts[3].image
              ? process.env.REACT_APP_PUBLIC_FOLDER + posts[3].image
              : ""
          }
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={
            posts[4].image
              ? process.env.REACT_APP_PUBLIC_FOLDER + posts[4].image
              : ""
          }
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Fifth slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default PostCarousel;
