import { 
    createBunny, 
    getFamilies, 
    checkAuth, 
    logout 
} from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');
const selectFamily = document.getElementById('select-family');

form.addEventListener('submit', async (e) => {
    // prevent default
    e.preventDefault();
    // get the name and family id from the form
    const formData = new FormData(form);
    const name = formData.get('bunny-name');
    const familyID = formData.get('family-id');
    // use createBunny to create a bunny with this name and family id
    await createBunny(name, familyID);
    form.reset();
});

window.addEventListener('load', async () => {
    const families = await getFamilies();
    for (let family of families) {
        const option = document.createElement('option');
        option.value = family.id;
        option.textContent = family.name;
        selectFamily.append(option);
    }
});


checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
