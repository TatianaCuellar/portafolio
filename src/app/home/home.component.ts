import {Component, ElementRef, OnInit} from '@angular/core';
import AOS from 'aos';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formContact: FormGroup;
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

  totalcode: 'desarrollada en el cms TotalCode, donde debía adaptar el diseño e integrar validaciones y mejorar la experiencia de usuario.';
  myWork = [
    {
      title: 'Siscor PLUS',
      image: '/assets/img/SISCOR.png',
      description: 'Siscor es un software corporativo, fue desarrollada en Angular integrando autenticación de Microsoft, manejando Angular material para el diseño, integrando inteligencvia artificial con técnnologia OCR ',
      linkSite: '#',
      tenology: [
        '/assets/img/angular.svg',
        '/assets/img/html5.svg',
        '/assets/img/sass.svg',
        '/assets/img/typescript.svg',
        '/assets/img/angular-material.png'
      ],
      location: '/assets/img/global.png'
    },
    {
      title: 'Aristas',
      image: '/assets/img/aristas.png',
      description: 'Aristas es una aplicación mobile desarrollada en angular - ionic, integrando notificaciones push',
      linkSite: '#',
      tenology: [
        '/assets/img/angular.svg',
        '/assets/img/html5.svg',
        '/assets/img/sass.svg',
        '/assets/img/typescript.svg',
        '/assets/img/ionic.webp',
        '/assets/img/firebase.png'
      ],
      location:  '/assets/img/col.png'
    },
    {
      title: 'Veabor',
      image: '/assets/img/veabor.jpg',
      description: 'Veabor es una aplicación de viajes. Mi aporte fue la implementación de todo el diseño e integración de endpoints agregando las validaciones necesarias.',
      linkSite: 'https://veabor.com/',
      tenology: [
        '/assets/img/angular.svg',
        '/assets/img/html5.svg',
        '/assets/img/sass.svg',
        '/assets/img/typescript.svg',
        '/assets/img/bootstrap.svg'
      ],
      location: '/assets/img/global.png'
    },
    {
      title: 'Nirpharma',
      image: '/assets/img/nirpharma.jpg',
      description: 'Es una página web, de cannabis medicinal, Implementación del diseño y validaciones necesarias.',
      linkSite: '#',
      tenology: [
        '/assets/img/html5.svg',
        '/assets/img/javascript.svg',
        '/assets/img/sass.svg',
        '/assets/img/bootstrap.svg'
      ],
      location: '/assets/img/col.png'
    },
    {
      title: 'Volkswagen',
      image: 'https://fakeimg.pl/350x200/',
      description: 'Es una página web responsive, ' + this.totalcode,
      linkSite: '',
      tenology: [
        '/assets/img/html5.svg',
        '/assets/img/javascript.svg',
        '/assets/img/sass.svg',
        '/assets/img/bootstrap.svg',
        '/assets/img/totalcode.png',
        '/assets/img/jquery.svg',
      ],
      location: '/assets/img/col.png'
    },
    {
      title: 'La Agencia Mola',
      image: '/assets/img/mola.jpg',
      description: 'Es la página web de una agencia de publicidad, implementando un diseño responsive y animaciones',
      linkSite: 'https://www.laagenciamola.com/#/',
      tenology: [
        '/assets/img/angular.svg',
        '/assets/img/html5.svg',
        '/assets/img/sass.svg',
        '/assets/img/typescript.svg',
        '/assets/img/bootstrap.svg'
      ],
      location: '/assets/img/col.png'
    },
    {
      title: 'Metropolis Center',
      image: '/assets/img/metropolis.jpg',
      description: 'Página web responsive, ' + this.totalcode,
      linkSite: 'https://metropolis.tiendaweb.com.co/',
      tenology: [
        '/assets/img/html5.svg',
        '/assets/img/javascript.svg',
        '/assets/img/sass.svg',
        '/assets/img/bootstrap.svg',
        '/assets/img/totalcode.png',
        '/assets/img/jquery.svg',
      ],
      location: '/assets/img/col.png'
    },
    {
      title: 'Martinez Diez',
      image: '/assets/img/martinez-diez.jpg',
      description: 'Pagina responsive administrable, Se desarrollo en angular el frontend realizanno intregración de la api de Wordpress en Angular y la parte administrable con Wordpress',
      linkSite: '',
      tenology: [
        '/assets/img/angular.svg',
        '/assets/img/html5.svg',
        '/assets/img/sass.svg',
        '/assets/img/typescript.svg',
        '/assets/img/bootstrap.svg',
        '/assets/img/wordpress.svg'
      ],
      location: '/assets/img/col.png'
    },
    {
      title: 'La 14',
      image: '/assets/img/la14.jpg',
      description: 'Página web responsive, ' + this.totalcode,
      linkSite: 'https://www.la14.com/',
      tenology: [
        '/assets/img/html5.svg',
        '/assets/img/javascript.svg',
        '/assets/img/sass.svg',
        '/assets/img/bootstrap.svg',
        '/assets/img/totalcode.png',
        '/assets/img/jquery.svg',
      ],
      location: '/assets/img/col.png'
    },
    {
      title: 'ByBeauty',
      image: 'https://fakeimg.pl/350x200/',
      description: 'Página web responsive, ' + this.totalcode,
      linkSite: 'https://www.bybeauty.com/',
      tenology: [
        '/assets/img/html5.svg',
        '/assets/img/javascript.svg',
        '/assets/img/sass.svg',
        '/assets/img/bootstrap.svg',
        '/assets/img/totalcode.png',
        '/assets/img/jquery.svg',
      ],
      location: '/assets/img/col.png'
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
      ],
      location: '/assets/img/col.png'
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
      ],
      location: '/assets/img/panama.png'
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
      ],
      location: '/assets/img/panama.png'
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
      ],
      location: '/assets/img/panama.png'
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

  constructor(
    public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    AOS.init({
      offset: 200, // offset (in px) from the original trigger point
      duration: 1500, // values from 0 to 3000, with step 50ms
    });
    this.validateForm();
  }

  validateForm() {
    this.formContact = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      subject: [null, Validators.required],
      description: [null, Validators.required]
    });
  }
}
