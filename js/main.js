// js file

// 1-misol
var sampleText="JavaScript is a must-know programming language for a modern developer"

function modifyText(text) {
    // textlarni " " belgisi bilan bo'lib array korinishiga o'tqazadi
    var spletText=text.split(" ")
    //result1 ga oldin bo'sh arrayni biriktiramiz
    var  result1=[]
    //for orqali xar bir so'zni result1ni boshiga qo'shib boramiz  
    for (let i = 0; i < spletText.length; i++) {
        
        result1.unshift(spletText[i])
        
    }
    //join orqali xosil bo'lgan arrayni " "bilan qo'shib stringa o'tqazib beradi
    result1=result1.join(" ")
    
    
    
    // textlarni "" belgisi bilan bo'lib array korinishiga o'tqazadi
    var spletText1=sampleText.split("")
    
    //result2 ga oldin bo'sh arrayni biriktiramiz
    var result2=[]
    
    //for orqali xar bir so'zni result2ni boshiga qo'shib boramiz  
    for (let i = 0; i < spletText1.length; i++) {
        result2.unshift(spletText1[i])
        
    }
    //join orqali xosil bo'lgan arrayni ""bilan qo'shib stringa o'tqazib beradi
    result2=result2.join("")
    
    
    // dasturni to'xtatadi va result1,result2 ni funksiya orqali chiqaradi
    return {
        result1 ,
        result2
    }
    
    
}
// console orqali modifyText funksiyasiga sampleText qo'ygandagi qiymatni chiqaradi
console.log(modifyText(sampleText));



