import React, { useState } from 'react';
import './RoadAccident.css';

const AISform = () => {
  const [formData, setFormData] = useState({
     startChainage: '000.000',
    dateOfAccident: '2025-07-16',
    dayOfWeek: '1',
    time: '14:09',
    sectionName: 'Test',
    policeStation: 'Test',
    firNo: '123',
    placeName: 'Test',
    accidentSpot: '',
    longitude: 'NA',
    latitude: 'NI',
    area: 'Rural',
    accidentClass: 'Major Injury/Damage',
    vehicle1: 'Motor cycle or scooter',
    vehicle2: 'Car/Jeep/Taxi',
    vehicle3: 'Car/Jeep/Taxi',
    type1: 'Pedestrian',
    type2: 'Trees',
    type3: 'Trees',
    fatal: 'NI',
    majorInjury: 'NA',
    minorInjury: 'NI',
    collisionType: 'Hit Pedestrian',
    cause1: 'Vehicle Mechanical Fault',
    cause2: 'Over Speeding',
    cause3: 'Over Speeding',
    remarks: 'test',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const chainagePattern = /^\d{3}\.\d{3}$/;
    if (!chainagePattern.test(formData.startChainage)) {
      alert("Start Chainage must be in format 000.000");
      return false;
    }
    // Add additional validations here as needed
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Submitted:', formData);
    alert('Form submitted successfully');
  };

  const vehicleOptions = ["Motor cycle or scooter", "Car/Jeep/Taxi", "Truck", "Bus"];
  const typeOptions = ["Pedestrian", "Animal", "Trees", "Other"];
  const causeOptions = ["Over Speeding", "Vehicle Mechanical Fault", "Driver Fatigue", "Alcohol Influence"];
  const collisionTypes = ["Head-On", "Rear-End", "Side-Impact", "Hit Pedestrian"];

  return (
    <form className="ais-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        {/* Start Chainage (000.000 format) */}
<div className="field">
  <label>Start Chainage (km)</label>
  <input
    name="startChainage"
    value={formData.startChainage}
    onChange={handleChange}
    type="text"
    placeholder="000.000"
    required
    pattern="\d{3}\.\d{3}"
    title="Enter value like 000.000"
    onKeyPress={(e) => !/[0-9.]/.test(e.key) && e.preventDefault()}
  />
</div>
        <div className="field">
          <label>Date of Accident</label>
          <input type="date" name="dateOfAccident" value={formData.dateOfAccident} onChange={handleChange} required />
        </div>

        <div className="field">
          <label>Day of Week</label>
          <input name="dayOfWeek" value={formData.dayOfWeek} onChange={handleChange} />
          <div className="not-app-info">
    Not App. <span className="hover-info">No Info.</span>
  </div>
        </div>

        <div className="field">
          <label>Time</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} />
        </div>

        <div className="field">
          <label>Section Name</label>
          <input name="sectionName" value={formData.sectionName} onChange={handleChange} />
        </div>

        <div className="field">
          <label>Police Station</label>
          <input name="policeStation" value={formData.policeStation} onChange={handleChange} />
        </div>

        {/* FIR No. */}
<div className="field">
  <label>FIR No.</label>
  <input
    name="firNo"
    value={formData.firNo}
    onChange={handleChange}
    type="number"
    min="0"
    placeholder='124'
    required
  />
</div>



        <div className="field">
          <label>Name of Place</label>
          <input name="placeName" value={formData.placeName} onChange={handleChange} />
        </div>

        <div className="field">
          <label>Accident Spot</label>
          <input name="accidentSpot" value={formData.accidentSpot} onChange={handleChange} />
        </div>

        {/* Longitude */}
<div className="field">
  <label>Longitude</label>
  <input
    name="longitude"
    value={formData.longitude}
    onChange={handleChange}
    type="text"
    placeholder="e.g. 77.5946 or NA/NI"
    pattern="^(\d+(\.\d+)?|NA|NI)$"
    title="Enter numeric value or NA/NI"
    
    required

  />
  <div className="not-app-info">
  Not App. / <span className="hover-info">No Info.</span>
</div>

</div>

{/* Latitude */}
<div className="field">
  <label>Latitude</label>
  <input
    name="latitude"
    value={formData.latitude}
    onChange={handleChange}
    type="text"
    placeholder="e.g. 12.9716 or NA/NI"
    pattern="^(\d+(\.\d+)?|NA|NI)$"
    title="Enter numeric value or NA/NI"
    required
  />
  <div className="not-app-info">
    Not App. <span className="hover-info">No Info.</span>
  </div>
</div>


        <div className="field">
          <label>Area</label>
          <select name="area" value={formData.area} onChange={handleChange} required>
            <option value="">Select Area</option>
            <option>Urban</option>
            <option>Rural</option>
          </select>
        </div>

        <div className="field">
          <label>Accident Class *</label>
          <select name="accidentClass" value={formData.accidentClass} onChange={handleChange} required>
            <option value="">Select Class</option>
            <option>Major Injury/Damage</option>
            <option>Minor Injury</option>
            <option>Fatal</option>
          </select>
        </div>
        <h3 className="section-subheader">No. of Vehicles Involved</h3>


        <div className="field">
          <label>Vehicle 1</label>
          <select name="vehicle1" value={formData.vehicle1} onChange={handleChange} required>
            {vehicleOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>

        <div className="field">
          <label>Vehicle 2</label>
          <select name="vehicle2" value={formData.vehicle2} onChange={handleChange}>
            {vehicleOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>

        <div className="field">
          <label>Vehicle 3</label>
          <select name="vehicle3" value={formData.vehicle3} onChange={handleChange}>
            {vehicleOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>
        <h3 className="section-subheader">pedestrian/Animal/other object involved</h3>

        <div className="field">
          <label>Type 1 *</label>
          <select name="type1" value={formData.type1} onChange={handleChange} required>
            {typeOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>

        <div className="field">
          <label>Type 2 *</label>
          <select name="type2" value={formData.type2} onChange={handleChange}>
            {typeOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>

        <div className="field">
          <label>Type 3 *</label>
          <select name="type3" value={formData.type3} onChange={handleChange}>
            {typeOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>

        {/* Fatal */}
<div className="field">
  <label>No. of Fatal</label>
  <input
    name="fatal"
    value={formData.fatal}
    onChange={handleChange}
    type="number"
    min="0"
    pattern="\d*"
    required
  />
</div>

        {/* Major Injury */}
<div className="field">
  <label> Major Injury</label>
  <input
    name="majorInjury"
    value={formData.majorInjury}
    onChange={handleChange}
    type="number"
    min="0"
    required
  />
  <div className="not-app-info">
    Not App. <span className="hover-info">No Info.</span>
  </div>
</div>

       {/* Minor Injury */}
<div className="field">
  <label>Minor Injury</label>
  <input
    name="minorInjury"
    value={formData.minorInjury}
    onChange={handleChange}
    type="number"
    min="0"
    required
  />
  <div className="not-app-info">
    Not App. <span className="hover-info">No Info.</span>
  </div>
</div>

        <div className="field">
          <label>Collision Type</label>
          <select name="collisionType" value={formData.collisionType} onChange={handleChange}>
            {collisionTypes.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>

        <div className="field">
          <label>Cause 1</label>
          <select name="cause1" value={formData.cause1} onChange={handleChange} required>
            {causeOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>

        <div className="field">
          <label>Cause 2</label>
          <select name="cause2" value={formData.cause2} onChange={handleChange}>
            {causeOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>

        <div className="field">
          <label>Cause 3</label>
          <select name="cause3" value={formData.cause3} onChange={handleChange}>
            {causeOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>

        <div className="field full">
          <label>Remarks</label>
          <textarea name="remarks" value={formData.remarks} onChange={handleChange} rows={4}></textarea>
        </div>

        <div className="btn-wrap full">
          <button type="submit" className="btn">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default AISform;
