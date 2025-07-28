import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import Header from './Header';
import Footer from './Footer';

function AnalysisPage() {
  const [timePeriod, setTimePeriod] = useState('Weekly');
  const chartRefs = useRef({});
  const charts = useRef({});

  useEffect(() => {
    try {
      // Income vs Expenses Chart
      if (chartRefs.current.incomeExpenses) {
        charts.current.incomeExpenses = new Chart(chartRefs.current.incomeExpenses, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Income',
                data: [5000, 5200, 5000, 5500, 5300, 5400],
                borderColor: '#3B82F6',
                borderWidth: 2,
                fill: false
              },
              {
                label: 'Expenses',
                data: [3200, 3800, 3100, 4200, 3600, 3400],
                borderColor: '#000000',
                borderWidth: 2,
                fill: false
              },
              {
                label: 'Savings',
                data: [1800, 1400, 1900, 1300, 1700, 2000],
                borderColor: '#3B82F6',
                borderDash: [5, 5],
                borderWidth: 2,
                fill: false
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom'
              }
            }
          }
        });
      }

      // Expense Categories Chart
      if (chartRefs.current.expenseCategories) {
        charts.current.expenseCategories = new Chart(chartRefs.current.expenseCategories, {
          type: 'pie',
          data: {
            labels: ['Food & Dining', 'Transportation', 'Shopping', 'Bills & Utilities', 'Entertainment', 'Healthcare', 'Others'],
            datasets: [{
              data: [1200, 800, 600, 900, 400, 300, 200],
              backgroundColor: ['#3B82F6', '#000000', '#3B82F6', '#000000', '#3B82F6', '#000000', '#3B82F6']
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right'
              }
            }
          }
        });
      }

      // Budget Progress Chart
      if (chartRefs.current.budgetProgress) {
        charts.current.budgetProgress = new Chart(chartRefs.current.budgetProgress, {
          type: 'bar',
          data: {
            labels: ['Food', 'Transport', 'Shopping', 'Bills', 'Entertainment'],
            datasets: [{
              label: 'Spent',
              data: [1200, 800, 600, 900, 400],
              backgroundColor: ['#3B82F6', '#3B82F6', '#000000', '#3B82F6', '#3B82F6']
            }, {
              label: 'Budget',
              data: [1500, 1000, 500, 1000, 600],
              backgroundColor: '#E5E7EB'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top'
              }
            }
          }
        });
      }

      // Weekly Spending Chart
      if (chartRefs.current.weeklySpending) {
        charts.current.weeklySpending = new Chart(chartRefs.current.weeklySpending, {
          type: 'bar',
          data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
              label: 'Spending',
              data: [850, 920, 780, 890],
              backgroundColor: '#3B82F6'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              }
            }
          }
        });
      }

    } catch (error) {
      console.error('Error initializing charts:', error);
    }

    return () => {
      // Cleanup charts
      Object.values(charts.current).forEach(chart => {
        if (chart) {
          chart.destroy();
        }
      });
    };
  }, [timePeriod]); // Re-run when time period changes

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">SpendLens Analytics</h1>
                <p className="text-gray-600">Your financial insights at a glance</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-black rounded-lg px-4 py-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <select
                    className="bg-transparent text-white border-none outline-none cursor-pointer"
                    value={timePeriod}
                    onChange={handleTimePeriodChange}
                  >
                    <option value="Weekly" className="text-black">Weekly</option>
                    <option value="Monthly" className="text-black">Monthly</option>
                    <option value="Yearly" className="text-black">Yearly</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="rounded-xl p-6 text-white" style={{ backgroundColor: '#3B82F6' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium">Total Savings</p>
                    <p className="text-2xl font-bold">₹10,200</p>
                    <p className="text-blue-100 text-xs mt-1">↗ +12% from last month</p>
                  </div>
                </div>
              </div>

              <div className="bg-black rounded-xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Monthly Expenses</p>
                    <p className="text-2xl font-bold">₹3,400</p>
                    <p className="text-gray-300 text-xs mt-1">↓ -5% from last month</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-black rounded-xl p-6 text-black">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Monthly Income</p>
                    <p className="text-2xl font-bold">₹5,400</p>
                    <p className="text-gray-600 text-xs mt-1">→ Same as last month</p>
                  </div>
                </div>
              </div>

              <div className="bg-black rounded-xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Savings Rate</p>
                    <p className="text-2xl font-bold">37%</p>
                    <p className="text-gray-300 text-xs mt-1">↗ +3% from last month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Charts & Progress Visuals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Income vs Expenses Trend</h3>
              <div className="h-80">
                <canvas ref={el => chartRefs.current.incomeExpenses = el}></canvas>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expense Categories</h3>
              <div className="h-80">
                <canvas ref={el => chartRefs.current.expenseCategories = el}></canvas>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Budget Progress</h3>
              <div className="h-80">
                <canvas ref={el => chartRefs.current.budgetProgress = el}></canvas>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Weekly Spending</h3>
              <div className="h-80">
                <canvas ref={el => chartRefs.current.weeklySpending = el}></canvas>
              </div>
            </div>
          </div>

          {/* Savings Goal */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Annual Savings Goal</h3>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Progress towards ₹24,000 goal</span>
              <span className="text-black font-semibold">42.5%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div className="h-4 rounded-full" style={{ width: '42.5%', backgroundColor: '#3B82F6' }}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>₹0</span>
              <span className="text-black font-semibold">₹10,200</span>
              <span>₹24,000</span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default AnalysisPage;