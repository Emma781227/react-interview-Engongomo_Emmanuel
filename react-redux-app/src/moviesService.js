// moviesService.js

const movies = [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 10,
      dislikes: 5,
      background: 'https://gentlemanmoderne.com/wp-content/uploads/2018/06/ocean-8-critique.jpg'
    },
    {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0,
      background:'https://www.azcentral.com/gcdn/-mm-/75b789dca58d5584dd0f2d751286fe5c13cae103/c=0-0-2998-1694/local/-/media/2018/03/22/Phoenix/Phoenix/636573371544638204-midnight-sun-MS-00128-rgb.jpg'
    },
    {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1,
      background: 'https://cache.magicmaman.com/data/photo/w1200_h630_c18/1s8/indesctructible.jpg'
    },
    {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6,
      background: 'https://focus.telerama.fr/2024/06/25/0/0/3000/2000/1200/0/60/0/2711b70_1719328069054-telerama-018162-002.jpg/webp'
    },
    {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2,
      background: 'https://deadline.com/wp-content/uploads/2018/08/creed-ii-creed-ii-first-poster_rgb.jpg'
    },
    {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3,
      background: 'https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2010/1/28/1264699251256/John-Travolta-and-Samuel--001.jpg?width=465&dpr=1&s=none'
    },
    {
      id: '7',
      title: 'Seven',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32,
      background: 'https://media.vanityfair.fr/photos/60d37c0ba0a10ca7ad2cc231/16:9/w_1280,c_limit/vf_seven_home_2569.jpeg'
    },
    {
      id: '8',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      background: 'https://m.media-amazon.com/images/S/pv-target-images/e826ebbcc692b4d19059d24125cf23699067ab621c979612fd0ca11ab42a65cb._SX1080_FMjpg_.jpg'
    },
    {
      id: '9',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12,
      background: 'https://media.newyorker.com/photos/59095d9a2179605b11ad5084/master/pass/Rothman-Gone-Girl1.jpg'
    }
  ];
  
  export const movies$ = new Promise((resolve) => setTimeout(() => resolve(movies), 100));
  