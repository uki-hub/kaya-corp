class StorageService {
  constructor() {}

  static authData(value) {
    if (value) localStorage.setItem("authData", JSON.stringify(value));
    else return JSON.parse(localStorage.getItem("authData"));

    return;
  }
}

export default StorageService;
