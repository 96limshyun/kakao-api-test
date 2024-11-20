import './App.css';
import Input from '@components/Common/Input';
import React, { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log(inputRef.current?.value);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Input
          ref={inputRef}
          placeholder="검색어 입력"
          leftIcon={<FaSearch />}
          width="400px"
          height="50px"
          border="3px"
          borderRadius="15px"
          onKeyDown={handleKeyDown}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
