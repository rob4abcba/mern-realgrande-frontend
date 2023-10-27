import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  return (
    <div className="row bg-warning d-flex align-items-center">
      <div className="col-sm-3">
        <Link to="/">
          {" "}
          <img className="logo" src="/imgs/logo.png" alt="logo here" />{" "}
        </Link>
      </div>
      <div className="col-sm-9">
        <p className="m-0 tagline">
          {" "}
          Copyright © 2013-2023 RealGrande Inc. All rights reserved. (
          v.0.7.1.122 ){" "}
        </p>
      </div>
    </div>
  );
};
export default Footer;
