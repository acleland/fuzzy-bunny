import { checkAuth, deleteBunny, getFamilies, logout } from '../fetch-utils.js';
import { renderFamily, renderBunny } from '../render-utils.js';

checkAuth();

const familiesEl = document.querySelector('.families-container');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayFamilies() {
    // fetch families from supabase
    const families = await getFamilies();

    // clear out the familiesEl
    familiesEl.innerHTML = '';

    for (let family of families) {
        const familyEl = renderFamily(family);
        familiesEl.append(familyEl);

        // for each of this family's bunnies
        const bunnyContainer = document.createElement('div');
        bunnyContainer.classList.add('bunnies');
        familyEl.append(bunnyContainer);
        for (const bunny of family.fuzzy_bunnies) {
            const p = renderBunny(bunny);
            p.addEventListener('click', async () => {
                await deleteBunny(bunny.id);
                displayFamilies();
            });
            bunnyContainer.append(p);
            
        }
        //    make an element with the css class 'bunny', and put the bunny's name in the text content
        //    add an event listener to the bunny el. On click, delete the bunny, then refetch and redisplay all families.
        // append this bunnyEl to the bunniesEl
    }

    // append the bunniesEl and nameEl to the familyEl

    // append the familyEl to the familiesEl
}

window.addEventListener('load', async () => {
    
    displayFamilies();
});
