"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FiEdit2 } from "react-icons/fi";
import { useRouter } from "next/navigation";

import { publicRuntimeConfig } from "@/next.config";
const API_BASE_PATH = publicRuntimeConfig.API_BASE_PATH;

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const router = useRouter();

  const handleTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const handleContent = (e) => {
    const content = e.target.value;
    setContent(content);
  };

  const handleCreateNote = async () => {
    await fetch(`${API_BASE_PATH}/collections/notes/records`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, content: content }),
    });

    setTitle("");
    setContent("");
    setDialogOpen(false);
    router.refresh();
  };

  return (
    <>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger className="my-2" asChild>
          <Button
            className="text-md rounded-xl bg-slate-800 text-slate-100"
            variant="outline"
          >
            <FiEdit2 />
            <p className="pl-2">Create note</p>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="text-xl">Create note</DialogTitle>
            <DialogDescription>
              Add a new note here. Click create when you're done.
            </DialogDescription>
          </DialogHeader>
          <Input
            value={title}
            onChange={handleTitle}
            className="text-md"
            placeholder={"Title"}
            id="noteTitle"
            required
          />
          <Textarea
            value={content}
            onChange={handleContent}
            className="h-32 resize-none text-md"
            placeholder="Type your note here."
          />
          <DialogFooter>
            <Button onClick={handleCreateNote}>Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateNote;
