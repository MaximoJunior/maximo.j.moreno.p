

export const saveUser = (data) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      };

      return fetch("https://mmmmmmmm/s", requestOptions);
}
