var number = Math.ceil(Math.random()* 20)
var ans = number/2
var text = "Think a number in your Mind!"
var array = ["Think the same number for your friends!","Now add these two numbers together!","Then add my number in it "+ number,"Give half to the poor!","Give the friend's number back to the friend! ","Your remind number is " + ans]
var line = document.getElementById("line")
line.innerHTML = text
var i = 0
function next () {
    line.innerHTML = array[i]
    i++
    if (i === array.length + 1) {
        alert("Thanks for playing this Game😊")
        line.innerHTML = array[5]
        var btn = document.getElementById("btn")
        btn.disabled = true
    }
}