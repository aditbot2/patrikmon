import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hgam/i.test(m.quoted.text) || /.*hgam/i.test(m.text))
        return !0
    this.tebakgambar = this.tebakgambar ? this.tebakgambar : {}
    if (!(id in this.tebakgambar))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, null, buttonTebakgambar, m)
    if (m.quoted.id == this.tebakgambar[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakgambar[id][3])
            delete this.tebakgambar[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttonTebakgambar, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakgambar[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].limit += this.tebakgambar[id][2]
            conn.sendButton(m.chat, `*Jawabanmu BENAR!🥳🎉*\n_kamu mendapatkan ${this.tebakgambar[id][2]} COIN 🪙_`, wm, null, buttonTebakgambar, m)
            clearTimeout(this.tebakgambar[id][3])
            delete this.tebakgambar[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.sendButton(m.chat, `*Jawabanmu SALAH 🥺*`, wm, null, [
                ['Bantuan - 3 🪙', '/hgam']
               
            ], m)
    }
    return !0
}
export const exp = 0

const buttonTebakgambar = [
    ['Main Lagi', '/tebakgambar']
]