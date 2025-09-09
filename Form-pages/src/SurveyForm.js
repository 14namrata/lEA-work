import React, { useState } from 'react';
import './SurveyForm.css';

// Real-world dropdown options
const crossSectionOptions = [
  'Carriageway Left',
  'Carriageway Right',
  'Median',
  'Shoulder Left',
  'Shoulder Right',
  'Footpath',
  'Drainage Channel'
];

const featureOptions = [
  'Bridge',
  'Culvert',
  'Retaining Wall',
  'Sign Board',
  'Crash Barrier',
  'Electric Pole',
  'Lighting Pole'
];

const materialOptions = [
  'Concrete',
  'Steel',
  'Brick Masonry',
  'Bitumen',
  'Wood',
  'PVC',
  'Composite'
];

const conditionOptions = [
  'Good',
  'Fair',
  'Poor',
  'Damaged',
  'Under Repair'
];

const safetyOptions = [
  'Yes',
  'No',
  'Needs Inspection'
];

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    startChainage: '000.000',
    endChainage: '000.094',
    crossSectionLocation: 'Carriageway Left',
    offset: '1',
    feature: 'Bridge',
    materialType: 'Concrete',
    featureCondition: 'Good',
    safetyHazard: 'No',
    latitude: '25.5747233',
    longitude: '89.98167757',
    altitude: '31.5',
    surveyDate: '13-11-2023',
    remarks: 'NIL',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    alert('Form submitted!');
  };

  return (
    <div className="form-container">
      <form className="survey-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Start Chainage (km)</label>
          <input name="startChainage" value={formData.startChainage} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>End Chainage (km)</label>
          <input name="endChainage" value={formData.endChainage} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Cross Section Location</label>
          <select name="crossSectionLocation" value={formData.crossSectionLocation} onChange={handleChange}>
            {crossSectionOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Offset (m)</label>
          <input name="offset" value={formData.offset} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Feature</label>
          <select name="feature" value={formData.feature} onChange={handleChange}>
            {featureOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Material Type</label>
          <select name="materialType" value={formData.materialType} onChange={handleChange}>
            {materialOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Feature Condition</label>
          <select name="featureCondition" value={formData.featureCondition} onChange={handleChange}>
            {conditionOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Safety Hazard</label>
          <select name="safetyHazard" value={formData.safetyHazard} onChange={handleChange}>
            {safetyOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Latitude</label>
          <input name="latitude" value={formData.latitude} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Longitude</label>
          <input name="longitude" value={formData.longitude} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Altitude</label>
          <input name="altitude" value={formData.altitude} onChange={handleChange} />
        </div>

        <div className="form-group">
  <label>Survey Date</label>
  <input
    type="date"
    name="surveyDate"
    value={formData.surveyDate}
    onChange={handleChange}
  />
</div>


        <div className="form-group full-span">
          <label>Remarks</label>
          <textarea name="remarks" value={formData.remarks} onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="submit-btn full-span">Submit</button>
      </form>
    </div>
  );
};

export default SurveyForm;
