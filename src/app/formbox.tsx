'use client';

import { useEffect } from 'react';
import styles from './formbox.module.scss';

export default function FormBox() {
  useEffect(() => {
    // コンポーネントがマウント（レンダリング）された後にこのコードが実行される
    const form = document.getElementById('survey-form');
    const workerUrl = 'https://form-workers.wing.osaka';

    if (!form) {
      return;
    }

    const handleSubmit = async (event) => {
      event.preventDefault(); // デフォルトのフォーム送信を停止

      // フォームからデータを取得
      const formData = new FormData(form);
      const data = {
        host: "wing.osaka",
        username: formData.get('username') || undefined,
        email: formData.get('email') || undefined,
        rate: parseInt(formData.get('rate'), 10),
        comment: formData.get('comment') || undefined,
      };

      try {
        // fetch APIでWorkerにPOSTリクエストを送信
        const response = await fetch(workerUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
          alert('アンケートの送信に成功しました！');
          form.reset(); // フォームをリセット
        } else {
          alert('エラー：' + result.error);
        }

      } catch (error) {
        console.error('通信エラー：', error);
        alert('通信中にエラーが発生しました。');
      }
    };

    form.addEventListener('submit', handleSubmit);

    // クリーンアップ関数
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };

  }, []); // 依存配列を空にすることで、コンポーネントのマウント時のみ実行される

  return(
    <div className={styles.formBox}>
      <h4>アンケート</h4>
      <form id="survey-form">
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

        <button type="submit">送信</button>
      </form>
    </div>
  )
}