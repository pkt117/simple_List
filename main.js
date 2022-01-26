const text_write = document.querySelector(".text_write");
const add_btn = document.querySelector(".add_btn");
const list = document.querySelector(".list");

// + 버튼 클릭시 리스트 등록
add_btn.addEventListener("click", (e) => {
  if (text_write.value == "") return;
  list_append();
});

// enter 누를시 리스트 등록
text_write.addEventListener("keypress", (item) => {
  if (item.key !== "Enter" || text_write.value == "") return;
  list_append();
});

// 리스트 등록 함수
function list_append() {
  const list_item = document.createElement("li");
  list_item.setAttribute("class", "item");
  list_item.innerHTML = `<span>${text_write.value}</span>
        <button class="remove_btn"> <i class="fas fa-trash-alt"></i> </button>
    `;
  list.appendChild(list_item);
  text_write.value = "";
  text_write.focus();
}

// remove 버튼 클릭으로 리스트 지우기
list.addEventListener("click", (e) => {
  const targetNode = e.target.parentNode;
  if (targetNode.className !== "remove_btn") return;

  list.removeChild(targetNode.parentNode);
});
