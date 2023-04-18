import fetch from 'node-fetch'
let timeout = 60000
let poin = 5
let handler = async (m, { conn, command, usedPrefix }) => {


    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', wm, null, buttons, conn.asahotak[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
      let d1 = 'https://telegra.ph/file/d523cdcb7049b4c38b4ae.jpg'
    let d2 = 'https://telegra.ph/file/1c88ae2c25e75dc042b59.jpg'
    let d3  = 'https://telegra.ph/file/e9b69921f36614aedc20d.jpg'
    let d4 = 'https://telegra.ph/file/818bfe91831cb2655ef8c.jpg'
    let d5 = 'https://telegra.ph/file/c6f77a6b2f803194c326e.jpg'
    let td = `${pickRandom([d1,d2,d3,d4,d5])}`
  let caption = `*${json.soal}*


Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hasa untuk bantuan
*Reward* +5 🪙
*‼️REPLY SOAL UNTUK MENJAWAB‼️* 
    `.trim()
    conn.asahotak[id] = [
        await conn.sendButton(m.chat, caption, wm, td, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.asahotak[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, author, null, [
                ['Main Lagi', '/asahotak']
            ], conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i
handler.private = true
export default handler

const buttons = [
    ['Bantuan - 3 🪙', '/hasa']

]

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}