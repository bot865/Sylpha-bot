import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/ELAKRAB-ELYOTUBER-06-17')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
╭━─━━━≪『﷽』≫━━━─━╮
˛ َِ𝗘َِ𝗟َِ𝗔َِ𝗞َِ𝗥َِ𝗔َِ𝗕 َِ𝗘َِ𝗟َِ𝗬َِ𝗢َِ𝗧َِ𝗨َِ𝗕َِ𝗘َِ𝗥 .
*✧━━═━✠⊰👑⊱✠━═━━✧*
*〘تاريخ〙 ━⊱* ${date}
*〘وقت النشاط〙 ━⊱* ${uptime}
*〘المستخدمين〙 ━⊱* ${rtotalreg}
*〘المستوي〙 ━⊱* ${level}
*〘الخبرة〙 ━⊱* ${exp}*
*〘الدور〙 ━⊱* ${role}*
*❋ ─━─⊰🍷⊱─━─ ❋*
*〘الماس〙 ━⊱* ${limit}
*〘العملات〙 ━⊱* ${money}
*〘الرموز〙 ━⊱* ${joincount}
*〘برايم〙 ━⊱* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
*❋ ─━─⊰🍷⊱─━─ ❋*
*✧اسم البوت✧ ━⊱ 〘بيبو〙*
*✧المطور✧ ━⊱ 〘ELAKRAB ELYOTUBER 〙*
*❋ ─━─⊰🍷⊱─━─ ❋*
*🤖┋اوامر البوت┇🤖*
*❋ ─━─⊰🍷⊱─━─ ❋*
*⎔━〘قسم الجروبات〙━⎔*
*❋ ─━─⊰🍷⊱─━─ ❋*
*↞˹┊〘 .ضيف 〙*
*↞˹┊〘 .طرد 〙*
*↞˹┊〘 .ترقية 〙*
*↞˹┊〘 .اعفاء 〙*
*↞˹┊〘 .تحذير 〙*
*↞˹┊〘 .حذف_تحذير 〙*
*↞˹┊〘 .حذف〙*
*↞˹┊〘 .منشن 〙*
*↞˹┊〘 .مخفي 〙*
*↞˹┊〘 .المشرفين 〙*
*↞˹┊〘 .لمنشن 〙*
*↞˹┊〘 .بروفايل 〙*
*↞˹┊〘 .قائمة-الارقام 〙*
*↞˹┊〘 .الجروب 〙*
*↞˹┊〘 .دعوه 〙*
*↞˹┊〘 .تغير-اللينك 〙*
*↞˹┊〘 .لفل 〙*
*↞˹┊〘 .جروب 〙*
*↞˹┊〘 .الترحيب 〙*
*↞˹┊〘 .المغادره 〙*
*↞˹┊〘 .ايات 〙*
*↞˹┊〘 .فتح قفل جروب 〙*
*↞˹┊〘 .خط 〙*
*↞˹┊〘 .توب 〙*
*↞˹┊〘 .لينك 〙*
*↞˹┊〘 .يومي 〙*
*↞˹┊〘 .ترتيب-البنك 〙*
*↞˹┊〘 .شراء 〙*
*˹┊↞〘 .هجوم 〙*
*❋ ─━─⊰🍷⊱─━─ ❋*
*⎔━〘قسم الدين〙━⎔*
*❋ ─━─⊰🍷⊱─━─ ❋*
*˼‏🕋˹┊〘 .سوره 〙*
*˼‏🕋˹┊〘 .حديث 〙*
*˼‏🕋˹┊〘 .قران 〙*
*˼‏🕋˹┊〘 .الله 〙*
❋ ─━─⊰🍷⊱─━─ ❋**
*⎔━〘قسم التنزيلات〙━⎔*
*❋ ─━─⊰🍷⊱─━─ ❋*
*˼‏⬇️˹┊〘 .انستغرام 〙*
*˼‏⬇️˹┊〘 .انستا 〙*
*˼‏⬇️˹┊〘 .شغل 〙*
*˼‏⬇️˹┊〘 .تيكتوك 〙*
*˼‏⬇️˹┊〘 .تويتر 〙*
*˼‏⬇️˹┊〘 .اغنيه 〙*
*˼‏⬇️˹┊〘 .بحث 〙*
*˼‏⬇️˹┊〘 .فيديو 〙*
*˼‏⬇️˹┊〘 .تطبيق 〙*
*˼‏⬇️˹┊〘 .صوره 〙*
*❋ ─━─⊰🍷⊱─━─ ❋*
*⎔━〘قسم الالعاب〙━⎔*
*❋ ─━─⊰🍷⊱─━─ ❋*
*˼‏🎮˹┊〘 .اكس او 〙*
*˼‏🎮˹┊〘 .كت 〙*
*˼‏🎮˹┊〘 .صراحه 〙*
*˼‏🎮˹┊〘 .لو 〙*
*˼‏🎮˹┊〘 .هل 〙*
*˼‏🎮˹┊〘 .ترجم 〙*
*˼‏🎮˹┊〘 .احزر 〙*
*˼‏🎮˹┊〘 .زواج 〙*
*˼‏🎮˹┊〘 .انطق 〙*
*˼‏🎮˹┊〘 .تاج 〙*
*˼‏🎮˹┊〘 .حكمه 〙*
*˼‏🎮˹┊〘 .ميمز 〙*
*˼‏🎮˹┊〘 .سوال 〙*
*˼‏🎮˹┊〘 .تاج 〙*
*❋ ─━─⊰🍷⊱─━─ ❋*
*⎔━〘قسم التحويل〙━⎔*
*❋ ─━─⊰🍷⊱─━─ ❋*
*˼‏🔃˹┊〘 .ملصق 〙*
*˼‏🔃˹┊〘 .سرقه 〙*
*˼‏🔃˹┊〘 .لفيديو 〙*
*˼‏🔃˹┊〘 .لصوره 〙*
*˼‏🔃˹┊〘 . لانمي 〙*
*˼‏🔃˹┊〘 .تخيل 〙*
*˼‏🔃˹┊〘 .مكس 〙*
*˼‏🔃˹┊〘 .لجواهر 〙*
*˼‏🔃˹┊〘 .ستك 〙*
*˼‏🔃˹┊〘 .تلجراف 〙*
*˼‏🔃˹┊〘 .لكرتون 〙*
*˼‏🔃˹┊〘 .باركود 〙*
*❋ ─━─⊰🍷⊱─━─ ❋*
*⎔━〘قسم الصوتيات〙━⎔*
*❋ ─━─⊰🍷⊱─━─ ❋*
*˼‏🔊˹┊〘 .عميق 〙*
*˼‏🔊˹┊〘 .منفوخ 〙*
*˼‏🔊˹┊〘 .تخين 〙*
*˼‏🔊˹┊〘 .صاخب 〙*
*˼‏🔊˹┊〘 . سريع 〙*
*˼‏🔊˹┊〘 .تخينن 〙*
*˼‏🔊˹┊〘 .رفيع 〙*
*˼‏🔊˹┊〘 .روبوت 〙*
*˼‏🔊˹┊〘 .بطئ 〙*
*˼‏🔊˹┊〘 .ناعم 〙*
*˼‏🔊˹┊〘 .سنجاب 〙*
*❋ ─━─⊰🍷⊱─━─ ❋*
*⎔━〘قسم المطور〙━⎔*
*❋ ─━─⊰🍷⊱─━─ ❋*
*˼‏⚡˹┊〘 .ضيف_بريميام 〙*
*˼‏⚡˹┊〘 .حذف_بريميام 〙*
*˼‏⚡˹┊〘 .بان 〙*
*˼‏⚡˹┊〘 .حذف_بان 〙*
*˼‏⚡˹┊〘 . اطفاء 〙*
*˼‏⚡˹┊〘 .تفعيل 〙*
*˼‏⚡˹┊〘 .المبندين 〙*
*˼‏⚡˹┊〘 .اعادة 〙*
*˼‏⚡˹┊〘 .اعادةتشغيل 〙*
*˼‏⚡˹┊〘 .ادخل 〙*
*˼‏⚡˹┊〘 .ضيف_اكس_بي 〙*
*˼‏⚡˹┊〘 .ضيف_جواهر 〙*
*❋ ─━─⊰🍷⊱─━─ ❋*
*┊〘Bebo-Bot〙┊*
*حقوق المطور 👑

˛ َِ𝗘َِ𝗟َِ𝗔َِ𝗞َِ𝗥َِ𝗔َِ𝗕 َِ𝗘َِ𝗟َِ𝗬َِ𝗢َِ𝗧َِ𝗨َِ𝗕َِ𝗘َِ𝗥 .

https://wa.me/+201143638030
*❋ ─━─⊰🍷⊱─━─ ❋*
https://wa.me/+201143638030
*❋ ─━─⊰🍷⊱─━─ ❋*
*اتمني لك تجربه رئعه ي صديقي 👑♥*
`.trim()
let buttonMessage = {image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `${wm}`,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'ELAKRAB ',
mediaUrl: null,
title: '˛ َِ𝗘َِ𝗟َِ𝗔َِ𝗞َِ𝗥َِ𝗔َِ𝗕 َِ𝗘َِ𝗟َِ𝗬َِ𝗢َِ𝗧َِ𝗨َِ𝗕َِ𝗘َِ𝗥 .',
body: null,
thumbnail: img,
sourceUrl: `https://atom.bio/elakrabelyotyobr`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃', m)
}}
handler.command = /^(اوامر|الاوامر|الأوامر|أوامر)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}