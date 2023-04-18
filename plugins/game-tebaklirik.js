import fetch from 'node-fetch'
let timeout = 60000
let poin = 2
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
    let id = m.chat
    if (id in conn.tebaklirik) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.tebaklirik[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `*${json.soal}*

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hlirik untuk bantuan
*Reward* +2 🪙
*‼️REPLY SOAL UNTUK MENJAWAB‼️* 
    `.trim()
    conn.tebaklirik[id] = [
        await conn.sendButton(m.chat, caption, wm, null, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklirik[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, null, [
                ['Main Lagi', '/tebaklirik']
            ], conn.tebaklirik[id][0])
            delete conn.tebaklirik[id]
        }, timeout)
    ]
}
handler.help = ['tebaklirik']
handler.tags = ['game']
handler.command = /^tebaklirik/i
handler.private = true
export default handler

const buttons = [
    ['Bantuan - 3 🪙', '/hlirik']
]