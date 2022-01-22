export default function Table() {
    return (
        <div className="w-full flex justify-center items-center">
            <table className="w-8/12 border-collapse" id="phoneBookTable">
                <tr>
                    <th className="text-white border border-gray-400 bg-gray-700">First name</th>
                    <th className="text-white border border-gray-400 bg-gray-700">Last name</th>
                    <th className="text-white border border-gray-400 bg-gray-700">Phone number</th>
                </tr>
            </table>
        </div>
    );
}