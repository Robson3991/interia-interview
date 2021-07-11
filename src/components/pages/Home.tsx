import { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from 'components/organisms/Grid/Grid';
import { PostsState } from 'types';
import Loader from 'components/atoms/Loader';
import grid from 'constants/grid';

const Home = () => {
  const [posts, setPosts] = useState<PostsState>(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3004/list');
        setPosts(response.data);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  if (error) return <p>Nie udało się pobrać danych</p>;

  return <>{posts ? <Grid items={posts} templates={grid} /> : <Loader />}</>;
};

export default Home;
