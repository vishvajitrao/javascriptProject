// if user add note than add it into the local storage
showNotes();
let addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click' , function(e){

let addText = document.getElementById('addText')
let addTitle = document.getElementById('noteTitle')
let notes = localStorage.getItem('notes');
if (notes == null)
{
    notesObj = [];
}
else
{
    notesObj = JSON.parse(notes);
}
let myObj = {
    title:addTitle.value,
    text:addText.value
}
notesObj.push(myObj);
localStorage.setItem("notes" , JSON.stringify(notesObj));
addText.value = '';
addTitle.value = '';
// console.log(notesObj)

showNotes();
})



// show notes on html page from local storage 


function showNotes()
{
    let notes = localStorage.getItem('notes');
if (notes == null)
{
    notesObj = [];
}
else
{
    notesObj = JSON.parse(notes);
}

let html = '';
notesObj.forEach(function(element,index){

    html += `
    <div class="noteCard my-3 mx-3 card" style="width: 18rem">
    <div class="card-body">
        <div class="cart-title"><strong>Title: ${element.title}</strong></div>
            <p class="card-text">${element.text}</p>
        <a onclick = "deleteNote(this.id)" id = "${index}" class="btn btn-success">Delete Notes</a>
    </div>
</div>`;

});

let notesEle = document.getElementById('notes')

if (notesObj != 0){

    notesEle.innerHTML = html;
}
else{

    notesEle.innerHTML = `<strong>Nothing is show here "Please go above and add some notes" - Thanks </strong>`

}

}


// Delete note from local storage

function deleteNote(index)
{
    console.log("I am clicking" , index)
    let notes = localStorage.getItem('notes');
    if (notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
        
    }

    notesObj.splice(index,1)
    localStorage.setItem("notes" , JSON.stringify(notesObj));
    showNotes();
}

// Search text from list

let searchTexts = document.getElementById('searchText');
searchTexts.addEventListener('input' , function (){
    // console.log('Fired')
    let inputVal = searchTexts.value.toLowerCase();
    // console.log(inputVal)
    let noteCards =document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element){

        let cardText = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardText)

        if (cardText.includes(inputVal)){

            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }

    })
})




