const aplayer = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    theme: '#1C1B21',
    loop: 'none',
    order: 'list',
    preload: 'auto',
    volume: 1,
    mutex: true,
    listFolded: false,
    listMaxHeight: 289,
    audio: [
        {
            name: '3LAU, Bright Lights — How You Love Me',
            artist: ' ',
            url: '/audio/3LAU, Bright Lights — How You Love Me.mp3',
            cover: 'none',
            theme: '#1C1B21',
        },
        {
            name: 'Bright Lights, Kaleena Zanders, Kandy — War For Love',
            artist: ' ',
            url: '/audio/Bright Lights, Kaleena Zanders, Kandy — War For Love.mp3',
            cover: 'none',
            theme: '#1C1B21'
        },
        {
            name: 'Pink Is Punk, Benny Benassi, Bright Lights — Ghost',
            artist: ' ',
            url: '/audio/Pink Is Punk, Benny Benassi, Bright Lights — Ghost.mp3',
            cover: 'none',
            theme: '#1C1B21',
        },
        {
            name: 'Hardwell, Dyro, Bright Lights — Never Say Goodbye',
            artist: ' ',
            url: '/audio/Hardwell, Dyro, Bright Lights — Never Say Goodbye.mp3',
            cover: 'none',
            theme: '#1C1B21'
        }
        ,
        {
            name: 'Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now',
            artist: ' ',
            url: '/audio/Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now.mp3',
            cover: 'none',
            theme: '#1C1B21',
        },
        {
            name: 'Zedd, Bright Lights — Follow You Down',
            artist: ' ',
            url: '/audio/Zedd, Bright Lights - Follow You Down.mp3',
            cover: 'none',
            theme: '#1C1B21'
        }
    ]
});
aplayer.on('play', function () {
    const musicImgWrapper = document.querySelector('.music__img-wrapper');
    musicImgWrapper.classList.add('music__img--active');
});

aplayer.on('pause', function () {
    const musicImgWrapper = document.querySelector('.music__img-wrapper');
    musicImgWrapper.classList.remove('music__img--active');
});