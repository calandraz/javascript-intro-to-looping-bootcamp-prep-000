function forLoop(array){
  for(var i = 0; i < 25; i++){
    if(i < 1){
      array.push(`I am ${i} strange loops`);
    } else {
      array.push("I am 1 strange loop");
    }
  }
  return array;
}

function whileLoop(n){
  while(n > 0){
    console.log(n);
    n--;
    if(n === 0){
      return "done";
    }
  }
}

function doWhileLoop(array){
  function maybeTrue(){
    return Math.random() >= 0.5
  }

  do{
    array.pop();
  } while(array.length > 0 && maybeTrue());
  return array;
}