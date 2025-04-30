'use client';
import ScrollToTop from 'react-scroll-to-top';
import { ArrowUpIcon } from '@heroicons/react/24/solid'

export default function ScrollUpButton() {
  return (
    <ScrollToTop
      smooth
      component={<ArrowUpIcon />}
      style={{
        backgroundColor: '#1e3a8a', // Dark blue background
        borderRadius: '50%',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
        width: '40px', // Adjusted width
        height: '40px', // Adjusted height
      }}
    />
  );
}