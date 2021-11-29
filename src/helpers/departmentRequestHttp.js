
export const saveDepartment = async (fields) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields)
      };
      let data = await fetch("http://localhost:8080/api/departments", requestOptions);
      data = await data;
      data = await data.json();
      return data;
}

export const getDepartments = async (limit, offset ) => {
    let data = fetch('http://localhost:8080/api/departments');
    data = await data;
    data = await data.json();
    return data;
}
