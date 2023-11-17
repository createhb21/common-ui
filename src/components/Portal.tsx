import React from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
  selector?: string;
  mounted?: boolean;
}

const Portal: React.FC<Props> = ({ children, selector = '', mounted }) => {
  if (mounted) {
    const portal = document.querySelector(selector);

    return portal ? createPortal(children, portal) : null;
  } else {
    const portal = selector && document.querySelector(selector);

    return <>{portal ? createPortal(children, portal) : children}</>;
  }
};

export default Portal;
