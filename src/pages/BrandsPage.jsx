import { useState } from "react";

const marcas = [
  {
    id: "1",
    name: "Mercedez",
  },
  {
    id: "2",
    name: "Toyota",
  },
  {
    id: "3",
    name: "Tesla",
  },
];

const BrandsPage = () => {
  const [brands, setBrands] = useState(marcas);

  return (
    <>
      <header className="row col">
        <h1>Pagina de marcas</h1>
      </header>
      <main className="row">
        <article className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand) => {
                return (
                  <tr key={brand.id}>
                    <th scope="row">{brand.id}</th>
                    <td>{brand.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
      </main>
    </>
  );
};

export default BrandsPage;
