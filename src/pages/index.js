import { Suspense } from "react";
import HomePage from './home';

const Home = () => {
  return (
    <Suspense fallback="Loading...">
      <h1>Bem vindo</h1>
      <HomePage />
    </Suspense>
  );
};
export default Home;
