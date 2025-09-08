import { createContext, PropsWithChildren, useContext } from "react";

type HeaderState = {
  hideHeader: boolean;
  setHideHeader: (value: boolean) => void;
};

const HeaderContext = createContext<HeaderState>({
  hideHeader: false,
  setHideHeader: () => {},
});

export function useHeader() {
  const value = useContext(HeaderContext);

  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useHeader must be used within an HeaderProvider");
    }
  }

  return value;
}

export const HeaderProvider = ({
  hideHeader,
  setHideHeader,
  children,
}: PropsWithChildren<HeaderState>) => {
  return (
    <HeaderContext.Provider
      value={{
        hideHeader,
        setHideHeader,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
