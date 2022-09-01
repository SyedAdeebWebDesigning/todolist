import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function Navbar() {
	const { data: session } = useSession();
	if (session) {
		return (
			<div>
				<header className="text-gray-600 body-font shadow-lg">
					<div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
						<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
							<picture>
								<img src="/logo.ico" alt="" className="w-8 h-8" />
							</picture>
							<span className="ml-3 md:text-2xl ">TodoList</span>
						</a>

						<button
							onClick={() => signOut()}
							className="inline-flex items-center md:text-xl bg-pink-500 text-gray-100  hover:scale-110 transition-all duration-200 ease-in-out border-0 py-2 px-4  focus:outline-none hover:bg-pink-500 rounded-xl mt-4 md:mt-0"
						>
							Log Out
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-4 h-4 ml-1"
								viewBox="0 0 24 24"
							>
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</button>
					</div>
				</header>
			</div>
		);
	} else {
		return (
			<div>
				<header className="text-gray-600 body-font shadow-lg">
					<div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
						<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
							<picture>
								<img src="/logo.ico" alt="" className="w-8 h-8" />
							</picture>
							<span className="ml-3 md:text-2xl ">TodoList</span>
						</a>

						<button
							onClick={() => signIn()}
							className="inline-flex items-center md:text-xl bg-pink-500 text-gray-100  hover:scale-110 transition-all duration-200 ease-in-out border-0 py-2 px-4  focus:outline-none hover:bg-pink-500 rounded-xl mt-4 md:mt-0"
						>
							Log In
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-4 h-4 ml-1"
								viewBox="0 0 24 24"
							>
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</button>
					</div>
				</header>
			</div>
		);
	}
}

export default Navbar;
