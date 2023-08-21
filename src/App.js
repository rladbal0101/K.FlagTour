import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import Mice from './pages/Mice';
import SightseeingTours from './pages/SightseeingTours';
import MedicalTours from './pages/MedicalTours';
import UsefulInformation from './pages/UsefulInformation';

const GlobalStyled = createGlobalStyle`
  ${reset}

  body {
    box-sizing: border-box;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/about_us' element={<AboutUs />}>
            <Route path='company_introduction' element={undefined} />
            <Route path='ceo_greetings' element={undefined} />
            <Route path='awards' element={undefined} />
            <Route path='contacts' element={undefined} />
          </Route>
          <Route path='/mice' element={<Mice />} />
          <Route path='/signtseeing_tour' element={<SightseeingTours />}>
            <Route path='classic_tour' element={undefined} />
            <Route path='theme_tour' element={undefined} />
            <Route path='one_day_tour' element={undefined} />
          </Route>
          <Route path='/medical_tour' element={<MedicalTours/>} />
          <Route path='/useful_information' element={<UsefulInformation />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
