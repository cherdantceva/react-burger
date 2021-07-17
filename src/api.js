const url = "https://norma.nomoreparties.space/api/ingredients";

export const fetchedData = async () => {
    const res = await fetch(url);
    if (res.ok) {
        return await res.json();
    } else {
        throw new Error('Произошла ошибка', res.status);
    }
};