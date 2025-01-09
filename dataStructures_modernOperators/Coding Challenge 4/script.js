/*
* Test Data
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure

*/
const camelCase = () => {
  const listStr = document.getElementsByTagName("textarea")[0].value;
  const rows = listStr.split("\n");
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const cCase = first + second.replace(second[0], second[0].toUpperCase());
    console.log(`${cCase.padEnd(20)} ${"✅".repeat(i + 1)}`);
  }
};

const parentDiv = document.createElement("div");
document.body.append(parentDiv);
const textArea = document.createElement("textarea");
const btn = document.createElement("button");
btn.innerText = "Create";
btn.addEventListener("click", camelCase);
parentDiv.append(textArea);
parentDiv.append(btn);
