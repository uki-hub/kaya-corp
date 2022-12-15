class StorageService {
  #ls;

  constructor() {
    this.#ls = localStorage;
  }

  static user(value) {
    if (value) this.#ls.setItem("user", value);
    else return this.#ls.getItem("user");

    return;
  }
}

export default StorageService;
