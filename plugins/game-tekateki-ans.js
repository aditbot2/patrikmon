import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*htek/i.test(m.quoted.text) || /.*htek/i.test(m.text))
        return !0
    this.tekateki = this.tekateki ? this.tekateki : {}
    if (!(id in this.tekateki))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', wm, null, buttontekateki, m)
    if (m.quoted.id == this.tekateki[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tekateki[id][3])
            delete this.tekateki[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', wm, null, buttontekateki, m)
        }
        let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].limit += this.tekateki[id][2]
            conn.sendButton(m.chat, `**Jawabanmu BENAR!🥳🎉*\n_kamu mendapatkan ${this.tekateki[id][2]} Coin_ 🪙`, wm, null, buttontekateki, m)
            clearTimeout(this.tekateki[id][3])
            delete this.tekateki[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.sendButton(m.chat, `*Salah!*`, wm, null, [
                ['Bantuan - 3 🪙', '/htek']
   
            ], m)
    }
    return !0
}
export const exp = 0

const buttontekateki = [
    ['Main Lagi', '/tekateki']
]