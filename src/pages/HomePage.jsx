import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <header className="row col">
          <h1>Pagina de inicio</h1>
        </header>
        <main className="row">
          <article className="col">
            <p>Estas en la pagina principal.</p>
          </article>
        </main>
      </div>
    </>
  );
};

export default HomePage;
