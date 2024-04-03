import { setupMonacoEditor } from "./monaco-editor";
import { toggleTheme } from "./monaco-editor";

let toggleButton = document.getElementById("toggleTheme");

setupMonacoEditor();

toggleButton.onclick = () => {
  toggleTheme();
};
