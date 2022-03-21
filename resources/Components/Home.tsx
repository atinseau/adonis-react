import React, {FC, useEffect} from 'react';
import useRouter from "../Hook/useRouter";

const Home: FC = (props) => {

  const router = useRouter()

  useEffect(() => {
    console.log("mounted")
  }, [])

  return <div>
    <h1>salut tout le monde path: {router.path}</h1>
    <p>{JSON.stringify(props)}</p>
  </div>
}

export default Home;
