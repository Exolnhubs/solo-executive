import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { VStack } from '@chakra-ui/react';

import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useLanguage } from "./hooks/useLanguage.ts";
import { useEffect } from "react";
import { NotFound } from './pages/NotFound';
// import {ThankYou} from './pages/ThankYou';
import useDirection from "./hooks/useDirection.ts";
import useFontFamily from "./hooks/useFontFamily";
import { About } from './pages/About.tsx';
import { Contact } from './pages/Contact.tsx';
import { Projects } from './pages/Projects.tsx';
import { Terms } from './pages/Terms.tsx';
import { Privacy } from './pages/Privacy.tsx';
import { Services } from './pages/Services.tsx';
function App() {
  const { direction } = useLanguage();
  useDirection();

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);
  useFontFamily(); // dynamically switches fonts

  return (
    <VStack minH="100vh" w={"100vw"} gap={0}>
      <BrowserRouter>
        <Header />
        <main>
          {/* <TimedPopup /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/privacy' element={<Privacy />} />

            {/* <Route path="/thankyou" element={<ThankYou />} /> */}

            <Route path="*" element={<NotFound />} />

          </Routes>
          {/* <Toaster /> */}
        </main>
        <Footer />
      </BrowserRouter>
    </VStack>
  );
}

export default App
