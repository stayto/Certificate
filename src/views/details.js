import { getCarById, deleteCar } from '../data/cars.js';
import { html, page, render } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (data, isOwner, onDelete) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${data.imageUrl}" alt="example1" />
            <p id="details-title">${data.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="price">Price: ${data.price}</p>
                <p class="weight">Weight: ${data.weight}</p>
                <p class="top-speed">Top Speed: ${data.speed}</p>
                <p id="car-description">
                  ${data.about}</p>
              </div>
              <!--Edit and Delete are only for creator-->
              <div id="action-buttons">
              ${isOwner ? html`
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : null}
              </div>
            </div>
          </div>
        </section>
`;

export async function detailsView(ctx) {
    const id = ctx.params.id;

    const data = await getCarById(id);

    const userData = getUserData();

    const isOwner = userData?._id == data._ownerId;

    render(detailsTemplate(data, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you susre');

        if(!choice) {
            return;
        }

        await deleteCar(id);

        page.redirect('/catalog');
    }
}