export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ben",
  lastName: "Sule",
  age: 20,
  location: "Adenta",
};

const student2: Student = {
  firstName: "Yakubu",
  lastName: "Sule",
  age: 22,
  location: "Madina",
};

const studentsList: Student[] = [student1, student2];

// Create table
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

// Create header row
const headerRow: HTMLTableRowElement = document.createElement("tr");

const firstNameHeader: HTMLTableCellElement = document.createElement("th");
firstNameHeader.textContent = "First Name";

const locationHeader: HTMLTableCellElement = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);

// Populate table rows
studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

// Assemble table
table.appendChild(thead);
table.appendChild(tbody);

// Append table to document body
document.body.appendChild(table);
