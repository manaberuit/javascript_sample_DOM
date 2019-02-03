//HTMLのIDからDOM要素を取得
const testTabel = document.getElementById('test-table');
const addButton = document.getElementById('add-button');

index = 3;

//追加ボタン押下時に実行させる処理を追加
addButton.addEventListener('click', event => {

    //追加したい要素を生成
    const addItem = document.createElement('tr');
    const addItem1 = document.createElement('td');
    const addItem2 = document.createElement('td');

    //各々のtd要素のテキストを付与
    addItem1.textContent = 'テスト' + index + '-1';
    addItem2.textContent = 'テスト' + index + '-2';

    //生成したtr要素にtdに生成したtd要素を追加
    addItem.appendChild(addItem1);
    addItem.appendChild(addItem2);

    //tableに追加
    testTabel.appendChild(addItem);

    //indexをインクリメント
    index++;
})


