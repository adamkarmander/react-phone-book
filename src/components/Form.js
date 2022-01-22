export default function Form() {
    function addToTable() {
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let phoneNumber = document.getElementById('phoneNumber').value;

        if(firstName.match(/^[a-zA-ZäöåÄÖÅ]+$/) && lastName.match(/^[a-zA-ZäöåÄÖÅ]+$/) && phoneNumber.match(/^\d{10}$/)) {
            let newRow = document.createElement('tr');
            newRow.className="dataRow";
            newRow.innerHTML = 
                '<td class="text-white border border-gray-400 pl-1">' + firstName + '</td>' +
                '<td class="text-white border border-gray-400 pl-1">' + lastName + '</td>' +
                '<td class="text-white border border-gray-400 pl-1">' + phoneNumber + '</td>';

            document.getElementById('phoneBookTable').appendChild(newRow);
            clearInputFields();
            sortByLastName();
        }
    }
    
    function sortByLastName() {
        let switching = true;
        let shouldSwitch, i;

        while(switching) {
            switching = false;
            let rows = document.getElementsByClassName('dataRow');
            for(i = 0; i < rows.length - 1; i++) {
                shouldSwitch = false;
                if(rows[i + 1].getElementsByTagName("td")[1].innerHTML.toLowerCase() < rows[i].getElementsByTagName("td")[1].innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if(shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }

    function clearInputFields() {
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('phoneNumber').value = '';
    }

    return (
        <div className="w-full h-52 bg-cyan-500 shadow-xl flex-col flex justify-evenly items-center">
            <p className="text-3xl">Add a new contact:</p>
            <div className="w-full flex justify-center items-center">
            <div className="mr-5 flex-col flex justify-start items-start">
            <label className="m-1 pl-1 bg-cyan-400 shadow-xl rounded-lg">First name: <input type="text" className="pl-1 rounded-r-lg" id="firstName" defaultValue="Coder"></input></label>
            <label className="m-1 pl-1 bg-cyan-400 shadow-xl rounded-lg">Last name: <input type="text" className="pl-1 rounded-r-lg" id="lastName" defaultValue="Byte"></input></label>
            <label className="m-1 pl-1 bg-cyan-400 shadow-xl rounded-lg">Phone number: <input type="text" className="pl-1 rounded-r-lg" id="phoneNumber" defaultValue="8885559999"></input></label>
            </div>
            <button className="ml-5 p-1 bg-green-400 hover:bg-green-300 shadow-xl rounded-lg" onClick={addToTable}>Add new contact</button>
            </div>
        </div>
    );
}