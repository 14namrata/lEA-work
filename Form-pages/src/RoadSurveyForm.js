import React, { useState } from 'react';
import './roadform.css';

export default function RoadSurveyForm() {
  const [form, setForm] = useState({
    startChainage: '0',
    endChainage: '0.5',
    surveyDate: '2017-02-07',
    terrain: 'Plain',
    landuseLeft: 'Residential',
    landuseRight: 'Agriculture',
    villageName: 'NA',
    rightOfWay: '0',
    roadwayWidth: '4',
    embankmentHeight: '0',
    carriagewayType: 'Bituminous',
    carriagewayWidth: '3.4',
    shoulderTypeLeft: 'Earthen',
    shoulderWidthLeft: '0.9',
    shoulderTypeRight: 'Earthen',
    shoulderWidthRight: '0.7',
    drainageLeft: 'Nil',
    drainageRight: 'Nil',
    footpathWidthLeft: '',
    footpathHeightLeft: '',
    footpathWidthRight: ''
  });

  const [errors, setErrors] = useState({});

  const required = [
    'startChainage', 'endChainage', 'surveyDate', 'rightOfWay',
    'roadwayWidth', 'embankmentHeight', 'carriagewayWidth',
    'shoulderWidthLeft', 'shoulderWidthRight'
  ];

  const numericKeys = [
    'startChainage', 'endChainage', 'rightOfWay', 'roadwayWidth',
    'embankmentHeight', 'carriagewayWidth', 'shoulderWidthLeft',
    'shoulderWidthRight'
  ];

  const validate = () => {
    const next = {};
    required.forEach(k => { if (form[k] === '') next[k] = 'Required'; });
    numericKeys.forEach(k => {
      if (form[k] !== '' && isNaN(Number(form[k]))) next[k] = 'Must be numeric';
    });
    return next;
  };

  const handleChange = ({ target: { name, value } }) =>
    setForm(prev => ({ ...prev, [name]: value }));

  const handleSubmit = e => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      console.table(form);
      alert('Form submitted!  Check the console.');
    }
  };

  const Field = ({ label, name, children }) => (
    <div className="field">
      <label className="label" htmlFor={name}>{label}</label>
      {children}
      {errors[name] && <span className="error-text">{errors[name]}</span>}
    </div>
  );

  return (
    <section className="page">
      
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="form-grid">
          {/* 1 */}
          <Field label="Start Chainage (Km)" name="startChainage">
            <input id="startChainage" name="startChainage" type="number" step="0.01"
              value={form.startChainage} onChange={handleChange} className="ctl" />
          </Field>
          <Field label="End Chainage (Km)" name="endChainage">
            <input id="endChainage" name="endChainage" type="number" step="0.01"
              value={form.endChainage} onChange={handleChange} className="ctl" />
          </Field>
          <Field label="Survey Date" name="surveyDate">
            <input id="surveyDate" name="surveyDate" type="date"
              value={form.surveyDate} onChange={handleChange} className="ctl" />
          </Field>

          {/* 2 */}
          <Field label="Terrain" name="terrain">
            <select name="terrain" value={form.terrain} onChange={handleChange} className="ctl">
              <option>Plain</option><option>Rolling</option><option>Mountainous</option>
            </select>
          </Field>
          <Field label="Landuse Left" name="landuseLeft">
            <select name="landuseLeft" value={form.landuseLeft} onChange={handleChange} className="custom-select">
              <option value="" disabled hidden>Select Landuse</option>
              <option>Built-Up</option><option>Agriculture</option><option>Forest Area</option>
              <option>Industrial</option><option>Residential</option><option>Barren Land</option>
              <option>Water</option><option>Missing Link</option>
            </select>
          </Field>
          <Field label="Landuse Right" name="landuseRight">
            <select name="landuseRight" value={form.landuseRight} onChange={handleChange} className="custom-select">
              <option value="" disabled hidden>Select Landuse</option>
              <option>Built-Up</option><option>Agriculture</option><option>Forest Area</option>
              <option>Industrial</option><option>Residential</option><option>Barren Land</option>
              <option>Water</option><option>Missing Link</option>
            </select>
          </Field>

          {/* 3 */}
          <Field label="Name of Village" name="villageName">
            <input name="villageName" type="text" value={form.villageName}
              onChange={handleChange} className="ctl" />
          </Field>
          <Field label="Right‑of‑Way (m)" name="rightOfWay">
            <input name="rightOfWay" type="text" value={form.rightOfWay}
              onChange={handleChange} className="ctl" />
          </Field>
          <Field label="Roadway Width (m)" name="roadwayWidth">
            <input name="roadwayWidth" type="text" value={form.roadwayWidth}
              onChange={handleChange} className="ctl" />
          </Field>

          {/* 4 */}
          <Field label="Embankment Height (m)" name="embankmentHeight">
            <input name="embankmentHeight" type="text" value={form.embankmentHeight}
              onChange={handleChange} className="ctl" />
          </Field>
          <Field label="Carriageway Type" name="carriagewayType">
            <select name="carriagewayType" value={form.carriagewayType} onChange={handleChange} className="ctl">
              <option>Bituminous</option><option>Concrete</option>
              <option>Gravel</option><option>Earthen</option>
            </select>
          </Field>
          <Field label="Carriageway Width (m)" name="carriagewayWidth">
            <input name="carriagewayWidth" type="text" value={form.carriagewayWidth}
              onChange={handleChange} className="ctl" />
          </Field>

          {/* 5 */}
          <Field label="Shoulder Type Left" name="shoulderTypeLeft">
            <select name="shoulderTypeLeft" value={form.shoulderTypeLeft} onChange={handleChange} className="ctl">
              <option>Earthen</option><option>Bituminous</option>
              <option>Concrete</option><option>Gravel</option>
            </select>
          </Field>
          <Field label="Shoulder Width Left (m)" name="shoulderWidthLeft">
            <input name="shoulderWidthLeft" type="text" value={form.shoulderWidthLeft}
              onChange={handleChange} className="ctl" />
          </Field>
          <Field label="Shoulder Type Right" name="shoulderTypeRight">
            <select name="shoulderTypeRight" value={form.shoulderTypeRight} onChange={handleChange} className="ctl">
              <option>Earthen</option><option>Bituminous</option>
              <option>Concrete</option><option>Gravel</option>
            </select>
          </Field>

          {/* 6 */}
          <Field label="Shoulder Width Right (m)" name="shoulderWidthRight">
            <input name="shoulderWidthRight" type="text" value={form.shoulderWidthRight}
              onChange={handleChange} className="ctl" />
          </Field>
          <Field label="Drainage Left" name="drainageLeft">
            <select name="drainageLeft" value={form.drainageLeft} onChange={handleChange} className="ctl">
              <option>Nil</option><option>Kacha</option><option>Paved</option>
            </select>
          </Field>
          <Field label="Drainage Right" name="drainageRight">
            <select name="drainageRight" value={form.drainageRight} onChange={handleChange} className="ctl">
              <option>Nil</option><option>Kacha</option><option>Paved</option>
            </select>
          </Field>

          {/* 7 */}
          <Field label="Footpath Width Left (m)" name="footpathWidthLeft">
            <input name="footpathWidthLeft" type="text" value={form.footpathWidthLeft}
              onChange={handleChange} className="ctl" />
          </Field>
          <Field label="Footpath Height Left (m)" name="footpathHeightLeft">
            <input name="footpathHeightLeft" type="text" value={form.footpathHeightLeft}
              onChange={handleChange} className="ctl" />
          </Field>
          <Field label="Footpath Width Right (m)" name="footpathWidthRight">
            <input name="footpathWidthRight" type="text" value={form.footpathWidthRight}
              onChange={handleChange} className="ctl" />
          </Field>

          {/* Submit */}
          <div className="btn-wrap">
            <button type="submit" className="btn">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
