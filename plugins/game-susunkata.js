import fetch from 'node-fetch'
let timeout = 60000
let poin = 1
let handler = async (m, { conn, command, usedPrefix }) => {

    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.susunkata[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `${json.tipe}
  
${json.soal}

Waktu *${(timeout / 1000).toFixed(2)} Detik*
Ketik ${usedPrefix}hsus Untuk Bantuan
*Reward* +1 🪙
*‼️REPLY SOAL UNTUK MENJAWAB‼️* 
    `.trim()
    conn.susunkata[id] = [
        await conn.sendButton(m.chat, caption, wm, null, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.susunkata[id]) conn.sendButton(m.chat, `Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, wm, null, [
                ['Main Lagi', '/susunkata']
            ], conn.susunkata[id][0])
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata/i
handler.private = true
export default handler

const buttons = [
    ['Bantuan - 3 🪙', '/hsus']

]