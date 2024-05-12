import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

let computeAmount = function () {
  let amount = 0;

  let add = function (data) {
    amount += data;
    return this;
  };

  let subtract = function (num) {
    amount -= num;
    return this;
  };

  let value = function () {
    return amount;
  };

  return { add, subtract, value };
};

console.log(computeAmount().add(20).subtract(15).value());

let userDetails = {
  name: "Amit kumar",
  Age: 24,
  Designation: "Software Engineer",
};

let printDetails = function (state, country) {
  console.log(this.name + " " + state + " " + country);
};

let userDetails2 = {
  name: "Anuj Suneja",
  Age: 29,
  Designation: "Software Engineer",
};

printDetails.call(userDetails, "Delhi", "India");
//function borrowing
printDetails.call(userDetails2, "bangalore", "India");

// apply list of array
printDetails.apply(userDetails2, ["Delhi", "India"]);

// Bind just like call copy bna lo store karwa lo

let newFun = printDetails.bind(userDetails, "mumbai", "India");
newFun();
