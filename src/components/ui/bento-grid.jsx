import { useRouter } from "next/navigation";
import { cn } from "../../utils/cn";
import { Badge, badgeVariants } from "./badge";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  label,
  path,
}) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "cursor-pointer row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-muted/60 dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      onClick={() => router.push(path)}
    >
      <div className="translate-x-0 transition duration-200">
        {label && (
          <Badge
            className={cn(
              "absolute right-5 top-1",
              label === "New" ? "!bg-green-500" : "!bg-[#ffa500]",
              badgeVariants({ variant: "secondary" })
            )}
          >
            {label}
          </Badge>
        )}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
