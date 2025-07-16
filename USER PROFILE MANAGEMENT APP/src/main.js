import { createStore } from "redux";
import profileReducer from "../profileReducer";
import { addProfile, calculateAverageAge, removeProfile } from "../actions";

const store = createStore(profileReducer);
store.subscribe(() => {
  console.log(store.getState());
  renderProfiles();
});

const profiles = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

// store.dispatch(addProfile({ id: 4, name: "David", age: 40 }));
// store.dispatch(addProfile({ id: 5, name: "John", age: 45 }));

// store.dispatch(calculateAverageAge());
// store.dispatch(removeProfile(2));
// store.dispatch(removeProfile(1));

// Add Profile
const addProfileBtn = document.querySelector("#add-profile-btn");

const addUserProfile = () => {
  const id = parseInt(document.querySelector("#id").value);
  const name = document.querySelector("#name").value;
  const age = parseInt(document.querySelector("#age").value);
  if (id && name && age) {
    store.dispatch(addProfile({ id, name, age }));
    store.dispatch(calculateAverageAge());
  }
};

addProfileBtn.addEventListener("click", addUserProfile);

// Remove Profile
const removeProfileBtn = document.querySelector("#remove-profile-btn");

const removeUserProfile = () => {
  const id = parseInt(document.querySelector("#remove-profile").value);
  if (id) {
    store.dispatch(removeProfile(id));
    store.dispatch(calculateAverageAge());
  }
};
removeProfileBtn.addEventListener("click", removeUserProfile);

function renderProfiles() {
  const profilesContainer = document.querySelector("#profiles-container");
  const averageAgee = document.querySelector("#average-age");
  const { profiles, averageAge } = store.getState();
  profilesContainer.innerHTML = profiles
    .map((profile) => {
      return `<li>${profile.id}.${profile.name} (${profile.age} years old)</li>`;
    })
    .join("");
  averageAgee.innerHTML = `Average Age: ${averageAge}`;
}
renderProfiles();
