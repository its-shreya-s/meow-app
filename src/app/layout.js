import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './fontawesome';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}