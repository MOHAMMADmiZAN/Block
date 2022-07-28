import axios from "axios";

export const isObjEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};

export function deapClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
 // user data upload with image file via axios
export function uploadUserData(data, file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('data', JSON.stringify(data));
    return axios.post('/api/user/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
