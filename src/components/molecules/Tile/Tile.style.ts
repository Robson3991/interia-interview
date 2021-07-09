import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  height: 300px;
  overflow: hidden;
`;

export const Footer = styled.div`
  position: relative;
  padding: 2rem;
  box-shadow: inset 0px -85px 24px -7px rgba(0, 0, 0, 0.5);
  z-index: 1;
  pointer-events: none;
`;

export const Title = styled.h3`
  margin-top: 10px;
  text-transform: uppercase;
  max-width: 95%;
`;

interface BackgroundProps {
  background?: string;
}

export const Background = styled.div<BackgroundProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({ background }) =>
    background ? `url(${background}) no-repeat` : 'blue'};
  background-size: cover;
  transition: transform var(--transition);

  &:hover {
    transform: scale(1.05);
  }
`;
