import Component from "../Component/Component.js";

class AppComponent extends Component {
  public listNavigationControls = document.createElement("ul");;

  constructor() {
    const parentElementTag = "header";
    const parentElement = document.createElement(parentElementTag);
    const tag = "nav";
    const className = "navbar";

    super(parentElement, tag, className);
  }

  render() {
    this.containerElement.append(this.parentElement);

    this.parentElement.append(this.element);

    this.listNavigationControls.className = "navbar__controls";
    this.element.append(this.listNavigationControls);
  }
}

export default AppComponent;
