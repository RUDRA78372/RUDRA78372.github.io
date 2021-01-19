//software
const softwareInfo = {
    softwares: [
        {
            title: 'ZREC',
            link: 'softwares/zrec.html',
            des: 'ZREC is a zlib (p)recompressor',
            lang: 'Pascal|Closed Source',
            plat: 'Windows (64bit)'
        },
        {
            title: 'PassMan',
            link: 'softwares/passman.html',
            des: 'PassMan is a password manager for everyday use',
            lang: 'Pascal',
            plat: 'Android/Windows (32bit)'
        },
        {
            title: 'Image2PDF',
            link: 'softwares/image2pdf.html',
            des: 'Converts a bunch of images to a single pdf file.',
            lang: 'Pascal',
            plat: 'Windows'
        },
         {
            title: 'The Chromium Protector',
            link: 'https://github.com/RUDRA78372/Closed-Source-Programs/tree/main/The-Chromium-Protector',
            des: 'A Password Protector for your browsers',
            lang: 'Pascal|Closed Source',
            plat: 'Windows (64bit)'
        },
        {  title: 'Image2PDF Android',
            link: 'softwares/image2pdfa.html',
            des: 'Converts a bunch of images to a single pdf file.',
            lang: 'Pascal',
            plat: 'Android'
        },
        {
            title: 'Netlock',
            link: 'https://github.com/RUDRA78372/Netlock',
            des: 'A simple program to block websites for your device',
            lang: 'Pascal',
            plat: 'Windows (64bit) / Windows (32bit)'
        },
        {
            title: 'Desktop-Locker',
            link: 'https://github.com/RUDRA78372/Desktop-Locker',
            des: 'A regular desktop locker that requires password to unlock. The application captures a photo using webcam if user fails to write the correct password.',
            lang: 'Pascal',
            plat: 'Windows (64bit) / Windows (32bit)'
        }
    ]
}

let html = '';
softwareInfo.softwares.forEach(e=>{
    const softContent = document.querySelector('.soft-content')
    const softHtml = `
        <div class="soft">
            <h3><a href="${e.link}" target="_blank">${e.title}</a></h3>
            <p>${e.des}</p>
            <span>${e.lang}</span><span class="right">${e.plat}</span>
        </div>
    `
    html += softHtml
    softContent.innerHTML = html
});
