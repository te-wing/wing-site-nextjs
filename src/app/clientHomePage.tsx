'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss';
import Link from 'next/link';

export default function ClientHomePage() {
  const waveRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const progRef = useRef<HTMLDivElement>(null);

  const [waveVisible, setWaveVisible] = useState(false);
  const [photoVisible, setPhotoVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);
  const [progVisible, setProgVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.target === waveRef.current && entry.isIntersecting) {
            setWaveVisible(true);
            observer.unobserve(entry.target);
          }
          if (entry.target === photoRef.current && entry.isIntersecting) {
            setPhotoVisible(true);
            observer.unobserve(entry.target);
          }
          if (entry.target === blogRef.current && entry.isIntersecting) {
            setBlogVisible(true);
            observer.unobserve(entry.target);
          }
          if (entry.target === progRef.current && entry.isIntersecting) {
            setProgVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (waveRef.current) observer.observe(waveRef.current);
    if (photoRef.current) observer.observe(photoRef.current);
    if (blogRef.current) observer.observe(blogRef.current);
    if (progRef.current) observer.observe(progRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <h2>Home</h2>
      <section className={styles.center}>
        {/* blogWidget: 左から */}
        <div
          ref={waveRef}
          className={`${styles.widget} ${styles.waveWidget} ${styles.slideInLeft} ${
            blogVisible ? styles.isVisible : ''
          }`}
        >
          <div className={styles.widgetContentRight}>
            <div className={styles.spacer}></div>
            <h3 className={styles.widgetTitle}>Wave App by Wing</h3>
            <p>Wingがお届けする，初めての本格的なアプリは，なんと，波の模型です！</p>
            <div className={styles.spacer}></div>
            <a href='https://wave.app.wing.osaka' target='_blank'>See more..:.</a>
            <div className={styles.spacer}></div>
          </div>
        </div>

        {/* photoWidget: 右から */}
        <div
          ref={photoRef}
          className={`${styles.widget} ${styles.photoWidget} ${styles.slideInRight} ${
            photoVisible ? styles.isVisible : ''
          }`}
        >
          <div className={styles.widgetContent}>
            <div className={styles.spacer}></div>
            <h3 className={styles.widgetTitle}>Wingが撮影した写真</h3>
            <p>Wingは，写真を撮ることが趣味．とはいっても，自分が写真に映ることはあんまり好きやないね．</p>
            <div className={styles.spacer}></div>
            <Link href='/hobby/photo'>See more..:.</Link>
            <div className={styles.spacer}></div>
          </div>
        </div>

        {/* blogWidget: 左から */}
        <div
          ref={blogRef}
          className={`${styles.widget} ${styles.blogWidget} ${styles.slideInLeft} ${
            blogVisible ? styles.isVisible : ''
          }`}
        >
          <div className={styles.widgetContentRight}>
            <div className={styles.spacer}></div>
            <h3 className={styles.widgetTitle}>Wingのブログ！</h3>
            <p>Wingがブログを開始！とりあえずジャンル関係なく色々書いてます．まだまだ模索中っていう感じなんで，ご意見とかあったらぜひ，連絡くださいね．</p>
            <div className={styles.spacer}></div>
            <a href='https://r.wing.osaka/s/blog' target='_blank'>See more..:.</a>
            <div className={styles.spacer}></div>
          </div>
        </div>

        {/* progWidget: 右から */}
        <div
          ref={progRef}
          className={`${styles.widget} ${styles.progWidget} ${styles.slideInRight} ${
            progVisible ? styles.isVisible : ''
          }`}
        >
          <div className={styles.widgetContent}>
            <div className={styles.spacer}></div>
            <h3 className={styles.widgetTitle}>じつはプログラミングしてます．</h3>
            <p>Wingはプログラミングしてて，Swiftっていう言語をいじったりしてます．最近はウェブ開発に興味があるんで，こういうサイトを自分でコーディングして作ったりしてます．</p>
            <div className={styles.spacer}></div>
            <Link href='/hobby/program'>See more..:.</Link>
            <div className={styles.spacer}></div>
          </div>
        </div>
      </section>
    </>
  );
}