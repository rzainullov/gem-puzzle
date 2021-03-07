export default class Component {
	constructor(selector,className) {
		this.component = document.createElement(selector);
		this.className = className;
	}
	setClassName(className) {
		this.component.classList.add(className);
	}
	render() {
		this.setClassName(this.className);
		return this.component;
	}
}