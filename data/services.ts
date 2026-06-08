export type ServiceCluster = "find-buy" | "protect-ship" | "build-grow" | "represent-support";

export interface Service {
  slug: string;
  cluster: ServiceCluster;

  title: { en: string; ar: string };
  shortDesc: { en: string; ar: string };
  description: { en: string; ar: string };
  bullets: { en: string[]; ar: string[] };
  cta: { en: string; ar: string };
  whatsappMsg: { en: string; ar: string };
}

export const clusterMeta: Record<ServiceCluster, { key: string; services: string[] }> = {
  "find-buy": {
    key: "cluster1",
    services: ["sourcing", "niche"],
  },
  "protect-ship": {
    key: "cluster2",
    services: ["qc", "logistics"],
  },
  "build-grow": {
    key: "cluster3",
    services: ["productdev", "marketing", "digital"],
  },
  "represent-support": {
    key: "cluster4",
    services: ["consulting", "representation", "aftersales"],
  },
};

export const services: Service[] = [
  {
    slug: "sourcing",
    cluster: "find-buy",
    title: {
      en: "Sourcing & Procurement",
      ar: "التوريد والمشتريات",
    },
    shortDesc: {
      en: "Product sourcing from Yiwu and Chinese manufacturers, from sample to bulk.",
      ar: "توريد المنتجات من يوو والمصانع الصينية، من العينة حتى الطلب الكبير.",
    },
    description: {
      en: "We walk all five zones of the Yiwu International Trade Market daily to find exactly what you need at competitive prices. Whether you need a single supplier, an OEM manufacturer for a custom design, or small-batch buying without MOQ barriers — we handle the ground work so you can focus on your business.",
      ar: "نتجول في المناطق الخمس لسوق يوو الدولي يومياً للعثور على ما تحتاجه بأسعار تنافسية. سواء احتجت إلى مورد واحد أو مصنع OEM لتصميم مخصص أو شراء بكميات صغيرة دون عوائق الحد الأدنى للطلب — نتولى العمل الميداني حتى تتفرغ لعملك.",
    },
    bullets: {
      en: [
        "Product sourcing across all 5 zones of Yiwu International Trade Market",
        "OEM/ODM manufacturer discovery for custom or white-label products",
        "Price negotiation and payment term management",
        "Small-batch and low MOQ buying solutions",
        "Sample purchasing and international shipping",
        "Supplier vetting and background verification",
      ],
      ar: [
        "توريد المنتجات من جميع المناطق الخمس في سوق يوو الدولي",
        "البحث عن مصانع OEM/ODM للمنتجات المخصصة أو ذات العلامة البيضاء",
        "التفاوض على الأسعار وإدارة شروط الدفع",
        "حلول الشراء بكميات صغيرة ودون قيود الحد الأدنى للطلب",
        "شراء العينات وشحنها دولياً",
        "فحص الموردين والتحقق من خلفياتهم",
      ],
    },
    cta: {
      en: "Tell us what product you're looking for — we'll find it.",
      ar: "أخبرنا عن المنتج الذي تبحث عنه — سنجده لك.",
    },
    whatsappMsg: {
      en: "Hi Ifrit, I'm interested in your Sourcing & Procurement service.",
      ar: "مرحباً عفريت، أودّ الاستفسار عن خدمة التوريد والمشتريات.",
    },
  },
  {
    slug: "qc",
    cluster: "protect-ship",
    title: {
      en: "Quality Control & Inspection",
      ar: "ضبط الجودة والفحص",
    },
    shortDesc: {
      en: "Pre-production, during-production, and pre-shipment inspections to protect every order.",
      ar: "فحص ما قبل الإنتاج وأثناءه وقبل الشحن لحماية كل طلب.",
    },
    description: {
      en: "The costliest mistake in China sourcing is discovering defects after goods arrive at your warehouse. Our inspection services intercept problems at every stage — before production begins, mid-run, and before the container is sealed. We give you the documentation and photographs to make informed decisions before it's too late.",
      ar: "أكثر الأخطاء كلفة في استيراد البضائع من الصين هو اكتشاف العيوب بعد وصول البضائع لمستودعك. خدمات الفحص لدينا تعترض المشاكل في كل مرحلة — قبل بدء الإنتاج، في المنتصف، وقبل إغلاق الحاوية. نزودك بالوثائق والصور لاتخاذ قرارات مدروسة قبل فوات الأوان.",
    },
    bullets: {
      en: [
        "Pre-Production Inspection (PPI) — verify materials and factory setup before production begins",
        "During-Production Inspection (DPI) — catch defects mid-run before full production is complete",
        "Pre-Shipment Inspection (PSI) — inspect finished goods against your exact specifications",
        "Container Loading Supervision (CLS) — verify quantities, labelling, and loading procedure",
        "Detailed inspection report with photographs delivered within 24 hours",
        "Defect classification: critical, major, and minor with AQL sampling standards",
      ],
      ar: [
        "فحص ما قبل الإنتاج (PPI) — التحقق من المواد وإعداد المصنع قبل بدء الإنتاج",
        "فحص أثناء الإنتاج (DPI) — اكتشاف العيوب في منتصف الإنتاج قبل اكتماله",
        "فحص ما قبل الشحن (PSI) — فحص البضائع الجاهزة وفق مواصفاتك الدقيقة",
        "الإشراف على تحميل الحاوية (CLS) — التحقق من الكميات والتسميات وإجراءات التحميل",
        "تقرير فحص مفصّل بالصور يُسلَّم خلال ٢٤ ساعة",
        "تصنيف العيوب: حرجة، رئيسية، وثانوية وفق معايير أخذ العينات AQL",
      ],
    },
    cta: {
      en: "Protect your next order with a professional inspection.",
      ar: "احمِ طلبك القادم بفحص احترافي.",
    },
    whatsappMsg: {
      en: "Hi Ifrit, I need a Quality Control inspection for my order.",
      ar: "مرحباً عفريت، أحتاج إلى فحص جودة لطلبيتي.",
    },
  },
  {
    slug: "logistics",
    cluster: "protect-ship",
    title: {
      en: "Logistics & Shipping",
      ar: "الشحن والخدمات اللوجستية",
    },
    shortDesc: {
      en: "End-to-end movement of goods from Yiwu to anywhere in the world.",
      ar: "نقل متكامل للبضائع من يوو إلى أي مكان في العالم.",
    },
    description: {
      en: "Getting goods from a Yiwu supplier to your warehouse involves more steps than most buyers realise. We manage order picking, packing, labelling, customs documentation, freight booking, and delivery coordination — removing the logistics complexity so your goods arrive correctly, on time, and fully documented.",
      ar: "نقل البضائع من مورد في يوو إلى مستودعك ينطوي على خطوات أكثر مما يدرك معظم المستوردين. نتولى التقاط الطلبات، التعبئة، التسمية، وثائق الجمارك، حجز الشحن، وتنسيق التسليم — نزيل تعقيدات اللوجستيات حتى تصل بضائعك بشكل صحيح وفي الوقت المحدد وموثقة بالكامل.",
    },
    bullets: {
      en: [
        "Order picking, packing, and labelling to exact client specifications",
        "Sea freight (FCL and LCL) and air freight coordination",
        "Customs documentation and export clearance from China",
        "Multi-supplier consolidation — combine orders from multiple Yiwu suppliers",
        "Real-time shipment tracking and updates",
        "Door-to-door delivery to Middle East, Europe, and Southeast Asia",
      ],
      ar: [
        "التقاط الطلبات، التعبئة، والتسمية وفق مواصفات العميل",
        "تنسيق الشحن البحري (FCL وLCL) والشحن الجوي",
        "وثائق الجمارك وتخليص الصادرات من الصين",
        "دمج الموردين المتعددين — الجمع بين طلبات من موردين متعددين في يوو",
        "تتبع الشحنات في الوقت الفعلي مع تحديثات منتظمة",
        "التوصيل من باب لباب إلى الشرق الأوسط وأوروبا وجنوب شرق آسيا",
      ],
    },
    cta: {
      en: "Get a shipping quote for your next order.",
      ar: "احصل على عرض شحن لطلبك القادم.",
    },
    whatsappMsg: {
      en: "Hi Ifrit, I need a shipping quote from Yiwu.",
      ar: "مرحباً عفريت، أحتاج إلى عرض شحن من يوو.",
    },
  },
  {
    slug: "consulting",
    cluster: "represent-support",
    title: {
      en: "Business Consulting & Company Setup",
      ar: "الاستشارات التجارية وتأسيس الشركات",
    },
    shortDesc: {
      en: "Legal setup, contract drafting, and strategic guidance for foreign companies operating in China.",
      ar: "الإعداد القانوني، صياغة العقود، والتوجيه الاستراتيجي للشركات الأجنبية العاملة في الصين.",
    },
    description: {
      en: "Operating in China as a foreign buyer or investor requires navigating a legal and regulatory landscape that is genuinely different from Western or Middle Eastern norms. We provide practical consulting on company structures, draft and review bilingual commercial contracts, and guide foreign businesses through their first operations in the Chinese market.",
      ar: "العمل في الصين كمستورد أجنبي أو مستثمر يتطلب التعامل مع مشهد قانوني وتنظيمي مختلف حقاً عن الأنظمة الغربية أو الشرق أوسطية. نقدم استشارات عملية حول هياكل الشركات، ونصيغ ونراجع العقود التجارية ثنائية اللغة، ونوجه الشركات الأجنبية في عملياتها الأولى في السوق الصيني.",
    },
    bullets: {
      en: [
        "Bilingual contract drafting and review (Chinese/English/Arabic)",
        "Supplier agreement templates customised to your requirements",
        "WFOE and company structure advisory for market entry",
        "Regulatory compliance guidance for product categories",
        "Trade term education — Incoterms, payment structures, risk allocation",
        "Ongoing advisory retainer for established buyers",
      ],
      ar: [
        "صياغة ومراجعة العقود ثلاثية اللغة (صيني/إنجليزي/عربي)",
        "نماذج عقود موردين مخصصة لمتطلباتك",
        "استشارات هيكلة الشركات WFOE لدخول السوق",
        "إرشادات الامتثال التنظيمي لفئات المنتجات",
        "التعليم التجاري — Incoterms، هياكل الدفع، توزيع المخاطر",
        "خدمة استشارية دورية للمستوردين الراسخين",
      ],
    },
    cta: {
      en: "Speak with us before your first China contract.",
      ar: "تحدث معنا قبل عقدك الأول في الصين.",
    },
    whatsappMsg: {
      en: "Hi Ifrit, I need Business Consulting for my China operations.",
      ar: "مرحباً عفريت، أحتاج إلى استشارات تجارية لعملياتي في الصين.",
    },
  },
  {
    slug: "productdev",
    cluster: "build-grow",
    title: {
      en: "Product Development",
      ar: "تطوير المنتجات",
    },
    shortDesc: {
      en: "From concept to production-ready: packaging design, manufacturing support, and custom product development.",
      ar: "من الفكرة إلى الإنتاج الجاهز: تصميم التغليف، دعم التصنيع، وتطوير المنتجات المخصصة.",
    },
    description: {
      en: "China's manufacturing ecosystem can turn an idea into a production-ready product faster and cheaper than anywhere else in the world — if you know how to navigate it. We bridge the gap between your product concept and a finished, market-ready item: design, prototyping, packaging, and manufacturing coordination all in one place.",
      ar: "المنظومة الصناعية الصينية قادرة على تحويل فكرة إلى منتج جاهز للإنتاج أسرع وأرخص من أي مكان آخر في العالم — إذا عرفت كيف تتعامل معها. نسدّ الفجوة بين مفهوم منتجك والعنصر النهائي الجاهز للسوق: التصميم، النماذج الأولية، التغليف، وتنسيق التصنيع في مكان واحد.",
    },
    bullets: {
      en: [
        "Custom product design and specification development",
        "Factory identification and prototyping coordination",
        "Packaging design, printing, and retail-ready presentation",
        "Sample iteration until the product meets your standard",
        "Bill of materials and cost optimisation",
        "Production run management from first unit to final shipment",
      ],
      ar: [
        "تصميم المنتجات المخصصة وتطوير المواصفات",
        "تحديد المصانع وتنسيق النماذج الأولية",
        "تصميم التغليف، الطباعة، والتقديم الجاهز للبيع بالتجزئة",
        "تكرار العينات حتى يلبي المنتج معاييرك",
        "قائمة المواد وتحسين التكاليف",
        "إدارة دفعة الإنتاج من الوحدة الأولى حتى الشحنة النهائية",
      ],
    },
    cta: {
      en: "Share your product idea — let's build it together.",
      ar: "شاركنا فكرة منتجك — لنبنيها معاً.",
    },
    whatsappMsg: {
      en: "Hi Ifrit, I have a product idea I'd like to develop in China.",
      ar: "مرحباً عفريت، لديّ فكرة منتج أودّ تطويرها في الصين.",
    },
  },
  {
    slug: "marketing",
    cluster: "build-grow",
    title: {
      en: "Marketing & Sales",
      ar: "التسويق والمبيعات",
    },
    shortDesc: {
      en: "Trade show representation, China market access, and sales support for foreign brands.",
      ar: "تمثيل المعارض التجارية، الوصول إلى السوق الصيني، ودعم المبيعات للعلامات الأجنبية.",
    },
    description: {
      en: "The Canton Fair, Yiwu Fair, and China's major trade exhibitions are where global supply chains are built. We attend on your behalf, scout competitors, identify opportunities, and represent your interests on the ground. We also support foreign brands looking to enter the Chinese consumer market through the right distribution and platform channels.",
      ar: "معرض كانتون، معرض يوو، والمعارض التجارية الكبرى في الصين هي حيث تُبنى سلاسل الإمداد العالمية. نحضر نيابةً عنك، نرصد المنافسين، نحدد الفرص، ونمثل مصالحك على الأرض. كما ندعم العلامات الأجنبية الراغبة في دخول سوق المستهلك الصيني عبر قنوات التوزيع والمنصات المناسبة.",
    },
    bullets: {
      en: [
        "Canton Fair and Yiwu Fair attendance and reporting",
        "Competitor intelligence and market trend analysis",
        "Trade show lead generation on your behalf",
        "WeChat, Tmall, and JD.com market entry advisory",
        "Chinese-language sales collateral creation",
        "KOL and distributor network introductions",
      ],
      ar: [
        "الحضور في معرض كانتون ومعرض يوو وإعداد التقارير",
        "استخبارات المنافسين وتحليل اتجاهات السوق",
        "توليد العملاء المحتملين في المعارض التجارية نيابةً عنك",
        "استشارات دخول سوق WeChat وTmall وJD.com",
        "إنشاء مواد مبيعات باللغة الصينية",
        "تقديمات لشبكات KOL والموزعين",
      ],
    },
    cta: {
      en: "Let's put your brand in front of the right buyers.",
      ar: "دعنا نضع علامتك التجارية أمام المشترين المناسبين.",
    },
    whatsappMsg: {
      en: "Hi Ifrit, I'm interested in your Marketing & Sales services in China.",
      ar: "مرحباً عفريت، أهتم بخدمات التسويق والمبيعات في الصين.",
    },
  },
  {
    slug: "aftersales",
    cluster: "represent-support",
    title: {
      en: "After-Sales Support",
      ar: "دعم ما بعد البيع",
    },
    shortDesc: {
      en: "Spare parts sourcing, warranty coordination, and ongoing supplier relationship management.",
      ar: "توريد قطع الغيار، تنسيق الضمان، وإدارة العلاقات المستمرة مع الموردين.",
    },
    description: {
      en: "The relationship with a supplier doesn't end at shipment — and neither does ours with you. We handle the often-overlooked post-purchase phase: sourcing and dispatching spare parts worldwide, managing warranty claims with Chinese suppliers on your behalf, and maintaining the supplier relationship so your next order is as good as your first.",
      ar: "العلاقة مع المورد لا تنتهي عند الشحن — وكذلك علاقتنا معك. نتولى مرحلة ما بعد الشراء التي كثيراً ما يُهملها: توريد وإرسال قطع الغيار عالمياً، إدارة مطالبات الضمان مع الموردين الصينيين نيابةً عنك، والحفاظ على علاقة المورد حتى يكون طلبك القادم بجودة طلبك الأول.",
    },
    bullets: {
      en: [
        "Spare parts sourcing and international dispatch",
        "Warranty claim management with Chinese suppliers",
        "Defect resolution and replacement coordination",
        "Ongoing supplier relationship maintenance",
        "Quality issue documentation for dispute resolution",
        "Reorder management and pricing renegotiation",
      ],
      ar: [
        "توريد قطع الغيار والإرسال الدولي",
        "إدارة مطالبات الضمان مع الموردين الصينيين",
        "حل العيوب وتنسيق الاستبدال",
        "صيانة العلاقة المستمرة مع الموردين",
        "توثيق مشاكل الجودة لحل النزاعات",
        "إدارة إعادة الطلبات وإعادة التفاوض على الأسعار",
      ],
    },
    cta: {
      en: "Don't let a bad batch damage a good relationship.",
      ar: "لا تدع دفعة سيئة تُفسد علاقة جيدة.",
    },
    whatsappMsg: {
      en: "Hi Ifrit, I need help with after-sales support for a China order.",
      ar: "مرحباً عفريت، أحتاج مساعدة في دعم ما بعد البيع لطلب من الصين.",
    },
  },
  {
    slug: "representation",
    cluster: "represent-support",
    title: {
      en: "Representation & Agency",
      ar: "التمثيل والوكالة",
    },
    shortDesc: {
      en: "Your eyes, ears, and hands in Yiwu — attending meetings, signing contracts, and negotiating on your behalf.",
      ar: "عيونك وأذنيك ويديك في يوو — حضور الاجتماعات، توقيع العقود، والتفاوض نيابةً عنك.",
    },
    description: {
      en: "Not every buyer can be in Yiwu when the deal needs to happen. We act as your formal representative on the ground: attending supplier meetings, negotiating in Chinese with cultural fluency, signing contracts as your authorised agent, and providing full written reports on every interaction. Your interests, represented as if you were there yourself.",
      ar: "ليس بمقدور كل مستورد أن يكون في يوو عند انعقاد الصفقة. نعمل كممثلك الرسمي على الأرض: حضور اجتماعات الموردين، التفاوض بالصينية بطلاقة ثقافية، توقيع العقود كوكيلك المفوض، وتقديم تقارير مكتوبة كاملة عن كل تفاعل. مصالحك، تُمثَّل كما لو كنت حاضراً بنفسك.",
    },
    bullets: {
      en: [
        "Supplier meeting attendance with full written debrief",
        "Contract signing as authorised agent for foreign principals",
        "Language and cultural negotiation bridging",
        "Factory visits and facility assessment reports",
        "Trade show attendance and competitor intelligence",
        "Ongoing local representation retainer",
      ],
      ar: [
        "حضور اجتماعات الموردين مع إحاطة مكتوبة كاملة",
        "توقيع العقود كوكيل مفوض للأطراف الأجنبية",
        "الجسر اللغوي والثقافي في التفاوض",
        "زيارات المصانع وتقارير تقييم المنشآت",
        "الحضور في المعارض التجارية واستخبارات المنافسين",
        "خدمة التمثيل المحلي المستمر",
      ],
    },
    cta: {
      en: "We'll be there so you don't have to be.",
      ar: "سنكون هناك حتى لا تضطر أنت لذلك.",
    },
    whatsappMsg: {
      en: "Hi Ifrit, I need representation services in Yiwu.",
      ar: "مرحباً عفريت، أحتاج إلى خدمات تمثيل في يوو.",
    },
  },
  {
    slug: "digital",
    cluster: "build-grow",
    title: {
      en: "Digital & Tech Services",
      ar: "الخدمات الرقمية والتقنية",
    },
    shortDesc: {
      en: "SEO, digital marketing, and custom web platforms built for trading and sourcing businesses.",
      ar: "SEO، التسويق الرقمي، ومنصات ويب مخصصة لشركات التجارة والاستيراد.",
    },
    description: {
      en: "Trading businesses that invest in their digital presence win clients that competitors never reach. We build and market web platforms specifically for companies in the China sourcing, import/export, and trading space — with deep understanding of the audience, the trust signals that convert global buyers, and the technical execution to deliver results.",
      ar: "الشركات التجارية التي تستثمر في حضورها الرقمي تكسب عملاء لا يصل إليهم المنافسون. نبني ونسوّق منصات ويب مخصصة للشركات العاملة في مجال الاستيراد من الصين والتجارة — مع فهم عميق للجمهور، ومؤشرات الثقة التي تحوّل المستوردين العالميين، والتنفيذ التقني لتحقيق النتائج.",
    },
    bullets: {
      en: [
        "Multilingual website design and development (Arabic, English, Chinese)",
        "SEO strategy and content for trading and sourcing companies",
        "Google Ads and Meta Ads campaign management",
        "B2B lead generation funnels for import/export businesses",
        "Order management and client portal development",
        "Branding and visual identity for trading companies",
      ],
      ar: [
        "تصميم وتطوير مواقع متعددة اللغات (عربي، إنجليزي، صيني)",
        "استراتيجية SEO ومحتوى لشركات التجارة والاستيراد",
        "إدارة حملات Google Ads وMeta Ads",
        "قمع توليد العملاء B2B لشركات الاستيراد والتصدير",
        "تطوير بوابات إدارة الطلبات وبوابات العملاء",
        "العلامة التجارية والهوية البصرية للشركات التجارية",
      ],
    },
    cta: {
      en: "Build the platform your trading business deserves.",
      ar: "ابنِ المنصة التي تستحقها شركتك التجارية.",
    },
    whatsappMsg: {
      en: "Hi Ifrit, I'm interested in your Digital & Tech services.",
      ar: "مرحباً عفريت، أهتم بالخدمات الرقمية والتقنية.",
    },
  },
  {
    slug: "niche",
    cluster: "find-buy",
    title: {
      en: "Niche Yiwu Specialty Services",
      ar: "خدمات يوو المتخصصة",
    },
    shortDesc: {
      en: "On-the-ground Yiwu services only someone physically based here can deliver.",
      ar: "خدمات ميدانية في يوو لا يستطيع تقديمها إلا من هو موجود هنا فعلياً.",
    },
    description: {
      en: "Some things require physical presence in Yiwu — and that's exactly where we are. From guided market tours for first-time buyers to virtual sourcing on behalf of remote clients, price verification audits, and real-time translation and bargaining support at supplier meetings — these are the hyper-local services that make the difference between a good buying trip and a great one.",
      ar: "بعض الأمور تستلزم الوجود الفعلي في يوو — وهذا بالضبط مكاننا. من جولات السوق الموجهة للمستوردين الجدد إلى التوريد الافتراضي نيابةً عن العملاء البعيدين، والتحقق من الأسعار، ودعم الترجمة والمساومة في الوقت الفعلي عند اجتماعات الموردين — هذه هي الخدمات الميدانية الدقيقة التي تُحدث الفرق بين رحلة شراء جيدة ورحلة ممتازة.",
    },
    bullets: {
      en: [
        "Guided market tours through all 5 Yiwu market districts",
        "Virtual sourcing — we walk the market on your behalf with live video or photo reports",
        "Market price verification — audit whether your current supplier is quoting fairly",
        "Airport and train station pickup with market orientation for first-time visitors",
        "Real-time translation and bargaining accompaniment at supplier meetings",
        "Yiwu market intelligence reports for specific product categories",
      ],
      ar: [
        "جولات سوق موجهة عبر المناطق الخمس في يوو",
        "التوريد الافتراضي — نتجول في السوق نيابةً عنك مع تقارير فيديو أو صور مباشرة",
        "التحقق من أسعار السوق — تدقيق ما إذا كان مورّدك الحالي يسعّر بشكل عادل",
        "الاستقبال في المطار أو محطة القطار مع التوجيه للزوار الجدد",
        "الترجمة الفورية والمرافقة في المساومة عند اجتماعات الموردين",
        "تقارير استخبارات سوق يوو لفئات منتجات محددة",
      ],
    },
    cta: {
      en: "Tell us what you need done in Yiwu — we're already here.",
      ar: "أخبرنا بما تحتاج إنجازه في يوو — نحن هنا بالفعل.",
    },
    whatsappMsg: {
      en: "Hi Ifrit, I need help with something in Yiwu market.",
      ar: "مرحباً عفريت، أحتاج مساعدة في سوق يوو.",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCluster(cluster: ServiceCluster): Service[] {
  return services.filter((s) => s.cluster === cluster);
}
