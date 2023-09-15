const questions=[
    {
        question:"新一被黑暗組織餵下什麼藥而變小？",
        answers:[
            {text:"APTX-4869",correct:true},{text:"APTX-4986",correct:false},{text:"APTX-4896",correct:false},{text:"APTX-6489",correct:false}
        ]
    },
    {
        question:"承上題，是哪個組織成員偷襲新一的？",
        answers:[
            {text:"琴酒",correct:true},{text:"伏特加",correct:false},{text:"苦艾酒",correct:false},{text:"愛爾蘭",correct:false}
        ]
    },
    {
        question:"在第一部劇場版《引爆摩天樓》中，小蘭最後是剪了什麼顏色的線，讓炸彈停止倒數？",
        answers:[
            {text:"紅色",correct:false},{text:"藍色",correct:true},{text:"綠色",correct:false},{text:"黃色",correct:false}
        ]
    },
    {
        question:"請問下列何者有兄弟姐妹？",
        answers:[
            {text:"光彥",correct:true},{text:"步美",correct:false},{text:"元太",correct:false},{text:"柯南",correct:false}
        ]
    },
    {
        question:"請問毛利小五郎和妃英理現在關係為何？又其原因為何？",
        answers:[
            {text:"離婚，因為小五郎嫌英理煮的菜太難吃",correct:false},{text:"離婚，因為小五郎總是愛看美女，講不聽",correct:false},{text:"分居，因為小五郎嫌英理煮的菜太難吃",correct:true},{text:"分居，因為小五郎總是愛看美女，講不聽",correct:false}
        ]
    },
    {
        question:"為什麼和葉初次見到小蘭的時候對小蘭很有敵意？",
        answers:[
            {text:"因為覺得小蘭比她漂亮",correct:false},{text:"因為覺得小蘭比她聰明",correct:false},{text:"因為她跟服部講話",correct:false},{text:"因為她誤以為小蘭是服部口中的工藤",correct:true}
        ]
    },
    {
        question:"請問下列哪一次的事件，是柯南最難忘，最想挽回的？",
        answers:[
            {text:"雲霄飛車殺人事件",correct:false},{text:"圖書館殺人事件",correct:false},{text:"鋼琴奏鳴曲月光殺人事件",correct:true},{text:"企業家千金殺人事件",correct:false}
        ]
    },
    {
        question:"小蘭在四歲時差點遭到綁架，請問是誰及早發現才阻止一切？",
        answers:[
            {text:"工藤新一",correct:true},{text:"工藤優作",correct:false},{text:"毛利小五郎",correct:false},{text:"目暮警官",correct:false}
        ]
    },
    {
        question:"少年偵探團是由光彥、步美、元太、柯南和小哀組成。請問，誰是團長？",
        answers:[
            {text:"步美",correct:false},{text:"小哀",correct:false},{text:"元太",correct:true},{text:"柯南",correct:false}
        ]
    },
    {
        question:"承上題，少年偵探團的顧問是誰？",
        answers:[
            {text:"小林澄子",correct:true},{text:"毛利小五郎",correct:false},{text:"阿笠博士",correct:false},{text:"鈴木園子",correct:false}
        ]

    },
    {
        question:"在名偵探柯南裡面有一個建築師，喜歡把建築物打造成對稱的樣子，而且喜歡對稱喜歡到甚至把自己的名字改成對稱的？",
        answers:[
            {text:"青里周平",correct:false},{text:"森谷帝二",correct:true},{text:"淺井成實",correct:false},{text:"木木由",correct:false}
        ]

    },
    {
        question:"小蘭會下列哪一項運動？",
        answers:[
            {text:"空手道",correct:true},{text:"跆拳道",correct:false},{text:"合氣道",correct:false},{text:"截拳道",correct:false}
        ]
    },

    {   
        question:"為什麼目暮警官不願意脫帽子？",
        answers:[
            {text:"因為他就喜歡戴帽子而已",correct:false},{text:"保持神秘感",correct:false},{text:"因為他頭上有傷疤",correct:true},{text:"因為他禿頭",correct:false}
        ]
    },
    {
        question:"幾乎什麼都會的柯南，最不擅長事情或是不知道的事情是？",
        answers:[
            {text:"拉小提琴",correct:false},{text:"音感",correct:false},{text:"知道地鐵各線站名",correct:false},{text:"唱歌",correct:true}
        ]
    },
    {
        question:"新一剛變小時是說了什麼讓阿笠博士發現他真的是新一？",
        answers:[
            {text:"說出博士屁股上有痣",correct:true},{text:"說出所有博士的發明",correct:false},{text:"說出博士口頭禪",correct:false},{text:"說出博士家地址和家人",correct:false}
        ]
    }

]

const questionElement=document.getElementById("question");
const ansBtns=document.getElementById("answerBtn");
const nextBtn=document.getElementById("nextQ");

let currectQuestionIndex=0;
let score=0;

function startQuiz(){
     currectQuestionIndex=0;
     score=0;

     nextBtn.innerHTML="下一題";
     showQuestion();
}

function showQuestion(){

    resetState();

    let currectQuestion=questions[currectQuestionIndex];
    let questionNo=currectQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currectQuestion.
    question; 

    currectQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("ans_button");
        ansBtns.appendChild(button);
        if(answer.correct ){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);

        
    });

}

function resetState(){
    nextBtn.style.display="none";
    while(ansBtns.firstChild){
        ansBtns.removeChild(ansBtns.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect=selectBtn.dataset.correct==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(ansBtns.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled="true";
      
    });
    nextBtn.style.display="block";
    
}

function showScore(){
    resetState();
    questionElement.innerHTML=`
    <p>恭喜你完成所有題目，共答對：${score} / ${questions.length} 題</p> `;
    nextBtn.innerHTML="再玩一次";
    nextBtn.style.display="block";
}

function handleNextButton(){
    currectQuestionIndex++;
    if(currectQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}


nextBtn.addEventListener("click",()=>{

    if(currectQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();