export const ApiClient = (function () {
  // Class
  // constructor function
  function ApiClient(endpoint) {
    this._endpoint = endpoint;
  }

  // Instance Methods
  ApiClient.prototype.readAll = function (page = 1, pageSize = 5) {
    return fetch(`${this._endpoint}?_page=${page}&_limit=${pageSize}`).then(
      (response) => response.json()
    );
  };

  ApiClient.prototype.readOne = function (id) {
    return fetch(`${this._endpoint}/${id}`).then((response) => response.json());
  };

  ApiClient.prototype.create = function (data) {
    return fetch(this._endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };

  ApiClient.prototype.update = function (id, data) {
    return fetch(`${this._endpoint}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };

  ApiClient.prototype.delete = function (id) {
    return fetch(`${this._endpoint}/${id}`, {
      method: 'DELETE',
    }).then((response) => response.json());
  };

  return ApiClient;
})();

export class ApiClientClass {
  // 비공개 멤버
  #endpoint;

  // 생성자 함수
  // 생성 시점에서 1회 실행
  constructor(endpoint) {
    this.#endpoint = endpoint;
  }

  // 인스턴스(객체) 메서드
  // 클래스로부터 생성된 객체가 공유하는 메서드(생성된 객체가 소유하는 함수)
  readAll(page = 1, pageSize = 5) {
    return fetch(`${this.#endpoint}?_page=${page}&_limit=${pageSize}`).then(
      (response) => response.json()
    );
  }

  readOne(id) {
    return fetch(`${this.#endpoint}/${id}`).then((response) => response.json());
  }

  create(data) {
    return fetch(this.#endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  update(id, data) {
    return fetch(`${this.#endpoint}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  delete(id) {
    return fetch(`${this.#endpoint}/${id}`, {
      method: 'DELETE',
    }).then((response) => response.json());
  }
}