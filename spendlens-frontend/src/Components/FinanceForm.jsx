import { useState } from 'react';
import { createFinanceProfile } from '../services/financeProfileService';
import { useNavigate } from 'react-router-dom';

function FinanceForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    income: '',
    rentExpense: '',
    emisExpense: '',
    subscriptionExpense: '',
    savings: '',
    categoryBudgets: {
      food: '',
      transport: '',
      shopping: '',
      education: '',
      entertainment: '',
      utilities: '',
      travel: '',
      others: ''
    }
  });

  const handleInputChange = (e, category = null) => {
    if (category) {
      setFormData(prev => ({
        ...prev,
        categoryBudgets: {
          ...prev.categoryBudgets,
          [category]: e.target.value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/dashboard');
    // try {
    //   const response = await createFinanceProfile(formData);
    //   if (response.status === 201) {
    //     alert('Finance profile created successfully!');
    //     navigate('/dashboard');
    //   } else {
    //     alert(response.error || 'Failed to create finance profile');
    //   }
    // } catch (error) {
    //   console.error('Form submission error:', error);
    //   alert('Error creating finance profile');
    // }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">🧾 Financial Onboarding</h2>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Step 1: Basic Financial Profile</h3>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Monthly Income (₹)</label>
                <input
                  type="number"
                  name="income"
                  value={formData.income}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-3 border rounded-xl border-gray-300 focus:ring focus:ring-blue-400 focus:outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Fixed Expenses</label>
                <input
                  type="number"
                  name="rentExpense"
                  value={formData.rentExpense}
                  onChange={handleInputChange}
                  placeholder="Rent"
                  className="w-full mb-2 p-3 border rounded-xl border-gray-300"
                  required
                />
                <input
                  type="number"
                  name="emisExpense"
                  value={formData.emisExpense}
                  onChange={handleInputChange}
                  placeholder="EMIs / Loans"
                  className="w-full mb-2 p-3 border rounded-xl border-gray-300"
                  required
                />
                <input
                  type="number"
                  name="subscriptionExpense"
                  value={formData.subscriptionExpense}
                  onChange={handleInputChange}
                  placeholder="Subscriptions"
                  className="w-full p-3 border rounded-xl border-gray-300"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Savings Goal</label>
                <input
                  type="number"
                  name="savings"
                  value={formData.savings}
                  onChange={handleInputChange}
                  placeholder="e.g., 5000"
                  className="w-full mt-1 p-3 border rounded-xl border-gray-300"
                  required
                />
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Step 2: Preferred Category Budget Limits</h3>
              <p className="text-sm text-gray-500 mb-4">Set your budget limit for each spending category</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.keys(formData.categoryBudgets).map((category) => (
                  <div key={category}>
                    <label className="block text-gray-700 font-medium capitalize">
                      {category} (₹)
                    </label>
                    <input
                      type="number"
                      value={formData.categoryBudgets[category]}
                      onChange={(e) => handleInputChange(e, category)}
                      className="w-full mt-1 p-3 border rounded-xl border-gray-300"
                      required
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-400 transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
                >
                  Finish
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default FinanceForm;