//syncroness
var time=new Date()

function longTask(milliSecond){
    dt=new Date()
    while((new Date-dt)<= milliSecond){

    }
}

console.log("Started")
longTask(2000)
console.log('End')

console.log("Started")
longTask(2000)
console.log('End')

console.log("Started")
longTask(2000)
console.log('End')

var diff=new Date()-time
console.log(diff)

//asyncroness

var asTime=new Date()
function showEnd(){
    console.log("End")
}

console.log('started')
setTimeout(showEnd,2000)

console.log("started")
setTimeout(showEnd,2000)

console.log('started')
setTimeout(showEnd,2000)

var asdiff= new Date()-asTime
console.log(asdiff)