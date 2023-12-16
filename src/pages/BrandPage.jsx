import { useParams } from "react-router-dom";

const BrandPage = () => {
  const { id, name } = useParams();
  return (
    <>
      <header>
        <h1>Brand Page</h1>
      </header>
      <main>
        <article>{name}</article>
        <article>{id}</article>
      </main>
    </>
  );
};

export default BrandPage;
