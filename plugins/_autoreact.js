let handler = async (m, { conn, text }) => {

    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['😨','💩','☠️','💀','🫂','🏃','😭','🤣','😂','😅','😆','😁','😉','😙','😘','🥰','😍','🤩','🥳','😪','😴','😏','😌','🙃','☺️','🙂','😊','🥲','🤪','😜','😝','🤤','🤗','😱','😡','😠','😤','🤨','😒','😒','🤬','😕','😞','🤮','🤢','🥶','🤧','😎','🥸','🤡','👿','😈','👻','👍','🤌','😅','😂','😳','😎','👁️','👄','🗣️','👤','👥','🦠','🦷','💌','💖','🖤','💛','🤎','💚','😻','💘','💝','🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            key: m.key,
          }})
  
  }
handler.customPrefix = /(a|i|u|e|o)/i
handler.command = new RegExp

export default handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
