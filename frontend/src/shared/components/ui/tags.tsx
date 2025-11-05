export default function Tag({ text }: { text: string }) {
  return (
    <div className="flex items-center w-fit whitespace-nowrap rounded-xs px-1.5 py-1 h-[18px] justify-center border border-border-1 bg-bg-primary font-mono uppercase text-xs">
      {text}
    </div>
  );
}
