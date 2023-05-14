import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TeamCards from "../Components/Team-cards";

export default function EmployeeView() {
  const [EmployeeView, setEmployeeView] = useState("");
  const { EmpId } = useParams();

  useEffect(() => {
    fetch("http://localhost:8000/employees/" + EmpId)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmployeeView(resp);
      })
      .catch((err) => {
        alert("Employee details failed due to : " + err.message);
      });
  }, []);

  return (
    <div className="container-fluid my-4">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <TeamCards
            img={EmployeeView.img}
            title={EmployeeView.name}
            text={EmployeeView.dept}
            text2={EmployeeView.role}
            idnum={EmployeeView.id}
          />
          <Link to={"/EmployeeDetails"} className="btn btn-danger w-100">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
