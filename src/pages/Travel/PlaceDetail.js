// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// const kyrgyzstanPlaces = [
//   {
//     id: 1,
//     title: "Ала-Арча",
//     description: "Национальный парк недалеко от Бишкека.",
//     imageUrl: "https://i.natgeofe.com/n/91c4071e-ba4d-4f05-a002-71e63355eb13/kyrgyzstan-kol-suu.jpg",
//     fullDescription: `Ала-Арча - это великолепный национальный парк, расположенный всего в 40 километрах к югу от Бишкека, столицы Кыргызстана. Это одно из самых популярных мест для любителей природы и активного отдыха, привлекающее туристов своими потрясающими пейзажами, разнообразием флоры и фауны, а также возможностями для пеших прогулок, альпинизма и кемпинга.

// На территории парка, простирающейся на более чем 200 квадратных километров, можно найти более 50 горных вершин и 20 ледников. Высоты здесь варьируются от 1500 до 4895 метров над уровнем моря, что создает разнообразные климатические условия и позволяет наблюдать за различными экосистемами.

// ### Достопримечательности и развлечения:

// 1. **Трекинг и походы**: Парк предлагает множество маршрутов различной сложности, от легких прогулок до сложных восхождений. Один из самых популярных маршрутов ведет к водопаду Ак-Сай и леднику.

// 2. **Альпинизм**: Для опытных альпинистов Ала-Арча предоставляет уникальную возможность покорить вершины, такие как пик Семенова-Тянь-Шанского и пик Корона. Эти восхождения требуют хорошей физической подготовки и навыков.

// 3. **Пикники и кемпинг**: Территория парка оборудована местами для пикников и палаточных лагерей, что делает его идеальным местом для семейного отдыха на природе.

// 4. **Фотография**: Живописные виды, горные реки и богатая природа делают Ала-Арчу отличным местом для любителей фотографии.

// ### Флора и фауна:

// Ала-Арча также известен своим биологическим разнообразием. Здесь можно встретить редких животных, таких как снежный барс, медведь, горный козел и множество видов птиц. Растительный мир парка также удивителен, с богатым разнообразием горных растений и цветов.`,
//     moreImages: [
//       "https://www.civitatis.com/f/kirguistan/biskek/excursion-parque-ala-archa-589x392.jpg",
//       "https://pedalingpictures.com/wp-content/uploads/2016/02/DSC_0398.jpg",
//       "https://c8.alamy.com/zooms/9/fdccdadf355b4cb4b250e9dde2aa631c/kh28ex.jpg",
//       "https://i0.wp.com/www.takeyourjacket.com/wp-content/uploads/2020/05/Ala-Archa-National-Park-featured-photo.jpg?fit=1920%2C1080&ssl=1",
//     ],
//   },
//   {
//     id: 2,
//     title: "Иссык-Куль",
//     description: "Одно из крупнейших горных озёр мира.",
//     imageUrl: "https://example.com/issyk-kul.jpg",
//     fullDescription: `Иссык-Куль - это одно из крупнейших горных озёр мира, расположенное в Кыргызстане. Вода в озере никогда не замерзает, даже в суровые зимы, благодаря высокому содержанию соли. 
//     Оно окружено величественными горами и является популярным местом для отдыха, водных видов спорта и оздоровительного туризма.`,
//     moreImages: [
//       "https://example.com/issyk-kul-1.jpg",
//       "https://example.com/issyk-kul-2.jpg",
//       "https://example.com/issyk-kul-3.jpg",
//       "https://example.com/issyk-kul-4.jpg",
//     ],
//   },
//   // Добавьте больше мест по необходимости
// ];

// const PlaceDetail = () => {
//   const { id } = useParams();
//   const place = kyrgyzstanPlaces.find(place => place.id === parseInt(id));
//   const [likes, setLikes] = useState(0);
//   const [comments, setComments] = useState([]);
//   const [comment, setComment] = useState("");

//   if (!place) {
//     return <div>Место не найдено</div>;
//   }

//   const handleLike = () => {
//     setLikes(likes + 1);
//   };

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     if (comment.trim()) {
//       setComments([...comments, comment]);
//       setComment("");
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold mb-4">{place.title}</h1>
//       <img src={place.imageUrl} alt={place.title} className="w-full h-96 object-cover rounded-lg shadow-md mb-4" />
//       <p className="mb-4">{place.fullDescription}</p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
//         {place.moreImages.slice(0, 4).map((image, index) => (
//           <img key={index} src={image} alt={`${place.title} ${index + 1}`} className="w-full h-48 object-cover rounded-lg shadow-md" />
//         ))}
//       </div>

//       <div className="mt-4">
//         <button 
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//           onClick={handleLike}
//         >
//           Like ({likes})
//         </button>
//       </div>

//       <div className="mt-4">
//         <h2 className="text-2xl font-bold mb-2">Комментарии</h2>
//         <form onSubmit={handleCommentSubmit} className="mb-4">
//           <textarea
//             className="w-full p-2 border border-gray-300 rounded-lg"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             placeholder="Оставьте свой комментарий"
//             rows="4"
//           />
//           <button
//             type="submit"
//             className="bg-green-500 text-white px-4 py-2 mt-2 rounded-lg"
//           >
//             Оставить комментарий
//           </button>
//         </form>
//         <div className="space-y-4">
//           {comments.map((comment, index) => (
//             <div key={index} className="p-4 border border-gray-300 rounded-lg">
//               {comment}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlaceDetail;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const kyrgyzstanPlaces = [
  {
    id: 1,
    title: "Ала-Арча",
    description: "Национальный парк недалеко от Бишкека.",
    imageUrl: "https://i.natgeofe.com/n/91c4071e-ba4d-4f05-a002-71e63355eb13/kyrgyzstan-kol-suu.jpg",
    fullDescription: 'Ала-Арча - это великолепный национальный парк, расположенный всего в 40 километрах к югу от Бишкека, столицы Кыргызстана. Это одно из самых популярных мест для любителей природы и активного отдыха, привлекающее туристов своими потрясающими пейзажами, разнообразием флоры и фауны, а также возможностями для пеших прогулок, альпинизма и кемпинга.На территории парка, простирающейся на более чем 200 квадратных километров, можно найти более 50 горных вершин и 20 ледников. Высоты здесь варьируются от 1500 до 4895 метров над уровнем моря, что создает разнообразные климатические условия и позволяет наблюдать за различными экосистемами.Достопримечательности и развлечения:Трекинг и походы: Парк предлагает множество маршрутов различной сложности, от легких прогулок до сложных восхождений. Один из самых популярных маршрутов ведет к водопаду Ак-Сай и леднику.Альпинизм: Для опытных альпинистов Ала-Арча предоставляет уникальную возможность покорить вершины, такие как пик Семенова-Тянь-Шанского и пик Корона. Эти восхождения требуют хорошей физической подготовки и навыков.Пикники и кемпинг: Территория парка оборудована местами для пикников и палаточных лагерей, что делает его идеальным местом для семейного отдыха на природе.Фотография: Живописные виды, горные реки и богатая природа делают Ала-Арчу отличным местом для любителей фотографии.Флора ифауна:Ала-Арча также известен своим биологическим разнообразием. Здесь можно встретить редких животных, таких как снежный барс, медведь, горный козел и множество видов птиц. Растительный мир парка также удивителен, с богатым разнообразием горных растений и цветов.',
    moreImages: [
      "https://www.civitatis.com/f/kirguistan/biskek/excursion-parque-ala-archa-589x392.jpg",
      "https://pedalingpictures.com/wp-content/uploads/2016/02/DSC_0398.jpg",
      "https://c8.alamy.com/zooms/9/fdccdadf355b4cb4b250e9dde2aa631c/kh28ex.jpg",
      "https://i0.wp.com/www.takeyourjacket.com/wp-content/uploads/2020/05/Ala-Archa-National-Park-featured-photo.jpg?fit=1920%2C1080&ssl=1",
    ],
  },
  {
    id: 2,
    title: "Иссык-Көл",
    description: "Одно из крупнейших озёр мира.",
    imageUrl: "https://happylove.top/uploads/posts/2023-08/1692946674_happylove-top-p-ozero-isik-kol-issik-kul-krasivo-1.jpg",
    fullDescription: 'Иссык-Куль - это одно из крупнейших горных озёр мира, расположенное в северо-восточной части Кыргызстана. Его название переводится с киргизского как "тёплое озеро", потому что оно никогда не замерзает, несмотря на суровые зимы в регионе. Это уникальное природное явление обусловлено высоким содержанием соли в воде, а также его термальными источниками.География и климатИссык-Куль находится на высоте 1609 метров над уровнем моря и окружено величественными горами Тянь-Шаня, что придаёт ему захватывающий вид. Озеро имеет длину около 182 километров и ширину до 60 километров, что делает его вторым по величине солёным озером в мире после Каспийского моря. Вода в озере кристально чистая и обладает голубоватым оттенком.Туризм и отдыхИссык-Куль - одно из самых популярных туристических направлений в Центральной Азии. Ежегодно сюда приезжают тысячи туристов, чтобы насладиться великолепными пейзажами и разнообразными видами отдыха:Пляжный отдых: Протяжённые пляжи с чистым песком и тёплой водой привлекают любителей солнца и купания.Водные виды спорта: Озеро предлагает отличные условия для плавания, катания на водных лыжах, виндсёрфинга и кайтсёрфинга.Санаторно-курортное лечение: На берегах Иссык-Куля расположены многочисленные санатории и курорты, предлагающие лечебные процедуры на основе минеральных вод и грязей.Культурное наследиеВокруг Иссык-Куля расположено множество исторических и культурных достопримечательностей. Одной из них является древний город Баласагун, основанный в 9 веке и являвшийся важным центром Великого шелкового пути. Также стоит посетить музей Рух Ордо, который посвящён культуре и истории Кыргызстана.Флора и фаунаРегион Иссык-Куля богат природными ресурсами и биологическим разнообразием. В окрестностях озера можно встретить редкие виды растений и животных, включая снежного барса и горного орла. Также здесь обитают различные виды рыб, что делает озеро популярным местом для рыбалки.',
    moreImages: [
      "https://central-asia.guide/wp-content/uploads/2022/01/Issyk_Kul_purpse_sunset-1024x1024.jpg",
      "https://www.caiag.kg/images/3-dep/IssykKul_1.jpg",
      "https://en.kabar.kg/site/assets/files/14396/my88nxt3fmmj_730x400.730x0.jpg",
      "https://avatars.mds.yandex.net/get-vertis-journal/4469561/cover.jpg_1704460151500/orig",
    ],
  },
  {
    id: 3,
    title: "Пик Ленина",
    description: "Одно из высоких гор мира",
    imageUrl: "https://iskatel.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/09/pik-lenina-1-1120x500-1.jpg.webp",
    fullDescription: "Пик Ленина, также известный как Пик Исмаила Самани, является высочайшей горой в Средней Азии и одним из самых высоких пиков планеты вне Гималаев. Он находится на границе Таджикистана и Киргизии и привлекает множество альпинистов и любителей горных походов со всего мира.География и высотаПик Ленина имеет высоту 7134 метров над уровнем моря и является высочайшим пиком Северного Тянь-Шаня. Он находится в самом сердце Памира, знаменитого своими высокогорными пейзажами и ледниками.Туризм и альпинизмПик Ленина привлекает альпинистов своей относительной доступностью для восхождений. Для многих альпинистов это первый опыт восхождения на высокие горы и совмещение альпинизма с экспедиционным туризмом. Восхождение на Пик Ленина требует хорошей физической подготовки и опыта работы в условиях высокогорья.Климат и экологияКлимат в районе Пика Ленина холодный и суровый, с длинными зимами и короткими летними сезонами. В этом регионе обитают редкие виды флоры и фауны, а также множество горных животных, таких как снежный барс и мармоты.История и культурное наследиеПик Ленина назван в честь российского революционера Владимира Ленина. Ранее он также носил название Пика Красной Армии. В окрестностях Пика Ленина можно найти следы древних культур и археологические находки, связанные с историей Центральной Азии.",
    moreImages:[
      'https://asiamountains.net/assets/cache_image/assets/lib/resized/23/1600x1104_0x0_d0b.jpg',
      'https://extremepeak.ru/wp-content/uploads/2018/03/lenina-01.jpg',
      'https://dwc.kg/wp-content/uploads/2023/05/1647659974_4-vsegda-pomnim-com-p-gora-pik-lenina-foto-4-optimized.jpg',
      'https://leninpeak.net/wp-content/uploads/2021/12/2-2-3-1.jpg'
    ],
  },
  {
    id: 4,
    title: "Бунара Мунарасы",
    description: "Одно из высоких гор мира",
    imageUrl: "https://img.tourister.ru/files/2/5/4/4/3/1/2/6/original.jpg",
    fullDescription: 'Башня Бунара — это исторический памятник, расположенный в Узгене, Кыргызстан. Этот археологический объект представляет собой одну из ранних монументальных стел в Центральной Азии. Стела имеет важное историческое и культурное значение как свидетельство древней цивилизации, процветавшей на этих землях.История и археологическое значениеБашня Бунара была создана в период средневековья и служила монументом для отметки территории и символизации важных событий и личностей. Она содержит рунические надписи и изображения, которые помогают исследователям и историкам понять культурные и религиозные аспекты того времени.Культурное наследиеДля местного населения Башня Бунара является объектом гордости и символом исторической связи с предками. Это место привлекает исследователей и туристов, желающих погрузиться в древнюю историю Центральной Азии и увидеть артефакты древних цивилизаций.Туризм и сохранениеБашня Бунара защищена государством как объект культурного наследия и подлежит специальному режиму сохранения. Она представляет интерес не только для историков и археологов, но и для всех, кто интересуется историей и культурой Центральной Азии.',
    moreImages:[
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Burana_tower-stairway.jpg/220px-Burana_tower-stairway.jpg',
      'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_65fa5fd6d5f4eb7797ae6a84_65fa60e452c24f4985e39800/scale_1200',
      'https://architectureguru.ru/wp-content/uploads/2015/08/imy9w2gq9v.jpg',
      'https://architectureguru.ru/wp-content/uploads/2015/08/s1200.jpg'
    ],
  },
  {
    id: 5,
    title: "Озера Сары-Челек",
    description: "Одно из высоких гор мира",
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/e6/7a/34/sary-chelek-nature-reserve.jpg?w=1200&h=-1&s=1",
    fullDescription: 'Озеро Сары-Челек — это красивое горное озеро, расположенное в Чуйской области Кыргызстана. Оно известно своей живописной природой и кристально чистыми водами, окружёнными высокогорными пейзажами Тянь-Шаня. Озеро Сары-Челек является популярным местом для отдыха и туризма благодаря своей уникальной красоте и возможностям для активного отдыха.Природа и окружениеОзеро Сары-Челек расположено в живописной горной местности и окружено высокими пиками Тянь-Шаня. Его воды отличаются особой чистотой и прозрачностью, что делает его привлекательным местом для любителей природы и фотографии. Вокруг озера проходят маршруты для пеших прогулок и велосипедных поездок.Туризм и отдыхОзеро Сары-Челек привлекает туристов своей уникальной природой и возможностями для активного отдыха. Здесь можно заниматься рыбной ловлей, катанием на лодках или просто наслаждаться тишиной и красотой природы. Рядом с озером расположены уютные гостиницы и кемпинги для размещения посетителей.Экология и сохранениеОзеро Сары-Челек является объектом внимания экологов и защитников природы. Местные и международные организации работают над сохранением его экосистемы и поддержанием экологического баланса в регионе.',
    moreImages:[
      'https://www.advantour.com/img/kyrgyzstan/lakes/sary-chelek-lake.jpg',
      'https://www.travelkyrgyzstan.kg/wp-content/uploads/2021/07/sary-chelek_1.jpg',
      'https://www.centralasia-travel.com/uploads/gallery/532/sari-chelek-27.jpg',
      'https://dwc.kg/wp-content/uploads/2023/05/2695d7bbbbc261e56e0da-scaled-1-optimized.jpg'
    ]
  },
  {
    id: 6,
    title: "Арсланбаб",
    description: "Одно из высоких гор мира",
    imageUrl: "https://www.advantour.com/img/kyrgyzstan/images/arslanbob.jpg",
    fullDescription: 'Арсланбоб — это уникальное место в Южном Кыргызстане, знаменитое своими горными лесами и историческими достопримечательностями. Расположенный в Тянь-Шанских горах, Арсланбоб привлекает туристов и паломников благодаря своей природной красоте и религиозной значимости.Природа и лесаАрсланбоб славится своими горными лесами, которые считаются одними из крупнейших в Центральной Азии. Леса являются домом для множества редких растений и животных, включая более 1300 видов флоры, некоторые из которых являются эндемиками. Это делает место привлекательным для экологического туризма и изучения биоразнообразия.Религиозное значениеАрсланбоб также является местом паломничества для мусульман, так как здесь находится мавзолей Арсланбоб-аты, почитаемый святым среди местного населения. Паломники приезжают сюда для молитв и обрядов, а также для посещения исторических мечетей и других религиозных сооружений.Туризм и развитиеАрсланбоб развивается как туристический центр с разнообразными возможностями для активного отдыха и экскурсий. Здесь можно совершить пешие походы по горным тропам, насладиться панорамными видами с высокогорных плато и озер, а также познакомиться с местными традициями и культурой.Сохранение природы и устойчивое развитиеСохранение горных лесов и биоразнообразия в Арсланбобе является приоритетом для местных и международных организаций. Ведутся работы по устойчивому использованию ресурсов и развитию экотуризма, чтобы сохранить уникальные природные и культурные ценности этого уголка Кыргызстана.',
    moreImages:[
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnuwNBFSmBHPPX4rh4hgNpjFPBdjt0vxHjpg&s',
      'https://asiamountains.net/assets/cache_image/assets/lib/resized/60/1600x1066_0x0_d0b.jpg',
      'https://eastroute.com/wp-content/uploads/2018/07/arslanbob2.jpg',
      'https://gdb.rferl.org/c1589b8b-75de-43a4-9a36-d29fdaf84f4f_w1200_r1.jpg'
    ]
  },
  {
    id: 7,
    title: "Чатыр-Көл",
    description: "Одно из высоких гор мира",
    imageUrl: "https://dwc.kg/wp-content/uploads/2023/05/1647363922_10-vsegda-pomnim-com-p-ozero-chatir-kul-foto-11-optimized.jpg",
    fullDescription: 'Арсланбоб — это уникальное место в Южном Кыргызстане, знаменитое своими горными лесами и историческими достопримечательностями. Расположенный в Тянь-Шанских горах, Арсланбоб привлекает туристов и паломников благодаря своей природной красоте и религиозной значимости.Природа и лесаАрсланбоб славится своими горными лесами, которые считаются одними из крупнейших в Центральной Азии. Леса являются домом для множества редких растений и животных, включая более 1300 видов флоры, некоторые из которых являются эндемиками. Это делает место привлекательным для экологического туризма и изучения биоразнообразия.Религиозное значениеАрсланбоб также является местом паломничества для мусульман, так как здесь находится мавзолей Арсланбоб-аты, почитаемый святым среди местного населения. Паломники приезжают сюда для молитв и обрядов, а также для посещения исторических мечетей и других религиозных сооружений.Туризм и развитиеАрсланбоб развивается как туристический центр с разнообразными возможностями для активного отдыха и экскурсий. Здесь можно совершить пешие походы по горным тропам, насладиться панорамными видами с высокогорных плато и озер, а также познакомиться с местными традициями и культурой.Сохранение природы и устойчивое развитиеСохранение горных лесов и биоразнообразия в Арсланбобе является приоритетом для местных и международных организаций. Ведутся работы по устойчивому использованию ресурсов и развитию экотуризма, чтобы сохранить уникальные природные и культурные ценности этого уголка Кыргызстана.',
    moreImages:[
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/53/68/fc/caption.jpg?w=1200&h=-1&s=1',
      'https://assets-global.website-files.com/63fab9618bac0a864e545fdb/64f44a6378189739fbd1d499_imgonline-com-ua-Resize-1Cd4AJIGJlb.jpg',
      'https://static.tildacdn.com/tild6361-6263-4665-b965-643031356661/photo.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKWij5AfKJgBbsIJmAZgqSxEG3ZGKmZRNSQ&s'
    ]
  },
  {
    id: 8,
    title: "Каньон Сказка",
    description: "Одно из высоких гор мира",
    imageUrl: "https://avatars.dzeninfra.ru/get-zen_doc/1582279/pub_62fbc52ea6f61d33951ede7e_62fd0beba316be0a40170010/scale_1200",
    fullDescription: 'Каньон "Сказка" (также известен как Фейри Тейл Каньон) — это уникальное природное образование, расположенное на юге Кыргызстана, в районе горы Скозка. Впечатляющие формации красных и оранжевых скал, создавшиеся под воздействием природных процессов, делают этот каньон особенно привлекательным для туристов и любителей природы.Природа и ландшафтКаньон "Сказка" поражает своими уникальными геологическими формами, которые формировались миллионы лет под воздействием эрозии и ветровых воздействий. Красные и оранжевые оттенки скал создают неповторимые пейзажи, которые меняют свой оттенок в зависимости от освещения и времени суток.Туризм и отдыхКаньон "Сказка" привлекает туристов своими удивительными пейзажами и возможностями для фотографии. Здесь можно прогуляться по специально обозначенным тропам и насладиться видами на окружающие горы и долины. Кроме того, каньон является отличным местом для пеших прогулок и пикников.Фотография и видыБлагодаря своим уникальным цветам и формам, каньон "Сказка" стал популярным местом для фотосъемок и создания видеоконтента. Здесь можно запечатлеть потрясающие природные виды и уникальные ландшафты, которые будут радовать глаза и вдохновлять на творчество.Экологическое значение и сохранениеСохранение природных уникальностей каньона "Сказка" является важной задачей для местных властей и экологических организаций. Проводятся работы по охране и устойчивому развитию туризма, чтобы сохранить этот удивительный уголок природы для будущих поколений.Каньон "Сказка" представляет собой не только природное чудо, но и уникальную возможность окунуться в атмосферу древности и неповторимости природы Центральной Азии.',
    moreImages:[
      'https://st-1.akipress.org/127/.storage/limon2/images/july2016/f87bf38f5ea0f5f7c686d13d5e2be7c9.jpg',
      'https://www.centralasia-travel.com/uploads/gallery/1135/skazka-04.jpg',
      'https://farm5.staticflickr.com/4427/36888070762_478db8934c_b.jpg',
      'https://uam.ru/wp-content/uploads/2022/09/dreamstime_xxl_176802664.jpg'
    ]
  },
  {
    id: 9,
    title: "Сулайман-Тоо",
    description: "Одно из высоких гор мира",
    imageUrl: "https://sputnik.kg/img/07e6/04/05/1063408319_457:0:3188:2048_1920x0_80_0_0_fe593ece4cfa2b01fb33685d8d1b1692.jpg",
    fullDescription: 'Сулайман-Тоо (что в переводе с кыргызского языка означает "Гора Сулайман") — это священная гора, которая играет важную роль в истории и культуре Кыргызстана. Она является одной из старейших святынь этой страны и представляет собой археологический комплекс и культурное наследие.История и значениеСулайман-Тоо является местом паломничества и религиозного почитания с древних времён. На вершине горы расположены древние мечети и мавзолеи, а также памятник культурного наследия. Это место считается священным как для мусульман, так и для местного населения, исповедующего языческие верования.Природа и окружениеГора Сулайман является частью городского ландшафта Оша и видна из различных точек города. Она окружена живописными холмами и полями, что делает её не только религиозным, но и природным аттракционом.Туризм и развитиеСулайман-Тоо привлекает туристов и исследователей своим историческим и культурным значением. Здесь можно не только узнать о древних традициях и архитектуре, но и насладиться видами на город и окрестности с высоты горы.Сохранение и будущееСохранение Сулайман-Тоо является важной задачей для местных властей и общественных организаций. Проводятся работы по сохранению и реставрации исторических памятников, чтобы сохранить этот уникальный культурный и природный ресурс для будущих поколений.Сулайман-Тоо представляет собой не только историческую и религиозную святыню, но и важный элемент культурного и природного наследия Кыргызстана.',
    moreImages:[
      'https://too.kg/wp-content/uploads/sulaiman-too-6-1024x574.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrBWnEFOQU3XRdCh0ilQHg1mOxyP4CuRGVuw&s',
      'https://st-1.akipress.org/st_gallery/11/670411.4e5e74549087ebc6070d18a200dcc885.jpg',
      'https://triptokyrgyzstan.com/sites/default/files/media/image/c_stephen_cruise_1.jpg'
    ]
  },
  {
    id: 10,
    title: "Каракол",
    description: "Одно из высоких гор мира",
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/af/1c/37/caption.jpg?w=1200&h=-1&s=1",
    fullDescription: 'Каракол — город в Восточном Кыргызстане, расположенный в предгорьях Тянь-Шаня на берегу реки Караколка. Этот город является культурным и туристическим центром региона, известным своими природными красотами и многообразием туристических маршрутов.Природа и окрестностиКаракол окружен живописными горами и озерами, что делает его популярным местом для туризма и отдыха. В непосредственной близости от города находятся озера Иссык-Куль и Сон-Куль, а также горные хребты, предлагающие отличные возможности для пеших походов и активного отдыха.Историческое наследие В Караколе можно увидеть множество исторических и архитектурных памятников. Особенно известен Духовной Храм Преображения Господня, построенный в русском стиле в начале 20 века, а также рынок Каракол, где можно приобрести местные продукты и изделия ручной работы.Туризм и развитие Каракол является важным туристическим центром Кыргызстана благодаря своему географическому положению и многообразию туристических аттракционов. Здесь развиты отели, гостиницы и кемпинги для размещения посетителей, а также различные туристические агентства предлагают экскурсионные программы и активный отдых. Культурная жизнь Город также известен своей культурной жизнью, где проходят фестивали, концерты и мероприятия, отражающие местные традиции и культуру народов Кыргызстана. Также здесь можно попробовать национальную кухню и узнать о местных ремеслах.',
    moreImages:[
      'https://www.karakol-ski.kg/assets/i/img1.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f1/f5/6a/caption.jpg?w=400&h=300&s=1',
      'https://biz.com.kg/wp-content/uploads/2021/08/152413956389135.jpg',
      'https://www.karakol-ski.kg/assets/i/img2.jpg'
    ]
  },
];

const PlaceDetail = () => {
  const { id } = useParams();
  const place = kyrgyzstanPlaces.find(place => place.id === parseInt(id));
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  if (!place) {
    return <div>Место не найдено</div>;
  }

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="p-4 container">
      <h1 className="text-3xl font-bold mb-4">{place.title}</h1>
      <img src={place.imageUrl} alt={place.title} className="w-full h-full object-cover rounded-lg shadow-md mb-4" />
      <p className="mb-4 text-xl text-justify">{place.fullDescription}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
        {place.moreImages.slice(0, 4).map((image, index) => (
          <img key={index} src={image} alt={`${place.title} ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-md" />
        ))}
      </div>

      <div className="mt-4">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={handleLike}
        >
          Like ({likes})
        </button>
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2">Комментарии</h2>
        <form onSubmit={handleCommentSubmit} className="mb-4">
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Оставьте свой комментарий"
            rows="4"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 mt-2 rounded-lg"
          >
            Оставить комментарий
          </button>
        </form>
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg">
              {comment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;