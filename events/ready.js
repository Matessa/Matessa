const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "💼Geliştiricim💼 GloodMarg#8167",
        "Bakım Sona Erdi H.O ",
          "Üst Düzey Bir Aeron Bot Karşınızda",
          "Sistemleri Olabildiğince Geliştirdik",
          "Yepyeni Sistemler Eklendi",
          "Botda Bir Sorun Oluşursa a!bot menüsüne Bakmanız Yeterli",
            "Sunucularınız Artık Güvende",
            "Site Çok Yakında..."
  
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://www.twitch.tv/GloodMarg" );
        }, 2 * 3000);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setActivity(`| a!istatistik | bot bilgilerini gösterir.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};