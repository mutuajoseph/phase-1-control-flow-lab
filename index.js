function scuberGreetingForFeet(feet){
  // Write your code here!
  let message;
  if (feet <= 400){
      message = "This one is on me!";
  } else if (feet > 2000 && feet < 2500 ) {
     message = "I will gladly take your thirty bucks.";
  } else {
    message = "No can do.";
  }
  return message;
}

function ternaryCheckCity(city){
  // Write your code here!
  let result = (city === "NYC") ? "Ok, sounds good." : "No go.";
  return result;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
  switch (tip) {
    case "generous":
      message = "Thank you so much.";
      break;
    case "not as generous":
      message = "Thank you.";
      break;
    case "thanks for everything":
      message = "Bye.";
      break;

  }
  return message;
}