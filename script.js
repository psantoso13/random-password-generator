let randomN = ['!', '@', '#', '$','%', '^', '&', '*','0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]


let inText = document.getElementById('in-text');
let genBtn = document.getElementById('gen-btn');
let resBtn = document.getElementById('res-btn');
let inputEl = document.getElementById('input-el')
let password = ""


genBtn.addEventListener('click', function() {
    password=''
    
    let index = '';
    
for(let i = 0; i < 13; i++) {
    if(i < 13) {
        index = Math.floor(Math.random()*44)
        // console.log(index)
        password += String(randomN[index])
    }

}

    inText.value = password
})

resBtn.addEventListener('click', function() {
    inText.value = ''
})



