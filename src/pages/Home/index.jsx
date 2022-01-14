import { useLocation } from 'react-router-dom'


const Home = ({image,perks}) => {

  const {image,perks} = useLocation().state;
  console.log(image);
  console.log(perks);

  return (
    <h1>Minha página de home</h1>
  );
}

export default Home;