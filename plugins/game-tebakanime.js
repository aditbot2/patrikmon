import fetch from 'node-fetch'

let timeout = 60000
let poin = 5
let handler = async (m, { conn, usedPrefix, command }) => {
    conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
    let id = m.chat
    if (id in conn.tebakanime) {
        conn.reply(m.chat, 'Masih Ada Soal Yang Belum Terjawab', conn.tebakanime[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/unx21/ngetezz/main/src/data/nyenyenye.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
Waktu *${(timeout / 1000).toFixed(2)} Detik*
Ketik ${usedPrefix}wa Untuk Bantuan
*Reward* +5 🪙
*‼️REPLY SOAL UNTUK MENJAWAB‼️* 
`.trim()
    conn.tebakanime[id] = [
        await conn.sendButton(m.chat, caption, wm, json.img, buttons, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakanime[id]) await conn.reply(m.chat, `Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, conn.tebakanime[id][0])
            delete conn.tebakanime[id]
        }, timeout)
    ]
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime$/i
handler.private = true
export default handler

const buttons = [
    ['Bantuan - 3 🪙', '/wa']
]