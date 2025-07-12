import React from "react";

import "./globals.css";
import Footer from "./body/Footer";
import FloatingButtons from "./components/whatsapp";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
       
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
