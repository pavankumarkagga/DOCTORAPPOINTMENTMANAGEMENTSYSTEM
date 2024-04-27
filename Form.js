import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    age: '',
    gender: '',
    symptoms: '',
    currentPrescription: '',
  });
  const [patients, setPatients] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedIndex !== null) {
      // Update existing patient
      setPatients((prevPatients) => {
        const updatedPatients = [...prevPatients];
        updatedPatients[selectedIndex] = formData;
        return updatedPatients;
      });
      setSelectedIndex(null);
    } else {
      // Add new patient
      setPatients((prevPatients) => [...prevPatients, formData]);
    }
    setFormData({
      name: '',
      id: '',
      age: '',
      gender: '',
      symptoms: '',
      currentPrescription: '',
    });
  };

  const handleDelete = (index) => {
    setPatients((prevPatients) => prevPatients.filter((_, i) => i !== index));
  };

  const handleUpdate = (index) => {
    setFormData(patients[index]);
    setSelectedIndex(index);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Patient Name"
        />
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="Patient ID"
        />
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          placeholder="Gender"
        />
        <input
          type="text"
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          placeholder="Symptoms"
        />
        <input
          type="text"
          name="currentPrescription"
          value={formData.currentPrescription}
          onChange={handleChange}
          placeholder="Current Prescription"
        />
        <button type="submit">{selectedIndex !== null ? 'Update Patient' : 'Add Patient'}</button>
      </form>
      <table className="patient-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Symptoms</th>
            <th>Current Prescription</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.name}</td>
              <td>{patient.id}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.symptoms}</td>
              <td>{patient.currentPrescription}</td>
              <td>
                <button onClick={() => handleUpdate(index)}>Update</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;

