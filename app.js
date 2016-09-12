var locationDots =[];
var mapContainer = document.getElementById('draggable');
var zoomOut = document.getElementById('zoom-out');
var zoomIn = document.getElementById('zoom-in');
var currentZoom = 1;
var zoomFactor = .25;
var dots = [
    {
        name: 'dragyri-1',
        blurb: 'Beef tenderloin pancetta hamburger porchetta pork, pastrami pork loin chuck pork belly flank prosciutto ball tip. Shank alcatra cow filet mignon doner beef ball tip jowl kielbasa hamburger pork. Brisket beef tri-tip biltong porchetta chicken capicola short ribs bresaola filet mignon drumstick. Short loin capicola shoulder, doner bacon ribeye biltong shankle rump landjaeger. Short ribs tenderloin t-bone pork, pig short loin spare ribs turducken andouille. Turkey jowl strip steak, chuck tongue cupim ribeye pork loin sirloin andouille ham pork spare ribs bacon.'},
    {
        name: 'dragyri-2',
        blurb: 'Chicken tail pork chop jerky beef alcatra. Bresaola landjaeger shank, short loin jowl meatball beef porchetta doner ham hock bacon. Shank porchetta bacon ground round leberkas short ribs chuck ribeye. Jerky pastrami rump, meatloaf jowl boudin short loin pork belly picanha beef ribs bacon. Chicken ground round venison kevin. Meatloaf biltong shoulder, turducken turkey tail drumstick ground round prosciutto short ribs pork loin porchetta filet mignon'
    },
    {
        name: 'dragyri-3',
        blurb: 'Filet mignon bacon strip steak capicola ball tip chuck pork. Drumstick sirloin beef fatback, picanha porchetta ground round shank shoulder. Beef short loin spare ribs turkey pancetta picanha. Alcatra flank pig ribeye pastrami ham. Jowl t-bone tongue short ribs pork, sausage rump tri-tip shankle jerky turducken salami bacon. Pork loin corned beef cow meatball kevin fatback turducken kielbasa t-bone chicken short loin drumstick brisket jerky tri-tip. Venison boudin beef ribs shoulder, sirloin swine salami chicken meatloaf beef ball tip filet mignon t-bone.'
    },
    {
        name: 'dragyri-4',
        blurb: 'Drumstick short ribs salami alcatra bresaola, picanha cupim. Beef ribs brisket sirloin prosciutto biltong, ham hock jowl corned beef pork belly meatball shankle short ribs t-bone. Pancetta tail ribeye, pork loin ground round shank capicola alcatra prosciutto chicken tri-tip. Pork belly jowl capicola venison pork loin cow filet mignon ribeye pork chop.'
    },
];

function getNameInfo(n){
    for(var i = 0; i<dots.length; i++){
        var x =  dots[i].name;
        if (x == n){
            console.log(dots[i]);
            renderInformation(dots[i]);
        }
        console.log(x);
    }
}
function renderInformation(obj){
    //take the object
    //split it into the proper data
    var n = obj.name;
    var b = obj.blurb;
    console.log(n,b);
    //render each piece to the DOM
    if(n != null){
        document.getElementById('location-title').innerHTML = n;
        document.getElementById('location-blurb').innerHTML = b;
    }else {
        console.log('unknown')
        n = "Danger!"
        b = "Unknown Location. Send Recon unit soon"
    }

    //if the Object is unknown or the key is missing replace with some dummy text
}
//zoomfunctions
function updateZoom(factor){
    currentZoom += factor;
    console.log('hello');
    if(currentZoom < .65){
        currentZoom = .65;
        
    }
    if(currentZoom > 1.5){
        currentZoom = 1.5;
    }
    mapContainer.style.transform = 'scale(' + currentZoom + ')';
}

$(document).ready(function(){
    $('.location-dot').click(function(){
        var name = this.getAttribute("name");
        getNameInfo(name);
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



});
