import useGlobalContext from "../hooks/useGlobalContext";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  console.log(openSidebar);

  return <div>Home</div>;
};

export default Home;
