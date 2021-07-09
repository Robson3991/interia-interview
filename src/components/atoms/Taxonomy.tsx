import styled from 'styled-components';

const Container = styled.span`
  position: relative;
  color: var(--color-white);
  font-size: 1.4rem;
  text-transform: uppercase;

  &:before {
    content: '';
    position: absolute;
    top: 100%;
    right: 1px;
    left: 10px;
    height: 10px;
    background: var(--color-primary-dark);
    transform: skewY(-4deg);
  }
`;

const Text = styled.span`
  position: relative;
  display: inline-block;
  padding: 7px 12px;
  background: var(--color-primary);
`;

const Taxonomy: React.FC = ({ children }) => (
  <Container>
    <Text>{children}</Text>
  </Container>
);

export default Taxonomy;
