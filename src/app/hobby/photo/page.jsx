import styles from './slideonly.module.scss';

export const metadata = {
  title: '写真 - My Hobby | Wingのサイト',
  description: '写真，プログラミング，音楽など，Wnigとかいう人の趣味を紹介してます！',
};

export default function PhotoHobbyPage() {
  const slidesToRight = Array.from({ length: 10 }, (_, i) => `/phtslide/toRight/slide${i + 11}.webp`);
  const slidesToLeft = Array.from({length: 10}, (_, i) => `/phtslide/toLeft/slide${i + 11}.webp`);

  return (
    <>
      <p>※読み込みがめっちゃ遅いです．我慢してください．すみません．</p>
      <div className={styles.sliderContainer}>
        {/* 1列目 */}
        <div className={styles.sliderTrack}>
          {slidesToRight.map((src, idx) => (
            <div className={styles.slide} key={idx}>
              <img src={src} alt={`Slide ${idx + 11}`} />
            </div>
          ))}
          {slidesToRight.map((src, idx) => (
            <div className={styles.slide} key={`duplicate-${idx}`}>
              <img src={src} alt={`Slide duplicate ${idx + 11}`} />
            </div>
          ))}
        </div>
        <div className={styles.sliderTrackReverse}>
          {slidesToLeft.map((src, idx) => (
            <div className={styles.slide} key={`reverse-${idx}`}>
              <img src={src} alt={`Reverse Slide ${idx + 11}`} />
            </div>
          ))}
          {slidesToLeft.map((src, idx) => (
            <div className={styles.slide} key={`reverse-duplicate-${idx}`}>
              <img src={src} alt={`Reverse Slide duplicate ${idx + 11}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}