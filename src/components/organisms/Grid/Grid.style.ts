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

const createAreasCSS = (template: string[]) => {
  let str = '';
  template.map((item) => (str += `'${item}'`));

  return `grid-template-areas: ${str}`;
};

export const Wrapper = styled.div<{ template: string[] }>`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 2rem;

  ${({ template }) => createAreasCSS(template)};
  ${createCSS()};
`;
