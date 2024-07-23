// --------------------------------------------------------------------------
// ES5 Constructor (like. Class) with Module Pattern (IIFE)

// 🔶 Class 구문을 사용해 ApiClient 클래스를 작성합니다.
// 참고: https://mzl.la/3UdwrNE

// 모듈 불러오기
import { ApiClientClass as ApiClient } from './api/ApiClient.js';

// ES 2015

const todosService = new ApiClient(
  'https://jsonplaceholder.typicode.com/todos'
);

// 비공개 멤버 접근 안됨
// console.log(todosService.#endpoint);

// --------------------------------------------------------------------------

run.readAll = () => todosService.readAll();

run.readOne = () => todosService.readOne(1);

run.create = () =>
  todosService.create({
    id: 0,
    userId: 0,
    title: 'ES 클래스 구문',
    completed: false,
  });

run.update = () =>
  todosService.update(2, {
    completed: true,
  });

run.delete = () => todosService.delete(3);

async function run() {
  try {
    const response = await run.update();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

run();