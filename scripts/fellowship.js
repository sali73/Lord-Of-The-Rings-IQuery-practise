console.log("LINKED");

// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];


// Our Setting
const lands = ['The-Shire', 'Rivendell', 'Mordor'];

// ====================================
//           Chapters
// ====================================


// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  console.log('making Middle Earth');
  // console.log("Trying to make middle earth.");
     
  // 1. create a section tag with an id of middle-earth
  
  const $section = $('<section id="middle-earth">'); 
  
  
  // 2. append the section to the body of the DOM.
  $('body').append($section)
  // 3. use a for loop to iterate over the lands array that does the following
  for (let i=0; i<lands.length; i++) {
    //   3a. creates an article tag (there should be one for each land when the loop is done)
    $article = $('<article>');
    //   3b. gives each land article an `id` tag of the corresponding land name
    $article.attr('id', `${lands[i]}`)
    //   3c. includes an h1 with the name of the land inside each land article
    $article.append(`<h1>${lands[i]}</h1>`)
    //   3d. appends each land to the middle-earth section
    $article.appendTo($section)
    }
  };
  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section



// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)

  // 1. create a 'ul'
  

  const $ul = $('<ul>')
  for (let h = 0 ; h < hobbits.length ; h++){
    const $li = $('<li class="hobbit">')
    $li.text(hobbits[h]).appendTo($ul)
    $('#The-Shire').append($ul)
  }
  


};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  $div = $('<div id ="the-ring">')

  // 1. create an empty div with an id of 'the-ring'
  $div.appendTo('.hobbit')
  

  // 2. add the ring as a child of Frodo
    // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

    // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  // 1. display an unordered list of baddies in Mordor
  const $ul1 = $('<ul>')
  for (let b = 0 ; b < baddies.length ; b++){
    const $li1 = $('<li class="baddy">')
    $li1.text(baddies[b]).appendTo($ul1)
    $('#Mordor').append($ul1)
  }
  

  // 2. give each of the baddies a class of "baddy"

  // 3. remember to append the ul to Mordor

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  const $aside = $('<aside>')

  // 1. create an aside tag and append it to middle-earth below mordor
  $aside.appendTo($('#middle-earth'))

  // 2. display an unordered list of buddies in the aside



  const $ul2 = $('<ul>')
  for (let b1 = 0 ; b1 < buddies .length ; b1++){
    const $li2 = $('<li class="baddy">')
    $li2.text(buddies [b1]).appendTo($ul2)
    $aside.append($ul2)
  }
  

  // 3. give each of the buddies a class of "buddy"

  // 4. don't forget to append them to the aside

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
      // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
      $('#The-Shire').children().remove()
      const $ul3 = $('<ul>')
    for (let h2 = 0 ; h2 < hobbits.length ; h2++){
        const $li3 = $('<li class="hobbit">')
        $li3.text(hobbits[h2]).appendTo($ul3)
        $('#Rivendell').append($ul3)
  }
      
    

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"
     // hint: You can get a list of elements by tag name, such as 'aside'
     $('<aside>').children().eq(3).text("Aragorn")
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  const $div3 = $('<div id ="the-fellowship">')

  // 1. create a new div with an id 'the-fellowship'
  $div3 .text('The Fellowship')

  // 2. add an h1 with the text 'The Fellowship' to this new div
  $div3.appendTo('#middle-earth')

  // 3. append the fellowship to middle-earth
  for (let h4 = 0 ; h4 < hobbits.length ; h4++){
    const $li4 = $('<li class="hobbit">')
    $li4.text(hobbits[h4]).appendTo($div3)  
}
  for (let h5 = 0 ; h5< buddies.length ; h5++){
  const $li5 = $('<li class="buddies">')
  $li5.text(buddies[h5]).appendTo($div3)  
}

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
 
    $('.buddies').eq(0).text('Gandalf the White').attr('class','the-white')
    
  

  // 1. change the 'Gandalf' text to 'Gandalf the White'

  // 2. add a class "the-white" to this element

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown
  alert(" Boromir's been killed by the Uruk-hai! ")

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  $('.buddies').eq(3).remove()
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  $('#the-fellowship').children().eq(0).remove()
  $('#the-fellowship').children().eq(1).remove()

 
  for (let h = 0 ; h < hobbits.length ; h++){
    const $h2 = $('<h2>')
    $h2.text(hobbits[h]).appendTo($('#Mordor '))
  
    $h2[2].remove()
  }
  const $div5 = $('<div id="mount-doom" >')
    $("#Mordor").append($div5)

  // 2. add a div with an id of 'mount-doom' to Mordor

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  const $div6 = $('<div id="gollum" >')
  $("#Mordor").append($div6)

  // 1. Create a div with an id of 'gollum' and add it to Mordor
  $div1 = $('<div id="the-ring">')

  // 1. create an empty div with an id of 'the-ring'
  $div1.appendTo('#gollum')

  // 2. Move the ring from Frodo and give it to Gollum
  $div5.append($div1)
  // 3. Move Gollum into Mount Doom

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM
  $('#gollum').remove()

  // 2. remove all the baddies from the DOM
  $('.baddy').remove()

  // 3. Move all the hobbits back to the shire
  $('.hobbit').remove()
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================



$(()=>{

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
});
