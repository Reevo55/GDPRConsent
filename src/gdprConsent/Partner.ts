export class Partner {
  readonly id: number;
  readonly name: string;
  readonly policyUrl: string;
  accepted?: boolean = true;

  constructor(id: number, name: string, policyUrl: string) {
    this.id = id;
    this.name = name;
    this.policyUrl = policyUrl;
  }

  createDOMNode(): HTMLLIElement {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = this.policyUrl;

    const button = document.createElement("input");
    button.type = "checkbox";
    button.checked = true;

    button.onclick = () => {
      if (this.accepted) {
        this.accepted = false;
      } else {
        this.accepted = true;
      }
      console.log(`Current state ${this.accepted}`);
    };

    a.textContent = this.name;

    li.appendChild(a);
    li.appendChild(button);

    return li;
  }
}
