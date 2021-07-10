import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';

interface IframeProps {
  large?: boolean;
}

const IframeStyle = css`
  border: 1px solid var(--color-gray);
  padding: 20px;
  width: 100%;
`;

const Container = styled.div<IframeProps>`
  height: 300px;
  grid-area: ${({ large }) => (large ? 'a' : 'b')};
  ${IframeStyle};

  ${up('lg')} {
    height: ${({ large }) => (large ? '620px' : '300px')};
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--color-black-rgb), 0.1);
  height: 100%;
`;

const Iframe: React.FC<IframeProps> = ({ large, children }) => (
  <Container large={large}>
    <Wrapper>{children}</Wrapper>
  </Container>
);

export default Iframe;
