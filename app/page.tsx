"use client";
import CodeEditor from "@/components/codeEditor";
import { themes, fonts } from "@/lib/options";
import useStore from "@/lib/store";
import { cn } from "@/lib/utils";
import Controls from "@/components/controls";

export default function Home() {
  const theme = useStore((state) => state.theme);
  const fontStyle = useStore((state) => state.fontStyle);
  const padding = useStore((state) => state.padding);

  const store = useStore();
  const showBackground = useStore((state) => state.showBackground)


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-neutral-950 text-white">
      <button className="absolute top-0 left-0" onClick={() => useStore.setState({ showBackground: !store.showBackground })}>Hello</button>
      <link
        rel="stylesheet"
        href={themes[theme as keyof typeof themes].theme}
        crossOrigin="anonymous"
      />

      <link
        rel="stylesheet"
        href={fonts[fontStyle as keyof typeof fonts].src}
        crossOrigin="anonymous"
      />

      <div
        className={cn(
          "overflow-hidden mb-2 ",

        )}
        style={{
          padding,
          background: showBackground ? themes.coolg1.gradient : "white",
         
        }}

      >
        <CodeEditor />
      </div>
<div className="bg-zinc-800 w-72 h-32">
<Controls/>
</div>
    </div>
  );
}
