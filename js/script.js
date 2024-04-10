import { setupMonacoEditor } from "./monaco-editor";
import { toggleTheme } from "./monaco-editor";

setupMonacoEditor();

document
  .getElementById("theme-select")
  .addEventListener("change", (event) => toggleTheme(event.target.value));

  // document
  // .getElementById("language-select")
  // .addEventListener("change", (event) => toggleLanguage(event.target.value));
