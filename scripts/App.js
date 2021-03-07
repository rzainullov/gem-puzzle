import Header from "./Blocks/Header.js";
import Main from "./Blocks/Main.js";
import Footer from "./Blocks/Footer.js";
export default class App {
	start() {
		const header = new Header("div","header");
		const main = new Main("div","main");
		const footer = new Footer("div","footer");
		document.body.append(header.render(),main.render(),footer.render());
	}
}