function post(){
  // リクエストを送信する処理
  console.log("post OK");
  // id:submitの要素取得
  const submit = document.getElementById("submit")

  // 投稿ボタンがクリックされたとき
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("submit click");
    const form = document.getElementById("form");
    // フォーム内容取得
    const formData = new FormData(form);
    // Ajaxに必要なオブジェクト生成
    const XHR = new XMLHttpRequest();
    // リクエストを初期化
    XHR.open("POST", "/posts", true);
    // レスポンスの形式を指定
    XHR.responseType = "json";
    // フォーム内容をコントローラーへ送信
    XHR.send(formData);
  });
}

window.addEventListener('load', post);