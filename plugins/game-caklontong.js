import { caklontong } from '@bochilteam/scraper'

let timeout = 60000
let poin = 10
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) return conn.reply(m.chat, 'Masih Ada Soal Yang Belum Terjawab', conn.caklontong[id][0])
    let json = await caklontong()
    let caption = `
${json.soal}
Waktu *${(timeout / 1000).toFixed(2)} Detik*
Ketik ${usedPrefix}calo Untuk Bantuan
*Reward* +10 🪙
*‼️REPLY SOAL UNTUK MENJAWAB‼️* 
`.trim()
    conn.caklontong[id] = [
        await conn.sendButton(m.chat, caption, wm, 'https://telegra.ph/file/871707e681acca481e93a.jpg', [['Bantuan - 3 🪙', `${usedPrefix}calo`]], m),
        json, poin,
        setTimeout(async () => {
            if (conn.caklontong[id]) await conn.sendButton(m.chat, `Waktu Habis!\nJawabannya Adalah *${json.jawaban}*\n${json.deskripsi}`, wm, null, [['Main Lagi', `${usedPrefix}caklontong`]], conn.caklontong[id][0])
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i
handler.private = true
export default handler
