function Footer() {
  return (
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
  )
}

export default Footer;