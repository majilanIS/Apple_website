
const iconE1 = document.getElementById('card-image');
const mainContainerE1 = document.querySelector('.outer-wrapper');

iconE1.addEventListener('click', () => {
    mainContainerE1.style.display = "none";
    const parentE1 = document.createElement('div');
    document.body.appendChild(parentE1);
    
    const childE1 = document.createElement('ul');
    parentE1.appendChild(childE1);

    // const subChildE1 = document.createElement('li')
    // childE1.appendChild(subChildE1);
    childE1.innerHTML = `<li><a href="#">Sing up</a></li>
                            <li><a href="#">Connect Your Wallet</a></li>
                            <li><a href="#">connect your CBE</a></li>
                            <li><a href="#">Verify</a></li>
                            <li><a href="#">Buy</a></li>
                                    `;
    
    parentE1.className = 'main-container-ref';
    childE1.className = 'list';
    
    console.log(parentE1.classList);
});

const btnSearchE1 = document.getElementById('search-icon');
const bothImageE1 = document.querySelector('.image_2');
const btnE1 = document.querySelector('.btn_1');

btnSearchE1.addEventListener('click', () => {
    const containerE2 = document.querySelector('.list-nav');
    containerE2.style.display = 'none';

    bothImageE1.style.display = 'block';
    btnE1.className = "Search-image-1";
});

