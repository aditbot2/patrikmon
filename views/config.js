import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6283133162295', 'adit', true],
  ['6283133162295'], 
  ['6283133162295'] 
] //Numeros de owner 

global.mods = [''] 
global.prems = ['']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'Hyra Bot' 
global.author = 'Adit' 
global.fgig = 'https://www.instagram.com/gdausnkntd' 
global.dygp = 'https://chat.whatsapp.com/BH0psoLqEHR8r8GngPcdNl'
global.fgsc = 'https://github.com/ucupnetwork' 
global.fgyt = 'https://youtube.com/ucupgayming'
global.fgpyp = 'https://paypal.me'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 
global.swm = 'adit'
global.wm = 'Hyra Bot'

global.wait = '*⌛ _proses..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
