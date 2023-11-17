import { useState, useRef } from 'react';

import { useKeyTrap, useOnClickOutside } from 'hooks';

const useDropdown = (handleSelect: (value: string) => void) => {
  const dropdownRef = useRef(null);
  const optionsRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClickOption = (option: string) => () => {
    handleSelect(option);
    handleClose();
  };

  const handleOpener = () => {
    isOpen ? handleClose() : handleOpen();
  };

  useOnClickOutside(dropdownRef, handleClose);
  useKeyTrap(optionsRef, handleClose);

  return {
    dropdownRef,
    optionsRef,
    isOpen,
    handleOpener,
    handleClickOption,
  };
};

export default useDropdown;
