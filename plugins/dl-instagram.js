import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, '*`أدخل مقطع فيديو Instagram إلى جانب الأمر 🐍♥.`*', m)
try {
let { dl_url } = await Starlights.igdl(args[0])
await conn.sendFile(m.chat, dl_url, 'igdl.mp4', null, m, null, rcanal)
} catch {
}}
handler.help = ['instagram *<link>*']
handler.tags = ['dl']
handler.command = /^(انستا|instagram|igdl|ig|instagramdl2|instagram2|igdl2|ig2|instagramdl3|instagram3|igdl3|ig3)$/i

export default handler
