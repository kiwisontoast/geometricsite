const wrapper=document.getElementById("wrapper");
const rand=(min,max)=>Math.floor(Math.random()*(max-min+1)+min);
const combinations=[
  {configuration:1,roundness:1},
  {configuration:1,roundness:2},
  {configuration:1,roundness:4},
  {configuration:2,roundness:2},
  {configuration:2,roundness:3},
  // {configuration:3,roundness:3},
];

setInterval(()=>{
  const index = rand(0,combinations.length-1);
  let combination=combinations[index];

  wrapper.dataset.configuration=combination.configuration;
  wrapper.dataset.roundness=combination.roundness;
  console.log(combination);
}, 3000);
