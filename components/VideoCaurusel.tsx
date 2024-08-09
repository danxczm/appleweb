import { useEffect, useRef, useState } from 'react';

import styled from '@emotion/styled';

import { hightlightsSlides } from '@/constants';

type HightlightsSlide = {
  id: number;
  textLists: string[];
  video: string;
  videoDuration: number;
};

const VideoCaurusel = () => {
  const videoRef = useRef<HTMLVideoElement[]>([]);
  const videoSpanRef = useRef<HTMLSpanElement[]>([]);
  const videoDivRef = useRef<HTMLDivElement[]>([]);

  const [video, setVideo] = useState({
    isEnd: false,
    isLastVideo: false,
    startPlay: false,
    videoId: 0,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      let animation = gsap.to(span[videoId], { onUpdate: () => {}, onComplete: () => {} });
    }
  }, [videoId, startPlay]);

  return (
    <>
      <VideoCauruselContainer>
        {hightlightsSlides.map((list: HightlightsSlide, index) => (
          <Caurusel key={list.id} id="slider">
            <div className="video-carousel_container">
              <VideoContainer className="flex-center">
                <video
                  id="video"
                  playsInline
                  preload="auto"
                  muted
                  ref={el => {
                    if (el) videoRef.current[index] = el;
                  }}
                  onPlay={() => setVideo(prevVideo => ({ ...prevVideo, isPlaying: true }))}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </VideoContainer>
              <ListTextContainer>
                {list.textLists.map((text, index) => (
                  <ListText key={index}>{text}</ListText>
                ))}
              </ListTextContainer>
            </div>
          </Caurusel>
        ))}
      </VideoCauruselContainer>
      <ControllerContainer className="flex-center">
        <ControllerWrapper className="flex-center">
          {videoRef.current.map((_, index) => (
            <Controller
              key={index}
              ref={el => {
                if (el) videoDivRef.current[index] = el;
              }}
            ></Controller>
          ))}
        </ControllerWrapper>
      </ControllerContainer>
    </>
  );
};

export default VideoCaurusel;

const VideoCauruselContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Caurusel = styled.div`
  padding-right: 2.5rem; /* 40px */

  @media (min-width: 640px) {
    padding-right: 5rem; /* 80px */
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem; /* 24px */
  overflow: hidden;
  background: black;
`;

const ListTextContainer = styled.div`
  position: absolute;
  top: 3rem; /* 48px */
  left: 5%;
  z-index: 10;
`;

const ListText = styled.p`
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
  }
`;

const ControllerContainer = styled.div`
  position: relative;
  margin-top: 2.5rem; /* 40px */
`;

const ControllerWrapper = styled.div`
  padding: 1.25rem 1.75rem;
  background-color: #42424570;
  backdrop-filter: blur(8px);
  border-radius: 9999px;
`;

const Controller = styled.div`
  margin-left: 0.5rem; /* 8px */
  margin-right: 0.5rem; /* 8px */
`;
