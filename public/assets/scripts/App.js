import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";
import StickyHeader from "./modules/StickyHeader";
import BackToTop from "./modules/BackToTop";
import CountUp from "./modules/CountUp";

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".service-item"), "85%");
new RevealOnScroll($(".mobile-ready-item"), "75%");
new RevealOnScroll($(".technologies__content"), "95%");
new RevealOnScroll($(".recent-work"), "60%");
var stickyHeader = new StickyHeader();
var backToTop = new BackToTop();
var countUp = new CountUp();