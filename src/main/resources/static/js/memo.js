const buildHTML = (XHR) => {
  const item = XHR.response;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.createdAt}
      </div>
      <div class"post-content">
        ${item.content}
      </div>
    </div>
  `;  
  return html;
}

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

    // リクエストの送信が成功したとき
    XHR.onload = () => {
      // リクエストが失敗したとき
      if(XHR.status != 200){
        alert(`Error ${XHR.status}： ${XHR.response.error}`);
        return null;
      }
      const list = document.getElementById("list");
      const formText = document.getElementById("content");

      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
}

window.addEventListener('load', post);