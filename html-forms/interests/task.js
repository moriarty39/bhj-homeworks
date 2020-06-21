const checklists = Array.from(document.querySelectorAll(".interest__check"));

checklists.forEach(checklists => 
 checklists.addEventListener("click", () => {
    const parent = checklists.closest("li");
    const children = parent.querySelectorAll("ul.interests_active input.interest__check");

    for (let child of children) {
      if (checklists.checked) {
        child.checked = true;
      } else {
        child.checked = false;
      }
    }
  })
);
