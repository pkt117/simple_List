const input = document.querySelector(".text_write");
const add_btn = document.querySelector(".add_btn");
const list = document.querySelector(".list");

add_btn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (e) => {
  if (e.key !== "Enter") {
    input.focus();
    return;
  }
  onAdd();
});

// 리스트 아이템 추가
function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  const item = createItem(text);

  list.appendChild(item);

  input.value = "";
  input.focus();
}

//리스트 아이템 생성 (삭제 버튼 이벤트)
function createItem(text) {
  const item_row = document.createElement("li");
  item_row.setAttribute("class", "item");

  const item_text = document.createElement("span");
  item_text.innerText = text;

  const remove_btn = document.createElement("button");
  remove_btn.setAttribute("class", "remove_btn");
  remove_btn.innerHTML = `<i class="fas fa-trash-alt"></i>`;

  remove_btn.addEventListener("click", () => {
    list.removeChild(item_row);
  });
  // 함수안에서 삭제 버튼이벤트을 넣었을때 이 버튼의 item_row를 어떻게 판단하여 삭제하는지 ?

  // -> 코드 블럭에서 또다른 코드 블럭을 만들거나, 우리의 경우 처럼 이벤트 리스터를 등록하는 함수를 만들어서 전달할때 그 위에 정의된 변수들의 데이터가 다 함께 캡쳐 되어져서 (스냅샷이라고 그 순간의 데이터들을 찰칵 하고 카메라를 찍듯이 그 순간의 데이터들이 다 저장이 되어져서 전달이 되어요) 그래서 각각 버튼의 오브젝트가 이벤트 리스너 콜백함수에 저장이 되어져 있기 때문에, 어떤 아이템을 삭제 해야 하는지 아는거예요 :)

  item_row.appendChild(item_text);
  item_row.appendChild(remove_btn);

  return item_row;
}
