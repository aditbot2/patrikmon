import fetch from 'node-fetch'
let timeout = 60000
let poin = 4
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', wm, null, buttons, conn.tekateki[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*${command.toUpperCase()}*
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}htek untuk bantuan
*Reward* +4 🪙
*‼️REPLY SOAL UNTUK MENJAWAB‼️* 
    `.trim()
    conn.tekateki[id] = [
        await conn.sendButton(m.chat, caption, wm, `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=inferno-logo&doScale=false&scaleWidth=400&scaleHeight=400&fontsize=50&fillTextType=0&backgroundColor=black&text=${command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tekateki[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, null, [
                ['tekateki', '/tekateki']
            ], conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}
handler.help = ['tekateki']
handler.tags = ['game']
handler.command = /^tekateki/i
handler.private = true
export default handler

const buttons = [
    ['Bantuan - 3 🪙', '/htek']

]