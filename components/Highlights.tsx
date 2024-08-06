'use client';

import React from 'react';
import styled from '@emotion/styled';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { rightImg, watchImg } from '@/utils';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0,
    });
    gsap.to('.link', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <HighlightsSection className="common-padding" id="highlights">
      <div className="screen-max-width">
        <HighlightsTitleContainer>
          <h1 className="section-heading" id="title">
            Get the highlights.
          </h1>
          <Container>
            <p className="link">
              Watch the film
              <Image src={watchImg} alt="watch" style={{ marginLeft: '0.5rem' }} />
            </p>
            <p className="link">
              Watch the event
              <Image src={rightImg} alt="right" style={{ marginLeft: '0.5rem' }} />
            </p>
          </Container>
        </HighlightsTitleContainer>
      </div>
    </HighlightsSection>
  );
};

export default Highlights;

const HighlightsSection = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(16 16 16);
`;

const HighlightsTitleContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  align-items: end;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
  align-items: end;
  flex-wrap: wrap;
  gap: 1.25rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;
