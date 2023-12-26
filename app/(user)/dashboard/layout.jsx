import Dashboard from "@components/Dashboard";
import ServiceProvider from "@components/Provider";
import "../../globals.css";

export const metadata = {
  title: "Yönetici paneli",
};

export default function RootLayout({ props, children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <ServiceProvider>
          <Dashboard>{children}</Dashboard>
        </ServiceProvider>
      </body>
    </html>
  );
}
