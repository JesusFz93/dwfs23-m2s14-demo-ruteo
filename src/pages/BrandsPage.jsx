import NavBar from "../components/NavBar";

const BrandsPage = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <header className="row col">
          <h1>Pagina de marcas</h1>
        </header>
        <main className="row">
          <article className="col">
            <p>Estas en la pagina de marcas.</p>
          </article>
        </main>
      </div>
    </>
  );
};

export default BrandsPage;
