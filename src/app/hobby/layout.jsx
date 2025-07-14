export const metadata = {
  title: "趣味 | Wingのサイト",
  description: "Wingとか言う人の趣味を紹介しています！",
  icons: [
    { rel: 'icon', url: '/wingLogo.png' },
    { rel: 'apple-touch-icon', url: '/wingLogo.png', sizes: '1600x1600' },
  ],
};

export default function HobbyLayout({ children }) {
    return (
      <>
        <h2>My Hobby</h2>
        <div className='children'>
          {children}
        </div>
      </>
    );
}