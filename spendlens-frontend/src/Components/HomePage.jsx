import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

  useEffect(() => {
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm fixed w-full top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-black dark:bg-white w-8 h-8 rounded-md flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-white dark:bg-black rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">SpendLens</span>
            </div>

            {/* Auth Buttons and Theme Toggle */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200"
              >
                {theme === 'dark' ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>

              <Link
                to="/login"
                className="text-gray-700 dark:text-gray-300 font-medium border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Take Control of Your
              <span className="text-[#3B82F6]">Finances</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              SpendLens helps you track expenses, manage budgets, and achieve your financial goals with intelligent insights
              and detailed visualizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate('/signup')}
                className="bg-[#3B82F6] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors pulse-animation"
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 px-6 sm:px-12 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Visualize Finances
              <br />
              <span className="text-blue-600">At a Glance</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              Your personalized dashboard shows a snapshot of your net worth, cash flow, and savings – helping you stay
              financially confident and in control.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-base space-y-2">
              <li>Real-time financial overview</li>
              <li>Track net worth, savings & cash flow</li>
              <li>Insightful trends & smart highlights</li>
              <li>Auto-updated metrics daily</li>
            </ul>
          </div>

          {/* Right Content: Dashboard Mock */}
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-2xl shadow-xl">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gray-900 dark:bg-gray-900 text-white p-4 flex justify-between items-center rounded-t-xl">
                <div className="flex items-center">
                  <div className="bg-white w-6 h-6 rounded mr-2 flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-sm"></div>
                  </div>
                  <span className="font-semibold">SpendLens</span>
                </div>
                <div className="flex space-x-4 text-sm">
                  <span className="text-white font-medium">Overview</span>
                  <span className="text-gray-400">Transactions</span>
                  <span className="text-gray-400">Budgets</span>
                  <span className="text-gray-400">Reports</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 bg-white dark:bg-gray-800">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Good morning, Emily</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Card 1 */}
                  <div className="bg-gray-900 dark:bg-gray-700 text-white p-4 rounded-xl flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Net Worth</p>
                      <p className="text-xl font-bold">₹12,345</p>
                      <p className="text-green-400 text-sm">+1.2%</p>
                    </div>
                    <div className="bg-green-500 p-3 rounded-full">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-gray-900 dark:bg-gray-700 text-white p-4 rounded-xl flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Cash Flow</p>
                      <p className="text-xl font-bold">₹5,678</p>
                      <p className="text-red-400 text-sm">-0.5%</p>
                    </div>
                    <div className="bg-blue-500 p-3 rounded-full">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-gray-900 dark:bg-gray-700 text-white p-4 rounded-xl flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Savings</p>
                      <p className="text-xl font-bold">₹2,345</p>
                      <p className="text-green-400 text-sm">+2.1%</p>
                    </div>
                    <div className="bg-purple-500 p-3 rounded-full">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Manage Your Money
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Powerful features designed to simplify your financial management and help you make smarter money decisions.
            </p>
          </div>

          {/* First Row of Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Expense & Income Tracker */}
            <div
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 feature-card transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-wallet text-green-600 dark:text-green-400 text-2xl icon-hover"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Expense & Income Tracker</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Add, edit, and delete daily transactions with smart categorization.Easily filter and search past entries by
                date or category,
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Categorize transactions automatically
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Set transaction limits per category
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Quick entry with smart suggestions
                </li>
              </ul>
            </div>

            {/* Visual Dashboard */}
            <div
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 feature-card transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-chart-pie text-blue-600 dark:text-blue-400 text-2xl icon-hover"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Visual Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Smart financial graphs and charts that make your financial data easy to understand at a glance.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Dynamic bar, pie, and line charts
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Monthly income vs expenses
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Category-wise spending breakdown
                </li>
              </ul>
            </div>

            {/* Budget Alerts & Goals */}
            <div
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 feature-card transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-yellow-600 dark:text-yellow-400 text-2xl icon-hover"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Budget Alerts & Goals</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Set budgets, get alerts when approaching limits, and track your savings goals effortlessly.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Monthly budget tracking
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Smart spending alerts
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Savings goal progress
                </li>
              </ul>
            </div>
          </div>

          {/* Second Row of Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Date-wise Transaction Logs */}
            <div
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 feature-card transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-calendar-alt text-purple-600 dark:text-purple-400 text-2xl icon-hover"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Date-wise Transaction Logs</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Filter and view your transactions by any date range with powerful search capabilities.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Flexible date range filtering
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Advanced search options
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Export transaction history
                </li>
              </ul>
            </div>

            {/* UPI Transaction Simulation */}
            <div
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 feature-card transition-colors duration-300"
            >
              <div className="bg-indigo-100 dark:bg-indigo-900 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                <i className="fas fa-comment-dots text-indigo-600 dark:text-indigo-400 text-xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">UPI Transaction Simulation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your financial data is protected with enterprise-grade security and encrypted storage.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Secure email & password login
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Data encryption
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Privacy-first approach
                </li>
              </ul>
            </div>

            {/* Smart Suggestions */}
            <div
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 feature-card transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-lightbulb text-pink-600 dark:text-pink-400 text-2xl icon-hover"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Personalized AI Insights</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get personalized cost-cutting tips and insights based on your spending patterns.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  AI-powered spending analysis
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Personalized saving tips
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Smart budget recommendations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NLP */}
      <section className="py-16 px-6 sm:px-12 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Add Transaction using
              <br />
              <span className="text-blue-600">Natural Language</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              Just type what you spent or received — our AI understands and logs it instantly.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-base space-y-2">
              <li>Type "Spent ₹200 on groceries" and it's logged</li>
              <li>Automatically categorized by our AI</li>
              <li>Faster than manual entry, smarter than tags</li>
              <li>Works in plain English</li>
            </ul>
          </div>

          {/* Right Content: NLP Input Mock */}
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-2xl shadow-xl">
            <div className="bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden p-6">
              <h3 className="text-white text-lg font-semibold mb-2">Add Transaction</h3>
              <p className="text-gray-400 mb-3">Natural Language Entry</p>
              <div className="bg-gray-800 dark:bg-gray-700 p-4 rounded-xl flex justify-between items-center mb-4">
                <span className="text-gray-400">Spent ₹200 on groceries</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">AI Add</button>
              </div>
              <p className="text-gray-500 italic text-sm">
                Describe your transaction naturally. Example:{' '}
                <span className="text-gray-400">"Paid ₹500 for dinner at restaurant"</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                <div className="w-5 h-5 bg-gray-900 dark:bg-white rounded-sm"></div>
              </div>
              <span className="text-2xl font-semibold">SpendLens</span>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 dark:border-gray-600 text-center text-gray-400">
            <p>&copy; 2025 SpendLens. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.05);
          }
        }

        .pulse-animation {
          animation: pulse 2s infinite;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
        }

        .icon-hover:hover {
          transform: scale(1.1);
          transition: transform 0.2s ease;
        }
      `}</style>
    </div>
  );
}

export default HomePage;