// we want to add listners on all buttons, thats why we loop all span/button


/*--------------------------------------------------------------------------*/
// my approach   =>>  it works

const buttons = document.querySelectorAll('.button')     // return a Nodelist
const body = document.querySelector('body')

buttons.forEach((button)=>{
  button.addEventListener('click', (e) => {
    body.style.backgroundColor = e.target.id
  })
})
/*--------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------*
// inst approach

const buttons = document.querySelectorAll('.button'); // return a Nodelist
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
/*--------------------------------------------------------------------------*/
