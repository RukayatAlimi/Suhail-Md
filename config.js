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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348061141437";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_55_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyLFxuICAgICAgICA2NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ4LFxuICAgICAgICA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyLFxuICAgICAgICA1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwLFxuICAgICAgICA1NCxcbiAgICAgICAgOSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDYxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDYzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDk2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQyLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA4MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjExLFxuICAgICAgICA5NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgNzMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkM4NkpyamlQR2tLY3BzYWdVSXVTY1kwNnUrSDFmbWxSdEhTc3lnbkRtZzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA2MTE0MTQzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzM3Q0EzMjI3REVDNUFGODQ1Qjc2NzRDNDEzRUVGOUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NjA4MTE0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJuX1JOd1oyU2lTNWdQTUdwSzdBQmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDcxNjc0NTgtODVjMC00N2U5LWJiMDQtMWE2ZDgyYWFhOTI4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDksXG4gICAgICA0NCxcbiAgICAgIDE1MixcbiAgICAgIDk3LFxuICAgICAgMTI3LFxuICAgICAgNzcsXG4gICAgICA1NyxcbiAgICAgIDIsXG4gICAgICAxNDMsXG4gICAgICA2OCxcbiAgICAgIDExNixcbiAgICAgIDc2LFxuICAgICAgOCxcbiAgICAgIDE4LFxuICAgICAgNjEsXG4gICAgICA1NCxcbiAgICAgIDExMixcbiAgICAgIDI1LFxuICAgICAgMjM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDE3NixcbiAgICAgIDIxMixcbiAgICAgIDMxLFxuICAgICAgNDksXG4gICAgICAyMyxcbiAgICAgIDE0MixcbiAgICAgIDEzMCxcbiAgICAgIDIxMSxcbiAgICAgIDE4OCxcbiAgICAgIDEyNyxcbiAgICAgIDgyLFxuICAgICAgMTY5LFxuICAgICAgMjA3LFxuICAgICAgMjI4LFxuICAgICAgNjgsXG4gICAgICAxMDAsXG4gICAgICAxNTIsXG4gICAgICA0LFxuICAgICAgMjM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZLWlQ2WEEzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDYxMTQxNDM3OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUnVrYXlhdCBBbGltaVwiLFxuICAgIFwibGlkXCI6IFwiMTE3ODU1NDEzMTY2NTU6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXJncCs4REVLakcvTE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxbS84U0dWaCtxWUpPZHRtSExjYkcwV1BVRGdwdE9jQmVPTS83aENNYlNrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktrWVhmVTlMRkN2MEdqQjlQR2ZkL2VLR2xRLzVLRTMwd2pHMGNQOVFFMGhvZmlkWFg2b25sbE1HbUVKcXZVeko0eTBzbDQyMDh5WXNhemNjNThTQUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZhRk9WSTJpU0lZOUVQWVI2bG5OT1dFVkNPOW5EYnJScnRqK2dTYnZuWjZJMHRvNHR2ZDZycmlaU3NzZGlvWTc0K29kMUUzaWQ1Q0dqajZlS05DZmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjExNDE0Mzc6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NjA4MTA3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRS9uXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFL24uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
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
