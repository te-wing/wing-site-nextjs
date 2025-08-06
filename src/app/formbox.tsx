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
      <div className="p-6 bg-green-100 border border-green-400 rounded">
        <p className="text-lg font-bold text-green-700">アンケートの送信が完了しました！</p>
        <p className="text-sm text-green-700">ご協力ありがとうございました。</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* お名前のフィールドを削除 */}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス（任意）</label>
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">ご意見・ご要望</label>
        <textarea
          id="message"
          rows={4}
          {...register('message', { required: 'ご意見・ご要望を入力してください' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        ></textarea>
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? '送信中...' : '送信する'}
      </button>
    </form>
  );
}