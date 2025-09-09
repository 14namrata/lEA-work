import React, { useState } from 'react';
import './Landslide.css';

const Landslide = () => {
    const [formData, setFormData] = useState({
        startChainage: '',
        endChainage: '',
        proneType: 'NA',
        condition: 'F',
        traverseLocation: '1',
        protectionWallType: 'BW',
        bioengineeringSolution: 'NA',
        offset: '3.5',
        surveyDate: '2023-11-13',
        year: '2023',
        remarks: 'Masonry'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
    };

    return (
        <div className="form-container">
            <form className="form-grid" onSubmit={handleSubmit}>
                <div className="form-field">
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
                            if (!/[0-9.]/.test(e.key)) e.preventDefault();
                        }}
                    />
                </div>

                <div className="form-field">
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
                            if (!/[0-9.]/.test(e.key)) e.preventDefault();
                        }}
                    />
                </div>

                <div className="form-field">
                    <label>Prone Type</label>
                    <select name="proneType" value={formData.proneType} onChange={handleChange}>
                        <option value="NA">NA</option>
                        <option value="Type A">Type A</option>
                        <option value="Type B">Type B</option>
                    </select>
                </div>

                <div className="form-field">
                    <label>Condition</label>
                    <select name="condition" value={formData.condition} onChange={handleChange}>
                        <option value="F">F</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                </div>

                <div className="form-field">
                    <label>Traverse Location</label>
                    <select name="traverseLocation" value={formData.traverseLocation} onChange={handleChange}>
                        <option value="1">1</option>
                        <option value="L">L</option>
                        <option value="R">R</option>
                    </select>
                </div>

                <div className="form-field">
                    <label>Protection Wall Type</label>
                    <select name="protectionWallType" value={formData.protectionWallType} onChange={handleChange}>
                        <option value="BW">BW</option>
                        <option value="Concrete">Concrete</option>
                    </select>
                </div>

                <div className="form-field">
                    <label>Bioengineering Solution</label>
                    <select name="bioengineeringSolution" value={formData.bioengineeringSolution} onChange={handleChange}>
                        <option value="NA">NA</option>
                        <option value="Solution X">Solution X</option>
                    </select>
                </div>

                <div className="form-field">
                    <label>Offset (m)</label>
                    <input
                        type="text"
                        name="offset"
                        placeholder="e.g. 3.5"
                        pattern="^\d+(\.\d{1,2})?$"
                        title="Enter decimal like 3.5"
                        required
                        value={formData.offset}
                        onChange={handleChange}
                        onKeyPress={(e) => {
                            if (!/[0-9.]/.test(e.key)) e.preventDefault();
                        }}
                    />
                </div>

                <div className="form-field">
                    <label>Survey Date</label>
                    <input
                        type="date"
                        name="surveyDate"
                        value={formData.surveyDate}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-field">
                    <label>Year</label>
                    <input
                        type="text"
                        name="year"
                        placeholder="2023"
                        pattern="^\d{4}$"
                        title="Enter a 4-digit year"
                        required
                        value={formData.year}
                        onChange={handleChange}
                        onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) e.preventDefault();
                        }}
                    />
                </div>
<div className="form-field full-width">
  <label>Remarks</label>
  <textarea
    name="remarks"
    value={formData.remarks}
    placeholder="test"
    title="Only letters, numbers, and spaces are allowed"
    pattern="^[a-zA-Z0-9 ]*$"
    onChange={handleChange}
    rows="3"
    onKeyPress={(e) => {
      if (!/[a-zA-Z0-9 ]/.test(e.key)) {
        e.preventDefault(); // block special characters
      }
    }}
  />
</div>


                <div className="form-submit full-width">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Landslide;
