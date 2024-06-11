module.exports.config = {
    name: "autotime",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "msg",
  prefix: true, 
  category: "user", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};
const nam = [{
    timer: '12:00:00 AM',
    message: ['𝗯𝗼𝗻 𝗮𝗽𝗿𝗲𝘀 𝗺𝗶𝗱𝗶 😀']
},
             {
    timer: '1:00:00 AM',
    message: ['𝗯𝗻8']
},
            {
    timer: '20:00:00 PM',
    message: ['𝘀𝗮𝗹𝘂𝘁,𝘀𝘃𝗽 𝗮𝗷𝗼𝘂𝘁𝗲𝗿 𝗺𝗼𝗶 𝗱𝗮𝗻𝘀 𝘃𝗼𝘀 𝗴𝗿𝗼𝘂𝗽𝗲']
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};
