import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Lessons from './pages/Lessons';
import SmartCoins from './pages/SmartCoins';
import Dashboard from './pages/Dashboard';
import Parents from './pages/Parents';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App min-h-screen bg-slate-900">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="lessons" element={<Lessons />} />
              <Route path="smartcoins" element={<SmartCoins />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="parents" element={<Parents />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
