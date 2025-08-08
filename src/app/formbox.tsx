'use client';

import { useEffect } from 'react';
import styles from './formbox.module.scss';

export default function FormBox() {
  useEffect(() => {
    const form = document.getElementById('survey-form');
    const workerUrl = 'https://form-workers.wing.osaka';

    // 型ガードによるチェック
    if (!form || !(form instanceof HTMLFormElement)) {
      console.error('フォーム要素が見つからないか，正しい形式ではありません．');
      return;
    }

    const handleSubmit = async (event) => {
      event.preventDefault();

      // FormDataのコンストラクタに渡す前に型アサーションを行う
      const formData = new FormData(form as HTMLFormElement);

      const rateValue = formData.get('rate');
      const data = {
        host: "wing.osaka",
        username: formData.get('username') || undefined,
        email: formData.get('email') || undefined,
        // rateが有効な数値であるかをチェックし、そうでない場合はundefinedにする
        rate: rateValue ? parseInt(rateValue.toString(), 10) : undefined,
        comment: formData.get('comment') || undefined,
      };
      
      // ...（以下は元のコードと同じ）
      try {
        const response = await fetch(workerUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
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
        <button className="zenMaru" type="submit">送信</button>
      </form>
    </div>
  );
}