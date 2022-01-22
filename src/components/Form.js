export default function Form() {
    return (
        <div className="w-full h-52 bg-cyan-500 shadow-xl flex-col flex justify-evenly items-center">
            <p className="text-3xl">Add a new contact:</p>
            <div className="w-full flex justify-center items-center">
            <div className="mr-5 flex-col flex justify-start items-start">
            <label className="m-1 pl-1 bg-cyan-400 shadow-xl rounded-lg">First name: <input type="text" className="rounded-r-lg"></input></label>
            <label className="m-1 pl-1 bg-cyan-400 shadow-xl rounded-lg">Last name: <input type="text" className="rounded-r-lg"></input></label>
            <label className="m-1 pl-1 bg-cyan-400 shadow-xl rounded-lg">Phone number: <input type="text" className="rounded-r-lg"></input></label>
            </div>
            <button className="ml-5 p-0.5 bg-green-400 hover:bg-green-300 shadow-xl rounded-lg">Add new contact</button>
            </div>
        </div>
    );
}