import React, { useRef, useState } from 'react';
import './Searchbar.css';

type SearchbarProps = {
  onSearchKeyChange(searchKey: string): void;
};

export const Searchbar = ({ onSearchKeyChange }: SearchbarProps) => {
  const [searchKey, setSearchKey] = useState<string>('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setSearchKey(value);
  };

  const handleClearSerachInput = () => {
    setSearchKey('');
    onSearchKeyChange('');
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleSearch = () => {
    onSearchKeyChange(searchKey);
  };

  return (
    <>
      <div className="searchbar">
        <input
          data-testid="locationInput"
          ref={searchInputRef}
          type={'text'}
          value={searchKey}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="actionContainer">
        <button
          data-testid="searchButton"
          className="actionButton"
          onClick={handleSearch}>
          Search
        </button>
        <button
          data-testid="clearButton"
          className="actionButton"
          onClick={handleClearSerachInput}>
          Clear
        </button>
      </div>
    </>
  );
};
