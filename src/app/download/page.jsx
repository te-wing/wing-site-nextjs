export const metadata = {
    title: 'Downloads | Wingのサイト',
    description: 'このサイトに掲載している一部コンテンツ（ロゴなど）がダウンロードできます．一部のコンテンツには，個別のダウンロードリンクが用意されている場合があります．いずれのコンテンツも，無許可での転載・改変はご遠慮ください．',
};

export default function DownloadPage() {
    return (
        <>
            <h2>Downloads</h2>
            <p className="text">下記リンクをクリックして，ダウンロード可能です．個別の記載があるものを除き，無許可での転載・改変は禁じます．転載・改変を希望される場合は，Contactsに記載の連絡先までご連絡ください．尚，正当な手続きを経て転載される場合も，出典を明記してご利用ください．</p>
            <a href="/wingLogo.png" download='wingLogo.png' target='_blank'>このサイトのロゴ（PNG）</a><br />
            <a href="/wingLogo.svg" download='wingLogo.svg' target='_blank'>このサイトのロゴ（SVG）</a><br />
            <a href="https://github.com/te-wing/wing-site-nextjs" target='_blank'>このサイトのソースコード（GitHub）</a>
        </>
    );
}