import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 

function EmployeeForm() {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    emp_id: '',
    department: '',
    dob: '',
    gender: '',
    designation: '',
    salary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/employees', employeeData)
      .then(response => {
        alert('Employee data submitted successfully!');
      })
      .catch(error => {
        alert(error);
      });
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h3>Employee Management System</h3>
      <label>Full Name:</label>
      <input type="text" name="name" value={employeeData.name} onChange={handleChange} placeholder="Employee Name" maxLength={30} required />
      <label>Employee ID:</label>
      <input type="text" name="emp_id" value={employeeData.emp_id} onChange={handleChange} placeholder="Employee ID" required />
      <label>Department:</label>
      <select name="department" value={employeeData.department} onChange={handleChange} required>
        <option value="">Select Department</option>
        <option value="CSE">CSE</option>
        <option value="IT">IT</option>
        <option value="CSBS">CSBS</option>
        <option value="AIDS">AIDS</option>
      </select>
      <label>Date of Birth:</label>
      <input type="date" name="dob" value={employeeData.dob} onChange={handleChange} placeholder="Date of Birth" required />
      <label>Gender:</label>
      <div className="radio-buttons">
        <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
        <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
      </div>
      <label>Designation:</label>
      <input type="text" name="designation" value={employeeData.designation} onChange={handleChange} placeholder="Designation" required />
      <label>Total Salary:</label>
      <input type="number" name="salary" value={employeeData.salary} onChange={handleChange} placeholder="Salary" maxLength={8} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmployeeForm;
