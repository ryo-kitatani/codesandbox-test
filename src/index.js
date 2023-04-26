

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // ulタグを作成
  const ul = document.createElement("ul");
  ul.className = "list-row";
  // liタグの作成
  const li = document.createElement("li")
  li.innerText = inputText

  // button(完了)
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了"
  completeBtn.addEventListener("click", () => {
    deleteFromIncompleteList(completeBtn.parentNode);

    const addTarget = completeBtn.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;

    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";

    addTarget.appendChild(li)
    addTarget.appendChild(backBtn)
    console.log(addTarget)
    document.getElementById("complete-list").appendChild(addTarget)
  })

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除"
  deleteBtn.addEventListener("click", () => {
    deleteFromIncompleteList(deleteBtn.parentNode);
  })



  ul.appendChild(li)
  ul.appendChild(completeBtn)
  ul.appendChild(deleteBtn)
  document.getElementById("incomplete-list").appendChild(ul)
}

// 未完リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target)
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd())
