

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // ulタグを作成
  const ul = document.createElement("ul");
  ul.className = "list-row";
  // liタグの作成
  const li = document.createElement("li")
  li.innerHTML = inputText

  ul.appendChild(li)
  document.getElementById("incomplete-list").appendChild(ul)
  console.log(ul)
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd())
