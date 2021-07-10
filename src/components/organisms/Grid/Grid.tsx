import { IPost } from 'types';
import Tile from 'components/molecules/Tile/Tile';
import { Wrapper } from './Grid.style';
import Iframe from 'components/atoms/Iframe';

interface GridProps {
  items: Array<IPost>;
  template: string[];
}

const Grid: React.FC<GridProps> = ({ items, template }) => {
  return (
    <Wrapper template={template}>
      {items.map((item, index) => {
        const { objectId } = item;
        return (
          <div key={objectId} className={`grid-item-${index}`}>
            <Tile post={item} />
          </div>
        );
      })}
      <Iframe large>Reklama pierwsza</Iframe>
      <Iframe>Reklama druga</Iframe>
    </Wrapper>
  );
};

export default Grid;
