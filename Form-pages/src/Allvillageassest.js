import React, { useState } from 'react';
import './Allvillageassest.css';

const AllVillageAssetForm = () => {
  const [formData, setFormData] = useState({
    villageName: '',
    population: '',
    latitude: '',
    longitude: '',
    censusYear: '',
    growthRate: '',
    source: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add submission logic
  };

  return (
    <div className="village-form-container">
      <form className="village-form-grid" onSubmit={handleSubmit}>
        <div className="village-form-field">
          <label>Village Name</label>
          <input
            type="text"
            name="villageName"
            placeholder="Greenfield"
            value={formData.villageName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="village-form-field">
          <label>Population</label>
          <input
            type="number"
            name="population"
            placeholder="1500"
            min="1"
            value={formData.population}
            onChange={handleChange}
            required
          />
        </div>

        <div className="village-form-field">
          <label>Latitude</label>
          <input
            type="text"
            name="latitude"
            placeholder="25.123456"
            pattern="^-?\d{1,3}\.\d+$"
            title="Enter a valid decimal latitude (e.g. 25.123456)"
            value={formData.latitude}
            onChange={handleChange}
            required
          />
        </div>

        <div className="village-form-field">
          <label>Longitude</label>
          <input
            type="text"
            name="longitude"
            placeholder="91.123456"
            pattern="^-?\d{1,3}\.\d+$"
            title="Enter a valid decimal longitude (e.g. 91.123456)"
            value={formData.longitude}
            onChange={handleChange}
            required
          />
        </div>

        <div className="village-form-field">
          <label>Census Year</label>
          <input
            type="text"
            name="censusYear"
            placeholder="2011"
            pattern="^\d{4}$"
            title="Enter a valid 4-digit year"
            value={formData.censusYear}
            onChange={handleChange}
            required
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) e.preventDefault();
            }}
          />
        </div>

        <div className="village-form-field">
          <label>Growth Rate (%)</label>
          <input
            type="text"
            name="growthRate"
            placeholder="2.5"
            pattern="^\d+(\.\d{1,2})?$"
            title="Enter a valid decimal (e.g. 2.5)"
            value={formData.growthRate}
            onChange={handleChange}
            required
            onKeyPress={(e) => {
              if (!/[0-9.]/.test(e.key)) e.preventDefault();
            }}
          />
        </div>

        <div className="village-form-field village-full-width">
          <label>Source</label>
          <input
            type="text"
            name="source"
            placeholder="CENSUS"
            value={formData.source}
            onChange={handleChange}
            required
          />
        </div>

        <div className="village-full-width">
          <button type="submit" className="village-form-submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AllVillageAssetForm;
