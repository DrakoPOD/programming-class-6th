import { defineConfig } from "vitepress";
//import markdownItKatex from "markdown-it-katex";
import mathjax3 from "markdown-it-mathjax3";
import markdownItLatex from 'markdown-it-latex'
import markdownItKatex from "@iktakahiro/markdown-it-katex";
// const mk = import("@traptitech/markdown-it-katex")
//import markdownItKatex from "@traptitech/markdown-it-katex";

//const customElements = ['mjx-container'];

const customElements = [
  'mjx-container',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml'
]

export default defineConfig({
  title: "Aprendiendo a Programar",
  description:
    "Una guía para estudiantes de secundaria para aprender a programar en JavaScript",
    base: "programming-class-6th",
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
