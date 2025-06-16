"use client";

import { Card, CardContent, CardHeader, CardTitle
 } from "@/components/ui/card";
import AddNewButton from "./add-new-button";
import Link from 'next/link';
import { getHillCount } from "@/lib/actions/hillActions";
import { getDotLoops } from "@/lib/actions/dotActions";

import React, { useEffect, useState } from "react";

 export default function RunStats() {
    const [hillCount, setHillCount] = useState<number | null>(null);
    const [hillError, setHillError] = useState<string | null>(null);
    const [dotLoops, setDotLoops] = useState<number | null>(null);
    const [dotError, setDotError] = useState<string | null>(null);

    useEffect(() => {
        getHillCount()
            .then((result) => {
                if (typeof result === "number") {
                    setHillCount(result);
                } else if (result && result.error && Array.isArray(result.error.message)) {
                    setHillError(result.error.message.join(", "));
                } else {
                    setHillError("Unknown error");
                }
            })
            .catch(() => setHillError("Failed to fetch hill count"));
    }, []);

    useEffect(() => {
        getDotLoops()
            .then((result) => {
                if (typeof result === "number") {
                    setDotLoops(result);
                } else if (result && result.error && Array.isArray(result.error.message)) {
                    setDotError(result.error.message.join(", "));
                } else {
                    setDotError("Unknown error");
                }
            })
            .catch(() => setDotError("Failed to fetch dot loops"));
    }, []);

    return <div className="grid md:grid-cols-3 gap-5">
        <Card className="border-amber-500">
            <CardHeader>
                <CardTitle>Hills</CardTitle>
            </CardHeader>
            <CardContent>
            <p>Record of repeats on a nearby ski hill.  Intended to build leg strength.</p>
            </CardContent>
          <Link href='/dashboard/hills/add'>
          <AddNewButton />
          </Link>
          <p className="text-center text-2xl  mt-2">
            YTD= 
            {hillError
                ? `Error: ${hillError}`
                : hillCount !== null
                ? hillCount
                : "Loading..."}
          </p>
        </Card>
        <Card className="border-amber-500">
        <CardHeader>
                <CardTitle>Runs</CardTitle>
            </CardHeader>
            <CardContent>
           <p>Record of training runs, both on roads and on trails.</p>
            </CardContent>
           <Link href='/dashboard/runs/add'>
          <AddNewButton />
          </Link>
          
        </Card>
        <Card className="border-amber-500">
        <CardHeader>
                <CardTitle>Dots</CardTitle>
            </CardHeader>
            <CardContent>
        <p>Speed workouts simulating interval training on a track.  Painted dots spaced app 220 yds apart around a 2 mile paved loop.</p>
            </CardContent>
          <Link href='/dashboard/dots/add'>
          <AddNewButton />
          </Link>
          <p className="text-center text-2xl  mt-2">
            YTD Loops = {dotLoops}
            
          </p>
        </Card>
        <Card className="border-amber-500">
        <CardHeader>
                <CardTitle>Races</CardTitle>
            </CardHeader>
            <CardContent>
        <p>Forty years of races presented in a sortable table.</p>
            </CardContent>
          <Link href='/dashboard/races/add'>
          <AddNewButton />
          </Link>
        </Card>
        <Card className="border-amber-500">
        <CardHeader>
                <CardTitle>Workouts</CardTitle>
            </CardHeader>
            <CardContent>
          Record of exercises intended to help rehab two injured hamstrings and also to strengthen an aging body.
            </CardContent>
           <Link href='/dashboard/workouts/add'>
          <AddNewButton />
          </Link>
        </Card>
    </div>
 }