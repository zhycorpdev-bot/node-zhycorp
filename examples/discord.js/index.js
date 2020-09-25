const { ZhycorpWrapper } = require("node-zhycorp");
const Zhycorp = new ZhycorpWrapper();
const { Client, MessageEmbed } = require("discord.js");
const client = new Client();

client.on("ready", () => {
    console.log(`${client.user.tag} is ready!`);
});

client.on("message", async (message) => {
    if (!message.guild || message.author.bot) return;
    const prefix = "!";
    const args = message.content.substring(prefix.length).split(/ +/g);
    const command = args.shift();

    if (command === "zhycorp") {
        const user = message.mentions.users.first() || await client.fetchUser(args[0]);
        if (!user || !user.bot) return message.channel.send("Please mention a bot");
        const result = await Zhycorp.getBot(user.id);
        if (!result) return message.channel.send("That bot is not registered on Zhycorp database");
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor("Zhycorp Bot Informations")
            .addField("Bot Information", `\`\`\`\nBot Name: ${user.tag}\nBot ID: ${user.id}\nPrefix: ${result.prefix}\n\`\`\``)
            .addField("Owner Information", `\`\`\`\nOwner Name: ${result.owner.userTag}\nOwner ID: ${result.owner.userID}\n\`\`\``)
            .setFooter("Powered by node-zhycorp", "https://api.zhycorp.xyz/assets/images/logo.png");
        return message.channel.send(embed);
    }
});