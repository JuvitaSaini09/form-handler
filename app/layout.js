import "./globals.css";

export const metadata = {
  title: "Form Builder",
  description: "This can be used to build forms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
