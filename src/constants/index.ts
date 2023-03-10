export type TTool = {
  key: string;
  value: string;
};

const TOOLS: { [key: string]: TTool } = {
  HTML: {
    key: "html",
    value: "HTML",
  },
  CSS: {
    key: "css",
    value: "CSS",
  },
  JS: {
    key: "js",
    value: "JavaScript",
  },
  REACT: {
    key: "react",
    value: "React",
  },
  NODE: {
    key: "node",
    value: "Node.js",
  },
  NEXT: {
    key: "next",
    value: "Next.js",
  },
  AZURE: {
    key: "azure",
    value: "Azure",
  },
  IONIC: {
    key: "ionic",
    value: "Ionic",
  },
  CORDOVA: {
    key: "cordova",
    value: "Cordova",
  },
  VUE: {
    key: "vue",
    value: "Vue.js",
  },
  SQL: {
    key: "sql",
    value: "Microsoft SQL",
  },
  JQUERY: {
    key: "jquery",
    value: "jQuery",
  },
  GSAP: {
    key: "gsap",
    value: "GSAP",
  },
  BLUE_PRISM: {
    key: "bluePrism",
    value: "Blue Prism",
  },
  WORDPRESS: {
    key: "wordpress",
    value: "WordPress",
  },
  ASP: {
    key: "asp",
    value: "ASP.NET",
  },
  ANGULARJS: {
    key: "angularjs",
    value: "AngularJS",
  },
};

export { TOOLS };
