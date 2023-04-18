import { siapakahaku } from '@bochilteam/scraper'

let timeout = 60000
let poin = 1
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, 'Masih Ada Soal Yang Belum Terjawab', conn.siapakahaku[id][0])
        throw false
    }
    const json = await siapakahaku()
    let caption = `
Siapakah aku? ${json.soal}

Waktu *${(timeout / 1000).toFixed(2)} Detik*
Ketik ${usedPrefix}wholi Untuk Bantuan
*Reward* +1 🪙
*‼️REPLY SOAL UNTUK MENJAWAB‼️* 
`.trim()
    conn.siapakahaku[id] = [
        await conn.sendButton(m.chat, caption, wm, 'https://telegra.ph/file/58c1c48562d2269070609.jpg', ['Bantuan - 3 🪙', `${usedPrefix}wholi`], m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.sendButton(m.chat, `Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, wm, ['Main Lagi', '/siapakahaku'], conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku/i
handler.private = true
export default handler
