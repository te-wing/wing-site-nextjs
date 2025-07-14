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
      <h3>写真・カメラ</h3>
      <p>※アニメーションの読み込みがめっちゃ遅いです．我慢してください．</p>
      <section className={styles.sliderContainer}>
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
      </section>
      <p>こんな感じでいろいろ写真を撮って楽しんでます．<a href='https://r.wing.osaka/s/blog' target='_blank'>ブログ</a>のほうにもちょくちょく上げてるんで，見てください！</p>
      <h4>写真はやっぱり構図が大事!?</h4>
      <p>
        自分は写真を撮るときは，ある程度ちゃんとしたミラーレスカメラ（<a href='https://r.wing.osaka/camera/α6000' target='_blank'>Sony α-6000</a>）を使ったり，iPhoneで撮ったりしてます．<br />
        こんな話をすると，「iPhoneで撮ってんの!?」みたいな声が今にも聞こえてきそうですけど，意外と性能は良いんですよねぇ（今は<a href='https://r.wing.osaka/camera/se3' target='_blank'>iPhone SEの第三世代</a>）．ただ，スマホで手軽に高品質な写真が撮れるようになったからこそ，写真は構図が大事になってきていると思うんですよねぇ〜．<br />
        とはいっても，別に構図の専門家ではないので，あんまり知りませんけどね．<br />
        ただ，画像の中央からちょっとずれたあたりに，線とか，色と色の境界線があったりとかすると，見た目よくなると思ってます（めっちゃテキトーやん）．
      </p>
    </>
  );
}