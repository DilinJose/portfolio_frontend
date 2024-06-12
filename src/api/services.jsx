import { instance } from "./axios";

export const getData = (url, data) => instance.get(url, data);
export const postData = (url, data) => instance.post(url, data);
export const editData = (url, data) => instance.put(url, data);
export const patchData = (url, data) => instance.patch(url, data);
export const deleteData = (url) => instance.delete(url);
export const deletesetData = (url, data) => instance.delete(url, data);

