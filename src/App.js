import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import SightseeingTours from './pages/SightseeingTours';
import MedicalTours from './pages/MedicalTours';
import UsefulInformation from './pages/UsefulInformation';
import CompanyIntroduction from './pages/aboutUs/CompanyIntroduction';
import CeoGreetings from './pages/aboutUs/CeoGreetings';
import Award from './pages/aboutUs/Award';
import Contacts from './pages/aboutUs/Contacts';

// const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const GlobalStyled = createGlobalStyle`
  ${reset}

  body {
    font-family: 'SUIT-Regular';
    font-weight: 600;
    line-height: 1.4; /* 행간 설정 */
    letter-spacing : 0.5px; /* 자간 설정 */
    color: #333;
    box-sizing: border-box;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    
  }

  @media screen and (max-width: 375px) {

  }
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/about_us/' element={<AboutUs />}>
            <Route index element={<CompanyIntroduction />} />
            <Route path='company_introduction' element={<CompanyIntroduction />} />
            <Route path='ceo_greetings' element={<CeoGreetings />} />
            <Route path='awards' element={<Award />} />
            <Route path='contacts' element={<Contacts />} />
          </Route>
          <Route path='/sightseeing_tour' element={<SightseeingTours />}>
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
