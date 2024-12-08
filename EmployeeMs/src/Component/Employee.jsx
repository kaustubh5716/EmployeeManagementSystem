import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  // Fetch employees on mount
  useEffect(() => {
    axios.get("http://localhost:3000/auth/employee").then((result) => {
      if (result.data.Status) {
        setEmployee(result.data.Result);
      } else {
        alert(result.data.Error);
      }
    });
  }, []);

  // Delete employee function
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/auth/delete_employee/" + id)
      .then((result) => {
        if (result.data.Status) {
          // Update the employee list by removing the deleted employee
          setEmployee(employee.filter((e) => e.id !== id));
          alert("Employee deleted successfully!");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to="/dashboard/add_employee" className="btn btn-success">
        Add Employee
      </Link>
      <div className="mt-3"></div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Email</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>
                <img
                  src={`http://localhost:3000/Images/` + e.image}
                  className="employee_image"
                  alt="Employee"
                />
              </td>
              <td>{e.email}</td>
              <td>{e.address}</td>
              <td>Rs. {e.salary}</td>
              <td>
                <Link
                  to={`/dashboard/edit_employee/` + e.id}
                  className="btn btn-info btn-sm me-2"
                  style={{ border: "1.5px solid black" }}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-warning btn-sm"
                  style={{ border: "1.5px solid black" }}
                  onClick={() => handleDelete(e.id)} // Use a function wrapper here
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
