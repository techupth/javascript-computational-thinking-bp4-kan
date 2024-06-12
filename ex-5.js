let studentScore = [{James:40},{Ann:80},{Joe:52},{Ball:67},{Mick:89},{Ole:10}];

// Start coding here
function findAverageScore(Score){
  let sum=0
  let average=0
  for (let studentArray of Score){
    for (let studentObj in studentArray){
      sum=sum+studentArray[studentObj]  
    }
 }
 average=sum/Score.length
 return console.log(`Average score is ${average.toFixed(2)}`)
 
}
findAverageScore(studentScore)

function findMax(Score){
  let maxScore=-Infinity
  let studentName;
  for (let studentArray of Score){
    for (let studentObj in studentArray){
      if (maxScore<studentArray[studentObj]){
        maxScore=studentArray[studentObj]
        studentName=studentObj
      }   
    }
 }
 return console.log(`${studentName} has the highest score, which is ${maxScore} points`)
}
findMax(studentScore)

function findMin(Score){
  let minScore=Infinity
  let studentName;
  for (let studentArray of Score){
    for (let studentObj in studentArray){
      if (minScore>studentArray[studentObj]){
        minScore=studentArray[studentObj]
        studentName=studentObj
      }   
    }
 }
 return console.log(`${studentName} has the lowest score, which is ${minScore} points`)
}
findMin(studentScore)