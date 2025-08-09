'use client';

import { useEffect } from 'react';
import styles from './formbox.module.scss';
import Script from 'next/script';

export default function FormBox() {
  useEffect(() => {
    const form = document.getElementById('survey-form');
    const workerUrl = 'https://form-workers.wing.osaka';

    if (!form || !(form instanceof HTMLFormElement)) {
      console.error('フォーム要素が見つからないか，正しい形式ではありません．');
      return;
    }

    const handleSubmit = async (event: Event) => {
      event.preventDefault();

      const formData = new FormData(form as HTMLFormElement);

      // フォームに存在しない'host'の値を手動でFormDataに追加
      formData.append('host', 'wing.osaka');

      // Turnstileのトークンが存在するかをチェック
      const token = formData.get('cf-turnstile-response');
      if (!token) {
        alert('Turnstileできてへんで〜．');
        return;
      }
      try {
        // FormDataをそのままWorkerに送信
        const response = await fetch(workerUrl, {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();

        if (response.ok) {
          alert('おおきに，たぶんアンケートの送信ができました．');
          form.reset();
        } else {
          alert('エラー：' + result.error);
        }

      } catch (error) {
        console.error('通信エラー：', error);
        alert('通信中にエラーが発生しましたと思います．');
      }
    };

    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };

  }, []);

  return (
    <div className={styles.formBox}>
      {/* Turnstileスクリプトの読み込み */}
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />

      <h4 className={styles.h4}>アンケート</h4>
      <form className={styles.form} id="survey-form">
        <label htmlFor="username">ニックネーム（任意）：</label>
        <input type="text" id="username" name="username" /><br /><br />
        <label htmlFor="email">メールアドレス（任意）：</label>
        <input type="email" id="email" name="email" /><br /><br />
        <label htmlFor="rate">サイト評価（必須）：</label>
        <select id="rate" name="rate" required>
          <option value="">選択してください</option>
          <option value="5">5 - とても良い</option>
          <option value="4">4 - 良い</option>
          <option value="3">3 - 普通</option>
          <option value="2">2 - 悪い</option>
          <option value="1">1 - とても悪い</option>
        </select>
        <br /><br />
        <label htmlFor="comment">ご意見・ご感想（任意）：</label>
        <textarea id="comment" name="comment"></textarea><br/><br/>

        {/* Turnstileウィジェットの追加 */}
        <div
          className="cf-turnstile"
          data-sitekey='0x4AAAAAABpyNGg6V96WphRE'
        ></div>
        <br /><br />

        <button className="zenMaru" type="submit">送信</button>
      </form>
    </div>
  );
}