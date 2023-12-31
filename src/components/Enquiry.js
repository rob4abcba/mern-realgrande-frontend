import axios from "axios";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Enquiry = () => {
  let [enquiryObj, setEnquiryObj] = useState({
    ename: sessionStorage.getItem("custname"),
    email: sessionStorage.getItem("custemail"),
    remarks: "",
  });
  let [successMsg, seSuccessMsg] = useState("");

  let changeHandler = (e) => {
    setEnquiryObj({ ...enquiryObj, [e.target.name]: e.target.value });
  };

  let clickHandler = async (e) => {
    e.preventDefault();
    console.log(enquiryObj);
    try {
      // let resp = await axios.post("http://localhost:3002/register", {
      //   ...enquiryObj,
      // });
      let resp = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "register",
        {
          ...enquiryObj,
        }
      );
      let data = await resp.data;
      console.log(data);
      seSuccessMsg(
        "Thanks for reaching out! You will hear back from our Realtor soon"
      );
    } catch (error) {
      console.log(" Could not store enquiry.");
      console.log(error);
    }

    //code to send email
    const templateParams = {
      name: enquiryObj.ename,
      notes: enquiryObj.remarks,
    };

    emailjs
      .send(
        "<process.env.YOUR_SERVICE_ID>",
        "<process.env.YOUR_TEMPLATE_ID>",
        templateParams,
        "<process.env.YOUR_PUBLIC_KEY>"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  if (!(successMsg == "")) {
    return (
      <div>
        <h6 className="text-primary"> {successMsg} </h6>
      </div>
    );
  } else {
    return (
      <div>
        <h6> Contact Us About this house :</h6>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
            type="text"
            // onChange={changeHandler}
            name="ename"
            value={sessionStorage.getItem("custname")}
            id=""
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            type="text"
            // onChange={changeHandler}
            name="email"
            value={sessionStorage.getItem("custemail")}
            id=""
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Message
          </label>
          <input
            type="text"
            onChange={changeHandler}
            name="remarks"
            id=""
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
        </div>

        <p class="form-text text-muted">
          Cannot submit unless all the fields are filled in
        </p>
        <input
          name=""
          id=""
          onClick={clickHandler}
          className="btn btn-primary"
          type="button"
          value="Submit"
          disabled={
            !enquiryObj.ename || !enquiryObj.email || !enquiryObj.remarks
          }
        />
      </div>
    );
  }
};

export default Enquiry;
