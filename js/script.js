import SmoothScroll from './modules/smooth-scroll.js';
import AnimateScroll from './modules/animate-scroll.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import OpeningHours from './modules/opening-hours.js';
import fetchProducts from './modules/fetch-products.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import SlideNav from './modules/slide.js';

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

const animateScroll = new AnimateScroll('[data-anime="scroll"]');
animateScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const businessHours = new OpeningHours('[data-dayweek]', 'openpub');
businessHours.init();

fetchProducts('./productsapi.json', '.numbers-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-price');

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');
