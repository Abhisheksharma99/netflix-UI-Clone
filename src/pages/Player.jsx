import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Player() {
  const navigate = useNavigate();
  const video = 'https://imdb-video.media-imdb.com/vi3269313049/1434659607842-pgv4ql-1655820721427.mp4?Expires=1723216842&Signature=VP4~fyUI~ssrCMiKMnEMvUfs83pbHz0x3W-rnS~FGI~13H6cJsYzIPG6Am76B4-I4FT-CX8mCURtt-JMo1IjmsxfzqnBklDQiVJZcntHCtR3113XWF3by4Y3vHxTtYqZe3jynQ7P~uo5BP0RgN0mTANItrIo8rsoAWsyuHjVHmB854su6c-7ehhQHJqt0WvY12guzHNMYaIyHv48uefSCQTgq~jEH5FGA6cqvIU~Ram~xZjGLfQeJas~0z4YGhqOfAV7bvf1XUGTl49ZJKXwY3qzsanf0kp-NByB4HQBfit~cKljqNfjbh1iVl~kOAnqtTfba1zaMNx4o251dyRxHg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA'

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={video} autoPlay loop controls muted />
      </div>
    </Container>
  );
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
