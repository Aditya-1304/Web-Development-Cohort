type Employee = {
  name : string;
  startDate : Date;
}

interface Manager {
  name : string;
  department : string;
};

type TechLead = Employee & Manager;
const t : TechLead = {
  name: "Aditya",
  startDate: new Date(),
  department: "IT"
}