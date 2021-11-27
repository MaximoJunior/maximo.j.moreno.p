

export const saveUser = async (fields) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields)
      };

      let data = await fetch("https://mmmmmmmm/s", requestOptions);
      data = await data.json();
      return data;
}
