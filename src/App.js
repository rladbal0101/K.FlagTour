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
import ClassicTour from './pages/sightseeingTours/ClassicTour';
import ThemeTour from './pages/sightseeingTours/ThemeTour';
import OneDayTour from './pages/sightseeingTours/OneDayTour';
import SeoulTourLight from './pages/sightseeingTours/classicTour/SeoulTourLight';
import SeoulTourWithPlentyOfExcursions from './pages/sightseeingTours/classicTour/SeoulTourWithPlentyOfExcursions';
import TwoCapitalsSeoulBusan from './pages/sightseeingTours/classicTour/TwoCapitalsSeoulBusan';
import ThreeCapitalsOfKoreaSeoulBusanGyeongju from './pages/sightseeingTours/classicTour/ThreeCapitalsOfKoreaSeoulBusanGyeongju';
import SeoulJejuIsland from './pages/sightseeingTours/classicTour/SeoulJejuIsland';
import TourAroundKorea from './pages/sightseeingTours/classicTour/TourAroundKorea';
import ChristmasHolidaysInKorea from './pages/sightseeingTours/themeTour/ChristmasHolidaysInKorea';
import FlowerFestivalsInKorea from './pages/sightseeingTours/themeTour/FlowerFestivalsInKorea';
import FallFoliageInKorea from './pages/sightseeingTours/themeTour/FallFoliageInKorea';
import CherryBlossomSeasonInKorea from './pages/sightseeingTours/themeTour/CherryBlossomSeasonInKorea';
import KPopTour from './pages/sightseeingTours/themeTour/KPopTour';
import KBeautyTour from './pages/sightseeingTours/themeTour/KBeautyTour';
import SpaTourSeoulBusan from './pages/sightseeingTours/themeTour/SpaTourSeoulBusan';
import SeoulTourHealthCheckUp from './pages/sightseeingTours/themeTour/SeoulTourHealthCheckUp';
import HistoricalSeoul from './pages/sightseeingTours/oneDayTour/HistoricalSeoul';
import ModernSeoul from './pages/sightseeingTours/oneDayTour/ModernSeoul';
import HistoricalSeoulOnPT from './pages/sightseeingTours/oneDayTour/HistoricalSeoulOnPT';
import HistoryAndFolkloreOfKorea from './pages/sightseeingTours/oneDayTour/HistoryAndFolkloreOfKorea';
import TourToDemilitarizedZone from './pages/sightseeingTours/oneDayTour/TourToDemilitarizedZone';
import ScenicBeautyOfKorea from './pages/sightseeingTours/oneDayTour/ScenicBeautyOfKorea';
import AdventuresAtThemeParkEverland from './pages/sightseeingTours/oneDayTour/AdventuresAtThemeParkEverland';
import OneDayInBusanTempleAndDowntown from './pages/sightseeingTours/oneDayTour/OneDayInBusanTempleAndDowntown';
import IslandsOfBusan from './pages/sightseeingTours/oneDayTour/IslandsOfBusan';
import GyeongjuCityTour from './pages/sightseeingTours/oneDayTour/GyeongjuCityTour';

// const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const GlobalStyled = createGlobalStyle`
  ${reset}

  body {
    font-family: 'SUIT-Regular';
    line-height: 1.4; /* 행간 설정 */
    letter-spacing : 0.5px; /* 자간 설정 */
    color: #333;
    box-sizing: border-box;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .inner {
    margin: 0 150px;
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
          <Route path='/sightseeing_tour/' element={<SightseeingTours />}>
            <Route index element={<ClassicTour />} />
            <Route path='classic_tour' element={<ClassicTour />} />
            <Route path='theme_tour' element={<ThemeTour />} />
            <Route path='one_day_tour' element={<OneDayTour />} />
          </Route>
          <Route path='/medical_tour' element={<MedicalTours/>} />
          {/* <Route path='/useful_information' element={<UsefulInformation />} /> */}

          {/* classic tour page */}
          <Route path='seoul_tour_light' element={<SeoulTourLight />} />
          <Route path='seoul_tour_with_plenty_of_excursions' element={<SeoulTourWithPlentyOfExcursions />} />
          <Route path='two_capitals_Seoul-Busan' element={<TwoCapitalsSeoulBusan />} />
          <Route path='three_capitals_of_korea_Seoul-Busan-Gyeongju' element={<ThreeCapitalsOfKoreaSeoulBusanGyeongju />} />
          <Route path='seoul-jeju_island' element={<SeoulJejuIsland />} />
          <Route path='tour_around-korea' element={<TourAroundKorea />} />

          {/* theme tour page */}
          <Route path='christmas_holidays_in_korea_december_january' element={<ChristmasHolidaysInKorea />} />
          <Route path='flower_festivals_in_korea_april-may' element={<FlowerFestivalsInKorea />} />
          <Route path='fall_foliage_in_korea' element={<FallFoliageInKorea />} />
          <Route path='cherry_blossom_season_in_korea' element={<CherryBlossomSeasonInKorea />} />
          <Route path='k-pop_tour' element={<KPopTour />} />
          <Route path='k-beauty_tour' element={<KBeautyTour />} />
          <Route path='spa_tour_Seoul-Busan' element={<SpaTourSeoulBusan />} />
          <Route path='seoul_tour-health_check_up' element={<SeoulTourHealthCheckUp />} />

          {/* one day tour page */}
          <Route path='historical_seoul' element={<HistoricalSeoul />} />
          <Route path='modern_seoul' element={<ModernSeoul />} />
          <Route path='historical_seoul_on_public_transportation' element={<HistoricalSeoulOnPT />} />
          <Route path='history_and_folklore_of_korea' element={<HistoryAndFolkloreOfKorea />} />
          <Route path='tour_to_demilitarized_zone' element={<TourToDemilitarizedZone />} />
          <Route path='scenic_beauty_of_korea' element={<ScenicBeautyOfKorea />} />
          <Route path='adventures_at_theme_park_everland' element={<AdventuresAtThemeParkEverland />} />
          <Route path='one_day_in_busan:_temple_and_downtown' element={<OneDayInBusanTempleAndDowntown />} />
          <Route path='islands_of_busan' element={<IslandsOfBusan />} />
          <Route path='gyeongju_city_tour' element={<GyeongjuCityTour />} />



        </Route>
      </Routes>
    </>
  );
}

export default App;
