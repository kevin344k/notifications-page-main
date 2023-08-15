const count_msg = document.querySelector("#count-msg")
const option_read_msg = document.querySelector(".option_read_msg")
const notify = document.querySelectorAll(".notify")
const icon_ball_red = document.querySelectorAll(".ico--ball-red")



let newMsg = [];
for (let i = 0; i <= notify.length - 1; i++) {
  
    if (notify[i].classList[2] == "new-msg") {
        newMsg.push("new")
    } 
}
count_msg.textContent = newMsg.length

option_read_msg.addEventListener("click", () => {

    for (let i = 0; i <= notify.length - 1; i++) {

        if (notify[i].classList[2] == "new-msg") {

            notify[i].classList.remove("new-msg")
            icon_ball_red[i].classList.remove("ico--ball-red") 
            newMsg.pop()
           
           
        } 
    }
  console.log(newMsg);

    count_msg.textContent = newMsg.length

})



 

