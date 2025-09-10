import { createContext, PropsWithChildren, useContext } from "react";

type LayoutState = {
  hideHeader: boolean;
  setHideHeader: (value: boolean) => void;
  footerInFront: boolean;
  setFooterInFront: (value: boolean) => void;
};

const LayoutContext = createContext<LayoutState>({
  hideHeader: false,
  setHideHeader: () => {},
  footerInFront: false,
  setFooterInFront: () => {},
});

export function useLayout() {
  const value = useContext(LayoutContext);

  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useLayout must be used within an LayoutProvider");
    }
  }

  return value;
}

export const LayoutProvider = ({
  hideHeader,
  setHideHeader,
  footerInFront,
  setFooterInFront,
  children,
}: PropsWithChildren<LayoutState>) => {
  return (
    <LayoutContext.Provider
      value={{
        hideHeader,
        setHideHeader,
        footerInFront,
        setFooterInFront,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
