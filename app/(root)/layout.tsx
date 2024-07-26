import StreamVideoProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";

interface RootLayoutType {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutType) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
