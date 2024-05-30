import React, { ReactNode } from "react";

interface RootLayoutType {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutType) => {
  return <main>{children}</main>;
};

export default RootLayout;
