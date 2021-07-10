import { IPost } from 'types';
import Tile from 'components/molecules/Tile/Tile';
import { Wrapper } from './Grid.style';
import Iframe from 'components/atoms/Iframe';

const Grid: React.FC<{ items: Array<IPost> }> = ({ items }) => {
  return (
    <Wrapper>
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
