import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from './components/Nav';
import HistoryScreen from './components/HistoryScreen';
import ReformScreen from './components/ReformScreen';
import FactoryScreen from './components/FactoryScreen';
import RegionalScreen from './components/RegionalScreen';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/screen-2" replace />} />
        <Route path="/screen-2" element={<HistoryScreen />} />
        <Route path="/screen-3" element={<ReformScreen />} />
        <Route path="/phase-2" element={<RegionalScreen />} />
        <Route path="/factory" element={<FactoryScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
