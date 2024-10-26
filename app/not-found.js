'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center text-center gap-10 min-h-[90vh] p-4'>
      <motion.div 
        className="grid gap-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className='font-inter font-medium text-4xl sm:text-6xl md:text-8xl'
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          404 Not Found
        </motion.h1>
        <motion.p 
          className='font-poppins text-sm sm:text-base'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Your visited page not found. You may go home page.
        </motion.p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Button 
          asChild
          className='bg-bgsecondary hover:bg-hover text-white font-poppins font-medium p-4 rounded w-full sm:w-auto'
        >
          <Link href="/">Back to home page</Link>
        </Button>
      </motion.div>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M16 16s-1.5-2-4-2-4 2-4 2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
        <motion.line
          x1="9"
          x2="9.01"
          y1="9"
          y2="9"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        />
        <motion.line
          x1="15"
          x2="15.01"
          y1="9"
          y2="9"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        />
      </motion.svg>
    </div>
  )
}