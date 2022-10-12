import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Page from './Page';

import {
  About,
  Bands,
  Contact,
  Home,
  Specialty,
  Weddings,
  Top,
  Classical,
  Jazz,
  World,
  Swing,
} from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="bands-orchestras" element={<Bands />} />
          <Route path="specialty-entertainment" element={<Specialty />} />
          <Route path="weddings" element={<Weddings />} />
          <Route path="contact" element={<Contact />} />
          <Route path="top-40s" element={<Top />} />
          <Route path="classical" element={<Classical />} />
          <Route path="jazz" element={<Jazz />} />
          <Route path="world" element={<World />} />
          <Route path="swing" element={<Swing />} />
        </Routes>
      </Page>
    </BrowserRouter>
  </React.StrictMode>
);
