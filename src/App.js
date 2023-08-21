import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Main from './pages/Main';

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
          <Route path='/about_us' element={undefined}>
            <Route path='company_introduction' element={undefined} />
            <Route path='ceo_greetings' element={undefined} />
            <Route path='awards' element={undefined} />
            <Route path='contacts' element={undefined} />
          </Route>
          <Route path='/mice' element={undefined} />
          <Route path='/signtseeing_tour' element={undefined}>
            <Route path='classic_tour' element={undefined} />
            <Route path='theme_tour' element={undefined} />
            <Route path='one_day_tour' element={undefined} />
          </Route>
          <Route path='/medical_tour' element={undefined} />
          <Route path='/useful_information' element={undefined} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
