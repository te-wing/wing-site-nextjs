import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // 環境変数からカスタムドメインを取得
  const customDomain = process.env.NEXT_PUBLIC_CUSTOM_DOMAIN;

  // リクエストのホスト名を取得
  const host = req.headers.get('host');

  // .pages.dev でのアクセスであり、かつカスタムドメインが設定されている場合
  if (host && customDomain && host.endsWith('.pages.dev')) {
    // カスタムドメインにパスとクエリパラメータを維持してリダイレクト
    const newUrl = new URL(req.nextUrl.pathname, `https://${customDomain}`);
    newUrl.search = req.nextUrl.search;

    // 301リダイレクト（恒久的な移動）を返す
    return NextResponse.redirect(newUrl, 301);
  }

  // それ以外のアクセスはそのまま通す
  return NextResponse.next();
}

// Middlewareを実行するパスを指定（すべてのパスで実行）
export const config = {
  matcher: '/:path*',
};
