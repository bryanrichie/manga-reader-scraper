import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manga Reader Aggregator',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
