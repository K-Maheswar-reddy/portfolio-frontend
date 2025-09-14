import './App.css';
import AboutMe from './components/AboutMe';
import CertificationDisplay from './components/Certification';
import ContactInfo from './components/Contact';
import EducationDisplay from './components/Education';
import ExperienceDisplay from './components/Experience';
import GetInTouch from './components/GetInTouch';
import NavBar from './components/NavBar';
import ProfileDisplay from './components/Profile';
import SkillsDisplay from './components/Skills';
import { DataProvider, useData } from './context/DataContext';
import { AiOutlineLoading } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';


function AppContent() {
  const { loading, error } = useData();

  // show loading for entire app
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-indigo-600">
        <AiOutlineLoading className="animate-spin mr-3 text-3xl" />
        Loading Portfolio Data...
      </div>
    )
  }

  // show error for entire app
  if (error) {
    return (
      <div className='flex justify-center items-center h-screen text-red-500 text-xl'>
        <BiErrorCircle className='mr-3 text-3xl'></BiErrorCircle>
        Error loading data. Please try again later.
      </div>
    );
  }

  // when data is ready, render all components
  return (
    <>
      <NavBar />
      <div id='profile'>
        <ProfileDisplay />
      </div>

      <div id='about'>
        <AboutMe />
      </div>

      <div id='experience'>
        <ExperienceDisplay />
      </div>

      <div id='skill'>
        <SkillsDisplay />
      </div>

      <EducationDisplay />

      <div id='certification'>
        <CertificationDisplay />
      </div>

      <div id='getintouch'>
        <GetInTouch />
      </div>

      <ContactInfo />
    </>
  )
}

function App() {
  return (
    <div className="App">
      <DataProvider>
        <AppContent></AppContent>
      </DataProvider>
    </div>
  );
}

export default App;
