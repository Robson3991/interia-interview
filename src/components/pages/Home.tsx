import { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from 'components/organisms/Grid/Grid';
import { PostsState, IPost } from 'types';
import Loader from 'components/atoms/Loader';
import grid from 'constants/grid';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
  const [posts, setPosts] = useState<PostsState>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/list?_page=${page}&_limit=9`,
      );

      if (data.length == 0) setHasMore(false);

      setPosts((prevState) => {
        return [...prevState, ...data];
      });
      setPage((prevState) => prevState + 1);
    } catch (error) {
      setHasMore(false);
      console.log(error.response);
    }
  };

  console.log(hasMore);

  useEffect(() => {
    fetchData();
  }, []);

  if (!posts) return <Loader />;

  let gridPosts: Array<IPost> = [];

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {posts.map((post, index) => {
        gridPosts.push(post);
        if (index != 0 && (index % 8 == 0 || index == posts.length - 1)) {
          console.log('index', index);
          console.log(gridPosts);
          const postsCopy = [...gridPosts];
          gridPosts = [];
          return <Grid items={postsCopy} templates={grid} key={index} />;
        }
      })}
    </InfiniteScroll>
  );

  //   return <>{posts ? <Grid items={posts} templates={grid} /> : <Loader />}</>;
};

export default Home;
