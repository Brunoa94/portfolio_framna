import { useCallback, useState } from "react";

export default function useOpen() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const closeOnFullscreen = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  }, []);

  return {
    open,
    close,
    isOpen,
    closeOnFullscreen,
  };
}
