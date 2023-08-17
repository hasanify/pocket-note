import React from "react";
import moment from "moment/moment";
import Link from "next/link";

const Note = ({ title, content, timestamp, id }) => {
  return (
    <Link href={`/notes/${id}`}>
      <div
        className="p-2 md:h-[190px] break-words h-[116px] rounded-xl overflow-clip transition-all ease-in-out bg-yellow-200 shadow-xl cursor-pointer text-slate-800"
        key={id}
      >
        <div className="mb-2 border-b-2 border-b-slate-800/80">
          <p className="text-xl font-bold">{title}</p>

          <div className="relative group w-max">
            <p className="text-sm">{moment(timestamp).fromNow()}</p>

            <p className="absolute top-0 p-1 mt-5 text-sm text-center transition-all duration-75 ease-in-out origin-top-left scale-0 shadow-lg w-max group-hover:scale-100 bg-slate-950 text-slate-100">
              {moment(timestamp).format("MMM Do YYYY, h:mm a")}
            </p>
          </div>
        </div>
        <p>{content}</p>
      </div>
    </Link>
  );
};

export default Note;
