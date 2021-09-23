const windowHeight = document.documentElement.clientHeight;
const loadMoreBlock = document.querySelector("._load-more");

window.addEventListener("scroll", lazyScroll);

function lazyScroll() {
  if (!loadMoreBlock.classList.contains('_loading')) {
    loadMore();
  }
}

function loadMore() {
  const loadMoreBlockPos = loadMoreBlock.getBoundingClientRect().top + pageYOffset;
  const loadMoreBlockHeight = loadMoreBlock.offsetHeight;

  if(pageYOffset > (loadMoreBlockPos + loadMoreBlockHeight) - windowHeight) {
    getContent();
  }
}

async function getContent() {
  loadMoreBlock.classList.add('._loading');

  let responce = await fetch('_more.html', {
    method: 'GET',
  });
  if(responce.ok) {
    let result = await responce.text();
    loadMoreBlock.insertAdjacentHTML('beforeend', result);
    loadMoreBlock.classList.remove('_loading');
  }else {
    console.log('Error loading!');
  }
}
