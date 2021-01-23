let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [0858-3207-9751]
│ • saweria • [ https://saweria.co/Bngjek ]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/6285832079751
╰─   [ SAD BOT ]
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
