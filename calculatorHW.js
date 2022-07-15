let screen = document.querySelector(".screen")
let buttons = Array.from(document.querySelectorAll(".button"))


buttons.map( button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerHTML){
            case "C":
                screen.innerText = ""
                break;
            case "BACK":
                if(screen.innerText){
                    screen.innerHTML = screen.innerText.slice(0,-1)
                }
                break;
                case "=":
                    screen.innerText = eval(screen.innerText)
                    break;
                case "x^2":
                    screen.innerText = (screen.innerText*screen.innerText)
                   break;
                case "1/x":
                    screen.innerText = (1/screen.innerText)
                    break;
                case "fesvix":
                    screen.innerText = Math.sqrt(screen.innerText)
                    break;
            default:
                screen.innerText += e.target.innerText
        }
    })
})