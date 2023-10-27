import { useNavigate } from "react-router-dom";
import Enquiry from "./Enquiry";

const SearchResultsCard = (props) => {
  const navigate = useNavigate();

  let clickHandler = () => {
    console.log("clicked!");
    navigate("/searchedHouse/" + props.house._id);
  };

  return (
    <>
      <div className="row" key={props.house._id} onClick={clickHandler}>
        <div className="col-sm-6">
          <img
            src={"/imgs/" + props.house.photo}
            className="card-img-top img-fluid"
            alt="house"
          />
        </div>
        <div className="col-sm-6">
          <h5 class="card-title">Address: {props.house.address}</h5>
          <p class="card-text">Price: ${props.house.price}</p>
          <p>{props.house.description}</p>
          <a href="#" class="btn btn-primary">
            Enquire for More Information
          </a>
          {/* {sessionStorage.getItem("custname") && <Enquiry />} */}
        </div>
      </div>

      {/* <div
        class="card"
        // style="width: 18rem;"
        key={props.house._id}
        onClick={clickHandler}
      >
        <img
          src={"/imgs/" + props.house.photo}
          className="card-img-top img-fluid"
          alt="house"
        />
        <div class="card-body">
          <h5 class="card-title">Address: {props.house.address}</h5>
          <p class="card-text">Price: ${props.house.price}</p>
          <a href="#" class="btn btn-primary">
            Enquire for More Information
          </a>
        </div>
      </div> */}

      {/* <tr key={props.house._id} onClick={clickHandler}>
        <td scope="card">{props.house.address}</td>
        <td>{props.house.price}</td>
      </tr> */}
    </>
  );
};

export default SearchResultsCard;
