let handler = async (m, { conn }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (!(id in conn.caklontong)) throw false
    let json = conn.caklontong[id][1]
    let ans = json.jawaban
    let clue = ans.replace(/[AIUEbcdhjwO]/gi, '_')
    m.reply('```' + clue + '```')
}
handler.command = /^calo$/i

handler.limit = 3

export default handler