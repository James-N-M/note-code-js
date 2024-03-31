import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';

self.MonacoEnvironment = {
    getWorker(_, label) {
        if(label === 'json') {
            return new jsonWorker();
        }
        return new editorWorker();
    }
}

// Add some interactivity to the website
// import { setupCounter } from './counter.js'
// console.log("Hello, world!");

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//         vitejs link
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//        javascript link
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
monaco.editor.create(document.getElementById('monaco-editor'), {
    value: `function(x, y) { 
  return x + y 
}`,
    language: 'javascript',
    scrollbar: { vertical: 'hidden' },
    theme: "vs-light",
});