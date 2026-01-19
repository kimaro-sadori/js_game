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
    },
    // ===================== Flags =====================
{
  word: "BOLIVIA FLAG",
  wordAr: "علم بوليفيا",
  hints: ["Red yellow green", "Horizontal stripes", "South America"],
  hintsAr: ["أحمر أصفر أخضر", "خطوط أفقية", "أمريكا الجنوبية"],
  category: "flags",
  image: "🇧🇴"
},
{
  word: "BOSNIA FLAG",
  wordAr: "علم البوسنة والهرسك",
  hints: ["Blue yellow", "Stars diagonal", "Balkans"],
  hintsAr: ["أزرق أصفر", "نجوم مائلة", "البلقان"],
  category: "flags",
  image: "🇧🇦"
},
{
  word: "BOTSWANA FLAG",
  wordAr: "علم بوتسوانا",
  hints: ["Light blue", "Black white stripe", "Southern Africa"],
  hintsAr: ["أزرق فاتح", "خط أسود أبيض", "جنوب أفريقيا"],
  category: "flags",
  image: "🇧🇼"
},
{
  word: "BULGARIA FLAG",
  wordAr: "علم بلغاريا",
  hints: ["White green red", "Horizontal stripes", "Eastern Europe"],
  hintsAr: ["أبيض أخضر أحمر", "خطوط أفقية", "أوروبا الشرقية"],
  category: "flags",
  image: "🇧🇬"
},
{
  word: "CAMBODIA FLAG",
  wordAr: "علم كمبوديا",
  hints: ["Blue red", "Angkor Wat", "Southeast Asia"],
  hintsAr: ["أزرق أحمر", "أنغكور وات", "جنوب شرق آسيا"],
  category: "flags",
  image: "🇰🇭"
},
{
  word: "CHILE FLAG",
  wordAr: "علم تشيلي",
  hints: ["Blue white red", "Single star", "South America"],
  hintsAr: ["أزرق أبيض أحمر", "نجمة واحدة", "أمريكا الجنوبية"],
  category: "flags",
  image: "🇨🇱"
},
{
  word: "COSTA RICA FLAG",
  wordAr: "علم كوستاريكا",
  hints: ["Blue white red", "Central America", "Horizontal stripes"],
  hintsAr: ["أزرق أبيض أحمر", "أمريكا الوسطى", "خطوط أفقية"],
  category: "flags",
  image: "🇨🇷"
},
{
  word: "CROATIA FLAG",
  wordAr: "علم كرواتيا",
  hints: ["Red white blue", "Checkered shield", "Balkans"],
  hintsAr: ["أحمر أبيض أزرق", "درع مربعات", "البلقان"],
  category: "flags",
  image: "🇭🇷"
},
{
  word: "CUBA FLAG",
  wordAr: "علم كوبا",
  hints: ["Red triangle", "Blue white stripes", "Caribbean"],
  hintsAr: ["مثلث أحمر", "خطوط زرقاء بيضاء", "الكاريبي"],
  category: "flags",
  image: "🇨🇺"
},
{
  word: "CZECH REPUBLIC FLAG",
  wordAr: "علم التشيك",
  hints: ["Blue triangle", "Red white", "Central Europe"],
  hintsAr: ["مثلث أزرق", "أحمر أبيض", "أوروبا الوسطى"],
  category: "flags",
  image: "🇨🇿"
},
{
  word: "DENMARK FLAG",
  wordAr: "علم الدنمارك",
  hints: ["White cross", "Red background", "Nordic"],
  hintsAr: ["صليب أبيض", "خلفية حمراء", "إسكندنافيا"],
  category: "flags",
  image: "🇩🇰"
},
{
  word: "DOMINICAN REPUBLIC FLAG",
  wordAr: "علم جمهورية الدومينيكان",
  hints: ["White cross", "Red blue", "Caribbean"],
  hintsAr: ["صليب أبيض", "أحمر أزرق", "الكاريبي"],
  category: "flags",
  image: "🇩🇴"
},
{
  word: "ECUADOR FLAG",
  wordAr: "علم الإكوادور",
  hints: ["Yellow blue red", "Coat of arms", "Equator"],
  hintsAr: ["أصفر أزرق أحمر", "شعار", "خط الاستواء"],
  category: "flags",
  image: "🇪🇨"
},
{
  word: "EL SALVADOR FLAG",
  wordAr: "علم السلفادور",
  hints: ["Blue white blue", "Central America", "Coat of arms"],
  hintsAr: ["أزرق أبيض أزرق", "أمريكا الوسطى", "شعار"],
  category: "flags",
  image: "🇸🇻"
},
{
  word: "ESTONIA FLAG",
  wordAr: "علم إستونيا",
  hints: ["Blue black white", "Baltic state", "Northern Europe"],
  hintsAr: ["أزرق أسود أبيض", "دولة بلطيق", "شمال أوروبا"],
  category: "flags",
  image: "🇪🇪"
},
{
  word: "FINLAND FLAG",
  wordAr: "علم فنلندا",
  hints: ["Blue cross", "White background", "Nordic"],
  hintsAr: ["صليب أزرق", "خلفية بيضاء", "إسكندنافيا"],
  category: "flags",
  image: "🇫🇮"
},
{
  word: "GEORGIA FLAG",
  wordAr: "علم جورجيا",
  hints: ["Five crosses", "White background", "Caucasus"],
  hintsAr: ["خمسة صلبان", "خلفية بيضاء", "القوقاز"],
  category: "flags",
  image: "🇬🇪"
},
{
  word: "GREECE FLAG",
  wordAr: "علم اليونان",
  hints: ["Blue white", "Cross", "Mediterranean"],
  hintsAr: ["أزرق أبيض", "صليب", "البحر المتوسط"],
  category: "flags",
  image: "🇬🇷"
},
{
  word: "HUNGARY FLAG",
  wordAr: "علم المجر",
  hints: ["Red white green", "Horizontal stripes", "Central Europe"],
  hintsAr: ["أحمر أبيض أخضر", "خطوط أفقية", "أوروبا الوسطى"],
  category: "flags",
  image: "🇭🇺"
},
{
  word: "ICELAND FLAG",
  wordAr: "علم آيسلندا",
  hints: ["Red cross", "Blue background", "Nordic island"],
  hintsAr: ["صليب أحمر", "خلفية زرقاء", "جزيرة إسكندنافية"],
  category: "flags",
  image: "🇮🇸"
},
{
  word: "IRELAND FLAG",
  wordAr: "علم إيرلندا",
  hints: ["Green white orange", "Vertical stripes", "Western Europe"],
  hintsAr: ["أخضر أبيض برتقالي", "خطوط عمودية", "أوروبا الغربية"],
  category: "flags",
  image: "🇮🇪"
},
{
  word: "ISRAEL FLAG",
  wordAr: "علم إسرائيل",
  hints: ["Blue white", "Star of David", "Middle East"],
  hintsAr: ["أزرق أبيض", "نجمة داوود", "الشرق الأوسط"],
  category: "flags",
  image: "🇮🇱"
},
{
  word: "JAMAICA FLAG",
  wordAr: "علم جامايكا",
  hints: ["Green yellow black", "Diagonal cross", "Caribbean"],
  hintsAr: ["أخضر أصفر أسود", "صليب مائل", "الكاريبي"],
  category: "flags",
  image: "🇯🇲"
},
{
  word: "JORDAN FLAG",
  wordAr: "علم الأردن",
  hints: ["Red triangle", "White star", "Arab colors"],
  hintsAr: ["مثلث أحمر", "نجمة بيضاء", "ألوان عربية"],
  category: "flags",
  image: "🇯🇴"
},
{
  word: "KAZAKHSTAN FLAG",
  wordAr: "علم كازاخستان",
  hints: ["Light blue", "Sun and eagle", "Central Asia"],
  hintsAr: ["أزرق فاتح", "شمس ونسر", "آسيا الوسطى"],
  category: "flags",
  image: "🇰🇿"
},
{
  word: "KUWAIT FLAG",
  wordAr: "علم الكويت",
  hints: ["Black trapezoid", "Arab colors", "Gulf state"],
  hintsAr: ["شكل أسود", "ألوان عربية", "دولة خليجية"],
  category: "flags",
  image: "🇰🇼"
},
{
  word: "KYRGYZSTAN FLAG",
  wordAr: "علم قيرغيزستان",
  hints: ["Red background", "Yellow sun", "Central Asia"],
  hintsAr: ["خلفية حمراء", "شمس صفراء", "آسيا الوسطى"],
  category: "flags",
  image: "🇰🇬"
},
{
  word: "LAOS FLAG",
  wordAr: "علم لاوس",
  hints: ["Blue red", "White circle", "Southeast Asia"],
  hintsAr: ["أزرق أحمر", "دائرة بيضاء", "جنوب شرق آسيا"],
  category: "flags",
  image: "🇱🇦"
},
{
  word: "LATVIA FLAG",
  wordAr: "علم لاتفيا",
  hints: ["Maroon white", "Horizontal stripes", "Baltic"],
  hintsAr: ["خمري أبيض", "خطوط أفقية", "البلطيق"],
  category: "flags",
  image: "🇱🇻"
},
{
  word: "LEBANON FLAG",
  wordAr: "علم لبنان",
  hints: ["Red white", "Cedar tree", "Levant"],
  hintsAr: ["أحمر أبيض", "شجرة الأرز", "بلاد الشام"],
  category: "flags",
  image: "🇱🇧"
},
{
  word: "LIBYA FLAG",
  wordAr: "علم ليبيا",
  hints: ["Red black green", "Crescent and star", "North Africa"],
  hintsAr: ["أحمر أسود أخضر", "هلال ونجمة", "شمال أفريقيا"],
  category: "flags",
  image: "🇱🇾"
},
{
  word: "LITHUANIA FLAG",
  wordAr: "علم ليتوانيا",
  hints: ["Yellow green red", "Horizontal stripes", "Baltic"],
  hintsAr: ["أصفر أخضر أحمر", "خطوط أفقية", "البلطيق"],
  category: "flags",
  image: "🇱🇹"
},
{
  word: "LUXEMBOURG FLAG",
  wordAr: "علم لوكسمبورغ",
  hints: ["Red white blue", "Horizontal stripes", "Western Europe"],
  hintsAr: ["أحمر أبيض أزرق", "خطوط أفقية", "أوروبا الغربية"],
  category: "flags",
  image: "🇱🇺"
},
{
  word: "MADAGASCAR FLAG",
  wordAr: "علم مدغشقر",
  hints: ["Red green white", "Vertical band", "Island nation"],
  hintsAr: ["أحمر أخضر أبيض", "شريط عمودي", "دولة جزر"],
  category: "flags",
  image: "🇲🇬"
},
{
  word: "MALAWI FLAG",
  wordAr: "علم مالاوي",
  hints: ["Black red green", "Rising sun", "East Africa"],
  hintsAr: ["أسود أحمر أخضر", "شمس مشرقة", "شرق أفريقيا"],
  category: "flags",
  image: "🇲🇼"
},{
  word: "MALI FLAG",
  wordAr: "علم مالي",
  hints: ["Green yellow red", "Vertical stripes", "West Africa"],
  hintsAr: ["أخضر أصفر أحمر", "خطوط عمودية", "غرب أفريقيا"],
  category: "flags",
  image: "🇲🇱"
},
{
  word: "MAURITANIA FLAG",
  wordAr: "علم موريتانيا",
  hints: ["Green background", "Crescent and star", "West Africa"],
  hintsAr: ["خلفية خضراء", "هلال ونجمة", "غرب أفريقيا"],
  category: "flags",
  image: "🇲🇷"
},
{
  word: "MONGOLIA FLAG",
  wordAr: "علم منغوليا",
  hints: ["Red blue yellow", "Soyombo symbol", "East Asia"],
  hintsAr: ["أحمر أزرق أصفر", "رمز سويمبو", "شرق آسيا"],
  category: "flags",
  image: "🇲🇳"
},
{
  word: "MONTENEGRO FLAG",
  wordAr: "علم الجبل الأسود",
  hints: ["Red with gold border", "Double-headed eagle", "Balkans"],
  hintsAr: ["أحمر مع إطار ذهبي", "نسر برأسين", "البلقان"],
  category: "flags",
  image: "🇲🇪"
},
{
  word: "NAMIBIA FLAG",
  wordAr: "علم ناميبيا",
  hints: ["Blue red green", "Diagonal stripe", "Southern Africa"],
  hintsAr: ["أزرق أحمر أخضر", "خط مائل", "جنوب أفريقيا"],
  category: "flags",
  image: "🇳🇦"
},
{
  word: "NETHERLANDS FLAG",
  wordAr: "علم هولندا",
  hints: ["Red white blue", "Horizontal stripes", "Western Europe"],
  hintsAr: ["أحمر أبيض أزرق", "خطوط أفقية", "أوروبا الغربية"],
  category: "flags",
  image: "🇳🇱"
},
{
  word: "NEW ZEALAND FLAG",
  wordAr: "علم نيوزيلندا",
  hints: ["Southern Cross", "Union Jack", "Oceania"],
  hintsAr: ["الصليب الجنوبي", "علم بريطانيا", "أوقيانوسيا"],
  category: "flags",
  image: "🇳🇿"
},
{
  word: "NICARAGUA FLAG",
  wordAr: "علم نيكاراغوا",
  hints: ["Blue white blue", "Triangle emblem", "Central America"],
  hintsAr: ["أزرق أبيض أزرق", "شعار مثلث", "أمريكا الوسطى"],
  category: "flags",
  image: "🇳🇮"
},
{
  word: "NIGER FLAG",
  wordAr: "علم النيجر",
  hints: ["Orange white green", "Orange circle", "West Africa"],
  hintsAr: ["برتقالي أبيض أخضر", "دائرة برتقالية", "غرب أفريقيا"],
  category: "flags",
  image: "🇳🇪"
},
{
  word: "NORTH MACEDONIA FLAG",
  wordAr: "علم مقدونيا الشمالية",
  hints: ["Red yellow", "Sun rays", "Balkans"],
  hintsAr: ["أحمر أصفر", "أشعة الشمس", "البلقان"],
  category: "flags",
  image: "🇲🇰"
},
{
  word: "NORWAY FLAG",
  wordAr: "علم النرويج",
  hints: ["Blue cross", "Red background", "Nordic"],
  hintsAr: ["صليب أزرق", "خلفية حمراء", "إسكندنافيا"],
  category: "flags",
  image: "🇳🇴"
},
{
  word: "OMAN FLAG",
  wordAr: "علم عمان",
  hints: ["White red green", "National emblem", "Arabian Peninsula"],
  hintsAr: ["أبيض أحمر أخضر", "شعار وطني", "شبه الجزيرة العربية"],
  category: "flags",
  image: "🇴🇲"
},
{
  word: "PANAMA FLAG",
  wordAr: "علم بنما",
  hints: ["Red blue white", "Two stars", "Central America"],
  hintsAr: ["أحمر أزرق أبيض", "نجمتان", "أمريكا الوسطى"],
  category: "flags",
  image: "🇵🇦"
},
{
  word: "PARAGUAY FLAG",
  wordAr: "علم باراغواي",
  hints: ["Red white blue", "Coat of arms", "South America"],
  hintsAr: ["أحمر أبيض أزرق", "شعار", "أمريكا الجنوبية"],
  category: "flags",
  image: "🇵🇾"
},
{
  word: "POLAND FLAG",
  wordAr: "علم بولندا",
  hints: ["White red", "Horizontal bicolor", "Central Europe"],
  hintsAr: ["أبيض أحمر", "لونان أفقيان", "أوروبا الوسطى"],
  category: "flags",
  image: "🇵🇱"
}



// ===================== Sports =====================
,{
    word: "FOOTBALL",
    wordAr: "كرة القدم",
    hints: ["11 players per team", "90 minutes match", "World Cup tournament"],
    hintsAr: ["11 لاعب في كل فريق", "مباراة 90 دقيقة", "بطولة كأس العالم"],
    category: "sports",
    image: "⚽"
},
{
    word: "BASKETBALL",
    wordAr: "كرة السلة",
    hints: ["5 players per team", "NBA championship", "Dribbling required"],
    hintsAr: ["5 لاعبين في كل فريق", "بطولة NBA", "تنطيط الكرة ضروري"],
    category: "sports",
    image: "🏀"
},
{
    word: "TENNIS",
    wordAr: "تنس",
    hints: ["Love means zero", "Grand Slam events", "Racket sport"],
    hintsAr: ["الحب يعني صفر", "بطولات الجراند سلام", "رياضة مضرب"],
    category: "sports",
    image: "🎾"
},
{
    word: "SWIMMING",
    wordAr: "سباحة",
    hints: ["Four strokes", "Olympic pool", "Butterfly stroke"],
    hintsAr: ["أربع ضربات", "حوض أولمبي", "سباحة الفراشة"],
    category: "sports",
    image: "🏊"
},
{
    word: "BOXING",
    wordAr: "ملاكمة",
    hints: ["12-round fights", "Heavyweight division", "Knockout victory"],
    hintsAr: ["مباريات 12 جولة", "فئة الوزن الثقيل", "فوز بالضربة القاضية"],
    category: "sports",
    image: "🥊"
},
{
    word: "CRICKET",
    wordAr: "كريكيت",
    hints: ["Test matches", "Ashes series", "Batsman and bowler"],
    hintsAr: ["مباريات تجريبية", "سلسلة الرماد", "ضارب الكرة وراميها"],
    category: "sports",
    image: "🏏"
},
{
    word: "VOLLEYBALL",
    wordAr: "كرة طائرة",
    hints: ["Three hits per side", "Net separation", "Beach version"],
    hintsAr: ["ثلاث ضربات لكل جانب", "فصل الشبكة", "نسخة الشاطئ"],
    category: "sports",
    image: "🏐"
},
{
    word: "GOLF",
    wordAr: "جولف",
    hints: ["18 holes", "Par score", "Tiger Woods legend"],
    hintsAr: ["18 حفرة", "درجة بار", "أسطورة تايجر وودز"],
    category: "sports",
    image: "⛳"
},
{
    word: "F1 RACING",
    wordAr: "سباق سيارات",
    hints: ["Grand Prix", "Pit stops", "Formula One cars"],
    hintsAr: ["جائزة كبرى", "توقف الحفرة", "سيارات فورمولا واحد"],
    category: "sports",
    image: "🏎️"
},
{
    word: "SKIING",
    wordAr: "تزلج",
    hints: ["Winter Olympics", "Downhill speed", "Slalom course"],
    hintsAr: ["الألعاب الأولمبية الشتوية", "سرعة النزول", "مسار التعرج"],
    category: "sports",
    image: "⛷️"
},
// ===================== Anime =====================
{
    word: "DRAGON BALL",
    wordAr: "دراغون بول",
    hints: ["Goku protagonist", "Super Saiyan", "Dragon Balls wish"],
    hintsAr: ["بطل غوكو", "سوبر سايان", "أمنية كرات التنين"],
    category: "anime",
    image: "🐉"
},
{
    word: "NARUTO",
    wordAr: "ناروتو",
    hints: ["Ninja academy", "Rasengan technique", "Hokage dream"],
    hintsAr: ["أكاديمية النينجا", "تقنية الراسينغان", "حلم الهوكاجي"],
    category: "anime",
    image: "🍥"
},
{
    word: "ONE PIECE",
    wordAr: "ون بيس",
    hints: ["Straw Hat crew", "Devil Fruits", "Finding One Piece"],
    hintsAr: ["طاقم قبعة القش", "فواكه الشيطان", "البحث عن الكنز"],
    category: "anime",
    image: "🏴‍☠️"
},
{
    word: "ATTACK ON TITAN",
    wordAr: "هجوم العمالقة",
    hints: ["Eren Yeager", "Titan shifters", "Wall Maria"],
    hintsAr: ["إيرين ييغر", "محوّلو العمالقة", "جدار ماريا"],
    category: "anime",
    image: "👹"
},
{
    word: "DEATH NOTE",
    wordAr: "دفتر الموت",
    hints: ["Light Yagami", "Shinigami Ryuk", "Write names to kill"],
    hintsAr: ["لايت ياغامي", "شينغامي ريو", "كتابة الأسماء للقتل"],
    category: "anime",
    image: "📓"
},
{
    word: "DEMON SLAYER",
    wordAr: "قاتل الشياطين",
    hints: ["Tanjiro Kamado", "Breathing techniques", "Nezuko sister"],
    hintsAr: ["تانجيرو كامادو", "تقنيات التنفس", "الأخت نيزوكو"],
    category: "anime",
    image: "🗡️"
},
{
    word: "MY HERO ACADEMIA",
    wordAr: "أكاديميتي للأبطال",
    hints: ["Izuku Midoriya", "One For All quirk", "U.A. High School"],
    hintsAr: ["إيزوكو ميدوريا", "قوة ون فور أول", "مدرسة يو أيه الثانوية"],
    category: "anime",
    image: "🎓"
},
{
    word: "POKEMON",
    wordAr: "بوكيمون",
    hints: ["Ash Ketchum", "Gotta catch 'em all", "Pikachu mascot"],
    hintsAr: ["آش كاتشوم", "اصطدهم جميعًا", "تميمة بيكاتشو"],
    category: "anime",
    image: "⚡"
},
{
    word: "SPY X FAMILY",
    wordAr: "جاسوس × عائلة",
    hints: ["Loid Forger", "Anya mind-reading", "Found family comedy"],
    hintsAr: ["لُويد فورجر", "أنيا قارئة الأفكار", "كوميديا عائلة"],
    category: "anime",
    image: "👨‍👩‍👧"
},
{
    word: "JUJUTSU KAISEN",
    wordAr: "جوجوتسو كايسن",
    hints: ["Yuji Itadori", "Sukuna fingers", "Cursed energy"],
    hintsAr: ["يوجي إيتادوري", "أصابع سكونا", "الطاقة الملعونة"],
    category: "anime",
    image: "👊"
},


////// FOOTBALL PLAYERS //////

{
    word: "KARIM BENZEMA",
    wordAr: "كريم بنزيما",
    hints: ["French striker", "Real Madrid legend", "Ballon d'Or 2022"],
    hintsAr: ["مهاجم فرنسي", "أسطورة ريال مدريد", "الكرة الذهبية 2022"],
    category: "football",
    image: "images/karim-benzema.jpeg"
},
{
    word: "MO SALAH",
    wordAr: "محمد صلاح",
    hints: ["Egyptian king", "Liverpool winger", "Premier League top scorer"],
    hintsAr: ["الملك المصري", "جناح ليفربول", "هداف الدوري الإنجليزي"],
    category: "football",
    image: "images/mohamed-salah.jpeg"
},
{
    word: "KYLIAN MBAPPE",
    wordAr: "كيليان مبابي",
    hints: ["French speedster", "PSG star", "World Cup winner 2018"],
    hintsAr: ["الفرنسي السريع", "نجم باريس", "بطل كأس العالم 2018"],
    category: "football",
    image: "images/kylian-mbappe.jpeg"
},
{
    word: "ROBERT LEWANDOWSKI",
    wordAr: "روبرت ليفاندوفسكي",
    hints: ["Polish striker", "Barcelona forward", "Goal machine"],
    hintsAr: ["مهاجم بولندي", "مهاجم برشلونة", "آلة التهديف"],
    category: "football",
    image: "images/robert-lewandowski.jpeg"
},
{
    word: "KEVIN DE BRUYNE",
    wordAr: "كيفين دي بروين",
    hints: ["Belgian midfielder", "Manchester City", "Passing master"],
    hintsAr: ["لاعب وسط بلجيكي", "مانشستر سيتي", "سيد التمريرات"],
    category: "football",
    image: "images/kevin-de-bruyne.jpeg"
},
{
    word: "ERLING HAALAND",
    wordAr: "إرلينغ هالاند",
    hints: ["Norwegian giant", "Manchester City", "Goal scoring record"],
    hintsAr: ["العملاق النرويجي", "مانشستر سيتي", "سجل هدافي"],
    category: "football",
    image: "images/erling-haaland.jpeg"
},
{
    word: "VINICIUS JR",
    wordAr: "فينيسيوس جونيور",
    hints: ["Brazilian winger", "Real Madrid", "Dribbling skills"],
    hintsAr: ["جناح برازيلي", "ريال مدريد", "مهارات المراوغة"],
    category: "football",
    image: "images/vinicius-junior.jpeg"
},
{
    word: "HARRY KANE",
    wordAr: "هاري كين",
    hints: ["English captain", "Bayern Munich", "Tottenham legend"],
    hintsAr: ["قائد إنجليزي", "بايرن ميونخ", "أسطورة توتنهام"],
    category: "football",
    image: "images/harry-kane.jpeg"
},
{
    word: "MANUEL NEUER",
    wordAr: "مانويل نوير",
    hints: ["German goalkeeper", "Bayern Munich", "Sweeper keeper"],
    hintsAr: ["حارس مرمى ألماني", "بايرن ميونخ", "حارس متقدم"],
    category: "football",
    image: "images/manuel-neuer.jpeg"
},
{
    word: "LUKA MODRIC",
    wordAr: "لوكا مودريتش",
    hints: ["Croatian midfielder", "Real Madrid", "Ballon d'Or 2018"],
    hintsAr: ["لاعب وسط كرواتي", "ريال مدريد", "الكرة الذهبية 2018"],
    category: "football",
    image: "images/luka-modric.jpeg"
},
{
    word: "THIBAUT COURTOIS",
    wordAr: "تيبو كورتوا",
    hints: ["Belgian goalkeeper", "Real Madrid", "Tall keeper"],
    hintsAr: ["حارس مرمى بلجيكي", "ريال مدريد", "حارس طويل القامة"],
    category: "football",
    image: "images/thibaut-courtois.jpeg"
},
{
    word: "VIRGIL VAN DIJK",
    wordAr: "فيرجيل فان دايك",
    hints: ["Dutch defender", "Liverpool captain", "Strong in air"],
    hintsAr: ["مدافع هولندي", "قائد ليفربول", "قوي في الهواء"],
    category: "football",
    image: "images/virgil-van-dijk.jpeg"
},
{
    word: "JOSHUA KIMMICH",
    wordAr: "يوشوا كيميش",
    hints: ["German midfielder", "Bayern Munich", "Versatile player"],
    hintsAr: ["لاعب وسط ألماني", "بايرن ميونخ", "لاعب متعدد المهارات"],
    category: "football",
    image: "images/joshua-kimmich.jpeg"
},
{
    word: "SADIO MANE",
    wordAr: "ساديو ماني",
    hints: ["Senegalese forward", "Al Nassr", "Liverpool legend"],
    hintsAr: ["مهاجم سنغالي", "النصر", "أسطورة ليفربول"],
    category: "football",
    image: "images/sadio-mane.jpeg"
},
{
    word: "EDERSON",
    wordAr: "إيدرسون",
    hints: ["Brazilian goalkeeper", "Manchester City", "Good with feet"],
    hintsAr: ["حارس مرمى برازيلي", "مانشستر سيتي", "جيد باستخدام قدميه"],
    category: "football",
    image: "images/ederson.jpeg"
},
{
    word: "TONI KROOS",
    wordAr: "توني كروس",
    hints: ["German midfielder", "Real Madrid", "Passing accuracy"],
    hintsAr: ["لاعب وسط ألماني", "ريال مدريد", "دقة التمرير"],
    category: "football",
    image: "images/toni-kroos.jpeg"
},
{
    word: "CASEMIRO",
    wordAr: "كاسيميرو",
    hints: ["Brazilian defensive midfielder", "Manchester United", "Real Madrid legend"],
    hintsAr: ["لاعب وسط دفاعي برازيلي", "مانشستر يونايتد", "أسطورة ريال مدريد"],
    category: "football",
    image: "images/casemiro.jpeg"
},
{
    word: "RAHEEM STERLING",
    wordAr: "راهيم ستيرلينغ",
    hints: ["English winger", "Chelsea", "Manchester City legend"],
    hintsAr: ["جناح إنجليزي", "تشيلسي", "أسطورة مانشستر سيتي"],
    category: "football",
    image: "images/raheem-sterling.jpeg"
},
{
    word: "JAN OBLAK",
    wordAr: "يان أوبلاك",
    hints: ["Slovenian goalkeeper", "Atletico Madrid", "Shot stopping"],
    hintsAr: ["حارس مرمى سلوفيني", "أتلتيكو مدريد", "صد الكرات"],
    category: "football",
    image: "images/jan-oblak.jpeg"
},
{
    word: "MARQUINHOS",
    wordAr: "ماركينيوس",
    hints: ["Brazilian defender", "PSG captain", "Central defender"],
    hintsAr: ["مدافع برازيلي", "قائد باريس", "مدافع مركزي"],
    category: "football",
    image: "images/marquinhos.jpeg"
}



];