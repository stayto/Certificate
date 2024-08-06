import { html } from '../../lib.js';

export const carTemplate = (data) => html`
    <div class="car">
        <img src=${data.imageUrl} />
        <h3 class="model">${data.model}</h3>
        <div class="specs">
            <p class="price">Price: €${data.price}</p>
            <p class="weight">Weight: ${data.weight} kg</p>
            <p class="top-speed">Top Speed: ${data.speed} kph</p>
        </div>
        <a class="details-btn" href="/catalog/${data._id}">More Info</a>
    </div>
`;

