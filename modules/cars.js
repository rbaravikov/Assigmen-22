// 2. Papildykite antrą užduotį sukurdami dar vieną modulį, pavadinimu cars.js. Šis modulis turės funkciją, kuri taip pat pasiims app ir nieko negrąžins (t.y. turinį pridės prie app.innerHTML). Tačiau šį kartą - funkcija viduj turės array (["BMW", "VW", "AUDI", "MB"]). O su innerHTML bus map metodas panaudotas ant array, kuris atvaizduos <ul> tag'e sugeneruos po kiekvieną automobilį <li> elemente (t.y.
//     <ul>
//     ${array.map((item) => <li></li>}
//     </ul>)


import body from "./header.js"
const array = ["BMW", "VW", "AUDI", "MB"]

const newLi = (array) => {
    const list = document.createElement("ul")
    array.map(item => {
        list.append(`<li>${item}</li>`)
    })
    return list
}

const app = newLi(array)

export default app