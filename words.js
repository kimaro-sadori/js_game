const words = [
    // ===================== Animals =====================
    {
        word: "WOLF",
        wordAr: "ذئب",
        hints: ["Pack hierarchy", "Long-range howling", "Cursorial endurance"],
        hintsAr: ["تسلسل جماعي", "عواء بعيد", "تحمل عدوي"],
        category: "animals",
        image: "🐺"
    },
    {
        word: "BAT",
        wordAr: "خفاش",
        hints: ["Biosonar navigation", "Inverted roosting", "True powered flight"],
        hintsAr: ["ملاحة صوتية", "تعليق مقلوب", "طيران حقيقي"],
        category: "animals",
        image: "🦇"
    },
    {
        word: "OWL",
        wordAr: "بومة",
        hints: ["Asymmetric ears", "Silent flight", "Nocturnal predation"],
        hintsAr: ["أذنان غير متماثلتين", "طيران صامت", "افتراس ليلي"],
        category: "animals",
        image: "🦉"
    },
    {
        word: "CAMEL",
        wordAr: "جمل",
        hints: ["Heterogeneous fat storage", "Desert osmoregulation", "Closable nostrils"],
        hintsAr: ["دهون موضعية", "توازن مائي", "أنف قابل للإغلاق"],
        category: "animals",
        image: "🐪"
    },
    {
        word: "CROCODILE",
        wordAr: "تمساح",
        hints: ["Archosaur lineage", "Pressure receptors", "Four-chambered heart"],
        hintsAr: ["سلالة قديمة", "مستقبلات ضغط", "قلب رباعي"],
        category: "animals",
        image: "🐊"
    },
    {
        word: "HORSE",
        wordAr: "حصان",
        hints: ["Digit reduction", "Flight response", "Herd vigilance"],
        hintsAr: ["اختزال الأصابع", "استجابة هروب", "يقظة جماعية"],
        category: "animals",
        image: "🐎"
    },
    {
        word: "RAVEN",
        wordAr: "غراب",
        hints: ["Advanced problem-solving", "Tool interaction", "Complex vocalizations"],
        hintsAr: ["حل مشكلات", "استخدام أدوات", "أصوات معقدة"],
        category: "animals",
        image: "🐦"
    },
    {
        word: "SNAKE",
        wordAr: "ثعبان",
        hints: ["Kinetic skull", "Chemosensory tongue", "Ectothermic metabolism"],
        hintsAr: ["جمجمة مرنة", "لسان كيميائي", "دم بارد"],
        category: "animals",
        image: "🐍"
    },
    {
        word: "ELEPHANT",
        wordAr: "فيل",
        hints: ["Long-term memory", "Trunk dexterity", "Matriarchal society"],
        hintsAr: ["ذاكرة طويلة", "خرطوم ماهر", "مجتمع أمومي"],
        category: "animals",
        image: "🐘"
    },
    {
        word: "DOLPHIN",
        wordAr: "دلفين",
        hints: ["Echolocation clicks", "Unihemispheric sleep", "Complex social bonds"],
        hintsAr: ["نقر تحديد الموقع", "نوم بنصف دماغ", "روابط اجتماعية معقدة"],
        category: "animals",
        image: "🐬"
    },
    {
        word: "EAGLE",
        wordAr: "نسر",
        hints: ["Binocular vision", "Aerial supremacy", "Telescopic eyes"],
        hintsAr: ["رؤية مجسمة", "سيادة جوية", "عيون تلسكوبية"],
        category: "animals",
        image: "🦅"
    },
    {
        word: "TIGER",
        wordAr: "نمر",
        hints: ["Striped camouflage", "Solitary predator", "Territorial marking"],
        hintsAr: ["تمويه مخطط", "مفترس منعزل", "تعليم منطقة"],
        category: "animals",
        image: "🐅"
    },
    {
        word: "BEAR",
        wordAr: "دب",
        hints: ["Omnivorous diet", "Winter hibernation", "Plantigrade locomotion"],
        hintsAr: ["نظام غذائي شامل", "سبات شتوي", "حركة كاملة القدم"],
        category: "animals",
        image: "🐻"
    },
    {
        word: "SHARK",
        wordAr: "قرش",
        hints: ["Electroreception", "Cartilaginous skeleton", "Multiple tooth rows"],
        hintsAr: ["استشعار كهربائي", "هيكل غضروفي", "صفوف أسنان متعددة"],
        category: "animals",
        image: "🦈"
    },
    {
        word: "GIRAFFE",
        wordAr: "زرافة",
        hints: ["Cervical elongation", "High browsing", "Unique spot patterns"],
        hintsAr: ["استطالة عنقية", "رعي عال", "أنماط بقع فريدة"],
        category: "animals",
        image: "🦒"
    },
    {
        word: "KANGAROO",
        wordAr: "كنغر",
        hints: ["Marsupial pouch", "Bipedal hopping", "Embryonic diapause"],
        hintsAr: ["جراب جرابي", "قفز ثنائي", "تأخير جنيني"],
        category: "animals",
        image: "🦘"
    },
    {
        word: "PANDA",
        wordAr: "باندا",
        hints: ["Bamboo specialist", "False thumb", "Conservation icon"],
        hintsAr: ["متخصص في الخيزران", "إبهام زائف", "رمز الحفاظ"],
        category: "animals",
        image: "🐼"
    },
    {
        word: "PENGUIN",
        wordAr: "بطريق",
        hints: ["Countershading", "Aquatic flightless", "Huddling thermoregulation"],
        hintsAr: ["تظليل مضاد", "غير طائر مائي", "تكتل لتنظيم الحرارة"],
        category: "animals",
        image: "🐧"
    },
    {
        word: "CHEETAH",
        wordAr: "فهد",
        hints: ["Sprint acceleration", "Non-retractable claws", "High-speed pursuit"],
        hintsAr: ["تسارع عالي", "مخالب غير قابلة للسحب", "مطاردة بسرعة"],
        category: "animals",
        image: "🐆"
    },
    {
        word: "WHALE",
        wordAr: "حوت",
        hints: ["Baleen filtration", "Deep diving", "Complex songs"],
        hintsAr: ["ترشيح بالين", "غوص عميق", "أغاني معقدة"],
        category: "animals",
        image: "🐋"
    },

    // ===================== Food =====================
    {
        word: "BREAD",
        wordAr: "خبز",
        hints: ["Yeast fermentation", "Staple carbohydrate", "Ancient oven culture"],
        hintsAr: ["تخمير خمائري", "غذاء أساسي", "أفران قديمة"],
        category: "food",
        image: "🍞"
    },
    {
        word: "RICE",
        wordAr: "أرز",
        hints: ["Flooded cultivation", "Cereal grain", "Global caloric base"],
        hintsAr: ["زراعة مغمورة", "حبوب", "مصدر طاقة عالمي"],
        category: "food",
        image: "🍚"
    },
    {
        word: "OLIVE OIL",
        wordAr: "زيت الزيتون",
        hints: ["Cold extraction", "Mediterranean lipid", "Phenolic bitterness"],
        hintsAr: ["عصر بارد", "دهن متوسطي", "مرارة فينولية"],
        category: "food",
        image: "🫒"
    },
    {
        word: "EGG",
        wordAr: "بيض",
        hints: ["Complete protein", "Calcium shell", "Embryonic vessel"],
        hintsAr: ["بروتين كامل", "قشرة كلسية", "وعاء جنيني"],
        category: "food",
        image: "🥚"
    },
    {
        word: "MILK",
        wordAr: "حليب",
        hints: ["Lactose sugar", "Mammalian secretion", "Casein protein"],
        hintsAr: ["سكر اللاكتوز", "إفراز ثديي", "بروتين الكازين"],
        category: "food",
        image: "🥛"
    },
    {
        word: "DATES",
        wordAr: "تمر",
        hints: ["Desert carbohydrate", "Palm inflorescence", "Natural preservation"],
        hintsAr: ["طاقة صحراوية", "نخيل مثمر", "حفظ طبيعي"],
        category: "food",
        image: "🌴"
    },
    {
        word: "FISH",
        wordAr: "سمك",
        hints: ["Aquatic vertebrate", "Gill respiration", "Omega lipids"],
        hintsAr: ["فقاري مائي", "تنفس خيشومي", "دهون أوميغا"],
        category: "food",
        image: "🐟"
    },
    {
        word: "SALT",
        wordAr: "ملح",
        hints: ["Ionic compound", "Preservative mineral", "Ancient trade good"],
        hintsAr: ["مركب أيوني", "مادة حافظة", "سلعة تاريخية"],
        category: "food",
        image: "🧂"
    },
    {
        word: "HONEY",
        wordAr: "عسل",
        hints: ["Hexose sugars", "Bee regurgitation", "Natural antimicrobial"],
        hintsAr: ["سكريات هكسوز", "اجترار نحل", "مضاد للميكروبات طبيعي"],
        category: "food",
        image: "🍯"
    },
    {
        word: "CHEESE",
        wordAr: "جبن",
        hints: ["Casein coagulation", "Microbial ripening", "Proteolytic breakdown"],
        hintsAr: ["تخثر الكازين", "نضج ميكروبي", "تفكيك بروتيني"],
        category: "food",
        image: "🧀"
    },
    {
        word: "COFFEE",
        wordAr: "قهوة",
        hints: ["Caffeine alkaloid", "Roast pyrolysis", "Arabica species"],
        hintsAr: ["قلويد الكافيين", "تحلل حراري بالتخمير", "نوع أرابيكا"],
        category: "food",
        image: "☕"
    },
    {
        word: "TEA",
        wordAr: "شاي",
        hints: ["Camellia leaves", "Oxidative fermentation", "Theanine amino acid"],
        hintsAr: ["أوراق كاميليا", "تخمير تأكسدي", "حمض أميني ثيانين"],
        category: "food",
        image: "🍵"
    },
    {
        word: "CHOCOLATE",
        wordAr: "شوكولاتة",
        hints: ["Theobromine content", "Conching process", "Cacao fermentation"],
        hintsAr: ["محتويات ثيوبرومين", "عملية الخلط", "تخمير الكاكاو"],
        category: "food",
        image: "🍫"
    },
    {
        word: "YOGURT",
        wordAr: "زبادي",
        hints: ["Lactic acid bacteria", "Probiotic cultures", "Lactose conversion"],
        hintsAr: ["بكتيريا حمض اللاكتيك", "مزارع بروبيوتيك", "تحويل اللاكتوز"],
        category: "food",
        image: "🥣"
    },
    {
        word: "POTATO",
        wordAr: "بطاطس",
        hints: ["Tuber storage", "Solanum genus", "Starch granules"],
        hintsAr: ["تخزين درني", "جنس سولانم", "حبيبات نشوية"],
        category: "food",
        image: "🥔"
    },
    {
        word: "TOMATO",
        wordAr: "طماطم",
        hints: ["Berry classification", "Lycopene pigment", "Nightshade family"],
        hintsAr: ["تصنيف توتي", "صبغة اللايكوبين", "عائلة الباذنجان"],
        category: "food",
        image: "🍅"
    },
    {
        word: "ONION",
        wordAr: "بصل",
        hints: ["Sulfur compounds", "Lachrymatory factor", "Bulb storage"],
        hintsAr: ["مركبات الكبريت", "عامل دمعي", "تخزين بصلي"],
        category: "food",
        image: "🧅"
    },
    {
        word: "GARLIC",
        wordAr: "ثوم",
        hints: ["Allicin formation", "Bulbil propagation", "Antimicrobial properties"],
        hintsAr: ["تكوين الأليسين", "تكاثر بصيلات", "خصائص مضادة للميكروبات"],
        category: "food",
        image: "🧄"
    },
    {
        word: "LEMON",
        wordAr: "ليمون",
        hints: ["Citric acid", "Flavedo zest", "Ascorbic acid"],
        hintsAr: ["حمض الستريك", "قشر الحمضيات", "حمض الأسكوربيك"],
        category: "food",
        image: "🍋"
    },
    {
        word: "APPLE",
        wordAr: "تفاح",
        hints: ["Pome fruit", "Malic acid", "Seed dispersal"],
        hintsAr: ["فاكهة تفاحية", "حمض الماليك", "تشتت البذور"],
        category: "food",
        image: "🍎"
    },

    // ===================== Movies =====================
    {
        word: "TITANIC",
        wordAr: "تايتانيك",
        hints: ["Ship disaster", "Iceberg collision", "1997 romance"],
        hintsAr: ["كارثة سفينة", "اصطدام جبل جليدي", "رومانسية 1997"],
        category: "movies",
        image: "🚢"
    },
    {
        word: "JURASSIC PARK",
        wordAr: "الحديقة الجوراسية",
        hints: ["Cloned dinosaurs", "Chaos theory", "Michael Crichton adaptation"],
        hintsAr: ["ديناصورات مستنسخة", "نظرية الفوضى", "تعديل مايكل كرايتون"],
        category: "movies",
        image: "🦖"
    },
    {
        word: "MATRIX",
        wordAr: "ماتريكس",
        hints: ["Simulated reality", "Red pill choice", "Bullet time effects"],
        hintsAr: ["واقع محاكي", "اختيار الحبة الحمراء", "تأثيرات زمن الرصاص"],
        category: "movies",
        image: "🕶️"
    },
    {
        word: "STAR WARS",
        wordAr: "حرب النجوم",
        hints: ["The Force", "Lightsaber duels", "Galactic empire"],
        hintsAr: ["القوة", "مبارزات سيف ضوئي", "إمبراطورية مجرية"],
        category: "movies",
        image: "⚔️"
    },
    {
        word: "AVATAR",
        wordAr: "أفاتار",
        hints: ["Pandora planet", "Na'vi people", "James Cameron epic"],
        hintsAr: ["كوكب باندورا", "شعب نافي", "ملحمة جيمس كاميرون"],
        category: "movies",
        image: "🌀"
    },
    {
        word: "INCEPTION",
        wordAr: "ابدأ",
        hints: ["Dream within dream", "Spinning top", "Christopher Nolan"],
        hintsAr: ["حلم داخل حلم", "قطعة دوارة", "كريستوفر نولان"],
        category: "movies",
        image: "🌀"
    },
    {
        word: "FROZEN",
        wordAr: "متجمد",
        hints: ["Ice powers", "Let It Go song", "Disney animation"],
        hintsAr: ["قوى جليدية", "أغنية Let It Go", "رسوم متحركة ديزني"],
        category: "movies",
        image: "❄️"
    },
    {
        word: "JOKER",
        wordAr: "جوكر",
        hints: ["Arthur Fleck", "Mental illness", "Todd Phillips direction"],
        hintsAr: ["آرثر فليك", "مرض عقلي", "إخراج تود فيليبس"],
        category: "movies",
        image: "🃏"
    },
    {
        word: "GLADIATOR",
        wordAr: "جلاديتر",
        hints: ["Maximus Decimus", "Colosseum battles", "Roman revenge"],
        hintsAr: ["ماكسيوس ديسيموس", "معارك الكولوسيوم", "انتقام روماني"],
        category: "movies",
        image: "🗡️"
    },
    {
        word: "INTERSTELLAR",
        wordAr: "بين النجوم",
        hints: ["Wormhole travel", "Time dilation", "Matthew McConaughey"],
        hintsAr: ["سفر عبر الثقب الدودي", "تمدد الزمن", "ماثيو ماكونهي"],
        category: "movies",
        image: "🚀"
    },
    {
        word: "PARASITE",
        wordAr: "طفيلي",
        hints: ["Social inequality", "Oscar winner", "Bong Joon-ho"],
        hintsAr: ["عدم المساواة الاجتماعية", "فائز بجائزة الأوسكار", "بونج جون هو"],
        category: "movies",
        image: "🏆"
    },
    {
        word: "PULP FICTION",
        wordAr: "باب فيكشن",
        hints: ["Nonlinear narrative", "Royale with cheese", "Quentin Tarantino"],
        hintsAr: ["سرد غير خطي", "رويال مع جبن", "كوينتن تارانتينو"],
        category: "movies",
        image: "💉"
    },

    // ===================== Places =====================
    {
        word: "EVEREST",
        wordAr: "إيفرست",
        hints: ["Highest peak", "Death zone", "Himalayan range"],
        hintsAr: ["أعلى قمة", "منطقة الموت", "سلسلة جبال الهيمالايا"],
        category: "places",
        image: "🏔️"
    },
    {
        word: "AMAZON",
        wordAr: "أمازون",
        hints: ["Tropical rainforest", "River basin", "Biodiversity hotspot"],
        hintsAr: ["غابة مطيرة استوائية", "حوض نهر", "منطقة تنوع بيولوجي"],
        category: "places",
        image: "🌴"
    },
    {
        word: "SAHARA",
        wordAr: "صحراء",
        hints: ["Largest hot desert", "Erg formations", "Trans-Saharan trade"],
        hintsAr: ["أكبر صحراء حارة", "تشكيلات رملية", "تجارة عبر الصحراء"],
        category: "places",
        image: "🏜️"
    },
    {
        word: "PARIS",
        wordAr: "باريس",
        hints: ["Eiffel Tower", "City of Light", "Seine River"],
        hintsAr: ["برج إيفل", "مدينة النور", "نهر السين"],
        category: "places",
        image: "🗼"
    },
    {
        word: "TOKYO",
        wordAr: "طوكيو",
        hints: ["Megacity", "Cherry blossoms", "Shinkansen trains"],
        hintsAr: ["مدينة ضخمة", "أزهار الكرز", "قطارات شينكانسن"],
        category: "places",
        image: "🗾"
    },
    {
        word: "ROME",
        wordAr: "روما",
        hints: ["Colosseum", "Ancient empire", "Seven hills"],
        hintsAr: ["الكولوسيوم", "إمبراطورية قديمة", "سبعة تلال"],
        category: "places",
        image: "🏛️"
    },
    {
        word: "SYDNEY",
        wordAr: "سيدني",
        hints: ["Opera House", "Harbour Bridge", "Australia"],
        hintsAr: ["دار الأوبرا", "جسر الميناء", "أستراليا"],
        category: "places",
        image: "🎭"
    },
    {
        word: "CAIRO",
        wordAr: "القاهرة",
        hints: ["Nile River", "Pyramids nearby", "Ancient capital"],
        hintsAr: ["نهر النيل", "أهرامات قريبة", "عاصمة قديمة"],
        category: "places",
        image: "🌅"
    },
    {
        word: "NEW YORK",
        wordAr: "نيويورك",
        hints: ["Statue of Liberty", "Times Square", "Five boroughs"],
        hintsAr: ["تمثال الحرية", "تايمز سكوير", "خمس أحياء"],
        category: "places",
        image: "🗽"
    },
    {
        word: "LONDON",
        wordAr: "لندن",
        hints: ["Big Ben", "Thames River", "Underground Tube"],
        hintsAr: ["بيج بن", "نهر التايمز", "مترو الأنفاق"],
        category: "places",
        image: "🎡"
    },
    {
        word: "DUBAI",
        wordAr: "دبي",
        hints: ["Burj Khalifa", "Desert city", "Artificial islands"],
        hintsAr: ["برج خليفة", "مدينة صحراوية", "جزر اصطناعية"],
        category: "places",
        image: "🏙️"
    },
    {
        word: "MECCA",
        wordAr: "مكة",
        hints: ["Kaaba shrine", "Pilgrimage destination", "Islamic holy city"],
        hintsAr: ["ضريح الكعبة", "وجهة الحج", "مدينة مقدسة إسلامية"],
        category: "places",
        image: "🕋"
    },

    // ===================== Objects =====================
    {
        word: "GUITAR",
        wordAr: "جيتار",
        hints: ["Six strings", "Fretboard", "Acoustic resonance"],
        hintsAr: ["ستة أوتار", "لوح الأصابع", "رنين صوتي"],
        category: "objects",
        image: "🎸"
    },
    {
        word: "WATCH",
        wordAr: "ساعة",
        hints: ["Timekeeping device", "Wrist-worn", "Mechanical movement"],
        hintsAr: ["جهاز قياس الوقت", "ترتدى على المعصم", "حركة ميكانيكية"],
        category: "objects",
        image: "⌚"
    },
    {
        word: "CAMERA",
        wordAr: "كاميرا",
        hints: ["Lens aperture", "Shutter speed", "Image sensor"],
        hintsAr: ["فتحة العدسة", "سرعة الغالق", "مستشعر الصورة"],
        category: "objects",
        image: "📷"
    },
    {
        word: "BOOK",
        wordAr: "كتاب",
        hints: ["Bound pages", "Printed text", "ISBN identifier"],
        hintsAr: ["صفحات مجلدة", "نص مطبوع", "معرف ISBN"],
        category: "objects",
        image: "📚"
    },
    {
        word: "PHONE",
        wordAr: "هاتف",
        hints: ["Mobile communication", "Touchscreen", "App ecosystem"],
        hintsAr: ["اتصالات محمولة", "شاشة لمس", "نظام التطبيقات"],
        category: "objects",
        image: "📱"
    },
    {
        word: "KEY",
        wordAr: "مفتاح",
        hints: ["Lock mechanism", "Unique cuts", "Security device"],
        hintsAr: ["آلية القفل", "تشكيلات فريدة", "جهاز أمني"],
        category: "objects",
        image: "🔑"
    },
    {
        word: "UMBRELLA",
        wordAr: "مظلة",
        hints: ["Rain protection", "Collapsible frame", "Waterproof canopy"],
        hintsAr: ["حماية من المطر", "إطار قابل للطي", "مظلة مقاومة للماء"],
        category: "objects",
        image: "☔"
    },
    {
        word: "GLASSES",
        wordAr: "نظارات",
        hints: ["Vision correction", "Lens prescription", "Frame temples"],
        hintsAr: ["تصحيح الرؤية", "وصفة العدسات", "أذرع الإطار"],
        category: "objects",
        image: "👓"
    },
    {
        word: "CHAIR",
        wordAr: "كرسي",
        hints: ["Seating furniture", "Four legs", "Back support"],
        hintsAr: ["أثاث جلوس", "أربع أرجل", "دعم الظهر"],
        category: "objects",
        image: "🪑"
    },
    {
        word: "LAMP",
        wordAr: "مصباح",
        hints: ["Light source", "Electrical fixture", "Shade diffuser"],
        hintsAr: ["مصدر ضوء", "تركيبة كهربائية", "موزع ظل"],
        category: "objects",
        image: "💡"
    },
    {
        word: "BICYCLE",
        wordAr: "دراجة",
        hints: ["Two wheels", "Pedal propulsion", "Chain drive"],
        hintsAr: ["عجلتان", "دفع بدواسة", "ناقل سلسلة"],
        category: "objects",
        image: "🚲"
    },
    {
        word: "COMPUTER",
        wordAr: "حاسوب",
        hints: ["Processing unit", "Input devices", "Digital operations"],
        hintsAr: ["وحدة معالجة", "أجهزة إدخال", "عمليات رقمية"],
        category: "objects",
        image: "💻"
    },

    // ===================== Celebrities =====================
    {
        word: "BEYONCE",
        wordAr: "بيونسيه",
        hints: ["American singer", "Destiny's Child", "Single Ladies dance"],
        hintsAr: ["مغنية أمريكية", "دستينيز تشايلد", "رقصة سينجل لاديز"],
        category: "celebrities",
        image: "👑"
    },
    {
        word: "LEBRON JAMES",
        wordAr: "ليبرون جيمس",
        hints: ["NBA superstar", "Four championships", "King James nickname"],
        hintsAr: ["نجم NBA", "أربع بطولات", "لقب الملك جيمس"],
        category: "celebrities",
        image: "🏀"
    },
    {
        word: "CRISTIANO RONALDO",
        wordAr: "كريستيانو رونالدو",
        hints: ["Portuguese footballer", "Siu celebration", "Multiple Ballon d'Or"],
        hintsAr: ["لاعب كرة قدم برتغالي", "احتفال سيو", "كرة ذهبية متعددة"],
        category: "celebrities",
        image: "⚽"
    },
    {
        word: "LIONEL MESSI",
        wordAr: "ليونيل ميسي",
        hints: ["Argentine forward", "Barcelona legend", "Seven Ballon d'Or"],
        hintsAr: ["مهاجم أرجنتيني", "أسطورة برشلونة", "سبع كرات ذهبية"],
        category: "celebrities",
        image: "🌟"
    },
    {
        word: "TAYLOR SWIFT",
        wordAr: "تايلور سويفت",
        hints: ["Songwriter", "Era Tours", "Country to pop transition"],
        hintsAr: ["كاتبة أغاني", "جولات العصور", "انتقال من الريف إلى البوب"],
        category: "celebrities",
        image: "🎤"
    },
    {
        word: "ELON MUSK",
        wordAr: "إيلون ماسك",
        hints: ["Tesla CEO", "SpaceX founder", "Twitter acquisition"],
        hintsAr: ["رئيس Tesla", "مؤسس SpaceX", "استحواذ تويتر"],
        category: "celebrities",
        image: "🚀"
    },
    {
        word: "ROBERT DOWNEY JR",
        wordAr: "روبرت داوني جونيور",
        hints: ["Iron Man role", "MCU actor", "Oscar nominee"],
        hintsAr: ["دور الرجل الحديدي", "ممثل MCU", "مرشح للأوسكار"],
        category: "celebrities",
        image: "🦸"
    },
    {
        word: "OPRAH WINFREY",
        wordAr: "أوبرا وينفري",
        hints: ["Talk show host", "Media empire", "Book club influence"],
        hintsAr: ["مضيف برنامج حواري", "إمبراطورية إعلامية", "تأثير نادي الكتاب"],
        category: "celebrities",
        image: "📺"
    },
    {
        word: "TOM CRUISE",
        wordAr: "توم كروز",
        hints: ["Mission Impossible", "Stunt performing", "Scientology association"],
        hintsAr: ["مهمة مستحيلة", "أداء حركات بهلوانية", "ارتباط بالساينتولوجي"],
        category: "celebrities",
        image: "🎬"
    },
    {
        word: "BRAD PITT",
        wordAr: "براد بيت",
        hints: ["Fight Club", "Oscar winner", "Plan B Productions"],
        hintsAr: ["نادي القتال", "فائز بجائزة الأوسكار", "إنتاجات Plan B"],
        category: "celebrities",
        image: "🎭"
    },
    {
        word: "ANGELINA JOLIE",
        wordAr: "أنجلينا جولي",
        hints: ["Tomb Raider", "UNHCR ambassador", "Brangelina relationship"],
        hintsAr: ["تومب رايدر", "سفيرة UNHCR", "علاقة برانجلينا"],
        category: "celebrities",
        image: "🦸♀️"
    },
    {
        word: "KANYE WEST",
        wordAr: "كانييه ويست",
        hints: ["Yeezy brand", "Grammy awards", "Controversial figure"],
        hintsAr: ["علامة Yeezy", "جوائز Grammy", "شخصية مثيرة للجدل"],
        category: "celebrities",
        image: "🎧"
    }
];