"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import React from "react";
import Image from "next/image";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const DocumentHeading = Document.extend({
    content: "heading block*",
    addKeyboardShortcuts() {
      return {
        Enter: () => this.editor.commands.blur(),
      };
    },
  });

  const DocumentParagraph = Document.extend({
    addKeyboardShortcuts() {
      return {
        Enter: () => this.editor.commands.createParagraphNear(),
        "Shift-Enter": () => this.editor.commands.blur(),
      };
    },
  });

  const editorHeading = useEditor({
    extensions: [
      DocumentHeading,
      StarterKit.configure({
        document: false,
      }),
      Placeholder.configure({
        placeholder: "Type your title...",
      }),
    ],
    immediatelyRender: false,
  });

  const editorParagraph = useEditor({
    extensions: [
      DocumentParagraph,
      StarterKit,
      Placeholder.configure({
        placeholder: "Type your content...",
      }),
    ],
    immediatelyRender: false,
  });

  return (
    <div className="max-h-screen overflow-y-scroll w-full bg-[#191919] text-white">
      <header className="p-5">
        <h1 className="text-xl font-bold">Task Name</h1>
      </header>
      <div>
        <Image
          src="https://placehold.co/800x400"
          alt="logo"
          width={400}
          height={800}
          className="object-cover w-full max-h-96"
        />
      </div>
      <div className="m-20">
        <EditorContent editor={editorHeading} />
        <EditorContent editor={editorParagraph} />
      </div>
    </div>
  );
};

export default Tiptap;
