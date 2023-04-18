import moment from 'moment-timezone'
import fs from 'fs'
import fetch from 'node-fetch'
  import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)

    //time
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    let { exp, limit, level, role } = db.data.users[m.sender]
    
   
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

/*conn.send3ButtonLoc(m.chat, bcbg, anu, footer, buttons1, idbuttons1, buttons2, idbuttons2, buttons3, idbuttons3, m)*/
    //----------------- FAKE

    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  
    const pp = await conn
			.profilePictureUrl(m.sender, "image")
			.catch((_) => "./src/avatar_contact.png");    //------------------< MENU >----------------
    
    //------------------ SIMPLE
    /*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
        externalAdReply: {
            title: `${htjava} ${namebot}`,
            body: titlebot,
            description: titlebot,
            mediaType: 2,
          thumbnail: await(await fetch(thumb2)).buffer(),
         mediaUrl: sig
        }
     }
    })*/
    //------------------ DOCUMENT

    
    //kata
    let kata = `${pickRandom('Bᴀɴʏᴀᴋ ʙᴀɴʏᴀᴋ ᴍɪɴᴜᴍ..','I ʟᴏᴠᴇ ʏᴏᴜ','Jᴀɴɢᴀɴ ᴛɪɴɢɢᴀʟɪɴ ᴀᴋᴜ','Aᴋᴜ sʏᴀɴɢ ᴋᴀᴜ ᴛᴀᴘɪ..','Nɢᴇʀᴏᴋᴏᴋ ɢᴀᴋ?','Uᴅᴀʜ ᴅᴏɴᴀsɪ ʙᴇʟᴜᴍ?','Mᴀᴜ sᴇᴡᴀʜ ɢᴀᴋ ɴɪʜ','Oᴜʜʜ ɢɪᴛᴜᴜ,Cᴜᴋᴜᴘ ᴛᴀᴜ','Dᴀʀɪ ᴍᴀɴᴀ ᴀsᴀʟ ᴍᴜ?','Jᴀɴɢᴀɴ ʟᴜᴘᴀ ᴍᴀɴᴅɪ ʏᴀ','Hᴜᴜᴜᴜ....','Uᴅᴀʜ ᴍᴀᴋᴀɴ?','Gᴀᴋ ᴍᴀᴋᴀɴ sᴀᴋɪᴛ ɴᴛᴀʀ','Mᴀɴᴅɪ sᴀɴᴀ ᴡᴏᴇ','Jᴀᴍ ʙᴇʀᴀᴘᴀ sᴋᴀʀᴀɴɢ?','Hᴀʟᴏᴏᴡ')}${readMore}`
/*conn.sendButton(m.chat, `*${ucapan()}, ${name} 👋*`, text.trim(), await genProfile(conn, m), [['Speedtest', _p + 'ping'], ['Owner', _p + 'owner']], false, { quoted: fkon, contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://facebook.com/sadtime098",
    mediaType: "VIDEO",
    description: "https://facebook.com/sadtime098",
    title: `${pickRandom('Halo Apa Kabar?')}`,
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
}
} })*/
let nowaa = '0'
let nogww = '6287826940361'
let nogwww = `@${nomorown1.split`@`[0]}`
let nowa = `${nowaa.split`@`[0]}@s.whatsapp.net`
let nogw = `${nogww.split`@`[0]}@s.whatsapp.net`
let but1 = ('Rules') 
let id1 = '.rules'
let but2 = ('List Menu') 
let id2 = '.tesm'
let but3 = ('Sewabot') 
let id3 = '.sewa'
let konten = (`*${ucapan()}, ${tag} 👋*`)
let knnt = `*Halo* ${name} (⁠づ⁠｡⁠◕⁠‿⁠‿⁠◕⁠｡⁠)⁠づ ` 
let ᴛᴇs = `*Coin Kamu* : ${limit} 🪙\n*NOTE* : _Setiap command yg bertanda "©" jika digunakan akan memakan coin kamu, mainkan game dan dapatkan banyak coin_\n_ketik .cekcoin untuk melihat coin yg kamu dapatkan_\n\n▼ᴋʟɪᴋ ᴅɪʙᴀᴡᴀʜ ʏᴀ▼
${readMore}
┏┅┄┄⟞⟦ *GAMES* ⟧⟝┄┄┉┓
┣❐ .asahotak
┣❐ .caklontong  
┣❐ .family100  
┣❐ .siapakahaku  
┣❐ .suit
┣❐ .suitpvp
┣❐ .suit2
┣❐ .susunkata  
┣❐ .tebakkata
┣❐ .tekateki
┣❐ .tebakanime  
┣❐ .tebakchara  
┣❐ .tebakgambar
┣❐ .tebakgame
┣❐ .tebakbendera
┣❐ .tebaklirik  
┣❐ .tebaklogo  
┣❐ .tebaksurah  
┣❐ .tebakkata  
┣❐ .tictactoe
┣❐ .ttt
┗━━━━┫⌗

┏┅┄┄⟞⟦ *AI* ⟧⟝┄┄┉┓
┣❐ .aianime  ©
┣❐ .animedif  ©
┣❐ .cartoon Ⓟ
┣❐ .aidraw  ©
┣❐ .stabledif Ⓟ
┣❐ .aidraw Ⓟ
┣❐ .arcane Ⓟ
┣❐ .art Ⓟ
┣❐ .comics Ⓟ
┣❐ .disney Ⓟ
┣❐ .jojo Ⓟ
┣❐ .jadianime ©
┣❐ .renaissance Ⓟ
┣❐ .yasuo Ⓟ
┣❐ .remini ©
┣❐ .retouch Ⓟ
┣❐ .enhancer Ⓟ
┣❐ .hdr Ⓟ
┣❐ .colorize Ⓟ
┗━━━━┫⌗

┏┅┄┄⟞⟦ *MENFESS* ⟧⟝┄┄┉┓
┣❐ .menfess  ©
┣❐ .confess  ©
┗━━━━┫⌗

┏┅┄┄⟞⟦ *STICKER* ⟧⟝┄┄┉┓
┣❐ .babyyuli  ©
┣❐ .cjgta  ©
┣❐ .florcofcows  ©
┣❐ .mengemot  ©
┣❐ .nyoters  ©
┣❐ .oranglidi  ©
┣❐ .patrick  ©
┣❐ .pinguin  ©
┣❐ .pocoyo  ©
┣❐ .randomsticker  ©
┣❐ .upinipin  ©
┣❐ .attp  ©
┣❐ .attp2
┣❐ .attp3
┣❐ .attp4
┣❐ .attp5
┣❐ .bonk  ©
┣❐ .cry  ©
┣❐ .getexif  ©
┣❐ .hoppai Ⓟ
┣❐ .hoppai Ⓟ
┣❐ .hug Ⓟ
┣❐ .kiss Ⓟ
┣❐ .patrick  ©
┣❐ .stickerhentai Ⓟ
┣❐ .shentai Ⓟ
┣❐ .spongebob  ©
┣❐ .sticker (tag image/gif/video)  ©
┣❐ .sticker <url>  ©
┣❐ .stikerline  ©
┣❐ .toimg  ©
┣❐ .toimg2 (reply)
┣❐ .tovideo  ©
┣❐ .ttp  ©
┣❐ .wm Ⓟ
┣❐ .stickerwm Ⓟ
┣❐ .swm Ⓟ
┣❐ .colong Ⓟ
┗━━━━┫⌗

┏┅┄┄⟞⟦ *QUOTES* ⟧⟝┄┄┉┓
┣❐ .bacot  ©
┣❐ .bucin  ©
┣❐ .dare  ©
┣❐ .galau  ©
┣❐ .gombal  ©
┣❐ .hacker  ©
┣❐ .q-islam  ©
┣❐ .quotes  ©
┣❐ .katabijak  ©
┣❐ .motivasi  ©
┣❐ .pantun  ©
┣❐ .senja  ©
┣❐ .truth  ©
┣❐ .videoquotes  ©
┣❐ .videogalau  ©
┗━━━━┫⌗

┏┅┄┄⟞⟦ *ANIME* ⟧⟝┄┄┉┓
┣❐ .turnmeanime Ⓟ
┣❐ .drawme Ⓟ
┣❐ .jadianime2 Ⓟ
┣❐ .fanart  ©
┣❐ .husbu  ©
┣❐ .animeinfo  ©
┣❐ .jadianime Ⓟ ©
┣❐ .animelink  ©
┣❐ .loli  ©
┣❐ .raiden  ©
┣❐ .random  ©
┣❐ .pic
┣❐ .cosplay  ©
┣❐ .gensin
┣❐ .pixiv Ⓟ
┗━━━━┫⌗

┏┅┄┄⟞⟦ *GROUP* ⟧⟝┄┄┉┓
┣❐ .add
┣❐ .demote
┣❐ .enable
┣❐ .disable
┣❐ .cekexpired
┣❐ .hidetag
┣❐ .infogrup
┣❐ .kick
┣❐ .linkgroup
┣❐ .promote
┣❐ .setbye
┣❐ .setdesc
┣❐ .sdesc
┣❐ .setnamegc
┣❐ .setppgc
┣❐ .group
┣❐ .setwelcome
┣❐ .tagadmin
┣❐ .tagall
┣❐ .tagme
┣❐ .odemote
┗━━━━┫⌗

┏┅┄┄⟞⟦ *VOTING* ⟧⟝┄┄┉┓
┣❐ .cekvote
┣❐ .hapusvote
┣❐ .mulaivote [alasan]  ©
┣❐ .vote
┗━━━━┫⌗

┏┅┄┄⟞⟦ *ANONYMOUS CHAT* ⟧⟝┄┄┉┓
┣❐ .start
┣❐ .leave
┣❐ .next
┣❐ .sendkontak
┗━━━━┫⌗

┏┅┄┄⟞⟦ *INTERNET* ⟧⟝┄┄┉┓
┣❐ .mangainfo
┣❐ .covid
┣❐ .cuaca
┣❐ .gempa
┣❐ .play  ©
┣❐ .ceritahoror
┣❐ .cerpen
┣❐ .tebakumur  ©
┣❐ .darkjoke  ©
┣❐ .meme  ©
┣❐ .pinterest2  ©
┣❐ .pixiv Ⓟ
┣❐ .ppcp  ©
┣❐ .randommeme
┣❐ .wallpaper2  ©
┣❐ .wp2  ©
┣❐ .fetch
┣❐ .get
┣❐ .githubsearch
┣❐ .google
┣❐ .googlef
┣❐ .kbbi
┣❐ .lirik
┣❐ .playstore
┣❐ .ppcp2  ©
┣❐ .ssweb  ©
┣❐ .sspc  ©
┣❐ .sshp  ©
┣❐ .sstablet  ©
┣❐ .cektogel
┣❐ .wikipedia
┣❐ .ytcomment  ©
┣❐ .ytkomen  ©
┣❐ .katanime  ©
┣❐ .renungan  ©
┣❐ .apkinfo  ©
┣❐ .short  ©
┗━━━━┫⌗

┏┅┄┄⟞⟦ *DOWNLOADER* ⟧⟝┄┄┉┓
┣❐ .nhentaidl Ⓟ
┣❐ .nhentaidownload Ⓟ
┣❐ .apkdl Ⓟ ©
┣❐ .danbooru Ⓟ
┣❐ .facebookreel Ⓟ
┣❐ .fbreel Ⓟ
┣❐ .gdrive Ⓟ
┣❐ .gitclone  ©
┣❐ .igdl
┣❐ .instagram
┣❐ .mediafire Ⓟ
┣❐ .nekopoidl Ⓟ
┣❐ .nekopoidownload Ⓟ
┣❐ .nekodl Ⓟ
┣❐ .pinterest  ©
┣❐ .sfile Ⓟ
┣❐ .soundcloud
┣❐ .spotify Ⓟ
┣❐ .tiktok
┣❐ .ttdl
┣❐ .tiktokmp3
┣❐ .tiktokaudio
┣❐ .twitter Ⓟ
┣❐ .xnxx Ⓟ
┣❐ .xnxxdl Ⓟ
┣❐ .play  ©
┣❐ .ytmp4
┣❐ .ytv (LIMIT 24 MB) Ⓟ ©
┣❐ .ytmp3 Ⓟ
┣❐ .yta Ⓟ
┣❐ .zippyshare  ©
┣❐ .wallpaper2  ©
┣❐ .wp2  ©
┣❐ .githubsearch
┣❐ .spotsearch  ©
┣❐ .ytsearch2
┗━━━━┫⌗

┏┅┄┄⟞⟦ *TOOLS* ⟧⟝┄┄┉┓
┣❐ .ping
┣❐ .speed
┣❐ .apksearch
┣❐ .brainly  ©
┣❐ .yts
┣❐ .nulis2  ©
┣❐ .wastalk  ©
┣❐ .smeme  ©
┣❐ .smeme2  ©
┣❐ .blur
┣❐ .calc  ©
┣❐ .chord  ©
┣❐ .emojimix  ©
┣❐ .halah  ©
┣❐ .hilih  ©
┣❐ .huluh  ©
┣❐ .heleh  ©
┣❐ .holoh  ©
┣❐ .jadwaltv  ©
┣❐ .removebg  ©
┣❐ .qrcode  ©
┣❐ .react  ©
┣❐ .readmore  ©
┣❐ .spoiler  ©
┣❐ .readviewonce  ©
┣❐ .spamwa Ⓟ ©
┣❐ .style  ©
┣❐ .toaksara  ©
┣❐ .upload  ©
┣❐ .tourl  ©
┣❐ .tts  ©
┣❐ .webcek  ©
┣❐ .whatanime  ©
┣❐ .whatmusic  ©
┣❐ .tourl2
┗━━━━┫⌗

┏┅┄┄⟞⟦ *MAGERNULIS & LOGO* ⟧⟝┄┄┉┓
┣❐ .bonk  ©
┣❐ .tahta  ©
┣❐ .nulis  ©
┣❐ .hornycard  ©
┣❐ .hornylicense  ©
┗━━━━┫⌗

┏┅┄┄⟞⟦ *AUDIO* ⟧⟝┄┄┉┓
┣❐ .cut
┣❐ .bass [vn]  ©
┣❐ .blown [vn]  ©
┣❐ .deep [vn]  ©
┣❐ .earrape [vn]  ©
┣❐ .fast [vn]  ©
┣❐ .fat [vn]  ©
┣❐ .nightcore [vn]  ©
┣❐ .reverse [vn]  ©
┣❐ .robot [vn]  ©
┣❐ .slow [vn]  ©
┣❐ .smooth [vn]  ©
┣❐ .tupai [vn]  ©
┣❐ .tomp3
┣❐ .tovn
┣❐ .sound[1-119] ©
┗━━━━┫⌗

┏┅┄┄⟞⟦ *DATABASE* ⟧⟝┄┄┉┓
┣❐ .delcmd Ⓟ
┣❐ .listcmd
┣❐ .unlockcmd Ⓟ
┣❐ .lockcmd Ⓟ
┣❐ .addvn
┣❐ .addmsg
┣❐ .addvideo
┣❐ .addaudio
┣❐ .addimg
┣❐ .addstiker
┣❐ .addgif
┣❐ .delmsg
┣❐ .all
┣❐ .listdoc
┣❐ .listvn
┣❐ .listmsg
┣❐ .listvideo
┣❐ .listgif
┣❐ .listaudio
┣❐ .listimg
┣❐ .liststicker
┣❐ .unlockmsg
┣❐ .lockmsg
┣❐ .liststore
┗━━━━┫⌗

┏┅┄┄⟞⟦ *OWNER* ⟧⟝┄┄┉┓
┣❐ .delexpired
┣❐ .setexpired
┣❐ .enable
┣❐ .disable
┣❐ .resetprefix
┣❐ .setbotbio
┣❐ .addlimit
┣❐ .addowner
┣❐ .addprem
┣❐ .banchat
┣❐ .ban
┣❐ .block
┣❐ .unblock
┣❐ .broadcastchats
┣❐ .bcchats
┣❐ .bcgc
┣❐ .creategroup
┣❐ .delprem
┣❐ .join
┣❐ .leavegc
┣❐ .opromote
┣❐ .reset
┣❐ .restart
┣❐ .setbotbio
┣❐ .setprefix
┣❐ .unbanchat
┣❐ .unban
┣❐ .unwarn
┗━━━━┫⌗

┏┅┄┄⟞⟦ *STALKER* ⟧⟝┄┄┉┓
┣❐ .ai  ©
┣❐ .openai  ©
┣❐ .githubstalk  ©
┣❐ .getbio  ©
┣❐ .ffstalk  ©
┣❐ .igstalk  ©
┣❐ .tiktokfoto  ©
┣❐ .pptiktok  ©
┣❐ .getprofile  ©
┣❐ .pubgstalk  ©
┣❐ .tiktokstalk  ©
┣❐ .twitterstalk  ©
┣❐ .zepetostalk  ©
┗━━━━┫⌗

┏┅┄┄⟞⟦ *INFO* ⟧⟝┄┄┉┓
┣❐ .user
┣❐ .delete
┣❐ .bannedlist
┣❐ .botstatus
┣❐ .owner
┣❐ .groups
┣❐ .grouplist
┣❐ .listpc
┣❐ .report
┣❐ .request
┣❐ .rules
┣❐ .runtime
┣❐ .ping
┣❐ .speed
┣❐ .testspeed
┣❐ .blocklist
┣❐ .premlist
┗━━━━┫⌗`
let wkwk = 'https://telegra.ph/file/1b773671be6d2f21f49d7.jpg'
    let d1 = 'https://telegra.ph/file/c443ae6e5dfb36f271724.jpg'
    let d2 = 'https://telegra.ph/file/14b2408fc8414e3663b5f.jpg'
    let d3  = 'https://telegra.ph/file/cc85cd1955b53c479d926.jpg'
    let d4 = 'https://telegra.ph/file/6caea3e2545f366c5d471.jpg'
    let d5 = 'https://telegra.ph/file/350ec9f69481f22c47345.jpg'
    let d6 = 'https://telegra.ph/file/525e5f2cf9f6d59fbe6dd.jpg'
    let d7 = 'https://telegra.ph/file/afb43001667011fc0951f.jpg'
    let td = `${pickRandom([d1,d2,d3,d4,d5,d6,d7])}`
conn.sendButton(m.chat, knnt, ᴛᴇs, td, [["terkadang...\nkalo liat martabak gw suka sange", ``],["Group", `.infogcgw`]], fkon )
  

}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i
handler.register = false

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Kak 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Kolkata').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Night Rider')
  }
  if (time >= 4) {
    wishloc = ('Good Morning')
  }
  if (time >= 12) {
    wishloc = ('Good Afternoon')
  }
  if (time >= 16) {
    wishloc = ('️Good Evening')
  }
  if (time >= 23) {
    wishloc = ('Night Rider')
  }
  return wishloc
}

async function genProfile(conn, m) {
  let font = await jimp.loadFont('./names.fnt'),
    mask = await jimp.read('https://i.imgur.com/552kzaW.png'),
    welcome = await jimp.read(thumbnailUrl.getRandom()),
    avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')),
    status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected'

    await avatar.resize(460, 460)
    await mask.resize(460, 460)
    await avatar.mask(mask)
    await welcome.resize(welcome.getWidth(), welcome.getHeight())

    await welcome.print(font, 550, 180, 'Name:')
    await welcome.print(font, 650, 255, m.pushName.slice(0, 25))
    await welcome.print(font, 550, 340, 'About:')
    await welcome.print(font, 650, 415, status)
    await welcome.print(font, 550, 500, 'Number:')
    await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international'))
    return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png')
}