// This taken from the Todo List example project.
// Adapt as needed.


"use client"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
 } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function InfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="m-5 bg-blue-400 hover:bg-blue-500 text-white border-blue-500">About This Site</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>About My Todo List</DialogTitle>
          <DialogDescription>
            This is a learning project built with modern web technologies.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <h3 className="font-semibold mb-2">Technologies Used:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Next.js 15</li>
            <li>TypeScript</li>
            <li>Prisma ORM</li>
            <li>PostgreSQL (Neon Database)</li>
            <li>ShadCN UI</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}