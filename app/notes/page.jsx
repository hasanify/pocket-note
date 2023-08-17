"use client";
import fetchNotes from "../(api)/fetchNotes";
import Note from "../(Components)/Note";
import SearchBar from "../(Components)/SearchBar";
import CreateNote from "../(Components)/CreateNote";
import { useEffect, useState } from "react";
import {
  HiChevronLeft,
  HiChevronDoubleLeft,
  HiChevronRight,
  HiChevronDoubleRight,
} from "react-icons/hi";

const page = () => {
  const [notes, setNotes] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const handlePageChange = (e) => {
    const direction = e.currentTarget.id;
    let page;
    if (direction == "backward") page = pageNumber - 1;
    else if (direction == "forward") page = pageNumber + 1;

    if (page > totalPages) page = totalPages;
    if (page < 1) page = 1;

    setPageNumber(page);
  };

  useEffect(() => {
    fetchNotes(pageNumber).then((notes) => {
      setTotalPages(notes.totalPages);
      setNotes(notes.items);
    });
  }, [pageNumber]);

  return (
    <>
      <section className="mx-auto max-w-[1000px] mt-8 mb-[140px]">
        <div>
          Page {pageNumber} / {totalPages}
        </div>
        <SearchBar />
        <CreateNote />

        <div className="grid grid-flow-row grid-cols-1 gap-2 gap-y-4 md:gap-4 md:grid-cols-2">
          {notes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              timestamp={note.created}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-1 mt-6 text-3xl font-semibold uppercase pointer-events-auto select-none">
          <HiChevronDoubleLeft
            className={`${
              pageNumber === 1
                ? "text-slate-400 cursor-not-allowed pointer-events-none"
                : "cursor-pointer"
            }`}
            onClick={() => {
              setPageNumber(1);
            }}
          />

          <HiChevronLeft
            className={`${
              pageNumber === 1
                ? "text-slate-400 cursor-not-allowed pointer-events-none"
                : "cursor-pointer"
            }`}
            id="backward"
            onClick={handlePageChange}
          />

          <p className="text-lg">
            {pageNumber} / {totalPages}
          </p>

          <HiChevronRight
            className={`${
              pageNumber === totalPages
                ? "text-slate-400 cursor-not-allowed pointer-events-none"
                : "cursor-pointer"
            }`}
            id="forward"
            onClick={handlePageChange}
          />

          <HiChevronDoubleRight
            className={`${
              pageNumber === totalPages
                ? "text-slate-400 cursor-not-allowed pointer-events-none"
                : "cursor-pointer"
            }`}
            onClick={() => {
              setPageNumber(totalPages);
            }}
          />
        </div>
      </section>
    </>
  );
};

export default page;
