import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-lg font-medium ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'} transition-colors`}
        >
          {darkMode ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
      
      <div className="max-w-md w-full mx-auto">
        <div className={`p-8 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h1 className="text-3xl font-bold mb-6 text-center">
            Vite + React + Tailwind
          </h1>
          
          <div className="flex justify-center mb-8">
            <img src="/vite.svg" className="h-16 mr-4" alt="Vite logo" />
            <img src="/vite.svg" className="h-16" alt="React logo" />
          </div>
          
          <div className="flex flex-col items-center mb-8">
            <button
              onClick={() => setCount((count) => count + 1)}
              className={`px-6 py-3 rounded-lg font-medium mb-4 ${
                darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
              } text-white transition-colors`}
            >
              Count is {count}
            </button>
            <p className="text-sm opacity-70">
              Edit <code className="font-mono bg-opacity-20 bg-gray-500 px-1 rounded">src/App.jsx</code> and save to test HMR
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <h3 className="font-semibold mb-2">Responsive Design</h3>
              <p className="text-sm">This card uses Tailwind's responsive breakpoints</p>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <h3 className="font-semibold mb-2">Dark Mode</h3>
              <p className="text-sm">Toggle the theme with the button in the corner</p>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <h3 className="font-semibold mb-2">Utility-First</h3>
              <p className="text-sm">Tailwind provides low-level utility classes</p>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <h3 className="font-semibold mb-2">Customizable</h3>
              <p className="text-sm">Extend Tailwind in the config file</p>
            </div>
          </div>
          
          <p className="text-center text-sm opacity-70">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
      
      <footer className={`mt-12 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        Built with Vite, React, and Tailwind CSS
      </footer>
    </div>
  )
}

export default App