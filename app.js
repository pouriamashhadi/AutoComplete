let $ = document;

let listService = [
  {
    id: 0,
    title: "تاکسی اینترنتی",
    subTitle: "امکان درخواست آنلاین خودرو با اسنپ",
    icon: "taxi.svg",
    link: "https://snapp.ir/pickup-truck/",
  },
  {
    id: 1,
    title: "پیک موتوری",
    subTitle: "حمل و نقل با اسنپ",
    icon: "bike.svg",
    link: "https://snapp.ir/bike-delivery/",
  },
  {
    id: 2,
    title: "درخواست وانت",
    subTitle: "حمل و نقل با اسنپ",
    icon: "pickup.svg",
    link: "https://snapp.ir/online-food-delivery/",
  },
  {
    id: 3,
    title: "سفارش آنلاین غذا ",
    subTitle: "سفارش غذا، نان و شیرینی با اسنپ",
    icon: "food.svg",
    link: "https://snapp.ir/online-food-delivery/",
  },
  {
    id: 4,
    title: "سوپرمارکت آنلاین",
    subTitle: "تهیه اقلام روزانه با اسنپ",
    icon: "spdiscount.png",
    link: "https://snapp.ir/online-supermarket-grocery/",
  },
  {
    id: 5,
    title: "اسنپ اکسپرس",
    subTitle: "تحویل کمتر از ۳۰ دقیقه",
    icon: "spdiscount.png",
    link: "https://snapp.ir/express/",
  },
  {
    id: 6,
    title: "بلیط پرواز داخلی",
    subTitle: "گردشگری با اسنپ",
    icon: "fdom-t.png",
    link: "https://snapp.ir/flights-ticket/",
  },
  {
    id: 7,
    title: "بلیط پرواز خارجی",
    subTitle: "گردشگری با اسنپ",
    icon: "intflight.svg",
    link: "https://snapp.ir/international-flight/",
  },
  {
    id: 8,
    title: "بیمه",
    subTitle: "خرید آنلاین بیمه با اسنپ",
    icon: "insdiscount.png",
    link: "https://snapp.ir/insurance/",
  },
  {
    id: 9,
    title: "رزرو هتل",
    subTitle: "گردشگری با اسنپ",
    icon: "hotel.svg",
    link: "https://snapp.ir/hotels/",
  },
  {
    id: 10,
    title: "رزرو اقامتگاه",
    subTitle: "گردشگری با اسنپ",
    icon: "hotel.svg",
    link: "https://snapp.ir/lodgings/",
  },
  {
    id: 11,
    title: "پزشک و مشاور",
    subTitle: "درمان با اسنپ",
    icon: "doctor.svg",
    link: "https://snapp.ir/medical-services/",
  },
  {
    id: 12,
    title: "بلیط اتوبوس",
    subTitle: "گردشگری با اسنپ",
    icon: "bus.svg",
    link: "https://snapp.ir/bus-ticket/",
  },
  {
    id: 13,
    title: "بلیط قطار",
    subTitle: "گردشگری با اسنپ",
    icon: "train.svg",
    link: "https://snapp.ir/train-ticket/",
  },
  {
    id: 14,
    title: "داروخانه",
    subTitle: "داروخانه آنلاین اسنپ",
    icon: "pharmacy.svg",
    link: "https://snapp.doctor/store/?utm_source=landing&utm_medium=landing-button&utm_campaign=pharmacy",
  },
  {
    id: 15,
    title: "اسباب‌کشی منزل",
    subTitle: "حمل و نقل با اسنپ",
    icon: "moving.svg",
    link: "https://snapp.ir/moving-services/",
  },
  {
    id: 16,
    title: "ثبت نام راننده",
    subTitle: "ثبت نام تاکسی اینترنتی اسنپ",
    icon: "driver.svg",
    link: "https://digitalsignup.snapp.ir/",
  },
  {
    id: 17,
    title: "فروشگاه",
    subTitle: "خرید از فروشگاه های معتبر شهر",
    icon: "shop.svg",
    link: "https://snapp.ir/shop/",
  },
  {
    id: 18,
    title: "سرمایه‌گذاری",
    subTitle: "خدمات غیر حضوری بورس و سرمایه‌گذاری",
    icon: "investment.svg",
    link: "https://snapp.ir/investment-services/",
  },
  {
    id: 19,
    title: "سرویس اعتباری ",
    subTitle: "پرداخت با اسنپ",
    icon: "Credit.svg",
    link: "https://snapp.ir/snapp-credit/",
  },
  {
    id: 20,
    title: "اسنپ! ‌کلاب",
    subTitle: "باشگاه مشتریان اسنپ!",
    icon: "club.svg",
    link: "https://snapp.ir/club/",
  },
];

let listFaq = [
  {
    id: 0,
    question: "چگونه می توانم در طول سفر تغییر مقصد دهم؟",
    answer:
      "برای تغییر مقصد حین سفر، به منوی گزینه‌های سفر بروید و تغییر مقصد را انتخاب کنید. پس از مشخص کردن مقصد جدید روی نقشه، پیامی برای کاربر راننده ارسال می‌ شود. برای تغییر مقصد همیشه پیش از وارد کردن اطلاعات، درخواستتان را با کاربر راننده در میان بگذارید.",
  },
  {
    id: 1,
    question: "اسنپ چیست؟",
    answer:
      "اسنپ یک سوپراپلیکیشن است که با استفاده از آن می‌توانید در هر کجا و هر زمان، نیازهای مختلف خود را (از درخواست خودرو، موتور و وانت گرفته تا سفارش غذا، خرید بلیت اتوبوس و هواپیما،‌ رزرو هتل، مشاوره‌ی پزشکی و روانپزشکی و…) برطرف کنید.",
  },
  {
    id: 2,
    question: "آیا از طریق دسک‌تاپ می توان به خدمات اسنپ دسترسی داشت؟",
    answer:
      "شما می‌توانید به کمک وب اپلیکیشن اسنپ با هر نوع تلفن هوشمند یا کامپیوتری که در اختیار دارید به خدمات اسنپ دسترسی پیدا کنید. برای استفاده از وب‌اپ اسنپ کافی‌ است به snapp.ir بروید و گزینه‌ی «ورود به وب‌اپلیکیشن اسنپ» را انتخاب کنید. ",
  },
  {
    id: 3,
    question: "آیا با تماس تلفنی میتوانم درخواست خودرو بدهم؟",
    answer: "از طریق تماس با شماره‌ی ۱۵۵۱می‌ توانید به راحتی اسنپ بگیرید.",
  },
  {
    id: 4,
    question: "آیا بدون استفاده از اینترنت می توانم درخواست خودرو بدهم؟",
    answer:
      "در صورت عدم دسترسی به اینترنت، می‌توانید با استفاده از شماره‌ی ۱۵۵۱ به راحتی اسنپ بگیرید.  ",
  },
  {
    id: 5,
    question: "چگونه می توانم به راننده امتیاز دهم؟",
    answer:
      "پس از پایان سفر می‌توانید به کاربر راننده امتیاز دهید. همچنین با مراجعه به منوی اسنپ و انتخاب گزینه‌ی سفرها می‌توانید به فهرست سفرهای خود دسترسی پیدا کنید و با انتخاب سفر مورد نظر به کاربر راننده بر اساس تجربه‌ی سفرتان امتیاز دهید.",
  },
  {
    id: 6,
    question: "چطور می توانم در مسیر توقف داشته باشم؟",
    answer:
      "ثبت توقف در سفر، پیش از درخواست و حین سفر امکان‌پذیر است. پس از مشخص کردن مبدا و مقصد، به منوی گزینه‌های سفر بروید و پس از ثبت مدت زمان توقف، درخواست اسنپ بدهید. در حین سفر هم می‌توانید در بخش گزینه‌های سفر، مدت زمان توقف را ثبت کنید. همیشه پیش از انجام تغییراتی که حین سفر به آن نیاز دارید، پیش از ثبت آن در اپلیکیشن، درخواستتان را با کاربر راننده مطرح کنید.",
  },
  {
    id: 7,
    question: "سوپر اپ اسنپ چه خدماتی ارائه می‌ دهد؟",
    answer:
      "با استفاده از سوپر اپلیکیشن اسنپ در هر کجا و هر زمان می‌توانید به خدماتی مانند درخواست خودرو، موتور و وانت، سفارش غذا، خرید بلیت اتوبوس و هواپیما،‌ رزرو هتل، مشاوره‌ی روانشناسی و پزشکی دسترسی داشته باشید.",
  },
  {
    id: 8,
    question: "چگونه می توانم به‌عنوان کاربر (مسافر) در اسنپ عضو شوم؟",
    answer:
      "پس از نصب اپلیکیشن اسنپ، برای ثبت‌نام باید نام و نام خانوادگی، شماره‌ی همراه و کلمه‌ی عبورتان را در صفحه‌ی ثبت‌نام وارد کنید. ",
  },
  {
    id: 9,
    question: "چطور می توانم هزینه‌ی سفر را پرداخت کنم؟",
    answer:
      "پرداخت هزینه‌ی سفر به چهار روش انجام می‌شود. هنگام سفر می‌توانید یکی از حالت‌های پرداخت نقدی، اعتباری، کیف پول آپ یا پرداخت آنلاین را انتخاب کنید.",
  },
  {
    id: 10,
    question:
      "حسابم را آنلاین شارژ کرده‌ام، پول از حسابم کم شده ولی شارژ انجام نشده است. لطفا راهنمایی‌ ام کنید.",
    answer:
      "مبلغ کسر شده طی ۷۲ ساعت کاری به حساب شما برگردانده خواهد شد. در صورت عدم بازپرداخت می‌توانید با پشتیبانی اسنپ تماس بگیرید.",
  },
  {
    id: 11,
    question: "چطور باید سفر دارای بیش از دو مقصد را ثبت کرد؟",
    answer:
      "شما تا دو مقصد را می‌توانید هنگام ارسال درخواست سفر داخل اپ مشخص کنید. توقف در بیش از دو مقصد مستلزم پذیرش راننده است.چنانچه راننده درخواست شما را برای داشتن توقف‌های بیشتر رد کند انجام چنین سفری منتفی است.اما در صورت پذیرش سفر راننده، در حین سفر با پشتیبانی تماس بگیرید، مبلغ نهایی سفر شما با احتساب توقف‌ها و مقصدها محاسبه و در اپلیکیشن قید می‌شود.",
  },
  {
    id: 12,
    question:
      "یک سفر در حال انجام دارم و می خواهم درخواست یک سفر دیگر هم بدهم؟",
    answer:
      "در هنگام سفر با اسنپ به صورت همزمان نمی‌توان درخواست خودروی دیگری داشت. تنها پس از پایان سفر می‌توانید درخواست جدید بدهید.",
  },
  {
    id: 13,
    question:
      "روی نقشه اسنپ موقعیت مکانی خود را مشخص می‌کنم اما مشخصات منطقه‌ای که می‌بینم با جایی که در آن هستم تفاوت دارد؟",
    answer:
      "اپ را یک بار ببندید و باز کنید. از اتصال کامل اینترنت و مکان‌یاب گوشی خود مطمئن شوید و مجددا گزینه‌ی لوکیشن را بزنید تا مشخصات جغرافیایی‌تان روی نقشه به‌روزرسانی شود.",
  },
  {
    id: 14,
    question: "چرا لوکیشن من یک یا چند کوچه با لوکیشن واقعی فاصله دارد؟",
    answer:
      "برای رفع این مشکل روی علامت ‌مکان‌یاب نقشه کلیک کنید تا نقشه در شهر فعلی شما تنظیم شود.",
  },
  {
    id: 15,
    question: "چطور می‌توانم با پشتیبانی تماس بگیرم؟",
    answer:
      "برای ارتباط تلفنی با پشتیبانی اسنپ می‌توانید به منوی داخل اپ بروید و گزینه‌ی «پشتیبانی» را بزنید و در انتهای صفحه «تماس با پشتیانی اسنپ» را انتخاب کنید.  ",
  },
  {
    id: 16,
    question: "اکانتم بلاک شده، راهنمایی‌ام کنید؟",
    answer:
      "در صورت غیرفعال شدن اپ خود می توانم برای پیگیری موضوع با پشتیبانی اسنپ تماس بگیرید.",
  },
  {
    id: 17,
    question: "چطور می توانم با روابط عمومی اسنپ ارتباط بگیرم؟",
    answer:
      "شما می‌توانید از طریق ایمیل pr@snapp.cab با روابط عمومی اسنپ در ارتباط باشید.",
  },
];



let btnOpenSearch = $.querySelector("#btnOpenSearch");
let btnBack = $.querySelector("#btnBack");

let navHeader = $.querySelector("header .nav");
let navHeaderSearch = $.querySelector("header .navSearch");
let boxSearch = $.querySelector(".boxSearch");

let inputSearch = $.querySelector("#inputSearch");

inputSearch.value = ""; // Delete browser cache




function suggestions(){
  if (inputSearch.value != "") {
  
    boxSearch.innerHTML = "";    
    
    var strlistFaq = "";
    var listTitle=[];
    


    
    var strlistTitle = "";
    listFaq.forEach(function (faq) {
      
      if (faq.question.includes(inputSearch.value)) {
        strlistFaq +=
          "<div onclick='openfaq(" +
          faq.id +
          ")' >" +
          faq.question +
          "</div>";


          // One word suggestion
          if(faq.question.search(inputSearch.value)==0){
              let strSlice=faq.question.slice(inputSearch.value.length)

              let boolSlice=false;
              while(strSlice[0]==" "){
                strSlice= strSlice.slice(1);
                boolSlice=true;
              }

              let indexSpace=strSlice.search(" ")

              if(!(listTitle.includes("<b>"+inputSearch.value+"</b> "+strSlice.substring(0,indexSpace))) && listTitle.length!=3 ){

                  listTitle.push("<b>"+inputSearch.value+"</b> "+strSlice.substring(0,indexSpace))

                  strlistTitle+="<div style='margin: 20px 5px; cursor: pointer;' onclick='addSearch(\"" +
                  (boolSlice?" ":"")+
                  strSlice.substring(0,indexSpace) +
                  "\")' ><span> <b>"+inputSearch.value+"</b> "+strSlice.substring(0,indexSpace)+"</div>";        

              }

          }
      }
       
    });

    boxSearch.innerHTML=strlistTitle;


    
    var strlistService = "";
    listService.forEach(function (service) {
      if (service.title.includes(inputSearch.value)) {
        strlistService +=
          "<div onclick='openurl(\"" +
          service.link +
          "\")' ><span><img src='icon/" +
          service.icon +
          "'></span> " +
          service.title +
          "</div>";
      }
    });


    if (strlistService != "") { 
      strlistService= "<div class='header'> <div class='title'> <samp><img src='icon/emoji-happy.svg' alt='' /></samp> سرویس های اسنپ </div> </div> <div class='listText listService'>"+strlistService +" </div> <div class='clear'></div>";
      boxSearch.innerHTML=boxSearch.innerHTML+strlistService;
      boxSearch.style.display="block";
    }



    if (strlistFaq != "") {
      strlistFaq= "<div class='header'> <div class='title'> <samp><img src='icon/signpost.svg' alt='' /></samp> سوالات متداول اسنپ </div> </div> <div class='listText listFaq'>"+strlistFaq +" </div> <div class='clear'></div>";
      boxSearch.innerHTML=boxSearch.innerHTML+strlistFaq;
      boxSearch.style.display="block";
    }


  }else{
      boxSearch.innerHTML="";
      boxSearch.style.display="none";
      
  }
}



function openurl(url) {
  window.open(url, "_blank");
}


function addSearch(title){
  inputSearch.value= inputSearch.value+title;
  inputSearch.focus();
  suggestions();
}

function openfaq(id){
  let faq = listFaq.find(function(e){
      return e.id==id
  })
  $.body.insertAdjacentHTML("beforeend"," <div class='boxOpenAnswer'> <div class='bg'></div> <div> <div onclick='closefaq()' class='icon'> <img src='icon/close.svg' alt=''> </div> <div class='question'> <p>"+faq.question+"</p> </div> <div class='answer'> <p> "+faq.answer+"</p> </div> </div> </div> ");
}

function closefaq(){
  $.querySelector(".boxOpenAnswer").remove();
}






btnOpenSearch.addEventListener("click", function () {
  navHeader.style.display = "none";
  navHeaderSearch.style.display = "flex";
  inputSearch.focus();
});


btnBack.addEventListener("click", function () {
  navHeader.style.display = "flex";
  navHeaderSearch.style.display = "none";
  inputSearch.value = "";
  boxSearch.innerHTML="";
  boxSearch.style.display="none";
});

inputSearch.addEventListener("keyup", function () {
  suggestions();
});

