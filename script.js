const hubs = [
{
 title:"StarHub",
 image:"images/banner.png",
 icon:"⭐",
 category:"Characters",
 description:"Star's character collection.",
 status:"Live",
 url:"https://characterhub.pages.dev/"
},
{
 title:"LunaHub",
 icon:"🌙",
 category:"Characters",
 description:"Luna's character collection.",
 status:"Live",
 url:"https://lunabrew.pages.dev/"
},
{
 title:"SharedHub",
 icon:"🤝",
 category:"Characters",
 description:"Shared StarBrew characters.",
 status:"Live",
 url:"https://starbrewshared.pages.dev/"
},
{
 title:"StarBrew Queue",
 icon:"📋",
 category:"Creative",
 description:"Track orders.",
 status:"Live",
 url:"https://starbrewart.pages.dev/"
},
{
 title:"Star's Commissions",
 icon:"🍨",
 category:"Creative",
 description:"Commission info.",
 status:"Live",
 url:"https://starsundae.pages.dev/#order"
},
{
 title:"Random Generators",
 icon:"🎲",
 category:"Tools",
 description:"Creative generators.",
 status:"Live",
 url:"https://starbrewgenerator.pages.dev/"
},
{
 title:"Hearthling Hub",
 icon:"🧚",
 category:"World",
 description:"Browse Hearthlings.",
 status:"Live",
 url:"https://hearthlings.pages.dev/"
},
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
card.innerHTML = `

<div class="card-image">

    <img src="${h.image}" alt="${h.title}">

</div>

<div class="icon">

    ${h.icon}

</div>

<h3>${h.title}</h3>

<div class="desc">

    ${h.description}

</div>

<span class="badge">

    ${h.status}

</span>

<a class="open" href="${h.url}">

    Open

</a>

`;
   grid.appendChild(card);
 });
 container.appendChild(section);
});

// Future:
// hubs.push({title:"LoreHub",icon:"📚",category:"World",description:"...",status:"Coming Soon",url:"#"});
// render by simply reloading.
