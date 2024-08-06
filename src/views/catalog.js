import { getAllCars } from '../data/cars.js';
import { html, render } from '../lib.js';
import { carTemplate } from './partials/cars.js';

const catalogTemplate = (cars) => html`
<h3 class="heading">Our Cars</h3>
        <section id="dashboard">
          ${cars.length ? cars.map(carTemplate) : html`<h3 class="nothing">Nothing to see yet</h3>`}
        </section>
        `;

export async function catalogView() {
    const cars = await getAllCars();

    render(catalogTemplate(cars));
}