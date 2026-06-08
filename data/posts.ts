export interface Post {
  slug: string;
  publishedAt: string; // ISO date string YYYY-MM-DD
  category: PostCategory;
  readingTime: { en: number; ar: number }; // minutes
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  body: { en: string; ar: string }; // HTML string (rendered from MDX-style markdown)
  tags: string[];
  seoTitle?: { en: string; ar: string };
  seoDescription?: { en: string; ar: string };
}

export type PostCategory =
  | "yiwu-guide"
  | "sourcing-tips"
  | "logistics"
  | "trade-insights"
  | "customs";

export const categoryMeta: Record<PostCategory, { en: string; ar: string }> = {
  "yiwu-guide":     { en: "Yiwu Guide",      ar: "دليل يوو" },
  "sourcing-tips":  { en: "Sourcing Tips",    ar: "نصائح التوريد" },
  "logistics":      { en: "Logistics",        ar: "الشحن والخدمات اللوجستية" },
  "trade-insights": { en: "Trade Insights",   ar: "رؤى تجارية" },
  "customs":        { en: "Customs & Import", ar: "الجمارك والاستيراد" },
};

export const posts: Post[] = [
  {
    slug: "yiwu-international-trade-market-guide",
    publishedAt: "2025-06-01",
    category: "yiwu-guide",
    readingTime: { en: 7, ar: 7 },
    tags: ["yiwu", "wholesale", "trade market", "sourcing"],
    title: {
      en: "The Complete Guide to Yiwu International Trade Market",
      ar: "الدليل الشامل لسوق يوو الدولي للتجارة",
    },
    excerpt: {
      en: "Everything a first-time buyer needs to know before stepping into the world's largest wholesale market — zones, product categories, negotiation, and logistics.",
      ar: "كل ما يحتاجه المشتري للمرة الأولى قبل دخول أكبر سوق بيع بالجملة في العالم — المناطق وفئات المنتجات والتفاوض والخدمات اللوجستية.",
    },
    seoTitle: {
      en: "Yiwu International Trade Market: Complete Buyer's Guide | Ifrit",
      ar: "دليل المشتري الشامل لسوق يوو الدولي | عفريت",
    },
    seoDescription: {
      en: "A complete guide to navigating the Yiwu International Trade Market — 5 zones, 75,000 booths, 400,000+ product categories. Written by a Yiwu-based sourcing agent.",
      ar: "دليل شامل للتعامل مع سوق يوو الدولي — 5 مناطق و75,000 كشك وأكثر من 400,000 فئة منتج. من كتابة وكيل توريد مقيم في يوو.",
    },
    body: {
      en: `<p>The Yiwu International Trade Market — known locally as <strong>Futian Market</strong> — is the world's single largest wholesale market by floor space and product variety. If you're sourcing from China, understanding how it's structured is not optional. It's the foundation of your buying strategy.</p>

<h2>The Five Districts</h2>
<p>The market is divided into five districts (Districts 1–5), each covering specific product categories. Knowing which district handles what saves you hours of aimless walking.</p>
<ul>
  <li><strong>District 1</strong> — Jewelry, accessories, cosmetics, glasses, umbrellas, hardware, locks, tools</li>
  <li><strong>District 2</strong> — Toys, holiday supplies, gifts, decorations, and sporting goods</li>
  <li><strong>District 3</strong> — Arts, crafts, printing, photo equipment, and stationery</li>
  <li><strong>District 4</strong> — Electronics, office supplies, watches, clocks, and musical instruments</li>
  <li><strong>District 5</strong> — Textiles, clothing, shoes, bags, and fashion accessories</li>
</ul>
<p>Each district has multiple floors. District 5 alone spans several floors with thousands of textile and garment suppliers.</p>

<h2>How to Navigate</h2>
<p>The market is open <strong>Monday through Friday, 9:00 AM to 5:00 PM</strong>. It's closed on weekends, Chinese national holidays, and for about two weeks during the Chinese New Year period (typically late January to mid-February).</p>
<p>The most effective strategy for a first visit is to walk the relevant district systematically — booth by booth in each row. Don't jump around based on visible products. Suppliers in the same row often carry complementary goods, and comparison pricing requires seeing adjacent booths.</p>
<p>Bring your product specifications in written form — dimensions, materials, target price, quantity. Most booth operators speak limited English but can read specifications. Having a Chinese-speaking agent with you transforms the experience from frustrating to efficient.</p>

<h2>Pricing and Negotiation</h2>
<p>Quoted prices at the market are never fixed. The listed price on a booth's catalogue or price board is a starting point — typically 20–40% above what a serious buyer will actually pay. Volume matters: a buyer ordering 1,000 units has fundamentally different leverage than one ordering 100.</p>
<p>Key negotiation factors:</p>
<ul>
  <li>Order quantity (MOQ and volume above MOQ)</li>
  <li>Payment terms (full upfront vs deposit + balance)</li>
  <li>Packaging requirements (custom vs standard)</li>
  <li>Delivery timeline (rush orders cost more)</li>
  <li>Sample requirements before bulk order</li>
</ul>
<p>Never pay the first quoted price. Never show strong interest in a specific product before you've compared at least three suppliers for the same item.</p>

<h2>From Market to Shipment</h2>
<p>Finding a supplier in the market is step one. You still need to manage: sample verification, proforma invoice review, production monitoring, quality inspection before packing, export documentation, and freight forwarding. Each of these stages has failure points that experienced buyers — or a Yiwu-based agent — know to watch for.</p>
<p>If you're buying across multiple product categories from multiple suppliers, consolidation is critical. Yiwu has hundreds of freight forwarders who will consolidate your goods from different suppliers into a single container or LCL shipment.</p>

<h2>Working with an Agent</h2>
<p>A licensed sourcing agent based in Yiwu gives you market access without the travel cost, handles communication in Chinese, can verify supplier credentials, and manages the buying process on your behalf. The agent's fee is typically structured as a percentage of FOB value or a fixed per-order fee — both are significantly cheaper than a buyer trip for anything under a container load.</p>
<p>At Ifrit, we walk all five districts daily. We know which suppliers consistently meet quality standards, which booths inflate prices for foreign buyers, and which freight forwarders give honest rates for Middle East and Gulf shipments.</p>`,

      ar: `<p>يُعدّ سوق يوو الدولي للتجارة — المعروف محلياً بـ<strong>سوق فوتيان</strong> — أكبر سوق للبيع بالجملة في العالم من حيث المساحة وتنوع المنتجات. إذا كنت تشتري من الصين، فإن فهم هيكل هذا السوق ليس خياراً بل أساس استراتيجيتك في الشراء.</p>

<h2>المناطق الخمس</h2>
<p>ينقسم السوق إلى خمس مناطق (المناطق 1–5)، تختص كل منها بفئات منتجات محددة. معرفة أي منطقة تختص بماذا توفّر عليك ساعات من التجوال العشوائي.</p>
<ul>
  <li><strong>المنطقة 1</strong> — مجوهرات وإكسسوارات ومستحضرات تجميل ونظارات ومظلات وأدوات ومعدات</li>
  <li><strong>المنطقة 2</strong> — ألعاب وبضائع موسمية وهدايا وديكورات ومستلزمات رياضية</li>
  <li><strong>المنطقة 3</strong> — فنون وحرف يدوية وطباعة ومعدات تصوير وقرطاسية</li>
  <li><strong>المنطقة 4</strong> — إلكترونيات ولوازم مكتبية وساعات يد وساعات حائط وآلات موسيقية</li>
  <li><strong>المنطقة 5</strong> — منسوجات وملابس وأحذية وحقائب وإكسسوارات أزياء</li>
</ul>
<p>تضم كل منطقة طوابق متعددة. المنطقة 5 وحدها تمتد على عدة طوابق تضم آلاف موردي المنسوجات والملابس.</p>

<h2>كيفية التنقل داخل السوق</h2>
<p>يعمل السوق من <strong>الاثنين إلى الجمعة، من 9 صباحاً حتى 5 مساءً</strong>. يُغلق في عطل نهاية الأسبوع والعطلات الرسمية الصينية، وقرابة أسبوعين خلال فترة رأس السنة الصينية (عادةً أواخر يناير إلى منتصف فبراير).</p>
<p>أجدى استراتيجية في الزيارة الأولى هي جولة منهجية في المنطقة المعنية — كشكاً تلو الآخر في كل صف. لا تتنقل بشكل عشوائي بناءً على ما تراه. كثيراً ما يعرض الموردون في الصف الواحد بضائع متكاملة، ومقارنة الأسعار تستوجب رؤية الكشك المجاور.</p>
<p>احرص على إحضار مواصفات منتجك مكتوبة — الأبعاد والمواد والسعر المستهدف والكمية. معظم أصحاب الكشكات يتحدثون إنجليزية محدودة لكنهم يقرؤون المواصفات. وجود وكيل ناطق بالصينية بجانبك يحوّل التجربة من محبطة إلى مثمرة.</p>

<h2>التسعير والتفاوض</h2>
<p>الأسعار المعروضة في السوق ليست نهائية قط. السعر المدوّن في كتالوج الكشك أو لوحة الأسعار مجرد نقطة بداية — أعلى عادةً بنسبة 20–40% من السعر الحقيقي الذي سيدفعه المشتري الجاد. الكمية عامل حاسم: المشتري بـ1,000 وحدة يملك نفوذاً مختلفاً كلياً عن المشتري بـ100 وحدة.</p>
<p>العوامل الرئيسية في التفاوض:</p>
<ul>
  <li>كمية الطلب (الحد الأدنى للطلب وما يتجاوزه)</li>
  <li>شروط الدفع (كامل مقدماً مقابل عربون + رصيد)</li>
  <li>متطلبات التغليف (مخصص أم قياسي)</li>
  <li>موعد التسليم (الطلبات العاجلة أغلى)</li>
  <li>متطلبات العينات قبل الطلب الكبير</li>
</ul>
<p>لا تدفع السعر المعروض أول مرة. ولا تُظهر اهتماماً قوياً بمنتج بعينه قبل أن تقارن ثلاثة موردين على الأقل للسلعة ذاتها.</p>

<h2>من السوق إلى الشحن</h2>
<p>إيجاد المورد في السوق مجرد خطوة أولى. لا يزال عليك إدارة: التحقق من العينات ومراجعة الفاتورة المبدئية ومتابعة الإنتاج وفحص الجودة قبل التعبئة والوثائق التصديرية وشحن البضاعة. لكل مرحلة من هذه المراحل نقاط فشل يعرفها المشترون ذوو الخبرة — أو الوكيل المقيم في يوو.</p>
<p>إذا كنت تشتري من فئات منتجات متعددة ومن موردين متعددين، فالتوحيد اللوجستي أمر بالغ الأهمية. تضم يوو مئات شركات الشحن التي ستوحّد بضاعتك من موردين مختلفين في حاوية واحدة أو شحنة LCL.</p>

<h2>العمل مع وكيل</h2>
<p>الوكيل المرخّص المقيم في يوو يتيح لك الوصول إلى السوق دون تكلفة السفر، ويتولى التواصل بالصينية، ويمكنه التحقق من موثوقية الموردين، وإدارة عملية الشراء نيابةً عنك. رسوم الوكيل عادةً نسبة مئوية من قيمة FOB أو رسوم ثابتة لكل طلب — وكلاهما أقل بكثير من تكلفة رحلة مشترٍ لأي كمية دون حاوية كاملة.</p>
<p>في عفريت، نجوب المناطق الخمس كل يوم. نعرف أي الموردين يلتزمون باستمرار بمعايير الجودة، وأي الكشكات تضخّم أسعارها للمشترين الأجانب، وأي شركات الشحن تقدّم أسعاراً صادقة للشحن إلى الشرق الأوسط ودول الخليج.</p>`,
    },
  },

  {
    slug: "shipping-from-china-to-middle-east",
    publishedAt: "2025-06-10",
    category: "logistics",
    readingTime: { en: 6, ar: 6 },
    tags: ["shipping", "logistics", "middle east", "gulf", "freight"],
    title: {
      en: "Shipping from China to the Middle East: Sea, Air, and Land Options Explained",
      ar: "الشحن من الصين إلى الشرق الأوسط: شرح خيارات البحر والجو والبر",
    },
    excerpt: {
      en: "A practical breakdown of all freight routes from Yiwu and Shanghai to Gulf ports — transit times, costs, risks, and when to use each method.",
      ar: "تحليل عملي لجميع مسارات الشحن من يوو وشنغهاي إلى موانئ الخليج — أوقات العبور والتكاليف والمخاطر ومتى تستخدم كل طريقة.",
    },
    seoTitle: {
      en: "Shipping from China to Middle East: Sea, Air & Land Freight Guide | Ifrit",
      ar: "الشحن من الصين إلى الشرق الأوسط: دليل الشحن البحري والجوي والبري | عفريت",
    },
    seoDescription: {
      en: "Compare sea freight, air freight, and China-Middle East land routes for importing from Yiwu. Transit times, costs, and tips from a Yiwu-based logistics agent.",
      ar: "قارن الشحن البحري والجوي والبري بين الصين والشرق الأوسط للاستيراد من يوو. أوقات العبور والتكاليف ونصائح من وكيل لوجستي مقيم في يوو.",
    },
    body: {
      en: `<p>Getting goods from Yiwu to the Middle East involves choosing between three primary freight modes — sea, air, and land (via the China-Central Asia-Middle East corridor). Each has a different cost profile, transit time, and risk exposure. The right choice depends on your shipment volume, timeline, and product type.</p>

<h2>Sea Freight (FCL and LCL)</h2>
<p>Sea freight is the dominant mode for bulk shipments. From Ningbo or Shanghai port (the nearest major ports to Yiwu), containers typically travel to Gulf ports in <strong>18–28 days</strong> depending on the destination and carrier.</p>
<p><strong>FCL (Full Container Load)</strong> is economical for shipments that fill 20-foot (20GP) or 40-foot (40HQ) containers. A 20GP holds roughly 25–28 CBM of cargo; a 40HQ holds 65–68 CBM. If your cargo fills more than 15 CBM, an FCL starts becoming more cost-effective than LCL.</p>
<p><strong>LCL (Less than Container Load)</strong> consolidates your cargo with other shippers into a shared container. You pay per CBM (cubic meter). LCL is ideal for shipments under 10 CBM, but expect longer transit times due to the consolidation/deconsolidation process at both ends — typically adding 5–10 days.</p>
<p>Main Gulf destination ports:</p>
<ul>
  <li><strong>Jebel Ali (Dubai, UAE)</strong> — The region's primary hub. Largest container port in the Middle East. Frequent direct services from Ningbo/Shanghai.</li>
  <li><strong>Shuaiba / Shuwaikh (Kuwait)</strong> — Kuwait's main commercial ports. Slightly longer transit than Jebel Ali.</li>
  <li><strong>Dammam / King Abdulaziz (Saudi Arabia)</strong> — Main port for goods entering the Eastern Province and inland Saudi markets.</li>
  <li><strong>Sohar (Oman)</strong> — Growing port for Oman-bound freight.</li>
  <li><strong>Umm Qasr (Iraq)</strong> — Main port for goods entering Iraq, with some routing through Basra.</li>
</ul>

<h2>Air Freight</h2>
<p>Air freight from Shanghai Pudong (PVG) or Guangzhou Baiyun (CAN) to Gulf airports (Dubai DXB, Riyadh RUH, Kuwait KWI) typically takes <strong>2–5 days</strong>. The cost is 4–6x higher per kilogram than sea freight, making it only economical for:</p>
<ul>
  <li>High-value, low-weight products (electronics, jewelry, medical equipment)</li>
  <li>Time-sensitive replenishment orders</li>
  <li>Shipments under 150kg where sea LCL is not cost-competitive</li>
  <li>Samples and prototypes</li>
</ul>
<p>Air freight is charged on the higher of actual weight vs. volumetric weight (volume in CBM × 167 = volumetric kg). Lightweight but bulky products — such as stuffed toys, plastic goods, or inflatable items — can become very expensive to air freight due to volumetric calculations.</p>

<h2>China-Middle East Land Routes (Rail and Road)</h2>
<p>The China-Europe-Middle East rail and road corridor has expanded significantly in recent years. China-Railway Express (CRE) services now connect Yiwu and other Chinese cities to Central Asian hubs (Almaty, Tashkent), from which cargo can continue overland to Iran, Iraq, and Gulf states.</p>
<p>Transit times via rail: approximately <strong>14–22 days</strong> to Central Asia, with additional trucking time to final destinations in Iraq or the Gulf.</p>
<p>Land routes are particularly relevant for Iraq-bound shipments. The overland route from China through Iran (via Bandar Abbas or border crossings) into Iraq has been used by Iraqi traders for years. It avoids port congestion at Umm Qasr and can be faster for landlocked Iraqi cities like Sulaymaniyah or Erbil.</p>

<h2>Cost Comparison (Approximate, 2025 Rates)</h2>
<ul>
  <li><strong>Sea LCL</strong>: $100–180 per CBM (Ningbo to Jebel Ali), plus local charges</li>
  <li><strong>Sea FCL 20GP</strong>: $900–1,800 per container (Ningbo to Jebel Ali), depending on market rates</li>
  <li><strong>Air freight</strong>: $4–8 per kg (actual or volumetric, whichever is higher)</li>
  <li><strong>Rail (CRE)</strong>: Typically between sea and air — roughly $3–5 per kg to Central Asia, higher to final Gulf destinations</li>
</ul>

<h2>Key Considerations for Middle East Buyers</h2>
<p><strong>Incoterms</strong>: Understand whether your supplier quotes FOB (you arrange shipping from Chinese port), CIF (supplier arranges to destination port), or EXW (you collect from factory). Most experienced importers prefer FOB, where they control the freight forwarder relationship.</p>
<p><strong>Customs in destination countries</strong>: Gulf countries vary significantly in import procedures, duties, and documentation requirements. UAE customs is generally efficient; Iraq customs is more bureaucratic and subject to corruption risk at border crossings.</p>
<p><strong>Insurance</strong>: Marine cargo insurance is strongly recommended for sea shipments. Standard rates for general cargo are 0.2–0.5% of CIF value. Do not rely on the carrier's standard liability, which covers only a fraction of actual cargo value.</p>
<p>At Ifrit, we manage freight forwarding for our clients as part of our end-to-end service — including consolidation at Yiwu, customs documentation, and coordination with destination-country customs brokers.</p>`,

      ar: `<p>نقل البضائع من يوو إلى الشرق الأوسط يعني الاختيار بين ثلاثة أنماط شحن رئيسية — البحر والجو والبر (عبر ممر الصين-آسيا الوسطى-الشرق الأوسط). لكل منها هيكل تكلفة مختلف وزمن عبور مختلف وملف مخاطر مختلف. الاختيار الصحيح يعتمد على حجم شحنتك وجدولك الزمني ونوع منتجك.</p>

<h2>الشحن البحري (FCL وLCL)</h2>
<p>الشحن البحري هو النمط الأكثر شيوعاً للشحنات الكبيرة. من ميناء نينغبو أو شنغهاي (أقرب الموانئ الرئيسية إلى يوو)، تصل الحاويات عادةً إلى موانئ الخليج خلال <strong>18–28 يوماً</strong> حسب الوجهة والناقل.</p>
<p><strong>FCL (حاوية كاملة)</strong> اقتصادية للشحنات التي تملأ حاويات 20 قدماً (20GP) أو 40 قدماً (40HQ). تستوعب حاوية 20GP نحو 25–28 متراً مكعباً من الشحنة؛ وتستوعب 40HQ نحو 65–68 متراً مكعباً. إذا تجاوزت شحنتك 15 متراً مكعباً، تصبح FCL أكثر فعالية من حيث التكلفة مقارنةً بـLCL.</p>
<p><strong>LCL (أقل من حاوية كاملة)</strong> يجمع شحنتك مع شحنات مرسلين آخرين في حاوية مشتركة. تدفع لكل متر مكعب. مثالية للشحنات دون 10 أمتار مكعبة، لكن توقع أوقات عبور أطول بسبب عمليتَي التوحيد والتفريق في كلا الطرفين — تضيف عادةً 5–10 أيام.</p>
<p>الموانئ الرئيسية في منطقة الخليج:</p>
<ul>
  <li><strong>جبل علي (دبي، الإمارات)</strong> — المحور الرئيسي في المنطقة. أكبر ميناء حاويات في الشرق الأوسط. خدمات مباشرة متكررة من نينغبو/شنغهاي.</li>
  <li><strong>شعيبة/شويخ (الكويت)</strong> — الميناءان التجاريان الرئيسيان في الكويت. وقت عبور أطول قليلاً من جبل علي.</li>
  <li><strong>الدمام/الملك عبدالعزيز (المملكة العربية السعودية)</strong> — الميناء الرئيسي للبضائع الداخلة إلى المنطقة الشرقية والأسواق السعودية الداخلية.</li>
  <li><strong>صحار (عُمان)</strong> — ميناء متنامٍ للشحن المتجه إلى عُمان.</li>
  <li><strong>أم قصر (العراق)</strong> — الميناء الرئيسي للبضائع الداخلة إلى العراق، مع بعض التوجيه عبر البصرة.</li>
</ul>

<h2>الشحن الجوي</h2>
<p>يستغرق الشحن الجوي من مطار شنغهاي بودونغ (PVG) أو مطار قوانغتشو بايون (CAN) إلى مطارات الخليج (دبي DXB، الرياض RUH، الكويت KWI) <strong>2–5 أيام</strong> عادةً. التكلفة أعلى 4–6 مرات لكل كيلوغرام مقارنةً بالشحن البحري، مما يجعله اقتصادياً فقط في:</p>
<ul>
  <li>المنتجات عالية القيمة وخفيفة الوزن (إلكترونيات ومجوهرات ومعدات طبية)</li>
  <li>طلبات التجديد الحساسة للوقت</li>
  <li>الشحنات دون 150 كغ حيث LCL البحرية غير تنافسية من حيث التكلفة</li>
  <li>العينات والنماذج الأولية</li>
</ul>
<p>يُحسب الشحن الجوي بأعلى قيمة بين الوزن الفعلي والوزن الحجمي (الحجم بالمتر المكعب × 167 = الكيلوغرام الحجمي). المنتجات خفيفة الوزن لكن ضخمة الحجم — كالألعاب المحشوة والبضائع البلاستيكية أو القابلة للنفخ — قد تكون باهظة الثمن شحناً جوياً بسبب الحسابات الحجمية.</p>

<h2>المسارات البرية بين الصين والشرق الأوسط (بالسكك الحديدية والشاحنات)</h2>
<p>توسّع ممر السكك الحديدية والطرق البرية بين الصين وأوروبا والشرق الأوسط توسعاً ملحوظاً في السنوات الأخيرة. تربط خدمات قطار الشحن الصيني (CRE) يوو ومدناً صينية أخرى بمراكز لوجستية في آسيا الوسطى (ألماتي وطشقند)، لتتواصل منها البضائع براً إلى إيران والعراق ودول الخليج.</p>
<p>أوقات العبور عبر السكك الحديدية: نحو <strong>14–22 يوماً</strong> إلى آسيا الوسطى، مع وقت إضافي للنقل بالشاحنة إلى الوجهات النهائية في العراق أو الخليج.</p>
<p>المسارات البرية مناسبة بشكل خاص للشحن إلى العراق. يستخدم التجار العراقيون منذ سنوات المسار البري من الصين عبر إيران (عبر بندر عباس أو نقاط الحدود) إلى العراق. يتجنب هذا المسار الازدحام في ميناء أم قصر وقد يكون أسرع للمدن العراقية الداخلية كالسليمانية وأربيل.</p>

<h2>مقارنة التكاليف (تقريبية، أسعار 2025)</h2>
<ul>
  <li><strong>LCL بحري</strong>: 100–180 دولار للمتر المكعب (نينغبو إلى جبل علي)، بالإضافة إلى الرسوم المحلية</li>
  <li><strong>FCL 20GP بحري</strong>: 900–1,800 دولار للحاوية (نينغبو إلى جبل علي)، حسب أسعار السوق</li>
  <li><strong>الشحن الجوي</strong>: 4–8 دولارات للكيلوغرام (الفعلي أو الحجمي، أيهما أعلى)</li>
  <li><strong>السكك الحديدية (CRE)</strong>: عادةً بين البحري والجوي — نحو 3–5 دولارات للكيلوغرام إلى آسيا الوسطى، وأعلى إلى وجهات الخليج النهائية</li>
</ul>

<h2>اعتبارات رئيسية للمشترين في الشرق الأوسط</h2>
<p><strong>شروط الإيكوترمز (Incoterms)</strong>: تأكد من فهم ما إذا كان موردك يسعّر وفق FOB (أنت تدير الشحن من الميناء الصيني) أو CIF (المورد يدير الشحن حتى ميناء الوجهة) أو EXW (أنت تستلم من المصنع). يفضّل معظم المستوردين ذوي الخبرة FOB حيث يتحكمون في علاقة وكيل الشحن.</p>
<p><strong>الجمارك في دول الوجهة</strong>: تتباين دول الخليج تبايناً ملحوظاً في إجراءات الاستيراد والرسوم الجمركية ومتطلبات التوثيق. جمارك الإمارات كفؤة بشكل عام؛ جمارك العراق أكثر بيروقراطية وعرضة لمخاطر الفساد عند نقاط الحدود.</p>
<p><strong>التأمين</strong>: يُنصح بشدة بتأمين البضاعة البحرية للشحنات البحرية. المعدلات المعيارية للبضائع العامة هي 0.2–0.5% من قيمة CIF. لا تعتمد على المسؤولية القياسية للناقل التي لا تغطي سوى جزء صغير من القيمة الفعلية للبضاعة.</p>
<p>في عفريت، ندير الشحن لعملائنا كجزء من خدمتنا المتكاملة — بما يشمل التوحيد في يوو والتوثيق الجمركي والتنسيق مع وكلاء التخليص الجمركي في دول الوجهة.</p>`,
    },
  },

  {
    slug: "how-to-verify-chinese-suppliers",
    publishedAt: "2025-06-18",
    category: "sourcing-tips",
    readingTime: { en: 5, ar: 5 },
    tags: ["suppliers", "due diligence", "quality control", "sourcing"],
    title: {
      en: "How to Verify Chinese Suppliers Before Placing an Order",
      ar: "كيف تتحقق من الموردين الصينيين قبل تقديم طلبك",
    },
    excerpt: {
      en: "Supplier fraud and quality failures are the two biggest risks for overseas buyers. Here's how to vet a Chinese supplier before committing any money.",
      ar: "احتيال الموردين وإخفاقات الجودة هما أكبر مخاطر المشترين الأجانب. إليك كيفية التحقق من المورد الصيني قبل الالتزام بأي مبالغ.",
    },
    seoTitle: {
      en: "How to Verify Chinese Suppliers: Due Diligence Checklist | Ifrit",
      ar: "كيف تتحقق من الموردين الصينيين: قائمة العناية الواجبة | عفريت",
    },
    seoDescription: {
      en: "A step-by-step supplier verification checklist for buyers importing from China. Business licence checks, factory audits, sample testing, and contract tips.",
      ar: "قائمة خطوات للتحقق من الموردين للمشترين المستوردين من الصين. فحص رخص الأعمال وتدقيق المصانع واختبار العينات ونصائح التعاقد.",
    },
    body: {
      en: `<p>One of the most common mistakes overseas buyers make when sourcing from China is treating supplier verification as optional. It is not. Every year, importers lose significant sums to suppliers who misrepresent their factory capabilities, deliver substandard goods, or disappear after receiving a deposit.</p>
<p>The good news: most supplier fraud and quality failures are preventable with a systematic verification process. Here is the process we use at Ifrit before recommending any supplier to a client.</p>

<h2>Step 1: Business Licence Verification</h2>
<p>Every legitimate Chinese company has a registered business licence (营业执照, yíngyè zhízhào). Ask the supplier to provide a copy. The licence will show:</p>
<ul>
  <li>Registered company name (must match their contract and bank account)</li>
  <li>Unified Social Credit Code (18-digit identifier — like a company registration number)</li>
  <li>Registered address</li>
  <li>Legal representative name</li>
  <li>Business scope (does it actually cover manufacturing or trading in your product category?)</li>
  <li>Registration date and registered capital</li>
</ul>
<p>You can verify the Unified Social Credit Code on China's National Enterprise Credit Information Publicity System (国家企业信用信息公示系统) at <strong>gsxt.samr.gov.cn</strong>. This is a public government database — free to access, no registration required. It will confirm whether the company exists, is active, and has any administrative penalties or court judgements against it.</p>

<h2>Step 2: Factory vs. Trading Company</h2>
<p>Not all suppliers in China are manufacturers. Many are trading companies that source from factories. This isn't necessarily a problem — trading companies can offer better product variety and more flexible MOQs — but you should know which one you're dealing with, because it affects pricing, quality control access, and lead times.</p>
<p>Indicators that a supplier is a factory (manufacturer):</p>
<ul>
  <li>Business scope includes "manufacturing" (制造)</li>
  <li>Has a factory address distinct from the office address</li>
  <li>Can provide factory photos with visible production equipment</li>
  <li>Offers factory audit or video call showing production floor</li>
</ul>
<p>Indicators of a trading company:</p>
<ul>
  <li>Business scope is "wholesale" or "trade" only</li>
  <li>Cannot provide factory visit access</li>
  <li>Represents a wide variety of unrelated product categories</li>
  <li>Lead times are longer than expected (they're placing orders with a factory)</li>
</ul>

<h2>Step 3: Physical Address Verification</h2>
<p>Cross-reference the registered address on the business licence with the factory or office location the supplier claims. Use satellite imagery (Google Maps, Baidu Maps) to verify that the claimed address corresponds to an industrial or commercial building, not a residential address or empty plot.</p>
<p>If you or your agent can visit, do so. An unannounced visit — or a visit with short notice — gives you an unfiltered view of actual operating conditions.</p>

<h2>Step 4: Sample Order and Quality Assessment</h2>
<p>Never place a bulk order without receiving and evaluating a physical sample. For manufactured goods, the sample serves three purposes:</p>
<ul>
  <li><strong>Verification</strong>: Confirms the supplier can actually produce what they showed in photos or catalogues</li>
  <li><strong>Quality baseline</strong>: Establishes the quality standard your bulk order must meet</li>
  <li><strong>Contractual anchor</strong>: A signed-off, approved sample becomes the quality reference in the supply contract</li>
</ul>
<p>When evaluating the sample, check: materials (match spec?), dimensions (match spec?), workmanship and finish, function (if applicable), packaging, and labelling. If anything is off, return the sample with written comments and request a revised sample before proceeding.</p>

<h2>Step 5: Reference Checks and Trade History</h2>
<p>Ask the supplier for references — other overseas buyers they've shipped to. A legitimate supplier with export experience will have references. Follow up with those references directly. Ask about product quality, communication reliability, and whether goods arrived as described.</p>
<p>If the supplier has a Alibaba Gold Supplier profile or a profile on Made-in-China.com, review their transaction history, ratings, and response time. These platforms have their limitations, but consistent negative reviews or a very short history on the platform are red flags.</p>

<h2>Step 6: Contract and Payment Terms</h2>
<p>A properly structured purchase contract, in both English and Chinese, provides legal protection if a dispute arises. At minimum, the contract should specify:</p>
<ul>
  <li>Exact product specifications (with reference to the approved sample)</li>
  <li>Total quantity and unit price</li>
  <li>Delivery date and port of shipment</li>
  <li>Packaging requirements</li>
  <li>Payment terms (typically 30% deposit, 70% before shipment)</li>
  <li>Consequences and remedies for quality failure or late delivery</li>
</ul>
<p>On payment: <strong>never pay 100% upfront</strong> to a supplier you haven't worked with before. A 30% deposit protects the supplier's material costs; the 70% balance paid before shipment (after a pre-shipment inspection) protects you. Wire transfers to the company's registered bank account (matching the company name on the licence) — never to a personal account.</p>

<h2>When to Use a Third-Party Inspection</h2>
<p>For any order above approximately $3,000–5,000 USD, a third-party pre-shipment inspection is worth the cost (typically $200–350 USD per inspection, per factory). An inspector visits the factory before loading, checks a statistical sample of the goods against your specifications, and issues a detailed report with photos.</p>
<p>Common inspection standards: AQL 2.5 for general goods, AQL 1.5 for higher-sensitivity products. A failed inspection gives you leverage to demand rework before shipment rather than discovering quality issues at your warehouse 30 days later.</p>
<p>Ifrit provides third-party inspection coordination as part of our Quality Control & Inspection service — we work with licensed inspection companies and review reports on our clients' behalf.</p>`,

      ar: `<p>أحد أكثر الأخطاء شيوعاً التي يرتكبها المشترون الأجانب عند الاستيراد من الصين هو اعتبار التحقق من الموردين أمراً اختيارياً. ليس كذلك. كل عام يخسر مستوردون مبالغ كبيرة بسبب موردين زوّروا قدراتهم الإنتاجية، أو سلّموا بضائع دون المستوى، أو اختفوا بعد استلام العربون.</p>
<p>الخبر الجيد: معظم حالات الاحتيال وإخفاقات الجودة قابلة للوقاية بعملية تحقق منهجية. هذه هي العملية التي نتبعها في عفريت قبل توصية أي مورد لعميل.</p>

<h2>الخطوة 1: التحقق من رخصة الأعمال</h2>
<p>لكل شركة صينية شرعية رخصة أعمال مسجلة (营业执照). اطلب من المورد تقديم نسخة منها. ستُظهر الرخصة:</p>
<ul>
  <li>الاسم التجاري المسجل (يجب أن يتطابق مع عقدهم وحسابهم المصرفي)</li>
  <li>رمز الائتمان الاجتماعي الموحد (18 رقماً — كرقم تسجيل الشركة)</li>
  <li>العنوان المسجل</li>
  <li>اسم الممثل القانوني</li>
  <li>نطاق العمل (هل يشمل فعلاً التصنيع أو التجارة في فئة منتجك؟)</li>
  <li>تاريخ التسجيل ورأس المال المسجل</li>
</ul>
<p>يمكنك التحقق من رمز الائتمان الاجتماعي الموحد على نظام النشر العام للمعلومات الائتمانية للمؤسسات الوطنية الصيني على <strong>gsxt.samr.gov.cn</strong>. هذه قاعدة بيانات حكومية عامة — مجانية، لا تستوجب تسجيلاً. ستؤكد ما إذا كانت الشركة موجودة وناشطة وما إذا كانت عليها عقوبات إدارية أو أحكام قضائية.</p>

<h2>الخطوة 2: مصنع أم شركة تجارية؟</h2>
<p>ليس كل الموردين في الصين مصنّعين. كثيرون منهم شركات تجارية تشتري من المصانع. هذا ليس مشكلة بالضرورة — إذ تتيح الشركات التجارية تنوعاً أكبر في المنتجات ومرونة أعلى في الحد الأدنى للطلب — لكن ينبغي أن تعرف مع أيٍّ منهما تتعامل، لأن ذلك يؤثر على التسعير وإمكانية الرقابة على الجودة وأوقات التسليم.</p>
<p>مؤشرات أن المورد مصنع:</p>
<ul>
  <li>يتضمن نطاق أعماله "التصنيع" (制造)</li>
  <li>له عنوان مصنع يختلف عن عنوان المكتب</li>
  <li>يقدم صوراً للمصنع مع معدات إنتاج واضحة</li>
  <li>يتيح تدقيق المصنع أو مكالمة فيديو تُظهر قاعة الإنتاج</li>
</ul>
<p>مؤشرات أن المورد شركة تجارية:</p>
<ul>
  <li>نطاق أعماله "الجملة" أو "التجارة" فحسب</li>
  <li>لا يتيح زيارة المصنع</li>
  <li>يمثّل فئات منتجات متنوعة غير مترابطة</li>
  <li>أوقات التسليم أطول من المتوقع (يضع طلبات لدى مصنع)</li>
</ul>

<h2>الخطوة 3: التحقق من العنوان المادي</h2>
<p>قارن العنوان المسجل في رخصة الأعمال بالعنوان الذي يدّعيه المورد للمصنع أو المكتب. استخدم صور الأقمار الاصطناعية (خرائط غوغل أو خرائط بايدو) للتحقق من أن العنوان المذكور يقابل مبنى صناعياً أو تجارياً، لا عنواناً سكنياً أو قطعة أرض فارغة.</p>
<p>إذا أمكنك أو لوكيلك الزيارة، فافعل. الزيارة المفاجئة — أو ذات الإشعار القصير — تُعطيك صورة غير مفلترة عن الأوضاع التشغيلية الفعلية.</p>

<h2>الخطوة 4: طلب العينة وتقييم الجودة</h2>
<p>لا تضع طلباً كبيراً أبداً دون استلام عينة مادية وتقييمها. للبضائع المصنّعة، تخدم العينة ثلاثة أغراض:</p>
<ul>
  <li><strong>التحقق</strong>: تؤكد قدرة المورد الفعلية على إنتاج ما عرضه في الصور أو الكتالوجات</li>
  <li><strong>خط الأساس للجودة</strong>: يحدد معيار الجودة الذي يجب أن يلتزم به طلبك الكبير</li>
  <li><strong>المرساة التعاقدية</strong>: العينة المعتمدة والموقّع عليها تُصبح مرجع الجودة في عقد التوريد</li>
</ul>
<p>عند تقييم العينة، افحص: المواد (تطابق المواصفات؟)، الأبعاد (تطابق المواصفات؟)، الصنعة والإنهاء، الوظيفة (إن وجدت)، التغليف، والتسمية. إن وُجد أي خلل، أعد العينة مع ملاحظات مكتوبة واطلب عينة معدّلة قبل المتابعة.</p>

<h2>الخطوة 5: مراجعة المراجع وسجل التجارة</h2>
<p>اطلب من المورد مراجعات — مشترون أجانب آخرون شحن إليهم. المورد الشرعي ذو الخبرة في التصدير سيكون لديه مراجع. تابع مع هؤلاء المراجعين مباشرةً. اسأل عن جودة المنتج وموثوقية التواصل وما إذا كانت البضائع وصلت كما وُصفت.</p>
<p>إذا كان للمورد ملف موردّ ذهبي على علي بابا أو ملف على Made-in-China.com، راجع سجل معاملاته وتقييماته ووقت استجابته. لهذه المنصات حدودها، لكن المراجعات السلبية المتكررة أو التاريخ القصير جداً على المنصة إشارات تحذير.</p>

<h2>الخطوة 6: العقد وشروط الدفع</h2>
<p>عقد شراء منظّم بشكل صحيح، بالإنجليزية والصينية، يوفر حماية قانونية عند نشوء نزاع. يجب أن يحدد العقد كحد أدنى:</p>
<ul>
  <li>المواصفات الدقيقة للمنتج (بالإشارة إلى العينة المعتمدة)</li>
  <li>الكمية الإجمالية والسعر للوحدة</li>
  <li>تاريخ التسليم وميناء الشحن</li>
  <li>متطلبات التغليف</li>
  <li>شروط الدفع (عادةً 30% عربون، 70% قبل الشحن)</li>
  <li>عواقب وتداعيات إخفاق الجودة أو التأخر في التسليم</li>
</ul>
<p>بشأن الدفع: <strong>لا تدفع 100% مقدماً أبداً</strong> لمورد لم تتعامل معه سابقاً. عربون 30% يحمي تكاليف مواد المورد؛ الرصيد البالغ 70% المدفوع قبل الشحن (بعد فحص ما قبل الشحن) يحميك أنت. التحويلات المصرفية إلى الحساب البنكي المسجل للشركة (المطابق لاسم الشركة في الرخصة) — أبداً إلى حساب شخصي.</p>

<h2>متى تستخدم فحص طرف ثالث</h2>
<p>لأي طلب يتجاوز نحو 3,000–5,000 دولار أمريكي، يستحق فحص ما قبل الشحن من طرف ثالث التكلفة (عادةً 200–350 دولار للفحص، لكل مصنع). يزور المفتش المصنع قبل التحميل، ويفحص عينة إحصائية من البضاعة مقابل مواصفاتك، ويُصدر تقريراً تفصيلياً بالصور.</p>
<p>معايير الفحص الشائعة: AQL 2.5 للبضائع العامة، AQL 1.5 للمنتجات الأعلى حساسية. الفحص الفاشل يمنحك نفوذاً للمطالبة بإعادة العمل قبل الشحن بدلاً من اكتشاف مشكلات الجودة في مستودعك بعد 30 يوماً.</p>
<p>توفر عفريت تنسيق الفحص من طرف ثالث كجزء من خدمة مراقبة الجودة والتفتيش لدينا — نتعاون مع شركات فحص مرخّصة ونراجع التقارير نيابةً عن عملائنا.</p>`,
    },
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: PostCategory): Post[] {
  return posts.filter((p) => p.category === category);
}

export function getSortedPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
