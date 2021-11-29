export const saveUser = async (fields) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields)
      };
      let data = await fetch("http://localhost:8080/api/users", requestOptions);
      data = await data;
      data = await data.json();
      return data;
}

export const getUsers = async (limit, offset ) => {
  let data = fetch('http://localhost:8080/api/users');
  data = await data;
  data = await data.json();
  return data;
}
