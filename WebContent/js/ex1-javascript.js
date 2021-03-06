//---------------------------------ex1------------------------------------------------
//window.onload = function(){
    window.addEventListener("load",function(){
    var btnResult = document.getElementById("btn-result");
    
    btnResult.onclick = function(){
        var x_ = document.getElementById("x-input");
        var x = parseInt(x_.value);
        var y_ = document.getElementById("y-input");
        var y = parseInt(y_.value);

        alert(x+y);
    };
});
//---------------------------------------------ex2---------------------------------------------

window.addEventListener("load",function(){
    var cnt = document.getElementById("countdown-button"); 
    var countspan = document.getElementById("count-span");
    var tid;

    cnt.onclick = function(){
        
        
        if(tid == undefined)
            tid = window.setInterval(
                function(){
                    var count = parseInt(countspan.innerText);
                    console.log(count);
                    count--;
                    countspan.innerText = count;
                    if(count==0)
                        window.clearInterval(tid);}
                ,1000);

    };
});

//------------------------------------------------ex3--------------------------------
window.addEventListener("load",function(){
    var bnt = document.getElementById("btn-ex3");
    var view = document.getElementById("view");

    bnt.onclick = function(){
        var fwin = view.contentWindow;
        fwin.document.getElementById("btn-ex3").value="안녕하세요";

        //window.location.href="http://www.newlecture.com";
        console.log(window.location.protocol);
    };
});


//강사님꺼
// window.addEventListener("load",function(){
//     var bnt = document.getElementById("btn-ex3");
//     var view = document.getElementById("view");
    
//     var fwin = view.contentWindow;
//     var fex3btn;

//     view.onload = function(){
//         fex3btn = fwin.document.getElementById("btn-ex3");
//     };
//     bnt.onclick = function(){
//         ex3btn.value="안녕하세요";
//     };
// });
//-----------------------------------ex4---노드 선택 방법1------------------------------
window.addEventListener("load",function(){
    var section = document.getElementById("ex4");
    
    //방법4
    var button = document.querySelector("#ex4>input");
    var ul = section.querySelector("ul");
    var lis = ul.querySelectorAll("li");
    console.log(lis);

    //방법3
    //var button = section.firstChild; //모든 자식 노드들(공백도)
    // var button = section.firstElementChild;
    // var ul = button.nextElementSibling;
    // var lis = ul.children;
    //방법2-1 childNodes->children
    // var button = section.children[0];//엘리먼트 자식 노드들만
    // var ul = section.children[1];
    // var lis = ul.children;

    //방법2 공백도 자식으로 침.
    // var button = section.childNodes[1];//모든 자식 노드들
    // console.log(button.nodeType);
    // var ul = section.childNodes[3];
    // var lis = ul.getElementsByTagName("li");
    
    //방법1
    // var button = section.getElementsByTagName("input")[0];
    // var ul = section.getElementsByTagName("ul")[0];
    // var lis = ul.getElementsByTagName("li");
    
    button.onclick = function(){
        console.log("test");
        lis[3].remove();
        ul.appendChild(lis[3]);
    };
});

//-------------------------------ex5 속성다루기------------------------------------
// window.addEventListener("load",function(){
//     var section = document.querySelector("ex5");
//     var button1 = document.querySelector(".btn1");
//     var button2 = document.querySelector(".btn2");
//     var img = document.querySelector("img");
//     var tid;

//     button1.onclick=function(){
//         img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHcvp9F7Vc7Ss4xzfw81nm3trflTOMDnuapTexK7cqGtRVdstF";
//     };

//     button2.onclick=function(){
//         //var width = img.width;
//         //모든 스타일 속성은 문자열
//         //img.style.width = "200px";

//         //img.style["border.bottom"]="3px solid red";
//         img.style.borderBottom ="3px solid red";
//         var f1 = function(){
//             var width = img.width;
//             width--;
//             img.style.width = width+"px";

//             if(width==200)
//                 window.clearInterval(tid);
//         };
//         if(tid==undefined)
//             tid = window.setInterval(f1,100);
//     };
// });

//-------------------------------ex5 속성다루기 1-1------------------------------------
window.addEventListener("load",function(){
    var section = document.querySelector("#ex5");
    var sl = section.querySelector(".img-select");
    var button1 = section.querySelector(".btn1");
    var input = section.querySelector(".input");
    var img = section.querySelector("img");
    var tid;
    
    button1.onclick=function(){
        img.src = sl.options[sl.selectedIndex].value; 
        img.style.border=input.value;
        //alert(img);
    };

    // input.onclick=function(){
    //     //var width = img.width;
    //     //모든 스타일 속성은 문자열
    //     //img.style.width = "200px";

    //     //img.style["border.bottom"]="3px solid red";
    //     img.style.borderBottom ="3px solid red";
    //     var f1 = function(){
    //         var width = img.width;
    //         width--;
    //         img.style.width = width+"px";

    //         if(width==200)
    //             window.clearInterval(tid);
    //     };
    //     if(tid==undefined)
    //         tid = window.setInterval(f1,100);
    // };
});
//-------------------------------ex6 노드 조작하기------------------------------------
window.addEventListener("load",function(){
    var section = document.querySelector("#ex6");
    var btntext = section.querySelector(".btn-add-text");
    var btnelment = section.querySelector(".btn-add-elment");
    var contain = section.querySelector(".container");

    btntext.onclick=function(){
       var textNode = document.createTextNode("안녕하세요");
       contain.appendChild(textNode);
    };

    btnelment.onclick=function(){
        var el = document.createElement("div");
        el.className = "box";
        contain.appendChild(el);
    };

});
//-------------------------------ex7 공지사항 조작하기------------------------------------
window.addEventListener("load",function(){
    var section = document.querySelector("#ex7");
    var btnload = section.querySelector(".btn-load");
    var noticeTbody =  section.querySelector(".notice tbody");;
    var btn2 = section.querySelector(".btn2");;
    var notices = [
        {
            id:"6",
            title:"뉴렉쌤 9월 초 국기과정 모집 안내",
            writerId:"newlec",
            regDate:"2019-06-11",
            hit:30
        },
        {
            id:"5",
            title:"뉴렉처 강의 수강 방식 안내",
            writerId:"newlec",
            regDate:"2019-05-24",
            hit:120
        },
        {
            id:"4",
            title:"자바 구조적인 프로그래밍 강의 예제 파일",
            writerId:"newlec",
            regDate:"2019-04-24",
            hit:231
        },
    ];

    //var string="";
    // btn2.onclick=function(){
    //     var request = new XMLHttpRequest();
    //     request.open("GET","/notice/list1-ajax?p=1", false);
    //     request.send();

    //     var json = JSON.parse(request.responseText);//파싱하면 제이슨 객체가됨.
  
    //     json = json.concat(notices);
    //     //방법3: 템플릿 문자열을 이용한 DOM조작
    //     //var keys = Object.keys(notices[0]);
    //     json.sort(function(a,b){
    //         return a.id < b.id ? -1: a.id > b.id ? 1 : 0;
    //     });
    //     var keys = Object.keys(json[0]);
    //     var html =[];
    //     for(var j=0; j<json.length; j++){
    //         html.push("<tr>");
    //         for(var i=0; i<keys.length; i++)
    //             html.push("<td>"+json[j][keys[i]]+"</td>");
    //         html.push("</tr>");
    //         }
    //         //noticeTbody.innerHTML = html.toString();
    //         noticeTbody.innerHTML += html.join("");//문자열을 더해주는것 join
    // };

    btnload.onclick=function(){
        //데이터 요청하기
        var request = new XMLHttpRequest();
        request.open("GET","/notice/list1-ajax?p=1", false);
        request.send();

        var json = JSON.parse(request.responseText);//파싱하면 제이슨 객체가됨.
        //console.log(json[0].title);
        //대체하기
        //notice = json;
        //누적하기
        //notices = notices.concat(json);
        json = json.concat(notices);
        //방법3: 템플릿 문자열을 이용한 DOM조작
        //var keys = Object.keys(notices[0]);
        json.sort(function(a,b){
            return a.id < b.id ? -1: a.id > b.id ? 1 : 0;
        });
        var keys = Object.keys(json[0]);
        var html =[];
        for(var j=0; j<json.length; j++){
            html.push("<tr>");
            for(var i=0; i<keys.length; i++)
                html.push("<td>"+json[j][keys[i]]+"</td>");
            html.push("</tr>");
            }
            //noticeTbody.innerHTML = html.toString();
            noticeTbody.innerHTML += html.join("");//문자열을 더해주는것 join

            //진협방법3
            // var str="";
            // for(var i=0; i<html.length; i++)
            //     str += html[i];
            //     noticeTbody.innerHTML +=str;
        //방법2: 템플릿을 이용한 DOM조작
        // for(var i=0; i<notices.length; i++){
        //     string+="<tr><td>"+notices[i].id+"</td>"
        //             +"<td>"+notices[i].title+"</td>"
        //             +"<td>"+notices[i].writerId+"</td>"
        //             +"<td>"+notices[i].regDate+"</td>"
        //             +"<td>"+notices[i].hit+"</td></tr>";

        //         }
        //     noticeTbody.innerHTML = string;

        //강사님꺼 방법2
        // var keys = Object.keys(notices[0]);
        // for(var j=0; j<notices.length; j++){
        //     noticeTbody.innerHTML +="<tr>";
        //     for(var i=0; i<5; i++)
        //         noticeTbody.innerHTML +="<td>"+notices[j][keys[i]]+"</td>";
        //     noticeTbody.innerHTML +="</tr>";
        // }

        //진협 방법2
        // var keys = Object.keys(notices[0]);
        // for(var j=0; j<notices.length; j++){
        //     var tds="";
        //     for(var i=0; i<5; i++)
        //         tds += "<td>"+notices[j][keys[i]]+"</td>";
        //     noticeTbody.innerHTML +="<tr>"+tds+"</tr>";
        // }
        //방법1: 맨땅의 DOM조작 appendchild
    //     var keys = Object.keys(notices[0]);//["id", "title", "writerId", "regDate", "hit"];
    //    for(var j=0; j<notices.length; j++){
    //     var tr = document.createElement("tr");
    //     for(var i=0; i<5; i++){
    //         var td = document.createElement("td");
    //         var txt = document.createTextNode(notices[j][keys[i]]);
    //         td.appendChild(txt);
    //         tr.appendChild(td);
    //     }
    //     noticeTbody.appendChild(tr);}

     //       방법1: 맨땅의 DOM조작 append
    //     var keys = Object.keys(notices[0]);//["id", "title", "writerId", "regDate", "hit"];
    //    for(var j=0; j<notices.length; j++){
    //     var tr = document.createElement("tr");
    //     for(var i=0; i<5; i++){
    //         var td = document.createElement("td");
    //         var key = keys[i];
    //         //var txt = document.createTextNode(notices[j][keys[i]]);
    //         //td.appendChild(txt);
    //         td.append(notices[j][keys[i]]);
    //         tr.append(td);
    //     }
    //     noticeTbody.append(tr);}

    };

});

//-------------------------ex8 트리거 --------------------------------
// 1. javascript
// 2. DOM+CSSOM
// 3. 이벤트 객체
// 4. 애니메이션(only script, css animation)
// 5. ajax
// 6. 예제
// 7. HTML5 API
window.addEventListener("load", function(){
    var section = document.querySelector("#ex8");
    var fileButton = section.querySelector("input[type=file]");
    var trigerButton = section.querySelector("input[type=button]");
    
    trigerButton.onclick = function(e){
        //alert("ok");

        var event = new MouseEvent(
            "click",
            {
                view:window,
                bubbles:true,
                cancelable:true
            }
        );

        // 옛날 브라우저 방법
        // var event = document.createEvent("MouseEvent");
        // event.initEvent("click",true,true);

        fileButton.dispatchEvent(event);
    };
});
//-------------------------ex9 transition --------------------------------
window.addEventListener("load",function(){
    var section = document.querySelector("#ex9");
    var startButton = section.querySelector(".start");
    var stopButton = section.querySelector(".pause");
    var ball = section.querySelector(".ball");
    startButton.onclick=function(){
        ball.style.transform = "rotate(45deg)";
        // ball.style.left = "300px";
        // ball.style.top = "300px";
        //ball.style.width = "300px";
        // // ball.style.left = "0px";
        // // ball.style.top = "0px";
        // //console.log(ball.style.left); //아무거도 안나옴.
        // var ballStyle = getComputedStyle(ball);
        // ball.style.left = ballStyle.getPropertyValue("left");
        // ball.style.top = ballStyle.getPropertyValue("top");

        // var tid =setInterval(function(){
        //     // ball.style.left = "300px";
        //     // ball.style.top = "300px";

        //     var left = parseInt(ball.style.left);
        //     var top = parseInt(ball.style.top);

        //     left+=1;
        //     top+=1;

        //     ball.style.left = left+"px";
        //     ball.style.top = top+"px";

        //     if(left>=300)
        //         clearInterval(tid);
        // },17);
       
    };

    stopButton.onclick=function(){
        
    };
});
//-------------------------ex10 animation --------------------------------
window.addEventListener("load", function(){
var section = document.querySelector("#ex10");
var button = section.querySelector("input[type=button]");
var dialog = section.querySelector(".dialog");
// var X = section.querySelector(".buttons input[type=button]");
var screen = section.querySelector(".screen");
var content = section.querySelector(".content");
button.onclick=function(){
    //dialog.className +=" show";
    dialog.classList.add("show");
    //dialog.style.display ="block";
   //setTimeout(function(){
   // screen.style.opacity= 0.7;
   //},10);
};

// X.onclick=function(){
//     dialog.classList.remove("show");
// };

screen.onclick=function(){
    dialog.classList.remove("show");
   
   
};

screen.addEventListener("transitionend",function(){
    content.style.display="block";
});
});
//-------------------------ex11 animation --------------------------------
window.addEventListener("load", function(){
    var section = document.querySelector("#ex11");
    var delButton = section.querySelector(".del-button");
    var box = section.querySelector(".box");

    box.addEventListener("animationend", function(){
        box.parentElement.remove();
    });
    delButton.onclick=function(){
        box.classList.add("anl-slide-open");
    };
});
//-------------------------ex12 animation --------------------------------
window.addEventListener("load", function(){
    var section = document.querySelector("#ex12");
    var goButton = section.querySelector(".go-button");
    var container = section.querySelector(".container");

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    goButton.onclick=function(e){
        //var boxes = container.querySelectorAll("div");
        var boxes = container.children;

        for(var i=0; i<boxes.length; i++){
        boxes[i].style.left=getRandomInt(600)+"px";
        boxes[i].style.top=getRandomInt(400)+"px";
        }
    };
});
//-------------------------ex13 캐러셀-----------------------------------
window.addEventListener("load",function(){
var section = document.querySelector("#ex13");
var prevButton = section.querySelector(".prev-button");
var nextButton = section.querySelector(".next-button");
var imgList = section.querySelector(".img-list")
var lis = imgList.children;

prevButton.onclick=function(){
    var centerLi = imgList.querySelector(".center");
    var rightLi = imgList.querySelector(".right");
    var leftLi = imgList.querySelector(".left");

    leftLi.style["z-index"]="3";
    centerLi.style["z-index"]="2";
    rightLi.style["z-index"]="1";

    centerLi.classList.remove("center");
    centerLi.classList.add("right");

    leftLi.classList.remove("left");
    leftLi.classList.add("center");

    setTimeout(function(){
        rightLi.classList.remove("right");
        rightLi.classList.add("left");
        },100);
};

nextButton.onclick=function(){
    var centerLi = imgList.querySelector(".center");
    var rightLi = imgList.querySelector(".right");
    var leftLi = imgList.querySelector(".left");

    rightLi.style["z-index"]="3";
    centerLi.style["z-index"]="2";
    leftLi.style["z-index"]="1";

    centerLi.classList.remove("center");
    centerLi.classList.add("left");

    rightLi.classList.remove("right");
    rightLi.classList.add("center");
    
    setTimeout(function(){
    leftLi.classList.remove("left");
    leftLi.classList.add("right");
    },100);
};
});
//-------------------------ex14 콘텐츠-----------------------------------
window.addEventListener("load",function(){
var section = document.querySelector("#ex14");
var tabLi = section.querySelector(".tab-menu-list");
var conLi = section.querySelector(".content-list");
//var contentDiv = conLi.querySelector("div");
tabLi.onclick=function(e){
   if(e.target.tagName !="A")
        return;
    e.target.preventDefault;
   var contentId = e.target.href.split("#")[1];
   
   for(var i=0; i<conLi.children.length; i++)
       //contentDiv.classList.remove("current");
        conLi.children[i].classList.remove("current");
   
   var contentDiv = conLi.querySelector("#"+contentId);
   contentDiv.classList.add("current");
};
});