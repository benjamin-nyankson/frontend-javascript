interface Teacher{
    firstName:string;
    fullTimeEmployee:boolean;
    lastName:string;
    location:string;
    contract:boolean;
    yearsOfExperience?:number
    [key:string]:any
}

const teacher1: Teacher = {
  firstName: "Benjamin",
  lastName: "Nyankson",
  fullTimeEmployee: true,
  location: "Accra",
  contract: false,
};

const teacher2: Teacher = {
  firstName: "Ama",
  lastName: "Kofi",
  fullTimeEmployee: false,
  yearsOfExperience: 5,
  location: "Kumasi",
  contract: true,
};