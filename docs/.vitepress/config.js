import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";

const customElements = ['mjx-container'];

export default defineConfig({
  title: "Aprendiendo a Programar",
  description:
    "Una guía para estudiantes de secundaria para aprender a programar en JavaScript",
    base: "/programming-class-6th/",
  themeConfig: {
    sidebar: [
      {
        text: "I - Intro",
        items: [
          { text: "A - Introducción", link: "/intro/01-intro" },
          { text: "B - Conceptos claves", link: "/intro/02-conceptosClaves" },
          { text: "C - Entiendo la Lógica", link: "/intro/03-entendiendoLogica"},
          { text: "D - Diagramas de flujo", link: "/intro/04-diagramasFlujo", items: [
            {text: 'Ejercicios', link: '/intro/041-ejercicioFlujo'}
          ]  },
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
});
