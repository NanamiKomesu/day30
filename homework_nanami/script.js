
// 1 #inputボタン要素取得
let inputbtn = document.querySelector("#inputBtn");
// 2 #inputgoalボタンにクリックイベントを追加
inputbtn.addEventListener("click", function () {
    // 3　#txtinput要素取得
    let txtgoal = document.querySelector("#inputgoal");
    console.log(txtgoal);
    // 4　#inputgoalに入力があれば処理実行
    if (txtgoal.value !== "") {
        // 5　.mainboxに<li>作成
        let list = document.createElement("li");
        // 6　<li>にクラス追加
        list.classList.add("textlist");
        // 7　入力された文字を<li>のtextContentに代入
        list.textContent = txtgoal.value;
        console.log(list);
        // 8 ul要素取得、子要素に<li>追加
        let goallist = document.querySelector(".goallist");
        goallist.appendChild(list);
        // 9　inputの中に入力された文字を消去
        document.querySelector("#inputgoal").value = ""

        // 10 Deleteボタンを作成(i)
        let dltBtn = document.createElement("i")
        console.log(dltBtn);
        dltBtn.classList.add("dltButton");
        dltBtn.classList.add("fa-solid");
        dltBtn.classList.add("fa-trash");
        list.appendChild(dltBtn);

        // 14　deleteボタンクリック時の処理を実行させる
        dltBtn.addEventListener("click", function () {
            // 15 クリック時に親要素ごと削除
            dltBtn.parentElement.remove()
        })
    }
})

// 1 #btn要素取得
let boxbtn = document.querySelector("#btn");
// 2 boxbtnにクリック要素を追加
boxbtn.addEventListener("click", function () {
    // 3 #textitem要素取得
    let textitem = document.querySelector("#textitem");
    // 4 #textitemに入力時の処理
    if (textitem.value !== "") {

// 5 .boxに<p>を追加
let p = document.createElement("p")
// 6 textContentに代入
p.textContent = textitem.value;
// 7 親要素boxを取得後、pを子要素にする
let box1 = document.querySelector(".box");
box1.appendChild(p)
// addボタンクリック時、textitemに入力した文字を空にする
textitem.value = ""
// addボタンクリック時、Deleteボタンを表示
// Deleteボタン追加
let dltbtn = document.createElement("i");
console.log(dltbtn);
dltbtn.classList.add("dlt");
dltbtn.classList.add("fa-solid");
dltbtn.classList.add("fa-trash");

p.appendChild(dltbtn)
console.log(p);

// addボタンクリック時、リンク先を表示
let newlink = document.createElement("a");
console.log(newlink);
newlink.classList.add("link");
newlink.textContent = "more";
newlink.href = "index2.html"
let parent = document.querySelector(".box:first-child");
console.log(parent);
console.log(newlink);
parent.appendChild(newlink);
// console.log(newlink);
// // 8 .dltbtn要素取得
// // 9 ｐを親要素とし、dltbtnを子要素にする
// 10 dltbtnクリック時の処理実行
dltbtn.addEventListener("click", function () {
    dltbtn.parentElement.remove()
})

}
})




