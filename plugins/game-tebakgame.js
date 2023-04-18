import fetch from 'node-fetch'
let timeout = 60000
let poin = 1
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakgame = conn.tebakgame ? conn.tebakgame : {}
    let id = m.chat
    if (id in conn.tebakgame) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.tebakgame[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `*${command.toUpperCase()}*
game apakah ini?
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hgame untuk bantuan
*Reward* +1 🪙
*‼️REPLY SOAL UNTUK MENJAWAB‼️* 
    `.trim()
    conn.tebakgame[id] = [
        await conn.sendButton(m.chat, caption, wm, json.img, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakgame[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, null, [
                ['Main Lagi', '/tebakgame']
            ], conn.tebakgame[id][0])
            delete conn.tebakgame[id]
        }, timeout)
    ]
}
handler.help = ['tebakgame']
handler.tags = ['game']
handler.command = /^tebakgame/i
handler.private = true
export default handler

const buttons = [
    ['Bantuan - 3 🪙', '/hgame']
]