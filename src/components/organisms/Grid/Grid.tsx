import { PostsState } from 'types';
import Tile from 'components/molecules/Tile/Tile';
import { Wrapper } from './Grid.style';

const Grid: React.FC<{ items: PostsState }> = ({ items }) => {
  if (!items) return <>nie udao się pobrać danych</>;

  return (
    <Wrapper>
      {items.map((item) => {
        const { objectId } = item;
        return <Tile post={item} key={objectId} />;
      })}
    </Wrapper>
  );
};

export default Grid;
