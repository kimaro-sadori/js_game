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
    {
    word: "OCTOPUS",
    wordAr: "أخطبوط",
    hints: ["Three hearts", "Camouflage chromatophores", "Distributed intelligence"],
    hintsAr: ["ثلاثة قلوب", "خلايا تمويه لونية", "ذكاء موزع"],
    category: "animals",
    image: "🐙"
},
{
    word: "GORILLA",
    wordAr: "غوريلا",
    hints: ["Knuckle walking", "Silverback leadership", "Herbivorous ape"],
    hintsAr: ["مشي على المفاصل", "قيادة ظهر فضي", "قرد نباتي"],
    category: "animals",
    image: "🦍"
},
{
    word: "RHINO",
    wordAr: "كركدن",
    hints: ["Keratin horn", "Thick folded skin", "Poor eyesight"],
    hintsAr: ["قرن كيراتيني", "جلد سميك مطوي", "ضعف البصر"],
    category: "animals",
    image: "🦏"
},
{
    word: "HIPPO",
    wordAr: "فرس النهر",
    hints: ["Semi-aquatic grazing", "Territorial aggression", "Submerged walking"],
    hintsAr: ["رعي شبه مائي", "عدوانية إقليمية", "مشي مغمور"],
    category: "animals",
    image: "🦛"
},
{
    word: "PLATYPUS",
    wordAr: "خلد الماء",
    hints: ["Egg-laying mammal", "Electrolocation bill", "Venomous spur"],
    hintsAr: ["ثدي يبيض", "منقار كاشف كهربائي", "مهماز سام"],
    category: "animals",
    image: "🦆"
},
{
    word: "CHAMELEON",
    wordAr: "حرباء",
    hints: ["Independent eye movement", "Projectile tongue", "Color-changing skin"],
    hintsAr: ["حركة عين مستقلة", "لسان قذفي", "جلد متغير اللون"],
    category: "animals",
    image: "🦎"
},
{
    word: "ARMADILLO",
    wordAr: "أرماديلو",
    hints: ["Bony armored plates", "Burrowing specialist", "Curling defense"],
    hintsAr: ["صفائح عظمية مدرعة", "متخصص في الحفر", "دفاع بالالتفاف"],
    category: "animals",
    image: "🦔"
},
{
    word: "FENNEC",
    wordAr: "فنك",
    hints: ["Desert adaptation", "Large ears", "Nocturnal forager"],
    hintsAr: ["تكيف صحراوي", "آذان كبيرة", "قنص ليلي"],
    category: "animals",
    image: "🦊"
},
{
    word: "JELLYFISH",
    wordAr: "قنديل البحر",
    hints: ["Radial symmetry", "Stinging nematocysts", "Gelatinous body"],
    hintsAr: ["تماثل شعاعي", "خلايا لاسعة", "جسم هلامي"],
    category: "animals",
    image: "🎐"
},
{
    word: "ANTEATER",
    wordAr: "آكل النمل",
    hints: ["Elongated snout", "Sticky tongue", "Powerful digging claws"],
    hintsAr: ["خطم طويل", "لسان لزج", "مخالب حفر قوية"],
    category: "animals",
    image: "🐜"
},
{
    word: "ORCA",
    wordAr: "أوركا",
    hints: ["Apex predator", "Matrilineal pods", "Echolocating clicks"],
    hintsAr: ["مفترس رئيسي", "قطيع أمومي", "نقر تحديد موقع"],
    category: "animals",
    image: "🐋"
},
{
    word: "MEERKAT",
    wordAr: "سوريكات",
    hints: ["Sentinel behavior", "Burrow colonies", "Social grooming"],
    hintsAr: ["سلوك حراسة", "مستعمرات جحور", "تنظيف اجتماعي"],
    category: "animals",
    image: "🐾"
},
{
    word: "MANATEE",
    wordAr: "خروف البحر",
    hints: ["Aquatic herbivore", "Slow metabolism", "Paddle-shaped tail"],
    hintsAr: ["عشباء مائية", "معدل أيض بطيء", "ذيل مجدافي"],
    category: "animals",
    image: "🌊"
},
{
    word: "KOALA",
    wordAr: "كوالا",
    hints: ["Eucalyptus diet", "Arboreal marsupial", "Reduced brain size"],
    hintsAr: ["نظام غذائي من الأوكالبتوس", "جرابي شجري", "دماغ صغير الحجم"],
    category: "animals",
    image: "🐨"
},
{
    word: "LEMUR",
    wordAr: "ليمور",
    hints: ["Ringed tail", "Primate of Madagascar", "Social grooming groups"],
    hintsAr: ["ذيل حلقي", "رباحي من مدغشقر", "مجموعات تنظيف اجتماعي"],
    category: "animals",
    image: "🐒"
},
{
    word: "MOOSE",
    wordAr: "موظ",
    hints: ["Palmate antlers", "Wading herbivore", "Solitary temperament"],
    hintsAr: ["قرون مروحية", "عشباء سائرة", "طبع انعزالي"],
    category: "animals",
    image: "🦌"
},
{
    word: "WALRUS",
    wordAr: "فظ",
    hints: ["Tusks for ice hauling", "Bristled whiskers", "Blubber insulation"],
    hintsAr: ["أنياب للتسلق على الجليد", "شوارب خشنة", "عزل بالدهن"],
    category: "animals",
    image: "🐘"
},
{
    word: "SLOTH",
    wordAr: "كسلان",
    hints: ["Arboreal lethargy", "Algae symbiotic fur", "Slow digestion"],
    hintsAr: ["خمول شجري", "فراء تكافلي مع الطحالب", "هضم بطيء"],
    category: "animals",
    image: "🦥"
},
{
    word: "FALCON",
    wordAr: "صقر",
    hints: ["Diving stoop", "Notched beak", "Aerial agility"],
    hintsAr: ["غوص انحداري", "منقار ذو نتوء", "رشاقة جوية"],
    category: "animals",
    image: "🦅"
},
{
    word: "LION",
    wordAr: "أسد",
    hints: ["Social felid", "Mane display", "Cooperative hunting"],
    hintsAr: ["سنور اجتماعي", "عرض اللبدة", "صيد تعاوني"],
    category: "animals",
    image: "🦁"
},{
    word: "ZEBRA",
    wordAr: "حمار وحشي",
    hints: ["Disruptive coloration", "Social striping", "Mobbing defense"],
    hintsAr: ["تلوين مشتت", "خطوط اجتماعية", "دفاع جماعي"],
    category: "animals",
    image: "🦓"
},
{
    word: "PARROT",
    wordAr: "ببغاء",
    hints: ["Vocal mimicry", "Zygodactyl feet", "Seed-cracking beak"],
    hintsAr: ["تقليد صوتي", "أقدام متقابلة الأصابع", "منقار كاسر للبذور"],
    category: "animals",
    image: "🦜"
},
{
    word: "RACCOON",
    wordAr: "راقون",
    hints: ["Dexterous forepaws", "Nocturnal scavenging", "Facial mask"],
    hintsAr: ["أقدام أمامية ماهرة", "تنقيب ليلي", "قناع وجهي"],
    category: "animals",
    image: "🦝"
},
{
    word: "LLAMA",
    wordAr: "لاما",
    hints: ["Andean pack animal", "Spit defense", "Double-coated wool"],
    hintsAr: ["حيوان حمل أنديزي", "دفاع بالبصق", "صوف مزدوج الطبقات"],
    category: "animals",
    image: "🦙"
},
{
    word: "PEACOCK",
    wordAr: "طاووس",
    hints: ["Iridescent train", "Lek mating display", "Eyespot patterns"],
    hintsAr: ["ريش ذيل لامع", "عرض تزاوج جماعي", "أنماط عينية"],
    category: "animals",
    image: "🦚"
},
{
    word: "LOBSTER",
    wordAr: "كركند",
    hints: ["Decapod crustacean", "Chemical sensing antennae", "Regenerative limbs"],
    hintsAr: ["قشريات عشارية الأرجل", "هوائيات استشعار كيميائي", "أطراف متجددة"],
    category: "animals",
    image: "🦞"
},
{
    word: "SCORPION",
    wordAr: "عقرب",
    hints: ["Pectine sensory organs", "Venomous telson", "Fluorescent exoskeleton"],
    hintsAr: ["أعضاء استشعار مشطية", "ذيل سام", "هيكل خارجي متألق"],
    category: "animals",
    image: "🦂"
},
{
    word: "CRAB",
    wordAr: "سلطعون",
    hints: ["Decapod sideways walk", "Cheliped asymmetry", "Burrowing behavior"],
    hintsAr: ["مشي جانبي بعشر أرجل", "عدم تناظر الكلابيات", "سلوك حفري"],
    category: "animals",
    image: "🦀"
},
{
    word: "FLAMINGO",
    wordAr: "نحام",
    hints: ["Filter-feeding beak", "Carotenoid pigmentation", "Unipedal resting"],
    hintsAr: ["منقار ترشيحي", "تلوين كاروتيني", "راحة أحادية القدم"],
    category: "animals",
    image: "🦩"
},
{
    word: "BUTTERFLY",
    wordAr: "فراشة",
    hints: ["Complete metamorphosis", "Scaled wings", "Proboscis feeding"],
    hintsAr: ["تحول كامل", "أجنحة مقشرة", "تغذية بالخرطوم"],
    category: "animals",
    image: "🦋"
},
{
    word: "SPIDER",
    wordAr: "عنكبوت",
    hints: ["Silk-spinning spinnerets", "Eight-legged arachnid", "Venom-injecting fangs"],
    hintsAr: ["مغازل لغزل الحرير", "عنكبوتي ذو ثمانية أرجل", "أنياب حقن السم"],
    category: "animals",
    image: "🕷️"
},
{
    word: "SQUIRREL",
    wordAr: "سنجاب",
    hints: ["Scatter-hoarding", "Bushy tail balance", "Dentition for gnawing"],
    hintsAr: ["تخزين متناثر", "توازن بالذيل الكث", "أسنان للقرض"],
    category: "animals",
    image: "🐿️"
},
{
    word: "BEAVER",
    wordAr: "قندس",
    hints: ["Dam construction", "Iron-enameled teeth", "Lodge building"],
    hintsAr: ["بناء سدود", "أسنان مطلية بالحديد", "بناء أكواخ"],
    category: "animals",
    image: "🦫"
},
{
    word: "BISON",
    wordAr: "ثور أمريكي",
    hints: ["Herd migration", "Woolly winter coat", "Wallowing behavior"],
    hintsAr: ["هجرة جماعية", "معطف شتوي صوفي", "سلوك التمرغ"],
    category: "animals",
    image: "🦬"
},
{
    word: "SEAL",
    wordAr: "فقمة",
    hints: ["Pinniped amphibiousness", "Blubber insulation", "Vibrissae sensing"],
    hintsAr: ["برمائية زعنفية القدم", "عزل بالدهن", "استشعار بالشوارب"],
    category: "animals",
    image: "🦭"
},
{
    word: "TURTLE",
    wordAr: "سلحفاة",
    hints: ["Bony carapace", "Temperature-dependent sex", "Aquatic-terrestrial duality"],
    hintsAr: ["درع عظمي", "جنس يعتمد على الحرارة", "ازدواجية مائية برية"],
    category: "animals",
    image: "🐢"
},
{
    word: "SNAIL",
    wordAr: "حلزون",
    hints: ["Calcareous shell", "Muscular foot locomotion", "Radula feeding"],
    hintsAr: ["صدفة كلسية", "حركة بالقدم العضلية", "تغذية بالمبرد"],
    category: "animals",
    image: "🐌"
},
{
    word: "LADYBUG",
    wordAr: "خنفساء الدعسوقة",
    hints: ["Aposematic coloration", "Aphid predation", "Reflex bleeding"],
    hintsAr: ["تلوين تحذيري", "افتراس المن", "نزف انعكاسي"],
    category: "animals",
    image: "🐞"
},
{
    word: "ANT",
    wordAr: "نملة",
    hints: ["Eusocial colonies", "Pheromone trails", "Mandible strength"],
    hintsAr: ["مستعمرات اجتماعية عالية", "مسارات فرمونية", "قوة الفك"],
    category: "animals",
    image: "🐜"
},
{
    word: "BEE",
    wordAr: "نحلة",
    hints: ["Waggle dance communication", "Hexagonal comb construction", "Pollination vector"],
    hintsAr: ["تواصل برقصة الاهتزاز", "بناء أقراص سداسية", "ناقل للتلقيح"],
    category: "animals",
    image: "🐝"
},
{
    word: "FROG",
    wordAr: "ضفدع",
    hints: ["Biphasic life cycle", "Permeable skin respiration", "Tympanic membranes"],
    hintsAr: ["دورة حياة ثنائية الطور", "تنفس عبر الجلد النافذ", "أغشية طبلة"],
    category: "animals",
    image: "🐸"
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
    {
    word: "BANANA",
    wordAr: "موز",
    hints: ["Potassium-rich", "Tropical berry", "Clustered phalanx"],
    hintsAr: ["غني بالبوتاسيوم", "توت استوائي", "عنقود إصبعي"],
    category: "food",
    image: "🍌"
},
{
    word: "GRAPES",
    wordAr: "عنب",
    hints: ["Viticulture fruit", "Cluster formation", "Fermentation base"],
    hintsAr: ["فاكهة الكروم", "تشكل عنقودي", "قاعدة تخمير"],
    category: "food",
    image: "🍇"
},
{
    word: "STRAWBERRY",
    wordAr: "فراولة",
    hints: ["Aggregate accessory fruit", "Achene seeds", "Fragaria genus"],
    hintsAr: ["فاكهة ملحقة مجمعة", "بذور ثمرة جافة", "جنس الفراولة"],
    category: "food",
    image: "🍓"
},
{
    word: "WATERMELON",
    wordAr: "بطيخ",
    hints: ["Pepo classification", "High water content", "Picnic summer fruit"],
    hintsAr: ["تصنيف يقطيني", "محتوى مائي عال", "فاكهة الصيف النزهية"],
    category: "food",
    image: "🍉"
},
{
    word: "CHERRY",
    wordAr: "كرز",
    hints: ["Stone fruit", "Prunus genus", "Drupe classification"],
    hintsAr: ["فاكهة ذات نواة", "جنس البرقوق", "تصنيف دروبي"],
    category: "food",
    image: "🍒"
},
{
    word: "PEACH",
    wordAr: "خوخ",
    hints: ["Fuzzy skin", "Clingstone varieties", "Rosaceae family"],
    hintsAr: ["جلد زغبي", "أصناف ملتصقة النواة", "عائلة الورديات"],
    category: "food",
    image: "🍑"
},
{
    word: "PEAR",
    wordAr: "كمثرى",
    hints: ["Pyrus genus", "Gritty stone cells", "Bell-shaped fruit"],
    hintsAr: ["جنس الإجاص", "خلايا حجرية خشنة", "فاكهة جرسية الشكل"],
    category: "food",
    image: "🍐"
},
{
    word: "ORANGE",
    wordAr: "برتقال",
    hints: ["Citrus hybrid", "Hesperidium fruit", "Winter vitamin C source"],
    hintsAr: ["هجين حمضي", "فاكهة ليمونية", "مصدر فيتامين سي شتوي"],
    category: "food",
    image: "🍊"
},
{
    word: "PINEAPPLE",
    wordAr: "أناناس",
    hints: ["Multiple fruit", "Bromelain enzyme", "Tropical monocot"],
    hintsAr: ["فاكهة متعددة", "إنزيم البروميلين", "نبات استوائي أحادي الفلقة"],
    category: "food",
    image: "🍍"
},
{
    word: "COCONUT",
    wordAr: "جوز الهند",
    hints: ["Drupe with fibrous husk", "Endosperm liquid", "Palm family fruit"],
    hintsAr: ["ثمرة دروبية بقشرة ليفية", "سائل السويداء", "فاكهة النخيل"],
    category: "food",
    image: "🥥"
},
{
    word: "AVOCADO",
    wordAr: "أفوكادو",
    hints: ["Single-seeded berry", "High monounsaturated fat", "Climacteric ripening"],
    hintsAr: ["توت أحادي البذرة", "دهون أحادية غير مشبعة عالية", "نضج مناخي"],
    category: "food",
    image: "🥑"
},
{
    word: "EGGPLANT",
    wordAr: "باذنجان",
    hints: ["Nightshade berry", "Spongy texture", "Solanum melongena"],
    hintsAr: ["توت الباذنجان", "نسيج إسفنجي", "سولانوم ميلونجينا"],
    category: "food",
    image: "🍆"
},
{
    word: "CARROT",
    wordAr: "جزر",
    hints: ["Taproot storage", "Beta-carotene", "Biennial growth"],
    hintsAr: ["تخزين الجذر الرئيسي", "بيتا كاروتين", "نمو ثنائي الحول"],
    category: "food",
    image: "🥕"
},
{
    word: "CORN",
    wordAr: "ذرة",
    hints: ["Monocot cereal", "Maize kernels", "C4 photosynthesis"],
    hintsAr: ["حبوب أحادية الفلقة", "حبوب الذرة", "تمثيل ضوئي رباعي الكربون"],
    category: "food",
    image: "🌽"
},
{
    word: "CUCUMBER",
    wordAr: "خيار",
    hints: ["Pepo fruit", "High water content", "Cucurbitaceae family"],
    hintsAr: ["فاكهة يقطينية", "محتوى مائي عال", "عائلة القرعيات"],
    category: "food",
    image: "🥒"
},
{
    word: "BROCCOLI",
    wordAr: "بروكلي",
    hints: ["Edible flower buds", "Brassica oleracea", "Sulforaphane compound"],
    hintsAr: ["براعم زهور صالحة للأكل", "براسيكا أوليراسيا", "مركب سلفورافان"],
    category: "food",
    image: "🥦"
},
{
    word: "MUSHROOM",
    wordAr: "فطر",
    hints: ["Fungal fruiting body", "Mycelium network", "Spore dispersal"],
    hintsAr: ["جسم مثمر فطري", "شبكة ميسيليوم", "تشتت الأبواغ"],
    category: "food",
    image: "🍄"
},
{
    word: "PEANUT",
    wordAr: "فول سوداني",
    hints: ["Legume pod", "Geocarpy reproduction", "Arachis hypogaea"],
    hintsAr: ["قرن بقولي", "تكاثر أرضي الثمار", "أراكيس هيبوغايا"],
    category: "food",
    image: "🥜"
},
{
    word: "CHESTNUT",
    wordAr: "كستناء",
    hints: ["Starchy nut", "Castanea genus", "Roasting tradition"],
    hintsAr: ["جوز نشوي", "جنس الكستناء", "تقنية التحميص"],
    category: "food",
    image: "🌰"
},
{
    word: "BELL PEPPER",
    wordAr: "فلفل رومي",
    hints: ["Capsicum annuum", "Zero capsaicin", "Color ripening stages"],
    hintsAr: ["كبسيكوم أنوم", "خالي من الكابسيسين", "مراحل نضج اللون"],
    category: "food",
    image: "🫑"
},
{
    word: "HOT PEPPER",
    wordAr: "فلفل حار",
    hints: ["Capsaicin content", "Scoville scale", "Capsicum genus"],
    hintsAr: ["محتوى كابسيسين", "مقياس سكوفيل", "جنس الفليفلة"],
    category: "food",
    image: "🌶️"
},
{
    word: "LEAFY GREENS",
    wordAr: "خضروات ورقية",
    hints: ["Photosynthetic tissues", "High chlorophyll", "Dark pigmentation"],
    hintsAr: ["أنسجة ضوئية", "كلوروفيل عالي", "تلوين داكن"],
    category: "food",
    image: "🥬"
},
{
    word: "MEAT",
    wordAr: "لحم",
    hints: ["Animal muscle tissue", "Protein source", "Myoglobin content"],
    hintsAr: ["نسيج عضلي حيواني", "مصدر بروتين", "محتوى الميوجلوبين"],
    category: "food",
    image: "🥩"
},
{
    word: "POULTRY",
    wordAr: "دواجن",
    hints: ["Avian meat", "White-dark distinction", "Lean protein"],
    hintsAr: ["لحم طيور", "تمييز أبيض-داكن", "بروتين قليل الدهن"],
    category: "food",
    image: "🍗"
},
{
    word: "BACON",
    wordAr: "لحم مقدد",
    hints: ["Cured pork belly", "Smoking preservation", "Nitrite curing"],
    hintsAr: ["لحم بطن خنزير معالج", "حفظ بالتدخين", "معالجة بالنتريت"],
    category: "food",
    image: "🥓"
},
{
    word: "HAMBURGER",
    wordAr: "هامبرغر",
    hints: ["Ground meat patty", "Bun sandwich", "Fast food icon"],
    hintsAr: ["قرص لحم مفروم", "شطيرة كعك", "رمز الوجبات السريعة"],
    category: "food",
    image: "🍔"
},
{
    word: "PIZZA",
    wordAr: "بيتزا",
    hints: ["Leavened dough base", "Tomato sauce layer", "Melted cheese topping"],
    hintsAr: ["قاعدة عجين مخمر", "طبقة صلصة الطماطم", "طبقة جبن مذابة"],
    category: "food",
    image: "🍕"
},
{
    word: "SUSHI",
    wordAr: "سوشي",
    hints: ["Vinegared rice", "Nori seaweed wrap", "Raw fish topping"],
    hintsAr: ["أرز مع الخل", "لفة أعشاب بحرية نوري", "طبقة سمك نيء"],
    category: "food",
    image: "🍣"
},
{
    word: "DONUT",
    wordAr: "دونات",
    hints: ["Fried dough ring", "Yeast or cake type", "Glaze topping"],
    hintsAr: ["حلقة عجين مقلية", "نوع خميرة أو كيك", "طبقة صقيل"],
    category: "food",
    image: "🍩"
},
{
    word: "CAKE",
    wordAr: "كعكة",
    hints: ["Leavened batter", "Celebration dessert", "Layered structure"],
    hintsAr: ["خليط مخمر", "حلوى احتفالية", "هيكل طبقي"],
    category: "food",
    image: "🍰"
},
{
    word: "COOKIE",
    wordAr: "بسكويت",
    hints: ["Small baked treat", "Butter-sugar base", "Crisp texture"],
    hintsAr: ["حلوى مخبوزة صغيرة", "قاعدة زبدة-سكر", "قوام مقرمش"],
    category: "food",
    image: "🍪"
},
{
    word: "ICE CREAM",
    wordAr: "آيس كريم",
    hints: ["Frozen dairy dessert", "Air incorporation", "Fat emulsification"],
    hintsAr: ["حلوى ألبان مجمدة", "دمج الهواء", "استحلاب الدهون"],
    category: "food",
    image: "🍨"
},
{
    word: "LOLLIPOP",
    wordAr: "مصاصة",
    hints: ["Hard candy on stick", "Sugar crystallization", "Child confection"],
    hintsAr: ["حلوى صلبة على عصا", "تبلور السكر", "حلوى للأطفال"],
    category: "food",
    image: "🍭"
},
{
    word: "CANDY",
    wordAr: "حلوى",
    hints: ["Sugar concentrate", "Crystalline structure", "Sweet tooth satisfaction"],
    hintsAr: ["مركز سكري", "هيكل بلوري", "إشباع الرغبة في الحلويات"],
    category: "food",
    image: "🍬"
},
{
    word: "POPCORN",
    wordAr: "فشار",
    hints: ["Exploded corn kernel", "Steam pressure cooking", "Theater snack"],
    hintsAr: ["حبة ذرة منفجرة", "طهي بضغط البخار", "وجبة خفيفة في السينما"],
    category: "food",
    image: "🍿"
},
{
    word: "BUTTER",
    wordAr: "زبدة",
    hints: ["Churned cream", "Milk fat separation", "Water-in-fat emulsion"],
    hintsAr: ["قشدة مخفوقة", "فصل دهن الحليب", "مستحلب ماء في دهن"],
    category: "food",
    image: "🧈"
},
{
    word: "MAPLE SYRUP",
    wordAr: "شراب القيقب",
    hints: ["Xylem sap reduction", "Sucrose solution", "Spring harvest"],
    hintsAr: ["تقليل نسغ الخشب", "محلول سكروز", "حصاد الربيع"],
    category: "food",
    image: "🥞"
},
{
    word: "WAFFLE",
    wordAr: "وافل",
    hints: ["Grid-patterned batter", "Pressing cooking", "Breakfast staple"],
    hintsAr: ["خليط بنمط شبكي", "طهي بالضغط", "وجبة فطور أساسية"],
    category: "food",
    image: "🧇"
},
{
    word: "PANCAKES",
    wordAr: "بان كيك",
    hints: ["Flat batter cake", "Griddle cooking", "Stack serving"],
    hintsAr: ["كعكة خليط مسطحة", "طهي على صاج", "تقديم على شكل كومة"],
    category: "food",
    image: "🥞"
},
{
    word: "BAGEL",
    wordAr: "كعكة الخبز",
    hints: ["Boiled then baked", "Dough ring", "Chewy texture"],
    hintsAr: ["مسلوق ثم مخبوز", "حلقة عجين", "قوام مطاطي"],
    category: "food",
    image: "🥯"
},
{
    word: "CROISSANT",
    wordAr: "كرواسون",
    hints: ["Laminated dough", "French viennoiserie", "Butter layer folding"],
    hintsAr: ["عجين رقائقي", "معجنات فيينا فرنسية", "طي طبقات الزبدة"],
    category: "food",
    image: "🥐"
},
{
    word: "TACO",
    wordAr: "تاكو",
    hints: ["Folded tortilla", "Mexican street food", "Varied fillings"],
    hintsAr: ["تورتييا مطوية", "طعام الشارع المكسيكي", "حشوات متنوعة"],
    category: "food",
    image: "🌮"
},
{
    word: "BURRITO",
    wordAr: "بوريتو",
    hints: ["Wrapped tortilla", "Cylindrical shape", "Multiple ingredient bundle"],
    hintsAr: ["تورتييا ملفوفة", "شكل أسطواني", "حزمة مكونات متعددة"],
    category: "food",
    image: "🌯"
},
{
    word: "SPAGHETTI",
    wordAr: "سباغيتي",
    hints: ["Long thin pasta", "Wheat semolina", "Italian staple"],
    hintsAr: ["معكرونة طويلة رفيعة", "سميد القمح", "طعام أساسي إيطالي"],
    category: "food",
    image: "🍝"
},
{
    word: "SOUP",
    wordAr: "شوربة",
    hints: ["Liquid food", "Broth base", "Vegetable infusion"],
    hintsAr: ["طعام سائل", "قاعدة مرقة", "نقع الخضروات"],
    category: "food",
    image: "🍲"
},
{
    word: "SALAD",
    wordAr: "سلطة",
    hints: ["Raw vegetable mix", "Dressing coated", "Cold dish"],
    hintsAr: ["خليط خضروات نيئة", "مغطى بالصلصة", "طبق بارد"],
    category: "food",
    image: "🥗"
},
{
    word: "SANDWICH",
    wordAr: "ساندويتش",
    hints: ["Bread enclosure", "Portable meal", "Layered construction"],
    hintsAr: ["إغلاق بالخبز", "وجبة محمولة", "بناء طبقي"],
    category: "food",
    image: "🥪"
},
{
    word: "FRENCH FRIES",
    wordAr: "بطاطس مقلية",
    hints: ["Deep-fried potatoes", "Battonet cut", "Fast food side"],
    hintsAr: ["بطاطس مقلية بعمق", "قطع عصوية", "طبق جانبي للوجبات السريعة"],
    category: "food",
    image: "🍟"
},
{
    word: "SOFT DRINK",
    wordAr: "مشروب غازي",
    hints: ["Carbonated beverage", "High fructose corn syrup", "Bubbly texture"],
    hintsAr: ["مشروب مكربن", "شراب ذرة عالي الفركتوز", "قوام فقاعي"],
    category: "food",
    image: "🥤"
},

{
    word: "COCKTAIL",
    wordAr: "كوكتيل",
    hints: ["Mixed alcoholic drink", "Spirit base", "Garnish finish"],
    hintsAr: ["مشروب كحولي مختلط", "قاعدة روح", "زخرفة نهائية"],
    category: "food",
    image: "🍸"
},


{
    word: "VEGETABLE OIL",
    wordAr: "زيت نباتي",
    hints: ["Plant lipid extraction", "Cooking medium", "Fatty acid profile"],
    hintsAr: ["استخلاص دهون النبات", "وسيط للطبخ", "ملف الأحماض الدهنية"],
    category: "food",
    image: "🫒"
},
{
    word: "VINEGAR",
    wordAr: "خل",
    hints: ["Acetic acid solution", "Double fermentation", "Preservative liquid"],
    hintsAr: ["محلول حمض الأسيتيك", "تخمير مزدوج", "سائل حافظ"],
    category: "food",
    image: "🍾"
},
{
    word: "SOY SAUCE",
    wordAr: "صلصة الصويا",
    hints: ["Fermented soybean", "Wheat addition", "Umami flavor"],
    hintsAr: ["فول الصويا المخمر", "إضافة القمح", "نكهة أومامي"],
    category: "food",
    image: "🍶"
},
{
    word: "MUSTARD",
    wordAr: "خردل",
    hints: ["Ground seeds emulsion", "Sinigrin compound", "Yellow condiment"],
    hintsAr: ["مستحلب بذور مطحونة", "مركب السينيغرين", "توابل صفراء"],
    category: "food",
    image: "🟡"
},
{
    word: "KETCHUP",
    wordAr: "كاتشب",
    hints: ["Tomato concentrate", "Vinegar-sugar balance", "Bottle dispensing"],
    hintsAr: ["مركز الطماطم", "توازن الخل والسكر", "توزيع بالزجاجة"],
    category: "food",
    image: "🍅"
},
{
    word: "MAYONNAISE",
    wordAr: "مايونيز",
    hints: ["Oil-water emulsion", "Egg yolk emulsifier", "Creamy spread"],
    hintsAr: ["مستحلب زيت-ماء", "مستحلب صفار البيض", "دهان كريمي"],
    category: "food",
    image: "🥚"
},
{
    word: "JAM",
    wordAr: "مربى",
    hints: ["Fruit preserve", "Pectin setting", "Sugar concentration"],
    hintsAr: ["فاكهة محفوظة", "تثبيت البكتين", "تركيز السكر"],
    category: "food",
    image: "🍓"
},

    // ===================== Movies =====================
   {
    word: "TITANIC",
    wordAr: "تايتانيك",
    hints: ["Ship disaster", "Iceberg collision", "1997 romance"],
    hintsAr: ["كارثة سفينة", "اصطدام جبل جليدي", "رومانسية 1997"],
    category: "movies",
    image: "images/movies/titanic.jpg"
},
{
    word: "JURASSIC PARK",
    wordAr: "الحديقة الجوراسية",
    hints: ["Cloned dinosaurs", "Chaos theory", "Michael Crichton adaptation"],
    hintsAr: ["ديناصورات مستنسخة", "نظرية الفوضى", "تعديل مايكل كرايتون"],
    category: "movies",
    image: "images/movies/jurassic_park.jpg"
},
{
    word: "THE MATRIX",
    wordAr: "ماتريكس",
    hints: ["Simulated reality", "Red pill choice", "Bullet time effects"],
    hintsAr: ["واقع محاكي", "اختيار الحبة الحمراء", "تأثيرات زمن الرصاص"],
    category: "movies",
    image: "images/movies/matrix.jpg"
},

{
    word: "AVATAR",
    wordAr: "أفاتار",
    hints: ["Pandora planet", "Na'vi people", "James Cameron epic"],
    hintsAr: ["كوكب باندورا", "شعب نافي", "ملحمة جيمس كاميرون"],
    category: "movies",
    image: "images/movies/avatar.jpg"
},
{
    word: "INCEPTION",
    wordAr: "ابدأ",
    hints: ["Dream within dream", "Spinning top", "Christopher Nolan"],
    hintsAr: ["حلم داخل حلم", "قطعة دوارة", "كريستوفر نولان"],
    category: "movies",
    image: "images/movies/inception.jpg"
},
{
    word: "FROZEN",
    wordAr: "متجمد",
    hints: ["Ice powers", "Let It Go song", "Disney animation"],
    hintsAr: ["قوى جليدية", "أغنية Let It Go", "رسوم متحركة ديزني"],
    category: "movies",
    image: "images/movies/frozen.jpg"
},
{
    word: "JOKER",
    wordAr: "جوكر",
    hints: ["Arthur Fleck", "Mental illness", "Todd Phillips direction"],
    hintsAr: ["آرثر فليك", "مرض عقلي", "إخراج تود فيليبس"],
    category: "movies",
    image: "images/movies/joker.jpg"
},
{
    word: "GLADIATOR",
    wordAr: "جلاديتر",
    hints: ["Maximus Decimus", "Colosseum battles", "Roman revenge"],
    hintsAr: ["ماكسيوس ديسيموس", "معارك الكولوسيوم", "انتقام روماني"],
    category: "movies",
    image: "images/movies/gladiator.jpg"
},
{
    word: "INTERSTELLAR",
    wordAr: "بين النجوم",
    hints: ["Wormhole travel", "Time dilation", "Matthew McConaughey"],
    hintsAr: ["سفر عبر الثقب الدودي", "تمدد الزمن", "ماثيو ماكونهي"],
    category: "movies",
    image: "images/movies/interstellar.jpg"
},
{
    word: "PARASITE",
    wordAr: "طفيلي",
    hints: ["Social inequality", "Oscar winner", "Bong Joon-ho"],
    hintsAr: ["عدم المساواة الاجتماعية", "فائز بجائزة الأوسكار", "بونج جون هو"],
    category: "movies",
    image: "images/movies/parasite.jpg"
},
{
    word: "PULP FICTION",
    wordAr: "باب فيكشن",
    hints: ["Nonlinear narrative", "Royale with cheese", "Quentin Tarantino"],
    hintsAr: ["سرد غير خطي", "رويال مع جبن", "كوينتن تارانتينو"],
    category: "movies",
    image: "images/movies/pulp_fiction.jpg"
},
{
    word: "THE GODFATHER",
    wordAr: "العراب",
    hints: ["Mafia family", "Offer you can't refuse", "Marlon Brando"],
    hintsAr: ["عائلة مافيا", "عرض لا يمكن رفضه", "مارلون براندو"],
    category: "movies",
    image: "images/movies/godfather.jpg"
},
{
    word: "THE SIXTH SENSE",
    wordAr: "الحاسة السادسة",
    hints: ["I see dead people", "Plot twist", "Bruce Willis"],
    hintsAr: ["أرى أشخاصاً أمواتاً", "مفاجأة سينمائية", "بروس ويليس"],
    category: "movies",
    image: "images/movies/sixth_sense.jpg"
},
{
    word: "GET OUT",
    wordAr: "اخرج",
    hints: ["Sunken place", "Social horror", "Jordan Peele"],
    hintsAr: ["المكان الغارق", "رعب اجتماعي", "جوردان بيل"],
    category: "movies",
    image: "images/movies/get_out.jpg"
},
{
    word: "CITY OF GOD",
    wordAr: "مدينة الله",
    hints: ["Brazilian favela", "Rocket's story", "Gang violence"],
    hintsAr: ["حي فقير برازيلي", "قصة راكيت", "عنف عصابات"],
    category: "movies",
    image: "images/movies/city_of_god.jpg"
},
{
    word: "TOP GUN",
    wordAr: "توب غان",
    hints: ["Naval aviators", "Danger zone", "Tom Cruise"],
    hintsAr: ["طيارو البحرية", "منطقة الخطر", "توم كروز"],
    category: "movies",
    image: "images/movies/top_gun.jpg"
},
{
    word: "TENET",
    wordAr: "تينيت",
    hints: ["Time inversion", "Protagonist", "Christopher Nolan"],
    hintsAr: ["انعكاس الزمن", "بطل الرواية", "كريستوفر نولان"],
    category: "movies",
    image: "images/movies/tenet.jpg"
},
{
    word: "GREYHOUND",
    wordAr: "سلوقي",
    hints: ["Naval warfare", "Atlantic convoy", "Tom Hanks"],
    hintsAr: ["حرب بحرية", "قافلة الأطلسي", "توم هانكس"],
    category: "movies",
    image: "images/movies/greyhound.jpg"
},
{
    word: "FURY",
    wordAr: "فيوري",
    hints: ["World War II tank", "Brad Pitt", "Crew of five"],
    hintsAr: ["دبابة الحرب العالمية الثانية", "براد بيت", "طاقم من خمسة"],
    category: "movies",
    image: "images/movies/fury.jpg"
},
{
    word: "EDGE OF TOMORROW",
    wordAr: "حافة الغد",
    hints: ["Time loop", "Mimics aliens", "Live Die Repeat"],
    hintsAr: ["حلقة زمنية", "مخلوقات مقلدة", "عِشْ مُتْ كرر"],
    category: "movies",
    image: "images/movies/edge_of_tomorrow.jpg"
},
{
    word: "PRIMAL FEAR",
    wordAr: "خوف بدائي",
    hints: ["Courtroom drama", "Aaron Stampler", "Richard Gere"],
    hintsAr: ["دراما قاعة المحكمة", "آرون ستامبلر", "ريتشارد جير"],
    category: "movies",
    image: "images/movies/primal_fear.jpg"
},
{
    word: "THE AMATEUR",
    wordAr: "الهاوي",
    hints: ["CIA revenge", "Charles Heller", "1981 thriller"],
    hintsAr: ["انتقام سي آي إيه", "تشارلز هيلر", "إثارة 1981"],
    category: "movies",
    image: "images/movies/the_amateur.jpg"
},
{
    word: "THE COVENANT",
    wordAr: "الميثاق",
    hints: ["Afghanistan war", "Interpreter rescue", "Guy Ritchie"],
    hintsAr: ["حرب أفغانستان", "إنقاذ مترجم", "غي ريتشي"],
    category: "movies",
    image: "images/movies/the_covenant.jpg"
},
{
    word: "SILENCED",
    wordAr: "الصامتون",
    hints: ["Korean drama", "School abuse", "Gong Yoo"],
    hintsAr: ["دراما كورية", "إساءة مدرسية", "غونغ يو"],
    category: "movies",
    image: "images/movies/silenced.jpg"
},
{
    word: "TRIANGLE",
    wordAr: "مثلث",
    hints: ["Time loop mystery", "Yacht accident", "Psychological horror"],
    hintsAr: ["لغز حلقة زمنية", "حادث يخت", "رعب نفسي"],
    category: "movies",
    image: "images/movies/triangle.jpg"
},
{
    word: "THE SHAWSHANK REDEMPTION",
    wordAr: "هروب شاوشانك",
    hints: ["Prison escape", "Andy Dufresne", "Hope motif"],
    hintsAr: ["هروب من السجن", "آندي دوفريزن", "موتيف الأمل"],
    category: "movies",
    image: "images/movies/shawshank.jpg"
},
{
    word: "THE DARK KNIGHT",
    wordAr: "الفارس المظلم",
    hints: ["Why so serious?", "Gotham chaos", "Heath Ledger Joker"],
    hintsAr: ["لماذا الجدية؟", "فوضى غوثام", "جوكر هيث ليدجر"],
    category: "movies",
    image: "images/movies/dark_knight.jpg"
},
{
    word: "FIGHT CLUB",
    wordAr: "نادي القتال",
    hints: ["First rule", "Tyler Durden", "Consumerism critique"],
    hintsAr: ["القاعدة الأولى", "تايلر دوردن", "نقد الاستهلاكية"],
    category: "movies",
    image: "images/movies/fight_club.jpg"
},
{
    word: "FORREST GUMP",
    wordAr: "فورست غامب",
    hints: ["Life is like a box of chocolates", "Run Forrest run", "Historical events"],
    hintsAr: ["الحياة مثل علبة شوكولاتة", "اركض فورست اركض", "أحداث تاريخية"],
    category: "movies",
    image: "images/movies/forrest_gump.jpg"
},
{
    word: "SCHINDLER'S LIST",
    wordAr: "قائمة شيندلر",
    hints: ["Holocaust savior", "Red coat girl", "Black and white"],
    hintsAr: ["منقذ الهولوكوست", "الفتاة ذات المعطف الأحمر", "أبيض وأسود"],
    category: "movies",
    image: "images/movies/schindlers_list.jpg"
},
{
    word: "THE LORD OF THE RINGS",
    wordAr: "سيد الخواتم",
    hints: ["One Ring", "Middle-earth", "Frodo Baggins"],
    hintsAr: ["الخاتم الواحد", "الأرض الوسطى", "فرودو باغنز"],
    category: "movies",
    image: "images/movies/lord_of_rings.jpg"
},
{
    word: "HARRY POTTER",
    wordAr: "هاري بوتر",
    hints: ["Wizarding world", "Hogwarts School", "Voldemort"],
    hintsAr: ["عالم السحر", "مدرسة هوغوورتس", "فولدمورت"],
    category: "movies",
    image: "images/movies/harry_potter.jpg"
},
{
    word: "SPIDER-MAN",
    wordAr: "سبايدرمان",
    hints: ["With great power", "Web slinging", "Peter Parker"],
    hintsAr: ["مع القوة الكبيرة", "القذف بالشبكة", "بيتر باركر"],
    category: "movies",
    image: "images/movies/spiderman.jpg"
},
{
    word: "THE LION KING",
    wordAr: "الأسد الملك",
    hints: ["Circle of life", "Hakuna Matata", "Simba"],
    hintsAr: ["دائرة الحياة", "هاكونا ماتاتا", "سيمبا"],
    category: "movies",
    image: "images/movies/lion_king.jpg"
},
{
    word: "TOY STORY",
    wordAr: "قصة لعبة",
    hints: ["Animated toys", "Andy's room", "Buzz Lightyear"],
    hintsAr: ["ألعاب متحركة", "غرفة آندي", "باز لايتيير"],
    category: "movies",
    image: "images/movies/toy_story.jpg"
},
{
    word: "AVENGERS",
    wordAr: "المنتقمون",
    hints: ["Marvel superheroes", "Infinity Stones", "Thanos"],
    hintsAr: ["أبطال خارقون من مارفل", "حجارة اللانهاية", "ثانوس"],
    category: "movies",
    image: "images/movies/avengers.jpg"
},
{
    word: "BLADE RUNNER",
    wordAr: "بليد رانر",
    hints: ["Replicants", "Future Los Angeles", "Tears in rain"],
    hintsAr: ["المتماثلات", "لوس أنجلوس المستقبلية", "دموع في المطر"],
    category: "movies",
    image: "images/movies/blade_runner.jpg"
},
{
    word: "BACK TO THE FUTURE",
    wordAr: "العودة إلى المستقبل",
    hints: ["DeLorean time machine", "Great Scott!", "Marty McFly"],
    hintsAr: ["آلة الزمن دي لوريان", "يا إلهي!", "مارتي ماكفلاي"],
    category: "movies",
    image: "images/movies/back_to_future.jpg"
},

{
    word: "SAVING PRIVATE RYAN",
    wordAr: "إنقاذ الجندي رايان",
    hints: ["D-Day opening", "Captain Miller", "War brutality"],
    hintsAr: ["افتتاحية يوم النصر", "الكابتن ميلر", "وحشية الحرب"],
    category: "movies",
    image: "images/movies/saving_private_ryan.jpg"
},
{
    word: "THE SILENCE OF THE LAMBS",
    wordAr: "صمت الحملان",
    hints: ["Hannibal Lecter", "Clarice Starling", "Census taker"],
    hintsAr: ["هانيبال ليكتر", "كلاريس ستارلينغ", "عامل الإحصاء"],
    category: "movies",
    image: "images/movies/silence_lambs.jpg"
},

{
    word: "BLACK PANTHER",
    wordAr: "النمر الأسود",
    hints: ["Wakanda forever", "Vibranium", "Chadwick Boseman"],
    hintsAr: ["واكاندا للأبد", "الفبرانيوم", "تشادويك بوسمان"],
    category: "movies",
    image: "images/movies/black_panther.jpg"
},
{
    word: "MAD MAX: FURY ROAD",
    wordAr: "ماد ماكس: طريق الغضب",
    hints: ["Post-apocalyptic", "War rig", "Immortan Joe"],
    hintsAr: ["ما بعد نهاية العالم", "سيارة الحرب", "إمورتان جو"],
    category: "movies",
    image: "images/movies/mad_max.jpg"
},
{
    word: "WHIPLASH",
    wordAr: "وابل",
    hints: ["Not quite my tempo", "Jazz drummer", "Terence Fletcher"],
    hintsAr: ["ليس إيقاعي تماماً", "عازف طبول جاز", "تيرينس فليتشر"],
    category: "movies",
    image: "images/movies/whiplash.jpg"
},
{
    word: "1917",
    wordAr: "1917",
    hints: ["One-shot technique", "World War I", "Sam Mendes"],
    hintsAr: ["تقنية اللقطة الواحدة", "الحرب العالمية الأولى", "سام مينديز"],
    category: "movies",
    image: "images/movies/1917.jpg"
},
{
    word: "THE SOCIAL NETWORK",
    wordAr: "الشبكة الاجتماعية",
    hints: ["Facebook founding", "Mark Zuckerberg", "Aaron Sorkin script"],
    hintsAr: ["تأسيس فيسبوك", "مارك زوكربيرغ", "نص آرون سوركين"],
    category: "movies",
    image: "images/movies/social_network.jpg"
},
{
    word: "THE DEPARTED",
    wordAr: "الغادرون",
    hints: ["Boston undercover", "Rat in the police", "Martin Scorsese"],
    hintsAr: ["عميل سري بوسطن", "جاسوس في الشرطة", "مارتن سكورسيزي"],
    category: "movies",
    image: "images/movies/departed.jpg"
},
{
    word: "NO COUNTRY FOR OLD MEN",
    wordAr: "لا وطن للعجائز",
    hints: ["Anton Chigurh", "Coin toss", "Cormac McCarthy"],
    hintsAr: ["أنتون شيغير", "قرعة العملة", "كورماك مكارثي"],
    category: "movies",
    image: "images/movies/no_country.jpg"
},
{
    word: "THE REVENANT",
    wordAr: "المنتقم",
    hints: ["Bear attack", "Hugh Glass", "Leonardo DiCaprio"],
    hintsAr: ["هجوم دب", "هيو غلاس", "ليوناردو دي كابريو"],
    category: "movies",
    image: "images/movies/revenant.jpg"
},
{
    word: "GRAVITY",
    wordAr: "جاذبية",
    hints: ["Space survival", "Drifting astronaut", "Sandra Bullock"],
    hintsAr: ["بقاء في الفضاء", "رائد فضاء طافي", "ساندرا بولوك"],
    category: "movies",
    image: "images/movies/gravity.jpg"
},

{
    word: "MOONLIGHT",
    wordAr: "ضوء القمر",
    hints: ["Three-act structure", "Coming of age", "Oscar winner"],
    hintsAr: ["هيكل من ثلاثة فصول", "نضج", "فائز بجائزة الأوسكار"],
    category: "movies",
    image: "images/movies/moonlight.jpg"
},
{
    word: "THE GRAND BUDAPEST HOTEL",
    wordAr: "فندق بودابست الكبير",
    hints: ["Wes Anderson style", "M. Gustave", "Pink aesthetic"],
    hintsAr: ["أسلوب ويس أندرسون", "إم غوستاف", "جمالية وردية"],
    category: "movies",
    image: "images/movies/grand_budapest.jpg"
},
{
    word: "ARRIVAL",
    wordAr: "الوصول",
    hints: ["Linguistic sci-fi", "Heptapods", "Amy Adams"],
    hintsAr: ["خيال علمي لغوي", "سباعيات الأرجل", "إيمي آدامز"],
    category: "movies",
    image: "images/movies/arrival.jpg"
},
{
    word: "DUNE",
    wordAr: "كثيب",
    hints: ["Desert planet", "Spice Melange", "Frank Herbert adaptation"],
    hintsAr: ["كوكب صحراوي", "توابل ميلانج", "تعديل فرانك هربرت"],
    category: "movies",
    image: "images/movies/dune.jpg"
},
{
    word: "OPPENHEIMER",
    wordAr: "أوبنهايمر",
    hints: ["Atomic bomb", "Manhattan Project", "Christopher Nolan"],
    hintsAr: ["القنبلة الذرية", "مشروع مانهاتن", "كريستوفر نولان"],
    category: "movies",
    image: "images/movies/oppenheimer.jpg"
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
    wordAr: "الصحراء الكبرى",
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
    hintsAr: ["الكعبة", "وجهة الحج", "مدينة مقدسة"],
    category: "places",
    image: "🕋"
},
{
    word: "VENICE",
    wordAr: "البندقية",
    hints: ["Canals", "Gondolas", "Floating city"],
    hintsAr: ["قنوات مائية", "جندول", "مدينة عائمة"],
    category: "places",
    image: "🚤"
},
{
    word: "BARCELONA",
    wordAr: "برشلونة",
    hints: ["Gaudi architecture", "Mediterranean coast", "La Rambla"],
    hintsAr: ["عمارة غاودي", "ساحل البحر المتوسط", "لارامبلا"],
    category: "places",
    image: "🏖️"
},
{
    word: "RIO",
    wordAr: "ريو دي جانيرو",
    hints: ["Carnival", "Christ the Redeemer", "Copacabana"],
    hintsAr: ["كرنفال", "تمثال المسيح", "كوباكابانا"],
    category: "places",
    image: "🎉"
},
{
    word: "MALDIVES",
    wordAr: "المالديف",
    hints: ["Coral islands", "Luxury resorts", "Clear waters"],
    hintsAr: ["جزر مرجانية", "منتجعات فاخرة", "مياه صافية"],
    category: "places",
    image: "🏝️"
},
{
    word: "ANTARCTICA",
    wordAr: "القارة القطبية الجنوبية",
    hints: ["Frozen continent", "Penguins", "Extreme cold"],
    hintsAr: ["قارة متجمدة", "بطاريق", "برد قارس"],
    category: "places",
    image: "🐧"
},
{
    word: "MACHU PICCHU",
    wordAr: "ماتشو بيتشو",
    hints: ["Inca ruins", "Mountain citadel", "Peru"],
    hintsAr: ["آثار الإنكا", "مدينة جبلية", "بيرو"],
    category: "places",
    image: "🗿"
},
{
    word: "PETRA",
    wordAr: "البتراء",
    hints: ["Rose city", "Rock-cut architecture", "Jordan"],
    hintsAr: ["المدينة الوردية", "منحوتة في الصخر", "الأردن"],
    category: "places",
    image: "⛰️"
},
{
    word: "GREAT WALL",
    wordAr: "سور الصين العظيم",
    hints: ["Ancient fortification", "Visible from space myth", "China"],
    hintsAr: ["تحصين قديم", "أسطورة الرؤية من الفضاء", "الصين"],
    category: "places",
    image: "🧱"
},
{
    word: "MOUNT FUJI",
    wordAr: "جبل فوجي",
    hints: ["Volcano", "Sacred mountain", "Japan"],
    hintsAr: ["بركان", "جبل مقدس", "اليابان"],
    category: "places",
    image: "🗻"
},
{
    word: "BALI",
    wordAr: "بالي",
    hints: ["Island paradise", "Rice terraces", "Temples"],
    hintsAr: ["جزيرة استوائية", "مدرجات أرز", "معابد"],
    category: "places",
    image: "🌺"
},
{
    word: "ATHENS",
    wordAr: "أثينا",
    hints: ["Acropolis", "Ancient Greece", "Philosophy"],
    hintsAr: ["الأكروبوليس", "اليونان القديمة", "الفلسفة"],
    category: "places",
    image: "🏺"
},
{
    word: "MOSCOW",
    wordAr: "موسكو",
    hints: ["Red Square", "Kremlin", "Russian capital"],
    hintsAr: ["الساحة الحمراء", "الكرملين", "عاصمة روسيا"],
    category: "places",
    image: "🎠"
},
{
    word: "ISTANBUL",
    wordAr: "إسطنبول",
    hints: ["Two continents", "Hagia Sophia", "Bosphorus"],
    hintsAr: ["قارتان", "آيا صوفيا", "مضيق البوسفور"],
    category: "places",
    image: "🌉"
},
{
    word: "TAJ MAHAL",
    wordAr: "تاج محل",
    hints: ["Marble mausoleum", "Symbol of love", "India"],
    hintsAr: ["ضريح رخامي", "رمز الحب", "الهند"],
    category: "places",
    image: "🕌"
},
{
    word: "SANTORINI",
    wordAr: "سانتوريني",
    hints: ["Greek island", "White buildings", "Blue domes"],
    hintsAr: ["جزيرة يونانية", "مباني بيضاء", "قباب زرقاء"],
    category: "places",
    image: "🏘️"
},
{
    word: "GRAND CANYON",
    wordAr: "غراند كانيون",
    hints: ["Natural wonder", "Arizona", "Colorado River"],
    hintsAr: ["عجيبة طبيعية", "أريزونا", "نهر كولورادو"],
    category: "places",
    image: "🌄"
},
{
    word: "YELLOWSTONE",
    wordAr: "يلوستون",
    hints: ["National park", "Geysers", "Old Faithful"],
    hintsAr: ["متنزه وطني", "ينابيع حارة", "أولد فيثفول"],
    category: "places",
    image: "♨️"
},
{
    word: "AMSTERDAM",
    wordAr: "أمستردام",
    hints: ["Canals", "Bicycles", "Tulips"],
    hintsAr: ["قنوات مائية", "دراجات هوائية", "توليب"],
    category: "places",
    image: "🚲"
},
{
    word: "KYOTO",
    wordAr: "كيوتو",
    hints: ["Ancient capital", "Geisha district", "Zen gardens"],
    hintsAr: ["العاصمة القديمة", "حي الغيشا", "حدائق زن"],
    category: "places",
    image: "🎎"
},
{
    word: "CAPE TOWN",
    wordAr: "كيب تاون",
    hints: ["Table Mountain", "Cape of Good Hope", "South Africa"],
    hintsAr: ["جبل الطاولة", "رأس الرجاء الصالح", "جنوب أفريقيا"],
    category: "places",
    image: "⛰️"
},
{
    word: "HONG KONG",
    wordAr: "هونغ كونغ",
    hints: ["Skyscrapers", "Victoria Harbour", "Financial hub"],
    hintsAr: ["ناطحات سحاب", "ميناء فيكتوريا", "مركز مالي"],
    category: "places",
    image: "🌃"
},
{
    word: "PRAGUE",
    wordAr: "براغ",
    hints: ["Charles Bridge", "Old Town Square", "Gothic architecture"],
    hintsAr: ["جسر تشارلز", "ساحة البلدة القديمة", "عمارة قوطية"],
    category: "places",
    image: "🌉"
},
{
    word: "BANGKOK",
    wordAr: "بانكوك",
    hints: ["Floating markets", "Buddhist temples", "Street food"],
    hintsAr: ["أسواق عائمة", "معابد بوذية", "طعام الشارع"],
    category: "places",
    image: "🛶"
},
{
    word: "VATICAN",
    wordAr: "الفاتيكان",
    hints: ["Smallest country", "Sistine Chapel", "Catholic Church"],
    hintsAr: ["أصغر دولة", "كنيسة سيستينا", "الكنيسة الكاثوليكية"],
    category: "places",
    image: "⛪"
},
{
    word: "STONEHENGE",
    wordAr: "ستونهنج",
    hints: ["Prehistoric monument", "Stone circles", "England"],
    hintsAr: ["نصب ما قبل التاريخ", "دوائر حجرية", "إنجلترا"],
    category: "places",
    image: "🪨"
},
{
    word: "MARRAKESH",
    wordAr: "مراكش",
    hints: ["Red city", "Souk markets", "Morocco"],
    hintsAr: ["المدينة الحمراء", "أسواق السوق", "المغرب"],
    category: "places",
    image: "🕌"
},

    // ===================== Objects =====================
   // ===================== Objects (Large Library) =====================
{
    word: "GUITAR",
    wordAr: "جيتار",
    hints: ["Six strings", "Rock and roll", "Strumming sound"],
    hintsAr: ["ستة أوتار", "موسيقى الروك", "صوت العزف"],
    category: "objects",
    image: "🎸"
},
{
    word: "WATCH",
    wordAr: "ساعة",
    hints: ["Time on wrist", "Ticking sound", "Analog or digital"],
    hintsAr: ["الوقت على المعصم", "صوت التكتكة", "عقارب أو رقمية"],
    category: "objects",
    image: "⌚"
},
{
    word: "CAMERA",
    wordAr: "كاميرا",
    hints: ["Say cheese!", "Capture moments", "Flash pop"],
    hintsAr: ["قولوا شيز!", "التقاط اللحظات", "فلاش يضيء"],
    category: "objects",
    image: "📷"
},
{
    word: "BOOK",
    wordAr: "كتاب",
    hints: ["Turn pages", "Library treasure", "Bedtime story"],
    hintsAr: ["قلب الصفحات", "كنز المكتبة", "قصة قبل النوم"],
    category: "objects",
    image: "📚"
},
{
    word: "PHONE",
    wordAr: "هاتف",
    hints: ["Pocket computer", "Selfie machine", "Ringtone sounds"],
    hintsAr: ["كمبيوتر جيب", "آلة السيلفي", "أصوات النغمات"],
    category: "objects",
    image: "📱"
},
{
    word: "KEY",
    wordAr: "مفتاح",
    hints: ["Opens locks", "Jingle jangle", "Lost often"],
    hintsAr: ["يفتح الأقفال", "صوت رنين", "يضيع كثيراً"],
    category: "objects",
    image: "🔑"
},
{
    word: "UMBRELLA",
    wordAr: "مظلة",
    hints: ["Rain protection", "Wind turns inside out", "Mary Poppins"],
    hintsAr: ["حماية من المطر", "الرياح تقلبه", "ماري بوبينز"],
    category: "objects",
    image: "☂️"
},
{
    word: "GLASSES",
    wordAr: "نظارات",
    hints: ["Four eyes", "See clearly", "Fog up"],
    hintsAr: ["أربع عيون", "انظر بوضوح", "تعتيم بالبخار"],
    category: "objects",
    image: "👓"
},
{
    word: "CHAIR",
    wordAr: "كرسي",
    hints: ["Take a seat", "Musical game", "Rocking version"],
    hintsAr: ["اجلس", "لعبة الكراسي الموسيقية", "نسخة هزاز"],
    category: "objects",
    image: "🪑"
},
{
    word: "LAMP",
    wordAr: "مصباح",
    hints: ["Light switch", "Bedside reading", "Genie inside"],
    hintsAr: ["مفتاح الضوء", "قراءة بجانب السرير", "جني بالداخل"],
    category: "objects",
    image: "💡"
},
{
    word: "BICYCLE",
    wordAr: "دراجة",
    hints: ["Two wheels", "Training wheels", "Ring the bell"],
    hintsAr: ["عجلتان", "عجلات التدريب", "دق الجرس"],
    category: "objects",
    image: "🚲"
},
{
    word: "COMPUTER",
    wordAr: "حاسوب",
    hints: ["Desktop setup", "Keyboard clicks", "Screen glow"],
    hintsAr: ["إعداد مكتبي", "نقرات لوحة المفاتيح", "توهج الشاشة"],
    category: "objects",
    image: "💻"
},
{
    word: "REMOTE",
    wordAr: "ريموت",
    hints: ["Couch control", "Lost in cushions", "Volume buttons"],
    hintsAr: ["تحكم الأريكة", "مفقود في الوسائد", "أزرار الصوت"],
    category: "objects",
    image: "📺"
},
{
    word: "BACKPACK",
    wordAr: "حقيبة ظهر",
    hints: ["School carry", "Zipper compartments", "Shoulder straps"],
    hintsAr: ["حمل المدرسة", "أقسام بالسحاب", "أحزمة الكتف"],
    category: "objects",
    image: "🎒"
},
{
    word: "WALLET",
    wordAr: "محفظة",
    hints: ["Money holder", "Credit cards", "Leather or fabric"],
    hintsAr: ["حامل النقود", "بطاقات ائتمان", "جلد أو قماش"],
    category: "objects",
    image: "👛"
},
{
    word: "SUNGLASSES",
    wordAr: "نظارات شمسية",
    hints: ["Cool shades", "Sun protection", "Celebrity style"],
    hintsAr: ["نظارات رائعة", "حماية من الشمس", "أسلوب المشاهير"],
    category: "objects",
    image: "🕶️"
},
{
    word: "CALCULATOR",
    wordAr: "آلة حاسبة",
    hints: ["Math helper", "Button pressing", "Solar powered"],
    hintsAr: ["مساعد الرياضيات", "ضغط الأزرار", "يعمل بالطاقة الشمسية"],
    category: "objects",
    image: "🧮"
},
{
    word: "MICROSCOPE",
    wordAr: "ميكروسكوب",
    hints: ["Small things big", "Science class", "Slide viewer"],
    hintsAr: ["أشياء صغيرة كبيرة", "صف العلوم", "عارض الشرائح"],
    category: "objects",
    image: "🔬"
},
{
    word: "TELESCOPE",
    wordAr: "تلسكوب",
    hints: ["Star gazing", "Tripod stand", "Moon viewing"],
    hintsAr: ["مراقبة النجوم", "حامل ثلاثي القوائم", "رؤية القمر"],
    category: "objects",
    image: "🔭"
},
{
    word: "PEN",
    wordAr: "قلم",
    hints: ["Ink flows", "Click sound", "Writing tool"],
    hintsAr: ["تدفق الحبر", "صوت النقر", "أداة الكتابة"],
    category: "objects",
    image: "🖊️"
},
{
    word: "PENCIL",
    wordAr: "قلم رصاص",
    hints: ["Eraser end", "Sharp point", "Drawing tool"],
    hintsAr: ["نهاية ممحاة", "طرف حاد", "أداة الرسم"],
    category: "objects",
    image: "✏️"
},
{
    word: "SCISSORS",
    wordAr: "مقص",
    hints: ["Cutting tool", "Blade crossing", "Paper craft"],
    hintsAr: ["أداة القص", "تقاطع الشفرات", "الحرف الورقية"],
    category: "objects",
    image: "✂️"
},
{
    word: "RULER",
    wordAr: "مسطرة",
    hints: ["Straight edge", "Measuring inches", "School supply"],
    hintsAr: ["حافة مستقيمة", "قياس البوصات", "مستلزمات المدرسة"],
    category: "objects",
    image: "📏"
},
{
    word: "BALLOON",
    wordAr: "بالون",
    hints: ["Birthday party", "Helium floats", "Pop sound"],
    hintsAr: ["حفلة عيد ميلاد", "يطفو بالهيليوم", "صوت فرقعة"],
    category: "objects",
    image: "🎈"
},
{
    word: "KITE",
    wordAr: "طائرة ورقية",
    hints: ["Wind powered", "String control", "Sky dancer"],
    hintsAr: ["تعمل بالرياح", "تحكم بالخيط", "راقصة السماء"],
    category: "objects",
    image: "🪁"
},
{
    word: "TEDDY BEAR",
    wordAr: "دبدوب",
    hints: ["Cuddly toy", "Childhood friend", "Button eyes"],
    hintsAr: ["لعبة محشوة", "صديق الطفولة", "عيون زرية"],
    category: "objects",
    image: "🧸"
},
{
    word: "DOLL",
    wordAr: "دمية",
    hints: ["Toy person", "Brushable hair", "Dress up"],
    hintsAr: ["لعبة شخص", "شعر قابل للتمشيط", "تغيير الملابس"],
    category: "objects",
    image: "👧"
},
{
    word: "LEGO",
    wordAr: "ليغو",
    hints: ["Colorful bricks", "Stepping hazard", "Creative building"],
    hintsAr: ["قطع ملونة", "خطر الدوس", "بناء إبداعي"],
    category: "objects",
    image: "🧱"
},
{
    word: "PUZZLE",
    wordAr: "لغز",
    hints: ["Jigsaw pieces", "Table activity", "Complete picture"],
    hintsAr: ["قطع بازل", "نشاط الطاولة", "صورة مكتملة"],
    category: "objects",
    image: "🧩"
},
{
    word: "YO-YO",
    wordAr: "يويو",
    hints: ["Up and down", "String toy", "Tricks performer"],
    hintsAr: ["أعلى وأسفل", "لعبة بخيط", "مؤدي الحيل"],
    category: "objects",
    image: "🪀"
},
{
    word: "DICE",
    wordAr: "نرد",
    hints: ["Six sides", "Board games", "Rolling chance"],
    hintsAr: ["ستة جوانب", "ألعاب الطاولة", "فرصة التدحرج"],
    category: "objects",
    image: "🎲"
},
{
    word: "CHESS",
    wordAr: "شطرنج",
    hints: ["Black and white", "King and queen", "Strategic game"],
    hintsAr: ["أسود وأبيض", "ملك وملكة", "لعبة استراتيجية"],
    category: "objects",
    image: "♟️"
},
{
    word: "DOMINO",
    wordAr: "الدومينو",
    hints: ["Dotted tiles", "Line them up", "Chain reaction"],
    hintsAr: ["بلاط منقط", "اصطفافها", "تفاعل متسلسل"],
    category: "objects",
    image: "🀄"
},
{
    word: "MICROPHONE",
    wordAr: "ميكروفون",
    hints: ["Karaoke night", "Voice amplifier", "Stage performer"],
    hintsAr: ["ليلة الكاريوكي", "مضخم الصوت", "مؤدي على المسرح"],
    category: "objects",
    image: "🎤"
},
{
    word: "HEADPHONES",
    wordAr: "سماعات رأس",
    hints: ["Music private", "Noise canceling", "Over-ear style"],
    hintsAr: ["موسيقى خاصة", "إلغاء الضوضاء", "نمط فوق الأذن"],
    category: "objects",
    image: "🎧"
},
{
    word: "SPEAKER",
    wordAr: "مكبر صوت",
    hints: ["Sound box", "Volume knob", "Party music"],
    hintsAr: ["صندوق صوت", "مقبض الصوت", "موسيقى الحفلات"],
    category: "objects",
    image: "🔊"
},
{
    word: "DRUM",
    wordAr: "طبل",
    hints: ["Beat rhythm", "Sticks needed", "Band instrument"],
    hintsAr: ["إيقاع النبض", "يحتاج إلى عصي", "آلة موسيقية في الفرقة"],
    category: "objects",
    image: "🥁"
},
{
    word: "TRUMPET",
    wordAr: "بوق",
    hints: ["Brass instrument", "Jazz sound", "Three valves"],
    hintsAr: ["آلة نحاسية", "صوت الجاز", "ثلاثة صمامات"],
    category: "objects",
    image: "🎺"
},
{
    word: "VIOLIN",
    wordAr: "كمان",
    hints: ["String instrument", "Bow hair", "Classical music"],
    hintsAr: ["آلة وترية", "شعر القوس", "موسيقى كلاسيكية"],
    category: "objects",
    image: "🎻"
},
{
    word: "PIANO",
    wordAr: "بيانو",
    hints: ["Black and white keys", "Grand style", "Music lessons"],
    hintsAr: ["مفاتيح سوداء وبيضاء", "نمط جراند", "دروس الموسيقى"],
    category: "objects",
    image: "🎹"
},
{
    word: "HARMONICA",
    wordAr: "هارمونيكا",
    hints: ["Pocket instrument", "Blow and draw", "Blues sound"],
    hintsAr: ["آلة جيب", "نفخ وسحب", "صوت البلوز"],
    category: "objects",
    image: "🎵"
},
{
    word: "FLASHLIGHT",
    wordAr: "مصباح يدوي",
    hints: ["Beam of light", "Battery powered", "Dark exploration"],
    hintsAr: ["حزمة ضوئية", "يعمل بالبطارية", "استكشاف الظلام"],
    category: "objects",
    image: "🔦"
},
{
    word: "BATTERY",
    wordAr: "بطارية",
    hints: ["Power source", "Positive negative", "Rechargeable type"],
    hintsAr: ["مصدر طاقة", "موجب سالب", "نوع قابل للشحن"],
    category: "objects",
    image: "🔋"
},
{
    word: "MAGNIFYING GLASS",
    wordAr: "عدسة مكبرة",
    hints: ["Sherlock Holmes", "Small details", "Sun focusing"],
    hintsAr: ["شارلوك هولمز", "تفاصيل صغيرة", "تركيز الشمس"],
    category: "objects",
    image: "🔍"
},
{
    word: "LOCK",
    wordAr: "قفل",
    hints: ["Security device", "Combination numbers", "Padlock style"],
    hintsAr: ["جهاز أمني", "أرقام التركيبة", "نمط القفل المعلق"],
    category: "objects",
    image: "🔒"
},
{
    word: "BELL",
    wordAr: "جرس",
    hints: ["Ring sound", "School warning", "Service desk"],
    hintsAr: ["صوت الرنين", "تحذير المدرسة", "مكتب الخدمة"],
    category: "objects",
    image: "🔔"
},
{
    word: "ALARM CLOCK",
    wordAr: "منبه",
    hints: ["Morning wake-up", "Snooze button", "Loud ringing"],
    hintsAr: ["استيقاظ الصباح", "زر الغفوة", "رنين عالي"],
    category: "objects",
    image: "⏰"
},
{
    word: "HOURGLASS",
    wordAr: "ساعة رملية",
    hints: ["Time running out", "Sand falls", "Game timer"],
    hintsAr: ["الوقت ينفد", "سقوط الرمل", "مؤقت اللعبة"],
    category: "objects",
    image: "⏳"
},
{
    word: "THERMOMETER",
    wordAr: "ميزان حرارة",
    hints: ["Temperature check", "Mercury rises", "Fever detector"],
    hintsAr: ["فحص درجة الحرارة", "ارتفاع الزئبق", "كاشف الحمى"],
    category: "objects",
    image: "🌡️"
},
{
    word: "COMPASS",
    wordAr: "بوصلة",
    hints: ["North pointer", "Outdoor navigation", "Magnetic needle"],
    hintsAr: ["مؤشر الشمال", "ملاحة خارجية", "إبرة مغناطيسية"],
    category: "objects",
    image: "🧭"
},
{
    word: "MAP",
    wordAr: "خريطة",
    hints: ["Road guide", "Treasure location", "Foldable paper"],
    hintsAr: ["دليل الطريق", "موقع الكنز", "ورق قابل للطي"],
    category: "objects",
    image: "🗺️"
},
{
    word: "GLOBE",
    wordAr: "كرة أرضية",
    hints: ["World sphere", "Spin around", "Geography learning"],
    hintsAr: ["كرة العالم", "تدور حول نفسها", "تعلم الجغرافيا"],
    category: "objects",
    image: "🌍"
},
{
    word: "BINOCULARS",
    wordAr: "منظار",
    hints: ["Bird watching", "Two lenses", "Theater use"],
    hintsAr: ["مراقبة الطيور", "عدستان", "استخدام المسرح"],
    category: "objects",
    image: "👀"
},
{
    word: "CAMERA FILM",
    wordAr: "فيلم كاميرا",
    hints: ["Old school photos", "Develop needed", "Roll of memories"],
    hintsAr: ["صور قديمة", "يحتاج تطوير", "لفة ذكريات"],
    category: "objects",
    image: "🎞️"
},
{
    word: "VIDEO TAPE",
    wordAr: "شريط فيديو",
    hints: ["Rewind needed", "VCR player", "Nostalgic media"],
    hintsAr: ["يحتاج إعادة لف", "مشغل في سي آر", "وسائط حنين"],
    category: "objects",
    image: "📼"
},
{
    word: "CD",
    wordAr: "سي دي",
    hints: ["Shiny disc", "Music storage", "Skip prone"],
    hintsAr: ["قرص لامع", "تخزين الموسيقى", "عرضة للتخطي"],
    category: "objects",
    image: "💿"
},
{
    word: "FLOPPY DISK",
    wordAr: "قرص مرن",
    hints: ["Save icon", "Old storage", "Click sound"],
    hintsAr: ["أيقونة الحفظ", "تخزين قديم", "صوت النقر"],
    category: "objects",
    image: "💾"
},
{
    word: "PRINTER",
    wordAr: "طابعة",
    hints: ["Paper out", "Ink cartridges", "Jam problem"],
    hintsAr: ["انتهاء الورق", "خراطيش الحبر", "مشكلة التعطل"],
    category: "objects",
    image: "🖨️"
},
{
    word: "SCANNER",
    wordAr: "ماسح ضوئي",
    hints: ["Document copy", "Flatbed style", "Digitization"],
    hintsAr: ["نسخة المستند", "نمط المسطح", "رقمنة"],
    category: "objects",
    image: "📄"
},
{
    word: "WEBCAM",
    wordAr: "كاميرا ويب",
    hints: ["Video calls", "Computer mounted", "Red light on"],
    hintsAr: ["مكالمات الفيديو", "مثبت على الحاسوب", "الضوء الأحمر يعمل"],
    category: "objects",
    image: "📹"
},
{
    word: "ROUTER",
    wordAr: "موجه",
    hints: ["WiFi signal", "Blinking lights", "Internet magic"],
    hintsAr: ["إشارة واي فاي", "أضواء وامضة", "سحر الإنترنت"],
    category: "objects",
    image: "📡"
},
{
    word: "HARD DRIVE",
    wordAr: "قرص صلب",
    hints: ["Data storage", "Spinning disk", "Click of death"],
    hintsAr: ["تخزين البيانات", "قرص دوار", "نقر الموت"],
    category: "objects",
    image: "💽"
},
{
    word: "USB",
    wordAr: "يو إس بي",
    hints: ["Flash drive", "Plug and play", "Tiny storage"],
    hintsAr: ["محرك فلاش", "شغل وشغّل", "تخزين صغير"],
    category: "objects",
    image: "💾"
},
{
    word: "MOUSE",
    wordAr: "ماوس",
    hints: ["Computer pointer", "Left click", "Scroll wheel"],
    hintsAr: ["مؤشر الحاسوب", "نقر يسار", "عجلة التمرير"],
    category: "objects",
    image: "🖱️"
},
{
    word: "KEYBOARD",
    wordAr: "لوحة مفاتيح",
    hints: ["QWERTY layout", "Clickety clack", "Backspace key"],
    hintsAr: ["تخطيط كويرتي", "نقرات متتالية", "مفتاح مسافة للخلف"],
    category: "objects",
    image: "⌨️"
},
{
    word: "MONITOR",
    wordAr: "شاشة",
    hints: ["Display screen", "HD resolution", "Power button"],
    hintsAr: ["شاشة العرض", "دقة عالية", "زر الطاقة"],
    category: "objects",
    image: "🖥️"
},
{
    word: "PROJECTOR",
    wordAr: "عرض",
    hints: ["Movie nights", "Focus knob", "Big screen image"],
    hintsAr: ["ليالي الأفلام", "مقبض التركيز", "صورة شاشة كبيرة"],
    category: "objects",
    image: "📽️"
},
{
    word: "VR HEADSET",
    wordAr: "خوذة واقع افتراضي",
    hints: ["Virtual world", "Head mounted", "360 view"],
    hintsAr: ["عالم افتراضي", "مثبت على الرأس", "رؤية 360 درجة"],
    category: "objects",
    image: "🥽"
},
{
    word: "GAMEPAD",
    wordAr: "جهاز تحكم ألعاب",
    hints: ["Joystick control", "Button mashing", "Console companion"],
    hintsAr: ["تحكم عصا التحكم", "ضغط الأزرار", "رفيق الكونسول"],
    category: "objects",
    image: "🎮"
},
{
    word: "JOYSTICK",
    wordAr: "عصا تحكم",
    hints: ["Arcade style", "Flight control", "Retro gaming"],
    hintsAr: ["نمط الأركيد", "تحكم الطيران", "ألعاب رجعية"],
    category: "objects",
    image: "🕹️"
},
{
    word: "CASHLESS",
    wordAr: "دفع نقدي",
    hints: ["Money payment", "Bill acceptor", "Change return"],
    hintsAr: ["دفع المال", "قابلية فواتير", "إعادة الفكة"],
    category: "objects",
    image: "🏧"
},
{
    word: "VENDING MACHINE",
    wordAr: "آلة بيع",
    hints: ["Snack dispenser", "Coin slot", "Spiral delivery"],
    hintsAr: ["موزع الوجبات الخفيفة", "فتحة العملات", "توصيل لولبي"],
    category: "objects",
    image: "🥤"
},

    // ===================== Celebrities =====================
    
    {
        word: "IDRIS ELBA",
        wordAr: "إدريس إلبا",
        hints: ["British actor who played Nelson Mandela", "Starred in 'Luther' TV series", "Time magazine's 100 most influential people"],
        hintsAr: ["ممثل بريطاني جسد شخصية نيلسون مانديلا", "بطَل مسلسل 'لوثر'", "ضمن قائمة مجلة تايم لأكثر 100 شخص تأثيراً"],
        category: "celebrities",
        image: "images/celebrities/idris_elba.jpg"
    },
    {
        word: "MAHER ZAIN",
        wordAr: "ماهر زين",
        hints: ["Swedish-Lebanese Islamic singer", "His song 'Ya Nabi Salam Alayka' went viral", "Has over 10 million album sales worldwide"],
        hintsAr: ["مغني إسلامي سويدي-لبناني", "أغنيته 'يا نبي سلام عليك' انتشرت على نطاق واسع", "بيع من ألبوماته أكثر من 10 ملايين نسخة عالمياً"],
        category: "celebrities",
        image: "images/celebrities/maher_zain.jpg"
    },
    {
        word: "MOHAMMED ASSAF",
        wordAr: "محمد عساف",
        hints: ["Won Arab Idol season 2 in 2013", "Appointed UNRWA Regional Youth Ambassador", "Performed for Palestinian refugees"],
        hintsAr: ["فاز بالموسم الثاني من أراب آيدول عام 2013", "عُين سفيراً إقليمياً للشباب في الأونروا", "غنى للاجئين الفلسطينيين"],
        category: "celebrities",
        image: "images/celebrities/mohammed_assaf.jpg"
    },
    {
        word: "HAMDAN MOHAMMED",
        wordAr: "حمدان محمد",
        hints: ["Crown Prince of Dubai", "Known as Fazza the poet", "Deputy ruler and philanthropist"],
        hintsAr: ["ولي عهد دبي", "معروف باسم الشاعر فزاع", "نائب الحاكم وراعي أعمال خيرية"],
        category: "celebrities",
        image: "images/celebrities/hamdan_mohammed.jpg"
    },
  
    {
        word: "AHMED HELMY",
        wordAr: "أحمد حلمي",
        hints: ["Egyptian actor and UNICEF Goodwill Ambassador", "Known for family-friendly comedies", "Advocate for children's education"],
        hintsAr: ["ممثل مصري وسفير النوايا الحسنة لليونيسف", "معروف بالكوميديا العائلية النظيفة", "مدافع عن تعليم الأطفال"],
        category: "celebrities",
        image: "images/celebrities/ahmed_helmy.jpg"
    },
    {
        word: "TARIQ RAMADAN",
        wordAr: "طارق رمضان",
        hints: ["Swiss Muslim academic and philosopher", "Grandson of Hassan al-Banna", "Professor of Contemporary Islamic Studies at Oxford"],
        hintsAr: ["أكاديمي وفيلسوف مسلم سويسري", "حفيد حسن البنا", "أستاذ الدراسات الإسلامية المعاصرة في أكسفورد"],
        category: "celebrities",
        image: "images/celebrities/tariq_ramadan.jpg"
    },
   
  
    {
        word: "KEANU REEVES",
        wordAr: "كيانو ريفز",
        hints: ["Actor who played Neo in 'The Matrix'", "Founded charity for cancer research", "Known for riding subway like regular person"],
        hintsAr: ["ممثل جسد شخصية نيو في 'المصفوفة'", "أسس جمعية خيرية لأبحاث السرطان","معروف بركوب المترو مثل الشخص العادي"],
        category: "celebrities",
        image: "images/celebrities/keanu_reeves.jpg"
    },
    //
    
    {
        word: "SHEIKH ABDULRAHMAN AL-SUDAIS",
        wordAr: "الشيخ عبد الرحمن السديس",
        hints: ["Imam of Masjid al-Haram", "Known for emotional Quran recitations", "Led Taraweeh prayers at the Kaaba"],
        hintsAr: ["إمام الحرم المكي", "معروف بتلاوات القرآن المؤثرة", "أم صلاة التراويح بالكعبة"],
        category: "celebrities",
        image: "images/celebrities/alsudais.jpg"
    },
    {
        word: "SHEIKH MISHARY AL-AFASY",
        wordAr: "الشيخ مشاري العفاسي",
        hints: ["Kuwaiti Quran reciter", "Voice of Quran radio stations", "Millions follow his recitations"],
        hintsAr: ["قارئ قرآن كويتي", "صوت إذاعات القرآن", "ملايين يتابعون تلاواته"],
        category: "celebrities",
        image: "images/celebrities/afasy.jpg"
    },
    {
        word: "SALIH AL-JAAFARAOUI",
        wordAr: "صالح الجعفراوي",
        hints: ["Palestinian journalist killed in 2024", "Covered Gaza conflict", "Worked for Al Jazeera"],
        hintsAr: ["صحفي فلسطيني استشهد 2024", "غطى حرب غزة", "عمل لقناة الجزيرة"],
        category: "celebrities",
        image: "images/celebrities/salah_aljaafar.jpg"
    },
    {
        word: "ADEL EMAM",
        wordAr: "عادل إمام",
        hints: ["Egyptian comedy legend", "Starred in 'The Yacoubian Building'", "UN Goodwill Ambassador"],
        hintsAr: ["أسطورة الكوميديا المصرية", "بطَل فيلم 'عمارة يعقوبيان'", "سفير أممي"],
        category: "celebrities",
        image: "images/celebrities/adel_emam.jpg"
    },
 
    {
        word: "JIM CARREY",
        wordAr: "جيم كاري",
        hints: ["Canadian comedy actor", "Known for 'The Mask'", "Famous facial expressions"],
        hintsAr: ["ممثل كوميدي كندي", "معروف بفيلم 'القناع'", "تعبيرات وجهه شهيرة"],
        category: "celebrities",
        image: "images/celebrities/jim_carrey.jpg"
    },
    {
        word: "JACKIE CHAN",
        wordAr: "جاكي شان",
        hints: ["Hong Kong action star", "Does his own stunts", "UNICEF Goodwill Ambassador"],
        hintsAr: ["نجم الأكشن من هونغ كونغ", "يؤدي مشاهد الخطورة بنفسه", "سفير يونيسف"],
        category: "celebrities",
        image: "images/celebrities/jackie_chan.jpg"
    },
    {
        word: "MORGAN FREEMAN",
        wordAr: "مورجان فريمان",
        hints: ["American actor with deep voice", "Narrated many documentaries", "Oscar winner at age 67"],
        hintsAr: ["ممثل أمريكي بصوت عميق", "روى العديد من الوثائقيات", "فاز بأوسكار بعمر 67"],
        category: "celebrities",
        image: "images/celebrities/morgan_freeman.jpg"
    },
  
  

    // ===================== Flags =====================
,{
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
{
    word: "BASEBALL",
    wordAr: "بيسبول",
    hints: ["Nine innings", "Home run", "Batter and pitcher"],
    hintsAr: ["تسع أشواط", "ضربة منزلية", "ضارب الكرة وراميها"],
    category: "sports",
    image: "⚾"
},
{
    word: "RUGBY",
    wordAr: "رجبي",
    hints: ["Oval ball", "Try scoring", "Physical contact"],
    hintsAr: ["كرة بيضاوية", "تسجيل المحاولة", "اتصال جسدي"],
    category: "sports",
    image: "🏉"
},
{
    word: "TABLE TENNIS",
    wordAr: "تنس الطاولة",
    hints: ["Ping pong", "Small paddle", "Fast rallies"],
    hintsAr: ["بينغ بونغ", "مضرب صغير", "تبادلات سريعة"],
    category: "sports",
    image: "🏓"
},
{
    word: "BADMINTON",
    wordAr: "ريشة الطائر",
    hints: ["Shuttlecock", "Light racket", "Net game"],
    hintsAr: ["الريشة", "مضرب خفيف", "لعبة شبكة"],
    category: "sports",
    image: "🏸"
},
{
    word: "HOCKEY",
    wordAr: "هوكي",
    hints: ["Ice surface", "Puck shooting", "Stick handling"],
    hintsAr: ["سطح جليدي", "رمي القرص", "تحريك المضرب"],
    category: "sports",
    image: "🏒"
},
{
    word: "GYMNASTICS",
    wordAr: "جمباز",
    hints: ["Balance beam", "Floor routine", "Olympic rings"],
    hintsAr: ["عارضة التوازن", "تمرين الأرضية", "حلقات أولمبية"],
    category: "sports",
    image: "🤸"
},
{
    word: "MARTIAL ARTS",
    wordAr: "فنون قتالية",
    hints: ["Karate belt", "Judo throws", "Kung fu moves"],
    hintsAr: ["حزام الكاراتيه", "رميات الجودو", "حركات الكونغ فو"],
    category: "sports",
    image: "🥋"
},
{
    word: "CYCLING",
    wordAr: "سباق الدراجات",
    hints: ["Tour de France", "Peloton formation", "Mountain stages"],
    hintsAr: ["طواف فرنسا", "تشكيل البلوتون", "مراحل الجبل"],
    category: "sports",
    image: "🚴"
},
{
    word: "ATHLETICS",
    wordAr: "ألعاب القوى",
    hints: ["Track and field", "Sprint races", "Long jump"],
    hintsAr: ["المضمار والميدان", "سباقات العدو", "القفز الطويل"],
    category: "sports",
    image: "🏃"
},
{
    word: "WEIGHTLIFTING",
    wordAr: "رفع الأثقال",
    hints: ["Snatch lift", "Clean and jerk", "Heavy barbells"],
    hintsAr: ["رفعة الخطف", "النتر والدفع", "أثقال ثقيلة"],
    category: "sports",
    image: "🏋️"
},
{
    word: "SURFING",
    wordAr: "ركوب الأمواج",
    hints: ["Ocean waves", "Surfboard", "Pipeline break"],
    hintsAr: ["أمواج المحيط", "لوح ركوب الأمواج", "كسر الأنبوب"],
    category: "sports",
    image: "🏄"
},
{
    word: "SNOWBOARDING",
    wordAr: "التزلج على اللوح",
    hints: ["Halfpipe tricks", "Mountain slopes", "Winter X Games"],
    hintsAr: ["حركات النصف الأنبوب", "منحدرات الجبل", "ألعاب الشتاء X"],
    category: "sports",
    image: "🏂"
},
{
    word: "SKATEBOARDING",
    wordAr: "التزلج على الألواح",
    hints: ["Ollie trick", "Skatepark rails", "Street style"],
    hintsAr: ["حركة أولي", "قضبان ملعب التزلج", "نمط الشارع"],
    category: "sports",
    image: "🛹"
},
{
    word: "CLIMBING",
    wordAr: "تسلق",
    hints: ["Rock faces", "Carabiner clips", "Bouldering problems"],
    hintsAr: ["وجوه الصخور", "مشابك الكارابينر", "مشاكل التسلق على الصخور"],
    category: "sports",
    image: "🧗"
},
{
    word: "ARCHERY",
    wordAr: "رماية",
    hints: ["Bow and arrow", "Bullseye target", "Robin Hood legend"],
    hintsAr: ["قوس وسهم", "هدف مركز الهدف", "أسطورة روبن هود"],
    category: "sports",
    image: "🏹"
},
{
    word: "FENCING",
    wordAr: "مبارزة",
    hints: ["Foil weapon", "En garde position", "Touch scoring"],
    hintsAr: ["سلاح الشيش", "وضع الاستعداد", "تسجيل اللمسات"],
    category: "sports",
    image: "🤺"
},
{
    word: "HANDBALL",
    wordAr: "كرة اليد",
    hints: ["7 players", "Court game", "Throw goals"],
    hintsAr: ["7 لاعبين", "لعبة ملعب", "رمي الأهداف"],
    category: "sports",
    image: "🤾"
},
{
    word: "WRESTLING",
    wordAr: "مصارعة",
    hints: ["Mat combat", "Pin fall", "Greco-Roman style"],
    hintsAr: ["قتال على الحصيرة", "سقوط التدبيس", "أسلوب يوناني روماني"],
    category: "sports",
    image: "🤼"
},
{
    word: "JAVELIN",
    wordAr: "رمي الرمح",
    hints: ["Long throw", "Athletics event", "Running approach"],
    hintsAr: ["رمية طويلة", "حدث ألعاب القوى", "اقتراب الجري"],
    category: "sports",
    image: "🎯"
},
{
    word: "DISCUS",
    wordAr: "رمي القرص",
    hints: ["Circle spin", "Ancient Greek", "Heavy disc"],
    hintsAr: ["دوران الدائرة", "يوناني قديم", "قرص ثقيل"],
    category: "sports",
    image: "🥏"
},
{
    word: "BOWLING",
    wordAr: "بولينغ",
    hints: ["10 pins", "Alley lane", "Strike spare"],
    hintsAr: ["10 دبابيس", "ممر الصالة", "ضربة احتياطية"],
    category: "sports",
    image: "🎳"
},
{
    word: "DARTS",
    wordAr: "سهام",
    hints: ["Pub game", "Triple 20", "Bullseye aim"],
    hintsAr: ["لعبة الحانة", "ثلاثي 20", "توجيه نحو مركز الهدف"],
    category: "sports",
    image: "🎯"
},
{
    word: "HORSE RACING",
    wordAr: "سباق الخيل",
    hints: ["Jockey rider", "Derby event", "Finish line"],
    hintsAr: ["الفارس", "حدث الديربي", "خط النهاية"],
    category: "sports",
    image: "🏇"
},
{
    word: "ROWING",
    wordAr: "تجذيف",
    hints: ["Crew team", "Oar blades", "River racing"],
    hintsAr: ["فريق الطاقم", "شفرات المجذاف", "سباق النهر"],
    category: "sports",
    image: "🚣"
},
{
    word: "SAILING",
    wordAr: "إبحار",
    hints: ["Wind power", "Regatta race", "Sail trimming"],
    hintsAr: ["طاقة الرياح", "سباق ريجاتا", "تقليم الشراع"],
    category: "sports",
    image: "⛵"
},
{
    word: "DIVING",
    wordAr: "غطس",
    hints: ["Platform height", "Synchronized pairs", "Olympic sport"],
    hintsAr: ["ارتفاع المنصة", "أزواج متزامنة", "رياضة أولمبية"],
    category: "sports",
    image: "🤿"
},
{
    word: "TRIATHLON",
    wordAr: "ثلاثي",
    hints: ["Swim bike run", "Ironman event", "Endurance test"],
    hintsAr: ["سباحة دراجة جري", "حدث رجل حديدي", "اختبار التحمل"],
    category: "sports",
    image: "🏊🚴🏃"
},
{
    word: "MOUNTAIN BIKING",
    wordAr: "سباق الجبال",
    hints: ["Trail riding", "Downhill speed", "Suspension bikes"],
    hintsAr: ["ركوب الدروب", "سرعة النزول", "دراجات معلقة"],
    category: "sports",
    image: "🚵"
},
{
    word: "PARACHUTING",
    wordAr: "القفز المظلي",
    hints: ["Skydiving", "Free fall", "Parachute deployment"],
    hintsAr: ["القفز الحر", "سقوط حر", "نشر المظلة"],
    category: "sports",
    image: "🪂"
},
{
    word: "KAYAKING",
    wordAr: "التجديف",
    hints: ["Paddle sport", "Whitewater rapids", "Solo or tandem"],
    hintsAr: ["رياضة التجديف", "منحدرات المياه البيضاء", "فردي أو ثنائي"],
    category: "sports",
    image: "🛶"
},
{
    word: "BIATHLON",
    wordAr: "البياثلون",
    hints: ["Ski and shoot", "Winter sport", "Rifle carrying"],
    hintsAr: ["تزلج واطلاق", "رياضة شتوية", "حمل البندقية"],
    category: "sports",
    image: "🎿🎯"
},
{
    word: "CURLING",
    wordAr: "كيرلنغ",
    hints: ["Ice sliding", "Stone polishing", "Sweeping brooms"],
    hintsAr: ["انزلاق الجليد", "تلميع الحجر", "مكانس الكنس"],
    category: "sports",
    image: "🥌"
},
{
    word: "LUGE",
    wordAr: "الزحافات",
    hints: ["Ice track", "Lying down", "Winter sliding"],
    hintsAr: ["مسار جليدي", "الاستلقاء", "انزلاق شتوي"],
    category: "sports",
    image: "🛷"
},
{
    word: "BOBSLED",
    wordAr: "الزلاجة الجماعية",
    hints: ["Team sled", "Ice chute", "Winter Olympics"],
    hintsAr: ["مزلقة الفريق", "مزلق جليدي", "الألعاب الأولمبية الشتوية"],
    category: "sports",
    image: "🛷"
},
{
    word: "POLO",
    wordAr: "بولو",
    hints: ["Horse sport", "Mallet hitting", "Equestrian game"],
    hintsAr: ["رياضة الخيل", "ضرب المطرقة", "لعبة الفروسية"],
    category: "sports",
    image: "🐎"
},
{
    word: "LACROSSE",
    wordAr: "لاكروس",
    hints: ["Stick with net", "Field game", "Native American origin"],
    hintsAr: ["عصا بشبكة", "لعبة ميدان", "أصل أمريكي أصلي"],
    category: "sports",
    image: "🥍"
},
{
    word: "PING PONG",
    wordAr: "بينغ بونغ",
    hints: ["Table tennis", "Fast exchanges", "Small ball"],
    hintsAr: ["تنس الطاولة", "تبادلات سريعة", "كرة صغيرة"],
    category: "sports",
    image: "🏓"
},
{
    word: "TAEKWONDO",
    wordAr: "التايكوندو",
    hints: ["Korean martial art", "Kicking focused", "Colored belts"],
    hintsAr: ["فنون قتالية كورية", "مركز على الركل", "أحزمة ملونة"],
    category: "sports",
    image: "🥋"
},
{
    word: "JUDO",
    wordAr: "الجودو",
    hints: ["Throwing techniques", "Japanese origin", "Gi uniform"],
    hintsAr: ["تقنيات الرمي", "أصل ياباني", "زي الجي"],
    category: "sports",
    image: "🥋"
},
{
    word: "KARATE",
    wordAr: "الكاراتيه",
    hints: ["Striking art", "Kata forms", "Black belt"],
    hintsAr: ["فن الضرب", "أشكال الكاتا", "الحزام الأسود"],
    category: "sports",
    image: "🥋"
},
{
    word: "SUMO",
    wordAr: "السومو",
    hints: ["Japanese wrestling", "Heavy athletes", "Ring out"],
    hintsAr: ["مصارعة يابانية", "رياضيون ثقيلون", "خارج الحلبة"],
    category: "sports",
    image: "👘"
},


// ===================== Anime =====================
{
    word: "DRAGON BALL",
    wordAr: "دراغون بول",
    hints: ["Goku protagonist", "Super Saiyan", "Dragon Balls wish"],
    hintsAr: ["بطل غوكو", "سوبر سايان", "أمنية كرات التنين"],
    category: "anime",
    image: "images/anime/dragonball.jpg"
},
{
    word: "NARUTO",
    wordAr: "ناروتو",
    hints: ["Ninja academy", "Rasengan technique", "Hokage dream"],
    hintsAr: ["أكاديمية النينجا", "تقنية الراسينغان", "حلم الهوكاجي"],
    category: "anime",
    image: "images/anime/naruto.jpg"
},
{
    word: "ONE PIECE",
    wordAr: "ون بيس",
    hints: ["Straw Hat crew", "Devil Fruits", "Finding One Piece"],
    hintsAr: ["طاقم قبعة القش", "فواكه الشيطان", "البحث عن الكنز"],
    category: "anime",
    image: "images/anime/onepiece.jpg"
},
{
    word: "ATTACK ON TITAN",
    wordAr: "هجوم العمالقة",
    hints: ["Eren Yeager", "Titan shifters", "Wall Maria"],
    hintsAr: ["إيرين ييغر", "محوّلو العمالقة", "جدار ماريا"],
    category: "anime",
    image: "images/anime/attackontitan.jpg"
},
{
    word: "DEATH NOTE",
    wordAr: "دفتر الموت",
    hints: ["Light Yagami", "Shinigami Ryuk", "Write names to kill"],
    hintsAr: ["لايت ياغامي", "شينغامي ريو", "كتابة الأسماء للقتل"],
    category: "anime",
    image: "images/anime/deathnote.jpg"
},
{
    word: "DEMON SLAYER",
    wordAr: "قاتل الشياطين",
    hints: ["Tanjiro Kamado", "Breathing techniques", "Nezuko sister"],
    hintsAr: ["تانجيرو كامادو", "تقنيات التنفس", "الأخت نيزوكو"],
    category: "anime",
    image: "images/anime/demonslayer.jpg"
},
{
    word: "MY HERO ACADEMIA",
    wordAr: "أكاديميتي للأبطال",
    hints: ["Izuku Midoriya", "One For All quirk", "U.A. High School"],
    hintsAr: ["إيزوكو ميدوريا", "قوة ون فور أول", "مدرسة يو أيه الثانوية"],
    category: "anime",
    image: "images/anime/myheroacademia.jpg"
},
{
    word: "POKEMON",
    wordAr: "بوكيمون",
    hints: ["Ash Ketchum", "Gotta catch 'em all", "Pikachu mascot"],
    hintsAr: ["آش كاتشوم", "اصطدهم جميعًا", "تميمة بيكاتشو"],
    category: "anime",
    image: "images/anime/pokemon.jpg"
},
{
    word: "SPY X FAMILY",
    wordAr: "جاسوس × عائلة",
    hints: ["Loid Forger", "Anya mind-reading", "Found family comedy"],
    hintsAr: ["لُويد فورجر", "أنيا قارئة الأفكار", "كوميديا عائلة"],
    category: "anime",
    image: "images/anime/spyxfamily.jpg"
},
{
    word: "JUJUTSU KAISEN",
    wordAr: "جوجوتسو كايسن",
    hints: ["Yuji Itadori", "Sukuna fingers", "Cursed energy"],
    hintsAr: ["يوجي إيتادوري", "أصابع سكونا", "الطاقة الملعونة"],
    category: "anime",
    image: "images/anime/jujutsukaisen.jpg"
},
{
    word: "MIRAI NIKKI",
    wordAr: "مذكرات المستقبل",
    hints: ["Yuno Gasai", "Survival game", "Future diaries"],
    hintsAr: ["يونو غاساي", "لعبة بقاء", "مذكرات المستقبل"],
    category: "anime",
    image: "images/anime/mirainikki.jpg"
},
{
    word: "FIRE FORCE",
    wordAr: "فرقة الإطفاء",
    hints: ["Shinra Kusakabe", "Spontaneous combustion", "Fire soldiers"],
    hintsAr: ["شينرا كوساكابي", "الاحتراق التلقائي", "جنود النار"],
    category: "anime",
    image: "images/anime/fireforce.jpg"
},
{
    word: "KILL LA KILL",
    wordAr: "كيل لا كيل",
    hints: ["Ryuko Matoi", "Life fibers", "Scissor blade"],
    hintsAr: ["ريوكو ماتوي", "ألياف الحياة", "شفرة المقص"],
    category: "anime",
    image: "images/anime/killlakill.jpg"
},
{
    word: "RAGNA CRIMSON",
    wordAr: "راغنا كريمسون",
    hints: ["Ragna", "Dragon hunters", "Silverine princess"],
    hintsAr: ["راغنا", "صيادو التنين", "الأميرة الفضية"],
    category: "anime",
    image: "images/anime/ragnacrimson.jpg"
},
{
    word: "BLUE LOCK",
    wordAr: "بلو لوك",
    hints: ["Soccer survival", "Egoist strikers", "Isagi Yoichi"],
    hintsAr: ["بقاء كرة القدم", "مهاجمون أنانيون", "إيساغي يوتشي"],
    category: "anime",
    image: "images/anime/bluelock.jpg"
},
{
    word: "DETECTIVE CONAN",
    wordAr: "المحقق كونان",
    hints: ["Shrunken detective", "Mystery cases", "APTX 4869"],
    hintsAr: ["محقق متقلص", "قضايا غامضة", "دواء التصغير"],
    category: "anime",
    image: "images/anime/detectiveconan.jpg"
},
{
    word: "ONE PUNCH MAN",
    wordAr: "ون بانش مان",
    hints: ["Saitama", "Bald hero", "One punch victory"],
    hintsAr: ["سايتاما", "بطل أصلع", "فوز بلكمة واحدة"],
    category: "anime",
    image: "images/anime/onepunchman.jpg"
},
{
    word: "FULLMETAL ALCHEMIST",
    wordAr: "الخيميائي الفولاذي",
    hints: ["Elric brothers", "Equivalent exchange", "State alchemist"],
    hintsAr: ["أخوة إلريك", "المقايضة المتكافئة", "خيميائي الدولة"],
    category: "anime",
    image: "images/anime/fullmetalalchemist.jpg"
},
{
    word: "SWORD ART ONLINE",
    wordAr: "سورد آرت أونلاين",
    hints: ["VRMMORPG trap", "Kirito protagonist", "Aincrad floors"],
    hintsAr: ["فخ لعبة واقع افتراضي", "بطل كيريتو", "طوابق أينكراد"],
    category: "anime",
    image: "images/anime/swordartonline.jpg"
},
{
    word: "HUNTER X HUNTER",
    wordAr: "هانتر × هانتر",
    hints: ["Gon Freecss", "Hunter exam", "Nen abilities"],
    hintsAr: ["غون فريكس", "امتحان الصياد", "قدرات النين"],
    category: "anime",
    image: "images/anime/hunterxhunter.jpg"
},
{
    word: "TOKYO GHOUL",
    wordAr: "طوكيو غول",
    hints: ["Ken Kaneki", "Half-ghoul", "Coffee shop Anteiku"],
    hintsAr: ["كين كانيكي", "نصف غول", "مقهى أنتيكو"],
    category: "anime",
    image: "images/anime/tokyoghoul.jpg"
},
{
    word: "STEINS GATE",
    wordAr: "شتاينز غيت",
    hints: ["Time travel", "Mad scientist", "D-mails"],
    hintsAr: ["السفر عبر الزمن", "عالم مجنون", "رسائل الزمن"],
    category: "anime",
    image: "images/anime/steinsgate.jpg"
},
{
    word: "RE ZERO",
    wordAr: "ري:زيرو",
    hints: ["Subaru Natsuki", "Return by death", "Emilia half-elf"],
    hintsAr: ["سوبارو ناتسوكي", "العودة بالموت", "إميليا نصف جنية"],
    category: "anime",
    image: "images/anime/rezero.jpg"
},
{
    word: "NORAGAMI",
    wordAr: "نوراغامي",
    hints: ["God without shrine", "Yato god", "Regalia weapons"],
    hintsAr: ["إله بدون ضريح", "الإله ياتو", "أسلحة ريغاليا"],
    category: "anime",
    image: "images/anime/noragami.jpg"
},
{
    word: "AKAME GA KILL",
    wordAr: "أكامة غا كيل",
    hints: ["Night Raid assassins", "Imperial Arms", "Revolutionary army"],
    hintsAr: ["قتلة نايت رايد", "أسلحة إمبراطورية", "جيش الثورة"],
    category: "anime",
    image: "images/anime/akamegakill.jpg"
},
{
    word: "BLEACH",
    wordAr: "بليتش",
    hints: ["Ichigo Kurosaki", "Soul Reaper", "Zanpakuto sword"],
    hintsAr: ["إيتشيجو كوروساكي", "جالب الأرواح", "سيف زانباكتو"],
    category: "anime",
    image: "images/anime/bleach.jpg"
},
{
    word: "THE PROMISED NEVERLAND",
    wordAr: "الأرض الموعودة",
    hints: ["Grace Field House", "Demons farm", "Emma protagonist"],
    hintsAr: ["دار غراس فيلد", "مزرعة الشياطين", "البطلة إيما"],
    category: "anime",
    image: "images/anime/thepromisedneverland.jpg"
},
{
    word: "DR STONE",
    wordAr: "دكتور ستون",
    hints: ["Senku Ishigami", "Stone world", "Reviving civilization"],
    hintsAr: ["سينكو إيشيغامي", "عالم حجري", "إحياء الحضارة"],
    category: "anime",
    image: "images/anime/drstone.jpg"
},
{
    word: "DEATH PARADE",
    wordAr: "موكب الموت",
    hints: ["Quindecim bar", "Judging souls", "Arbiter Decim"],
    hintsAr: ["حانة كوينديسيم", "محاكمة الأرواح", "الحكم ديسيم"],
    category: "anime",
    image: "images/anime/deathparade.jpg"
},
{
    word: "BLACK CLOVER",
    wordAr: "بلاك كلوفير",
    hints: ["Asta no magic", "Yuno rival", "Magic knights"],
    hintsAr: ["أستا بلا سحر", "المنافس يونو", "فرسان السحر"],
    category: "anime",
    image: "images/anime/blackclover.jpg"
},
{
    word: "VINLAND SAGA",
    wordAr: "ملحمة فاينلاند",
    hints: ["Viking era", "Thorfinn revenge", "Askeladd mentor"],
    hintsAr: ["عصر الفايكنغ", "ثورفينن المنتقم", "المعلم أسكلاد"],
    category: "anime",
    image: "images/anime/vinlandsaga.jpg"
},
{
    word: "ANOTHER",
    wordAr: "أنذر",
    hints: ["Class 3 curse", "Mei Misaki", "Mystery deaths"],
    hintsAr: ["لعنة الصف الثالث", "مي ميساكي", "وفيات غامضة"],
    category: "anime",
    image: "images/anime/another.jpg"
},
{
    word: "FATE SERIES",
    wordAr: "سلسلة فايت",
    hints: ["Holy Grail War", "Servants summon", "Shirou Emiya"],
    hintsAr: ["حرب الكأس المقدسة", "استدعاء الخدم", "شيرو إيميا"],
    category: "anime",
    image: "images/anime/fate.jpg"
},
{
    word: "HAIKYUU",
    wordAr: "هايكيو",
    hints: ["Volleyball anime", "Hinata Shoyo", "Karasuno team"],
    hintsAr: ["أنمي الكرة الطائرة", "هيناتا شويو", "فريق كاراسونو"],
    category: "anime",
    image: "images/anime/haikyuu.jpg"
},
{
    word: "BUNGOU STRAY DOGS",
    wordAr: "كلاب الشوارع الضالة",
    hints: ["Armed Detective Agency", "Ability users", "Osamu Dazai"],
    hintsAr: ["وكالة المحققين المسلحين", "مستخدمو القدرات", "أوسامو دازاي"],
    category: "anime",
    image: "images/anime/bungoustraydogs.jpg"
},
{
    word: "DORORO",
    wordAr: "دورورو",
    hints: ["Hyakkimaru", "Stolen body parts", "Demon slayer"],
    hintsAr: ["هياكيمارو", "أعضاء جسم مسروقة", "قاتل الشياطين"],
    category: "anime",
    image: "images/anime/dororo.jpg"
},
{
    word: "KUROKO'S BASKETBALL",
    wordAr: "كرة سلة كوروكو",
    hints: ["Generation of Miracles", "Phantom sixth man", "Seirin High"],
    hintsAr: ["جيل المعجزات", "اللاعب السادس الشبح", "ثانوية سيرين"],
    category: "anime",
    image: "images/anime/kurokosbasketball.jpg"
},
{
    word: "ZANKYOU NO TERROR",
    wordAr: "إرهاب الرنين",
    hints: ["Tokyo terrorism", "Sphinx puzzles", "Nine and Twelve"],
    hintsAr: ["إرهاب طوكيو", "ألغاز سفنكس", "ناين وتويلف"],
    category: "anime",
    image: "images/anime/zankyounoterror.jpg"
},
{
    word: "BAKI",
    wordAr: "باكي",
    hints: ["Martial arts", "Underground arena", "Baki Hanma"],
    hintsAr: ["فنون قتالية", "ساحة تحت الأرض", "باكي هانما"],
    category: "anime",
    image: "images/anime/baki.jpg"
},
{
    word: "HAJIME NO IPPO",
    wordAr: "هاجيمي نو إيبو",
    hints: ["Boxing anime", "Makunouchi Ippo", "Dempsey Roll"],
    hintsAr: ["أنمي الملاكمة", "ماكونوتشي إيبو", "لفة ديمبسي"],
    category: "anime",
    image: "images/anime/hajimenoippo.jpg"
},
{
    word: "COWBOY BEBOP",
    wordAr: "كاوبوي بيبوب",
    hints: ["Space bounty hunters", "Jazz soundtrack", "Spike Spiegel"],
    hintsAr: ["صيادو جوائز فضائيون", "موسيقى الجاز", "سبايك شبيغل"],
    category: "anime",
    image: "images/anime/cowboybebop.jpg"
},

{
    word: "CODE GEASS",
    wordAr: "كود جياس",
    hints: ["Lelouch vi Britannia", "Geass power", "Knightmare frames"],
    hintsAr: ["ليلوش في بريتانيا", "قوة الجياس", "أطر نايت مير"],
    category: "anime",
    image: "images/anime/codegeass.jpg"
},
{
    word: "MOB PSYCHO 100",
    wordAr: "موب سايكو 100",
    hints: ["Shigeo Kageyama", "Esper powers", "100% emotion meter"],
    hintsAr: ["شيغيو كاغياما", "قدرات نفسية", "مقياس عاطفة 100%"],
    category: "anime",
    image: "images/anime/mobpsycho100.jpg"
},
{
    word: "CHAINSAW MAN",
    wordAr: "تشاينسو مان",
    hints: ["Denji protagonist", "Pochita devil", "Devil hunters"],
    hintsAr: ["البطل دينجي", "الشيطان بوتشيتا", "صيادو الشياطين"],
    category: "anime",
    image: "images/anime/chainsawman.jpg"
},
{
    word: "KIMETSU NO YAIBA",
    wordAr: "نصل القضاء على الشياطين",
    hints: ["Demon slayer corps", "Water breathing", "Hashira masters"],
    hintsAr: ["فيلق قتلة الشياطين", "تنفس الماء", "سادة الهاشيرا"],
    category: "anime",
    image: "images/anime/kimetsunoyaiba.jpg"
},
{
    word: "YOUR NAME",
    wordAr: "اسمك",
    hints: ["Body swapping", "Mitsuha Miyamizu", "Taki Tachibana"],
    hintsAr: ["تبادل الأجساد", "ميتسوها مياميزو", "تاكي تاتشيبانا"],
    category: "anime",
    image: "images/anime/yourname.jpg"
},
{
    word: "A SILENT VOICE",
    wordAr: "صوت صامت",
    hints: ["Shoya Ishida", "Shoko Nishimiya", "Bullying redemption"],
    hintsAr: ["شويا إيشيدا", "شوكو نيشيميا", "توبة التنمر"],
    category: "anime",
    image: "images/anime/asilentvoice.jpg"
},
{
    word: "VIOLET EVERGARDEN",
    wordAr: "فيوليت إيفرغاردن",
    hints: ["Auto Memory Doll", "Letter writer", "Post-war recovery"],
    hintsAr: ["دمية الذاكرة الآلية", "كاتبة الرسائل", "الشفاء بعد الحرب"],
    category: "anime",
    image: "images/anime/violetevergarden.jpg"
},
{
    word: "MADE IN ABYSS",
    wordAr: "صنع في الهاوية",
    hints: ["Abyss exploration", "Riko protagonist", "Curse of the abyss"],
    hintsAr: ["استكشاف الهاوية", "البطلة ريكو", "لعنة الهاوية"],
    category: "anime",
    image: "images/anime/madeinabyss.jpg"
},

{
    word: "BERSERK",
    wordAr: "بيرسيرك",
    hints: ["Guts swordsman", "Band of the Hawk", "Eclipse event"],
    hintsAr: ["غاتس المبارز", "فرقة الصقر", "حدث الكسوف"],
    category: "anime",
    image: "images/anime/berserk.jpg"
},

{
    word: "JOJO'S BIZARRE ADVENTURE",
    wordAr: "مغامرات جوجو الغريبة",
    hints: ["Stand powers", "Multiple generations", "Dio villain"],
    hintsAr: ["قدرات الستاند", "أجيال متعددة", "الشرير ديو"],
    category: "anime",
    image: "images/anime/jojo.jpg"
},

{
    word: "INUYASHA",
    wordAr: "إينوياشا",
    hints: ["Half-demon protagonist", "Shikon Jewel", "Kagome Higurashi"],
    hintsAr: ["بطل نصف شيطان", "جوهرة الشيكون", "كاغومي هيغوراشي"],
    category: "anime",
    image: "images/anime/inuyasha.jpg"
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
},

{
    word: "LIONEL MESSI",
    wordAr: "ليونيل ميسي",
    hints: ["Argentine magician", "Inter Miami", "8x Ballon d'Or"],
    hintsAr: ["الساحر الأرجنتيني", "إنتر ميامي", "8 كرات ذهبية"],
    category: "football",
    image: "images/lionel-messi.jpeg"
},
{
    word: "CRISTIANO RONALDO",
    wordAr: "كريستيانو رونالدو",
    hints: ["Portuguese icon", "Al Nassr", "5x Ballon d'Or"],
    hintsAr: ["الأسطورة البرتغالية", "النصر", "5 كرات ذهبية"],
    category: "football",
    image: "images/cristiano-ronaldo.jpeg"
},
{
    word: "NEYMAR JR",
    wordAr: "نيمار جونيور",
    hints: ["Brazilian star", "Al Hilal", "PSG legend"],
    hintsAr: ["النجم البرازيلي", "الهلال", "أسطورة باريس"],
    category: "football",
    image: "images/neymar-jr.jpeg"
},
{
    word: "ANDREA PIRLO",
    wordAr: "أندريا بيرلو",
    hints: ["Italian maestro", "Retired", "AC Milan/Juventus"],
    hintsAr: ["السيد الإيطالي", "معتزل", "ميلان/يوفنتوس"],
    category: "football",
    image: "images/andrea-pirlo.jpeg"
},
{
    word: "ZINEDINE ZIDANE",
    wordAr: "زين الدين زيدان",
    hints: ["French legend", "Real Madrid manager", "World Cup winner"],
    hintsAr: ["أسطورة فرنسية", "مدرب ريال مدريد", "بطل كأس العالم"],
    category: "football",
    image: "images/zinedine-zidane.jpeg"
},
{
    word: "RONALDINHO",
    wordAr: "رونالدينيو",
    hints: ["Brazilian magician", "Retired", "Barcelona legend"],
    hintsAr: ["الساحر البرازيلي", "معتزل", "أسطورة برشلونة"],
    category: "football",
    image: "images/ronaldinho.jpeg"
},
{
    word: "LUIS SUAREZ",
    wordAr: "لويس سواريز",
    hints: ["Uruguayan striker", "Inter Miami", "Barcelona legend"],
    hintsAr: ["مهاجم أوروغواياني", "إنتر ميامي", "أسطورة برشلونة"],
    category: "football",
    image: "images/luis-suarez.jpeg"
},
{
    word: "ACHRAF HAKIMI",
    wordAr: "أشرف حكيمي",
    hints: ["Moroccan defender", "PSG", "Real Madrid product"],
    hintsAr: ["مدافع مغربي", "باريس", "منتوج ريال مدريد"],
    category: "football",
    image: "images/achraf-hakimi.jpeg"
},
{
    word: "YASSINE BOUNOU",
    wordAr: "ياسين بونو",
    hints: ["Moroccan goalkeeper", "Al Hilal", "World Cup hero"],
    hintsAr: ["حارس مغربي", "الهلال", "بطل كأس العالم"],
    category: "football",
    image: "images/yassine-bounou.jpeg"
},
{
    word: "SOFYAN AMRABAT",
    wordAr: "سفيان أمرابط",
    hints: ["Moroccan midfielder", "Manchester United", "Fiorentina"],
    hintsAr: ["لاعب وسط مغربي", "مانشستر يونايتد", "فيورنتينا"],
    category: "football",
    image: "images/sofyan-amrabat.jpeg"
},
{
    word: "EZ ABDE",
    wordAr: "عز الدين أزقالي",
    hints: ["Moroccan winger", "Real Betis", "Barcelona product"],
    hintsAr: ["جناح مغربي", "ريال بيتيس", "منتوج برشلونة"],
    category: "football",
    image: "images/ez-abde.jpeg"
},
{
    word: "RIYAD MAHREZ",
    wordAr: "رياض محرز",
    hints: ["Algerian winger", "Al Ahli", "Manchester City legend"],
    hintsAr: ["جناح جزائري", "الأهلي", "أسطورة مانشستر سيتي"],
    category: "football",
    image: "images/riyad-mahrez.jpeg"
},
{
    word: "ISLAM SLIMANI",
    wordAr: "إسلام سليماني",
    hints: ["Algerian striker", "Retired", "Leicester City"],
    hintsAr: ["مهاجم جزائري", "معتزل", "ليستر سيتي"],
    category: "football",
    image: "images/islam-slimani.jpeg"
},
{
    word: "YACINE BRAHIMI",
    wordAr: "ياسين براهيمي",
    hints: ["Algerian midfielder", "Al Rayyan", "Porto legend"],
    hintsAr: ["لاعب وسط جزائري", "الريان", "أسطورة بورتو"],
    category: "football",
    image: "images/yacine-brahimi.jpeg"
},
{
    word: "PAULO DYBALA",
    wordAr: "باولو ديبالا",
    hints: ["Argentine forward", "Roma", "Juventus legend"],
    hintsAr: ["مهاجم أرجنتيني", "روما", "أسطورة يوفنتوس"],
    category: "football",
    image: "images/paulo-dybala.jpeg"
},
{
    word: "SERGIO BUSQUETS",
    wordAr: "سيرجيو بوسكيتس",
    hints: ["Spanish midfielder", "Inter Miami", "Barcelona legend"],
    hintsAr: ["لاعب وسط إسباني", "إنتر ميامي", "أسطورة برشلونة"],
    category: "football",
    image: "images/sergio-busquets.jpeg"
},
{
    word: "JORDI ALBA",
    wordAr: "جوردي ألبا",
    hints: ["Spanish defender", "Inter Miami", "Barcelona legend"],
    hintsAr: ["مدافع إسباني", "إنتر ميامي", "أسطورة برشلونة"],
    category: "football",
    image: "images/jordi-alba.jpeg"
},
{
    word: "GERARD PIQUE",
    wordAr: "جيرارد بيكيه",
    hints: ["Spanish defender", "Retired", "Barcelona legend"],
    hintsAr: ["مدافع إسباني", "معتزل", "أسطورة برشلونة"],
    category: "football",
    image: "images/gerard-pique.jpeg"
},
{
    word: "ANDRES INIESTA",
    wordAr: "أندريس إنييستا",
    hints: ["Spanish midfielder", "Emirates Club", "Barcelona legend"],
    hintsAr: ["لاعب وسط إسباني", "نادي الإمارات", "أسطورة برشلونة"],
    category: "football",
    image: "images/andres-iniesta.jpeg"
},
{
    word: "XAVI HERNANDEZ",
    wordAr: "شافي هيرنانديز",
    hints: ["Spanish legend", "Barcelona manager", "Midfield maestro"],
    hintsAr: ["أسطورة إسبانية", "مدرب برشلونة", "سيد خط الوسط"],
    category: "football",
    image: "images/xavi-hernandez.jpeg"
},
{
    word: "IKER CASILLAS",
    wordAr: "إيكر كاسياس",
    hints: ["Spanish goalkeeper", "Retired", "Real Madrid legend"],
    hintsAr: ["حارس إسباني", "معتزل", "أسطورة ريال مدريد"],
    category: "football",
    image: "images/iker-casillas.jpeg"
},
{
    word: "SERGIO RAMOS",
    wordAr: "سيرجيو راموس",
    hints: ["Spanish defender", "Sevilla", "Real Madrid legend"],
    hintsAr: ["مدافع إسباني", "إشبيلية", "أسطورة ريال مدريد"],
    category: "football",
    image: "images/sergio-ramos.jpeg"
},
{
    word: "KARIM ADEYEMI",
    wordAr: "كريم أديمي",
    hints: ["German winger", "Borussia Dortmund", "Speedster"],
    hintsAr: ["جناح ألماني", "بوروسيا دورتموند", "سريع"],
    category: "football",
    image: "images/karim-adeyemi.jpeg"
},
{
    word: "JAMAL MUSIALA",
    wordAr: "جمال موسيالا",
    hints: ["German midfielder", "Bayern Munich", "Young talent"],
    hintsAr: ["لاعب وسط ألماني", "بايرن ميونخ", "موهبة شابة"],
    category: "football",
    image: "images/jamal-musiala.jpeg"
},
{
    word: "PHIL FODEN",
    wordAr: "فيل فودن",
    hints: ["English midfielder", "Manchester City", "Local hero"],
    hintsAr: ["لاعب وسط إنجليزي", "مانشستر سيتي", "بطل محلي"],
    category: "football",
    image: "images/phil-foden.jpeg"
},
{
    word: "BUKAYO SAKA",
    wordAr: "بوكايو ساكا",
    hints: ["English winger", "Arsenal", "Starboy"],
    hintsAr: ["جناح إنجليزي", "آرسنال", "نجم صاعد"],
    category: "football",
    image: "images/bukayo-saka.jpeg"
},
{
    word: "MARTIN ODEGAARD",
    wordAr: "مارتن أوديغارد",
    hints: ["Norwegian midfielder", "Arsenal captain", "Real Madrid product"],
    hintsAr: ["لاعب وسط نرويجي", "قائد آرسنال", "منتوج ريال مدريد"],
    category: "football",
    image: "images/martin-odegaard.jpeg"
},
{
    word: "DECLAN RICE",
    wordAr: "دكلان رايس",
    hints: ["English midfielder", "Arsenal", "West Ham legend"],
    hintsAr: ["لاعب وسط إنجليزي", "آرسنال", "أسطورة وست هام"],
    category: "football",
    image: "images/declan-rice.jpeg"
},
{
    word: "ALEXANDER ISAK",
    wordAr: "الكسندر إيساك",
    hints: ["Swedish striker", "Newcastle", "Technical forward"],
    hintsAr: ["مهاجم سويدي", "نيوكاسل", "مهاجم تقني"],
    category: "football",
    image: "images/alexander-isak.jpeg"
},
{
    word: "SANDRO TONALI",
    wordAr: "ساندرو تونالي",
    hints: ["Italian midfielder", "Newcastle", "AC Milan product"],
    hintsAr: ["لاعب وسط إيطالي", "نيوكاسل", "منتوج ميلان"],
    category: "football",
    image: "images/sandro-tonali.jpeg"
},
{
    word: "JULIAN ALVAREZ",
    wordAr: "جوليان ألفاريز",
    hints: ["Argentine striker", "Manchester City", "World Cup winner"],
    hintsAr: ["مهاجم أرجنتيني", "مانشستر سيتي", "بطل كأس العالم"],
    category: "football",
    image: "images/julian-alvarez.jpeg"
},
{
    word: "RODRI",
    wordAr: "رودري",
    hints: ["Spanish midfielder", "Manchester City", "Champions League winner"],
    hintsAr: ["لاعب وسط إسباني", "مانشستر سيتي", "بطل دوري الأبطال"],
    category: "football",
    image: "images/rodri.jpeg"
},
{
    word: "JACK GREALISH",
    wordAr: "جاك غريليش",
    hints: ["English winger", "Manchester City", "Aston Villa legend"],
    hintsAr: ["جناح إنجليزي", "مانشستر سيتي", "أسطورة أستون فيلا"],
    category: "football",
    image: "images/jack-grealish.jpeg"
},
{
    word: "BERNARDO SILVA",
    wordAr: "برناردو سيلفا",
    hints: ["Portuguese midfielder", "Manchester City", "Technical wizard"],
    hintsAr: ["لاعب وسط برتغالي", "مانشستر سيتي", "ساحر تقني"],
    category: "football",
    image: "images/bernardo-silva.jpeg"
},
{
    word: "RUBEN DIAS",
    wordAr: "روبين دياز",
    hints: ["Portuguese defender", "Manchester City", "Defensive rock"],
    hintsAr: ["مدافع برتغالي", "مانشستر سيتي", "صخرة دفاعية"],
    category: "football",
    image: "images/ruben-dias.jpeg"
},

{
    word: "JOÃO CANCELO",
    wordAr: "جواو كانسيلو",
    hints: ["Portuguese defender", "Barcelona", "Attacking fullback"],
    hintsAr: ["مدافع برتغالي", "برشلونة", "ظهير هجومي"],
    category: "football",
    image: "images/joao-cancelo.jpeg"
},
{
    word: "ROBERT SANCHEZ",
    wordAr: "روبرت سانشيز",
    hints: ["Spanish goalkeeper", "Chelsea", "Brighton product"],
    hintsAr: ["حارس إسباني", "تشيلسي", "منتوج برايتون"],
    category: "football",
    image: "images/robert-sanchez.jpeg"
},
{
    word: "ENZO FERNANDEZ",
    wordAr: "إنزو فرنانديز",
    hints: ["Argentine midfielder", "Chelsea", "World Cup winner"],
    hintsAr: ["لاعب وسط أرجنتيني", "تشيلسي", "بطل كأس العالم"],
    category: "football",
    image: "images/enzo-fernandez.jpeg"
},

{
    word: "NICOLAS JACKSON",
    wordAr: "نيكولاس جاكسون",
    hints: ["Senegalese striker", "Chelsea", "Villarreal product"],
    hintsAr: ["مهاجم سنغالي", "تشيلسي", "منتوج فياريال"],
    category: "football",
    image: "images/nicolas-jackson.jpeg"
},
{
    word: "MYCHAJLO MUDRYK",
    wordAr: "ميخايلو بودريك",
    hints: ["Ukrainian winger", "Chelsea", "Shakhtar product"],
    hintsAr: ["جناح أوكراني", "تشيلسي", "منتوج شاختار"],
    category: "football",
    image: "images/mychajlo-mudryk.jpeg"
},
{
    word: "CHRISTOPHER NKUNKU",
    wordAr: "كريستوفر نكونكو",
    hints: ["French forward", "Chelsea", "RB Leipzig product"],
    hintsAr: ["مهاجم فرنسي", "تشيلسي", "منتوج لايبزيغ"],
    category: "football",
    image: "images/christopher-nkunku.jpeg"
},
{
    word: "ALEXANDRE LACAZETTE",
    wordAr: "ألكسندر لاكازيت",
    hints: ["French striker", "Lyon", "Arsenal legend"],
    hintsAr: ["مهاجم فرنسي", "ليون", "أسطورة آرسنال"],
    category: "football",
    image: "images/alexandre-lacazette.jpeg"
},
{
    word: "ANTOINE GRIEZMANN",
    wordAr: "أنطوان جريزمان",
    hints: ["French forward", "Atletico Madrid", "World Cup winner"],
    hintsAr: ["مهاجم فرنسي", "أتلتيكو مدريد", "بطل كأس العالم"],
    category: "football",
    image: "images/antoine-griezmann.jpeg"
},
{
    word: "JAN VERTONGHEN",
    wordAr: "يان فيرتونغن",
    hints: ["Belgian defender", "Anderlecht", "Tottenham legend"],
    hintsAr: ["مدافع بلجيكي", "أندرلخت", "أسطورة توتنهام"],
    category: "football",
    image: "images/jan-vertonghen.jpeg"
},
{
    word: "TOBY ALDERWEIRELD",
    wordAr: "توبي ألدرفايرلد",
    hints: ["Belgian defender", "Royal Antwerp", "Tottenham legend"],
    hintsAr: ["مدافع بلجيكي", "أنتويرب", "أسطورة توتنهام"],
    category: "football",
    image: "images/toby-alderweireld.jpeg"
},
{
    word: "HUGO LLORIS",
    wordAr: "هوغو لوريس",
    hints: ["French goalkeeper", "LAFC", "Tottenham legend"],
    hintsAr: ["حارس فرنسي", "لوس أنجلوس", "أسطورة توتنهام"],
    category: "football",
    image: "images/hugo-lloris.jpeg"
},
{
    word: "SON HEUNG MIN",
    wordAr: "سون هيونغ مين",
    hints: ["Korean forward", "Tottenham captain", "Golden Boot winner"],
    hintsAr: ["مهاجم كوري", "قائد توتنهام", "حذاء ذهبي"],
    category: "football",
    image: "images/son-heung-min.jpeg"
},

{
    word: "ALVARO MORATA",
    wordAr: "ألفارو موراتا",
    hints: ["Spanish striker", "Atletico Madrid", "Real Madrid product"],
    hintsAr: ["مهاجم إسباني", "أتلتيكو مدريد", "منتوج ريال مدريد"],
    category: "football",
    image: "images/alvaro-morata.jpeg"
},
{
    word: "ANGEL DI MARIA",
    wordAr: "أنجيل دي ماريا",
    hints: ["Argentine winger", "Benfica", "World Cup winner"],
    hintsAr: ["جناح أرجنتيني", "بنفيكا", "بطل كأس العالم"],
    category: "football",
    image: "images/angel-di-maria.jpeg"
},
{
    word: "DAVID BECKHAM",
    wordAr: "ديفيد بيكهام",
    hints: ["English legend", "Inter Miami owner", "Manchester United"],
    hintsAr: ["أسطورة إنجليزية", "مالك إنتر ميامي", "مانشستر يونايتد"],
    category: "football",
    image: "images/david-beckham.jpeg"
},
{
    word: "WAYNE ROONEY",
    wordAr: "واين روني",
    hints: ["English legend", "DC United manager", "Manchester United"],
    hintsAr: ["أسطورة إنجليزية", "مدرب دي سي يونايتد", "مانشستر يونايتد"],
    category: "football",
    image: "images/wayne-rooney.jpeg"
},
{
    word: "PAUL POGBA",
    wordAr: "بول بوجبا",
    hints: ["French midfielder", "Suspended", "Juventus legend"],
    hintsAr: ["لاعب وسط فرنسي", "معلق", "أسطورة يوفنتوس"],
    category: "football",
    image: "images/paul-pogba.jpeg"
},
{
    word: "EDEN HAZARD",
    wordAr: "إيدين هازارد",
    hints: ["Belgian winger", "Retired", "Chelsea legend"],
    hintsAr: ["جناح بلجيكي", "معتزل", "أسطورة تشيلسي"],
    category: "football",
    image: "images/eden-hazard.jpeg"
},
{
    word: "FRANK LAMPARD",
    wordAr: "فرانك لامبارد",
    hints: ["English legend", "Retired", "Chelsea top scorer"],
    hintsAr: ["أسطورة إنجليزية", "معتزل", "هداف تشيلسي"],
    category: "football",
    image: "images/frank-lampard.jpeg"
},
{
    word: "JOHN TERRY",
    wordAr: "جون تيري",
    hints: ["English defender", "Retired", "Chelsea captain"],
    hintsAr: ["مدافع إنجليزي", "معتزل", "قائد تشيلسي"],
    category: "football",
    image: "images/john-terry.jpeg"
},
{
    word: "DIDIER DROGBA",
    wordAr: "ديديه دروجبا",
    hints: ["Ivorian striker", "Retired", "Chelsea legend"],
    hintsAr: ["مهاجم عاجي", "معتزل", "أسطورة تشيلسي"],
    category: "football",
    image: "images/didier-drogba.jpeg"
},
{
    word: "PETR CECH",
    wordAr: "بيتر تشيك",
    hints: ["Czech goalkeeper", "Retired", "Chelsea legend"],
    hintsAr: ["حارس تشيكي", "معتزل", "أسطورة تشيلسي"],
    category: "football",
    image: "images/petr-cech.jpeg"
},
{
    word: "THIERRY HENRY",
    wordAr: "تيري هنري",
    hints: ["French legend", "Retired", "Arsenal top scorer"],
    hintsAr: ["أسطورة فرنسية", "معتزل", "هداف آرسنال"],
    category: "football",
    image: "images/thierry-henry.jpeg"
},
{
    word: "DENNIS BERGKAMP",
    wordAr: "دينيس بيركامب",
    hints: ["Dutch legend", "Retired", "Arsenal magician"],
    hintsAr: ["أسطورة هولندية", "معتزل", "ساحر آرسنال"],
    category: "football",
    image: "images/dennis-bergkamp.jpeg"
},
{
    word: "PATRICK VIEIRA",
    wordAr: "باتريك فييرا",
    hints: ["French legend", "Retired", "Arsenal captain"],
    hintsAr: ["أسطورة فرنسية", "معتزل", "قائد آرسنال"],
    category: "football",
    image: "images/patrick-vieira.jpeg"
},
{
    word: "ROBERTO CARLOS",
    wordAr: "روبرتو كارلوس",
    hints: ["Brazilian defender", "Retired", "Free-kick specialist"],
    hintsAr: ["مدافع برازيلي", "معتزل", "خبير الركلات الحرة"],
    category: "football",
    image: "images/roberto-carlos.jpeg"
},
{
    word: "RONALDO NAZARIO",
    wordAr: "رونالدو نازاريو",
    hints: ["Brazilian legend", "Retired", "El Fenomeno"],
    hintsAr: ["أسطورة برازيلية", "معتزل", "الظاهرة"],
    category: "football",
    image: "images/ronaldo-nazario.jpeg"
},

{
    word: "KAKA",
    wordAr: "كاكا",
    hints: ["Brazilian midfielder", "Retired", "Ballon d'Or 2007"],
    hintsAr: ["لاعب وسط برازيلي", "معتزل", "الكرة الذهبية 2007"],
    category: "football",
    image: "images/kaka.jpeg"
},
{
    word: "STEVEN GERRARD",
    wordAr: "ستيفن جيرارد",
    hints: ["English legend", "Retired", "Liverpool captain"],
    hintsAr: ["أسطورة إنجليزية", "معتزل", "قائد ليفربول"],
    category: "football",
    image: "images/steven-gerrard.jpeg"
},
{
    word: "FERNANDO TORRES",
    wordAr: "فرناندو توريس",
    hints: ["Spanish striker", "Retired", "Liverpool legend"],
    hintsAr: ["مهاجم إسباني", "معتزل", "أسطورة ليفربول"],
    category: "football",
    image: "images/fernando-torres.jpeg"
},
{
    word: "JAMIE CARRAGHER",
    wordAr: "جيمي كاراغر",
    hints: ["English defender", "Retired", "Liverpool legend"],
    hintsAr: ["مدافع إنجليزي", "معتزل", "أسطورة ليفربول"],
    category: "football",
    image: "images/jamie-carragher.jpeg"
},


{
    word: "OUSMANE DEMBELE",
    wordAr: "عثمان ديمبلي",
    hints: ["French winger", "PSG", "Barcelona product"],
    hintsAr: ["جناح فرنسي", "باريس", "منتوج برشلونة"],
    category: "football",
    image: "images/ousmane-dembele.jpeg"
},
{
    word: "FRENKIE DE JONG",
    wordAr: "فرينكي دي يونغ",
    hints: ["Dutch midfielder", "Barcelona", "Ajax product"],
    hintsAr: ["لاعب وسط هولندي", "برشلونة", "منتوج أياكس"],
    category: "football",
    image: "images/frenkie-de-jong.jpeg"
},
{
    word: "PEDRI",
    wordAr: "بيدري",
    hints: ["Spanish midfielder", "Barcelona", "Golden Boy"],
    hintsAr: ["لاعب وسط إسباني", "برشلونة", "الفتى الذهبي"],
    category: "football",
    image: "images/pedri.jpeg"
},
{
    word: "GAVI",
    wordAr: "غافي",
    hints: ["Spanish midfielder", "Barcelona", "Young talent"],
    hintsAr: ["لاعب وسط إسباني", "برشلونة", "موهبة شابة"],
    category: "football",
    image: "images/gavi.jpeg"
},
{
    word: "RONALD ARAUJO",
    wordAr: "رونالد أراوجو",
    hints: ["Uruguayan defender", "Barcelona", "Defensive rock"],
    hintsAr: ["مدافع أوروغواياني", "برشلونة", "صخرة دفاعية"],
    category: "football",
    image: "images/ronald-araujo.jpeg"
},
{
    word: "ALEJANDRO BALDE",
    wordAr: "أليخاندرو بالدي",
    hints: ["Spanish defender", "Barcelona", "Rising star"],
    hintsAr: ["مدافع إسباني", "برشلونة", "نجم صاعد"],
    category: "football",
    image: "images/alejandro-balde.jpeg"
},
{
    word: "ILKAY GUNDOGAN",
    wordAr: "إلكاي غوندوغان",
    hints: ["German midfielder", "Barcelona", "Manchester City legend"],
    hintsAr: ["لاعب وسط ألماني", "برشلونة", "أسطورة مانشستر سيتي"],
    category: "football",
    image: "images/ilkay-gundogan.jpeg"
},
{
    word: "JOAO FELIX",
    wordAr: "جواو فيليكس",
    hints: ["Portuguese forward", "Barcelona", "Atletico flop"],
    hintsAr: ["مهاجم برتغالي", "برشلونة", "فشل أتلتيكو"],
    category: "football",
    image: "images/joao-felix.jpeg"
},
{
    word: "JULES KOUNDE",
    wordAr: "جوليس كوندي",
    hints: ["French defender", "Barcelona", "Versatile defender"],
    hintsAr: ["مدافع فرنسي", "برشلونة", "مدافع متعدد"],
    category: "football",
    image: "images/jules-kounde.jpeg"
},
{
    word: "MARC ANDRE TER STEGEN",
    wordAr: "مارك أندريه تير شتيغن",
    hints: ["German goalkeeper", "Barcelona", "Sweeper keeper"],
    hintsAr: ["حارس ألماني", "برشلونة", "حارس متقدم"],
    category: "football",
    image: "images/marc-andre-ter-stegen.jpeg"
},
{
    word: "FEDERICO VALVERDE",
    wordAr: "فيديريكو فالفيردي",
    hints: ["Uruguayan midfielder", "Real Madrid", "Box-to-box"],
    hintsAr: ["لاعب وسط أوروغواياني", "ريال مدريد", "شامل المهام"],
    category: "football",
    image: "images/federico-valverde.jpeg"
},
{
    word: "AURELIEN TCHOUAMENI",
    wordAr: "أورليان تشواميني",
    hints: ["French midfielder", "Real Madrid", "Defensive shield"],
    hintsAr: ["لاعب وسط فرنسي", "ريال مدريد", "درع دفاعي"],
    category: "football",
    image: "images/aurelien-tchouameni.jpeg"
},
{
    word: "EDUARDO CAMAVINGA",
    wordAr: "إدواردو كامافينجا",
    hints: ["French midfielder", "Real Madrid", "Versatile talent"],
    hintsAr: ["لاعب وسط فرنسي", "ريال مدريد", "موهبة متعددة"],
    category: "football",
    image: "images/eduardo-camavinga.jpeg"
},
{
    word: "DAVID ALABA",
    wordAr: "دافيد ألابا",
    hints: ["Austrian defender", "Real Madrid", "Versatile defender"],
    hintsAr: ["مدافع نمساوي", "ريال مدريد", "مدافع متعدد"],
    category: "football",
    image: "images/david-alaba.jpeg"
},
{
    word: "JUDE BELLINGHAM",
    wordAr: "جود بيلينغهام",
    hints: ["English midfielder", "Real Madrid", "Golden Boy 2023"],
    hintsAr: ["لاعب وسط إنجليزي", "ريال مدريد", "الفتى الذهبي 2023"],
    category: "football",
    image: "images/jude-bellingham.jpeg"
},
{
    word: "ARDA GULER",
    wordAr: "أردا غولر",
    hints: ["Turkish midfielder", "Real Madrid", "Wonderkid"],
    hintsAr: ["لاعب وسط تركي", "ريال مدريد", "طفل معجزة"],
    category: "football",
    image: "images/arda-guler.jpeg"
},
{
    word: "BRYAN ZARAGOZA",
    wordAr: "بريان سرقسطة",
    hints: ["Spanish winger", "Bayern Munich", "Granada product"],
    hintsAr: ["جناح إسباني", "بايرن ميونخ", "منتوج غرناطة"],
    category: "football",
    image: "images/bryan-zaragoza.jpeg"
},
{//
    word: "LEROY SANE",
    wordAr: "ليروي ساني",
    hints: ["German winger", "Bayern Munich", "Manchester City product"],
    hintsAr: ["جناح ألماني", "بايرن ميونخ", "منتوج مانشستر سيتي"],
    category: "football",
    image: "images/leroy-sane.jpeg"
},
{
    word: "SERGE GNABRY",
    wordAr: "سيرج جنابري",
    hints: ["German winger", "Bayern Munich", "Arsenal product"],
    hintsAr: ["جناح ألماني", "بايرن ميونخ", "منتوج آرسنال"],
    category: "football",
    image: "images/serge-gnabry.jpeg"
},
{
    word: "ALPHONSO DAVIES",
    wordAr: "ألفونسو ديفيز",
    hints: ["Canadian defender", "Bayern Munich", "Speedster"],
    hintsAr: ["مدافع كندي", "بايرن ميونخ", "سريع"],
    category: "football",
    image: "images/alphonso-davies.jpeg"
},

{
    word: "BILAL EL KHANNUS",
    wordAr: "بلال الخنوس",
    hints: ["Moroccan midfielder", "Gent", "Rising talent"],
    hintsAr: ["لاعب وسط مغربي", "جينت", "موهبة صاعدة"],
    category: "football",
    image: "images/bilal-el-khannus.jpeg"
},

{
    word: "ANASS ZAROURY",
    wordAr: "أنس زروري",
    hints: ["Moroccan winger", "Burnley", "World Cup 2022"],
    hintsAr: ["جناح مغربي", "بيرنلي", "كأس العالم 2022"],
    category: "football",
    image: "images/anass-zaroury.jpeg"
},
{
    word: "ZAKARIA ABOUKHLA",
    wordAr: "زكريا أبوخل",
    hints: ["Moroccan striker", "Wydad", "Local talent"],
    hintsAr: ["مهاجم مغربي", "الوداد", "موهبة محلية"],
    category: "football",
    image: "images/zakaria-aboukhla.jpeg"
}



];
