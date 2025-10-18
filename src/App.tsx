import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { VStack } from '@chakra-ui/react';

import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useLanguage } from "./hooks/useLanguage.ts";
import { useEffect } from "react";
import {NotFound} from './pages/NotFound';
// import {ThankYou} from './pages/ThankYou';
import useDirection from "./hooks/useDirection.ts";
import useFontFamily from "./hooks/useFontFamily";
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
