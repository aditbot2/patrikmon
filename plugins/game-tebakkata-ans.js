import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hkat/i.test(m.quoted.text) || /.*hkat/i.test(m.text))
        return !0
    this.tebakkata = this.tebakkata ? this.tebakkata : {}
    if (!(id in this.tebakkata))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', wm, null, buttontebakkata, m)
    if (m.quoted.id == this.tebakkata[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakkata[id][3])
            delete this.tebakkata[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', wm, null, buttontebakkata, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakkata[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].limit += this.tebakkata[id][2]
            conn.sendButton(m.chat, `*Jawabanmu BENAR!🥳🎉*\n_kamu mendapatkan ${this.tebakkata[id][2]} Coin_ 🪙`, wm, null, buttontebakkata, m)
            clearTimeout(this.tebakkata[id][3])
            delete this.tebakkata[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.sendButton(m.chat, `*Salah!*`, wm, null, [
                ['Hint', '/hkat']
   
            ], m)
    }
    return !0
}
export const exp = 0

const buttontebakkata = [
    ['Main Lagi', '/tebakkata']
]