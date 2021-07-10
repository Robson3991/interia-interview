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
  ${createCSS()};
  ${({ templates }) => createAreasCSS(templates.small)};

  ${up('md')} {
    ${({ templates }) => createAreasCSS(templates.medium)};
  }

  ${up('lg')} {
    ${({ templates }) => createAreasCSS(templates.large)};
  }

  ${up('xl')} {
    ${({ templates }) => createAreasCSS(templates.extraLarge)};
  }
`;
