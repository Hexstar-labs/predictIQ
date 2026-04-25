'use client';

import { ErrorBoundary } from '../components/ErrorBoundary';
import { useDarkMode } from '@/lib/hooks/useDarkMode';

export const metadata = { title: 'PredictIQ' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useDarkMode();

  return (
    <html lang="en" className={isDarkMode ? 'dark-mode' : ''}>
      <body>
        <ErrorBoundary section="main">
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
