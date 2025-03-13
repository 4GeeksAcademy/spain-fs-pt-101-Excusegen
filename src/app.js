
window.onload = function() {
  //write your code here
  

    let who = [
      "The dog",
      "My grandma",
      "The mailman",
      "My bird",
      "my girlfriend",
      "my ex",
      "My son",
      "My cousin",
      "A spider",
      "My Stepsister",
      "My Teacher"
  
    ];
    let action = [
      "ate",
      "peed",
      "crushed",
      "broke",
      "kicked",
      "spat",
      "burned",
      "cursed",
      "ignited",
      "banished"
    ];
    let what = [
      "my homework",
      "my phone",
      "the car",
      "the sink",
      "my pipe",
      "my ps5",
      "My PC",
      "My Switch",
      "My Hair"
    
  
    ];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying",
      "when I was doing the JS project",
      "during my 18 weeks with Antonio and Javier",
      "In my last soccer match",
      "When I was washing the dishes"
  
    ];
  
    let whos = who[Math.floor(Math.random() * who.length)];
    let actions = action[Math.floor(Math.random() * action.length)];
    let whats = what[Math.floor(Math.random() * what.length)];
    let whens = when[Math.floor(Math.random() * when.length)];
  
    console.log(whos, actions, whats, whens);
  
    document.getElementById(
      "excuse"
    ).innerText = `${whos} ${actions} ${whats} ${whens}.`;
  };
