
const nextbtn = document.querySelector('.nextbtn')
const finalResult = document.querySelector('.final-result')
const imgContainer= document.querySelector('.img')





let gobalArray = {
    questions: ['How are you doing today', "How do you see valentine's day", "Are you single", "Do you have anyone in mind to spend the day with", "How do you see Treasure", "If Treasure was to ask you out what will be your response 😁😁", "Treshy can't see this. It just you and your phone. Did you ever at anytime had feelings for him(Treasure). You kn what i mean" ],
    answer1: ["I'm fine", "I'm Not Fine", "I'm Hungry"],
    answer2: ["As Everyother day", "Can't Express in words", "A lovely day"],
    answer3: ["Yes", "No", "It's Complicated"],
    answer4: ["Yes", "No", "No but i'm open"],
    answer5: ["As a Cutie", "Handsomely TroubleSome", "Bad Guy"],
    answer6: ["WoW i would love to", "Who is Treasure", "Hmmm.. I can't say"],
    answer7: ["Never", "🥰 kinda but...for a short time", "Of course i did but of course i can never tell him"]
    

    
}

let active = false
let pickquestion  = -1
let pickanswer  = 0
let secretSms = -1

let checkValue = []
let userName
console.log(userName)

let firstRes
let secondRes
let ThridRes
let forthRes
let fifthRes
let sixthRes
let seventhRes

nextbtn.addEventListener('click',  function show() {
    const startinput = document.querySelector('.input1')
    finalResult.style.display = 'block'
    userName = startinput.value
    if (userName === 'Ruth') {
        imgContainer.style.top = "0"
       let userImg =  document.createElement('img')
       userImg.classList.add('userImg')
       userImg.src = 'Ruth.jpg'
       imgContainer.appendChild(userImg)

    }
    else if (userName === 'Laurina') {
        imgContainer.style.top = "0px"
       let userImg =  document.createElement('img')
       userImg.classList.add('userImg')
       userImg.src = 'lauri.jpg'
       userImg.style.top = '-180px'
       userImg.style.left = '0px'
       imgContainer.appendChild(userImg)

    }
    else {
        imgContainer.style.position = 'absolute'
    }
    let arr = [gobalArray.answer1, gobalArray.answer2, gobalArray.answer3, gobalArray.answer4, gobalArray.answer5, gobalArray.answer6, gobalArray.answer7]
    const questionManager = document.querySelector('.question-manager')
    startinput.style.display = "none"
    nextbtn.style.display = "none"
    
    questionManager.style.display = 'block'
    let questionCab = document.createElement('div')
    let   answers = document.createElement('div')
    let    nextbtn2 = document.createElement('div')
    let answer
    let input
    nextbtn2.addEventListener('click', () => {
        
        const checkedInputs = document.querySelectorAll('.check:checked');
        checkedInputs.forEach(input => {
            checkValue.push(input.value)
            console.log(input.value);
        });
    });
    for (i = 0; i < 3; i++) {
        
        answer = document.createElement('div')
        answer.classList.add('answer')
        input = document.createElement('input')
        input.classList.add('check')
        input.value = arr[pickanswer][i]
        input.type = 'radio'
        input.name = 'checkbtn'
        let p = document.createElement('p')
        p.innerText = arr[pickanswer][i]
        
        answer.appendChild(input)
        answer.appendChild(p)
        answers.appendChild(answer)
        
    }


  

    
    nextbtn2.innerText = 'Next'
    if (pickquestion < 6) {
        pickquestion++
      
    }
    secretSms++
    if (secretSms === 7) {
        sendEmail()
      
    }
    if (pickquestion > 6) {
        sendEmail();
        console.log('helo')
      
    }
    if (pickanswer < 6) {
        pickanswer++
    }

    
    nextbtn2.addEventListener('click', () => {
        
            questionManager.innerHTML = ""
            show()
        
    })

    answers.classList.add('answers')
    questionCab.classList.add('question')
    nextbtn2.classList.add('nextbtn')
    questionCab.innerText = gobalArray.questions[pickquestion]
    questionManager.appendChild(imgContainer)
    questionManager.appendChild(questionCab)
    questionManager.appendChild(answers)
    questionManager.appendChild(answer)
    questionManager.append(nextbtn2)
  


console.log(checkValue)
console.log(checkValue); // Moved this line inside the event listener to ensure it logs after the values are updated

// Checking if checkValue[0] is defined and is a string before using includes
if (checkValue.length > 0 && typeof checkValue[0] === 'string' && checkValue[0].includes("I'm fine")) {
     firstRes = `Good to hear you are fine ${userName}. Seems you slept well `
}
else if (checkValue.length > 0 && typeof checkValue[0] === 'string' && checkValue[0].includes("I'm Not Fine")) {
    if (userName == 'Divine') {
         firstRes = ` ${userName}, Good for you. Only God Knows what you did last night. `
    }
    
    else  {
         firstRes = `${userName} Awwwnn your boyfriend broke your heart?`
    }

}
else if (checkValue.length > 0 && typeof checkValue[0] === 'string') {
    if (userName === 'Laurina') {
        firstRes = `${userName} Sapa Kill you there. Plantgolin` 
    }
    else {
        firstRes = `${userName} Sapa Kill you there. Or i should spend #120 on you`
    }
    
}

if (checkValue.length > 1 && typeof checkValue[0] === 'string' && checkValue[1].includes("As Everyother day")) {
    if (userName == "Laurina") {
        secondRes = `🤣🤣😁.  It a day of love monkey(not Lust). And you forgot me`
    }
     secondRes = `🤣🤣😁. just tell me. what is your problem. It a day of love monkey(not Lust)`
}
else if (checkValue.length > 1 && typeof checkValue[0] === 'string' && checkValue[1].includes("Can't Express in words")) {
     secondRes = `Hmm.. You said can't express in words. Sorrow for me that single`
}
else if (checkValue.length > 1 && typeof checkValue[0] === 'string')  {
     secondRes = `Smalli like you say it a lovely day. That means you suppose take me out`
}
if (checkValue.length > 2 && typeof checkValue[2] === 'string' && checkValue[2].includes("Yes")) {
    if (userName == 'Ruth') {
        ThridRes = `${userName} single?. Did you really have to lie. If it is divine now i will understand. `
    }
    else if (userName == 'Divine') {
        ThridRes = `${userName}, i believe you. A girl with no phone can't definitely have a Guy `
    }
    else if (userName == 'Laurina') {
        ThridRes = `${userName}, Of course you are single. who know this one `
    }

    else  {
        ThridRes = `${userName} you are single, Remain so o. To be single is a gift`
    }
   
}
else if (checkValue.length > 2 && typeof checkValue[2] === 'string' && checkValue[2].includes("No")) {
    ThridRes =  `Now i kn you are not single can i kn the name of your missing ribe`
}
else if (checkValue.length > 2 && typeof checkValue[2] === 'string') {
    ThridRes = `When someone is in too many relationships it gets comlicated`
}




if (checkValue.length > 3 && typeof checkValue[3] === 'string' && checkValue[3].includes("Yes")) {
    if (userName == 'Ruth') {
        forthRes = `I knew it. But before anyone take you out that person will have to pay me as your personal bodyguard`
    }
    if (userName == 'Divine') {
        forthRes = `So who do you have in mind, Maculay?`
    }
    else if (checkValue.length > 3 && typeof checkValue[3] === 'string') {
        forthRes = `${userName} Na only me dey lonely`
    }
   
}
else if (checkValue.length > 3 && typeof checkValue[3] === 'string' && checkValue[3].includes("No")) {
    if (userName == 'Ruth') {
        forthRes = `${userName}, Did you just say you have no one in mind? You can lie. I can read you mind. How about the guy that took your number Yesterday  `
    }
    else if (userName == "Laurina") {
        forthRes =  `Awwwn no one. It because i am not around`
    }
    else {
        forthRes =  `Valentine has come oo and you still don't have anyone in mind? `

    }
}
else if (checkValue.length > 3 && typeof checkValue[3] === 'string')  {
    forthRes = `Glad to hear you are open. Pick anyone in the class and i will get the person for you`
}



if (checkValue.length > 4 && typeof checkValue[4] === 'string' && checkValue[4].includes("As a Cutie")) {
    if (userName == 'Ruth') {
        fifthRes = `Yh i know i am cute by the way. My mirror tells me that`
    }
    if (userName == 'Divine') {
        fifthRes = `And besides i know very well that i am cute. I am even more cute than you`
    }
    else if (checkValue.length > 4 && typeof checkValue[0] === 'string') {
        fifthRes = `And You reallly don't have to tell me i am cute i kn`
    }
   
}
else if (checkValue.length > 4 && typeof checkValue[4] === 'string' && checkValue[4].includes("Handsomely TroubleSome")) {
    if (userName == 'Ruth') {
        fifthRes = `${userName} it is only divine that has the right to claim i am troublesome. But my handsomeness is seen by all`
    }
    if (userName == 'Divine') {
        fifthRes = `${userName} you say i am troublesome. I know why o. it cus you don't have a phone`
    }
    else {
        fifthRes =  `🤣🤣 YOu are not serious`

    }
}
else if (checkValue.length > 4 && typeof checkValue[4] === 'string') {
    fifthRes = `You are in the spirit`
}




if (checkValue.length > 5 && typeof checkValue[5] === 'string' && checkValue[5].includes("WoW i would love to")) {
    if (userName == 'Ruth') {
       sixthRes = `I'm blushing ooo`
    }
    else if (userName == 'Divine') {
       sixthRes = `Are you kidding Me`
    }
    else if (userName == 'Laurina') {
       sixthRes = `Na so you like ramart?`
    }
    else if (checkValue.length > 5 && typeof checkValue[5] === 'string') {
       sixthRes = `Awwnnn. But i will never ask. Dey play`
    }
   
}
else if (checkValue.length > 5 && typeof checkValue[0] === 'string' && checkValue[5].includes("Who is Treasure")) {
    if (userName == 'Ruth') {
       sixthRes = `${userName} Oya return my Eggroll and galla  with the pure water 😁`
    }
    else if (userName == 'Divine') {
       sixthRes = `${userName} Give me back the #120 i spend on you`
    }
    else if (userName == 'Laurina') {
       sixthRes = `${userName} so you don't kn me again right. After you will say you love me`
    }
    else {
       sixthRes =  `YOU deny me abi`

    }
}
else  if (checkValue.length > 5 && typeof checkValue[0] === 'string') {
    sixthRes = ` Dey dream. Me? ask you out? Imagination 🤣🤣`
}






if (checkValue.length > 6 && typeof checkValue[6] === 'string' && checkValue[6].includes("Never")) {

     if (userName == 'Laurina') {
       seventhRes = `Of course Treshy should already kn you didn't. Thanks for your time`
    }
    else
    {
        seventhRes = ""
    }
   
}
else if (checkValue.length > 5 && typeof checkValue[0] === 'string' && checkValue[5].includes("🥰 kinda but...for a short time")) {
 if (userName == 'Laurina') {
       seventhRes = `${userName}, Your secret is safe with me. Treshy can't get to kn about this. He will get crazy and tease you cus you were always laughing at his feelings. Thanks for your time`
    }
    else {
       seventhRes =  ``

    }
}
else  if (checkValue.length > 5 && typeof checkValue[0] === 'string') {
    seventhRes = `Awwwn. I am an andriod but am blushing. Don't worry i won't tell him. Thanks for your time`
}



})



"Never", "🥰 kinda but...for a short time", "Of course i did but of course i can never tell him. Thanks for your time"
// WoW i would love to


// Who is Treasure


// Hmmm.. I can't say
function outPut() {
    if (checkValue.length == 1) {
        finalResult.innerHTML = firstRes
    }
    if (checkValue.length == 2) {
        finalResult.innerHTML = secondRes
    }
    if (checkValue.length == 3) {
        finalResult.innerHTML = ThridRes
    }
    if (checkValue.length == 4) {
        finalResult.innerHTML = forthRes
    }
    if (checkValue.length == 5) {
        finalResult.innerHTML = fifthRes
    }
    if (checkValue.length == 6) {
        finalResult.innerHTML = sixthRes
    }
    if (checkValue.length == 7) {
        finalResult.innerHTML = seventhRes
    }
}

setInterval(outPut)

const sendEmail = () => {
    emailjs.send('service_t5loz5k', 'template_6ylnpwi', {
      to_name: userName,
      from_name: 'Treasure',
      message: checkValue
    }, '3nCNbZm8YugfaDBZ0')
    .then((response) => {
      console.log('Email sent successfully:', response);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      sendEmail()
    });
  };
  
 
  