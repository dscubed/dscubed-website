'use client';
import ScrollToTop from 'react-scroll-to-top';
import { ArrowUpIcon } from '@heroicons/react/24/solid'

export default function ScrollUpButton() {
  return (
    <ScrollToTop
      smooth
      component={<ArrowUpIcon />}
      style={{
        backgroundColor: '#2a4dd0',
        borderRadius: '30%',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
        width: '60px', // Adjusted width
        height: '60px', // Adjusted height
      }}
    />
  );
}