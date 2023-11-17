import React, { useEffect } from 'react';

import { useDialog } from 'hooks';
import * as S from './CalendarBtn.styled';

interface DialogBtnProps {
  className?: string;
  children: React.ReactNode;
  handleOpen?: (state: boolean) => void;
  popup: (
    ref: React.RefObject<HTMLDialogElement>,
    isOpen: boolean,
    handleDialogClose: () => void,
  ) => void;
}

const DialogBtn = React.forwardRef(
  (
    { className, children, handleOpen, popup }: DialogBtnProps,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => {
    const { isDialogOpen, dialogRef, handleToggleDialog, handleDialogClose } =
      useDialog();

    useEffect(() => {
      typeof handleOpen === 'function' && handleOpen(isDialogOpen);
    }, [isDialogOpen]);

    return (
      <>
        <S.CalendarBtn
          ref={ref}
          className={className}
          onClick={handleToggleDialog}
        >
          {children}
        </S.CalendarBtn>
        {typeof popup === 'function' &&
          popup(dialogRef, isDialogOpen, handleDialogClose)}
      </>
    );
  },
);

DialogBtn.displayName = 'DialogBtn';

export default DialogBtn;
