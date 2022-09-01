import { useState } from "react";
import Navbar from '../components/Navbar'

const Home= () => {
	const [task, setTask] = useState("");
	const [userInput, setUserInput] = useState([]);

	const AddTask = (val) => {
		val.preventDefault();

		setTask(val.target.value);
	};

	const addTaskToTable = (val) => {
		val.preventDefault();
		setUserInput([task, ...userInput]);
		setTask("");
	};

	const deleteTask = (task) => {
		const updatedArray = userInput.filter(
			(userItem) => userInput.indexOf(userItem) != userInput.indexOf(task)
		);
		setUserInput(updatedArray);
	};

	return (
		<section className="text-gray-600 body-font relative">
			<Navbar />
			<div className="">
				<div>
					<div className="container px-5 py-24 mx-auto">
						<div className="flex flex-col text-center w-full mb-12">
							<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
								Add a task
							</h1>
						</div>
						<div className="lg:w-1/2 md:w-2/3 mx-auto">
							<div className="flex flex-wrap ">
								<div className="p-2 w-full ">
									<div className="relative">
										<label
											htmlFor="email"
											className="leading-7 text-sm text-gray-600"
										>
											Task
										</label>
										<input
											type="text"
											placeholder="Enter task name"
											onChange={AddTask}
											value={task}
											className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
										/>
									</div>
								</div>
								<div className="p-2 w-full">
									<button
										type="button"
										className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
										onClick={addTaskToTable}
									>
										Submit
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="flex flex-col md:mx-40">
						<div className=" sm:-mx-6 lg:-mx-8 overflow-auto">
							<div className="py-2 inline-block min-w-full sm:px-6 lg:px-20">
								<div className="overflow-hidden">
									<table className="min-w-full truncate">
										{userInput.length > 0 && (<thead className="border-b">
											<tr className="">
												<th
													scope="col"
													className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
												>
													S.No
												</th>

												<th
													scope="col"
													className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
												>
													Task
												</th>
											</tr>
										</thead>)}
										<tbody>
											{userInput.length > 0 &&
												userInput.map((task, i) => (
													<tr className="border-b " key={i}>
														<td className="px-6 py-4 sm:text-lg font-medium  text-gray-900">
															{i + 1}
														</td>
														<td className="flex md:text-lg text-gray-900 font-semibold px-6 py-4 items-center">
															<h1 className="truncate">{task}</h1>
															<div className="ml-auto">
																<button
																	onClick={(e) => {
																		e.preventDefault();
																		deleteTask(task);
																	}}
																	className="border-red px-4 py-2 ml-2 rounded-full text-red-600 font-medium"
																>
																	Remove
																</button>
															</div>
														</td>
													</tr>
												))}
										</tbody>
									</table>
									{userInput.length === 0 && (
										<p className="text-center text-xl mt-10 "> No task added</p>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
