'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

import styles from './formbox.module.scss';

// 修正後のFormDataの型を定義
type FormData = {
  email?: string;
  message: string;
};

export default function Formbox() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch, // watchを追加
  } = useForm<FormData>();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // messageフィールドの値を監視
  const messageValue = watch('message');
  
  // messageValueが空かどうかでボタンのスタイルを制御する
  const buttonClassName = messageValue ? styles.submitButtonActive : styles.submitButtonInactive;

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        alert('送信に失敗しました。もう一度お試しください。');
      }
    } catch (error) {
      console.error('エラー:', error);
      alert('送信中にエラーが発生しました。');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div>
        <p>アンケートの送信が完了しました！</p>
        <p>ご協力ありがとうございました。</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formBox}>
      {/* お名前のフィールドを削除 */}
      <h3>アンケート</h3>
      <div className={styles.formSec}>
        <label className={styles.formguide} htmlFor="email">メールアドレス（任意）</label>
        <input
          id="email"
          type="email"
          {...register('email', { 
            // requiredを削除
            pattern: {
              value: /^\S+@\S+$/i,
              message: '無効なメールアドレスです'
            }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className={styles.formSec}>
        <label className={styles.formguide} htmlFor="message">ご意見・ご要望（個人情報は含めないでください．）</label>
        <textarea
          id="message"
          rows={4}
          {...register('message', { required: 'ご意見・ご要望を入力してください' })}
        ></textarea>
        {errors.message && <p>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !messageValue} // messageValueが空の時はボタンを無効化
        className={buttonClassName} // CSSクラスを動的に適用
      >
        {isSubmitting ? '送信中...' : '送信する'}
      </button>
    </form>
  );
}