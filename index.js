var btn=document.querySelector("#btn");
var car=document.querySelector("h2");
var img1=document.querySelector("#img1");
// var img2=document.querySelector("#img1");

var flag=0;
btn.addEventListener("click",function(){
    if(flag==0){
        car.innerHTML="BMW";
        btn.innerHTML="PREVIOUS CAR";
        img1.src="https://imgs.search.brave.com/hqYGsEaKaHr6FUbWYAMm0eSKxkQjR_KIeoVtZhnjaws/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTY4MDA1NzItMWI4/YWVlZjJjNTRmP2l4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRWOGZH/SnRkM3hsYm53d2ZI/d3dmSHg4TUE9PSZ3/PTEwMDAmcT04MA.jpeg";
        
        flag=1;

        // img1.style.opacity=0;
        // img2.style.opacity=1;
        
    }
    else{
        car.innerHTML="MERCEDES";
        btn.innerHTML="NEXT CAR";
        img1.src="https://imgs.search.brave.com/dhaZwn9k8sZDkL3bWTcOyK91MpKPMPsMJHkVUE2Zf-c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/My8yNy8xNC81Ni9h/dXRvLTIxNzkyMjBf/NjQwLmpwZw";
        
        flag=0;
        
        // img1.style.opacity=1;
        // img2.style.opacity=0;
        
    }
        
})