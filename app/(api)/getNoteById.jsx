import { publicRuntimeConfig } from "@/next.config";

const API_BASE_PATH = publicRuntimeConfig.API_BASE_PATH;

const getNoteById = async (noteId) => {
  const res = await fetch(
    `${API_BASE_PATH}/collections/notes/records/${noteId}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
};

export default getNoteById;
