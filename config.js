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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_49_05_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDk4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDc4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDMsXG4gICAgICAgIDExLFxuICAgICAgICA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk2LFxuICAgICAgICAzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDg3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDkyLFxuICAgICAgICA5NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDM2LFxuICAgICAgICA1NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgODAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDksXG4gICAgICAgIDUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDcyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODksXG4gICAgICAgIDc5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDgwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjExLFxuICAgICAgICA3MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImRUR0o3c2YraTRxMGJTR1RKbnoyN0FRYVZ5ZWd3WDBNQ1YyN21aaDZFM1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjg3OTU0MDQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2Q0MzNTI3NjUxODExRUUzMTgwNkM5NjhEMEU5MkE0RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDY5MzUzOTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNmVxelBIMWFUd0NVSnhfTGxwdFBad1wiLFxuICBcInBob25lSWRcIjogXCI4NGYxZjcwZi03NzA4LTQ2MzUtYjA0Ni0zODg1MDNlNWZhMzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgMjMzLFxuICAgICAgNjIsXG4gICAgICAyLFxuICAgICAgMTg5LFxuICAgICAgMjQyLFxuICAgICAgMTgzLFxuICAgICAgMTczLFxuICAgICAgNDQsXG4gICAgICAyMTEsXG4gICAgICAyMzEsXG4gICAgICAxMSxcbiAgICAgIDExMSxcbiAgICAgIDIwMSxcbiAgICAgIDE4MSxcbiAgICAgIDI0OCxcbiAgICAgIDI1MixcbiAgICAgIDQzLFxuICAgICAgMTcyLFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMjQwLFxuICAgICAgMCxcbiAgICAgIDE5OCxcbiAgICAgIDIzNCxcbiAgICAgIDE4NyxcbiAgICAgIDE2LFxuICAgICAgMTg2LFxuICAgICAgMTQxLFxuICAgICAgMTk4LFxuICAgICAgMTAsXG4gICAgICAxNjIsXG4gICAgICAxODUsXG4gICAgICA5NSxcbiAgICAgIDEyMixcbiAgICAgIDc1LFxuICAgICAgNTEsXG4gICAgICAxNzgsXG4gICAgICAyNTEsXG4gICAgICAyMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNzhMTVFaSzJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI4Nzk1NDA0NTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NzI2MTQyMDk5MDQ4Mjo3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcInByaW5jZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xIYzcrWUVFTnk4Z01FR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRVlCaGFKSytaQXd0ekZOUlRPOEpsMDd0VlJSVGE3MjQxQW9acXU0MW1Haz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIQmNaS2tXR0tlVFNWcEtHUUdaT2xUaUdvOUdoTWFOTGtkUlNTcTdDa2svbjV0cFdRd09RSDdySGxESmpuUitoNDBoblF0eXNGMWl2QWdrZTUzSW5Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLZ25ESE9zc2VIR0xabDYvZDlMa0oweXdMTzJEbGV2b01tQ0NlSFFPYkhQd0twcW1JMkN3bERhbDkwMGNxUzVZTFVqdmNLL1Z3WENlbUpuTmhXOXNBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyODc5NTQwNDU6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2OTM1MzkxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTklTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOSVMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpai93WGpGQnRvc0FKUWV6VmFPTE9LY042Y1crYVdmT1RYbURTLzd0ZUZnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyODk0ODE3NzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
