import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://gist.githubusercontent.com/YosefZoro1/5d7e0acf4d8ebec05091a6cf465dde93/raw/347d3051239550fee064ad9097aacd26838885a4/boys.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]

  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '🀄', '*ولد*🧑\n𝐵𝑌:OBITO ⚡️ BOT', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '🌀', '*ولد*🧑🏻\n𝐵𝑌:OBITO ⚡️ BOT', m)
}
handler.help = ['obito bot']
handler.tags = ['obito bot']
handler.command = /^طقم2|طقم-اولاد$/i
handler.limit = true

export default handler
