"use client";

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<main className="mx-auto w-[90%] mt-10 mb-10">
		<div className="flex justify-between items-center">
			<div className="w-[50%] flex justify-center items-center flex-col">
					<h2 className="my-2 text-gray-800 font-bold text-5xl">
						Something went wrong!
					</h2>
					{error && <p className="text-red-500 text-2xl">{error.message}</p>}
					<button onClick={reset} className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Try again!</button>
			</div>
			<div className="w-[50%] flex justify-center items-center">
				<img src="https://i.ibb.co/ck1SGFJ/Group.png"/>
			</div>
		</div>
		</main>
	);
}
