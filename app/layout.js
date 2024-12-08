import { FormProvider } from "./context/FormContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Form Builder",
  description: "This can be used to build forms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
