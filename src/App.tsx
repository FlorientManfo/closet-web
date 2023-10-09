import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConfirmEmail from './email_validation/EmailConfirmationView';

function App() {
  return (
    <div className="bg-tertiary flex h-screen min-h-full flex-col justify-center overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path='/confirm-email' element={<ConfirmEmail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App