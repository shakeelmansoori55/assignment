import { Route, Routes } from 'react-router';
import './App.css';
import { Navbar } from './components/Navbar';
import { Chart } from './components/pages/chart';
import { Home } from './components/pages/home';
import { Table } from './components/pages/table';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mytable" element={<Table />} />
        <Route path="/chart" element={<Chart />} />
        </Routes>
    </div>
  );
}

export default App;
