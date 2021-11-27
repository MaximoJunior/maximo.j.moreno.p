

export const saveUser = async (data) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      };

      let data = await fetch("https://mmmmmmmm/s", requestOptions);
      data = await data.json();
      return data;
}
