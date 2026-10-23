import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomeScreen from "./screens/HomeScreen"
import ProjectsScreen from "./screens/ProjectsScreen"
import PricingScreen from "./screens/PricingScreen"
import ContactScreen from "./screens/ContactScreen"
import AboutScreen from "./screens/AboutScreen"
import NotFound from "./screens/NotFound"
import ViewPlanScreen from './screens/ViewPlanScreen'
import VerifierScreen from "./screens/VerifierScreen"

import { PrivacyPolicy, TermsAndConditions } from "./screens/LegalScreen"
import { HowToAskGoodQuestions, HowtoQuriesForBusiness } from "./screens/Resources"

import TitleUpdater from "./utils/title_updater"

const App = () => {
  return (
    <BrowserRouter>
      <TitleUpdater />
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/projects' element={<ProjectsScreen/>}/>
        <Route path='/pricing' element={<PricingScreen/>}/>
        <Route path='/contact' element={<ContactScreen/>}/>
        <Route path='/about' element={<AboutScreen/>}/>
        <Route path='/pricing/:plan' element={<ViewPlanScreen />}/>
        <Route path='/subscribers/resolve' element={<VerifierScreen />}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
        <Route path='/terms-and-conditions' element={<TermsAndConditions />}/>
        <Route path='/how-to-ask-questions-better' element={<HowToAskGoodQuestions />}/>
        <Route path='/how-to-query-for-bussiness' element={<HowtoQuriesForBusiness />}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App