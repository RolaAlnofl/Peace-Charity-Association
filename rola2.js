
let hbead = document.createElement("header");
hbead.style.cssText = "margin:50px 0px 0px 0px ; border: #eee solid 40px;font-size: 80px;display:flex; padding:auto; background-color:#eee; text-align : center;";
hbead.classList.add("website-head");
document.body.appendChild(hbead);

let logo = document.createElement("div");
logo.classList.add("logo");
logo.title = "website logo";
logo.style.cssText = "font-weight: bold; color:rgb(13, 122, 122); font- size: 26px;display: flex;justify-content: center;text-align: center;";
logo.innerHTML = "Are You";
hbead.appendChild(logo);


let content = document.createElement("div");
document.body.appendChild(content);
content.classList.add("content");
content.style.cssText = "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height:calc(100vh - 142px); box-sizing: border-box;";

for(i= 0;i< 2;i++){
    if(i== 0){
        let Ben = document.createElement("div");
        Ben.style.cssText = "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 2); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px";
        Ben.style.backgroundImage = "url(./f.jpg)";
        Ben.style.backgroundSize = "cover";
        Ben.style.backgroundPosition = "center center";
        let mylink = document.createElement("a");
        mylink.setAttribute("target","_blank");
        mylink.style.cssText = "font-size: 40px; color: white; font-weight:normal; display: block; margin-bottom: 10px; margin-top: 10px;";
        Ben.appendChild(mylink);
        content.appendChild(Ben);
           let btn = document.createElement("button");
        btn.classList.add("button");
        btn.style.cssText = "margin:500px 0px 0px 0px;background-color: rgb(163, 163, 180); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255);";
        btn.append("Family");
        Ben.appendChild(btn);
        Ben.appendChild(mylink);

        btn.onclick = function (){
             let numDiv = document.createElement("div");
             numDiv.classList.add("div");
             numDiv.style.cssText = "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 2); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px";
             let lb = document.createElement("label"); 
             lb.classList.add("label");
             lb.append("Number Your family");
             lb.setAttribute("id","nu");
             lb.setAttribute("for","num");
             numDiv.appendChild(lb);
             let inp = document.createElement("input");
             inp.setAttribute("type","number");
             inp.setAttribute("name","number");
             inp.setAttribute("min","2");
             inp.setAttribute("max","10");
             inp.setAttribute("step","1");
             numDiv.appendChild(inp);
             Ben.appendChild(numDiv);

             let numDiv2 = document.createElement("div");
             numDiv2.classList.add("div");
             numDiv2.style.cssText = "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 2); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px";
             let lb2 = document.createElement("label"); 
             lb2.classList.add("label");
             lb2.append("Your Phone Number");
             numDiv2.appendChild(lb2);
             let inp2 = document.createElement("input");
             inp2.setAttribute("type","text");      
             numDiv2.appendChild(inp2);
             Ben.appendChild(numDiv2);
       }


      }
          else if(i==1){
        let Ben = document.createElement("div");
        Ben.style.cssText = "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 2); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px";
        Ben.style.backgroundImage = "url(./stu.jpg)";
        Ben.style.backgroundSize = "cover";
        Ben.style.backgroundPosition = "center center";
        let mylink = document.createElement("a");
        mylink.setAttribute("target","_blank");
        mylink.style.cssText = "font-size: 40px; color: white; font-weight:normal; display: block; margin-bottom: 10px; margin-top: 10px;";
        content.appendChild(Ben);
        let btn = document.createElement("button");
        btn.classList.add("div");
        btn.style.cssText = "margin:500px 0px 0px 0px;background-color: rgb(163, 163, 180); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255);";
        btn.append("Student");
        Ben.appendChild(btn);
        Ben.appendChild(mylink);
    }
   
}

// create footer
let foot = document.createElement('footer');
let summ = document.createElement("input");
summ.setAttribute("type","submit");
summ.setAttribute("value","Send");

foot.classList.add("footer");
foot.style.cssText = "background-color: rgb(47, 206, 206); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255);";
foot.appendChild(summ);
document.body.appendChild(foot);
