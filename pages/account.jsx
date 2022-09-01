import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import Navbar from '../components/Navbar'

function account() {
	const { data: session } = useSession();
	if (session) {
		return (
			<div>
				<Navbar></Navbar>
				<section className="text-gray-600 body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="flex flex-col text-center w-full mb-20">
							<h1 className="sm:text-3xl rounded-full  text-2xl font-medium title-font text-gray-900">
								Hello There {session.user?.name}
							</h1>
						</div>
						<div className="flex items-center justify-center flex-wrap -m-4">
							<div className="p-4 md:w-1/3">
								<div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
									<div className="flex items-center mb-3">
										<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
											<picture className="h-10 w-10 mt-2">
												<img
													src={session.user?.image}
													className="rounded-full"
													alt=""
												/>
											</picture>
										</div>
										<h2 className="text-gray-900 text-lg title-font font-medium">
											{session.user?.name}
										</h2>
									</div>
									<div className="flex-grow">
										<p className="leading-relaxed text-base">
											{session.user?.email}
										</p>
										<button onClick={() => signOut()} className="mt-3 text-pink-500 inline-flex items-center">
											Logout
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-4 h-4 ml-2"
												viewBox="0 0 24 24"
											>
												<path d="M5 12h14M12 5l7 7-7 7"></path>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	} else {
		return (
			<div>
				<Navbar></Navbar>
				<div className="flex flex-col items-center mt-[40vh] justify-center ">
					<h1 className="text-4xl bg-gray-200 px-10 py-8 rounded-full">
						No user found please{" login "}
					</h1>
					
				</div>
			</div>
		);
	}
}

export default account;
