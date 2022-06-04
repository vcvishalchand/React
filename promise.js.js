useEffect(() => {
  const users = axios.get("https://jsonplaceholder.typicode.com/users");
  const todo = axios.get("https://jsonplaceholder.typicode.com/todos");

  Promise.all([users, todo])
    .then((res) => {
      setUser(res[0].data);
      setTodoList(res[1].data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);