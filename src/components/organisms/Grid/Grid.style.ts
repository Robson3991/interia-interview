import styled, { css } from 'styled-components';

const createCSS = () => {
  let styles = '';

  for (let i = 0; i <= 8; i++) {
    styles += `
            .grid-item-${i} {
                grid-area: item${i};
            }
        `;
  }

  return css`
    ${styles}
  `;
};

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 2rem;
  grid-template-areas:
    'item0 item0 item0 item0 item0 item0'
    'item1 item1 item2 item2 a a'
    'item3 item3 item4 item4 a a'
    'item5 item5 item5 item6 item6 item6'
    'b b item7 item7 item8 item8';
  ${createCSS()};
`;
