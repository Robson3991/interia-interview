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
  width: 100%;
  box-shadow: inset 0px -85px 24px -7px rgba(var(--color-black-rgb), 0.5);
  z-index: 1;
  pointer-events: none;
`;

export const Title = styled.h3`
  margin-top: 10px;
  text-transform: uppercase;
  max-width: 95%;
`;

export const Background = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform var(--transition);
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    transform: translate(-50%, -50%) scale(1.05);
  }
`;
