'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      <motion.div
        className="relative"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          className="text-black"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <motion.circle
              cx="17"
              cy="18"
              r="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="7"
              cy="18"
              r="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            />
            <motion.path
              d="M5 17.972c-1.097-.054-1.78-.217-2.268-.704s-.65-1.171-.704-2.268M9 18h6m4-.028c1.097-.054 1.78-.217 2.268-.704C22 16.535 22 15.357 22 13v-2h-4.7c-.745 0-1.117 0-1.418-.098a2 2 0 0 1-1.284-1.284C14.5 9.317 14.5 8.945 14.5 8.2c0-1.117 0-1.675-.147-2.127a3 3 0 0 0-1.926-1.926C11.975 4 11.417 4 10.3 4H2m0 4h6m-6 3h4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            />
            <motion.path
              d="M14.5 6h1.821c1.456 0 2.183 0 2.775.354c.593.353.938.994 1.628 2.276L22 11"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
          </g>
        </svg>
      </motion.div>
      <motion.p
        className="mt-4 text-xl font-semibold text-black"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Page is loading...
      </motion.p>
    </div>
  )
}