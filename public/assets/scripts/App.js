import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".service-item"), "85%");
new RevealOnScroll($(".mobile-ready-item"), "75%");
new RevealOnScroll($(".technologies__content"), "95%");
new RevealOnScroll($(".recent-work"), "60%");