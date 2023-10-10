function books(title, author,msrp,genre,numberOfPages,images,description){
    return{
        title:title,
        author:author,
        msrp:msrp,
        genre:genre,
        numberOfPages:numberOfPages,
        images:images,
        description:description
    }
}




var array = [
    {
        name: "Solo Leveling",
        author:"kimjon",
        msrp:"150$",
        genre:"webtoon",
        numberofpages:"200",
        image:'images/sololeveling.png',
        description:"fantasystory"
        
    },
    {
        name: "Wind Breaker",
        author:"yonjimhoo",
        msrp:"150$",
        genre:"sports",
        numberofpages:"460",
        image:'images/windbreaker.png',
        description:"sportstory"
    },
    {
        name: "Magic Emperor",
        author:"samkimhojo",
        msrp:"160$",
        genre:"shoneen",
        numberofpages:"457",
        image:'images/magicemperor.jpeg',
        description:"senenstory"
    },
    {
        name: "Reader ViewPoint",
        author:"samkimhojo",
        msrp:"110$",
        genre:"webtoon",
        numberofpages:"179",
        image:'images/readerviewpoint.jpeg',
        description:"senenstory"
    },
    {
        name: "The Beginning After The End",
        author:"samkimhojo",
        msrp:"175$",
        genre:"magic,webtoon",
        numberofpages:"175",
        image:'images/thebiginningaftertheend.jpeg',
        description:"senenstory"
    },
    {
        name: "Solo Max Newbie",
        author:"samkimhojo",
        msrp:"100$",
        genre:"webtoon",
        numberofpages:"123",
        image:'images/solomaxnewbie.jpeg',
        description:"senenstory"
    },
    {
        name: "Nano Machine",
        author:"samkimhojo",
        msrp:"145$",
        genre:"webtoon",
        numberofpages:"180",
        image:'images/nanomachine.jpeg',
        description:"senenstory"
    },
    {
        name: "Ranker Who Lives a Second Life",
        author:"samkimhojo",
        msrp:"135$",
        genre:"webtoon",
        numberofpages:"161",
        image:'images/secondliferanker.jpeg',
        description:"senenstory"
    }
]
 
function display(){
    for(i=0;i<array.length;i++){
        $("#items").append(` <img class="img" src=${array[i].image} >
        <h1 style="color:#58BCEE" ><i>${array[i].name}</i></h1> <h1 style="color:#404040"><i>${array[i].author}</i></h1> <h1 style="color:#404040"><i>${array[i].msrp}</i></h1> <h1 style="color:#404040"><i>${array[i].numberofpages}</i></h1> 
       
        <h1 style="color:#404040"><i>${array[i].description}</i></h1>`)
    }

}
display()

function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i]); 
    } 
}


var allImages = $('.img');


var linkUrl = ["https://mangasololeveling.net/comic/solo-leveling-chapter-0-prologue/", "https://windbreakerwebtoon.com/wind-breaker-chapter-1/", "https://magicemperors.com/manga/magic-emperor-chapter-1/", "https://omniscientreaders.online/manga/omniscient-reader-chapter-0/" , "https://thebeginningaftertheend-manga.com/manga/the-beginning-after-the-end-episode-1-2/?2023-10-07" , "https://w2.solo-max.online/manga/solo-max-level-newbie-chapter-0/" , "https://nanomachine.online/manga/nano-machine-chapter-1-1/?date=2023-10-09", "https://w2.secondlife-ranker.com/second-life-ranker-chapter-1/" ];


allImages.each(function(index) {
  $(this).click(function() {
   
    window.open(linkUrl[index], '_blank');
  });
});




  