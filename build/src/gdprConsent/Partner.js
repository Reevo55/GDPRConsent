var Partner = /** @class */ (function () {
    function Partner(id, name, policyUrl) {
        this.accepted = true;
        this.id = id;
        this.name = name;
        this.policyUrl = policyUrl;
    }
    Partner.prototype.createDOMNode = function () {
        var _this = this;
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = this.policyUrl;
        var button = document.createElement("input");
        button.type = "checkbox";
        button.checked = true;
        button.onclick = function () {
            if (_this.accepted) {
                _this.accepted = false;
            }
            else {
                _this.accepted = true;
            }
            console.log("Current state " + _this.accepted);
        };
        a.textContent = this.name;
        li.appendChild(a);
        li.appendChild(button);
        return li;
    };
    return Partner;
}());
export { Partner };
//# sourceMappingURL=Partner.js.map