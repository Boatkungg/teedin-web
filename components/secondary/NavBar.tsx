"use client";

import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/secondary/SearchBar";
import { Button } from "@/components/ui/button";

export default function NavBar() {
	return (
		// <nav className="fixed top-0 h-12 w-full bg-white drop-shadow">
		// 	<div className="m-auto flex h-full w-full items-center">
		// 		<div className="m-auto flex items-center">
		// 			<Link href="/">
		// 				<p>TeeDin Web</p>
		// 			</Link>
		// 		</div>
		// 		<div className="m-auto items-center h-full w-1/3">
		// 			<SearchForm />
		// 		</div>
		// 		<div className="m-auto">

		//         </div>
		// 	</div>
		// </nav>
		<nav className=" bg-background border-b sticky top-0">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex items-center justify-between h-14">
					<div className="flex items-center">
						<div className=" flex-shrink-0">
							<Link href="/" className=" text-2xl">
								asdasd
							</Link>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								<Link
									href="/"
									className=" text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
								>
									Home
								</Link>
								<Link
									href="/search"
									className=" text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
								>
									Search
								</Link>
							</div>
						</div>
					</div>
					<div className="hidden md:block flex-1 max-w-md mx-4">
						{/* <div className="relative">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<MagnifyingGlassIcon className="w-5 h-5 text-muted-foreground"/>
							</div>
							<Input
								type="search"
								placeholder="Search"
								className="block w-full pl-10 pr-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"

							/>
						</div> */}
						<SearchBar />
					</div>
					<div className="hidden md:block">
						<div className="ml-4 flex items-center md:ml-6">
							<Button variant="ghost" className="ml-3">
								Log in
							</Button>
							<Button className="ml-3">Sign up</Button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
