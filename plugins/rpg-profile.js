import { join } from 'path'
import { xpRange } from '../lib/levelling.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
    let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
    if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
let caption = ` @${who.split("@")[0]} *Coin Kamu Saat Ini :* ${limit} 🪙`
await conn.sendButton(m.chat, caption, wm, null, [['Group', `${usedPrefix}infogcgw`],['Owner', `${usedPrefix}owner`]], m, { mentions: conn.parseMention(caption) })
}

handler.help = ['cekcoin']
handler.tags = ['game']

handler.command = /^(cekcoin)$/i

export default handler
