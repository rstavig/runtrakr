"use client";

import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format, parseISO, getMonth, getYear, setMonth, setYear } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";



interface DatePickerProps {
  value?: string; // "yyyy-MM-dd"
  onChange?: (date: string) => void;
  startYear?: number;
  endYear?: number;
}


export default function DatePicker({
  value,
  onChange,
  startYear = getYear(new Date()) - 50,
  endYear = getYear(new Date()),
}: DatePickerProps) {
// Convert value string to Date object for internal use
  const date = value ? parseISO(value) : undefined;
  const [open, setOpen] = React.useState(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i
  );

  const handleMonthChange = (month: string) => {
    if (!date) return;
    const newDate = setMonth(date, months.indexOf(month));
    onChange?.(format(newDate, "yyyy-MM-dd"));
  }

  const handleYearChange = (year: string) => {
      if (!date) return;
    const newDate = setYear(date, parseInt(year));
    onChange?.(format(newDate, "yyyy-MM-dd")); 
  }

 const handleSelect = (selectedData: Date | undefined) => {
    if (selectedData) {
      onChange?.(format(selectedData, "yyyy-MM-dd"));
      setOpen(false);
    }
  }


  return (
    <div className="flex items-center space-x-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
           <Button variant="outline" className="normal-case flex justify-between pr-1">
            {date ? format(date, "PPP") : <span>Pick a date</span>}
            <CalendarIcon className="ml-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
                
        <PopoverContent className="w-auto p-0">
          <Calendar
              mode="single"
            selected={date}
            onSelect={handleSelect}
            fixedWeeks
            weekStartsOn={1}
            captionLayout="dropdown"
            onMonthChange={d => onChange?.(format(d, "yyyy-MM-dd"))}          
          />
        </PopoverContent>
      </Popover>

      <Select onValueChange={handleMonthChange} value={date ? months[getMonth(date)] : undefined}>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Month" />
        </SelectTrigger>
        <SelectContent>
          {months.map((month) => (
            <SelectItem key={month} value={month}>
              {month}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={handleYearChange} value={date ? getYear(date).toString() : undefined}>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
  
}