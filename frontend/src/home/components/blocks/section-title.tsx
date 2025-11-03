export default function SectionTitle({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) {
  return (
    <div className="flex flex-col lg:gap-1 cursor-pointer">
      <span className="font-medium leading-tight text-xl">{title}</span>
      <span className="leading-normal text-sm text-text-secondary">
        {subTitle}
      </span>
    </div>
  );
}
