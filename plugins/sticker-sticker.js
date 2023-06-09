import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('10 sᴇᴄᴏɴᴅs ᴍᴀx ᴅᴜʀsᴛɪᴏɴ﹗')
      let img = await q.download?.()
      if (!img) throw `ᴛᴀɢ ᴀ ɪᴍᴀɢᴇ ᴏʀ ɢɪғ ᴏʀ ᴠɪᴅᴇᴏ ᴡɪᴛʜ ᴄᴏᴍᴍᴀɴᴅ *_"${usedPrefix + command}"_*`
      let out
      try {
        stiker = await sticker(img, false, global.packname)
      } catch (e) {
        console.error(e)
      } finally {
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, global.packname)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname)
      else return m.reply(`*ɪɴᴠᴀʟɪᴅ ᴜʀʟ ᴏʀ ʟɪɴᴋ﹗*

===========================
★ ᴜsᴀɢᴇ:
${usedPrefix + command} <url>

★ ᴇxᴀᴍᴩʟᴇ:
${usedPrefix + command} https://raw.githubusercontent.com/DineshValor/valor/bot/docs/images/upi-qrcode.jpg`)
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    else throw `kirim atau reply foto dengan command *_"${usedPrefix + command}"_*`
  }
}
handler.help = ['sticker (tag image/gif/video)', 'sticker <url>']
handler.tags = ['sticker']
handler.command = /^(s|sticker|sgif|stickergif)$/i

handler.limit = true

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}