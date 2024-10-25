const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector(".input").value;
  const description = document.querySelector(".select").value;
  const amount = document.querySelector(".number").value;
  if (document && description && amount) {
    const ExpensiveList = document.querySelector(".ExpenseList");
    const NewElement = document.createElement("tr");
    NewElement.innerHTML = `<td>${input}</td> <td>${description}</td> <td>${amount}</td>`;
    ExpensiveList.append(NewElement);
    document.querySelector(".input").value = "";
    document.querySelector(".select").value = "";
    document.querySelector(".number").value = "";
  } else {
    return alert("input fild");
  }
});
