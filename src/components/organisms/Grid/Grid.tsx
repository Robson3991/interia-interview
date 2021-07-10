import { IPost } from 'types';
import Tile from 'components/molecules/Tile/Tile';
import { Wrapper } from './Grid.style';
import Iframe from 'components/atoms/Iframe';
import { IGridStyles } from 'types';

interface GridProps {
  items: Array<IPost>;
  templates: IGridStyles;
}

const Grid: React.FC<GridProps> = ({ items, templates }) => {
  return (
    <Wrapper templates={templates}>
      {items.map((item, index) => {
        const { objectId } = item;
        return (
          <div key={objectId} className={`grid-item-${index}`}>
            <Tile post={item} />
          </div>
        );
      })}

      {items.length > 6 && (
        <>
          <Iframe large>Reklama pierwsza</Iframe>
          <Iframe>Reklama druga</Iframe>
        </>
      )}
    </Wrapper>
  );
};

export default Grid;
