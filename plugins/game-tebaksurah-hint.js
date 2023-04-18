let handler = async (m, { conn }) => {
    conn.tebaksurah = conn.tebaksurah ? conn.tebaksurah : {}
    let id = m.chat
    if (!(id in conn.tebaksurah)) throw false
    let json = conn.tebaksurah[id][1]
    conn.sendButton(m.chat, '```' + json.surah.englishName.replace(/[AIUEOaiueo]/ig, '_') + '```', wm, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hsur$/i

handler.limit = 3

export default handler