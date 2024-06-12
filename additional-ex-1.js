function multiplyCal(group,number){
    let groupCal=[]
    for (let i=0;i<group.length;i++){
        groupCal.push(group[i]*number)
    }
    return groupCal
}
let group1=[10,20,30]
let group2=[2,4,6]
console.log(multiplyCal(group1,10))
console.log(multiplyCal(group2,2))