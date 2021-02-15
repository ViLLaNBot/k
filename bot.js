
const Discord = require('discord.js');

const client = new Discord.Client();




client.on('ready', () => {
    console.log(`${client.user.username} Has Been Started`);
});







client.on('message', async message => {
    
    let prefix = process.env.BOT_PREFIX;
   
    
    let args = message.content.slice(prefix.length).trim().split(' ');
    
    
    let cmd = args.shift().toLowerCase();
    
    
    if (message.channel.type == "dm") {
       
        console.log(`${message.author.tag} Said ${message.content}`);
        
    }
   
if (message.channel.type == "text") {
    var permdenyEmbed = new Discord.RichEmbed()
.setColor('#ff4d4d')
 .setDescription(`<@${message.author.id}>, Sorry, you don't meet the permission level for this command!`)
.setTitle('Permission Denied!')
    
    var noMention = new Discord.RichEmbed()
.setColor('#ff4d4d')
 .setDescription(`<@${message.author.id}>, The User that you mentioned was not found!`)
.setTitle('User Not Found!')
    
   
        
         
   function function1() {
    
}
 
    if (message.author.id == 000) {
       
       setTimeout(function1, 3000);
      
    }
  
    
    if (message.content.startsWith(prefix))  {
     if (cmd == 'warn') {
         
         message.delete().catch();
       let reportchannel = message.guild.channels.find(c => c.name === "logging");
          if (!message.member.hasPermission(['KICK_MEMBERS'])) return message.channel.sendEmbed(permdenyEmbed);
         let mUser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
         if(!mUser) return message.reply("Couldn't find that user!");
         let dmMsg = args.join(" ").slice(22);
         mUser.send(`You have been warned for ${dmMsg}`);
        
           var SuccessWarn = new Discord.RichEmbed()
.setColor('#99ff66')
 .setDescription(`${mUser.username} Has been warned!`)
.setTitle('User Has Been Warned!')
         
         var warnlogembbed = new Discord.RichEmbed()
         .setDescription('Warning')
         .addField(`this is a test`, `this is a test`)
         .addField("fisrst value", "secound value")
         .setColor('#edc607')
         message.channel.sendEmbed(SuccessWarn);
          reportchannel.sendEmbed(warnlogembbed);
      
       
 
}
        
        
        // announcements
        if (cmd == 'announce') {
            message.delete().catch();
            if (!message.member.roles.find("name", "Trusted ViLLaN Clan Member")) return message.channel.sendEmbed(permdenyEmbed);
            let arg = args.join(" ").slice(0);
            if (!arg) return;
            let channel = message.guild.channels.find(c => c.name === "announcements");
            if (!channel) return;
            var announcement = new Discord.RichEmbed()
            .setTitle('An Announcement was made!')
            .setDescription(`This announcement was made by <@${message.author.id}>`)
            .addField('Author',`<@${message.author.id}>`)
            .addField('Message',arg)
            .setColor('#c42b17')
             channel.sendEmbed(announcement).then(msg => {
             msg.react('<:ViLLaNLogo:509792407307681827>');

            }); 
        }
        
        
          if (cmd == 'rules') {
               message.delete().catch();
               var rules = new Discord.RichEmbed()
       .setAuthor(message.author.username,message.author.avatarURL)
               .setTitle('VILLaN Hangout Rules')
               .setDescription('1. No Swearing\n2. No Cyber Bullying\n3. No Harassment\n4. No begging\n5. Do not spam or use selfbots.\n6. Do not be mad if u get a warning which can lead you to an another warning')
               .setImage('http://villanclan.ga/assets/images/villanrules.png')
               .setThumbnail('http://villanclan.ga/assets/images/ViLLaNLogo.png')
               .setColor('#edc607')
               var inforules = new Discord.RichEmbed()
       
               .setTitle('VILLaN Hangout Punishments')
            
               .addField('Warning','Break a rule.',true)
               .addField('Ban-7 Days','Get your 3rd warning.',true)
               .addField('Ban-30 Days','Get your 9th warning.',true)
                .addField('Ban- Permanent','Get your 18th warning.',true)
               .setThumbnail('http://villanclan.ga/assets/images/ViLLaNLogo.png')
             
               
               message.channel.sendEmbed(rules)
              message.channel.sendEmbed(inforules)
              }
        
         if (cmd == 'help') {
         message.delete().catch();
              
       var everyonecommand = new Discord.RichEmbed()
       .setTitle('Command List - Everyone')
         .setDescription('Commands That Everyone Can User')
       .addField(`${prefix}rules`, `Shows rules`)
         .addField(`${prefix}help`, `Shows list of commands`)
        .addField(`${prefix}report {user} {reason}`, `Reports The mentioined user!`)
       .addField(`${prefix}userinfo {user}`, `Get a user's info!`)
        .addField(`${prefix}apply\n${prefix}apply promotion`, `Apply to become a ViLLaN!\nAsk for a promotion!`)
       var admincommand = new Discord.RichEmbed()
       .setTitle('Command List - Administators')
         .setDescription('Commands That Only Administrators Can Use')
         .addField(`${prefix}warn {user} {reason}`, `Warns a user!`)
        .addField(`${prefix}reply {user} {message}`, `Sends Private Message to users - Used For Support Tickets`)
       var supportommand = new Discord.RichEmbed()
       .setTitle('Command List - Support Commands')
         .setDescription('Commands That Only Administrators Can Use')
         .addField(`${prefix}suggest {suggestion}`, `Suggest a feature!`)
        .addField(`${prefix}contant {message}`, `Sends a Support Ticket`)
        message.channel.sendEmbed(everyonecommand)
             message.channel.sendEmbed(supportommand)
             message.channel.sendEmbed(admincommand)
}
        // User Info args : user(optional)
          if (cmd == 'userinfo') {
             
              if (message.content == `${prefix}userinfo`) {
             var embedinfouser1 = new Discord.RichEmbed()
             .setTitle(message.author.username)
             
             .addField(`Bot User`, message.author.bot ,true)
             .addField(`Joined At`, message.member.joinedAt ,true)
              .addField(`Nickname`, `${message.member.nickname !== null ? `${message.member.nickname}` : "No Nickname"}` ,true)
             .addField(`Created Account`, message.author.createdAt ,true)
             message.channel.sendEmbed(embedinfouser1)
            }
               
              let mUser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
         if(mUser) {
             var embedinfouser2 = new Discord.RichEmbed()
             .setTitle(mUser.user.username)
             
             .addField(`Bot User`, mUser.user.bot ,true)
             .addField(`Joined At`, mUser.joinedAt ,true)
              .addField(`Nickname`, `${mUser.nickname !== null ? `${mUser.nickname}` : "No Nickname"}` ,true)
             .addField(`Created Account`, mUser.user.createdAt ,true)
             message.channel.sendEmbed(embedinfouser2)
             
            } 
              
               } 
          }
         if (cmd == 'reply') {
         message.delete().catch();
      
          if (!message.member.roles.find("name", "ViLLaN Support")) return message.channel.sendEmbed(permdenyEmbed);
           let mUser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
         if(!mUser) return message.channel.sendEmbed(noMention)
         let dmMsg = args.join(" ").slice(22);
              if(!dmMsg) return;
              var newMsg = new Discord.RichEmbed()
           
.addField(`**A message was reviced!**`,`This message was sent by <@${message.author.id}>`)
              .setTitle('An Admin has replied!')
            .addField(`**The Admin said**`,dmMsg)
            .setAuthor(message.author.tag,message.author.avatarURL)
           
            .addField(`Want more help?`,`Use ?contact to send us a message`);
           
         mUser.sendEmbed(newMsg);
      
         
         
      
        
}
    //application
if (cmd == 'apply') {
    let hidddentext1 =  process.env.HIDDENTEXT1
     let hidddentext2 =  process.env.HIDDENTEXT2
     
   let arg = args[0];
   message.delete().catch();
   if (!arg) {
    
    var infomationquestion1 = new Discord.RichEmbed()
    .setTitle('Question 1')
    .setDescription("When you join this clan you agree to accept and help your teammates and that you will help your team.\nWhen your friend is knocked you help them and try your best.\n If you get timeout or kicked  from the clan you do not whine.\nand any of the rules on discord!\n\nAnd if anyone of thees simple rules are broken u can get a timeout from the clan.")
    .addField('Do You Accept?','Respond With:\n1. YES\n2. NO')
    const question1 = await message.member.sendEmbed(infomationquestion1);
  

  
var firstQuestion;
var secondQuestion;
var thirdQuestion;
var fourthQuestion;


await question1.channel.awaitMessages(msg => msg.author === message.author, { max: 1 }).then(msg => {firstQuestion = msg.first().content });

if (firstQuestion == !hidddentext2) {
   let hidddentext3 =  process.env.HIDDENTEXT3
   
firstQuestion = hidddentext3
}


var infomationquestion2 = new Discord.RichEmbed()

.setTitle('Question 2')
.setDescription("If your team is dying.")
.addField('What would you do?','1. Help Them\n2. Get out of the situation and leave them')

message.author.sendEmbed(infomationquestion2)
await question1.channel.awaitMessages(msg => msg.author === message.author, { max: 1 }).then(msg => {secondQuestion = msg.first().content });

var infomationquestion3 = new Discord.RichEmbed()

.setTitle('Question 3')
.setDescription("Whats your skill(s)?")
.addField('Example','Aiming,This is a example.')
message.author.sendEmbed(infomationquestion3)

await question1.channel.awaitMessages(msg => msg.author === message.author, { max: 1 }).then(msg => {thirdQuestion = msg.first().content });

var infomationquestion4 = new Discord.RichEmbed()

.setTitle('Question 4')
.setDescription("Whats your email?")
.addField('Example','example@villanclan.epizy.com')
message.author.sendEmbed(infomationquestion4)
await question1.channel.awaitMessages(msg => msg.author === message.author, { max: 1 }).then(msg => {fourthQuestion = msg.first().content });
       if (question1.includes('@')) return;
let reportchannel = message.guild.channels.find(c => c.name === "applications");
var application = new Discord.RichEmbed()
.setColor('#fff000')

.setAuthor(message.author.tag,message.author.avatarURL)
.setDescription(`<@${message.author.id}> Has Submitted an application!`)
.addField('Rules',firstQuestion,true)
.addField('If your team is dying?',secondQuestion,true)
.addField('Skills',thirdQuestion,true)
.addField('Email',fourthQuestion,true)
.setTitle('An Application Was Submited')

var sent = new Discord.RichEmbed()

.setTitle('Your Application Has been sent!')
.setDescription("Your Application has been sent to the admins!")
reportchannel.sendEmbed(application)
message.author.sendEmbed(sent)
}
if (arg.toLowerCase() == 'promotion') {
    if (!message.member.roles.find("name", "ViLLaN Clan Members")) return message.channel.sendEmbed(permdenyEmbed);
    var infomationquestion1 = new Discord.RichEmbed()
    .setTitle('Question 1')
    .setDescription("Which rank do you want to be promoted to?")
    
    const question1 = await message.member.sendEmbed(infomationquestion1);
  

  
var firstQuestion;
var secondQuestion;
var thirdQuestion = hidddentext1;
var fourthQuestion;


await question1.channel.awaitMessages(msg => msg.author === message.author, { max: 1 }).then(msg => {firstQuestion = msg.first().content });




var infomationquestion2 = new Discord.RichEmbed()

.setTitle('Question 2')
.setDescription("Why shall you be promoted?")

message.author.sendEmbed(infomationquestion2)
await question1.channel.awaitMessages(msg => msg.author === message.author, { max: 1 }).then(msg => {secondQuestion = msg.first().content });

var infomationquestion3 = new Discord.RichEmbed()

.setTitle('Question 3')
.setDescription("Why shall we trust you?")
if (!message.member.roles.find("name", "Trusted ViLLaN Clan Member")) {
message.author.sendEmbed(infomationquestion3)

await question1.channel.awaitMessages(msg => msg.author === message.author, { max: 1 }).then(msg => {thirdQuestion = msg.first().content });
if (!thirdQuestion.toLowerCase() == hidddentext1.toLowerCase()) return;

var infomationquestion4 = new Discord.RichEmbed()

.setTitle('Question 4')
.setDescription("Whats your email")
.addField('Example','example@villanclan.epizy.com')
message.author.sendEmbed(infomationquestion4)
}

if (message.member.roles.find("name", "Trusted ViLLaN Clan Member")) {
var infomationquestion4 = new Discord.RichEmbed()

.setTitle('Question 3')
.setDescription("Whats your email")
.addField('Example','example@villanclan.epizy.com')
message.author.sendEmbed(infomationquestion4)
}

await question1.channel.awaitMessages(msg => msg.author === message.author, { max: 1 }).then(msg => {fourthQuestion = msg.first().content });
let reportchannel = message.guild.channels.find(c => c.name === "applications");
var application = new Discord.RichEmbed()
.setColor('#fff000')

.setAuthor(message.author.tag,message.author.avatarURL)
.setDescription(`<@${message.author.id}> Has Submitted an promo applcation!`)
.addField('Role',firstQuestion,true)
.addField('Reason',secondQuestion,true)
.addField('Why Shall we trust you?',thirdQuestion,true)
.addField('Email',fourthQuestion,true)
.setTitle('An applcation Was Submited')

var sent = new Discord.RichEmbed()

.setTitle('Your Application Has been sent!')
.setDescription("Your Application has been sent to the admins!")
reportchannel.sendEmbed(application)
message.author.sendEmbed(sent)
}
}
}
        
          if (cmd == 'setstatus') {
       
         message.delete().catch();
      
          if (!message.author.id == '289103193294503937') return message.channel.sendEmbed(permdenyEmbed);
         let arg = args[0];
             
      client.user.setStatus(arg)
       
         
      
       
 
}
         if (cmd == 'setactivity') {
         message.delete().catch();
      
          let type = args[0];
        let status_string = args.slice(1).join(" ");
             console.log(type)
             console.log(status_string)
      if (!message.author.id == '289103193294503937') return message.channel.sendEmbed(permdenyEmbed);;
             console.log('access')
      //  if (!type == "twitch" || !type == "music" || !type == "watch" || !type == "game") message.channel.send("`types: twitch - stream; music- listening; watch - watching; game - playing`");
        if (type == "twitch") {
            client.user.setPresence(status_string, {
                type: "STREAMING"
            });
           
        }
        if (type == "music") {
            client.user.setPresence(status_string, {
                type: "LISTENING"
            });
         
        }
        if (type == "watch") {
            client.user.setPresence(status_string, {
                type: "WATCHING"
            });
          
        }
        if (type == "game") {
            client.user.setPresence(status_string, {
                type: "PLAYING"
            });
          
        }
             
        
         
      
       
 
}
        // Suggestion Command
        if (cmd == 'suggest') {
         message.delete().catch();
      
          let reportchannel = message.guild.channels.find(c => c.name === "suggestions");
             let arg = args.join(" ").slice(0);
            if (!arg) return;
            var suggestion = new Discord.RichEmbed()
           
.addField(`**A suggestion was made!**`,`This suggestion was made by <@${message.author.id}>`)
            .addField(`**The suggestion is**`,arg)
            .setAuthor(message.author.tag,message.author.avatarURL)
            .setColor('#fff000')
            .addField(`Also want to give a suggestion?`,'Use the !suggestion command')
            .setFooter('This suggestion system was made by DOND check them out, https://discord.gg/heEWaJC','https://cdn.discordapp.com/icons/502912955415920661/4830b88da260265a950243ec94d19d37.webp')
            .setTimestamp(message.createdAt)
            
            
        reportchannel.sendEmbed(suggestion).then(msg => {
             msg.react('👎');
msg.react('👍');
            }); 
}



                                                 
            
            if (cmd == 'contact') {
         message.delete().catch();
                
               var nomsg = new Discord.RichEmbed()
.setColor('#ff4d4d')
 .setDescription(`<@${message.author.id}>, Please Insert a message!`)
.setTitle('No Message!')
      
          let reportchannel = message.guild.channels.find(c => c.name === "support-tickets");
             let arg = args.join(" ").slice(0);
            if (!arg) return message.channel.sendEmbed(nomsg);
            var ticket = new Discord.RichEmbed()
           
.addField(`**A support ticket was made!**`,`This support ticket was made by <@${message.author.id}>`)
            .addField(`**The message is**`,arg)
            .setAuthor(message.author.tag,message.author.avatarURL)
            .setColor('#fff000')
          //  .addField(`Also want to give a suggestion?`,'Use the !suggestion command')
          //  .setFooter('')
            var preview = new Discord.RichEmbed()
            .setDescription('Your ticket was sent to the support team!')
            .setColor('#99ff66')
            .setTitle('Your Support Ticket was sent!')
            .addField(`**Message**`,arg)
            .addField(`**Sent By**`,`<@${message.author.id}>`)
           
            
            var info = new Discord.RichEmbed()
             .setDescription('Your ticket has been sent to the support team!')
            .setColor('#99ff66')
            .setTitle('Your Support Ticket has been sent!')
            
        reportchannel.sendEmbed(ticket)
                 
                message.author.sendEmbed(preview)
            
}
          if (cmd == 'report') {
         message.delete().catch();
                
               var nomsg = new Discord.RichEmbed()
.setColor('#ff4d4d')
 .setDescription(`<@${message.author.id}>, Please Insert a reason!`)
.setTitle('No Reason!')
      
          let reportchannel = message.guild.channels.find(c => c.name === "reports");
             let arg = args.join(" ").slice(22);
               let mUser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
         if(!mUser) return message.reply("Couldn't find that user!");
              
            if (!arg) return message.channel.sendEmbed(nomsg);
            var ticket = new Discord.RichEmbed()
           
.addField(`**A report was made!**`,`This report was made by <@${message.author.id}>`)
            .addField(`**Reported user **`,`<@${mUser.id}>`)
            .addField(`**Reason**`,arg)
            .setAuthor(message.author.tag,message.author.avatarURL)
            .setColor('#fff000')
        
            var preview = new Discord.RichEmbed()
            .setDescription('Your report has been sent to the support team!')
            .setColor('#99ff66')
            .setTitle('Your Report has been sent!')
            .addField(`**Reason**`,arg)
            .addField(`**Reported By**`,`<@${message.author.id}>`)
            .addField(`**Reported User**`,`<@${mUser.id}>`)
           
            
            
            
        reportchannel.sendEmbed(ticket)
                 
                message.author.sendEmbed(preview)
            
}
  
});

client.login(process.env.BOT_TOKEN);
