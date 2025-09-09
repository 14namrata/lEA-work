import React, { useState } from 'react';
import './RoadSafety.css';

const RoadSafety = () => {
  const [formData, setFormData] = useState({
    startChainage: '',
    endChainage: '',
    location: '',
    offset: '',
    safetyHazard: '',
    remedialMeasure: '',
    surveyDate: '',
    remarks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericFields = ['startChainage', 'endChainage', 'offset'];
    for (let field of numericFields) {
      if (formData[field] && isNaN(Number(formData[field]))) {
        alert(`${field} must be numeric`);
        return;
      }
    }
    alert('Form submitted successfully');
    console.log(formData);
  };

  return (
    <form className="road-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
  <label>Start Chainage (km)</label>
  <input
    type="text"
    name="startChainage"
    placeholder="1.0000"
    pattern="^\d+(\.\d{1,4})?$"
    title="Enter decimal like 1.0000"
    required
    value={formData.startChainage}
    onChange={handleChange}
    onKeyPress={(e) => {
      if (!/[0-9.]/.test(e.key)) {
        e.preventDefault(); // block letters and symbols
      }
    }}
  />
</div>


        <div className="field">
  <label>End Chainage (km)</label>
  <input
    type="text"
    name="endChainage"
    placeholder="3.0000"
    pattern="^\d+(\.\d{1,4})?$"
    title="Enter decimal like 3.0000"
    required
    value={formData.endChainage}
    onChange={handleChange}
    onKeyPress={(e) => {
      if (!/[0-9.]/.test(e.key)) {
        e.preventDefault();
      }
    }}
  />
</div>

    <div className="field">
  <label>Location</label>
  <select
    name="location"
    value={formData.location}
    onChange={handleChange}
    required
  >
    <option value="">Select Location</option>
    <option value="L">Left</option>
    <option value="R">Right</option>
    <option value="C">Center</option>
  </select>
</div>


        <div className="field">
          <label>Offset (m)</label>
          <input
            type="text"
            name="offset"
            value={formData.offset}
            onChange={handleChange}
            pattern="^\d+(\.\d+)?$"
            placeholder='1'
            title="Only numeric values allowed"
          />
        </div>

        <div className="field">
  <label>Safety Hazard *</label>
  <select
    name="safetyHazard"
    value={formData.safetyHazard}
    onChange={handleChange}
    required
  >
    <option value="">Select Safety Hazard</option>
    <option value="GD1">GD1</option>
    <option value="SH2">SH2</option>
    <option value="SH3">SH3</option>
  </select>
</div>


        <div className="field">
  <label>Remedial Measure</label>
  <select
    name="remedialMeasure"
    value={formData.remedialMeasure}
    onChange={handleChange}
  >
    <option value="">Select Remedial Measure</option>
    <option value="RM1">RM1</option>
    <option value="RM2">RM2</option>
    <option value="RM3">RM3</option>
  </select>
</div>

        <div className="field">
          <label>Survey Date</label>
          <input
            type="date"
            name="surveyDate"
            value={formData.surveyDate}
            onChange={handleChange}
          />
        </div>

        <div className="field full">
  <label>Remarks</label>
  <textarea
    name="remarks"
    placeholder="test"
    value={formData.remarks}
    onChange={(e) => {
      const val = e.target.value;
      // Allow only letters, digits, spaces
      if (/^[a-zA-Z0-9\s]*$/.test(val)) {
        handleChange(e);
      }
    }}
    rows={4}
  ></textarea>
</div>


        <div className="btn-wrap full">
          <button type="submit" className="btn">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default RoadSafety;
