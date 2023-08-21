import React from "react";
import getNoteById from "@/app/(api)/getNoteById";
import moment from "moment/moment";

const Note = async ({ params }) => {
  const note = await getNoteById(params.id);
  return (
    <>
      <div className="p-8 mb-[140px] mx-auto break-words max-w-[800px] w-full bg-yellow-200 shadow-xl">
        <div className="mb-4 text-center border-b-2 border-b-slate-800/90 md:text-left">
          <h1 className="text-3xl">{note.title}</h1>
          <p>
            {" "}
            {moment(note.created)
              .utcOffset("+0530")
              .format("MMM Do YYYY, h:mm a")}
          </p>
        </div>
        <p>{note.content}</p>
      </div>
    </>
  );
};

export default Note;
