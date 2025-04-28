// src/components/ThemeToggle.js
import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: ${(props) => props.theme.inputBackground};
  border: 1px solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.text};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${(props) => props.theme.border};
  }
`;

const ThemeToggle = ({ toggleTheme, currentTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      {currentTheme === 'dark' ? '☀️' : '🌙'}
    </ToggleButton>
  );
};

export default ThemeToggle;
