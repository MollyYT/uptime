const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const istatistikler = new Discord.MessageEmbed()
  .addField(`:incoming_envelope: » Yapımcım` ,`MollyYT#8122`,true)
  .addField(`:label: » Node.js`, `${process.version}`, true)
 .addField(`:bar_chart: » Kanal Sayısı`, `${client.channels.cache.size  }`, true)
 .addField(`:postbox: » Kullanıcı Sayısı`, `${client.users.cache.size}`, true)
 .addField(`:envelope: » Sunucu Sayısı`, `${client.guilds.cache.size}`, true)
 .addField(`» Linkler`, `[Davet Et](https://discord.com/oauth2/authorize?client_id=909113832612450385&scope=bot&permissions=2108157183)`+ "** | **" + `[Destek Sunucusu](https://discord.gg/X2fwnsuvEn)`  + "** | **" + `[Dc Sunucum](https://discord.gg/X2fwnsuvEn)`  + "** | **" + `[yapımcım](MollyYT#8122  `, false)
  message.channel.send(istatistikler)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'Otorol sistemini ayarlamaya yarar.',
  usage: '-otorol-ayarla @rol #kanal'
}; 
