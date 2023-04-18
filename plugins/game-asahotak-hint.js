let handler = async (m, { conn }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (!(id in conn.asahotak)) throw false
    let json = conn.asahotak[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaibgdreo]/ig, '_') + '```', wm, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hasa$/i

handler.limit = 3

export default handler