const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'owner',
    description: 'Bot owner info',
    execute(message, args) {
        const youtubeLink = 'https://discord.gg/Sn93nSFggf';
        const InstagramLink = 'https://discord.gg/Sn93nSFggf';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' 🫅 Owner Info')
            .setDescription(`__**About me**__:\n 🤖 Myself IYYUB aka Dvrkgun. I am trying make discord bot's !\n ❤️ [Dvrkgn](${youtubeLink})\n 💙 [Try my server](${InstagramLink})`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};

/*

   MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   FOR EMOJIS EITHER YOU CAN EDIT OR JOIN OUR DISCORD SERVER 
   SO WE ADD BOT TO OUR SERVER SO YOU GET ANIMATED EMOJIS.

   DISCORD SERVER : https://discord.gg/FUEHs7RCqz
   YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A

   FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/c4kaW2sSbm ]
*/
