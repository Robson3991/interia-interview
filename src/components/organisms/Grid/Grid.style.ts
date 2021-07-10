import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';
import { IGridStyles } from 'types';

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

export const Wrapper = styled.div<{ templates: IGridStyles }>`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 2rem;
  margin-bottom: 2rem;
  grid-template-columns: repeat(1, 1fr);
  ${createCSS()};

  ${({ templates }) => createAreasCSS(templates.small)};

  ${up('md')} {
    grid-template-columns: repeat(2, 1fr);
    ${({ templates }) => createAreasCSS(templates.medium)};
  }

  ${up('lg')} {
    grid-template-columns: repeat(6, 1fr);
    ${({ templates }) => createAreasCSS(templates.large)};
  }

  ${up('xl')} {
    grid-template-columns: repeat(4, 1fr);
    ${({ templates }) => createAreasCSS(templates.extraLarge)};
  }
`;
