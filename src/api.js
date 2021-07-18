const urlIngredients = "https://norma.nomoreparties.space/api/ingredients";
const urlOrder = "https://norma.nomoreparties.space/api/orders";
export const fetchedData = async () => {
    const res = await fetch(urlIngredients);
    if (res.ok) {
        return await res.json();
    } else {
        throw new Error('Произошла ошибка', res.status);
    }
};

export const fetchedOrder = async (ingredients) => {
    const res = await fetch(urlOrder, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            ingredients: ingredients,
        }),
    });
    if (res.ok) {
        return await res.json();
    } else {
        throw new Error('Произошла ошибка', res.status);
    }
};