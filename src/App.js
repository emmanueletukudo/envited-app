import { Routes, Route } from 'react-router-dom';
import Navigation from './pages/navigation/Navigation';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import CreatePage from './pages/CreatePage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='/event' element={<EventPage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/:event/events' element={<EventPage />} />
      </Route>
    </Routes>
  );
}

export default App;
