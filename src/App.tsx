import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddHeroPage } from './components/add-hero-page';

import { HeroDetailsPage } from './components/hero-details-page';
import { HomePage } from './components/home-page';
import { NavBar } from './navigation/navbar';

const queryClient = new QueryClient();

function App() {
  return <>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/details/:heroId' element={<HeroDetailsPage/>}/>
        <Route path='/addhero' element={<AddHeroPage/>}/>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>

  
  </>
}

export default App;
