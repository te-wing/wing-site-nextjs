import styles from './page.module.scss';

export const metadata = {
  title: '写真 - My Hobby | Wingのサイト',
  description: '写真，プログラミング，音楽など，Wnigとかいう人の趣味を紹介してます！',
};

export default function PhotoHobbyPage() {
  // スライド画像のパス
  const slidesToRight = Array.from({ length: 10 }, (_, i) => `/phtslide/toRight/slide${i + 11}.webp`);
  return (
    <>
      <p>申し訳ありません，準備中です...</p>
    </>
  );
}