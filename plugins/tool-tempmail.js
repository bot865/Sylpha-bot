import { TempMail } from 'tempmail.lol';
import axios from 'axios';
const tempmail = new TempMail();
const handler = async (m, { text, usedPrefix, command }) => {
  if (command === 'tempmail') {
    try {
      const inbox = await tempmail.createInbox();
      const mensajeCorreo = '*`𝐃𝐢𝐫𝐞𝐜𝐜𝐢𝐨𝐧 𝐝𝐞𝐥 𝐜𝐨𝐫𝐫𝐞𝐨 𝐭𝐞𝐦𝐩𝐨𝐫𝐚𝐥 :`*\n' + ` ${inbox.address}\n\n> ᴜɴ ᴛᴏᴋᴇɴ ᴘᴀʀᴀ ᴠᴇʀɪꜰɪᴄᴀʀ ᴇꜱᴛᴀ ʙᴀɴᴅᴇᴊᴀ ᴅᴇ ᴇɴᴛʀᴀᴅᴀ ꜱᴇ ᴇɴᴠɪᴀʀÁ ᴇɴ ᴇʟ ꜱɪɢᴜɪᴇɴᴛᴇ ᴍᴇɴꜱᴀᴊᴇ. Úꜱᴀʟᴏ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ .checkmail.\n\nToken: ${inbox.token}`;
      const url = "https://atom.bio/elakrabelyotyobr";
      const responseImg = await axios.get(url, { responseType: 'arraybuffer' });
      await conn.sendFile(m.chat, responseImg.data, "thumbnail.png", mensajeCorreo, m, null, rcanal);
      
      await m.reply(inbox.token);
      await m.react("📧");
    } catch (error) {
      console.error('حدث خطأ أثناء إنشاء عنوان بريد إلكتروني مؤقت:', error);
      await m.reply('*`تعذر إنشاء عنوان بريد إلكتروني مؤقت.`*');
    }
  } else if (command === 'checkmail') {
    if (!text) {
      await m.reply('*`قم بتوفير رمز البريد الإلكتروني المؤقت الذي تريد التحقق منه`*');
      return;
    }
    try {
      const emails = await tempmail.checkInbox(text);
      if (!emails || emails.length === 0) {
        await m.reply('*`لم يتم العثور على أي رسائل أو انتهت صلاحية البريد الوارد.`*');
        return;
      }
      const mensajes = emails.map(email => {
        return `
De: ${email.from}
Asunto: ${email.subject}
Fecha: ${new Date(email.date).toLocaleString()}
Cuerpo:
${email.body}
        `;
      }).join('\n\n---\n\n');
      const mensajeRespuesta = '*`الرسائل في صندوق الوارد الخاص بك :`*' + `\n\n${mensajes}`;
      await m.reply(mensajeRespuesta);
    } catch {
    }
  }
};
handler.help = ['tempmail', 'checkmail <token>'];
handler.tags = ['tools'];
handler.command = ['tempmail', 'اميل'];
handler.register = false;
export default handler;
