var generateCounter = 0;

$(document).ready(readyNow);

    function readyNow(){
        console.log('this is ready');
        $('button').on('click', myFunction); //newCounter
        
    }


// function newCounter(){
//     generateCounter++;
//     //log "this newDurr button has been clicked x times"
//     var clickCount =  generateCounter;
//     $('p').replaceWith('<p>' + clickCount + '</p>')
//     $('#generate').append("<div id='swapDeletebuttons'><button>swap</button><button>delete</button></div>")
// }
//above code makes teeny tiny buttons, that im not really sure how to access 
//(they are within the same div as the generate button, looks gross)

function myFunction() {
    generateCounter++;
    var clickCount =  generateCounter;
    $('p').replaceWith('<p>' + clickCount + '</p>')

    var newDiv = document.createElement("div");
    var buttonDiv = document.createTextNode('I cant figure out how to get a button here');
    newDiv.appendChild(buttonDiv);
    document.body.appendChild(newDiv);

    
}