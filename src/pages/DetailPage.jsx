import { useParams, useNavigate } from "react-router-dom";
import { destinations } from "../data/destinations";
import "./DetailPage.css";

function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const destinace = destinations.find((d) => d.id === Number(id));
  const { name, country, continent, description, image, rating, price } =
    destinace;
  return (
    <>
      <div className="detailCard">
        <h1 className="detailCardTitle">{name}</h1>
        <img className="detaiCardImg" src={image} alt={name} />
        <p className="detailCardDesc">{description}</p>
        <div className="detailCardFooter">
          <p>{country}</p>
          <p>{continent}</p>
          <p>{rating}</p>
          <p>{price}</p>
        </div>
      </div>
      <div className="backBtnWrapper">
        <button className="backBtn btn" onClick={() => navigate(-1)}>
          Zpet
        </button>
      </div>
    </>
  );
}

export default DetailPage;
