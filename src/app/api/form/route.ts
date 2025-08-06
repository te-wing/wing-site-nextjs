// app/api/form/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // フォームから送られてきたJSONデータをパースする
    const formData = await request.json();

    // 送信するメールのペイロードを作成する
    const emailPayload = {
      personalizations: [{ 
        to: [{ email: 'receive@forms.wing.osaka' }] // 送信先のメールアドレス
      }],
      from: { email: 'submit@forms.wing.osaka' }, // 自分のドメインのメールアドレス
      subject: '新しいアンケートの回答が届きました',
      content: [{
        type: 'text/plain',
        value: `
          新しい回答が届きました．
          メールアドレス: ${formData.email || '未入力'}
          ご意見・ご要望:
          ${formData.message}
        `,
      }],
    };

    // MailChannelsのAPIにリクエストを送信
    const mailchannelsResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    // MailChannelsからの応答をチェック
    if (mailchannelsResponse.ok) {
      console.log('メール送信成功');
      return NextResponse.json({ message: 'メールを送信しました' }, { status: 200 });
    } else {
      const errorText = await mailchannelsResponse.text();
      console.error('MailChannelsでのエラー:', errorText);
      return NextResponse.json({ message: 'メール送信に失敗しました' }, { status: 500 });
    }
  } catch (error) {
    console.error('APIエラー:', error);
    return NextResponse.json({ message: '内部サーバーエラー' }, { status: 500 });
  }
}