import { AppProvider, Page } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import { Routes, Route, Router } from 'react-router-dom';
import './App.css';
import SettingForm from './SettingForm';
import FullscreenBarExample from './FullscreenBar';
import Navbar from './navbar';
import FetchApi from './featchApi';

function App() {
  return (
    <AppProvider>
      <Page title="Setting">

       
          {/* <Routes>
            <Route path="/" element={<FullscreenBarExample />} />
            <Route path="/SettingForm" element={<SettingForm />} />
            <Route path="/Navbar" element={<Navbar />} />


        </Routes> */}
    <FullscreenBarExample />
    <SettingForm /> 
     {/* <Navbar /> */}
      {/* <FetchApi /> */}
      </Page>
    </AppProvider>

  );
}

export default App;


