const organizeInstructors = function(instructors){
  //create empty object and temp names array
  let organized = {
    
  };
  let names = [];

  /*
    - loop through instructor array and if organized object doesn't yet have the course as a property, add it
  */

  for(let i of instructors){
    if(!organized[i.course])
      organized[i.course] = undefined;
  }

  /*
    - loop through the courses in organized object and for each course loop through instructors again to see if instructor teaches that course. 
    - if so, save instructor name in names array. once nested loop is done, we should have a list of names teaching that specific course. 
    - add that to the corresponding course in organized object and erase names array for next loop.
  */

  for(let i in organized){
    for(let j of instructors){
      if(i === j.course){
        names.push(j.name); 
      }
    }
    organized[i] = names;
    names = [];
  }
  return organized;
};

console.log(organizeInstructors([
  {name: 'Samuel', course: 'iOS'},
  {name: 'Victoria', course: 'Web'},
  {name: 'Karim', course: 'Web'},
  {name: 'Donald', course: 'Web'}
]));
console.log(organizeInstructors([
  {name: 'Brendan', course: 'Blockchain'},
  {name: 'David', course: 'Web'},
  {name: 'Martha', course: 'iOS'},
  {name: 'Carlos', course: 'Web'}
]));
