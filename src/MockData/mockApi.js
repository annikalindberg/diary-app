import data from './data.json';

export const fetchEntries = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    });
};

export const addEntry = (entry) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulate ID assignment as in a real database
            const newEntry = { id: data.length + 1, ...entry };
            data.push(newEntry);
            resolve(newEntry);
        }, 500);
    });
};

export const deleteEntry = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = data.findIndex((entry) => entry.id === id);
            if (index !== -1) {
                data.splice(index, 1);
                resolve(id);
            } else {
                resolve(null);
            }
        }, 500);
    });
};
