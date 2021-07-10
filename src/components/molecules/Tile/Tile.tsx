import { IPost } from 'types';
import { Wrapper, Footer, Title, Background } from './Tile.style';
import Taxonomy from 'components/atoms/Taxonomy';

interface TileProps {
  post: IPost;
}

const Tile: React.FC<TileProps> = ({ post }) => {
  const { category, title, img, link } = post;

  return (
    <a href={link}>
      <Wrapper>
        <Background background={img} />
        <Footer>
          <Taxonomy>{category}</Taxonomy>
          <Title>{title}</Title>
        </Footer>
      </Wrapper>
    </a>
  );
};

export default Tile;
