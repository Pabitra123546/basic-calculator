const display = document.getElementById("display");
let current = "";
let memory = 0;

document.querySelectorAll("button").forEach(button => {
  if (!button.onclick) {
    button.addEventListener("click", () => {
      const value = button.textContent;

      if (value === "=") {
        try {
          current = eval(current.replace("²", "**2").replace("√", "Math.sqrt"));
          display.textContent = current;
        } catch {
          display.textContent = "Error";
        }
      } else if (value === "C" || value === "CE") {
        current = "";
        display.textContent = "0";
      } else if (value === "⌫") {
        current = current.slice(0, -1);
        display.textContent = current || "0";
      } else if (value === "+/-") {
        if (current.startsWith("-")) {
          current = current.substring(1);
        } else {
          current = "-" + current;
        }
        display.textContent = current;
      } else {
        current += value;
        display.textContent = current;
      }
    });
  }
});

function del() {
  current = current.slice(0, -1);
  display.textContent = current || "0";
}

function memoryAdd() {
  memory += parseFloat(display.textContent) || 0;
}

function memorySubtract() {
  memory -= parseFloat(display.textContent) || 0;
}

function memoryRecall() {
  current = memory.toString();
  display.textContent = current;
}

function memoryClear() {
  memory = 0;
}
