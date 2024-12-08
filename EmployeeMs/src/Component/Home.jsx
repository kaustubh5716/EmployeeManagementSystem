import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0);
  const [employeeTotal, setEmployeeTotal] = useState(0);
  const [salaryTotal, setSalaryTotal] = useState(0);
  const [admins, setadmins] = useState([]);
  
  useEffect(() => { //use effect hook is used to fetch the data
    adminCount();
    employeeCount();
    salaryCount();
    adminRecords();
  },[])
  const adminRecords = () => {
    axios.get('http://localhost:3000/auth/admin_records')
      .then(result => {
        if(result.data.Status){
          setadmins(result.data.Result)
        }else{
          alert(result.data.Error)
        }

      })
    }
  const adminCount = () => {
    axios.get('http://localhost:3000/auth/admin_count')
      .then(result => {
        if(result.data.Status){
          setAdminTotal(result.data.Result[0].admin)
        }

      })
    }
  const salaryCount = () => {
    axios.get('http://localhost:3000/auth/salary_count')
      .then(result => {
        if(result.data.Status){
          setSalaryTotal(result.data.Result[0].salary)
        }

      })
    }
    const employeeCount = () => {
      axios.get('http://localhost:3000/auth/employee_count')
        .then(result => {
          if(result.data.Status){
            setEmployeeTotal(result.data.Result[0].employee)
          }
  
        })
      }
  return (
    <div>
    <div className='p-3 d-flex justify-content-around mt-3'>
      <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
        <div className='text-center pb-1'>
          <h4>Admin's</h4>
        </div>
        <hr />
        <div className='d-flex justify-content-between'>
          <h5>Total:</h5>
          <h5>{adminTotal}</h5>
        </div>
      </div>
      <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
        <div className='text-center pb-1'>
          <h4>Employee's</h4>
        </div>
        <hr />
        <div className='d-flex justify-content-between'>
          <h5>Total:</h5>
          <h5>{employeeTotal}</h5>
        </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
        <div className='text-center pb-1'>
          <h4>Employee Salary</h4>
        </div>
        <hr />
        <div className='d-flex justify-content-between'>
          <h5>Total:</h5>
          <h5>Rs.{salaryTotal}</h5>
        </div>
      </div>
    </div>
    <div className='mt-4 px-5 pt-3'>
        <h3>List of Admins</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
              admins.map(a => (
                <tr>
                  <td>{a.email}</td>
                  <td>
                  <button
                    className="btn btn-info btn-sm me-2">
                    Edit
                  </button>
                  <button
                    className="btn btn-warning btn-sm" >
                    Delete
                  </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home