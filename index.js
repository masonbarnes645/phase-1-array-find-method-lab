// code your solution here
function superbowlWin(data){
  const match = data.find(record => record['result'] === 'W')
  return match ? match['year'] : match

     // Object.prototype.values
      


}



 

// superbowlwin is taking object as arguement, and giving me the object who has a key matching w. i need to take that object and return the value of the key named year.
//when i run it all i get it the whole object