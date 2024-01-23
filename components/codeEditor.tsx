"use client";
import Editor from "react-simple-code-editor";
import { cn } from "@/lib/utils";
import React from "react";
import { codeSnippets, fonts } from "@/lib/options";
import hljs from "highlight.js";
import useStore from "@/lib/store";

export default function codeEditor() {
  const store = useStore();

  return (
    <div
      className={cn(
        "min-w-[400px] border rounded-xl shadow-2xl",
        store.darkMode
          ? "bg-black/75 border-zinc-600/40"
          : "bg-white/75 border-gray-200/20"
      )}
    >
      <header
        className="grid grid-cols-6 gap-3 items-center px-4 py-3"
        onClick={() => useStore.setState({ darkMode: !store.darkMode })}
      >
        <div className="flex gap-1.5">
          <div className="rounded-full h-3 w-3 bg-red-500"></div>
          <div className="rounded-full h-3 w-3 bg-orange-500"></div>
          <div className="rounded-full h-3 w-3 bg-green-500"></div>
        </div>
        <div className="col-span-4 flex justify-center">
          <input
            type="text"
            value={store.title}
            onChange={(e) => useStore.setState({ title: e.target.value })}
            onClick={(e) => {
              const inputElement = e.target as HTMLInputElement;
              if (inputElement.select) {
                inputElement.select();
              }
            }}
            spellCheck={false}
            className="bg-transparent text-center text-gray-400 text-sm font-medium focus:outline-none"
          />
        </div>
      </header>
      <div
        className={cn(
          "px-4 pb-4",
          store.darkMode
            ? "brightness-110"
            : "text-zinc-800 brightness-50 saturate-200 contrast-200"
        )}
      >
        <Editor
          onValueChange={(e) => {}}
          value={codeSnippets[0].code}
          highlight={(code) =>
            hljs.highlight(code, { language: codeSnippets[0].language }).value
          }
          style={{
            fontFamily: fonts[store.fontStyle as keyof typeof fonts].name,
            fontSize: store.fontSize,
          }}
          textareaClassName="focus:outline-none"
          onClick={(e) => {
            const inputElement = e.target as HTMLInputElement;
            if (inputElement.select) {
              inputElement.select();
            }
          }}
        />
      </div>
    </div>
  );
}
