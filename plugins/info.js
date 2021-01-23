let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*〘 INFO BOT 〙
*▌║*
*▌║✙* Dibuat dengan bahasa javascript via NodeJs
*▌║✙* Rec: maslent
*▌║✙* Script: @Nurotomo
*▌║✙* Instagram: @maslent11
*▌║✙* Editby: @Zaky_ganss
*▌║*
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*〘 Thanks To 〙
*▌║✙* Nurotomo
*▌║✙* MfarelS
*▌║✙* ST4RZ
*▌║✙* MASLENT
*▌║✙* Dan kawan yang lain :)
*▌║*
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*〘 DONASI 〙 ═
*▌║✙* Indosat: 0858-3207-9751
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*
*▌║*>Request? Wa.me/6285832079751
*▌║*
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*〘 SADBOY BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

