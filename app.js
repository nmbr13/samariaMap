var locationDots =[];
var mapContainer = document.getElementById('draggable');
var zoomOut = document.getElementById('zoom-out');
var zoomIn = document.getElementById('zoom-in');
var currentZoom = 1;
var zoomFactor = .25;
var isDown = false;
var windowWidth = window.innerWidth;
//The dots array holds all of the objects for the location data on the map.
var dots = [
    {
        name: 'error',
        title:'Unexplored Areas',
        blurb: 'Here there be untold dangers that you may never live to see.'
        },
    {
        name: 'dragyri-1',
        title: 'Air Caste Home',
        blurb: 'Beef tenderloin pancetta hamburger porchetta pork, pastrami pork loin chuck pork belly flank prosciutto ball tip. Shank alcatra cow filet mignon doner beef ball tip jowl kielbasa hamburger pork. Brisket beef tri-tip biltong porchetta chicken capicola short ribs bresaola filet mignon drumstick. Short loin capicola shoulder, doner bacon ribeye biltong shankle rump landjaeger. Short ribs tenderloin t-bone pork, pig short loin spare ribs turducken andouille. Turkey jowl strip steak, chuck tongue cupim ribeye pork loin sirloin andouille ham pork spare ribs bacon.',
        modelPhoto0: 'http://placehold.it/100x100/333333',
        modelPhoto1: 'http://placehold.it/100x100/aeaeae',
        modelPhoto2: 'http://placehold.it/100x100/444444',
        },
    {
        name: 'dragyri-2',
        title: 'Fire Caste Dungeon',
        blurb: 'Chicken tail pork chop jerky beef alcatra. Bresaola landjaeger shank, short loin jowl meatball beef porchetta doner ham hock bacon. Shank porchetta bacon ground round leberkas short ribs chuck ribeye. Jerky pastrami rump, meatloaf jowl boudin short loin pork belly picanha beef ribs bacon. Chicken ground round venison kevin. Meatloaf biltong shoulder, turducken turkey tail drumstick ground round prosciutto short ribs pork loin porchetta filet mignon',
        modelPhoto0: 'http://placehold.it/100x100/222222',
        modelPhoto1: 'http://placehold.it/100x100/ffffff',
        modelPhoto2: 'http://placehold.it/100x100/bbbbbb',
    },
    {
        name: 'dragyri-3',
        title: 'That other Place',
        blurb: 'Filet mignon bacon strip steak capicola ball tip chuck pork. Drumstick sirloin beef fatback, picanha porchetta ground round shank shoulder. Beef short loin spare ribs turkey pancetta picanha. Alcatra flank pig ribeye pastrami ham. Jowl t-bone tongue short ribs pork, sausage rump tri-tip shankle jerky turducken salami bacon. Pork loin corned beef cow meatball kevin fatback turducken kielbasa t-bone chicken short loin drumstick brisket jerky tri-tip. Venison boudin beef ribs shoulder, sirloin swine salami chicken meatloaf beef ball tip filet mignon t-bone.',
        modelPhoto0: 'http://placehold.it/100x100/777777',
        modelPhoto1: 'http://placehold.it/100x100/111111',
        modelPhoto2: 'http://placehold.it/100x100/555555',
    },
    {
        name: 'dragyri-4',
        title: 'The Ancient Ruins of Ben Al Durchenab',
        blurb: 'Drumstick short ribs salami alcatra bresaola, picanha cupim. Beef ribs brisket sirloin prosciutto biltong, ham hock jowl corned beef pork belly meatball shankle short ribs t-bone. Pancetta tail ribeye, pork loin ground round shank capicola alcatra prosciutto chicken tri-tip. Pork belly jowl capicola venison pork loin cow filet mignon ribeye pork chop.',
        modelPhoto0: 'http://placehold.it/100x100/888888',
        modelPhoto1: 'http://placehold.it/100x100/cccccc',
        modelPhoto2: 'http://placehold.it/100x100/eeeeee',
    },
    {
        name: 'dragyri-5',
        title: 'Brood Hive',
        blurb: 'Drumstick short ribs salami alcatra bresaola, picanha cupim. Beef ribs brisket sirloin prosciutto biltong, ham hock jowl corned beef pork belly meatball shankle short ribs t-bone. Pancetta tail ribeye, pork loin ground round shank capicola alcatra prosciutto chicken tri-tip. Pork belly jowl capicola venison pork loin cow filet mignon ribeye pork chop.',
        modelPhoto0: 'http://placehold.it/100x100/333333',
        modelPhoto1: 'http://placehold.it/100x100/dddddd',
        modelPhoto2: 'http://placehold.it/100x100/aaaaaa',
    },
    {
        name: 'dragyri-6',
        title: 'Recent Deaths',
        blurb: 'Drumstick short ribs salami alcatra bresaola, picanha cupim. Beef ribs brisket sirloin prosciutto biltong, ham hock jowl corned beef pork belly meatball shankle short ribs t-bone. Pancetta tail ribeye, pork loin ground round shank capicola alcatra prosciutto chicken tri-tip. Pork belly jowl capicola venison pork loin cow filet mignon ribeye pork chop.',
        modelPhoto0: 'http://placehold.it/100x100/333333',
        modelPhoto1: 'http://placehold.it/100x100/555555',
        modelPhoto2: 'http://placehold.it/100x100/111111',
    },
    {
        name: 'dragyri-7',
        title: 'New Ashkelon',
        blurb: 'Drumstick short ribs salami alcatra bresaola, picanha cupim. Beef ribs brisket sirloin prosciutto biltong, ham hock jowl corned beef pork belly meatball shankle short ribs t-bone. Pancetta tail ribeye, pork loin ground round shank capicola alcatra prosciutto chicken tri-tip. Pork belly jowl capicola venison pork loin cow filet mignon ribeye pork chop.',
        modelPhoto0: 'http://placehold.it/100x100/454545',
        modelPhoto1: 'http://placehold.it/100x100/4e4e4e',
        modelPhoto2: 'http://placehold.it/100x100/aaaaaa',
    },
    {
        name: 'dragyri-8',
        title: 'Toxic Waste Dump',
        blurb: 'vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis',
        modelPhoto0: 'http://placehold.it/100x100/888888',
        modelPhoto1: 'http://placehold.it/100x100/ffffff',
        modelPhoto2: 'http://placehold.it/100x100/454545',
    },
    {
        name: 'newAsh',
        title: 'New Ashkelon',
        blurb: 'iatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure',
        modelPhoto0: 'http://placehold.it/100x100/aaaaaa',
        modelPhoto1: 'http://placehold.it/100x100/454545',
        modelPhoto2: 'http://placehold.it/100x100/444444',
    },{
        name: 'dragyri-10',
        title: 'CORE Outpost',
        blurb: ' Robot ipsum datus scan amet, constructor ad ut splicing elit, sed do errus mod tempor in conduit ut laboratory et deplore electromagna aliqua. Ut enim ad minimum veniam, quis no indestruct exoform ullamco laboris nisi ut alius equip ex ea commando evaluant. Duis ex machina aute ire dolorus in scan detectus an voluptate volt esse cesium dolore eu futile nulla parameter. Execute primus sint occaecat cupidatat non proident, sunt in culpa qui technia deserunt mondus anim id est proceus.',
        modelPhoto0: 'http://placehold.it/100x100/888888',
        modelPhoto1: 'http://placehold.it/100x100/aaaaaa',
        modelPhoto2: 'http://placehold.it/100x100/454545',
    },
];

//get the name attribute of the location element
function getNameInfo(n){
    for(var i = 1; i<dots.length; i++){
        var x =  dots[i].name;
        if (x == n){
            console.log('success');
            renderInformation(dots[i]);
        }else if(i>=dots.length){
            console.log('no match');
            renderInformation(dots[0]);
        }
    }
}
//render the info to the DOM
function renderInformation(obj){
    //take the object
    //split it into the proper data
    var n = obj.title;
    var b = obj.blurb;
    var m0 = 'url(' +obj.modelPhoto0 + ')';
    var m1 = 'url(' +obj.modelPhoto1 + ')';
    var m2 = 'url(' +obj.modelPhoto2 + ')';
    console.log(n,b,m0);
    //render each piece to the DOM
    if(n != null){
        document.getElementById('location-title').innerHTML = n;
        document.getElementById('location-blurb').innerHTML = b;
        document.getElementById('modelContainer').children[0].style.backgroundImage = m0;
        document.getElementById('modelContainer').children[1].style.backgroundImage = m1;
        document.getElementById('modelContainer').children[2].style.backgroundImage = m2;
    }else {
        console.log('unknown')
        document.getElementById('location-title').innerHTML = "Danger!"
        document.getElementById('location-blurb').innerHTML = "Unknown Location. Send Recon unit soon"
    }

    //if the Object is unknown or the key is missing replace with some dummy text
}
//change the Zoom Level
function updateZoom(factor){
    currentZoom += factor;
    console.log('hello');
    if(currentZoom < .45){
        currentZoom = .45;

    }
    if(currentZoom > 1.5){
        currentZoom = 1.5;
    }
    mapContainer.style.transform = 'scale(' + currentZoom + ')';
}
//Toggle the Menu
function openMenu(){
    console.log('Open the Menu!');
    $('.info-panel').removeClass('menu-closed');
    $('.zoom-menu').removeClass('zoom-closed');
    $('.info-panel').addClass('menu-open');
    $('.zoom-menu').addClass('zoom-open');
    $('.menu-collapse').find('i').removeClass('fa-bars');
    $('.menu-collapse').find('i').addClass('fa-arrow-right');
    isDown = false;
}
function closeMenu(){
    console.log('Close the Menu!');
    $('.info-panel').removeClass('menu-open');
    $('.zoom-menu').removeClass('zoom-open');
    $('.info-panel').addClass('menu-closed');
    $('.zoom-menu').addClass('zoom-closed');
    $('.menu-collapse').find('i').removeClass('fa-arrow-right');
    $('.menu-collapse').find('i').addClass('fa-bars');
    isDown = true;
}
function toggleMenuLeft(){
    if(!isDown){
        closeMenu();
    }else{
        openMenu();
    }
};
//reset the menu on resize
function resetMenu(){
    if(window.innerWidth <= 800){
        openMenu();
    }
}
function classReset(){
    document.getElementById('down-arrow').classList.remove('animated','flash');
}
$(document).ready(function(){

    //Handle the clicking of the dots on the Map
    $('.location-dot').click(function(){
        var name = this.getAttribute("name");
        getNameInfo(name);
        if(isDown){
            toggleMenuLeft();
        }
        document.getElementById('down-arrow').classList.add('animated','flash');
        window.setTimeout(classReset,500);

    });

    //Makes the map draggable.
    $('#draggable').draggable();


    //Zoom Navigation code
    zoomOut.addEventListener("click", function(){
        updateZoom(-zoomFactor);
    });
    zoomIn.addEventListener("click", function(){
        updateZoom(zoomFactor);
    });
    // Menu Options
    document.getElementById('menu-collapse').addEventListener('click',toggleMenuLeft);
    // catch resize and reset the menu
    window.addEventListener('resize',resetMenu);
    document.getElementById('down-arrow').addEventListener('click',function(){
        this.addClass('animated bounce')
    });
});
