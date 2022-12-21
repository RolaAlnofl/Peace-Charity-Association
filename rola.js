// create header
let head = document.createElement("header");
head.style.cssText = "margin:50px 0px 0px 0px;border: #eee solid 40px;font-size: 60px;display:flex; padding:auto; background-color:#eee; text-align : center;";
head.classList.add("website-head");
document.body.appendChild(head);

let logo = document.createElement("div");
logo.classList.add("logo");
logo.title = "website logo";
logo.style.cssText = "font-weight: bold; color:rgb(13, 122, 122); font- size: 26px;display: flex;justify-content: center;text-align: center;";
logo.innerHTML = "Peace Charity Association";
head.appendChild(logo);

let ul = document.createElement("ul");
let headEle = ["Home","Location","Phone","Service","About"];
for (i= 0;i< headEle.length;i++ ){
    let li = document.createElement("li");
    li.style.margin = "5px";
    li.style.color = "black";
    li.style.cursor = "pointer";
    li.style.display = "flex";
    li.style.alignItems = "flex-end";
    li.style.fontSize = "20px";
    li.style.justifyContent = "flex-end";
    li.innerHTML = headEle[i];
    ul.appendChild(li);
}
ul.classList.add("content");
ul.style.cssText = "display: flex;justify-content: flex-end;align-self : flex-end;";
ul.style.cssText = "display: flex;align-self : flex-end; paddig: 0px; margin: 5px; list-style: none;";
head.appendChild(ul);

let parg = document.createElement("div");
document.body.appendChild(parg);
parg.classList.add("parg");
parg.style.cssText = "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height:calc(100vh - 142px); box-sizing: border-box;";
parg.style.backgroundImage = "url(./sh.jpg)";
parg.style.backgroundSize = "cover";
parg.style.backgroundPosition = "center center";
let pa = document.createElement("p");
let tx = document.createTextNode("Giving..love..peace..joy");
pa.style.cssText = "font-size: 100px;display:flex ;align-items: center; color: rgb(96, 96, 136);"
pa.appendChild(tx);
parg.appendChild(pa);
 
let pag2 = document.createElement("div");
document.body.appendChild(pag2);
pag2.style.cssText = "margin : 30px; border white solid ";
let par2 = document.createElement("p");
let hh3 = document.createElement("h2");
hh3.style.cssText = "margin :30px;"
pag2.appendChild(hh3);
hh3.innerHTML = "About us :";
let tx2 = document.createTextNode(" Al Salam Charitable Society is an association that takes care of providing assistance to needy families and non-families, to students, orphaned children, and women who desperately need help, for example, who do not have a job and others.\nWe also provide medical and residential services.\n You can also donate to those in need through our website.Empowering the most needy families with limited income.Working on developing poor families in a contemporary scientific manner through the “Empowerment” project.Developing a sense of responsibility for families to empower them through guidance, counseling and vocational rehabilitation in line with their experiences and capabilities.Contribute to reducing unemployment to alleviate living suffering.Assistance in securing employment opportunities.");
par2.style.cssText = "font-size: 20px;"
par2.appendChild(tx2);
pag2.appendChild(par2);

let content = document.createElement("div");
document.body.appendChild(content);
content.classList.add("content");
content.style.cssText = "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height:calc(100vh - 142px); box-sizing: border-box;";

for(i= 0;i< 2;i++){
    if(i== 0){
        let Ben = document.createElement("div");
        Ben.style.cssText = "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px";
        Ben.style.backgroundImage = "url(./p0c5s9j5.jpg)";
        Ben.style.backgroundSize = "cover";
        Ben.style.backgroundPosition = "center center";
        let mylink = document.createElement("a");
        mylink.setAttribute("target","_blank");
        mylink.setAttribute("href","http://127.0.0.1:5500/rola3.html");
        mylink.style.cssText = "font-size: 40px; color: white; font-weight:normal; display: block; margin-bottom: 10px; margin-top: 10px;";
        mylink.textContent = "Benefactor";
        Ben.appendChild(mylink);
        content.appendChild(Ben);
      }
          else if(i==1){
        let Ben = document.createElement("div");
        Ben.style.cssText = "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px";
        Ben.style.backgroundImage = "url(./ss.jpg)";
        Ben.style.backgroundSize = "cover";
        Ben.style.backgroundPosition = "center center";
        let mylink = document.createElement("a");
        mylink.setAttribute("target","_blank");
        mylink.setAttribute("href","http://127.0.0.1:5500/rola2.html");
        mylink.style.cssText = "font-size: 40px; color: white; font-weight:normal; display: block; margin-bottom: 10px; margin-top: 10px;";
        mylink.textContent = "Beneficiary";
        Ben.appendChild(mylink);
        content.appendChild(Ben);
        
    }
   
}



// create footer
let foot = document.createElement('footer');
foot.classList.add("footer");
foot.style.cssText = "border: #eee solid 20px;font-size: 20px; padding:auto; background-color:#eee;";

let div2 = document.createElement("div");
div2.append("Education Services"); 
div2.style.cssText = "font-weight: bold; color:rgb(13, 122, 122); font- size: 26px;display: flex;justify-content:flex-end;text-align: center;";
foot.appendChild(div2);
let div1 = document.createElement("div");
div1.append("Medical Services"); 
div1.style.cssText = "font-weight: bold; color:rgb(13, 122, 122); font- size: 26px;display: flex;justify-content:center;text-align: center;";
foot.appendChild(div1);
let div3 = document.createElement("div");
div3.append("Article Services"); 
div3.style.cssText = "font-weight: bold; color:rgb(13, 122, 122); font- size: 26px;display: flex;justify-content:flex-start;text-align: center;";
foot.appendChild(div3);

// foot.style.cssText = "background-color: rgb(35,169,110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255);";
// foot.append("Copyright 2021");
document.body.appendChild(foot);
