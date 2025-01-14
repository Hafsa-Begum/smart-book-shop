"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-500">404 - Page Not Found</h1>
        <p className="mt-4 text-gray-600">Sorry, the page you are looking for does not exist.</p>
        <Button asChild className="mt-6">
            <Link href="/">Go back to Home</Link>
        </Button>
      </div>
    );
  }
  