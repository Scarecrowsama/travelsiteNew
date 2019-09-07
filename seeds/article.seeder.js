const { Seeder } = require('mongoose-data-seed');
const Article = require('../backend/_articles/article-model');

const data = [
  {
    title: 'An article about Japan',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus, ante nec eleifend vestibulum, mi lorem volutpat ipsum, convallis pulvinar mauris lorem vitae elit. Ut dictum quis dui ut rutrum. Cras ac venenatis ligula. Maecenas vulputate, urna eget vulputate luctus, augue purus porta tortor, at sagittis risus nunc vel quam. Vestibulum quis suscipit mauris. Vivamus consequat, mauris vel rutrum euismod, velit tellus ullamcorper eros, quis malesuada justo metus eu erat. Nulla et elementum tortor. Integer id dui sagittis turpis ullamcorper cursus ut a quam. Duis pretium ligula sed tellus elementum sollicitudin. Maecenas commodo risus ut odio porta laoreet. Sed convallis lacinia suscipit.',
    author: { 
      id: '5d6a41b73a127f2cc0353682',
      name: 'Trololol'
    },
    rating: {},
    tags: [
      {
        id: '5d6a41b73a127f2cc0353682',
        name: 'japan'
      }
    ],
    entityId: '5d6a41b73a127f2cc0353682',
    entityTypeId: '5d6a41b73a127f2cc0353682'
  }
];

class ArticleSeeder extends Seeder {

  async shouldRun() {
    return Article.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return Article.create(data);
  }
}

module.exports = ArticleSeeder;
