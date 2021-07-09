import { IPost } from 'types';
import Tile from 'components/molecules/Tile/Tile';
import { Wrapper, Iframe } from './Grid.style';

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
      <Iframe />
    </Wrapper>
  );
};

export default Grid;
