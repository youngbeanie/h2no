var Game = {};

Game.Boot = function(game) {
    
};

Game.Boot.prototype = {
    init:function() {
        // touch screen input
        this.input.maxPointers = 2;
        
    },
    
    preload:function() {
        // this.load.image(); insert a loading bar
    },
    create:function() {
        this.state.start('Preloader');
        
    }
    
    
}
function postScores() {
    $.ajax({
        url: "db/postScore.php",
        dataType: "json",
        data: {score: total, name: playerName},
        type: "POST",
        success: function (data) {
            console.log(data);
            daily = data[0];
            monthly = data[1];
            alltime = data[2];
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("didn't work");
            console.log(jqXHR.statusText);
        }
    });
}
