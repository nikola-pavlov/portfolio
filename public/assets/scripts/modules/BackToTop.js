import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";

class BackToTop {
	constructor() {
		this.topLink = $(".back-to-top-parent a");
		this.addSmoothScrollingTop();
	}

	addSmoothScrollingTop() {
		this.topLink.smoothScroll();
	}
}

export default BackToTop;
