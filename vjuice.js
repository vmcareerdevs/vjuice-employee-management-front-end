//this javascript program adds, deletes, updates, and searches employee records. the end user inputs the data into the webpage created by
//the html file vjuice.html

//all records get dumped here
let employeeRecords = []

function search() {
    let searchValue = document.getElementById('search').value
    for (let i = 0; i < employeeRecords.length; i++) {
    if (searchValue == employeeRecords[i]['ID']) {
        //if match found, clear field and return matching record
        document.getElementById('search').value = ''
        return console.log('Record Found:'),employeeRecords[i]
        }
        //if no match, clear field and return no record found
    } return document.getElementById('search').value = '','No Record Found'
}
function update() {
    const updateValue = document.getElementById('updateID').value
    const obj = {}
    const elements = document.getElementsByClassName('updateProp')
    for (let i = 0; i < employeeRecords.length; i++) {
        if (updateValue == employeeRecords[i]['ID']) {
            //if match found, delete old record and replace with new, then clear fields and push updated record to all records
            employeeRecords.splice(i,1)
            for (let j = 0; j < elements.length; j++) {
                obj[document.getElementsByClassName('addProp')[j].id] = elements[j].value
                document.getElementsByClassName('updateProp')[j].value = ''
                }
                employeeRecords.push(obj)
            return 'Record Updated'
            //if no match, clear fields and return no record found
        } for (let k = 0; k < elements.length; k++) {
            document.getElementsByClassName('updateProp')[k].value = ''
            return 'No Record Found'
        }
    } 
}
function add() {
    const obj = {}
    const elements = document.getElementsByClassName('addProp')
    let checkValue = document.getElementById('ID').value
    for (let i = 0; i < employeeRecords.length; i++) {
    if (checkValue == employeeRecords[i]['ID']) {
    //if match found, return error
        return 'Error: employee ID already exists!'
        }
    }
    //if no match, create record, reassign key:value labels, clear fields, and add record to all records
    for (let i = 0; i < elements.length; i++) {
        obj[elements[i].id] = elements[i].value
        document.getElementsByClassName('addProp')[i].value = ''
        }
        employeeRecords.push(obj)
        return 'Record Added'
    }

function remove() {
    let deleteValue = document.getElementById('deleteRecord').value
    for (let i = 0; i < employeeRecords.length; i++) {
    if (deleteValue == employeeRecords[i]['ID']) {
     //if match found, delete record
        document.getElementById('deleteRecord').value = ''
        employeeRecords.splice(i,1)
        return 'Record Deleted'
        } //if no match found, return no record found
    } return 'No Record Found'
}