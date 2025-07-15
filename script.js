function calculateTotalMarks(arr,weight)
{
    
    let totalMarks=0;
    arr.forEach(function(i,index){
        if(i!==""){
            totalMarks=totalMarks+i;
        }
    })
    console.log(totalMarks);
    return (totalMarks/40)*weight;

}
function displayData(){
    let quiz=[];
    let assignment=[];
    let midMarks=Number(document.getElementById("mid").value);
    let finalMarks=Number(document.getElementById("final").value);
    let weightElement;
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
    weightElement=document.getElementById("qweight");
    weightElement=weightElement.options[weightElement.selectedIndex].value;
    let obtMarks=calculateTotalMarks(quiz,weightElement);
    document.getElementById("quiz_marks").innerHTML=obtMarks.toFixed(2)+" out of "+weightElement;
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
    weightElement=document.getElementById("aweight");
    weightElement=weightElement.options[weightElement.selectedIndex].value;
    obtMarks=calculateTotalMarks(assignment,weightElement);
    document.getElementById("assignment_marks").innerHTML=obtMarks.toFixed(2)+" out of "+weightElement;
    document.getElementById("mid_marks").innerHTML=midMarks;
    document.getElementById("final_marks").innerHTML=finalMarks;

}
let submit=document.getElementById("submit_button");
submit.addEventListener("click",function(e){
    e.preventDefault();
    displayData();
})