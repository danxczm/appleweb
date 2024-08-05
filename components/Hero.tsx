'use client';

import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { heroVideo, smallHeroVideo } from '@/utils';

const Hero = () => {
  const [videoSource, setVideoSource] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSource = () => {
    if (window.innerWidth < 760) {
      setVideoSource(smallHeroVideo);
    } else {
      setVideoSource(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSource);

    return () => window.removeEventListener('resize', handleVideoSource);
  }, []);

  useGSAP(() => {
    gsap.to('.hero-title', {
      opacity: 1,
      delay: 1.5,
    });
  }, []);

  return (
    <HeroSection className="nav-height">
      <HeroContainer className="flex-center">
        <p className="hero-title">iPhone 15 Pro</p>
        <HeroVideoContainer>
          <HeroVideo className="pointer-events-none" autoPlay playsInline muted key={videoSource}>
            <source src={videoSource} type="video/mp4" />
          </HeroVideo>
        </HeroVideoContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  width: 100%;
  position: relative;

  background-color: rgb(0 0 0);
`;

const HeroContainer = styled.div`
  width: 100%;
  flex-direction: column;
  height: 83.333333%;
`;

const HeroVideoContainer = styled.div`
  width: 75%;

  @media (min-width: 768px) {
    width: 83.333333%;
  }
`;

const HeroVideo = styled.video`
  width: 100%;
  max-height: 350px;
`;
