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
      delay: 2,
    });

    gsap.to('#cta', {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);

  return (
    <HeroSection className="nav-height">
      <HeroContainer>
        <p className="hero-title">iPhone 15 Pro</p>
        <HeroVideoContainer>
          <HeroVideo autoPlay playsInline muted key={videoSource}>
            <source src={videoSource} type="video/mp4" />
          </HeroVideo>
        </HeroVideoContainer>
      </HeroContainer>
      <HeroButtonContainer id="cta">
        <a href="#highlights" className="btn">
          Buy
        </a>
        <HerroButtonParagraph>From $199/month or $999</HerroButtonParagraph>
      </HeroButtonContainer>
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
  display: flex;
  align-items: center;
  justify-content: center;
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
  pointer-events: none;
`;

const HeroButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  opacity: 0;
  transform: translateY(5rem);
`;

const HerroButtonParagraph = styled.p`
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
`;
