import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Blogging Application Backend in Spring Boot',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/shivrajgodle/Blogging-backend-api',
      imgUrl: 'assets/images/blogbackend.PNG',
      tech: 'Java, Spring Boot , Spring Security , Swagger , MySQL'
    },

    {
      id: 2,
      title: 'Blogging Application UI in Angular',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/shivrajgodle/Blogging_ui_app',
      imgUrl: 'assets/images/blogui.PNG',
      tech: 'Angular, PrimeNG, Angular Material, JWT AUTH Token'
    },


    {
      id: 3,
      title: 'Shopping Portal',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/shivrajgodle/ShoppingMysql',
      imgUrl: 'assets/images/shopping.PNG',
      tech: 'Angular 12, Spring Boot, MySQL, NGRX , Angular Material'
    },

    {
      id: 4,
      title: 'Spring Security Auth 2.0',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/shivrajgodle/SpringSecurity-Auth2.0',
      imgUrl: 'assets/images/auth.PNG',
      tech: 'JAVA, Spring Boot , Spring Security , MySQL'
    },


    {
      id: 5,
      title: 'User Contact Microservice',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/shivrajgodle/UserContactMicroservice/tree/master',
      imgUrl: 'assets/images/usermicro.PNG',
      tech: 'JAVA, Spring Boot, Eureka Server'
    },



    {
      id: 6,
      title: 'Department - User Microservice',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/shivrajgodle/codebuffermicroservice',
      imgUrl: 'assets/images/codemicro.PNG',
      tech: 'JAVA, Spring Boot, Eureka Server'
    },



    {
      id: 7,
      title: 'Stock Market Average Calculator',
      desc: '',
      livedemo: 'https://shivrajgodle.github.io/Stock-share-average-calculator/',
      githurl: 'https://github.com/shivrajgodle/Stock-share-average-calculator',
      imgUrl: 'assets/images/stockavg.PNG',
      tech: 'HTML, PrimeNG, CSS, Angular-14'
    },



    {
      id: 8,
      title: 'COVID 19 vaccine Cowin Portal Clone ',
      desc: '',
      livedemo: 'https://shivrajgodle.github.io/cowinClone/',
      githurl: 'https://github.com/shivrajgodle/cowinClone',
      imgUrl: 'assets/images/cowinclone.PNG',
      tech: 'HTML,CSS,Javascript'
    },


    {
      id: 9,
      title: 'Static Website',
      desc: '',
      livedemo: 'https://shivrajgodle.github.io/website_templete/',
      githurl: 'https://github.com/shivrajgodle/website_templete',
      imgUrl: 'assets/images/websitetemplate.PNG',
      tech: 'HTML,CSS,Bootstrap'
    },


    {
      id: 10,
      title: 'ResultCo',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/shivrajgodle/Resultco',
      imgUrl: 'assets/images/result.PNG',
      tech: 'Angular 12, Fake Json Server ,Angular Material'
    },


    {
      id: 11,
      title: 'Micronaut - Angular - MongoDb Application',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/shivrajgodle/Fullstack-micronaut-angular-mogodb',
      imgUrl: 'assets/images/micro.PNG',
      tech: 'Angular , Micronaut , MongoDB'
    },


    {
      id: 12,
      title: 'Spring Boot - Microsoft Excel Export project',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/shivrajgodle/SpringExcelExport/tree/master',
      imgUrl: 'assets/images/excel.PNG',
      tech: 'Spring Boot , MySQL , Apache POI'
    },


  ]
  about2 = `Software Developer with 1.3+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ All versions , Javascript and UI with Responsive Designs .
  Have good understanding of Java, Spring Boot, Microservices, MongoDB, and MYSQL`

  about = "I love developing applications, that implies a positive impact on the world, with the help of new emerging technologies. I have a keen interest in Web Application Development. I consider myself a ‘forever student’ and I'm always eager to learn and implement new things."
  resumeurl = "https://drive.google.com/file/d/1-LGKDefv2GDeJSVsv_53fqfqWrQSmuQz/view?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'Spring Boot',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVA',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL , MONGODB',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'MiCROSERVICES',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'JAVASCRIPT',
      'progress': '80%'
    },
    {
      'id': '7',
      'skill': 'Azure , AWS',
      'progress': '50%'
    },
    {
      'id': '8',
      'skill': 'Data Structure',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Anemoi Technologies',
      location: 'Pune',
      timeline: 'Nov 2021 to Sept 2022',
      role: 'Software Engineer',
      work: 'Technologies: Angular , Micronaut , Microsoft Azure , Azure vm , Azure sql , Android Studio , RESTful WebServices , Postman , Spring Boot , NgRx , PrimeNG , Microsoft SQL Server , React Native.  .Worked as a full stack developer , Responsible for handling the UI in Angular and Managing the api calls in Java Spring Boot. Designed & Built the UI for various projects pertaining to Audit domain. handling of project team and taken successful project handover from other development team and fixed all bugs and done new modifications in application and helped for deployment of application. worked in all stages of software development from attending client meetings for requirement gathering to deployment.'

    },
    {
      id: 3,
      company: 'Metamagic Global Inc',
      location: 'Pune',
      timeline: 'April 2021 to Sept 2021',
      role: 'Software Engineer',
      work: `Technologies : Angular , Spring Boot , MongoDB , Postman , Angular Material , NgRx , MySQL ,REST APIs.
      Designed & Worked on Shopping portal site. and created various small scale projects during training period..`
    },
  


  ]

  extraCircularInfo: any = [
   
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/github.png',
      url: 'https://github.com/shivrajgodle'
    },
   
  ]
  

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
