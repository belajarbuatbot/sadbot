let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Di Buat Tutorial Oleh: Drawl Nag
╠➥ Script By: @Nurotomo 
╠➥ Edit By: Zaky_ganss
╠➥ Github: https://github.com/belajarbuatbot/sadbot
╠➥ Instagram: @Bng_jeknation
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
║➥ Drawl Nag
╠➥ ST4RZ
║➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ 
╠➥ Indosat: 0858-3207-9751
╠➥ 
║
║>Request? Wa.me/6285832079751
║
╠═〘 SAD BOT 〙 ═
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

