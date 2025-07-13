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
        <div className={styles.homeWidget}>
          <div className={styles.widgetContent}>
            <div className={styles.spacer}></div>
            <h3 className={styles.widgetTitle}>Wingが撮影した写真</h3>
            <p>Wingは，写真を撮ることが趣味．とはいっても，自分が写真に映ることはあんまり好きやないね．</p>
            <div className={styles.spacer}></div>
            <Link href='/hobby/photo'>See more..:.</Link>
          </div>
        </div>
      </section>
    </>
  );
}
