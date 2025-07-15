function calculateTotalMarks(arr,weightElement)
{
    
    let totalMarks=0;
    let weight=document.getElementById(weightElement);
    arr.forEach(function(i,index){
        console.log("Type Of Marks:"+typeof i)
        if(i!==""){
            totalMarks=totalMarks+i;
        }
    })
    console.log(totalMarks);
    console.log(weight.options[weight.selectedIndex].value);
    return (totalMarks/40)*weight.options[weight.selectedIndex].value;

}
function displayData(){
    let quiz=[];
    let assignment=[];
    
    quiz[0]=Number(document.getElementById("quiz1").value);
    quiz[1]=Number(document.getElementById("quiz2").value);    
    quiz[2]=Number(document.getElementById("quiz3").value);
    quiz[3]=Number(document.getElementById("quiz4").value);
    assignment[0]=Number(document.getElementById("assignment1").value);
    assignment[1]=Number(document.getElementById("assignment2").value);
    assignment[2]=Number(document.getElementById("assignment3").value);
    assignment[3]=Number(document.getElementById("assignment4").value);

    quiz.forEach(function(i,index){

        if(i!==0)
        {
                if(i>10)
                    {
                        alert("Quiz "+i+" marks are greater than 10 plz insert marks w.r.t to 10 as total");
                        return;
                    }    
        }
    })
    let obtMarks=calculateTotalMarks(quiz,"qweight");
    console.log("Marks Obtaine In Quiz:"+obtMarks+" out of:"+document.getElementById("qweight").options[document.getElementById("qweight").selectedIndex].value);
    

    assignment.forEach(function(i,index){
        
        if(i!==0)
            {
            
                if(i>10)
                    {
                        alert("Assignment "+i+" marks are greater than 10 plz insert marks w.r.t to 10 as total");
                        return;
                    }
                    
                }
    })
    
    
    obtMarks=calculateTotalMarks(assignment,"qweight");
    console.log("Marks Obtaine In Assignment:"+obtMarks+" out of:"+document.getElementById("aweight").options[document.getElementById("aweight").selectedIndex].value);
    window.location.href="result.html";
   
}
let submitButton=document.getElementById("submit_button");
submitButton.addEventListener("click",displayData);
