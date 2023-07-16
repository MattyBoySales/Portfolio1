//.sidebar-toggle
//.sidebar
//close

const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', function () {
  //    console.log(sidebar.classList);
  //    if(sidebar.classList.contains('show-sidebar')){
  //        sidebar.classList.remove('show-sidebar')
  //    }
  //    else {
  //        sidebar.classList.add('show-sidebar');
  //    }
  sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar')
})



/* MENU FUNCTIONALITY */
const menu = [
  {
    id: 1,
    title: 'Website (grey owl moving)',
    category: 'Development',
    skills: 'JS, HTML, CSS',
    img: './images/item-1.png',
    desc: `Designed a cutting-edge website, complete with innovative JavaScript features and meticulously optimized breakpoints for seamless functionality. From securing SSL certificates to domain acquisition and website deployment, I orchestrated every aspect, delivering a comprehensive and thrilling online experience.`,
  },
  {
    id: 2,
    title: 'Logo Designs',
    category: 'Branding',
    skills: 'Design, Canva/Photoshop',
    img: './images/item-2.png',
    desc: `I have curated a captivating collection of over 50 logo designs that seamlessly blend hand-drawn elements with digital innovation. Each logo, meticulously crafted and thoughtfully refined, showcases a myriad of variations, presenting a visual tapestry of creative possibilities. `,
  },
  {
    id: 3,
    title: 'Parsing Stock Data',
    category: 'Data',
    skills: 'Python, Libraries, Web Scraping, & Financial Analytics',
    img: './images/item-3.png',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'interactive store front',
    category: 'Development',
    skills: 'JS, HTML, CSS',
    img: './images/item-4.png',
    desc: `Collaborating on a guided college/online course project led by the esteemed John Smilga, I contributed to the development of an engaging interactive store front. This captivating creation boasts a sophisticated filter system seamlessly integrated with an inventory database, accompanied by a user-friendly shopping cart feature, elevating the browsing and purchasing experience to new heights. `,
  },
  {
    id: 5,
    title: 'Social Media Ads',
    category: 'Branding',
    skills: 22.99,
    img: './images/item-5.png',
    desc: `Unlock the potential of social media marketing with my extensive catalogue of captivating advertising designs tailored for various platforms. From eye-catching visuals for Instagram and Facebook to engaging banners for Twitter and LinkedIn, my portfolio showcases a diverse range of creative assets that are optimized to drive brand awareness and maximize audience engagement across different social media channels. `,
  },
  {
    id: 6,
    title: 'Various Data Dashboards',
    category: 'Data',
    skills: 'Data Analytics, IBM Cognos',
    img: './images/item-6.png',
    desc: `Using IBMs Cognos analytics system, I have gained the neccesary skills to bring plain data sets to life. Using different dashboards, I am then able to convey my analytics more effectively during my presentations.`,
  },
  {
    id: 7,
    title: 'dark mode',
    category: 'Development',
    skills: 'HTML, CSS, JavaScript',
    img: './images/item-7.png',
    desc: `Skillfully implemented dark mode. Through the power of JavaScript, I demonstrate my expertise in enhancing user experience, leaving a lasting impression and showcasing my proficiency in creating engaging and visually appealing web experiences.`,
  },
  {
    id: 8,
    title: 'Company Presentation',
    category: 'Branding',
    skills: 'Canva, Data Analysis, Web Design',
    img: './images/item-8.png',
    desc: `By combing all of the elements of my computing abilities - I am able to provide a fully-fleshed out company presentation. With high-end design, impressively parsed/analyzed/presented data, take the next step in your professional career with one of our various presentation styles.`,
  },
  {
    id: 9,
    title: 'Python Data Analysis Project',
    category: 'Data',
    skills: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: 'Modal',
    category: 'Development',
    skills: 22.99,
    img: './images/item-10.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]
// get parent element
const sectionCenter = document.querySelector('.section-center')
const btnContainer = document.querySelector('.btn-container')

// display all items when page loads
window.addEventListener('DOMContentLoaded', function () {
  diplayMenuItems(menu)
  displayMenuButtons()
})

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h5 class="skills">${item.skills}</h5>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`
  })
  displayMenu = displayMenu.join('')
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category)
      }
      return values
    },
    ['all']
  )
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`
    })
    .join('')

  btnContainer.innerHTML = categoryBtns
  const filterBtns = btnContainer.querySelectorAll('.filter-btn')
  //console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem
        }
      })
      if (category === 'all') {
        diplayMenuItems(menu)
      } else {
        diplayMenuItems(menuCategory)
      }
    })
  })
}


