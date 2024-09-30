"use client";

import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
	const [searchQuery, setSearchQuery] = useState<string>("");
	const router = useRouter();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// console.log(searchQuery);
		if (searchQuery.trim()) {
			router.push(`/search?q=${searchQuery}`);
		}
	};

	return (
		<form onSubmit={handleSearch}>
			<div className="relative">
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<MagnifyingGlassIcon className="w-5 h-5 text-muted-foreground" />
				</div>
				<Input
					type="search"
					placeholder="Search"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="block w-full pl-10 pr-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
				/>
			</div>
		</form>
	);
}
