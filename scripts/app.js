import { posts } from './posts.js';
import {
  firstPostBtn,
  lastPostBtn,
  nextPostBtn,
  previousPostBtn,
  randomPostBtn,
  socialBar,
  backdrop,
  hambOpen,
  hambClose
} from './anchor.js';
import { Post } from './Post.js';

dayjs.locale('pt-br');
dayjs.extend(window.dayjs_plugin_relativeTime);

window.addEventListener('DOMContentLoaded', pageLoadHandler);
window.addEventListener('hashchange', hashChangeHandler, false);

function pageLoadHandler() {
  lastPostBtn.addEventListener('click', () => (window.location = ''));
  nextPostBtn.addEventListener('click', getRelativePost.bind(null, -1));
  randomPostBtn.addEventListener('click', getRandomPost);
  previousPostBtn.addEventListener('click', getRelativePost.bind(null, 1));
  firstPostBtn.addEventListener(
    'click',
    () => (window.location = `#${posts.length - 1}`)
  );

  hambOpen.addEventListener('click', () => {
    socialBar.classList.add('active');
    backdrop.classList.add('active');
  });

  hambClose.addEventListener('click', () => {
    socialBar.classList.remove('active');
    backdrop.classList.remove('active');
  });

  hashChangeHandler();
}

function hashChangeHandler() {
  const postNum = +location.hash.substring(1);
  const didCreate = !!new Post(posts[postNum]);

  console.log(didCreate, postNum, posts.length);

  lastPostBtn.removeAttribute('disabled');
  nextPostBtn.removeAttribute('disabled');
  previousPostBtn.removeAttribute('disabled');
  firstPostBtn.removeAttribute('disabled');

  if (postNum === 0) {
    lastPostBtn.setAttribute('disabled', true);
    nextPostBtn.setAttribute('disabled', true);
  } else if (postNum === posts.length - 1) {
    previousPostBtn.setAttribute('disabled', true);
    firstPostBtn.setAttribute('disabled', true);
  }
}

function getRelativePost(offset) {
  const postNum = +location.hash.substring(1) + offset;
  window.location = `#${postNum}`;
}

function getRandomPost() {
  const postNum = Math.round(Math.random() * (posts.length - 1));
  window.location = `#${postNum}`;
}
