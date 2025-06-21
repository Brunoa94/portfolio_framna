import { RefObject, useEffect } from "react";

interface Props {
  handleClickOutside: () => void;
  ref: RefObject<HTMLDivElement | null>;
}

export default function useClickOutside({ handleClickOutside, ref }: Props) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      const target = e.target as HTMLElement;
      const clickOutside = !ref.current.contains(e.target as Node);
      const clickAnchor =
        ref.current.contains(target) && target.tagName === "A";

      if (clickOutside || clickAnchor) {
        handleClickOutside();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      handleClickOutside();
    };
  }, [handleClickOutside, ref]);
}
