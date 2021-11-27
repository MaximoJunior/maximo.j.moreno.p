

export const getDepartments = async (limit, offset ) => {
    let data = fetch(`https://mmmmmmmm?limit=${ limit }&offset=${ offset }`, );
    data = await data.json();
    return data;
}
