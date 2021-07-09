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

export const Iframe = styled.div`
  height: 620px;
  width: 100%;
  background: red;
  grid-area: a;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-gap: 2rem;
  /* grid-template-areas:
    "0 1 2"
    "3 4 5"
    "6 7 8"; */

  grid-template-areas:
    'item0 item0 item0 item0 item0 item0'
    'item1 item1 item2 item2 a a'
    'item3 item3 item4 item4 a a'
    'item5 item5 item5 item6 item6 item6'
    'item7 item7 item7 item7 item8 item8';
  ${createCSS()};
`;
