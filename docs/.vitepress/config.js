import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";

const customElements = ["mjx-container", "tab"];

export default defineConfig({
  title: "Aprendiendo a Programar",
  description:
    "Una guía para estudiantes de secundaria para aprender a programar en JavaScript",
  base: "/programming-class-6th/",
  themeConfig: {
    sidebar: [
      {
        text: "I - Intro",
        collapsible: true,
        items: [
          { text: "A - Introducción", link: "/intro/01-intro" },
          { text: "B - Conceptos claves", link: "/intro/02-conceptosClaves" },
          {
            text: "C - Entiendo la Lógica",
            link: "/intro/03-entendiendoLogica",
          },
          {
            text: "D - Diagramas de flujo",
            link: "/intro/04-diagramasFlujo",
            items: [{ text: "Ejercicios", link: "/intro/041-ejercicioFlujo" }],
          },
          {
            text: "E - Números binarios",
            link: "/intro/05-binario",
          },
          {
            text: "F - Compuertas lógicas",
            link: "/intro/06-logicGates",
          },
        ],
      },
      {
        text: "Básicos",
        collapsible: true,
        items: [
          { text: "Antes de empezar", link: "/basics/00-before" },
          { text: "Variables", link: "/basics/01-variables" },
          { text: "Condicionales", link: "/basics/02-conditional" },
          { text: "Bucles", link: "/basics/03-loop" },
          { text: "Funciones", link: "/basics/04-functions" },
          { text: "Arreglos", link: "/basics/05-array" },
        ],
      },
      {
        text: "Intermedios",
        collapsible: true,
        items: [
          { text: "Objetos y Clases", link: "/inter/01-poo" },
          //{ text: "Objetos y Clases", link: "/inter/01-poo" },
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
