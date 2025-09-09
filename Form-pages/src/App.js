import RoadSurveyForm from './RoadSurveyForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SurveyForm from './SurveyForm';
import RoadSafety from './RoadSafety';
import RoadAccident from './RoadAccident'; 
import Landslide from './Landslide'; 
import AllVillageAssetForm from './Allvillageassest';// ✅ NEW IMPORT

// ✅ NEW IMPORT

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/survey" element={<SurveyForm />} />
        <Route path="/road" element={<RoadSurveyForm />} />
        <Route path="/safety" element={<RoadSafety />} />
        <Route path="/accident" element={<RoadAccident />} /> {/* ✅ NEW ROUTE */}
        <Route path="/landslide" element={<Landslide />} /> {/* ✅ NEW ROUTE */}
        <Route path="/village" element={<AllVillageAssetForm />} /> {/* ✅ NEW ROUTE */}
          

      </Routes>
    </Router>
  );
}

export default App;
