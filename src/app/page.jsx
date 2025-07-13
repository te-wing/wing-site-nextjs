import styles from './page.module.scss';
import Link from 'next/link';

export const metadata = {
  title: 'Wingのサイト',
  description: 'Wingのサイト．地球在住．もしかしたら，大阪に住んでるかもしれません（知らんけど）．気になったら，ウェブサイト見てな．',
};

export default function HomePage() {
  return (
    <>
      <h2>Home</h2>
      <section>
        <div className={styles.photoWidget}>
          <div className={styles.widgetContent}>
            <div className={styles.spacer}></div>
            <h3 className={styles.widgetTitle}>Wingが撮影した写真</h3>
            <p>Wingは，写真を撮ることが趣味．とはいっても，自分が写真に映ることはあんまり好きやないね．</p>
            <div className={styles.spacer}></div>
            <Link href='/hobby/photo'>See more..:.</Link>
            <div className={styles.spacer}></div>
          </div>
        </div>
        <div className={styles.blogWidget}>
          <div className={styles.widgetContentRight}>
            <div className={styles.spacer}></div>
            <h3 className={styles.widgetTitle}>Wingのブログ！</h3>
            <p>Wingがブログを開始！とりあえずジャンル関係なく色々書いてます．まだまだ模索中っていう感じなんで，ご意見とかあったらぜひ，連絡くださいね．</p>
            <div className={styles.spacer}></div>
            <a href='https://r.wing.osaka/s/blog' target='_blank'>See more..:.</a>
            <div className={styles.spacer}></div>
          </div>
        </div>
      </section>
    </>
  );
}
