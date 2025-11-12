
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Nav from './components/Nav';
import HistoryScreen from './components/HistoryScreen';
import ReformScreen from './components/ReformScreen';
import FactoryScreen from './components/FactoryScreen';
import RegionalScreen from './components/RegionalScreen';
import FutureScreen from './components/FutureScreen';
import AgroScreen from './components/AgroScreen';
import Screen11 from './components/Screen11';
import Screen12 from './components/Screen12';
import CoverScreen from './components/CoverScreen';
import ConclusionScreen from './components/ConclusionScreen';
import FdiScreen from "./components/FdiScreen";
import BrandScreen from "./components/BrandScreen";
function AppContent() {
  const location = useLocation();
  const isCoverPage = location.pathname === '/opening' || location.pathname === '/conclusion';

  return (
    <>
      {!isCoverPage && <Nav />}

      <Routes>
        <Route path="/" element={<Navigate to="/screen-1" replace />} />
        <Route path="/opening" element={<CoverScreen />} />
        <Route path="/historical-context" element={<HistoryScreen />} />
        <Route path="/opening-era" element={<ReformScreen />} />
        <Route path="/regional-integration" element={<RegionalScreen />} />
        <Route path="/global-supply-chain" element={<FactoryScreen />} />
        <Route path="/fdi-investment" element={<FdiScreen />} />
        <Route path="/future-economy" element={<FutureScreen />} />
        <Route path="/agricultural-exports" element={<AgroScreen />} />
        <Route path="/social-impact" element={<Screen11 />} />
        <Route path="/challenges-ahead" element={<Screen12 />} />
        <Route path="/conclusion" element={<ConclusionScreen />} />
        <Route path="/vietnamese-brands" element={<BrandScreen />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;