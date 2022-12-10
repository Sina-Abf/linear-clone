import Container from "../components/container";
import Header from "../components/header";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div>
          <Header />
          <main>{children}</main>
          <footer>
            <Container>Footer Here</Container>
          </footer>
        </div>
      </body>
    </html>
  );
}
