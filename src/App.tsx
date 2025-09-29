import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Page imports will be added in Phase 4
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* More routes will be added in Phase 4 */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
