'use client';
import '../styles/globals.css';
import { LangProvider } from '../lib/i18n';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <head>
        <title>SwapU — 留学生二手信息平台</title>
        <meta name="description" content="专为留学生打造的校园二手信息交换平台" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <LangProvider>
          <Nav />
          <main className="min-h-screen pt-[68px]">
            {children}
          </main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
