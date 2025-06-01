'use client';
import './header.scss';
import Button from '../buttons/button';
import { FaPaperPlane } from "@react-icons/all-files/fa/FaPaperPlane";
import React, { useCallback, useEffect, useState } from "react";

// Utility to get system theme
const getSystemTheme = (): 'dark' | 'light' => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

type Theme = 'dark' | 'light';

export const ThemeToggleButton: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as Theme | null;
      return saved ?? getSystemTheme();
    }
    return 'light';
  });

  // Sync theme to <body> and localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (theme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
      } else {
        document.body.removeAttribute('data-theme');
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // Toggle theme handler
  const handleToggle = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <Button onClick={handleToggle}>
      +
    </Button>
  );
};

interface TestButtonProps {}

const TestButton: React.FC<TestButtonProps> = () => {
  return (
    <Button
      iconLeft={<FaPaperPlane />}
      onClick={() => alert("test")}
      className="button-default"
    >
      ورود | ثبت نام
    </Button>
  );
};

export { TestButton };