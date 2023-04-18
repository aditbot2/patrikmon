import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hben/i.test(m.quoted.text) || /.*hben/i.test(m.text))
        return !0
    this.tebakbendera = this.tebakbendera ? this.tebakbendera : {}
    if (!(id in this.tebakbendera))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', wm, null, buttontebakbendera, m)
    if (m.quoted.id == this.tebakbendera[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakbendera[id][3])
            delete this.tebakbendera[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebakbendera, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakbendera[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender].limit += this.tebakbendera[id][2]
            conn.sendButton(m.chat, `*Jawabanmu BENAR!🥳🎉*\n_kamu mendapatkan ${this.tebakbendera[id][2]} Coin_`, author, null, buttontebakbendera, m)
            clearTimeout(this.tebakbendera[id][3])
            delete this.tebakbendera[id]
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.sendButton(m.chat, `*Salah!*`, wm, null, [
                ['Bantuan - 3 🪙', '/hben'],
                ['Nyerah', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttontebakbendera = [
    ['tebakbendera', '/tebakbendera']
]