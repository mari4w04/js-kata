function jumping_init() {
    // TODO: Find classes .jumping
    let phrasesAll = document.querySelectorAll(".jumping");
    console.log(phrasesAll[2]);

    phrasesAll.forEach(function(phrase){

        // create a span for every letter in the textContent
        phraseArr = Array.from(phrase.textContent);
        console.log(phraseArr);

        for(i=0; i<phraseArr.length; i++){
            if (phraseArr[i] != " "){
                phraseArr[i] = "<span>" + phraseArr[i] + "</span>";
            }else{
                phraseArr[i] = phraseArr[i];
            }
        }
    
        let newPhrase = phraseArr.join("");
    
        console.log(newPhrase);

        // replace the content with these spans
        phrase.innerHTML = newPhrase;
    
        //document.querySelector(".jumping").innerHTML = newPhrase;
    
        
        // make sure every span has a style animation-delay of 0.05s more than the last one!
        let allSpans = document.querySelectorAll(".jumping span");
        console.log(allSpans[0]);
    
        let anDelay = 0;
        for(i=0; i<allSpans.length; i++){
            allSpans[i].style = "animation-delay: " + anDelay + "s";
            anDelay += 0.05;
        }
    });
    
    //let phrase = Array.from(document.querySelector(".jumping").textContent);
    
    
    /*phrase.forEach(function(letter){
        letter = "<span>" + letter + "</span>"
        return letter;
    })*/
    
    
    
}