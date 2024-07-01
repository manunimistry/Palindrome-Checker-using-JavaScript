document.getElementById("check-btn").addEventListener("click",function(){
    const input = document.getElementById("text-input").value.toLowerCase().replace(/[^a-z0-9]/g,'');
    if(input === ''){
        alert("Please input a value");
        return;
    }
    const reversed = input.split("").reverse().join("");
    const isPalindrome = input === reversed;
    const resultElement = document.getElementById("result");
    resultElement.textContent = isPalindrome ? `${document.getElementById("text-input").value} is a palindrome `: `${document.getElementById("text-input").value} is not a palindrome`;
})
