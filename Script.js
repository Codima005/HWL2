firstname = prompt(`Enter name`).trim();
firstNameUpper = firstname[0].toUpperCase();
firstNameLower = firstname.slice(1).toLowerCase();
firstname = firstNameUpper + firstNameLower;
console.log(firstname);

lastname = prompt(`Enter lastname`).trim();
lastnameUpper = lastname[0].toUpperCase();
lastnameLower = lastname.slice(1).toLowerCase();
lastname = lastnameUpper + lastnameLower;
console.log(lastname);

email = prompt(`Enter email`).replaceAll(" ", "").toLowerCase();

if (email[0] === `@`) {
  email = `not valid email <b>${email}</b> (symbol @ find in first place)`;
} else if (email.endsWith(`@`)) {
  email = `not valid email <b>${email}</b> (symbol @ find in last place`;
} else if (!email.includes(`@`)) {
  email = `not valid email <b>${email}</b> (symbol @ not exist)`;
}
console.log(email);

Age = parseInt(prompt(`Enter year of birth`).replaceAll(` `, ``));
CurrendDate = new Date();
CurrentYear = CurrendDate.getFullYear();
Age = CurrentYear - Age;
console.log(Age);

if(isNaN(Age)){
document.write(`<ul class = user>
   <li>Name: <b>${firstname}</b></li>
   <li>Lastname: <b>${lastname}</b></li>
   <li>Email: <b>${email}</b></li>
</ul>`);
} else{
    document.write(`<ul class = user>
   <li>Name: <b>${firstname}</b></li>
   <li>Lastname: <b>${lastname}</b></li>
   <li>Email: <b>${email}</b></li>
   <li>Age: <b>${Age}</b></li>
</ul>`);
};
