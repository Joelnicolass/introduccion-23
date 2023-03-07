const ELEMENTS = {
  HEADERS: {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
  },
  PARAGRAPH: {
    P: "p",
    SPAN: "span",
  },
  BUTTON: "button",
  INPUT: "input",
  LABEL: "label",
  CONTAINERS: {
    DIV: "div",
    SECTION: "section",
    ARTICLE: "article",
    ASIDE: "aside",
  },
  NAV: "nav",
  TABLES: {
    TABLE: "table",
    THEAD: "thead",
    TBODY: "tbody",
    TR: "tr",
    TD: "td",
    TH: "th",
  },
  FORM: "form",
  LINK: "a",
  IMG: "img",
  UL: "ul",
  LI: "li",
  OL: "ol",
  SELECT: "select",
  OPTION: "option",
  TEXTAREA: "textarea",
  VIDEO: "video",
  AUDIO: "audio",
  CANVAS: "canvas",
  SVG: "svg",
  IFRAME: "iframe",
};

const tryGetRoot = () => {
  const root = document.getElementById("root");
  if (!root) return document.body;
  return root;
};

const Title = ({ content, parent = tryGetRoot() }) => {
  const title = document.createElement(ELEMENTS.HEADERS.H1);
  title.textContent = content;
  parent.appendChild(title);
  return {
    element: title,
    setState: (content) => {
      title.textContent = content;
      return title;
    },
  };
};

const Button = ({ content, onClick, parent = tryGetRoot() }) => {
  const button = document.createElement(ELEMENTS.BUTTON);
  button.textContent = content;
  button.addEventListener("click", onClick);
  parent.appendChild(button);
  return {
    element: button,
  };
};

const NICO_FRAMEWORK = {
  createElement: {
    Title,
    Button,
  },
};

const Counter = ({ initialState = 0 }) => {
  let count = initialState;

  const increment = () => {
    count++;
    value.setState(count);
  };

  const value = NICO_FRAMEWORK.createElement.Title({ content: count });
  const button = NICO_FRAMEWORK.createElement.Button({
    content: "Incrementar",
    onClick: increment,
  });
};

Counter({
  initialState: 0,
});
