var locationDots =[];
var dots = [
    {
        name: 'dot01',
        blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'dot02',
        blurb: 'Lolet, consectetur adipissmod tempor incit labore egna aliqua. Ut enim ad minim venitation ulla nisi ut aliquip ex ea commequat. Duis aute irlor in reprt in voltate vel esse cillore eu fugila pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. te vel esse cillore eu fugila pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est lab.te vel esse cillore eu fugila pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est lab'
    },
    {
        name: 'dangerDot',
        blurb: 'eEtur adipissmpor incit labogna aliqua. Eiim venilla nisi ut aluip ex eaommuat. Dute irlort in voltel esse cillore eu fugila pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiunt mollit anim id est laborum. te vel esse cillore eu fugila pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est lab.te vel esse cillore eu fugila pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est lab'
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

$(document).ready(function(){
    $('.location-dot').hover(function(){
        // console.log(this.getAttribute("name"));
        var name = this.getAttribute("name");

        getNameInfo(name);
    });



    //Makes the map draggable.
      $( "#draggable" ).draggable();
    //


});
