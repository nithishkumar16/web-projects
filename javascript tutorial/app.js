function ageInDays(){
    var result;
    var age=prompt("what's your birth year my friend");
    //var age=21;
    if(age)
        result=((2021-age)*365);
    else
        result="You Haven't entered your birth year!"
    //console.log(result);

    var res_header=document.createElement('h1');
    res_header.setAttribute('id','res-header');
    res_header.innerText=result;
    //append h1 with result container
    var res_cont=document.getElementById('res-cont');
    res_cont.appendChild(res_header);
}
function reset(){
    var b=document.getElementById('res-header');
    b.remove();
}

function catGenerator(){
    var imgtag=document.createElement('img');
    imgtag.src="https://homepages.cae.wisc.edu/~ece533/images/sails.png";
    document.getElementById('cat-res').appendChild(imgtag);
}

var clicked;
function rClick(){
    clicked="rock";
    logic(clicked);
}
function pClick(){
    clicked="paper";
    logic(clicked);
}
function sClick(){
    clicked="scissor";
    logic(clicked);
}

function logic(clicked){
    var c=clicked;
    var a,b,computer,human,rand,msg;
    human=c;
    //var fd=document.getElementById('first-div');
    var sd=document.getElementById('second-div');
    //var td=document.getElementById('third-div');
    var oldchild2=document.getElementById('paper');
    var oldchild1=document.getElementById('rock');
    var oldchild3=document.getElementById('scissor');

    //respective image urls
    var paper="data:image/png;base64,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";
    //oldchild1.src- can give the url
    var rock="https://st2.depositphotos.com/1763191/6767/v/600/depositphotos_67675125-stock-illustration-one-grey-rock.jpg";
    var scissor="data:image/jpeg;base64,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";
    var h1;
    // console.log(c+" inside logic");

    //lets take two variables a and b
    //if 1 among three is selected, then i am assigned those remaining choices
    if(c=="rock"){
        a="paper";
        b="scissor"
    }
    else if(c=="scissor")
    {
        a="rock";
        b="paper";
    }
    else{
        a="rock";
        b="scissor";
    }

    //generating random value for making computer's choice
    rand=Math.floor((Math.random()*10)+1); //random number from 0 to 10
    //if number is between 0 to 5 computer's choice is 'A' else computer's choice is 'B'
    if(rand<=5){
        computer=a;
    }
    else{
        computer=b;
    }

    //main logic
    if(human=="rock")
    {
        oldchild1.setAttribute('src',rock);
        
        if(computer=="paper")
        {
            oldchild3.setAttribute('src',paper);
            msg="YOU LOSE!";
            h1=document.createElement('h1');
            h1.innerText=msg;
            h1.style.color="red";
            sd.replaceChild(h1,oldchild2);
        
        }
        else
        {
            oldchild3.setAttribute('src',scissor);
            msg="YOU WIN!";
            h1=document.createElement('h1');
            h1.innerText=msg;
            h1.style.color="green";
            sd.replaceChild(h1,oldchild2);
        }
    }
    if(human=="paper")
    {
        oldchild1.setAttribute('src',paper);
        if(computer=="rock")
        {
            oldchild3.setAttribute('src',rock);
            msg="YOU WIN!";
            h1=document.createElement('h1');
            h1.innerText=msg;
            h1.style.color="green";
            sd.replaceChild(h1,oldchild2);
        
        }
        else
        {
            oldchild3.setAttribute('src',scissor);
            msg="YOU LOSE!";
            h1=document.createElement('h1');
            h1.innerText=msg;
            h1.style.color="red";
            sd.replaceChild(h1,oldchild2);
        }
    }
    if(human=="scissor")
    {
        oldchild1.setAttribute('src',scissor);
        if(computer=="rock")
        {
            oldchild3.setAttribute('src',rock);
            msg="YOU LOSE!";
            h1=document.createElement('h1');
            h1.innerText=msg;
            h1.style.color="red";
            sd.replaceChild(h1,oldchild2);
        
        }
        else
        {
            oldchild3.setAttribute('src',paper);
            msg="YOU WIN!";
            h1=document.createElement('h1');
            h1.innerText=msg;
            h1.style.color="green";
            sd.replaceChild(h1,oldchild2);
        }
    }
    h1.style.margin="50px";
    oldchild1.style.boxShadow = "10px 20px 20px blue";
    oldchild3.style.boxShadow = "10px 20px 20px blue";
}

/*challenge 4: */

var allbuttons=document.getElementsByTagName('button');


var colorclass={
    'red':'tesla','blue':'amazon','yellow':'google','green':'facebook'
}

var originalclassorder = new Array();
for(let k=0;k<allbuttons.length;k++)
{
    originalclassorder[k]=allbuttons[k].classList.value;
}
var randomclassorder = new Array();
for(let k=0;k<allbuttons.length;k++)
{
    randomclassorder[k]=allbuttons[k].classList.value;
}
console.log(originalclassorder);

function buttoncolor(btncolor){

    //var e=document.getElementById('background');
    //console.log(e.value);
    //var allbuttons=document.getElementsByTagName('button');

    var e=btncolor.value;
    
    if((e=="red") || (e=="green"))
    {
        for(let j=0;j<allbuttons.length;j++)
        {
            allbuttons[j].setAttribute('class',colorclass[e]);
        }
    }
    else if(e=="reset"){
        for(let i=0;i<allbuttons.length;i++)
        {
             allbuttons[i].setAttribute('class',originalclassorder[i]);
        }
    }
    //method 1
    // else if(e=="random")
    // {
    //     randomclassorder.sort(() => Math.random() - 0.5);
    //     console.log(randomclassorder);
    //     for(let i=0;i<allbuttons.length;i++)
    //     {
    //          allbuttons[i].setAttribute('class',randomclassorder[i]);
    //     }
    // }
    //method 2
    else if(e=="random")
    {
        for(let i=0;i<allbuttons.length;i++)
        {
             allbuttons[i].setAttribute('class',['tesla','amazon','google','facebook'][(Math.floor(Math.random()*4))]);
        }
    }   
}

//challenge 5:

blackjackGame={
    'you':{'scorespan':'your-blackjack-result','div':'your-div','score':0},
    'dealer':{'scorespan':'dealer-blackjack-result','div':'dealer-div','score':0},
    'card':['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    'cardscore':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10,'A':[1,11]},
    // 'win':0,
    // 'lose':0,
    // 'draws':0,
};

var isStand="false";
var turnsover="true";

const YOU=blackjackGame['you'];
const DEALER=blackjackGame['dealer'];
const hitsound=new Audio('./blackjack_assets/sounds/swish.m4a');
const winsound=new Audio('./blackjack_assets/sounds/cash.mp3');
const losesound=new Audio('./blackjack_assets/sounds/aww.mp3');


document.getElementById('hit').addEventListener('click',blackjackHit);
document.getElementById('stand').addEventListener('click',dealerlogic);
document.getElementById('deal').addEventListener('click',blackjackDeal);

//hit button functionality
function blackjackHit(){
    if(isStand==="false"){
        turnsover="false";
        let card=randomcard();
        showCard(card,YOU);
        updatescore(card,YOU);
        showscore(YOU);
    }
}

function randomcard(){
    let index=Math.floor(Math.random()*13);
    return blackjackGame['card'][index];
}

function showCard(card,activeplayer){
    if(activeplayer['score']<=21){
        var cardimage=document.createElement('img');
        cardimage.setAttribute('src','./blackjack_assets/images/'+card+'.png');
        document.getElementById(activeplayer['div']).appendChild(cardimage);
        hitsound.play();
    }
}
//deal button functionality
function blackjackDeal(){
    if(turnsover==="true"){
    var dealerimage=document.querySelector('.dealer-side').querySelectorAll('img');
    var yourimage=document.querySelector('.your-side').querySelectorAll('img');
    for(let i=0;i<dealerimage.length;i++)
    {
        dealerimage[i].remove();
    }
    for(let i=0;i<yourimage.length;i++)
    {
        yourimage[i].remove();
    }
    YOU['score']=0;
    DEALER['score']=0;
    document.getElementById(YOU['scorespan']).innerText=0;
    document.getElementById(DEALER['scorespan']).innerText=0;
    document.getElementById(YOU['scorespan']).style.color='white';
    document.getElementById(DEALER['scorespan']).style.color='white';
    //change back to let's play
    document.getElementById('blackjack-result').innerText="Let's Play";
    document.getElementById('blackjack-result').style.color='black';
    isStand="false";
    turnsover="false";
    }
}

function updatescore(card,activeplayer){
    if(card=='A')
        {
            if(activeplayer['score']+blackjackGame['cardscore'][card][1]<=21)
            {
                activeplayer['score']+=blackjackGame['cardscore'][card][1];
            }
            else{
                activeplayer['score']+=blackjackGame['cardscore'][card][0]
            }
        }
    else{
        activeplayer['score']+=blackjackGame['cardscore'][card];
    }
}

function showscore(activeplayer)
{
    if(activeplayer['score']<=21){
        document.getElementById(activeplayer['scorespan']).innerText=activeplayer['score'];}
    else{
        document.getElementById(activeplayer['scorespan']).innerText="BURST!";
        document.getElementById(activeplayer['scorespan']).style.color='red';
    }
}
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
//stand button functionality
async function dealerlogic(){
    if(turnsover=="false"){
    while(DEALER['score']<16){
        isStand="true";
        let card=randomcard();
        showCard(card,DEALER);
        updatescore(card,DEALER);
        showscore(DEALER);
        await sleep(1000);
    }
    
    //  if(DEALER['score']>15)
    //  {
        turnsover="true";
        showresult(computewinner());
    //}
}
}

function computewinner(){
    let winner;
    //if your score<=21
    if(YOU['score']<=21){
        if((DEALER['score']>YOU['score']) && DEALER['score']<=21){
            winner=DEALER;
        }
        else if(DEALER['score']>21 || YOU['score']>DEALER['score']){
            winner=YOU;
        }
        else if(YOU['score']==DEALER['score']){
            console.log("you drew!");
        }
    }
    else if(YOU['score']>21){
        if(DEALER['score']<=21){
            winner=DEALER;
        }
    }
    else if(YOU['score']>21 && DEALER['score']>21){
        console.log('you drew!');
    }

    return winner;
}

var tablewin=0,tablelose=0,tabledraws=0;
function showresult(winner){
    let message,messagecolor;
    
    if(winner===YOU){
        tablewin++;
        message="YOU WON!";
        messagecolor='green';
        winsound.play();
        document.getElementById('table-win').innerText=tablewin;
    }
    else if(winner===DEALER){
        tablelose++;
        message="YOU LOSE!";
        messagecolor='red';
        losesound.play();
        document.getElementById('table-lose').innerText=tablelose;
    }
    else{
        tabledraws++;
        messagecolor='black';
        message="YOU DREW!";
        document.getElementById('table-draw').innerText=tabledraws;
    }
    document.getElementById('blackjack-result').innerText=message;
    document.getElementById('blackjack-result').style.color=messagecolor;
}