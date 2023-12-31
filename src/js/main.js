// Page elements
const flags = Array.from(document.querySelectorAll(".flag"))
const flagsContainer = document.querySelector(".flags")
const menu = document.querySelector(".menu")
const hambCross = document.querySelector(".hamb-cross")
const hamb = document.querySelector(".hamb")
const cross = document.querySelector(".cross")
const video = document.querySelector("video")
const elementsToObs = document.querySelectorAll(".obs")
const featuresCards = document.querySelectorAll(".card")
const steps = document.getElementById("working").querySelectorAll(".row")

// JS variables
let currentLang = localStorage.getItem("lang") ?? "kz"
let languagesObj = {
  "lng-title": {
    ru: "KZTT | Главная",
    kz: "KZTT | Негізгі",
    eng: "KZTT | Main",
  },
  "lng-header-a-1": {
    ru: "О нас",
    kz: "Біз туралы",
    eng: "About",
  },
  "lng-header-a-2": {
    ru: "Преимущества",
    kz: "Артықшылықтары",
    eng: "Features",
  },
  "lng-header-a-3": {
    ru: "Как работает",
    kz: "Бұл қалай жұмыс істейді",
    eng: "How it works",
  },
  "lng-header-h1": {
    ru: "Откройте дверь в будущее финансов вместе с KZTT!",
    kz: "KZTT - мен болашақ қаржы есігін ашыңыз!",
    eng: "Open the door to the future of finance with KZTT!",
  },
  "lng-header-p": {
    ru: "Новая эра финансов уже наступила, и мы рады представить вам нашу уникальную криптовалюту, которая обещает произвести революцию в мире финансовых технологий.",
    kz: "Қаржының жаңа дәуірі қазірдің өзінде келді және біз сізді қаржылық технологиялар әлемінде төңкеріс жасауға уәде беретін бірегей криптовалютамен таныстыруға қуаныштымыз.",
    eng: "A new era of finance is already here, and we are excited to introduce you to our unique cryptocurrency that promises to revolutionize the world of financial technologies.",
  },
  "lng-about-h2": {
    ru: "Что такое KZTT?",
    kz: "KZTT дегеніміз не?",
    eng: "What is KZTT?",
  },
  "lng-about-p-1": {
    ru: "KZTT — это валюта будущего, созданная для улучшения вашего опыта финансовых операций. Привязка к национальной валюте Казахстана, тенге, делает KZTT уникальной криптовалютой, предлагающей надежность, стабильность и удобство. Наша цель — дать вам контроль над своими финансами и предоставить легкий доступ к инновационным технологиям.",
    kz: "KZTT – сіздің қаржылық операциялар тәжірибеңізді жақсартуға арналған болашақ валютасы. Қазақстанның ұлттық валютасы теңгеге байланысты бола отырып, KZTT сенімділік, тұрақтылық пен ыңғайлылықты ұсынатын бірегей криптовалютаға айналдырады. Біздің мақсатымыз – сізге қаржыңызды бақылауға және инновациялық технологияларға оңай қол жеткізуге мүмкіндік беру.",
    eng: "KZTT is the currency of the future, designed to enhance your financial operations experience. Being tethered to the national currency of Kazakhstan, the tenge, makes KZTT a unique cryptocurrency offering reliability, stability, and convenience. Our goal is to give you control over your finances and provide easy access to innovative technologies.",
  },
  "lng-about-p-2": {
    ru: "KZTT представляет собой настоящую смесь традиционной и криптовалютной сфер, предлагая вам лучшее из обоих миров.",
    kz: "KZTT сізге екі әлемнің ең жақсысын ұсынатын дәстүрлі және криптовалютаның нақты үйлесімі болып табылады.",
    eng: "KZTT represents a real blend of the traditional and cryptocurrency realms, offering you the best of both worlds.",
  },
  "lng-features-h2": {
    ru: "Особенности и преимущества КЗТТ",
    kz: "KZTT мүмкіндіктері мен артықшылықтары",
    eng: "Features and Benefits of KZTT",
  },
  "lng-features-h3-1": {
    ru: "Стабильность",
    kz: "Тұрақтылық",
    eng: "Stability",
  },
  "lng-features-p-1": {
    ru: "Привязка к тенге обеспечивает стабильность курса тенге.",
    kz: "Теңгеге байланыстыру KZTT құнының тұрақтылығын қамтамасыз етеді.",
    eng: "Tethering to the tenge ensures the stability of KZTT's value.",
  },
  "lng-features-h3-2": {
    ru: "Удобство и скорость",
    kz: "Ыңғайлылық пен жылдамдық",
    eng: "Convenience and Speed",
  },
  "lng-features-p-2": {
    ru: "Мгновенные транзакции без границ — платите и переводите деньги в тенге с помощью криптовалютной технологии",
    kz: "Шексіз лезде транзакциялар — криптовалюта технологиясын қолдана отырып, теңгемен ақша төлеу және аудару",
    eng: "Instant transactions without borders—pay and transfer money in tenge using cryptocurrency technology.",
  },
  "lng-features-h3-3": {
    ru: "Безопасность",
    kz: "Қауіпсіздік",
    eng: "Security",
  },
  "lng-features-p-3": {
    ru: "Технология блокчейн обеспечивает безопасность ваших финансов.",
    kz: "Блокчейн технологиясы сіздің қаржыңыздың қауіпсіздігін қамтамасыз етеді.",
    eng: "Blockchain technology ensures the safety of your finances.",
  },
  "lng-working-h2": {
    ru: "Как это работает?",
    kz: "Ол қалай жұмыс істейді?",
    eng: "How it works?",
  },
  "lng-working-h3-1": {
    ru: "Шаг 1: Обменяйте тенге на KZTT",
    kz: "1-қадам: теңгені теңгеге айырбастау",
    eng: "Step 1: Exchange Tenge for KZTT",
  },
  "lng-working-p-1": {
    ru: "Совершите обмен на нашей партнерской платформе <a href='https://www.binance.com/' target='_blank' class='link'>Binance</a>, где вы можете легко приобрести KZTT, конвертировав тенге.",
    kz: "Біздің серіктес платформамызда алмасу жасаңыз <a href='https://www.binance.com/' target='_blank' class='link'>Binance</a>, онда теңгені айырбастау арқылы KZTT-ті оңай алуға болады.",
    eng: "Make an exchange on our partner platform <a href='https://www.binance.com/' target='_blank' class='link'>Binance</a>, where you can easily acquire KZTT by converting your tenge.",
  },
  "lng-working-h3-2": {
    ru: "Шаг 2. Безопасное хранение",
    kz: "2-қадам: Қауіпсіз сақтау",
    eng: "Step 2: Secure Storage",
  },
  "lng-working-p-2": {
    ru: "Ваш KZTT надежно хранится в цифровом кошельке, доступном только вам.",
    kz: "Сіздің KZTT тек сізге қолжетімді сандық әмиянда қауіпсіз сақталады.",
    eng: "Your KZTT is securely stored in a digital wallet accessible only to you.",
  },
  "lng-working-h3-3": {
    ru: "Шаг 3. Используйте КЗТТ",
    kz: "3-қадам: KZTT пайдаланыңыз",
    eng: "Step 3: Use KZTT",
  },
  "lng-working-p-3": {
    ru: "Совершайте операции, оплачивайте товары и услуги, переводите средства в тенге, оставаясь в пределах тенге.",
    kz: "Теңге шегінде бола отырып, операцияларды жүргізіңіз, тауарлар мен қызметтерге ақы төлеңіз, ақшаны KZTT-де аударыңыз.",
    eng: "Conduct transactions, pay for goods and services, transfer funds in KZTT while staying within the tenge.",
  },
  "lng-footer-p-1": {
    ru: "Контакты",
    kz: "Контактілер",
    eng: "Contacts",
  },
  "lng-footer-a-1": {
    ru: "Проспект Аль-Фараби, 77/7, Алматы",
    kz: "Әл-Фараби даңғылы, 77/7, Алматы",
    eng: "Al-Farabi Avenue, 77/7, Almaty",
  },
  "lng-footer-p-2": {
    ru: "Навигация по сайту",
    kz: "Сайтты шарлау",
    eng: "Site navigation",
  },
  "lng-footer-p-3": {
    ru: "Полезные ссылки",
    kz: "Пайдалы сілтемелер",
    eng: "Useful links",
  },
}

// Functions
const changeFlag = (lang) => {
  flags.forEach((val) => {
    if (val.alt === lang) {
      val.classList.add("flag-selected")
    } else {
      val.classList.remove("flag-selected")
    }
  })
}

const changeLang = (lang) => {
  currentLang = lang
  localStorage.setItem("lang", lang)

  for (let key in languagesObj) {
    let elem = document.querySelectorAll(`.${key}`)

    elem.forEach((val) => {
      val.innerHTML = languagesObj[key][currentLang]
    })
  }
}

const flagSwitch = (flag) => {
  if (!flag.classList.contains("flag-selected")) {
    flags.forEach((val) => {
      if (val === flag) {
        toggleElem(flag, "flag-selected")
        changeFlag(flag.alt)
        changeLang(flag.alt)
      } else {
        val.classList.remove("flag-selected")
      }
    })
  }
}

const toggleElem = (elem, prop) => {
  elem.classList.toggle(prop)
}

const obsElems = (elemColl) => {
  const obs = new IntersectionObserver((ents) => {
    ents.forEach((ent) => {
      if (ent.isIntersecting) {
        elemColl.forEach((val, i) => {
          setTimeout(() => {
            val.classList.add("move")
            val.classList.remove("invisible")
            obs.unobserve(ent.target)
          }, 500 * i)
        })
      }
    })
  })

  obs.observe(elemColl[0])
}

// Calling functions
changeLang(currentLang)
video.play()
obsElems(featuresCards)
obsElems(steps)

// Event listeners
video.addEventListener("ended", function () {
  this.play()
})

if (window.innerWidth >= 576) {
  changeFlag(currentLang)

  flagsContainer.addEventListener("click", function (e) {
    if (!this.classList.contains("clicked")) {
      const height = parseInt(getComputedStyle(flagsContainer).height)

      flags.reduce((acc, val) => {
        if (!val.classList.contains("flag-selected")) {
          val.style.top = `${(height + 15) * acc}px`
          return acc + 1
        }
        return acc
      }, 1)

      toggleElem(this, "clicked")
    } else {
      flags.forEach((val) => {
        val.removeAttribute("style")
      })

      toggleElem(this, "clicked")
    }
  })

  flags.forEach((val) => {
    val.addEventListener("click", function () {
      flagSwitch(this)
    })
  })
} else {
  hambCross.addEventListener("click", () => {
    toggleElem(menu, "active")
    toggleElem(hamb, "hide")
    toggleElem(cross, "hide")
  })

  flagsContainer.addEventListener("click", (e) => {
    changeLang(e.target.alt)
  })

  menu.addEventListener("click", () => {
    toggleElem(menu, "active")
    toggleElem(hamb, "hide")
    toggleElem(cross, "hide")
  })
}

// Observer
const obs = new IntersectionObserver((ents) => {
  ents.forEach((ent) => {
    if (ent.isIntersecting) {
      ent.target.classList.add("move")
      obs.unobserve(ent.target)
    }
  })
})

elementsToObs.forEach((elem) => {
  obs.observe(elem)
})
