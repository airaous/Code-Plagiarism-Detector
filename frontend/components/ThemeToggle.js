import { motion } from 'framer-motion'

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.button
      onClick={toggleDarkMode}
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-secondary-300 dark:bg-secondary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-secondary-800"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle dark mode"
    >
      <motion.span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform ${
          darkMode ? 'translate-x-6' : 'translate-x-1'
        }`}
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      />
      <span className="sr-only">Toggle dark mode</span>
      
      {/* Sun icon */}
      <motion.svg
        className={`absolute left-1 h-3 w-3 text-yellow-500 transition-opacity ${
          darkMode ? 'opacity-0' : 'opacity-100'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        initial={false}
        animate={{ opacity: darkMode ? 0 : 1 }}
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clipRule="evenodd"
        />
      </motion.svg>
      
      {/* Moon icon */}
      <motion.svg
        className={`absolute right-1 h-3 w-3 text-blue-300 transition-opacity ${
          darkMode ? 'opacity-100' : 'opacity-0'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        initial={false}
        animate={{ opacity: darkMode ? 1 : 0 }}
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </motion.svg>
    </motion.button>
  )
}

export default ThemeToggle
