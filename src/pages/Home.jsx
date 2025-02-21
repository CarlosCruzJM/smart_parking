import Menu from "../components/Menu";

const Home = () => {
  return (
    <div className="d-flex">
      <Menu />
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <h1>Smart Parking</h1>
      </div>
    </div>
  );
};

export default Home;
