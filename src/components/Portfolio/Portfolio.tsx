import React from 'react';
import styles from './Portfolio.module.scss';
import classNames from 'classnames/bind';
import ProfilePhoto from 'assets/jiwoohong.png';
// import Flag1 from 'assets/flag/1.jpg';
// import Flag2 from 'assets/flag/2.jpg';
// import Flag3 from 'assets/flag/3.jpg';
// import Flag4 from 'assets/flag/4.jpg';
// import Flag5 from 'assets/flag/5.jpg';
// import Flag6 from 'assets/flag/6.jpg';
// import Flag7 from 'assets/flag/7.jpg';
// import Flag8 from 'assets/flag/8.jpg';

const cx = classNames.bind(styles);

interface Project {
  title: string;
  subTitle: string;
  desc: string[];
  skill: string[];
  url?: string;
  github?: string;
  video?: string;
  contribute: number;
}

const projectList: Project[] = [
  {
    title: 'SAMSUNG Control Tower',
    subTitle: 'SAMSUNG admin web service',
    desc: [
      'Took initiative and developed monitoring application all on my own from scratch using React and Recoil.',
      'Developed monitoring dashboard and statistics page and increased user experience by 50% faster in finding the target ticket by enhancing search conditions for 5M+ tickets.',
    ],
    skill: ['React', 'Recoil', 'Material UI'],
    contribute: 100,
  },
  {
    title: 'Customer Portal',
    subTitle: 'Samsung customer web application',
    desc: [
      'Built up customer service application for Samsung Electronics America',
      'Improved previous UI/UX',
      'Developed web application for ticket service using Angular',
    ],
    skill: ['Angular'],
    url: 'https://samsungcso.com',
    contribute: 70,
  },
  {
    title: 'P1',
    subTitle: 'Samsung customer web application',
    desc: [
      'Built up customer service application for Samsung Electronics America',
      'Improved previous UI/UX',
      'Developed web application for ticket service using Angular',
    ],
    skill: ['Angular'],
    contribute: 30,
  },
  {
    title: 'HRM Web',
    subTitle: 'Robot management web application for Hyundai Robotics',
    desc: [
      'Built up web and desktop application for Hyundai Robotics robot management system',
      'Used Electron to make connection between robot network system and server',
      'Developed and improved web and desktop application performance using React',
    ],
    skill: ['React', 'Redux', 'Redux-Saga', 'Typescript', 'Electron'],
    contribute: 100,
  },
  {
    title: 'EUN',
    subTitle: 'CRISPR/CAS analysis web service',
    desc: [
      'Developed the application to analyze CRISPR/CAS results of genetic manipulation using React and AWS services such as CloudFront, S3, and Cognito all on my own from design to front-end and back-end development.',
      'Reduced analysis time from seven days to just one day by making the application enable to accept more than one sequencing data pair and added the download feature for Excel, JSON, and Line Chart image files.',
      'Currently, Korea University of Medicine Lab, Kangwon National University, Arkansas University, and illumina biotech company are making use of this service to analyze research results, and a paper was published using EUN.',
    ],
    skill: [
      'React',
      'Redux',
      'Redux-Saga',
      'Typescript',
      'Cognito',
      'CloudFront',
    ],
    url: 'https://daeunyoon.com',
    github: 'https://github.com/Uzihoon/eun',
    contribute: 100,
  },

  {
    title: 'TunA',
    subTitle: 'Application Performance Management web service',
    desc: [
      'Developed and led APM application for B2B by myself using React from scratch in front-end development.',
      'Improved and refactored legacy source code developed with Angular.js using React, and increased application performance by 100% by using web worker and WebSocket (SockJS), resulting in reducing the real-time period from 7 seconds to 3 seconds.',
      'Handled and managed 5M+ data to visualize monitoring and statistics dashboard and implemented Line, Bar, Heatmap, and Topology charts using Canvas and Chart.js',
    ],
    skill: ['React', 'Redux', 'Redux-Saga', 'Typescript', 'Chart.js'],
    url: 'https://www.lgcns.com/EN/Solution/Tuna',
    video: 'https://youtu.be/aoY0jBKVH40',
    contribute: 100,
  },
  {
    title: 'Heybunny',
    subTitle: 'News subscription web application',
    desc: [
      'Built up design system and web application for subscription service',
      'Applied adaptive web design for desktop, tablet, and mobile',
      'Developed server side rendering (SSR) using Next.js',
    ],
    skill: ['Next.js', 'Redux', 'Redux-saga'],
    url: 'https://www.heybunny.io/',
    contribute: 100,
  },
  {
    title: 'Gcon Studio',
    subTitle: 'Translation web service based on AI',
    desc: [
      'Built up edit and translation service web',
      'Applied design system to improve development performance',
      'Developed overall front-end part using Next.js',
    ],
    skill: ['Next.js', 'Redux', 'Redux-saga'],
    contribute: 100,
  },
  {
    title: 'NexClipper',
    subTitle: 'Kubernetes management web service',
    desc: [
      'Developed overall process from design to front-end development',
      'Built up CI/CD environment using Docker',
      'Developed Kubernetes monitoring and management service using React',
    ],
    skill: ['React', 'Redux', 'Redux-saga'],
    url: 'https://console.nexclipper.io',
    contribute: 100,
  },
  {
    title: 'GeoKo',
    subTitle: 'Geolocation code conversion library',
    desc: [
      'Developed open source library for converting geolocation code such as GEO, TM, KATEC, GRS80, UTMK',
      'Developed source code using Typescript and deployed to NPM',
      'Developed demo website using Tree.js for 3D computer graphics',
    ],
    skill: ['Typescript', 'NPM'],
    github: 'https://github.com/Uzihoon/Geoko',
    url: 'https://uzihoon.github.io/GeoKo',
    contribute: 100,
  },
  {
    title: 'BoBalGGun',
    subTitle: 'Subway congestion analysis cross platform mobile application',
    desc: [
      'Developed average congestion level by time period using 2015 subway congestion level provided by Seoul Metro',
      'Designed interactive UI for analysis of traffic congestion',
      'Developed cross platform application for analyzing subway congestion using React Native',
    ],
    skill: ['React Native'],
    github: 'https://github.com/Uzihoon/BoBalGGun',
    contribute: 100,
  },

  {
    title: 'Fanddle',
    subTitle: 'Funding web application for entertainers',
    desc: [],
    skill: ['HTML', 'CSS', 'Javascript', 'Webpack', 'Babel'],
    github: 'https://github.com/Uzihoon/fanddle',
    contribute: 100,
  },
];

const skills = [
  {
    title: 'Programming Language',
    skills: ['Javascript(ES6+)', 'HTML', 'CSS(SASS)', 'Typescript'],
  },
  {
    title: 'Framework / Library',
    skills: [
      'React',
      'Angular',
      'Redux',
      'Redux-Saga',
      'Webpack',
      'Electron',
      'Recoil',
      'Chart.js',
      'React-Native',
      'Next.js',
      'GraphQL',
    ],
  },
  {
    title: 'Tooling / DevOps',
    skills: ['Docker', 'Git', 'Terraform', 'Jenkins'],
  },
  {
    title: 'Environment',
    skills: ['AWS', 'Linux'],
  },
  // {
  //   title: 'Etc',
  //   skills: ['Photoshop', 'Illustration'],
  // },
];

const educationList = [
  {
    title: 'Korea National Open University',
    date: 'Mar. 2020 - Feb. 2020',
    location: 'Seoul, Korea',
    desc: [
      'Bachelor of Science in Computer Science',
      'Total GPA of 4.3 / 4.5 (97.0 / 100)',
    ],
  },
  {
    title: 'Yonam Institute of Technology',
    date: 'Mar. 2013 - Feb. 2015',
    location: 'Chinju, Korea',
    desc: [
      'Associate Degree of Arts in Industrial Design',
      'Total GPA of 3.64 / 4.5 (90.17 / 100)',
    ],
  },
];

const workList = [
  {
    title: 'DK Rabbit',
    location: 'California, USA',
    date: 'Aug. 2020 – Apr. 2022',
    subTitle: 'Contract, Remote',
    desc: [
      'Collaborated with project manager, back-end developers, and designers to design, build, test, and improve responsive and mobile-first websites using Angular and React.',
      'Built and maintained cross-browser and interactive UI for 3K+ users.',
      'Enhanced UX and development performance by restructuring data structure and implementing reusable components, resulting in improvements of 30% in user satisfaction and 20% in performance.',
    ],
  },
  {
    title: 'LG CNS',
    location: 'Seoul, Korea',
    date: 'Jan. 2019 – July 2020',
    subTitle: 'Contract',
    desc: [
      'Led the project as a front-end engineer and participated in design, development, deployment, and testing APM application.',
      'Conducted React training for co-workers on how to build efficient React applications.',
    ],
  },
  {
    title: 'NSMG',
    location: 'Seoul, Korea',
    date: 'Nov. 2017 – Dec. 2019',
    subTitle: 'Full-Time',
    desc: [
      'Built and maintained the marketing analysis app and in-house collaborative tool as a front-end engineer and implemented custom UI/UX components system using JavaScript and increased KPI by 50%.',
    ],
  },
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
        <div className={cx('sub')}>
          Front End Engineer with 4+ years of experience
        </div>
        <div className={cx('sub-desc')}>
          Front End Engineer with 4+ years of experience in front-end technology
          such as React and Angular. Love to design, develop, optimize, and test
          application. Built data visualization, web-app, and marketing
          analytics application from scratch.
        </div>
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
          <div className={cx('desc-item')}>
            <div className={cx('desc-title')}>LinkedIn</div>
            <div className={cx('desc-value')}>
              <a href='https://www.linkedin.com/in/jiwoohong' target='_blank'>
                https://www.linkedin.com/in/jiwoohong
              </a>
            </div>
          </div>
          <div className={cx('desc-item')}>
            <div className={cx('desc-title')}>Location</div>
            <div className={cx('desc-value')}>Vancouver, Canada</div>
          </div>
        </div>
      </div>

      <div className={cx('section')}>
        <div className={cx('section-title')}>
          <div>Skills</div>
        </div>
        <div className={cx('section-content')}>
          {skills.map((skill) => (
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
          {workList.map((work) => (
            <div className={cx('section-item')} key={work.title}>
              <div className={cx('section-main-title')}>
                <div>
                  <b>Front End Engineer at {work.title}</b>
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
          {projectList.map((project) => (
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
                {project.contribute && (
                  <div className={cx('section-desc')}>
                    <div className={cx('section-desc-title')}>Contrib.</div>
                    <div className={cx('section-desc-value')}>
                      {project.contribute}%
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
      <div className={cx('section')}>
        <div className={cx('section-title')}>
          <div>Education</div>
        </div>
        <div className={cx('section-content')}>
          {educationList.map((education) => (
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
    </div>
  );
}

export default Portfolio;
