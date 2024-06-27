const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "255745590218" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255745590218";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_40_06_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODIsXG4gICAgICAgIDgyLFxuICAgICAgICA4NyxcbiAgICAgICAgMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDkwLFxuICAgICAgICA3NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIsXG4gICAgICAgIDMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU4LFxuICAgICAgICAzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwLFxuICAgICAgICAzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODksXG4gICAgICAgIDY3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyLFxuICAgICAgICA2OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDczLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDM4LFxuICAgICAgICA0NSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDczLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTExLFxuICAgICAgICA0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIweHhReVpUN3ZJYk5Ld1RRblRwSWI3dW5MZkhTT2lQMitkN1EzeE05VmRvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4Sk84b3lVOVFzcUlWODFZNktBS0dnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNlMDliNzYzLTk2NzItNGY1Yy1hNTM5LTg1NDA1NzI4OTc1NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICAyMTAsXG4gICAgICAxODksXG4gICAgICA0MCxcbiAgICAgIDgzLFxuICAgICAgMjA3LFxuICAgICAgOTYsXG4gICAgICAyMzMsXG4gICAgICAxNzEsXG4gICAgICAyMTksXG4gICAgICAzOSxcbiAgICAgIDI0MyxcbiAgICAgIDkwLFxuICAgICAgOCxcbiAgICAgIDIxNSxcbiAgICAgIDEwMyxcbiAgICAgIDY3LFxuICAgICAgOSxcbiAgICAgIDgwLFxuICAgICAgMTMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICAxODcsXG4gICAgICAxNDksXG4gICAgICAxOSxcbiAgICAgIDEyNixcbiAgICAgIDEyNyxcbiAgICAgIDE0OSxcbiAgICAgIDI0LFxuICAgICAgMTkxLFxuICAgICAgNTYsXG4gICAgICAyNTUsXG4gICAgICAyLFxuICAgICAgMTM0LFxuICAgICAgMjAsXG4gICAgICA0NCxcbiAgICAgIDIzMSxcbiAgICAgIDc5LFxuICAgICAgMTAyLFxuICAgICAgMTgyLFxuICAgICAgMjI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllEODEyRzlCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3NDU1OTAyMTg6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3ODI2NjcwMzI4NjM5OToxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOM2VwcmtGRUxIMjg3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJnMDJKaU8rZEQ3dDU1T21Jem1mTWtBTXlDN1VHeVAyVSs1T29kQy96Q1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVVVaSGN4M3IwT0VHUDFLVSsvSEUzZS9DdHVSeXJ5bjZLbVZRVE1scFFRYXUwSmtHNDRqQWNmZkF2ZDFudFdLK0pDdHdsMUt5dzNpdjJIRmxCNHYxQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRGNwc25jZXpGSkxZaW9BMEJnRWJvU2hucFNWSFdnMTJSblBMUGc5a2VzUUZIaHV4S3JGWU5DVTNZc3JFWm44OFR4empQc0dFMUZ1SEV1WHhXTlFyZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzQ1NTkwMjE4OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk0NjY4MDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGUjdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZSNy5qc29uIjogIntcImtleURhdGFcIjpcInFKUzZQbWNTcEJ0L2NDQ2xVdGd4YlpWeDF0cmVWd0xrb2c3ei9kUWhxWUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ2MjM0OTY2MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NDY2ODA5ODAxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
