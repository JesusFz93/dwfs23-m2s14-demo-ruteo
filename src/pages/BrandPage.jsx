import { useParams } from "react-router-dom";

const BrandPage = () => {
  const { id } = useParams();
  return (
    <>
      <header>
        <h1>Brand Page</h1>
      </header>
      <main>
        <article>{id}</article>
      </main>
    </>
  );
};

export default BrandPage;
