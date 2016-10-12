var locationDots = [];
var mapContainer = document.getElementById('draggable');
var zoomOut = document.getElementById('zoom-out');
var zoomIn = document.getElementById('zoom-in');
var currentZoom = 1;
var zoomFactor = .25;
var isDown = false;
var windowWidth = window.innerWidth;
//faction logos

//The dots array holds all of the objects for the location data on the map.
var dots = [
    {
    name: 'error',
    faction: 'images/errorIcon.png',
    title: 'Unexplored Areas',
    blurb: 'Here there be untold dangers that you may never live to see.'
},
{
    name: 'newAsh',
    faction: 'images/forsaken-logo.png',
    title: 'New Ashkelon',
    blurb: 'The central hub of human civilization, New Ashkelon is the largest city anywhere on Samaria and home to the Prevailer Council. The highest echelons of leadership within the Forsaken monitor the progress of humanity through their strict theocratic rule, but what they lack in flexibility they make up for in devotion and industriousness. Walled in all sides to keep the threats of the world away, the main gates at the east and west lead to the Lord’s Way road, kept under guard at all times – especially with the recent rise in local alien and robot threat sightings.',
    modelThumb0: 'images/models/flock-Thumb.png',
    modelThumb1: 'images/models/Isaac-Thumb.png',
    modelPhoto0: 'images/models/flock-Photo.png',
    modelPhoto1: 'images/models/isaac-Photo.png',
},
{
    name: 'cBarrow',
    faction: 'images/outcast-logo.png',
    title: 'Chains Barrow',
    blurb: 'The filthy Outcast hive of the slavers, Chains Barrow is a frontier town that lives by the simple rule of “Might makes Right” under the ironfisted tyranny of the Warden and his inner circle. The center of this dingy sprawl is dominated by the Pits, a series of sunken arenas around a single raised coliseum where fights between gladiators, slaves and beasts entertain audiences. For the right amount of bludgeld, anything – or anyone – can be arranged for purchase in Chains Barrow.',
    modelThumb0: 'images/models/chainGangers-Thumb.png',
    modelThumb1: 'images/models/warden-Thumb.png',
    modelPhoto0: 'images/models/chainGangers-Photo.png',
    modelPhoto1: 'images/models/warden-Photo.png',
},
{
    name: 'isuzaDynamics',
    faction: 'images/core-logo.png',
    title: 'Isuza Dynamics',
    blurb: 'The Isuza Dynamics compound, all seventeen subterranean stories of it, is the home of the twisted, chaotic, mechanical hive of the C.O.R.E. central AI. Expanding through a web of tunnels and excavated ruins, the robotic threat appears seemingly at random throughout its widened territory. Groups of tireless mechanoid resource gatherers seek, disassemble, and repurpose anything they can get their manipulators on, whether it is the unearthed frame of an old factory, or the essential bio-matter of living things to use as fuel in their entropic cell batteries!',
    modelThumb0: 'images/models/icon-Thumb.png',
    modelThumb1: 'images/models/grotesque-Thumb.png',
    modelPhoto0: 'images/models/icon-Photo.png',
    modelPhoto1: 'images/models/grotesque-Photo.png',
},
{
    name: 'sanguinePlateau',
    faction: 'images/dragyri-logo.png',
    title: 'Sanguine Plateau',
    blurb: 'It was here that the Dragyri forces of Luck’kit’kaii historically battled against Saint Mark and his followers, creating the longest standing vendetta between the two races. It is held as a sacred reminder of the “cowardice and treachery” of Those-Without-Honor, and is visited often by Dragyri during meditative spirit-journeys when they are seeking answers from the past.',
    modelThumb0: 'images/models/luck-Thumb.png',
    modelThumb1: 'images/models/mark-Thumb.png',
    modelPhoto0: 'images/models/luck-Photo.png',
    modelPhoto1: 'images/models/mark-Photo.png',
},
{
    name: 'fringeTown',
    faction: 'images/outcast-logo.png',
    title: 'Fringe Town and Freeton',
    blurb: 'While Fringe Town is larger and more populated than its neighbor, both of these trading ports are heavily traveled by scavengers looking to offload their wasteland hauls. Fringe Town is run by a triad of tribal chieftains with profits and survival in mind, but the mining town of Freeton and its primarily Brute populace is unquestioningly governed by the Judge – a charismatic and commanding Brute chieftain that aims to raise his people to never-before-seen heights. Travelers and traders know the area around these towns all too well, and slavers know to always be wary of the Judge’s musclebound marshals!',
    modelThumb0: 'images/models/warchief-Thumb.png',
    modelThumb1: 'images/models/brutes-Thumb.png',
    modelPhoto0: 'images/models/warchief-Photo.png',
    modelPhoto1: 'images/models/brutes-Photo.png',
},
{
    name: 'ibc',
    faction: 'images/brood-logo.png',
    title: 'IBC Central Ruins ',
    blurb: 'The site of the ancient Invotsroysket Belvonkrastonmyor Clenvisteri bio-chemical engineering facility has long been swallowed up by the Blackmire swamps. These predatory wetlands are home to the Brood Mere and its many generations of genetically manipulated and forcibly-evolved horrors. Recent sightings of strange new mutations in local populations as well as ravening reports from surveyors and scouts hint at something much more sinister taking place behind the steamy curtain of foliage…',
    modelThumb0: 'images/models/jellybean-Thumb.png',
    modelThumb1: 'images/models/broodhound-Thumb.png',
    modelPhoto0: 'images/models/jellybean-Photo.png',
    modelPhoto1: 'images/models/broodhound-Photo.png',
},
{
    name: 'fortRetribution',
    faction: 'images/skarrd-logo.png',
    title: 'Fort Retribution',
    blurb: 'The feared and infamous Father Johann, once the heretic Saint Johann, made this ancient crashed starship into his base of operations for his sadistic followers. As time has progressed he has turned the hulking refuge of bent metal and chemical storage into the seed of his ultimate goal – to gather all the Skarrd cults and the Baniss tribes under his banner before forging a dark crusade against the Prevailers and their Forsaken pawns.',
    modelThumb0: 'images/models/fatherJohann-Thumb.png',
    modelThumb1: 'images/models/juggernaut-Thumb.png',
    modelPhoto0: 'images/models/FatherJohann-Photo.png',
    modelPhoto1: 'images/models/juggernaut-Photo.png',
},
{
    name: 'dCaverns',
    faction: 'images/dragyri-logo.png',
    title: 'Dragyri Caverns and Spires ',
    blurb: 'The craggy and broken West Hills are honeycombed with the ancient tunnels, subterranean cavern-villages, and rocky spire aeries of the Dragyri, most notably those of the Ice and Air Castes. It is unfriendly territory for non-Dragyri in the hills, especially anyone who dares enter the crystalline expanse of their homes. With the recent appearance of the Shadow Caste from the depths, new territorial sigils mark certain caverns that even other Dragyri rarely traverse. Despite the glittering treasure of xenosathic crystals found throughout the area, the West Hills go mostly untraveled by mankind.',
    modelThumb0: 'images/models/yovanka-Thumb.png',
    modelThumb1: 'images/models/strega-Thumb.png',
    modelPhoto0: 'images/models/yovanka-Photo.png',
    modelPhoto1: 'images/models/strega-Photo.png',
},
{
    name: 'k3Expansions',
    faction: 'images/k3-logo.png',
    title: 'Kukulkani Expansion',
    blurb: 'After the Kukulkani starship burned through the atmosphere and landed in the southeast foothills, the life-reaping alien invaders immediately began to set up towering ziggurats and pylons of advanced technology all around. Within just a few weeks of raiding local settlements to feed bio-energy into the mechanisms, the terraforming had begun. The peaty hills have been transformed into a wet, hot, jungle where the Children of Kukulkan plan their conquest and build their Samarian empire. Their teleporting “void roads” allow them to appear anywhere within their growing terraforming project, turning the whole area into a potential ambush around every corner.',
    modelThumb0: 'images/models/cabrakan-Thumb.png',
    modelThumb1: 'images/models/ixchel-Thumb.png',
    modelPhoto0: 'images/models/cabrakan-Photo.png',
    modelPhoto1: 'images/models/ixchel-Photo.png',
},
{
    name: 'talen',
    faction: 'images/outcast-logo.png',
    title: 'Talen',
    blurb: 'The small industry town of Talen sits in a shallow join of the river of the same name, giving the populace access to tiny xenosathic crystal particles flowing down from the West Hills. Combined with thickly rich copper veins in the nearby valleys, and the well-trusted Bladesmiths of Talen are known for their ability to create weaponry from a xenosathic copper alloy that is sturdier than steel and connects with the wielder’s native psychogenic potential, if any. Talen is frequented by many Baniss tribals because of this, and is rumored to be the supplier of Father Johann’s Skarrd armies.',
    modelThumb0: 'http://placehold.it/100x100/333333',
    modelThumb1: 'http://placehold.it/100x100/aeaeae',
    modelPhoto0: 'http://placehold.it/750x500',
    modelPhoto1: 'http://placehold.it/750x500',
},
{
    name: 'citadel',
    faction: 'images/fire-caste-logo.png',
    title: 'Volcanic Citadel ',
    blurb: 'The sprawling home of the Fire Caste and the secret hideaway of the last living Alteghrans, the Volcanic Citadel is a network of basalt towers and magma-carved caverns where Rath’Zhi rules his people. Massive storage warehouses and engineering labs are scattered throughout to keep the Fire Caste well-armed with advanced weaponry. After the destruction of one of the Arbiter’s personal arms caches by Saint Luke, platoons of soldiers patrol for miles around to keep the Citadel safe from further trespass. Lava flows, ash, and Fire Caste Dragyri are all you will find in these black mountains.',
    modelThumb0: 'images/models/inferno-Thumb.png',
    modelThumb1: 'images/models/embers-Thumb.png',
    modelPhoto0: 'images/models/inferno-Photo.png',
    modelPhoto1: 'images/models/ember-Photo.png',
},
{
    name: 'trent',
    faction: 'images/outcast-logo.png',
    title: 'Trent',
    blurb: 'A popular trading post-turned-frontier city, Trent is sometimes home to the infamous Warlord Hoj and his closest associates during the times of the year when his scavengers are not actively out in the world. Outside of New Ashkelon it is considered to be the greatest center for human civilization even with its seedy taverns, high levels of street violence, and general lawlessness. Ironically, many bounty hunters maintain their offices in Trent instead of New Ashkelon in order to avoid being judged – and taxed – by the Prevailers.',
    modelThumb0: 'images/models/mongo-Thumb.png',
    modelThumb1: 'images/models/hoj-Thumb.png',
    modelPhoto0: 'images/models/mongo-Photo.png',
    modelPhoto1: 'images/models/hoj-Photo.png',
},
{
    name: 'crashSite',
    faction: 'images/outcast-logo.png',
    title: 'Long Haul Crash Site ',
    blurb: 'Here lays the crashed pirate starship Long Haul, formerly captained by the bounty hunter Jake Flay. Local swamp-folk have revealed the formerly submerged vessel has been pulled from the depths to be half-exposed just south of the Forked Tongue Delta. In another mysterious turn, reports say the ship and the island it rests against are suddenly crawling with Brood creatures, begging the question… what can the Brood Mere possibly want with a starship? ',
    modelThumb0: 'images/models/flay-Thumb.png',
    modelPhoto0: 'images/models/flay-Photo.png',
}
];

//get the name attribute of the location element
function getNameInfo(n) {
    for (var i = 1; i < dots.length; i++) {
        var x = dots[i].name;
        if (x == n) {
            console.log('success');
            renderInformation(dots[i]);
        } else if (i >= dots.length) {
            console.log('no match');
            renderInformation(dots[0]);
        }
    }
}
//render the info to the DOM
function renderInformation(obj) {
    //take the object
    //split it into the proper data
    var title = obj.title;
    var blurb = obj.blurb;
    var faction = 'url(' + obj.faction + ')';
    var thumb0 = obj.modelThumb0;
    var thumb1 = obj.modelThumb1;
    var image0 = obj.modelPhoto0;
    var image1 = obj.modelPhoto1;

    //render each piece to the DOM
    if (title != null) {
        console.log(faction);
        document.getElementById('modelContainer').children[1].style.display = 'flex';
        document.getElementById('location-faction').style.backgroundImage = faction;
        console.log(document.getElementById('location-faction').style.backgroundImage);
        document.getElementById('location-title').innerHTML = title;
        document.getElementById('location-blurb').innerHTML = blurb;
        // document.getElementById('modelContainer').children[0].style.backgroundImage = image0;
        // document.getElementById('modelContainer').children[1].style.backgroundImage = image1;
        // document.getElementById('modelContainer').children[2].style.backgroundImage = image2;

        document.getElementById('modelContainer').children[0].innerHTML = '<a href="' + image0 + '" data-lightbox="stuff"><img src="' + thumb0 + '" alt=""></a>';
        if(image1 != null){
            document.getElementById('modelContainer').children[1].innerHTML = '<a href="' + image1 + '" data-lightbox="stuff"><img src="' + thumb1 + '" alt=""></a>';
        }else{
            document.getElementById('modelContainer').children[1].style.display = 'none';
        }
        console.log(document.getElementById('modelContainer').children[0].innerHTML);
    } else {
        //if the Object is unknown or the key is missing replace with some dummy text
        console.log('unknown')
        document.getElementById('location-title').innerHTML = "Danger!"
        document.getElementById('location-blurb').innerHTML = "Unknown Location. Send Recon unit soon"
    }


}
//change the Zoom Level
function updateZoom(factor) {
    currentZoom += factor;
    console.log('hello');
    if (currentZoom < .45) {
        currentZoom = .45;

    }
    if (currentZoom > 1.5) {
        currentZoom = 1.5;
    }
    mapContainer.style.transform = 'scale(' + currentZoom + ')';
}
//Toggle the Menu
function openMenu() {
    console.log('Open the Menu!');
    $('.info-panel').removeClass('menu-closed');
    $('.zoom-menu').removeClass('zoom-closed');
    $('.info-panel').addClass('menu-open');
    $('.zoom-menu').addClass('zoom-open');
    $('.menu-collapse').find('i').removeClass('fa-bars');
    $('.menu-collapse').find('i').addClass('fa-arrow-right');
    isDown = false;
}

function closeMenu() {
    console.log('Close the Menu!');
    $('.info-panel').removeClass('menu-open');
    $('.zoom-menu').removeClass('zoom-open');
    $('.info-panel').addClass('menu-closed');
    $('.zoom-menu').addClass('zoom-closed');
    $('.menu-collapse').find('i').removeClass('fa-arrow-right');
    $('.menu-collapse').find('i').addClass('fa-bars');
    isDown = true;
}

function toggleMenuLeft() {
    if (!isDown) {
        closeMenu();
    } else {
        openMenu();
    }
};
//reset the menu on resize
function resetMenu() {
    if (window.innerWidth <= 800) {
        console.log("Itty Bitty Living Space");
        openMenu();
        // mapCenter();
    }
}

function classReset() {
    document.getElementById('down-arrow').classList.remove('animated', 'flash');
}

function popUp(){

}

$(document).ready(function() {

    //Handle the clicking of the dots on the Map
    $('.location-dot').click(function() {
        var name = this.getAttribute("name");
        getNameInfo(name);
        if (isDown) {
            toggleMenuLeft();
        }
        document.getElementById('down-arrow').classList.add('animated', 'flash');
        window.setTimeout(classReset, 500);

    });

    //Makes the map draggable.
    $('#draggable').draggable();


    //Zoom Navigation code
    zoomOut.addEventListener("click", function() {
        updateZoom(-zoomFactor);
    });
    zoomIn.addEventListener("click", function() {
        updateZoom(zoomFactor);
    });

    // Menu Options
    document.getElementById('menu-collapse').addEventListener('click', toggleMenuLeft);

    // catch resize and reset the menu
    window.addEventListener('resize', resetMenu);
    document.getElementById('down-arrow').addEventListener('click', function() {
        this.addClass('animated bounce')
    });
});
