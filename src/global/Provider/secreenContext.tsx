import React, { createContext, useContext, useEffect, useState } from 'react';

interface IResponsiveContext {
  widthScreen: number | boolean;
}

export const ResponsiveContext = createContext<IResponsiveContext>({ widthScreen: false });

export const ResponsiveProvider = ({ children }: { children: React.ReactNode }) => {
  const [widthScreen, setWidthScreen] = useState<number | boolean>(() => {
    const storedWidth = typeof window !== 'undefined' && window.localStorage.getItem('responsiveWidth');
    return storedWidth ? parseInt(storedWidth) : (typeof window !== 'undefined' && window.innerWidth);
  });

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(typeof window !== 'undefined' && window.innerWidth);
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    typeof window !== 'undefined' && window.localStorage.setItem('responsiveWidth', widthScreen.toString());
  }, [widthScreen]);

  console.log(widthScreen, "widthScreen")

  return (
    <ResponsiveContext.Provider value={{ widthScreen }}>
      {children}
    </ResponsiveContext.Provider>
  );
}

export const useResponsive = () => useContext(ResponsiveContext);
