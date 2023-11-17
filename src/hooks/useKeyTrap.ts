import React, { useCallback, useEffect } from 'react';

const useKeyTrap = (
  ref: React.RefObject<HTMLDialogElement> | null,
  handleClose: () => void,
) => {
  const handleKeyTrap = useCallback((e: KeyboardEvent) => {
    if (!ref || !ref?.current) return;

    const focusableNodeList = ref.current.querySelectorAll(
      '[href], [tabIndex], button, input:not([disabled]), textarea, select',
    );

    const firstFocusableNode = focusableNodeList[0] as HTMLElement;
    const lastFocusableNode = focusableNodeList[
      focusableNodeList.length - 1
    ] as HTMLElement;
    const isFirstFocusableNode = Object.is(e.target, firstFocusableNode);
    const isLastFocusableNode = Object.is(e.target, lastFocusableNode);

    if (e.shiftKey && ref.current !== e.target) {
      lastFocusableNode.focus();
    }

    if (e.shiftKey && isFirstFocusableNode) {
      e.preventDefault();
      lastFocusableNode.focus();
    }

    if (!e.shiftKey && isLastFocusableNode) {
      e.preventDefault();
      firstFocusableNode.focus();
    }
  }, []);

  useEffect(() => {
    if (!ref?.current) return;
    ref.current.focus();

    const keyListenerMap = new Map([
      ['Escape', handleClose],
      ['Tab', handleKeyTrap],
    ]);

    const handleKeyListener = (e: KeyboardEvent) => {
      const listener = keyListenerMap.get(e.key);
      typeof listener === 'function' && listener(e);
    };

    window.addEventListener('keydown', handleKeyListener);

    return () => {
      window.removeEventListener('keydown', handleKeyListener);
    };
  }, [handleClose]);
};

export default useKeyTrap;
