// make work sign-up button as intented
 
const btnSignUp = document.querySelector(".sign-up-button");
 
const signUpClicked = btnSignUp.addEventListener("click", signUp);
 
function signUp(e) {
  const signUpForm = document.getElementById("signUpForm");
  signUpForm.style.visibility = "visible";
  const logInForm = document.getElementById("logInForm");
  logInForm.style.visibility = "hidden";
}
 
//make work log-in button as intented
 
const btnLogIn = document.querySelector(".log-in-button");
 
const logInClicked = btnLogIn.addEventListener("click", logIn);
 
function logIn(e) {
  const logInForm = document.getElementById("logInForm");
  logInForm.style.visibility = "visible";
  const signUpForm = document.getElementById("signUpForm");
  signUpForm.style.visibility = "hidden";
}
 
//check if sign-in inputs are error free
 
const signUpForm = document.getElementById("mySignUpForm");
 
const signUpErrors = document.getElementById("signUpErrors");
 
const signUpFirstName = document.getElementById("fname");
 
const signUpLastName = document.getElementById("lname");
 
const signUpEmail = document.getElementById("signUpEmail");
 
const signUpPassword = document.getElementById("signUpPassword");
 
const signUpCheckbox = document.getElementById("checkbox");

signUpForm.addEventListener("submit", checkForSignUpErrors);
 
function checkForSignUpErrors(e) {
  e.preventDefault();
 
  let messages = [];
  
    if (signUpPassword.value.length <= 7) {
    messages.push("Your password should be longer then 7 characters.");
    }
 
  if (
    signUpFirstName.value !== "" &&
    signUpLastName.value !== "" &&
    signUpEmail.value !== "" &&
    signUpPassword.value.length >= 8 &&
    signUpCheckbox.checked
  ) {
    submitSignUp(e);
    toLocalStorage(e);
  }
  
    if (messages.length > 0) {
    signUpErrors.style.visibility = "visible";
    signUpErrors.innerText = messages.join(", ");
    setTimeout(hideSignUpErrorMessage, 3000);
  }
}

function hideSignUpErrorMessage() {
  document.getElementById("signUpErrors").style.visibility = "hidden";
}

//signing in new user into his dashboard
  
function submitSignUp(e) {
  let buttons = document.querySelector(".buttons");
  buttons.style.visibility = "hidden";
  const h2 = document.getElementById("h2");
  h2.style.visibility = "hidden";
  signUpForm.style.visibility = "hidden";
  hideSignUpErrorMessage();
  let dashboard = document.querySelector(".dashboard");
  dashboard.style.visibility = "visible";
  let createToDo = document.querySelector(".newToDo");
  createToDo.style.visibility = "visible";
//   const mySavedToDoLists = document.querySelector(".mySavedToDoLists");
//   mySavedToDoLists.style.visibility = "visible";
  
  const userLists = JSON.parse(localStorage.getItem("allLists")) || [];
  
  const signUpFirstName = document.getElementById("fname");
 
  const signUpLastName = document.getElementById("lname");
  
  const signUpEmail = document.getElementById("signUpEmail");

  const signUpPassword = document.getElementById("signUpPassword");
  
  const accountFirstName = document.querySelector(".accountInputSettings1");
  accountFirstName.value = signUpFirstName.value;
  const accountLastName = document.querySelector(".accountInputSettings2");
  accountLastName.value = signUpLastName.value;
  const accountEmail = document.querySelector(".accountInputSettings3");
  accountEmail.value = signUpEmail.value;
  const accountPassword = document.querySelector(".accountInputSettings4");
  accountPassword.value = signUpPassword.value;
  
  updatedUserToNullFromSignIn();
  
  freshUpdatedUserToNullFromSignIn();
  
  signUp();
  
}
 
// create local storage to store user's personal data
 
function toLocalStorage(e) {
  
  const signUpFirstName = document.getElementById("fname");
 
  const signUpLastName = document.getElementById("lname");

  const signUpEmail = document.getElementById("signUpEmail");
 
  const signUpPassword = document.getElementById("signUpPassword");
  
  const users = JSON.parse(localStorage.getItem("usersData")) || [];

    let user = {
      name: signUpFirstName.value,
      lastName: signUpLastName.value,
      email: signUpEmail.value,
      password: signUpPassword.value
    };
  
  if (users.length === 0) {
    users.push(user);
    localStorage.setItem("usersData", JSON.stringify(users));
    return;
    } 
  
  for (let i = 0; i < users.length; i++) {

    if (user.email === users[i].email) {

        alert("User under such email already exists. Please, try another email.");
        
        let buttons = document.querySelector(".buttons");
        buttons.style.visibility = "visible";
        const h2 = document.getElementById("h2");
        h2.style.visibility = "visible";
        const signUpForm = document.getElementById("mySignUpForm");
        signUpForm.style.visibility = "visible";
        let dashboard = document.querySelector(".dashboard");
        dashboard.style.visibility = "hidden";
        let createToDo = document.querySelector(".newToDo");
        createToDo.style.visibility = "hidden";
      
      return;
    } 
  }
      users.push(user);
      localStorage.setItem("usersData", JSON.stringify(users));
}

//check if log-in inputs are error free

const logInForm = document.getElementById("logInForm");

logInForm.addEventListener("submit", checkForLogInErrors);

function checkForLogInErrors(e) {
    e.preventDefault();
 
  let messages = [];
  
  const logInEmail = document.getElementById("logInEmail");
  const logInPassword = document.getElementById("logInPassword");
  
  const users = JSON.parse(localStorage.getItem("usersData")) || [];
 
  for (let i = 0; i < users.length; i++) {
    
    if (logInEmail.value !== users[i].email ||
        logInPassword.value !== users[i].password) {
      messages.push("Incorrect email or password... Try again.");
    }   if (logInEmail.value === users[i].email &&
      logInPassword.value === users[i].password) {
      submitLogIn(e);
      break;
    }
  }
  
  if (messages.length > 0) {
    const logInErrors = document.getElementById("logInErrors");
    logInErrors.style.visibility = "visible";
    logInErrors.innerText = messages[0];
    setTimeout(hideLogInErrorMessage, 3000);
  }
}

function hideLogInErrorMessage() {
  document.getElementById("logInErrors").style.visibility = "hidden";
}

// Logging in user into his dashboard

function submitLogIn(e) {
  let buttons = document.querySelector(".buttons");
  buttons.style.visibility = "hidden";
  const h2 = document.getElementById("h2");
  h2.style.visibility = "hidden";
  const myLogInForm = document.getElementById("myLogInForm");
  myLogInForm.style.visibility = "hidden";
  hideLogInErrorMessage();
  let dashboard = document.querySelector(".dashboard");
  dashboard.style.visibility = "visible";
  let createToDo = document.querySelector(".newToDo");
  createToDo.style.visibility = "visible";
//   const mySavedToDoLists = document.querySelector(".mySavedToDoLists");
//   mySavedToDoLists.style.visibility = "visible";
  
  const signUpEmail = document.getElementById("signUpEmail");
  
  const logInEmail = document.getElementById("logInEmail");
  
  const logInPassword = document.getElementById("logInPassword");
  
  const userLists = JSON.parse(localStorage.getItem("allLists")) || [];
  
  mySavedToDoLists.style.visibility = "visible";
  
  for (let i = 0; i < userLists.length; i++) {
    if (userLists[i].email === logInEmail.value ||
        userLists[i].email === signUpEmail.value) {
       var user = userLists[i];
       const LI = document.createElement("li");
       LI.innerHTML = "<button>" + user.identifier + "</button>";
       mySavedToDoLists.appendChild(LI);
    }
  }
  
  // setting account info for current user
  
  const users = JSON.parse(localStorage.getItem("usersData"));
  
  for (let i = 0; i < users.length; i++) {
  
  if (logInEmail.value === users[i].email &&
      logInPassword.value === users[i].password) {
      
    const accountFirstName = document.querySelector(".accountInputSettings1");
    accountFirstName.value = users[i].name;
    const accountLastName = document.querySelector(".accountInputSettings2");
    accountLastName.value = users[i].lastName;
    const accountEmail = document.querySelector(".accountInputSettings3");
    accountEmail.value = users[i].email;
    const accountPassword = document.querySelector(".accountInputSettings4");
    accountPassword.value = users[i].password;
      
    logIn();
    
    updatedUserToNullFromLogIn();
    
    freshUpdatedUserToNullFromLogIn();
    
    }
  } 
}
 
//create "new to-do list"

  const newToDo = document.querySelector(".newToDo");
 
  const newToDoClick = newToDo.addEventListener("click", openToDo);

function openToDo() {
  
  const newToDo = document.querySelector(".newToDo");
  
  const blankToDo = document.querySelector(".blankToDo");
  
  const toDoWindow = document.querySelector(".toDoWindow");
  
  const saveToDoWindow = document.querySelector(".saveToDoWindow");
  
  const toDoList = document.getElementById("toDoList");
  
    if (blankToDo.style.visibility !== "visible" &&
        toDoWindow.style.visibility !== "visible" &&
        saveToDoWindow.style.visibility !== "visible" &&
        newToDo.style.visibility !== "hidden")

      
  {   blankToDo.style.visibility = "visible";
      toDoWindow.style.visibility = "visible";
      saveToDoWindow.style.visibility = "visible";
      toDoList.style.visibility = "visible";
      newToDo.style.visibility = "hidden"
      document.getElementById("saveButton").style.visibility = "visible";
      document.getElementById("renameButton").style.visibility = "hidden";
      document.querySelector(".mySavedToDoLists").style.visibility = "hidden";
      
      document.getElementById("nameYourToDoInput").value = "";
      document.getElementById("toDoList").innerHTML = "";
      document.getElementById("saveYourToDo").value = "";
  } else {
      blankToDo.style.visibility = "hidden";
      toDoWindow.style.visibility = "hidden";
      saveToDoWindow.style.visibility = "hidden";
      toDoList.style.visibility = "hidden";
      newToDo.style.visibility = "visible";
  }
  
}

const createButton = document.getElementById("createButton");
 
const createNewToDo = createButton.addEventListener("click", createToDo);
 
function createToDo(e) {

const elements = [];

if (document.getElementById("nameYourToDoInput").value.trim() !== "") {
  elements.push(document.getElementById("nameYourToDoInput").value.trim());
 }
    display(elements);
}
  
function display(elements) {
  const toDoInput = document.getElementById("nameYourToDoInput");
  const toDoList = document.getElementById("toDoList");
  if (toDoInput.value === "") {
    return;
  } else {
    for (let i = 0; i < elements.length; i++) {
      let LI = document.createElement("li");
      LI.innerText = elements[i];
      toDoList.appendChild(LI);
      setTimeout(function(){ document.getElementById("nameYourToDoInput").value = ""; }, 1);
    }
  }
}

// checking off items within the list

document.getElementById("toDoList").addEventListener("click", function(e) {
  const toDoList = document.getElementById("toDoList");
  
  if (e.target.getAttribute("style") === null) {
    e.target.style.textDecoration = "line-through";
    } else if (e.target.getAttribute("style") !== null) {
      e.target.style.textDecoration = "none";
      e.target.removeAttribute("style");
    }
});

// save your to-do list

const saveButton = document.getElementById("saveButton");

const saveButtonOnClick = saveButton.addEventListener("click", saveMyToDoList)

function saveMyToDoList() {
  
  const toDoWindow = document.querySelector(".toDoWindow");
  
  const blankToDo = document.querySelector(".blankToDo");
  
  const saveToDoWindow = document.querySelector(".saveToDoWindow");
  
  const dashboard = document.querySelector(".dashboard");
  
  const newToDo = document.querySelector(".newToDo");
  
  const saveYourToDo = document.getElementById("saveYourToDo");
  
  const OL = document.querySelector(".mySavedToDoLists");
  
  if (saveYourToDo.value === "" || saveYourToDo.value === "One character at least is required...") {
    saveYourToDo.style.color = "red";
    saveYourToDo.value = "One character at least is required...";
    setTimeout(function() { saveYourToDo.value = "" }, 3000);
    setTimeout(function() { saveYourToDo.style.color = "black"; }, 3001);
    return;
  } 
  
  const mySavedToDoLists = document.querySelector(".mySavedToDoLists");
  
  const LIs = mySavedToDoLists.getElementsByTagName("li");
  
  for (let i = 0; i < LIs.length; i++) {
    
    if (saveYourToDo.value === LIs[i].textContent) {
      saveYourToDo.style.color = "red";
      saveYourToDo.value = "Such list exists. Change the name.";
      setTimeout(function() { saveYourToDo.value = "" }, 3000);
      setTimeout(function() { saveYourToDo.style.color = "black"; }, 3001);
      return;
    }
  }
    
    let LI = document.createElement("li");
    LI.innerHTML = "<button type='text'>" + saveYourToDo.value + "</button>";
    OL.appendChild(LI);
    
    const allLists = JSON.parse(localStorage.getItem("allLists")) || [];
    
    const signUpEmail = document.getElementById("signUpEmail");
    
    const logInEmail = document.getElementById("logInEmail");
    
    let userList = {
      email: logInEmail.value || signUpEmail.value,
      identifier: saveYourToDo.value,
      list: []                     
    }

    const toDoList = document.getElementById("toDoList");
    
    const toDoLIs = toDoList.getElementsByTagName("li");
    
    for (let i = 0; i < toDoLIs.length; i++) {
      if (toDoLIs[i].getAttribute("style") !== null) {
        userList.list.push(toDoLIs[i].innerText + " " + toDoLIs[i].getAttribute("style"))
      } else {
       userList.list.push(toDoLIs[i].innerText);
     }
  }
        allLists.push(userList);  
        localStorage.setItem("allLists", JSON.stringify(allLists));
  
      toDoWindow.style.visibility = "hidden";
      blankToDo.style.visibility = "hidden";
      saveToDoWindow.style.visibility = "hidden";
      toDoList.style.visibility = "hidden";
      dashboard.style.visibility = "visible";
      newToDo.style.visibility = "visible";
      OL.style.visibility = "visible";
      document.getElementById("saveButton").style.visibility = "hidden";
      document.getElementById("renameButton").style.visibility = "hidden"

      
}

// open your selected user list

const mySavedToDoLists = document.querySelector(".mySavedToDoLists");

const userAllLists = mySavedToDoLists.addEventListener("click", openMySavedList);

function openMySavedList(e) {
  
    const toDoList = document.getElementById("toDoList");
    toDoList.style.visibility = "visible";
  
    document.getElementById("nameYourToDoInput").value = "";
    document.getElementById("toDoList").innerHTML = "";
    document.getElementById("saveYourToDo").value = "";
  
    const userLists = JSON.parse(localStorage.getItem("allLists"));
    
  for (let i = 0; i < userLists.length; i++) {
      if (e.target.textContent === userLists[i].identifier) {
      var user = userLists[i];
        break;
    }
  }     
  
  let userList = user.list;
  
  for (let i = 0; i < userList.length; i++) {
    let LI = document.createElement("li");
    if (userList[i].endsWith("text-decoration: line-through;")) {
      let userListWithoutStyle = userList[i].replace(" text-decoration: line-through;", "");
      LI.innerText = userListWithoutStyle;
      LI.style.textDecoration = "line-through";
      toDoList.appendChild(LI);
    } else {
    LI.innerText = userList[i];
    toDoList.appendChild(LI)
    }
  }
    const saveYourToDo = document.getElementById("saveYourToDo");
    saveYourToDo.value = user.identifier;
    const newToDo = document.querySelector(".newToDo");
    newToDo.style.visibility = "hidden";
    const mySavedToDoLists = document.querySelector(".mySavedToDoLists");
    mySavedToDoLists.style.visibility = "hidden";   
    const toDoWindow = document.querySelector(".toDoWindow");
    toDoWindow.style.visibility = "visible";
    const blankToDo = document.querySelector(".blankToDo");
    blankToDo.style.visibility = "visible";
    const saveToDoWindow = document.querySelector(".saveToDoWindow");
    saveToDoWindow.style.visibility = "visible";
    const saveButton = document.getElementById("saveButton");
    saveButton.style.visibility = "hidden";
    const renameButton = document.getElementById("renameButton");
    renameButton.style.visibility = "visible";
  
    target = e.target;
    return target;
}
        
//remaking chosen List


    document.getElementById("renameButton").addEventListener("click", resetExistingList);

    function resetExistingList() {

    const mySavedToDoLists = document.querySelector(".mySavedToDoLists");
          
    const LIs = mySavedToDoLists.getElementsByTagName("button");
          
    const input = document.getElementById("saveYourToDo");
          
     for (let i = 0; i < LIs.length; i++) {
       if (LIs[i] === target) {
          let oldList = target.parentNode;
        let newLI = document.createElement("li");
          newLI.innerHTML = "<button>" + input.value + "</button>";
          mySavedToDoLists.replaceChild(newLI, oldList);
      }
    }
              const userLists = JSON.parse(localStorage.getItem("allLists"));
      
      for (let i = 0; i < userLists.length; i++) {
        if (userLists[i].identifier === target.textContent) {
          var user = userLists[i];
        }
      }
          
          user.identifier = input.value;
          
          const toDoList = document.getElementById("toDoList");

          const toDoLIs = toDoList.getElementsByTagName("li");
          user.list = [];
    for (let i = 0; i < toDoLIs.length; i++) {
      if (toDoLIs[i].getAttribute("style") !== null) {
        user.list.push(toDoLIs[i].innerText + " " + toDoLIs[i].getAttribute("style"))
      } else {
       user.list.push(toDoLIs[i].innerText);
     }
      
  }
          
          localStorage.setItem("allLists", JSON.stringify(userLists))
        
    const newToDo = document.querySelector(".newToDo");
    newToDo.style.visibility = "visible";
        
    mySavedToDoLists.style.visibility = "visible";
        
    const toDoWindow = document.querySelector(".toDoWindow");
    toDoWindow.style.visibility = "hidden";
    const blankToDo = document.querySelector(".blankToDo");
    blankToDo.style.visibility = "hidden";
    const saveToDoWindow = document.querySelector(".saveToDoWindow");
    saveToDoWindow.style.visibility = "hidden";
    const renameButton = document.getElementById("renameButton");
    renameButton.style.visibility = "hidden";
    toDoList.style.visibility = "hidden";

}

//create "account settings" window to pop up

  const accountButton = document.querySelector(".accountButton");
 
const myAccount = accountButton.addEventListener("click", Settings);
 
function Settings(e) {
  
  const accountSettings = document.querySelector(".accountSettings");
  
  if (accountSettings.style.visibility !== "visible") {
    accountSettings.style.visibility = "visible";
  } else {
    accountSettings.style.visibility = "hidden";
  }
  
}

document.querySelector(".accountSaveButton").addEventListener("click", updateAccountDetails);

let freshUpdatedUser;

let freshUpdatedListsUser;

  function freshUpdatedUserToNullFromSignIn() {
    freshUpdatedUser = null;
    freshUpdatedListsUser = null;
  }
  function freshUpdatedUserToNullFromLogIn() {
    freshUpdatedUser = null;
    freshUpdatedListsUser = null;
  }


function updateAccountDetails() {
  
  const users = JSON.parse(localStorage.getItem("usersData"));
  
  const signUpEmail = document.getElementById("signUpEmail");
    
  const logInEmail = document.getElementById("logInEmail");
  
  var standardUser = null || freshUpdatedUser;

  
    for (let i = 0; i < users.length; i++) {
    if (users[i].email === signUpEmail.value ||
        users[i].email === logInEmail.value) {
      var user = users[i];
      break;
    } 
   } 
  
  for (let i = 0; i < users.length; i++) {
    if (standardUser === null) {
      break;
    }
    if (users[i].email === standardUser.email) {
      var USER = users[i];
      break;
    }
  }
  
    const accountFirstName = document.querySelector(".accountInputSettings1");
    if (user) {
     user.name = accountFirstName.value;
  } if (USER) {
    USER.name = accountFirstName.value;
  }
    const accountLastName = document.querySelector(".accountInputSettings2");
    if (user) {
     user.lastName = accountLastName.value;
  } if (USER) {
    USER.lastName = accountLastName.value;
  }
    const accountEmail = document.querySelector(".accountInputSettings3");
    if (user) {
     user.email = accountEmail.value;
  } if (USER) {
    USER.email = accountEmail.value;
  }
    const accountPassword = document.querySelector(".accountInputSettings4");
    if (user) {
     user.password = accountPassword.value;
  } if (USER) {
    USER.password = accountPassword.value;
  }
    if (user) {
      freshUpdatedUser = user;
    } if (USER) {
      freshUpdatedUser = USER;
    }
 
    var standardUserLists = null || freshUpdatedListsUser;
  
    const usersAllLists = JSON.parse(localStorage.getItem("allLists")) || [];
  
      for (let i = 0; i < usersAllLists.length; i++) {
        
       if (usersAllLists === null || usersAllLists === []) {
         break;         
       } 
     }  
      for (let i = 0; i < usersAllLists.length; i++) {
       if (usersAllLists[i].email === signUpEmail.value ||
         usersAllLists[i].email === logInEmail.value) {
         var userList = usersAllLists[i];
         break; 
       }
     }  
      for (let i = 0; i < usersAllLists.length; i++) {
       if (standardUserLists === null) {
         break; 
       } if (usersAllLists[i].email === standardUserLists.email) {
         var USERList = usersAllLists[i];
         break;
       }
     }
  
  if (userList) {
    userList.email = accountEmail.value;
  } if (USERList) {
    USERList.email = accountEmail.value;
  }
  if (userList) {
    freshUpdatedListsUser = userList;
  } if (USERList) {
    freshUpdatedListsUser = USERList;
  }
  
  localStorage.setItem("usersData", JSON.stringify(users));
  
  localStorage.setItem("allLists", JSON.stringify(usersAllLists));
  
  alert("Your account details have been successfully saved. If you changed them unintentionally - please, advise to the administrator.")
  
  setTimeout(function() { document.querySelector(".accountSettings").style.visibility = "hidden" }, 100);
  

}

document.querySelector(".accountCancelButton").addEventListener("click", cancelUpdatingAccountDetails);

  let updatedUser;

  function updatedUserToNullFromSignIn() {
    updatedUser = null;
  }
  function updatedUserToNullFromLogIn() {
    updatedUser = null;
  }

  
function cancelUpdatingAccountDetails() {
  
  const users = JSON.parse(localStorage.getItem("usersData"));

  const signUpEmail = document.getElementById("signUpEmail");
    
  const logInEmail = document.getElementById("logInEmail");
  
      var standardUser = null || updatedUser;
  
     if (freshUpdatedUser !== null) {
      updatedUser = freshUpdatedUser;
       standardUser = updatedUser;
    }
  
    
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === signUpEmail.value ||
        users[i].email === logInEmail.value) {
      var user = users[i];
      break;
    } 
  }  
  
  for (let i = 0; i < users.length; i++) {
    if (standardUser === null) {
     break; 
  } if (users[i].email === standardUser.email) {
     var USER = users[i];
     break;
   }
}
    const accountFirstName = document.querySelector(".accountInputSettings1");
    if (user) {
      accountFirstName.value = user.name;
    }
    if (USER) {
      accountFirstName.value = USER.name;
    }
    const accountLastName = document.querySelector(".accountInputSettings2");
    if (user) {
      accountLastName.value = user.lastName;
    }
    if (USER) {
      accountLastName.value = USER.lastName;
    }
    const accountEmail = document.querySelector(".accountInputSettings3");
    if (user) {
      accountEmail.value = user.email;
    }
    if (USER) {
      accountEmail.value = USER.email;
    }
    const accountPassword = document.querySelector(".accountInputSettings4");
    if (user) {
      accountPassword.value = user.password;
    }
    if (USER) {
      accountPassword.value = USER.password;
    }
  
    document.querySelector(".accountSettings").style.visibility = "hidden";
  
    if (user) {
      updatedUser = user;
    }
    if (USER) {
      updatedUser = USER;
    }
  
  
}

// Log out user

document.getElementById("logout").addEventListener("click", logoutCurrentUser);

function logoutCurrentUser() {
  
  const dashboard = document.querySelector(".dashboard"); 
  dashboard.style.visibility = "hidden";
  
  const h2 = document.getElementById("h2");
  h2.style.visibility = "visible";
  
  const buttons = document.querySelector(".buttons");
  buttons.style.visibility = "visible";
 
  const newToDo = document.querySelector(".newToDo");
  newToDo.style.visibility = "hidden";
  
  const blankToDo = document.querySelector(".blankToDo");
  blankToDo.style.visibility = "hidden";
  
  const toDoWindow = document.querySelector(".toDoWindow");
  toDoWindow.style.visibility = "hidden";
  
  const saveToDoWindow = document.querySelector(".saveToDoWindow");
  saveToDoWindow.style.visibility = "hidden";
  
  const saveButton = document.getElementById("saveButton");
  saveButton.style.visibility = "hidden";
  
  const renameButton = document.getElementById("renameButton");
  renameButton.style.visibility = "hidden";
  
  const toDoList = document.getElementById("toDoList");
  toDoList.style.visibility = "hidden";
  
  const mySavedToDoLists = document.querySelector(".mySavedToDoLists");
  mySavedToDoLists.style.visibility = "hidden";
  
  const signupform = document.getElementById("signUpForm");
  signupform.style.visibility = "hidden";
    
  const loginform = document.getElementById("logInForm");
  loginform.style.visibility = "hidden";
  
  const signUpButton = document.querySelector(".sign-up-button");
  
  signUpButton.style.visibility = "visible";
 
  const signUpOnClick = signUpButton.addEventListener("click", anotherSignUp);
 
  function anotherSignUp(e) {
    const signUpForm = document.getElementById("signUpForm");
    signUpForm.innerHTML = `
    <div id="signUpErrors"></div>
    <form id="mySignUpForm">
      <label>First Name</label><br>
      <input type="text" id="fname" placeholder="John" required/><br>
      <label>Last Name</label><br>
      <input type="text" id="lname" placeholder="Wick" required/><br>
      <label>E-mail</label><br>
      <input type="text" id="signUpEmail" placeholder="username@gmail.com" required/><br>
      <label>Password</label><br>
      <input type="password" id="signUpPassword" placeholder="password" required/><br>
      <input type="checkbox" id="checkbox" required/>
      <label id="checkbox-label">I agree to the Terms of Use</label><br>
      <button type="submit" id="submitSignUp">Submit</button>
    </form>
  `
    mySavedToDoLists.innerHTML = "";
    toDoList.style.visibility = "hidden";
    signUpForm.style.visibility = "visible";
    const logInForm = document.getElementById("logInForm");
    logInForm.style.visibility = "hidden";

  }
 
 
  const logInButton = document.querySelector(".log-in-button");
  
  logInButton.style.visibility = "visible";

  const logInOnClick = logInButton.addEventListener("click", anotherLogIn);
 
  function anotherLogIn(e) {
    const logInForm = document.getElementById("logInForm");
    logInForm.innerHTML = `
    <div id="logInErrors"></div>
    <form id="myLogInForm">
      <label>E-mail</label><br>
      <input type="text" id="logInEmail" placeholder="username@gmail.com" required/><br>
      <label>Password</label><br>
      <input type="password" id="logInPassword" placeholder="password" required/><br>
      <button id="submitLogIn">Submit</button>
    </form>
  `
    mySavedToDoLists.innerHTML = "";
    toDoList.style.visibility = "hidden";
    logInForm.style.visibility = "visible";
    const signUpForm = document.querySelector(".signUpForm");
    signUpForm.style.visibility = "hidden";
  }
  
  const myNewSignUpForm = document.getElementById("signUpForm");

  myNewSignUpForm.addEventListener("submit", checkForSignUpErrorsAgain);
}
 
function checkForSignUpErrorsAgain(e) {
  e.preventDefault();
 
  const signUpErrors = document.getElementById("signUpErrors");

  const signUpFirstName = document.getElementById("fname");

  const signUpLastName = document.getElementById("lname");

  const signUpEmail = document.getElementById("signUpEmail");

  const signUpPassword = document.getElementById("signUpPassword");

  const signUpCheckbox = document.getElementById("checkbox");
 
  let messages = [];
  
    if (signUpPassword.value.length <= 7) {
    messages.push("Your password should be longer then 7 characters.");
    }
 
  if (
    signUpFirstName.value !== "" &&
    signUpLastName.value !== "" &&
    signUpEmail.value !== "" &&
    signUpPassword.value.length >= 8 &&
    signUpCheckbox.checked
  ) {
    submitSignUp(e);
    toLocalStorage(e);
  }
  
    if (messages.length > 0) {
    signUpErrors.style.visibility = "visible";
    signUpErrors.innerText = messages.join(", ");
    setTimeout(hideSignUpErrorMessage, 3000);
  }
}





