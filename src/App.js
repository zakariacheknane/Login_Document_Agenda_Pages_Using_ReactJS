import './App.css';

import DocumentPage from "./pages/DocumentPage";
import LoginPage from "./pages/LoginPage";
import AgendaPage from "./pages/AgendaPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    
    <div className="App">

<Router >
      <Routes>
      <Route index element={<LoginPage />} />
        <Route path="/Document" element={<DocumentPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Agenda" element={<AgendaPage />} />
 
      </Routes>
    </Router>
    </div>
  );
}

export default App;
