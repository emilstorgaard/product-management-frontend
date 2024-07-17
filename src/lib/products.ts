const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts(page: string) {
    const res = await fetch(`${apiUrl}/Products?page=${page}`, {
        cache: "no-store",
    });
    const data = await res.json();
    return data;
}

export async function getProduct(id: string) {
    const res = await fetch(`${apiUrl}/Products/${id}`, {
        cache: "no-store",
    });
    const data = await res.json();
    return data;
}

export async function putProduct(id: string, name: string, description: string) {
    const res = await fetch(`${apiUrl}/Products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            description,
        }),
    });

    if (!res.ok) {
        throw new Error("Failed to edit product");
    }
}

export async function postProduct(name: string, description: string) {
    const res = await fetch(`${apiUrl}/Products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            description,
        }),
    });

    if (!res.ok) {
        throw new Error("Failed to create product");
    }
}

export async function deleteProduct(id: string) {
    await fetch(`${apiUrl}/Products/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}