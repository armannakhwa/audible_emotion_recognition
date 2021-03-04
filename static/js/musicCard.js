

//Get reference for bootstrap card
var music = document.querySelectorAll('.music');
document.querySelectorAll('.pButton').forEach(item => {
    item.addEventListener('click', event => {
        play(event);
    })
})

//get target url for audio
function play(event) {
    var target = event.target;
    var url = d3.select(target).select('source').attr('src');
    var filename = ''
    console.log(url);
    playAudio(url)
    
    // link.href = url;
    filename = url;
    d3.json("/tv_movie", function(data) {

        
        ["hanks", "mustard", "ewdavid", "gretchen", "nathan", "vader", "theoffice", "witch"].forEach(function(keyword, index) {
            if(url.includes(keyword)) {
                console.log(keyword, index);
                buildBarChart(data[index].predictedEmotion, data[index].emotionCategories, data[index].probabilities, data[index].predictedSex)
            }
        })
        
    })
    // var xhr = new XMLHttpRequest();
    // xhr.onload = function(e) {
    //     if(this.readyState === 4) {
    //         console.log("Server accessed successfully");
    //         buildMetaData()
    //         // console.log("called BuildMetaData")
    //     }
    // };

    // var fd = new FormData();
    // fd.append("audio_data", blob, filename);
    // xhr.open("POST", "/gallery", true);
    // xhr.send(fd);    
}

//Play audio and run model
function playAudio(url) {
    new Audio(url).play();
    

  }
