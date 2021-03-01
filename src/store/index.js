import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filePDF: "./pdf/Vo-Tan-Dat-CV.pdf",
    menuPrimary: [
      {
        icon: "BaseIconUser",
        to: "/"
      },
      {
        icon: "BaseIconTools",
        to: "/skill"
      },
      {
        icon: "BaseIconUserGraduate",
        to: "/education"
      },
      {
        icon: "BaseIconBriefcase",
        to: "/experience"
      },
      {
        icon: "BaseIconFolder",
        to: "/portfolio"
      },
      {
        icon: "BaseIconVue",
        to: "/portfolio-vue"
      }
    ],
    personInfo: {
      name: "Võ Tấn Đạt",
      birthday: "24/03/1993",
      sex: "Nam",
      job: "Front-end Developer"
    },
    personContact: [
      {
        icon: "BaseIconPhone",
        text: "038 5262 510"
      },
      {
        icon: "BaseIconEmail",
        text: "votan.it@gmail.com"
      },
      {
        icon: "BaseIconAddress",
        text: "14/13/69 Thân Nhân Trung, Tân Bình, TP. Hồ Chí Minh"
      },
      {
        icon: "BaseIconSkype",
        text: "votanit"
      }
    ],
    personalSkills: [
      {
        title: "GIAO TIẾP",
        value: "65"
      },
      {
        title: "LÀM VIỆC NHÓM",
        value: "80"
      },
      {
        title: "LÀM VIỆC ĐỘC LẬP",
        value: "85"
      },
      {
        title: "TỰ HỌC",
        value: "80"
      },
      {
        title: "CHIỆU ÁP LỰC",
        value: "85"
      }
    ],
    frontendSkills: [
      {
        title: "HTML5, CSS3",
        value: "85"
      },
      {
        title: "JAVASCRIPT/ES6",
        value: "55"
      },
      {
        title: "JQUERY",
        value: "70"
      },
      {
        title: "RESPONSIVE, PERFECTPIXEL",
        value: "80"
      },
      {
        title: "WORDPRESS",
        value: "70"
      },
      {
        title: "VUEJS",
        value: "50"
      }
    ],
    frontendTagsSkills: [
      {
        icon: "BaseIconSass",
        text: "SASS, LESS, Compass"
      },
      {
        icon: "",
        text: "PugJS"
      },
      {
        icon: "BaseIconGrunt",
        text: "Grunt"
      },
      {
        icon: "BaseIconBootstrap",
        text: "Bootstrap"
      },
      {
        icon: "",
        text: "Foundation"
      },
      {
        icon: "",
        text: "Cross-browser"
      },
      {
        icon: "BaseIconGit",
        text: "GIT"
      },
      {
        icon: "BaseIconWordpress",
        text: "WordPress"
      }
    ],
    designSkills: [
      {
        title: "PHOTOSHOP",
        value: "80"
      },
      {
        title: "ILLUSTRATOR",
        value: "70"
      }
    ],
    designTagsSkills: [
      {
        icon: "",
        text: "XD"
      },
      {
        icon: "",
        text: "Lightroom"
      }
    ],
    experience: [
      {
        time: "11/2014 - 09/2016",
        position: "WEB DESIGNER",
        company: "Zago - Thụy Điển",
        todos: [
          "Chịu trách nhiệm chỉnh sửa và gia công các trang web Wordpress và Shopify.",
          "Thiết kế banner, chỉnh sửa ảnh.",
          "Thiết kế giao diện web, cắt file psd sang html.",
          "Setup các trang web Wordpress, Shopify."
        ],
        tags: ["HTML5", "CSS3", "Jquery", "Wordpress", "Shopify"]
      },
      {
        time: "10/2016 - 04/2019",
        position: "FRONT-END (HTML, CSS, Javascript)",
        company: "Vietry - Nhật Bản",
        todos: [
          "Chỉnh sửa ảnh và gia công các trang web của Nhật.",
          "Gia công và thiết kế responsive cho web",
          "Thiết kế banner, hình ảnh ...",
          "Viết các hiệu ứng chuyển động transition cho web.",
          "Gia công mới website cho khác hàng",
          "Gia công theme wordpress"
        ],
        tags: [
          "HTML5",
          "CSS3",
          "Jquery",
          "Wordpress",
          "Responsive",
          "Transition"
        ]
      },
      {
        time: "06/2019 - 10/2020",
        position: "FRONT-END (HTML, CSS, Javascript)",
        company: "Fastcoding - Nhật Bản",
        todos: [
          "Gia công các trang web của Nhật, đảm bảo chuẩn w3school",
          "Chuyển đổi PSD to HTML (đảm bảo perfect pixel, responsive)",
          "Tạo page wordpress"
        ],
        desc: `
          Kinh nghiệm làm việc với:
          <br />
          GruntJS, PugJS, SASS, SCSS, Jquery, Git, cross-browser, optimization techniques and developer tools.
        `,
        tags: [
          "HTML5",
          "CSS3",
          "Javascript",
          "Jquery",
          "Responsive",
          "SASS, LESS, Compass",
          "GruntJS",
          "PugJS",
          "cross-browser",
          "Wordpress",
          "GIT"
        ]
      }
    ],
    education: [
      {
        date: "09/2011 - 07/2014",
        school: "Cao Đẳng Kỹ Thuật Cao Thắng",
        position: "Công Nghệ Thông Tin",
        type: "Khá",
        desc: `
        Tốt nghiệp chuyên ngành phần mềm tại trường Cao Thắng.
        <br />
        Trong quá trình học, tích luỹ được vốn kiến thức về lập trình
        website, thiết kế phần mềm, sữa chữa, thay thế phần cứng máy tính.
        Kỹ năng phân tích giải quyết vấn đề, tư duy logic.
        `
      }
    ],
    portfolioFreelancer: [
      {
        img: "./portfolio/freelancer-project-01.png",
        heading: "Phisyo"
      },
      {
        img: "./portfolio/freelancer-project-02.png",
        heading: "Góc Nội Trợ"
      },
      {
        img: "./portfolio/freelancer-project-03.png",
        heading: "Template"
      },
      {
        img: "./portfolio/freelancer-project-04.png",
        heading: "Hạc Cảnh Viên"
      }
    ],
    portfolioVietry: [
      {
        img: "./portfolio/vietry-project-01.png",
        heading: "Project 01"
      },
      {
        img: "./portfolio/vietry-project-02.png",
        heading: "Project 02"
      },
      {
        img: "./portfolio/vietry-project-03.png",
        heading: "Project 03"
      },
      {
        img: "./portfolio/vietry-project-04.png",
        heading: "Project 04"
      }
    ],
    portfolioFastcoding: [
      {
        img: "./portfolio/fastcoding-project-01.png",
        heading: "Project 01"
      },
      {
        img: "./portfolio/fastcoding-project-02.png",
        heading: "Project 02"
      },
      {
        img: "./portfolio/fastcoding-project-03.png",
        heading: "Project 03"
      }
    ],
    portfolioVue: [
      {
        to: "https://datvt243.github.io/vue-countdown/",
        heading: "Vue Countdown",
        tags: ["Vuejs", "components"]
      },
      {
        to: "https://datvt243.github.io/vue-todo-list-simple/",
        heading: "Todo List",
        tags: ["VueCLI", "Vux"]
      },
      {
        to: "https://datvt243.github.io/vue-weather-app-simple/",
        heading: "Weather App",
        tags: ["VueCLI", "Vux", "API"]
      },
      {
        to: "https://datvt243.github.io/vue-events-list-firebase/",
        heading: "Event List with Firebase",
        tags: ["VueCLI", "Vue-router", "Vuefire", "firebase-realtime-database"]
      },
      {
        to: "https://datvt243.github.io/vue-todo-list-firebase/",
        heading: "Todo List with Firebase",
        tags: ["VueCLI", "Vuex", "Vuexfire", "firebase-realtime-database"]
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
