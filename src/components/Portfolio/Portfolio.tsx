import React from 'react';
import styles from './Portfolio.module.scss';
import classNames from 'classnames/bind';
import ProfilePhoto from 'assets/jiwoohong.png';
import Flag1 from 'assets/flag/1.jpg';
import Flag2 from 'assets/flag/2.jpg';
import Flag3 from 'assets/flag/3.jpg';
import Flag4 from 'assets/flag/4.jpg';
import Flag5 from 'assets/flag/5.jpg';
import Flag6 from 'assets/flag/6.jpg';
import Flag7 from 'assets/flag/7.jpg';
import Flag8 from 'assets/flag/8.jpg';

const cx = classNames.bind(styles);

interface Project {
  title: string;
  subTitle: string;
  desc: string[];
  skill: string[];
  url?: string;
  github?: string;
  video?: string;
}

const projectList: Project[] = [
  {
    title: 'Samsung Control Tower',
    subTitle: 'Samsung admin web service',
    desc: [
      'Built up management service for Samsung admin',
      'Improved management system performance and user interface',
      'Developed web service for dashboard and statistics using React for front-end development and Kotlin for back-end development'
    ],
    skill: ['React', 'Recoil']
  },
  {
    title: 'Customer Portal',
    subTitle: 'Samsung customer web application',
    desc: [
      'Built up customer service application for Samsung Electronics America',
      'Improved previous UI/UX',
      'Developed web application for ticket service using Angular'
    ],
    skill: ['Angular'],
    url: 'https://samsungcso.com'
  },
  {
    title: 'HRM Web',
    subTitle: 'Robot management web application for Hyundai Robotics',
    desc: [
      'Built up web and desktop application for Hyundai Robotics robot management system',
      'Used Electron to make connection between robot network system and server',
      'Developed and improved web and desktop application performance using React'
    ],
    skill: ['React', 'Redux', 'Redux-Saga', 'Typescript', 'Electron']
  },
  {
    title: 'Heybunny',
    subTitle: 'News subscription web application',
    desc: [
      'Built up design system and web application for subscription service',
      'Applied adaptive web design for desktop, tablet, and mobile',
      'Developed server side rendering (SSR) using Next.js'
    ],
    skill: ['Next.js', 'Redux', 'Redux-saga'],
    url: 'https://www.heybunny.io/'
  },
  {
    title: 'Gcon Studio',
    subTitle: 'Translation web service based on AI',
    desc: [
      'Built up edit and translation service web',
      'Applied design system to improve development performance',
      'Developed overall front-end part using Next.js'
    ],
    skill: ['Next.js', 'Redux', 'Redux-saga']
  },

  {
    title: 'NexClipper',
    subTitle: 'Kubernetes management web service',
    desc: [
      'Developed overall process from design to front-end development',
      'Built up CI/CD environment using Docker',
      'Developed Kubernetes monitoring and management service using React'
    ],
    skill: ['React', 'Redux', 'Redux-saga'],
    url: 'https://console.nexclipper.io'
  },
  {
    title: 'GeoKo',
    subTitle: 'Geolocation code conversion library',
    desc: [
      'Developed open source library for converting geolocation code such as GEO, TM, KATEC, GRS80, UTMK',
      'Developed source code using Typescript and deployed to NPM',
      'Developed demo website using Tree.js for 3D computer graphics'
    ],
    skill: ['Typescript', 'NPM'],
    github: 'https://github.com/Uzihoon/Geoko',
    url: 'https://uzihoon.github.io/GeoKo'
  },
  {
    title: 'BoBalGGun',
    subTitle: 'Subway congestion analysis cross platform mobile application',
    desc: [
      'Developed average congestion level by time period using 2015 subway congestion level provided by Seoul Metro',
      'Designed interactive UI for analysis of traffic congestion',
      'Developed cross platform application for analyzing subway congestion using React Native'
    ],
    skill: ['React Native'],
    github: 'https://github.com/Uzihoon/BoBalGGun'
  },
  {
    title: 'EUN',
    subTitle: 'CRISPR/CAS analysis web service',
    desc: [
      'Developed CRISPR/CAS analysis web service with efficiency',
      'Used web worker to improve analysis performance and to analyze one or more sequencing data',
      'Provided analysis data in Excel, JSON, and Line Chart image files'
    ],
    skill: [
      'React',
      'Redux',
      'Redux-Saga',
      'Typescript',
      'Cognito',
      'CloudFront'
    ],
    url: 'https://daeunyoon.com',
    github: 'https://github.com/Uzihoon/eun'
  },

  {
    title: 'TunA',
    subTitle: 'Application Performance Management web service',
    desc: [
      'Improved legacy source code developed with Angular.js using React',
      'Built up real-time visualize monitoring and statistics web service',
      'Developed web service that tracks web application server and Kubernetes'
    ],
    skill: ['React', 'Redux', 'Redux-Saga', 'Typescript', 'Chart.js'],
    url: 'https://www.lgcns.com/EN/Solution/Tuna',
    video: 'https://youtu.be/aoY0jBKVH40'
  },
  {
    title: 'Fanddle',
    subTitle: 'Funding web application for entertainers',
    desc: [],
    skill: ['HTML', 'CSS', 'Javascript', 'Webpack', 'Babel'],
    github: 'https://github.com/Uzihoon/fanddle'
  }
];

const skills = [
  {
    title: 'Programming Language',
    skills: ['Javascript(ES6+)', 'HTML', 'CSS(SASS)', 'Typescript']
  },
  {
    title: 'Framework / Library',
    skills: [
      'React',
      'Angular',
      'Redux',
      'Redux-Saga',
      'Webpack',
      'Babel',
      'Electron',
      'Recoil'
    ]
  },
  {
    title: 'Tooling / DevOps',
    skills: ['Docker', 'Git', 'Terraform']
  },
  {
    title: 'Environment',
    skills: ['AWS', 'Linux']
  },
  {
    title: 'Etc',
    skills: ['Photoshop', 'Illustration']
  }
];

const educationList = [
  {
    title: 'Korea National Open University',
    date: 'Mar. 2020 - Feb. 2020',
    location: 'Seoul, Korea',
    desc: [
      'Bachelor of Science in Computer Science',
      'Total GPA of 4.3 / 4.5 (97.0 / 100)'
    ]
  },
  {
    title: 'Yonam Institute of Technology',
    date: 'Mar. 2013 - Feb. 2015',
    location: 'Chinju, Korea',
    desc: [
      'Associate Degree of Arts in Industrial Design',
      'Total GPA of 3.64 / 4.5 (90.17 / 100)'
    ]
  }
];

const workList = [
  {
    title: 'DKRabbit',
    location: 'California, USA',
    date: 'Aug. 2020 – Apr. 2022',
    subTitle: 'Front-End Developer, Contract Full-time',
    desc: [
      'Built up front-end environment using Angular and React',
      'Optimized existing source code performance and developed new functions',
      'Developed web application for Samsung Electronics America admin services'
    ]
  },
  {
    title: 'LG CNS',
    location: 'Seoul, Korea',
    date: 'Jan. 2019 – July 2020',
    subTitle: 'Front-End Developer, Contract Full-time',
    desc: [
      'Redesigned existing project developed with Angular.js by using React',
      'Developed visualization charts and animation UI for real-time monitoring using JavaScript',
      'Developed web service for Application Performance Management (APM)'
    ]
  },
  {
    title: 'NSMG',
    location: 'Seoul, Korea',
    date: 'Nov. 2017 – Dec. 2019',
    subTitle: 'Front-End Developer, Full-time',
    desc: [
      'Built up design system and overall front-end environment',
      'Developed marketing analysis web services using JavaScript',
      'Developed collaborative tool for in-house using JavaScript and PHP'
    ]
  }
];

function Portfolio() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title-box')}>
        <div className={cx('photo')}>
          <div className={cx('point')} />
          <img src={ProfilePhoto} />
          <div className={cx('line')} />
        </div>
      </div>
      <div className={cx('info')}>
        <div className={cx('name')}>Jiwoo Hong</div>
        {/* <div className={cx('sub')}>Front-End developer</div> */}
        <div className={cx('desc')}>
          <div className={cx('desc-item')}>
            <div className={cx('desc-title')}>Email</div>
            <div className={cx('desc-value')}>
              <a href='mailto:uzihoon.dev@gmail.com'>uzihoon.dev@gmail.com</a>
            </div>
          </div>
          <div className={cx('desc-item')}>
            <div className={cx('desc-title')}>Blog</div>
            <div className={cx('desc-value')}>
              <a href='https://uzihoon.com/' target='_blank'>
                https://uzihoon.com
              </a>
            </div>
          </div>
          <div className={cx('desc-item')}>
            <div className={cx('desc-title')}>Github</div>
            <div className={cx('desc-value')}>
              <a href='https://github.com/Uzihoon' target='_blank'>
                https://github.com/Uzihoon
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('section')}>
        <div className={cx('section-title')}>
          <div>Education</div>
        </div>
        <div className={cx('section-content')}>
          {educationList.map(education => (
            <div className={cx('section-item')} key={education.title}>
              <div className={cx('section-main-title')}>
                <div>
                  <b>{education.title}</b>
                </div>
                <div className={cx('date')}>
                  <div>{education.date}</div>
                  <div>{education.location}</div>
                </div>
              </div>
              <ul>
                {education.desc.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={cx('section')}>
        <div className={cx('section-title')}>
          <div>Skills</div>
        </div>
        <div className={cx('section-content')}>
          {skills.map(skill => (
            <div className={cx('section-item')} key={skill.title}>
              <b>{skill.title}</b>
              <div>{skill.skills.join(', ')}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={cx('section')}>
        <div className={cx('section-title')}>
          <div>Work Experience</div>
        </div>
        <div className={cx('section-content')}>
          {workList.map(work => (
            <div className={cx('section-item')} key={work.title}>
              <div className={cx('section-main-title')}>
                <div>
                  <b>{work.title}</b>
                  <div className={cx('section-sub-title')}>{work.subTitle}</div>
                </div>
                <div className={cx('date')}>
                  <div>{work.date}</div>
                  <div>{work.location}</div>
                </div>
              </div>
              <ul>
                {work.desc.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={cx('section')}>
        <div className={cx('section-title')}>
          <div>Project</div>
        </div>
        <div className={cx('section-content')}>
          {projectList.map(project => (
            <div className={cx('section-item', 'mb-2')} key={project.title}>
              <b>{project.title}</b>
              <div className={cx('section-sub-title')}>{project.subTitle}</div>
              <div>
                <ul>
                  {project.desc.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div className={cx('section-desc-box')}>
                {project.skill && (
                  <div className={cx('section-desc')}>
                    <div className={cx('section-desc-title')}>Skill</div>
                    <div className={cx('section-desc-value')}>
                      {project.skill.join(', ')}
                    </div>
                  </div>
                )}
                {project.github && (
                  <div className={cx('section-desc')}>
                    <div className={cx('section-desc-title')}>Github</div>
                    <div className={cx('section-desc-value')}>
                      <a href={project.github} target='_blank'>
                        {project.github}
                      </a>
                    </div>
                  </div>
                )}
                {project.url && (
                  <div className={cx('section-desc')}>
                    <div className={cx('section-desc-title')}>URL</div>
                    <div className={cx('section-desc-value')}>
                      <a href={project.url} target='_blank'>
                        {project.url}
                      </a>
                    </div>
                  </div>
                )}
                {project.video && (
                  <div className={cx('section-desc')}>
                    <div className={cx('section-desc-title')}>Video</div>
                    <div className={cx('section-desc-value')}>
                      <a href={project.video} target='_blank'>
                        {project.video}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
