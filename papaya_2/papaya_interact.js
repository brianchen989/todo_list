//js互動
// const missions =  document.querySelector("h3");
// const mission_1 =  document.querySelector(".week");
// const mission_2 =  document.querySelector(".day");
// let mission_group = [mission_1.textContent,mission_2.textContent];
// console.log(missions.textContent);
// for(let i =0;i<mission_group.length;i++){
//     console.log(mission_group[i]);
// }
// console.log(mission_group[0]);
const text=  document.querySelector(".text");//提取文字
const list=  document.querySelector(".list");
const button=  document.querySelector(".button");
function new_mission(){//設函數
    if(text.value ==""){//沒寫東西
        return;
    }
    const mission= document.createElement("li");//設為變數
    //mission.textContent = text.value;//輸入的東西加至變數
    mission.innerHTML = `
        <input type="checkbox" class ="checkbox">
        <label>${text.value}</label>
        <button class="trashcan">☠️</button>
        
        `//設勾勾，垃圾桶圖標
    const trash_can = mission.querySelector(".trashcan")
    const check_box = mission.querySelector(".checkbox")
    trash_can.addEventListener("click",function(){
        mission.remove();
    })//垃圾桶圖標功能
    check_box.addEventListener("change",function(){
        if(check_box.checked){
            mission.style.textDecoration = "line-throught";
            mission.style.color = "#999";
            list.append(mission);

        }//設勾勾功能
        else{
            mission.style.textDecoration = "nonr";
            mission.style.color = "";
            list.prepend(mission);

        }//設勾勾功能
    })
    list.append(mission);//任務加入清單
    text.value = "";
}
button.addEventListener("click" , new_mission);//加欄位
text.addEventListener/*感應動作*/("keyup",function(e){
    if(e.key === "Enter"){
        console.log(text.value)//傳送文字欄內值到主控台
        new_mission();//執行函式
    }
});
// script.js
const inputField = document.getElementById('inputField');

// 當文字欄被點擊時，可以觸發一些自訂的行為（這裡主要是控制 CSS 動畫）
inputField.addEventListener('focus', function() {
  console.log('文字欄已經被點擊');
});

// 當文字欄失去焦點時停止閃爍效果
inputField.addEventListener('blur', function() {
  console.log('文字欄失去焦點');
});