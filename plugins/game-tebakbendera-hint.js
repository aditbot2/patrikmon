let handler = async (m, { conn }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (!(id in conn.tebakbendera)) throw false
    let json = conn.tebakbendera[id][1]
    conn.sendButton(m.chat, '```' + json.name.replace(/[AIUEOaiueo]/ig, '_') + '```', wm, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hben$/i

handler.limit = 3

export default handler