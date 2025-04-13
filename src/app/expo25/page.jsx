import Image from 'next/image'

export const metadata = {
    title: '万博 | Wingのサイト',
    description: '大阪万博が嬉しくて，勝手に盛り上がってます！',
};

export default function ContactPage() {
    return (
        <>
            <h2 className='zenMaru'>万博応援中！</h2>
            <p className='center'>大阪万博が嬉しくて，勝手に盛り上がってます！</p>
            <div>
                <h3 className='center'>25年4月13日：開幕初日，覗いてきました！めっちゃ混んでたけど，思ってたよりは並ばんで済んだで．</h3>
                <p className='text'>今日は，曇りというか，雨みたいな天気やったんで，途中からめっちゃ寒くなってん．海沿いやからか，えらい風も強かったけど，よかったで．</p>
                <p className='text'>まずは，話題の大屋根リングはこんな感じ！</p>
                <Image 
                    src='/expophoto/IMG_2437.jpeg'
                    width={4032}
                    height={3024}
                    className='center'
                    style={{ width: '100%', height: 'auto' }}
                    alt='大屋根リングを下から見上げた写真'
                />
                <p className='text'>ちなみに屋根の上行ったらこんな感じ！</p>
                <Image
                    src='/expophoto/IMG_2454.jpeg'
                    width={4032}
                    height={3024}
                    className='center'
                    style={{ width: '100%', height: 'auto' }}
                    alt='大屋根リングの上から'
                />
                <p className='text'>パノラマもあるでぇ！</p>
                <Image
                    src='/expophoto/IMG_2459.jpeg'
                    width={16124}
                    height={3784}
                    className='center'
                    style={{ width: '100%', height: 'auto' }}
                    alt='大屋根リングからパノラマ！'
                />
                <p className='text'>パビリオンの予約とかは，一杯でできひんかったけど，予約なしで入れるとこに飛び込んできました．</p>
                <p className='text'>たとえば「ブルンジ共和国」っていう，アフリカの展示があったんですけど，そこのハチミツを使ったカフェがあって，これがまたうまかったの．商品開発とかは吹田かどっかのパン屋（？）がやってるらしく，コラボしたみたいな感じなんかな？</p>
                <Image
                    src='/expophoto/IMG_2439.jpeg'
                    width={4032}
                    height={3024}
                    className='center'
                    style={{ width: '100%', height: 'auto' }}
                    alt='おからパフェ？'
                />
                <p className='text'>また食べもんになってまうけど，なんか超巨大ホットドッグがあったんで，食べてきたで！（一瞬で腹いっぱいになった．）見つけたら食べて見てな！</p>
                <Image
                    src='/expophoto/IMG_2441.jpeg'
                    width={4032}
                    height={3024}
                    className='center'
                    style={{ width: '100%', height: 'auto' }}
                    alt='超巨大ホットドッグ'
                />
            </div>
        </>
    );
}