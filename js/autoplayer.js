function autoTyper(opt) {
  this.opt = opt
  this.dom = ''
  this.wordQuene = opt.word.split('')
  this.start = function() {
    console.log(this.opt.element);
    this.dom = document.querySelector(this.opt.element)
    this.dom.innerHTML = ''
    this.shiftQuene().next()
  }
  this.shiftQuene = function *() {
    this.opt.before && this.opt.before()
    while (this.wordQuene.length > 0) {
      yield setTimeout(() => {
        var currentWord = document.createTextNode(this.wordQuene.shift())
        this.dom.appendChild(currentWord)
        this.shiftQuene().next()
        if (this.wordQuene.length === 0) {
          this.opt.success && this.opt.success()
        }
      }, this.opt.chartSpeed);
    }
  }
}