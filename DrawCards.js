var deckId;

    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     deckId = JSON.parse(xhttp.responseText).deck_id;
        gettwocards();
    }
};
xhttp.open("GET", "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1, true);
xhttp.send();

function gettwocards(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            deckId = JSON.parse(xhttp.responseText).deck_Id;
            var responseObject =
            var Card1 = deckId.cards[0];
            var Card2 = deckId.cards[1];
            document.getElementById("Card1").src = Card1.image;
            document.getElementById("Card2").src = Card2.image;
        }
    };
    xhttp.open("GET", "https://deckofcardsapi.com/api/deck/"+ deckId + "/draw/?count=2", true);
    xhttp.send();
}