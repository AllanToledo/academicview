export const ADD = 'ADD';
export const DELETE = 'DELETE';

export function addData(data: any) {
    return { type: ADD, data }
}

export function deleteData() {
    return { type: DELETE }
}