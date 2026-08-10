'use client';
import '../styles/globals.css';
import { LangProvider } from '../lib/i18n';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <head>
        <title>UniSwap â çå­¦çäºæä¿¡æ¯å¹³å°</title>
        <meta name="description" content="ä¸ä¸ºçå­¦çæé çæ ¡å­äºæä¿¡æ¯äº¤æ¢å¹³å°" />
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
