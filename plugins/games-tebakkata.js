import { tebakkata } from '@bochilteam/scraper'

let timeout = 60000
let poin = 1
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (id in conn.tebakkata) {
        conn.reply(m.chat, 'Masih Ada Soal Yang Belum Terjawab', conn.tebakkata[id][0])
        throw false
    }
    const json = await tebakkata()
    let caption = `
${json.soal}
Waktu *${(timeout / 1000).toFixed(2)} Detik*
Ketik ${usedPrefix}hkat Untuk Bantuan
*Reward* +1 🪙
*‼️REPLY SOAL UNTUK MENJAWAB‼️* 
`.trim()
    conn.tebakkata[id] = [
        await conn.sendButton(m.chat, caption, wm, ['Bantuan - 3 🪙', `${usedPrefix}hkat`], m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkata[id]) conn.sendButton(m.chat, `Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, wm, ['Main Lagi', `${usedPrefix}tebakkata`], conn.tebakkata[id][0])
            delete conn.tebakkata[id]
        }, timeout)
    ]
}
handler.help = ['tebakkata']
handler.tags = ['game']
handler.command = /^tebakkata/i
handler.private = true
export default handler