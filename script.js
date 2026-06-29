const hubs = [
{
 title:"StarHub",
 icon:"⭐",
 category:"Characters",
 description:"Main character profiles and galleries.",
 status:"Live",
 url:"#"
},
{
 title:"LunaHub",
 icon:"🌙",
 category:"Characters",
 description:"Luna's character collection.",
 status:"Live",
 url:"#"
},
{
 title:"SharedHub",
 icon:"🤝",
 category:"Characters",
 description:"Shared StarBrew characters.",
 status:"Live",
 url:"#"
},
{
 title:"StarBrew Queue",
 icon:"📋",
 category:"Creative",
 description:"Commission progress tracker.",
 status:"Live",
 url:"#"
},
{
 title:"StarSundae Commissions",
 icon:"🍨",
 category:"Creative",
 description:"Commission information and request form.",
 status:"Live",
 url:"#"
},
{
 title:"Random Generators",
 icon:"🎲",
 category:"Tools",
 description:"Creative generators for characters and ideas.",
 status:"Live",
 url:"#"
},
{
 title:"Hearthling Hub",
 icon:"🧚",
 category:"World",
 description:"Browse Hearthlings and lore.",
 status:"Live",
 url:"#"
},
{
 title:"Orphanage + Adoption Center",
 icon:"🏡",
 category:"World",
 description:"Browse available adopts and adoptions.",
 status:"Live",
 url:"#"
}
];

const container=document.getElementById("portal");
const categories=[...new Set(hubs.map(h=>h.category))];

categories.forEach(cat=>{
 const section=document.createElement("section");
 section.className="section";
 section.innerHTML=`<h2>${cat}</h2><div class="grid"></div>`;
 const grid=section.querySelector(".grid");
 hubs.filter(h=>h.category===cat).forEach(h=>{
   const card=document.createElement("div");
   card.className="card";
   card.innerHTML=`
     <div class="icon">${h.icon}</div>
     <h3>${h.title}</h3>
     <div class="desc">${h.description}</div>
     <span class="badge">${h.status}</span>
     <a class="open" href="${h.url}">Open</a>
   `;
   grid.appendChild(card);
 });
 container.appendChild(section);
});

// Future:
// hubs.push({title:"LoreHub",icon:"📚",category:"World",description:"...",status:"Coming Soon",url:"#"});
// render by simply reloading.
