export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'active';
  }

  // Activates the tab according to his index
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direction = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direction);
  }

  // Add the Tab's Events
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // Activates the first item
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
