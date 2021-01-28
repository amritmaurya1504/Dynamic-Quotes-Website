let quotes = document.getElementById("quotes");
let author = document.getElementById("author");
let newQ = document.getElementById("newQ");
let twitter = document.getElementById("twitter");
let realData = "";
let quotesData = "";

const tweetPost = () =>{
    let tweet = `https://twitter.com/intent/tweet?text=${realData[rnum].text}`;
    window.open(tweet);
}

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 1643);
    // console.log(realData[rnum].author);
    quotes.innerText = `${realData[rnum].text}`;
    realData[rnum].author == null ? (author.innerText = "UnKnown") : (author.innerText = `${realData[rnum].author}`);
}

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
    } catch (error) { }
}
twitter.addEventListener("click" , tweetPost);
newQ.addEventListener("click", getNewQuotes);
getQuotes();