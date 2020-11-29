console.log("connected");

var exam=[{
    question:"Q1.)Integration of sinx",
    a:"a.)-Cosx+C",
    b:"b.)Cosx+C",
    C:"c.)ln(secx+tanx)+C",
    d:"d.)ln(secx-tanx)+C",
    answer:a

},{
question:"Q2.)Integration of cosx",
a:"a.)-sinx+C",
b:"b.)sinx+C",
C:"c.)ln(secx+tanx)+C",
d:"d.)ln(secx-tanx)+C",
answer:b
},
{
    question:"Q3.)Integration of x",
    a:"a.)-x^2/2+C",
    b:"b.)x^2/2+C",
    C:"c.)x+C",
    d:"d.)ln(x)+C",
    answer:b
    },
    {
        question:"Q4.)Integration of cotx",
        a:"a.)-ln(cosecx)+C",
        b:"b.)ln(cosecx)+C",
        C:"c.)ln(secx+tanx)+C",
        d:"d.)ln(secx-tanx)+C",
        answer:a
        },
        {
            question:"Q5.)Integration of tanx",
            a:"a.)-len(secx)+C",
            b:"b.)ln(secx)+C",
            C:"c.)ln(secx+tanx)+C",
            d:"d.)ln(secx-tanx)+C",
            answer:b
            },
            {
                question:"Q1.) Nmae of ch4",
                a:"a.)methane",
                b:"b.)butane",
                C:"c.)pentane",
                d:"d.)benzene",
                answer:a
            
            },{
            question:"Q2.)Benzene ring is also known as",
            a:"a.)kekule ring",
            b:"b.)lord of the ring",
            C:"c.)wring wring",
            d:"d.)all of the above",
            answer:b
            },
            {
                question:"Q3.)ch3cooh is known as",
                a:"a.)formic acid",
                b:"b.)lactic acid",
                C:"c.)acid water",
                d:"d.)acetic acid",
                answer:b
                },
                {
                    question:"Q4.)Benzene ring consist of how many double bond",
                    a:"a.)1",
                    b:"b.)2",
                    C:"c.)ln(secx+tanx)+C",
                    d:"d.)conversion take place between single and double bond",
                    answer:a
                    },
                    {
                        question:"Q5.)avagardo number is ?",
                        a:"a.)6*10^23",
                        b:"b.)6*10^22",
                        C:"c.)1.6*10^-19",
                        d:"d.)none of the above",
                        answer:b
                        },
        {
                        question:"Q1.)value of g is ?",
                        a:"a.)9.8m/s^2",
                        b:"b.)20m/s^2",
                        C:"c.)0.98m/s^2",
                        d:"d.)none of the above",
                        answer:b
                        },
                        {
                        question:"Q2.)formula of speed is?",
                        a:"a.)distance/time",
                        b:"b.)time/distance",
                        C:"c.)force*area",
                        d:"d.)none of the above",
                        answer:b
                        },
                        {
                        question:"Q3.)formula of power?",
                        a:"a.)VI",
                        b:"b.)V^2/R",
                        C:"c.)I^2R",
                        d:"d.)All of the above",
                        answer:b
                        },
                        {
                        question:"Q4.)unit of power?",
                        a:"a.)watt",
                        b:"b.)ampere",
                        C:"c.)coloumb",
                        d:"d.)none of the above",
                        answer:b
                        },
                        {
                        question:"Q5.)Dimension of area ?",
                        a:"a.)L^2",
                        b:"b.)ML",
                        C:"c.)M-L-S",
                        d:"d.)none of the above",
                        answer:b
                        },
                    ]

var count1=0;
var len=exam.length;
console.log(len);
var i=0;
var i1=0;
var id=document.getElementById("question");
var op1=document.getElementById("a-text");
var op2=document.getElementById("b-text");
var op3=document.getElementById("c-text");
var op4=document.getElementById("d-text");
console.log(id);
var count=0;
var count1=0;
mworking();
function mstart(){
    i=0;
    id.innerHTML=exam[i].question;
op1.innerHTML=exam[i].a;
op2.innerHTML=exam[i].b;
op3.innerHTML=exam[i].C;
op4.innerHTML=exam[i].d;

}


function mworking(){
    
        
        
        
            console.log(i);
id.innerHTML=exam[i].question;
op1.innerHTML=exam[i].a;
op2.innerHTML=exam[i].b;
op3.innerHTML=exam[i].C;
op4.innerHTML=exam[i].d;
i++;
count++;
    
    
}
function msg(){
    prompt("Difficulty level of exam according to you?");
    alert("You have Attempted all questions");

}
function countie(){
    count1++;
    if(count1==15){
        msg();
    }
    else{
        mworking();
    }

}

function cmstart()
{
    i=6;
    id.innerHTML=exam[5].question;
    op1.innerHTML=exam[5].a;
op2.innerHTML=exam[5].b;
op3.innerHTML=exam[5].C;
op4.innerHTML=exam[5].d;

}
function pstart(){
    i=11;
    id.innerHTML=exam[10].question;
    op1.innerHTML=exam[10].a;
op2.innerHTML=exam[10].b;
op3.innerHTML=exam[10].C;
op4.innerHTML=exam[10].d;
}










