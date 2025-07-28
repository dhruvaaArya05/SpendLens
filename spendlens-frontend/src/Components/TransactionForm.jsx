import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function TransactionForm() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    type: '',
    description: ''
  });
  const [naturalInput, setNaturalInput] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const parseNaturalInput = () => {
    const text = naturalInput.trim();
    if (!text) return;

    const amount = text.match(/₹?(\d+(?:\.\d{2})?)/);
    const isIncome = /received|earned|got|salary|income/i.test(text);
    const isExpense = /spent|paid|bought|cost/i.test(text);

    let newFormData = { ...formData };

    if (amount) {
      newFormData.amount = amount[1];
    }

    if (isIncome) {
      newFormData.type = 'income';
    } else if (isExpense) {
      newFormData.type = 'expense';
    }

    // Category detection
    if (/grocery|groceries|market/i.test(text)) {
      newFormData.category = 'groceries';
    } else if (/restaurant|dinner|lunch|food|ate/i.test(text)) {
      newFormData.category = 'food-dining';
    } else if (/shopping|bought|purchase/i.test(text)) {
      newFormData.category = 'shopping';
    } else if (/salary|income/i.test(text)) {
      newFormData.category = 'income';
    }

    newFormData.description = text;
    setFormData(newFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add your API call here to save the transaction
      setShowModal(true);
    } catch (error) {
      console.error('Error submitting transaction:', error);
    }
  };

  const handleAddAnother = () => {
    setShowModal(false);
    setFormData({
      amount: '',
      category: '',
      date: new Date().toISOString().split('T')[0],
      type: '',
      description: ''
    });
    setNaturalInput('');
  };

  return (
    <>
      <Header></Header>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        {/* Back Button */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span >Back to Dashboard</span>
          </button>
        </div>

        {/* Main Content */}
        <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 mt-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Add Transaction</h1>

            {/* Natural Language Input */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Natural Language Entry</h2>
              <div className="relative">
                <textarea
                  value={naturalInput}
                  onChange={(e) => setNaturalInput(e.target.value)}
                  placeholder="Spent ₹200 on groceries"
                  className="w-full px-4 py-4 pr-20 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
                <button
                  onClick={parseNaturalInput}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg"
                >
                  AI Add
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Amount */}
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
                    ₹
                  </span>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="0.00"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="w-full pl-8 pr-4 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                    step="0.01"
                    required
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="food-dining">Food & Dining</option>
                  <option value="groceries">Groceries</option>
                  <option value="shopping">Shopping</option>
                  <option value="transportation">Transportation</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="bills">Bills & Utilities</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="income">Income</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Date and Type Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                    required
                  />
                </div>

                {/* Type */}
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                  </select>
                </div>
              </div>

              {/* Description (Optional) */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description (Optional)
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Transaction description..."
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 text-lg"
              >
                Add Transaction
              </button>
            </form>
          </div>
        </main>

        {/* Success Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md mx-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Transaction Added!</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Your transaction has been successfully recorded.
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={handleAddAnother}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
                  >
                    Add Another
                  </button>
                  <button
                    onClick={() => navigate(-1)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-2 px-4 rounded-lg"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
}

export default TransactionForm;