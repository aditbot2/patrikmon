let handler = async (m, { conn }) => {
    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
    let id = m.chat
    if (!(id in conn.tebaklirik)) throw false
    let json = conn.tebaklirik[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOabcdhlmrwiueo]/ig, '_') + '```', wm, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hlirik$/i

handler.limit = 3

export default handler