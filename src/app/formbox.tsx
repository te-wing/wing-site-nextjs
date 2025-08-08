import styles from './formbox.module.scss';

export default function FormBox() {
  return(
    <div className={styles.formBox}>
      <h4>アンケート</h4>
      <form id="survey-form">
        <label for="username">ニックネーム（任意）：</label>
        <input type="text" id="username" name="username"><br /><br />

        <label for="email">メールアドレス（任意）：</label>
        <input type="email" id="email" name="email"><br /><br />

        <label for="rate">サイト評価（必須）：</label>
        <select id="rate" name="rate" required>
          <option value="">選択してください</option>
          <option value="5">5 - とても良い</option>
          <option value="4">4 - 良い</option>
          <option value="3">3 - 普通</option>
          <option value="2">2 - 悪い</option>
          <option value="1">1 - とても悪い</option>
        </select>
        <br /><br />

        <label for="comment">ご意見・ご感想（任意）：</label>
        <textarea id="comment" name="comment"></textarea><br/><br/>

        <button type="submit">送信</button>
      </form>
    </div>
  )
}