$( document ).ready(function() {
	generate();
//http://www.smosh.com/smosh-pit/articles/8-most-inspirational-quotes-adventure-time
 
  function generate(){
    var quotes = ["Sucking at something is the first step to being sorta good at something @ –Jake the Dog","When bad things happen, I know you want to believe they are a joke, but sometimes life is scary and dark. That is why we must find the light @–BMO","I know who I am and I’ll know what I want if and when it comes along @ – Fionna the Human","People make mistakes. It’s a part of growing up, and you never really stop growing @ – Duke of Nuts","Sometimes you want someone and you want to kiss and be with them, but you can’t because responsibility demands sacrifice. @ – Princess Bubblegum","Even if we like each other, we’re still going to hurt each other @ – Flame Princess","The answer was too simple and I was too smart to see it @ – Princess Bubblegum","No one flicks me in the butt without my consent! @ – Finn the Human","Spongebob: What do you usually do when I’m gone? Patrick: waiting for you to come back.@ spongebob","Well, it may be stupid, but it’s also dumb.@ -Patrick","Well, it’s no secret that the best thing about a secret is secretly telling someone your secret, thereby adding another secret to their secret collection of secrets, secretly.@ -Spongebob","Gary, I’m absorbing his blows like I’m made of some sort of spongy material@ -Spongebob","Dumb people are always blissfully unaware of how dumb they really are…(drools)@ -Patrick","He's not a hot girl. He can't just bail on his life and set up shop in someone else's@-Beth Smith","Listen, Morty, I hate to break it to you but what people call 'love' is just a chemical reaction that compels animals to breed.@-Rick Sanchez","Summer: Why are you fighting!?! Can't you see you're all the same?!Morty: Aw, Summer. [laughs] First race war, huh?@ Rick and Morty","So, in conclusion, you're both equally mercurial, overly sensitive, clingy, hysterical bird-brain homunculi. And I honestly can't even tell the two of you apart half the time because I don't go by height or age, I go by amount of pain in my ass—which makes you both identical. All right, everything resolved? Everybody nice and certain about their position in my world?@-Rick Sanchez","I’m not looking for judgment, just a yes or a no. Can you assimilate a giraffe?@ - Rick Sanchez","Rick, forgive me for doing this in notes. I'm not strong enough to do it in persons. I realize now that I'm attracted to you for the same reason I can't be with you. You can't change. And I have no problem with that, but it clearly means I have a problem with myself. I'm sure there's no perfect version of me. I'm sure I'll just unify species after species and never really be complete. But I know how it goes with us. I lose who I am and become part of you. Because in a strange way, you're better at what I do without even trying. Yours, and nobody else's, @-Unity."
];
    
    
		randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    quoteQuoter=randomQuote.split("@");
		$('.quote').text(quoteQuoter[0]);
    $('.quoter').text(quoteQuoter[1]);
  }
  
  
$("#insperationbtn").on( "click", function() {
    generate();
});  
  
});
