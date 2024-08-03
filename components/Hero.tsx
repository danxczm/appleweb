'use client';

import styled from '@emotion/styled';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '@/utils';

const Hero = () => {
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
          <video>
            <source src={videoSrc} />
          </video>
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
