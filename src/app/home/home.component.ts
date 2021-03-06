import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images;
  optionsWork = {
    items: 4, dots: false, nav: true, loop: false,
    responsive: {
      0: {
        stagePadding: 50,
        margi: 50,
        center: true,
        items: 1,
        nav: true
      },
      768: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: true
      }
    }
  };

  myWork = [
    {
      title: 'Veabor',
      image: '/assets/img/veabor.jpg',
      description: 'Es uan webapp de viajes ',
      linkSite: 'https://veabor.com/',
      tenology: [
        '/assets/img/angular.svg',
        '/assets/img/html5.svg',
        '/assets/img/sass.svg',
        '/assets/img/typescript.svg',
        '/assets/img/bootstrap.svg'
      ]
    },
    {
      title: 'Nirpharma',
      image: '/assets/img/nirpharma.jpg',
      description: 'Es una página web responsive, de cannabis medicinal',
      linkSite: '#',
      tenology: [
        '/assets/img/html5.svg',
        '/assets/img/javascript.svg',
        '/assets/img/sass.svg',
        '/assets/img/bootstrap.svg'
      ]
    },
    {
      title: 'Volkswagen',
      image: 'https://fakeimg.pl/350x200/',
      description: 'Es una página web responsive, desarrollada en el cms totalcode',
      linkSite: '',
      tenology: [
        '/assets/img/html5.svg',
        '/assets/img/javascript.svg',
        '/assets/img/sass.svg',
        '/assets/img/bootstrap.svg',
        '/assets/img/totalcode.png',
        '/assets/img/jquery.svg',
      ]
    },
    {
      title: 'La Agencia Mola',
      image: '/assets/img/mola.jpg',
      description: 'Página web informativa de la agencia',
      linkSite: 'https://www.laagenciamola.com/#/',
      tenology: [
        '/assets/img/angular.svg',
        '/assets/img/html5.svg',
        '/assets/img/sass.svg',
        '/assets/img/typescript.svg',
        '/assets/img/bootstrap.svg'
      ]
    },
    {
      title: 'Metropolis Center',
      image: '/assets/img/metropolis.jpg',
      description: 'Página web responsive, desarrollada en totalcode',
      linkSite: 'https://metropolis.tiendaweb.com.co/',
      tenology: [
        '/assets/img/html5.svg',
        '/assets/img/javascript.svg',
        '/assets/img/sass.svg',
        '/assets/img/bootstrap.svg',
        '/assets/img/totalcode.png',
        '/assets/img/jquery.svg',
      ]
    },
    {
      title: 'Martinez Diez',
      image: '/assets/img/martinez-diez.jpg',
      description: 'Pagina responsive administrable, se deasarrollo con el front e intregración de la api de Wordpress en Angular y la parte administrables con Wordpress',
      linkSite: '',
      tenology: [
        '/assets/img/angular.svg',
        '/assets/img/html5.svg',
        '/assets/img/sass.svg',
        '/assets/img/typescript.svg',
        '/assets/img/bootstrap.svg',
        '/assets/img/wordpress.svg'
      ]
    },
    {
      title: 'La 14',
      image: '/assets/img/la14.jpg',
      description: 'Página web responsive, desarrollada en totalcode',
      linkSite: 'https://www.la14.com/',
      tenology: [
        '/assets/img/html5.svg',
        '/assets/img/javascript.svg',
        '/assets/img/sass.svg',
        '/assets/img/bootstrap.svg',
        '/assets/img/totalcode.png',
        '/assets/img/jquery.svg',
      ]
    },
    {
      title: 'ByBeauty',
      image: 'https://fakeimg.pl/350x200/',
      description: 'Página web responsive, desarrollada en totalcode',
      linkSite: 'https://www.bybeauty.com/',
      tenology: [
        '/assets/img/html5.svg',
        '/assets/img/javascript.svg',
        '/assets/img/sass.svg',
        '/assets/img/bootstrap.svg',
        '/assets/img/totalcode.png',
        '/assets/img/jquery.svg',
      ]
    },
    {
      title: 'El laurel del Espino',
      image: 'https://fakeimg.pl/350x200/',
      description: 'Es una página web responsive, de....',
      linkSite: 'https://www.ellaureldelespino.com/',
      tenology: [
        '/assets/img/html5.svg',
        '/assets/img/javascript.svg',
        '/assets/img/css-3.svg',
        '/assets/img/php.svg',
      ]
    },
    {
      title: 'El Roble de Arraijan',
      image: 'https://fakeimg.pl/350x200/',
      description: 'Es una página web responsive, de....',
      linkSite: 'https://www.elrobledearraijan.com/',
      tenology: [
        '/assets/img/html5.svg',
        '/assets/img/javascript.svg',
        '/assets/img/css-3.svg',
        '/assets/img/php.svg',
      ]
    },
    {
      title: 'Los palmitos de Arraijan',
      image: 'https://fakeimg.pl/350x200/',
      description: 'Es una página web responsive, de....',
      linkSite: 'https://www.lospalmitosdearraijan.com/',
      tenology: [
        '/assets/img/html5.svg',
        '/assets/img/javascript.svg',
        '/assets/img/css-3.svg',
        '/assets/img/php.svg',
      ]
    },
    {
      title: 'Los Naranjos del Espino',
      image: 'https://fakeimg.pl/350x200/',
      description: 'Mantenimiento de página',
      linkSite: 'https://www.losnaranjosdelespino.com/',
      tenology: [
        '/assets/img/html5.svg',
        '/assets/img/javascript.svg',
        '/assets/img/css-3.svg',
        '/assets/img/php.svg',
      ]
    }
  ];

// {
//   title: '',
//   image: 'https://fakeimg.pl/350x200/',
//   description: '',
//   linkSite: '',
//   tenology: [
//     '/assets/img/', '/assets/img/', '/assets/img/'
//   ]
// }

  constructor() {
  }

  ngOnInit() {
  }
}
