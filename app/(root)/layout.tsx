import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling app",
  icons: {
    icon: '/icons/logo.svg'
  }
};

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
