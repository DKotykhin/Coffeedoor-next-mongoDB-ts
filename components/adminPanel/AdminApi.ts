export async function getData(data = "") {
    const response = await fetch("/api/getAdminData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await response.json();
}

export async function updateData(data = {}, id = "", collection = "") {
    const response = await fetch("/api/updateAdminData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ data, id, collection }),
    });
    return await response.json();
}

export async function deleteData(id = "", collection = "") {
    const response = await fetch("/api/deleteAdminData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, collection }),
    });
    return await response.json();
}

export async function addData(data = {}, collection = "") {
    const response = await fetch("/api/insertAdminData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ data, collection }),
    });
    return await response.json();
}