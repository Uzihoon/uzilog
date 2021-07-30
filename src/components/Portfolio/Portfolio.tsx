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

function Portfolio() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title-box')}>
        <div className={cx('title')}>
          <div>P</div>
          <div>O</div>
          <div>R</div>
          <div>T</div>
        </div>
        <div className={cx('photo')}>
          <div className={cx('point')} />
          <img src={ProfilePhoto} />
          <div className={cx('line')} />
        </div>
        <div className={cx('title')}>
          <div>F</div>
          <div>O</div>
          <div>L</div>
          <div>I</div>
          <div>O</div>
        </div>
      </div>
      <div className={cx('info')}>
        <div className={cx('name')}>Jiwoo Hong</div>
        <div className={cx('sub')}>I am Front-End developer</div>
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
        <div className={cx('section-title')}>Education</div>
        <div className={cx('section-content')}>
          <div className={cx('section-item')}>
            <b>Korea National Open University</b>, Seoul, Republic of Korea
            (2022)
            <div>Bachelor of Science in Computer Science and Engineering</div>
          </div>
        </div>
      </div>
      <div className={cx('section')}>
        <div className={cx('section-title')}>Skills</div>
        <div className={cx('section-content')}>
          <div className={cx('section-item')}>
            <b>Programming Language</b>
            <div>Javascript(ES6+), HTML, CSS3(SASS), Typescript, Python</div>
          </div>
          <div className={cx('section-item')}>
            <b>Framework / Library</b>
            <div>
              React, Angular, Redux, Redux-Saga, Webpack, Babel, Electron,
              Recoil
            </div>
          </div>
          <div className={cx('section-item')}>
            <b>Tooling / DevOps</b>
            <div>Docker, Github, Bitbucket, Terraform, Slack</div>
          </div>
          <div className={cx('section-item')}>
            <b>Environment</b>
            <div>AWS, Linux</div>
          </div>
          <div className={cx('section-item')}>
            <b>Etc</b>
            <div>Photoshop, Illustration</div>
          </div>
        </div>
      </div>
      <div className={cx('section')}>
        <div className={cx('section-title')}>Carrer</div>
        <div className={cx('section-content')}>
          <div className={cx('section-item')}>
            <b>DKRabbit</b>, CA, United States (2020 - )
            <div>Front-End Developer, Freelancer</div>
          </div>
          <div className={cx('section-item')}>
            <b>LG CNS</b>, Seoul, Republic of Korea (2018 - 2020)
            <div>Front-End Developer, Freelancer</div>
          </div>
          <div className={cx('section-item')}>
            <b>NSMG</b>, Seoul, Republic of Korea (2017 - 2018)
            <div>Front-End Developer</div>
          </div>
        </div>
      </div>
      <div className={cx('section')}>
        <div className={cx('section-title')}>Project</div>
        <div className={cx('section-content')}>
          <div className={cx('section-item', 'mb-2')}>
            <b>Customer Portal</b>, Request a refund for your Samsung product.
            Samsung (2020 - 2021)
            <div>
              Customer Portal is intended to request a refund for your Samsung
              product.
            </div>
            <div className={cx('section-desc-box')}>
              <div className={cx('section-desc')}>
                <div className={cx('section-desc-title')}>Skill</div>
                <div className={cx('section-desc-value')}>Angular</div>
              </div>
              <div className={cx('section-desc')}>
                <div className={cx('section-desc-title')}>URL</div>
                <div className={cx('section-desc-value')}>
                  <a href='https://samsungcso.com/' target='_blank'>
                    https://samsungcso.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('section-item', 'mb-2')}>
            <b>GeoKo</b>, Converting Korea geolocation code. (2020)
            <div>
              GecKo is the open source library that's converting Korea
              geolocation code.
            </div>
            <div className={cx('section-desc-box')}>
              <div className={cx('section-desc')}>
                <div className={cx('section-desc-title')}>Skill</div>
                <div className={cx('section-desc-value')}>Typescript</div>
              </div>
              <div className={cx('section-desc')}>
                <div className={cx('section-desc-title')}>Github</div>
                <div className={cx('section-desc-value')}>
                  <a href='https://github.com/Uzihoon/Geoko' target='_blank'>
                    https://github.com/Uzihoon/Geoko
                  </a>
                </div>
              </div>
              <div className={cx('section-desc')}>
                <div className={cx('section-desc-title')}>URL</div>
                <div className={cx('section-desc-value')}>
                  <a href='https://uzihoon.github.io/GeoKo' target='_blank'>
                    https://uzihoon.github.io/GeoKo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('section-item', 'mb-2')}>
            <b>BoBalGGun</b>, Analysis Korea subway congestion application.
            (2020)
            <div>
              BoBalGGun is a application which analyzes Korea subway congestion.
            </div>
            <div className={cx('section-desc-box')}>
              <div className={cx('section-desc')}>
                <div className={cx('section-desc-title')}>Skill</div>
                <div className={cx('section-desc-value')}>React Native</div>
              </div>
              <div className={cx('section-desc')}>
                <div className={cx('section-desc-title')}>Github</div>
                <div className={cx('section-desc-value')}>
                  <a
                    href='https://github.com/Uzihoon/BoBalGGun'
                    target='_blank'
                  >
                    https://github.com/Uzihoon/BoBalGGun
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('section-item', 'mb-2')}>
            <b>EUN</b>, Analysis CRISPR/Cas. Korea University (2020)
            <div>
              EUN is the website that provides the easy way to analyze
              CRISPR/Cas efficiency. This project was very intersting because
              it's using for university or labs. This website uses for analysis
              RNA experiment result. Of course there's another analysis website,
              but they could analyze only one result. EUN can analyze more than
              one result and report the result with table, percentage, json file
              and even excel file. You can try to analyze even you don't have
              RNA result. Just click 'Run analze sample file' button on the top.
            </div>
            <div className={cx('section-desc-box')}>
              <div className={cx('section-desc')}>
                <div className={cx('section-desc-title')}>Skill</div>
                <div className={cx('section-desc-value')}>
                  React, Redux, Redux-Saga, Typescript, Webworker, Cognito,
                  CloudFront
                </div>
              </div>
              <div className={cx('section-desc')}>
                <div className={cx('section-desc-title')}>Github</div>
                <div className={cx('section-desc-value')}>
                  <a href='https://github.com/Uzihoon/eun' target='_blank'>
                    https://github.com/Uzihoon/eun
                  </a>
                </div>
              </div>
              <div className={cx('section-desc')}>
                <div className={cx('section-desc-title')}>URL</div>
                <div className={cx('section-desc-value')}>
                  <a href='https://daeunyoon.com' target='_blank'>
                    https://daeunyoon.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('section-item', 'mb-2')}>
            <b>TunA</b>, Application Performance Monitoring Solution. LG CNS
            (2019 - 2020)
            <div>
              TunA is the application performance monitoring service that's
              based on Scouter. I joined this project as front-end developer to
              make visualized metrics.
            </div>
            <div className={cx('section-desc-box')}>
              <div className={cx('section-desc')}>
                <div className={cx('section-desc-title')}>Skill</div>
                <div className={cx('section-desc-value')}>
                  React, Redux, Redux-Saga, Typescript, Chart.js, Webworker
                </div>
              </div>
              <div className={cx('section-desc')}>
                <div className={cx('section-desc-title')}>URL</div>
                <div className={cx('section-desc-value')}>
                  <a
                    href='https://www.lgcns.co.kr/Solution/TunA'
                    target='_blank'
                  >
                    https://www.lgcns.co.kr/Solution/TunA
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('section-item', 'mb-2')}>
            <b>Fanddle</b>, funding service application for singers, actors.
            (2018)
            <div>
              Fanddle is funding service application for singers, acts in mobile
              device. This project is the first time that I've never used any
              framework or library. I developed this applicatin with pure
              javascript, css and html.
            </div>
            <div className={cx('section-desc-box')}>
              <div className={cx('section-desc')}>
                <div className={cx('section-desc-title')}>Skill</div>
                <div className={cx('section-desc-value')}>
                  HTML, CSS, Javascript, Webpack, Babel
                </div>
              </div>
              <div className={cx('section-desc')}>
                <div className={cx('section-desc-title')}>Github</div>
                <div className={cx('section-desc-value')}>
                  <a href='https://github.com/Uzihoon/fanddle' target='_blank'>
                    https://github.com/Uzihoon/fanddle
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('section')}>
        <div className={cx('section-title')}>Art Work</div>
        <div className={cx('section-content')}>
          <div className={cx('section-item')}>
            <div className={cx('flag-box')}>
              <img src={Flag1} />
              <img src={Flag2} />
            </div>
          </div>
          <div className={cx('section-item')}>
            <div className={cx('flag-box')}>
              <img src={Flag3} />
              <img src={Flag4} />
            </div>
          </div>
          <div className={cx('section-item')}>
            <div className={cx('flag-box')}>
              <img src={Flag5} />
              <img src={Flag6} />
            </div>
          </div>
          <div className={cx('section-item')}>
            <div className={cx('flag-box')}>
              <img src={Flag7} />
              <img src={Flag8} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
