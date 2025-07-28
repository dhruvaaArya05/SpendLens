import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import Dashboard from './Components/Dashboard';
import FinanceForm from './Components/FinanceForm';
import AnalysisPage from './Components/AnalysisPage';
import TransactionForm from './Components/TransactionForm';

function App() {
  return (
    <div>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/finance-form" element={<FinanceForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path='/transactions' element={<TransactionForm />} />
      </Routes>
    </div>
  );
}

export default App;