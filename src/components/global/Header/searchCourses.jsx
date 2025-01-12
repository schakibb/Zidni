"use client";

import * as React from "react";
import { Check, CheckIcon, ChevronsUpDown } from "lucide-react";

import { cn } from "../../../utils/cn";
import { Button } from "../../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../ui/cmdk";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import Link from "next/link";

const frameworks = [
  {
    value: "sfsd",
    path: "/courses/sfsd/learn",
    label: "File and folder structure",
  },

  {
    value: "bdd",
    path: "/courses/bdd/learn",
    label: "Databases",
  },
  {
    value: "algebra",
    path: "/courses/algebra/learn",
    label: "Algebra 3",
  },

  {
    value: "thg",
    // path: "/courses/thg/learn",
    label: "Graph theory (coming soon)",
  },
  {
    value: "archi",
    label: "Data architecture (coming soon)",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] md:w-[200px] justify-between px-2"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select course..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search course..." className="h-9" />
          <CommandList>
            <CommandEmpty>No courses found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Link href={framework.path ?? "/coming-soon"}>
                    {framework.label}
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
