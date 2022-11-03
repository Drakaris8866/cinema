import Home from "@screens/home/Home";
import Meta from "@utils/Meta/Meta";
import { NextPage } from 'next'


const Main: NextPage = () => {
  return (
    <Meta title="Watch movies online" description="Watch MovieApp movies adn TV shows">
      <Home/>
    </Meta>
  )
}

export default Main
