

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // ulタグを作成
  const ul = document.createElement("ul");
  ul.className = "list-row";
  // liタグの作成
  const li = document.createElement("li")
  li.innerHTML = inputText

  // button(完了)
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了"
  completeBtn.addEventListener("click", () => {
    console.log("完了")
  })

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除"
  deleteBtn.addEventListener("click", () => {
    console.log("削除")
  })

  ul.appendChild(li)
  ul.appendChild(completeBtn)
  ul.appendChild(deleteBtn)
  document.getElementById("incomplete-list").appendChild(ul)
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd())
