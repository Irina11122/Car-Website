let users = [];
const cars = [
  {
    id: 1,
    make: "Tesla",
    model: "Model S",
    year: 2022,
    color: "Red",
    price: "$89,990",
    features: ["Electric", "Autopilot", "Ludicrous Mode"],
    image:
      "https://purepng.com/public/uploads/large/purepng.com-tesla-model-s-red-carcarvehicletransporttesla-961524657832miq7l.png",
  },
  {
    id: 2,
    make: "Ford",
    model: "Mustang",
    year: 2021,
    color: "Blue",
    price: "$55,300",
    features: ["V8 Engine", "Rear-Wheel Drive", "Convertible"],
    image:
      "https://www.pngmart.com/files/10/Blue-Ford-Mustang-PNG-File-420x231.png",
  },
  {
    id: 3,
    make: "Chevrolet",
    model: "Corvette",
    year: 2023,
    color: "Yellow",
    price: "$60,000",
    features: [
      "Mid-Engine",
      "8-Speed Dual-Clutch",
      "Performance Traction Management",
    ],
    image:
      "https://th.bing.com/th/id/R.b32ab8d5dbb44659d2c0f0bd8f9a26c3?rik=fZnt0t20Bq6UJg&pid=ImgRaw&r=0",
  },
  {
    id: 4,
    make: "BMW",
    model: "M3",
    year: 2022,
    color: "Black",
    price: "$70,895",
    features: [
      "Twin-Turbo Inline-6",
      "All-Wheel Drive",
      "M Sport Differential",
    ],
    image:
      "https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb25f43560e1e3d8e88cb/stills_0640_png/MY2022/15275/15275_st0640_116.png",
  },
  {
    id: 5,
    make: "Audi",
    model: "R8",
    year: 2022,
    color: "White",
    price: "$142,700",
    features: [
      "V10 Engine",
      "Quattro All-Wheel Drive",
      "Carbon Fiber Exterior",
    ],
    image:
      "https://www.365luxurycarhire.com/wp-content/uploads/2017/03/2017_audi_r8_spyder.png",
  },
  {
    id: 6,
    make: "Mercedes-Benz",
    model: "S-Class",
    year: 2021,
    color: "Silver",
    price: "$110,850",
    features: ["Luxury Interior", "V8 Engine", "4MATIC All-Wheel Drive"],
    image:
      "https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2021-Mercedes-Benz-S-Class-Sedan-colour-High-tech-Silver-metallic-CA.png",
  },
  {
    id: 7,
    make: "Porsche",
    model: "911",
    year: 2022,
    color: "Green",
    price: "$99,200",
    features: ["Twin-Turbo Flat-6", "Rear-Wheel Drive", "Sport Chrono Package"],
    image: "https://www.pngarts.com/files/1/Porsche-Transparent-Images.png",
  },
  {
    id: 8,
    make: "Lamborghini",
    model: "Huracan",
    year: 2022,
    color: "Orange",
    price: "$261,274",
    features: ["V10 Engine", "All-Wheel Drive", "Lamborghini Dynamic Steering"],
    image:
      "https://th.bing.com/th/id/R.f95810fce177e57c7822ba27778d3277?rik=NbeGhBGW8a17Dg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f10%2fLamborghini-Huracan-PNG-Transparent-HD-Photo.png&ehk=rKd9XSrMHXJRhzTAxhPr9vbA8Fl%2bQbXVVL3Ma2K%2fTo0%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 9,
    make: "Ferrari",
    model: "488 GTB",
    year: 2021,
    color: "Red",
    price: "$262,647",
    features: ["Twin-Turbo V8", "Rear-Wheel Drive", "Magnetic Suspension"],
    image:
      "https://purepng.com/public/uploads/large/purepng.com-red-ferrari-488-gtb-carcarferrarivehicletransport-961524664035iiglb.png",
  },
  {
    id: 10,
    make: "Jaguar",
    model: "F-Type",
    year: 2022,
    color: "Blue",
    price: "$73,400",
    features: ["Supercharged V8", "All-Wheel Drive", "Convertible"],
    image:
      "https://th.bing.com/th/id/R.4456690d9d789d521c539681c1f527df?rik=pPWV1%2fA1s6%2boZg&pid=ImgRaw&r=0",
  },
  {
    id: 11,
    make: "Aston Martin",
    model: "DB11",
    year: 2022,
    color: "Silver",
    price: "$205,600",
    features: ["Twin-Turbo V12", "Rear-Wheel Drive", "Luxury Interior"],
    image:
      "https://www.pngplay.com/wp-content/uploads/13/Aston-Martin-DB11-Transparent-Background.png",
  },
  {
    id: 12,
    make: "McLaren",
    model: "720S",
    year: 2022,
    color: "Purple",
    price: "$299,000",
    features: ["Twin-Turbo V8", "Rear-Wheel Drive", "Active Aerodynamics"],
    image:
      "https://th.bing.com/th/id/R.b61357abd1f74d061efe20e636d04d06?rik=Np1enMZyp%2b6GLQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fMclaren%2fMclaren_PNG80.png&ehk=26BiWVThBOoBWPUvAvzMnF3Ladk3foltusSk%2fLRb9uQ%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 13,
    make: "Bentley",
    model: "Continental GT",
    year: 2022,
    color: "Gold",
    price: "$231,800",
    features: ["W12 Engine", "All-Wheel Drive", "Luxury Interior"],
    image:
      "https://www.pngplay.com/wp-content/uploads/13/Bentley-Continental-GT-Transparent-File.png",
  },
  {
    id: 14,
    make: "Rolls-Royce",
    model: "Phantom",
    year: 2022,
    color: "Black",
    price: "$450,000",
    features: ["V12 Engine", "Luxury Interior", "Rear-Wheel Drive"],
    image:
      "https://www.pngplay.com/wp-content/uploads/13/Rolls-Royce-Phantom-Free-PNG.png",
  },
  {
    id: 15,
    make: "Mazda",
    model: "MX-5 Miata",
    year: 2022,
    color: "Red",
    price: "$26,830",
    features: ["SkyActiv-G Engine", "Rear-Wheel Drive", "Convertible"],
    image:
      "https://th.bing.com/th/id/R.bd4af286126ce12924ac83034f29d889?rik=YsdJe2z6G9cJjA&pid=ImgRaw&r=0",
  },
  {
    id: 16,
    make: "Subaru",
    model: "WRX STI",
    year: 2021,
    color: "Blue",
    price: "$37,245",
    features: [
      "Turbocharged Boxer Engine",
      "All-Wheel Drive",
      "Sport-Tuned Suspension",
    ],
    image:
      "https://th.bing.com/th/id/R.0f3cc3502116b9c5e2bd821d0a3a3750?rik=Os4qLRFwuNhq3A&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f580b585b2edbce24c47b2cbe.png&ehk=nzTYp5Mv85AC8rHmk%2fDarEtEYRaDHriVJN%2bMGelYMhc%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 17,
    make: "Volkswagen",
    model: "Golf GTI",
    year: 2021,
    color: "White",
    price: "$28,695",
    features: [
      "Turbocharged Inline-4",
      "Front-Wheel Drive",
      "Sport Suspension",
    ],
    image:
      "https://th.bing.com/th/id/R.adf579059344dcf7e13574b867e7aa19?rik=UR3COroSx0TcLg&pid=ImgRaw&r=0",
  },
  {
    id: 18,
    make: "Nissan",
    model: "GT-R",
    year: 2021,
    color: "Silver",
    price: "$113,540",
    features: ["Twin-Turbo V6", "All-Wheel Drive", "Launch Control"],
    image:
      "https://th.bing.com/th/id/R.fc0656a026b1722e66cd9ef4f003fc22?rik=YtLzsVuIrpcRjA&pid=ImgRaw&r=0",
  },
  {
    id: 19,
    make: "Toyota",
    model: "Supra",
    year: 2022,
    color: "Yellow",
    price: "$43,540",
    features: [
      "Turbocharged Inline-6",
      "Rear-Wheel Drive",
      "Adaptive Suspension",
    ],
    image:
      "https://th.bing.com/th/id/R.768a05ba993eb01f8e0428bf0b44d18c?rik=4vnuJHi6Eeg5FQ&pid=ImgRaw&r=0",
  },
  {
    id: 20,
    make: "Honda",
    model: "Civic Type R",
    year: 2021,
    color: "Red",
    price: "$37,895",
    features: [
      "Turbocharged Inline-4",
      "Front-Wheel Drive",
      "Sport Suspension",
    ],
    image:
      "https://th.bing.com/th/id/R.dc444d477254b5ef7f0c7fcf7d4d9c38?rik=Q70U5pCkdhsG9Q&riu=http%3a%2f%2fimages.carprices.com%2fpricebooks_data%2fusa%2fcolorized%2f2023%2fHonda%2fView2%2fCivic_Type_R%2fBase%2fFL5G4PGW_RE.png&ehk=NCsjJ08c3FTAI93KuC4ERssCmRqgPzMRUM5a%2fbnzkPw%3d&risl=&pid=ImgRaw&r=0",
  },
];
function registerForm(event) {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const firstNameMessage = document.getElementById("firstNameMessage");
  const lastName = document.getElementById("lastName").value;
  const lastNameMessage = document.getElementById("lastNameMessage");
  const phoneNumber = document.getElementById("phoneNum").value;
  const phoneNumberMessage = document.getElementById("phoneNumMessage");
  const email = document.getElementById("email").value;
  const emailMessage = document.getElementById("emailMessage");
  const password = document.getElementById("password").value;
  const passwordMessage = document.getElementById("passwordMessage");

  let allIsValid = true;
  if (firstName.length < 3) {
    firstNameMessage.textContent = "Invalid Name";
    allIsValid = false;
  } else {
    firstNameMessage.textContent = "";
  }
  if (lastName.length < 3) {
    lastNameMessage.textContent = "Invalid Last Name";
    allIsValid = false;
  } else {
    lastNameMessage.textContent = "";
  }
  if (!Number(phoneNumber)) {
    phoneNumberMessage.textContent = "Incorrect";
  } else {
    phoneNumberMessage.textContent = "";
  }


  if (!email.includes("@") || !email.endsWith(".com")) {
    emailMessage.innerText = "Invalid email!";
    allIsValid = false;
  } else {
    emailMessage.innerText = "";
    emailMessage.style.border = "0";
  }

  if (password.length < 8) {
    passwordMessage.textContent = "Password must be at least 8 characters";
    allIsValid = false;
  } else {
    passwordMessage.textContent = "";
  }

  if (allIsValid) {
    document.getElementById("registrationForm").reset();
    document.getElementById("succesMessage").textContent =
      "Registration Succesful";

    let userInfo = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
    };

    users.push(userInfo);
    console.log(users);
  }
}

function loginForm(event) {
  event.preventDefault();
  const emailLogin = document.getElementById("emailLogin").value;
  const emailLoginMessage = document.getElementById("emailLoginMessage");
  const passwordLogin = document.getElementById("passwordLogin").value;
  const passwordLoginMessage = document.getElementById("passwordLoginMessage");

  let indexOfAt = emailLogin.indexOf("@");
  let beforeAt = emailLogin.slice(0, indexOfAt);
  let afterAt = emailLogin.slice(indexOfAt + 1);

  if (
    !emailLogin.includes("@") ||
    !afterAt.includes(".") ||
    beforeAt.length < 3
  ) {
    emailLoginMessage.innerText = "Invalid email!";
    allIsValid = false;
  } else {
    emailLoginMessage.innerText = "";
    emailLoginMessage.style.border = "0";
  }

  if (passwordLogin.length < 8) {
    passwordLoginMessage.textContent = "Password must be at least 8 characters";
    allIsValid = false;
  } else {
    passwordLoginMessage.textContent = "";
  }
  const loginUsers = users.find(
    (user) => user.email === emailLogin && user.password === passwordLogin
  );

  if (loginUsers) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("carsPage").style.display = "block";
    document.querySelector(".modal-backdrop").style.display = "none";
    document.getElementById(
      "title"
    ).textContent = `Welcome ${loginUsers.firstName}`;
  } else {
    document.getElementById("loginSuccesMessage").textContent = "Incorrect username or password!"
  }
}

const carsRow = document.getElementById("carsRow");
function displayCars(arrayCars) {
  carsRow.innerHTML = "";
  let reverse = arrayCars.reverse();
  reverse.forEach((car) => {
    carsRow.innerHTML += `
            <div class="col-md-3">
          <div class="card my-card h-100">
            <div class="card-header bg-dark text-light">
              <h2 class="card-title rubik-glitch-regular text-info text-center"> ${car.make} </h2>
            </div>
            <div class="card-body">
              <div class="w-100 mb-3 img">
              <div class="img-container">
                <img src="${car.image}" alt="${car.model}" class="h-100 w-100" /></div>
              </div>
              <div class="d-flex flex-column">
                <p class="card-text">Price: <span class="badge bg-warning text-dark fs-5"> ${car.price}</span> </p>
                <div class="d-flex justify-content-between">
                <p class="card-text">  Year:<span class=""> ${car.year} </span> </p>
                <p class="card-text">Color:<span> ${car.color} </span> </p> </div>
              </div>
            </div>
            <div class="card-footer bg-dark text-light">
              <button type="button" class="btn btn-outline-info w-100">
                View Details
              </button>
            </div>
          </div>
        </div>`;
  });
}
displayCars(cars);

const idSort = document.getElementById("idSort");
const priceSort = document.getElementById("priceSort");
const yearSort = document.getElementById("yearSort");
const myInput = document.getElementById("myInput");
const colorSelect = document.getElementById("colorSelect");
const featuresSelect = document.getElementById("featuresSelect");

function sortByPrice() {
  cars.sort(
    (a, b) =>
      parseFloat(a.price.replace("$", "").replace(",", "")) -
      parseFloat(b.price.replace("$", "").replace(",", ""))
  );
  console.log(cars);
  displayCars(cars);
}

function sortById() {
  cars.sort((a, b) => b.id - a.id);
  displayCars(cars);
}
function sortByYear() {
  cars.sort((a, b) => b.year - a.year);
  displayCars(cars);
}

function searchCars() {
  const searchInput = myInput.value;
  myInput.value = "";
  const filteredCars = cars.filter((car) =>
    car.make.toLowerCase().includes(searchInput)
  );
  displayCars(filteredCars);
}

function colorFilter() {
  const selectedColor = document.getElementById("colorSelect").value;
  const selectedColorCars = cars.filter((car) =>
    car.color.includes(selectedColor)
  );
  displayCars(selectedColorCars);
}

function featureFilter() {
  const selectedFeatures = featuresSelect.value;
  const selectedFeaturesCars = cars.filter((car) =>
    car.features.includes(selectedFeatures)
  );
  displayCars(selectedFeaturesCars);
}

priceSort.addEventListener("click", sortByPrice);
yearSort.addEventListener("click", sortByYear);
myInput.addEventListener("keyup", searchCars);

colorSelect.addEventListener("change", colorFilter);

featuresSelect.addEventListener("change", featureFilter);
idSort.addEventListener("click", sortById);
