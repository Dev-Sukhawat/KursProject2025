import { useParams } from "react-router-dom";
import Navbar from "../components/nav/navbar";

function Category() {
  const { list } = useParams();
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>category</h1>
        <p>
          Here you can find a list of <strong>{list}</strong>.
        </p>
      </div>
    </>
  );
}

export default Category;
