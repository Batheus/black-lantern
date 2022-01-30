export default class AnimateNumbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind the object this to mutation callback
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Receives a DOM element with a number on his text
  // increments from 0 to final number
  static incrementNumber(number) {
    const total = +number.innerText;
    const increment = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      number.innerText = start;
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Activates the incrementNumber for each
  // number selected on DOM
  animateNumber() {
    this.numbers.forEach(number => this.constructor.incrementNumber(number));
  }

  // Function that activates when mutation occur
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animateNumber();
    }
  }

  // Adds the MutationObserver to verify
  // when the active class is added to target element
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
