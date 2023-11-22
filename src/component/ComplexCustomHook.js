import { useFetch } from "../hook/useFetch";

const baseUrl = "https://jsonplaceholder.typicode.com";

const ComplexCustomHook = () => {
  const { data: userData } = useFetch(baseUrl, "users");
  const { data: postData } = useFetch(baseUrl, "posts");
  const { data: todoData } = useFetch(baseUrl, "todos");

  return (
    <div>
      <hr />
      <h1>User</h1>
      <hr />
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      <hr />
      <h1>Post</h1>
      <hr />
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
      <hr />
      <h1>Todo</h1>
      <hr />
      {todoData && <pre>{JSON.stringify(todoData[0], null, 2)}</pre>}
    </div>
  );
};
export default ComplexCustomHook;
