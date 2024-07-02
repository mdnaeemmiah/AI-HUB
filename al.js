const showAllAl = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const phone = data.data.tools;
    detailsAi(phone);
}

const detailsAi = (phone) => {
    // console.log(phone);
    const CardDivShow = document.getElementById('card-div');
    phone.forEach(mobile => {
        console.log(mobile);
        const div = document.createElement('div');
        div.classList = `card bg-base-100 w-96 shadow-xl`;
        div.innerHTML = `
        <figure>
                  <img
                    src="${mobile.image}"
                    alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Features</h2>
                     <ol>
                         <li>1. Natural language processing</li>
                         <li>2. Contextual understanding</li>
                         <li>3.  Text generation</li>
                     </ol>
                     <hr>
                  <div class="card-actions flex justify-between">
                    <h2 class="card-title">${mobile.name}</h2>
                    <h2><button onclick="modalShow('${mobile.name}')"  class="btn btn-active btn-accent">Show Details</button></h2>
                  </div>
                </div>
        `;
        CardDivShow.appendChild(div);
    })
}

const  modalShow = async(id) =>{
    // console.log(phone);
    const  res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data =await res.json();
    console.log(data);
    my_modal_5.showModal()
}




showAllAl();