'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

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
  } = useForm<FormData>();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* お名前のフィールドを削除 */}

      <div>
        <label htmlFor="email">メールアドレス（任意）</label>
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

      <div>
        <label htmlFor="message">ご意見・ご要望</label>
        <textarea
          id="message"
          rows={4}
          {...register('message', { required: 'ご意見・ご要望を入力してください' })}
        ></textarea>
        {errors.message && <p>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? '送信中...' : '送信する'}
      </button>
    </form>
  );
}