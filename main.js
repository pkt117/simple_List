const input = document.querySelector(".text_write");
const add_btn = document.querySelector(".add_btn");
const list = document.querySelector(".list");
const form = document.querySelector(".new__form");

// 리스트 아이템 추가
function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  const item = createItem(text);

  list.appendChild(item);

  item.scrollIntoView({ block: "center" });

  input.value = "";
  input.focus();
}

//리스트 아이템 생성
let id = 0; // 원래는 이런식으로 id 지정하면 안좋음, UUID를 이용
function createItem(text) {
  const item_row = document.createElement("li");
  item_row.setAttribute("class", "item__row");

  item_row.setAttribute("data-target-id", id);

  item_row.innerHTML = `
       <div class="item">
         <span>${text}</span>
         <button class="remove_btn"> 
            <i class="fas fa-trash-alt" data-id=${id}></i>
         </button>
      </div>
    `;
  id++;

  return item_row;
}

// // add버튼 눌렀을경우
// add_btn.addEventListener("click", () => {
//   onAdd();
// });
// // 엔터키눌렀을경우
// input.addEventListener("keydown", (e) => {
//   if (e.isComposing) return;
//   if (e.key === "Enter") {
//     onAdd();
//   }
// });

// add버튼과 엔터키 동시에 처리 -> form의 submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  onAdd();
});

// remove 버튼 클릭시 list 제거
list.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(
      `.item__row[data-target-id="${id}"]`
    );
    toBeDeleted.remove();
  }
});
