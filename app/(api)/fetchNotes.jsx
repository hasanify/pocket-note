import { publicRuntimeConfig } from "@/next.config";

const API_BASE_PATH = publicRuntimeConfig.API_BASE_PATH;

const fetchNotes = async (page) => {
  const res = await fetch(
    `${API_BASE_PATH}/collections/notes/records?page=${page}&perPage=2&sort=-created`,
    { cache: "no-store", headers: { "cross-domain": true } }
  );
  const data = await res.json();
  return data;
};

export default fetchNotes;
