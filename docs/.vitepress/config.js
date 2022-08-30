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
        text: "Intro",
        items: [
          { text: "Introducción", link: "/intro/01-intro" },
          { text: "Conceptos claves", link: "/intro/02-conceptosClaves" },
          { text: "Entiendo la Lógica", link: "/intro/03-entendiendoLogica" },
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
