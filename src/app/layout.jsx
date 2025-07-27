import "./globals.scss";
import Link from 'next/link';
import BackToTopButton from './BackToTopButton.jsx';
import WingLogo from './wingLogo';

export const metadata = {
  title: "Wingのサイト",
  description: "Wingのサイト．Next.jsで作りました．",
  icons: [
    { rel: 'icon', url: '/wingLogo.png' },
    { rel: 'apple-touch-icon', url: '/wingLogo.png', sizes: '1600x1600' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <header>
          <Link href='/'>
            <WingLogo />
          </Link>
          <h1>Wing&apos;s HomePage</h1>
          <nav>
            <Link className='headerLinkTo' href='/'>Home</Link> |
            <Link className='headerLinkTo' href='/about'>About Me</Link> |
            <Link className='headerLinkTo' href='/contact'>Contacts</Link>
          </nav>
        </header>
        <div className='children'>
          {children}
        </div>
        <BackToTopButton />
        <footer>
          <p>&copy; 2025 Wing. 無断転載・無断改変を禁じます．</p>
          <section>
            <div className="footerContainer">
              <p className='margin-0' >連絡先：</p>
              <a href="mailto:wing@me.wing.osaka">wing@me.wing.osaka</a>
            </div>
            <div className="footerContainer">
              <p className='margin-0' >ブログ：</p>
              <a href="https://diaries.wing.osaka" target="_blank">diaries.wing.osaka</a>
            </div>
            <div className="footerContainer">
              <p className='margin-0' >ダウンロード：</p>
              <Link href="/downloads">wing.osaka/downloads</Link>
            </div>
          </section>
        </footer>
      </body>
    </html>
  );
}
