class StateService {
  constructor(router) {
    this.router = router;
  }

  // go(option) {
  //   this.router.go(option);
  // }
  //
  // replace(option) {
  //   this.router.replace(option);
  // }
  //
  // push(option) {
  //   this.router.push(option);
  // }

  bind(name, fn) {
    this[name] = fn;
  }


}

export default StateService;
