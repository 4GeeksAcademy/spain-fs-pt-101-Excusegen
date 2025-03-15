
window.onload = function() {
  
  function letmecreateanewcode() {
    const parts = {
      who: ['The dog', 'My grandma', 'The mailman', 'My bird', 'My cat', 'A stranger', 'The neighbor'],
      action: ['ate', 'peed on', 'crushed', 'broke', 'stole', 'burned', 'hid'],
      what: ['my homework', 'my phone', 'the car', 'my laptop', 'my shoes', 'the remote'],
      when: ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying', 'right before my test', 'on my way home']
    };

    return Object.values(parts)
      .map(arr => arr[Math.floor(Math.random() * arr.length)])
      .join(" ") + ".";
  }

  document.getElementById("excuse").innerText = letmecreateanewcode();

};
