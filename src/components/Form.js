export default function Form() {
    function addToTable() {
        let newRow = document.createElement('tr');
        newRow.innerHTML = ' \
        <td class="text-white border border-gray-400 pl-1">Adam</td> \
        <td class="text-white border border-gray-400 pl-1">Kärmander</td> \
        <td class="text-white border border-gray-400 pl-1">0738433504</td> \
        ';

        document.getElementById('phoneBookTable').appendChild(newRow);
    }

    return (
        <div className="w-full h-52 bg-cyan-500 shadow-xl flex-col flex justify-evenly items-center">
            <p className="text-3xl">Add a new contact:</p>
            <div className="w-full flex justify-center items-center">
            <div className="mr-5 flex-col flex justify-start items-start">
            <label className="m-1 pl-1 bg-cyan-400 shadow-xl rounded-lg">First name: <input type="text" className="pl-1 rounded-r-lg" defaultValue="Coder"></input></label>
            <label className="m-1 pl-1 bg-cyan-400 shadow-xl rounded-lg">Last name: <input type="text" className="pl-1 rounded-r-lg" defaultValue="Byte"></input></label>
            <label className="m-1 pl-1 bg-cyan-400 shadow-xl rounded-lg">Phone number: <input type="text" className="pl-1 rounded-r-lg" defaultValue="8885559999"></input></label>
            </div>
            <button className="ml-5 p-1 bg-green-400 hover:bg-green-300 shadow-xl rounded-lg" onClick={addToTable}>Add new contact</button>
            </div>
        </div>
    );
}