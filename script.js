const sliders = [
  { id: "pain", label: "痛点强度", help: "1 是可有可无，5 是用户已经在主动寻找替代方案。", defaultValue: 4 },
  { id: "buyer", label: "购买人清晰度", help: "区分使用者、购买者、决策者和渠道方，避免只定义模糊人群。", defaultValue: 4 },
  { id: "trend", label: "趋势顺风", help: "人群、场景、平台内容或硬件生态是否正在增长。", defaultValue: 4 },
  { id: "demo", label: "演示传播性", help: "短视频或详情页能否在 10 秒内讲清楚价值。", defaultValue: 4 },
  { id: "innovation", label: "差异化程度", help: "不是造型不同，而是结构、场景或体验有明显理由。", defaultValue: 3 },
  { id: "competition", label: "竞品拥挤度", help: "1 是几乎空白，5 是价格战和头部评价已很强。", defaultValue: 3 },
  { id: "logistics", label: "物流友好度", help: "小、轻、非液体、非危险品、破损率低会得高分。", defaultValue: 4 },
  { id: "margin", label: "毛利空间", help: "能否覆盖平台费、退货、广告、履约和打样迭代。", defaultValue: 3 },
  { id: "bom", label: "制造复杂度", help: "1 是简单结构，5 是多传感器、固件、云端和 App。", defaultValue: 2 },
  { id: "compliance", label: "合规风险", help: "医疗、儿童、安全承重、射频、锂电、食品接触都会抬高风险。", defaultValue: 2 },
  { id: "support", label: "售后负担", help: "绑定、联网、误报、尺寸适配、安装教学和易损件都会增加客服压力。", defaultValue: 2 },
  { id: "brand", label: "设计品牌适配", help: "是否能做出体面、可信、符合目标人群审美的产品语言。", defaultValue: 4 },
];

const presets = {
  custom: {
    productName: "无线领夹麦上镜美化套件",
    productBrief: "这是一款面向短视频创作者的无线领夹麦上镜美化套件，包含肤色防风毛套、磁吸前盖和薄收纳盒。它不改变麦克风电子结构，只解决设备上镜突兀、收纳混乱和场景搭配的问题。",
    category: "consumer-accessory",
    targetUser: "短视频创作者、直播卖家、访谈拍摄者",
    channel: "tiktok",
    values: {},
    evidence: { evidenceTrend: true, evidenceReviews: false, evidenceSupplier: false, evidenceMargin: false, evidenceAssets: false },
  },
  "outdoor-kitchen": {
    productName: "轻量露营厨房套件",
    productBrief: "面向周末露营和车露营用户的轻量厨房收纳套件，包含香料胶囊、防漏油瓶套、餐具卷包和垃圾袋固定夹。体积小、适合短视频演示，可做套装化销售。",
    category: "outdoor",
    targetUser: "周末露营和车露营用户",
    channel: "tiktok",
    values: { pain: 4, buyer: 4, trend: 4, demo: 5, innovation: 3, competition: 3, logistics: 5, margin: 4, bom: 2, compliance: 2, support: 1, brand: 4 },
    evidence: { evidenceTrend: true, evidenceReviews: true, evidenceSupplier: true, evidenceMargin: false, evidenceAssets: false },
  },
  "pet-travel": {
    productName: "宠物出行饮水套件",
    productBrief: "面向城市养宠人群的宠物出行饮水套件，包含防漏水杯、可替换饮水槽、拾便袋夹和挂包扣。主打遛狗、短途出行和车内补水场景，要求轻量、防漏、易清洗。",
    category: "pet",
    targetUser: "城市养宠人群、小型犬主人、车载出行用户",
    channel: "amazon",
    values: { pain: 4, buyer: 5, trend: 4, demo: 4, innovation: 3, competition: 4, logistics: 4, margin: 4, bom: 2, compliance: 2, support: 2, brand: 4 },
    evidence: { evidenceTrend: true, evidenceReviews: true, evidenceSupplier: false, evidenceMargin: false, evidenceAssets: false },
  },
  "home-appliance-support": {
    productName: "台式洗碗机水管收纳套件",
    productBrief: "面向租房和小公寓用户的台式洗碗机周边套件，包含进水管收纳夹、排水管晾干架和洗碗块小仓。产品不接触电路，只解决厨房台面凌乱、管线收纳和使用后晾干的问题。",
    category: "home-appliance",
    targetUser: "租房用户、小公寓家庭、台式洗碗机用户",
    channel: "amazon",
    values: { pain: 4, buyer: 4, trend: 3, demo: 4, innovation: 3, competition: 3, logistics: 5, margin: 4, bom: 2, compliance: 2, support: 2, brand: 4 },
    evidence: { evidenceTrend: false, evidenceReviews: true, evidenceSupplier: false, evidenceMargin: false, evidenceAssets: false },
  },
  "creator-mic": {
    productName: "无线领夹麦上镜美化套件",
    productBrief: "面向短视频创作者和直播卖家的无线领夹麦美化套件，包含肤色防风毛套、磁吸前盖、隐形夹和薄收纳盒。非电子配件，体积小，适合展示前后对比。",
    category: "electronics-accessory",
    targetUser: "短视频创作者、直播卖家、访谈拍摄者",
    channel: "tiktok",
    values: { pain: 4, buyer: 5, trend: 4, demo: 5, innovation: 4, competition: 2, logistics: 5, margin: 4, bom: 2, compliance: 1, support: 2, brand: 4 },
    evidence: { evidenceTrend: true, evidenceReviews: true, evidenceSupplier: true, evidenceMargin: true, evidenceAssets: false },
  },
  "silver-kit": {
    productName: "适老旅行安全套装",
    productBrief: "面向银发旅行者和子女购买人的安全套装，包含 NFC 急救卡、大字联系卡、防丢挂绳、药盒和证件收纳。主打旅行团、邮轮、机场和景区场景，无电、轻量、体面，不做医疗宣称。",
    category: "senior-travel",
    targetUser: "55-75 岁银发旅行者、子女、旅行团领队",
    channel: "amazon",
    values: { pain: 4, buyer: 4, trend: 4, demo: 3, innovation: 3, competition: 3, logistics: 5, margin: 4, bom: 1, compliance: 1, support: 1, brand: 5 },
    evidence: { evidenceTrend: true, evidenceReviews: true, evidenceSupplier: false, evidenceMargin: false, evidenceAssets: false },
  },
  "silver-terminal": {
    productName: "银发文旅智能终端",
    productBrief: "面向银发文旅场景的智能终端，包含 GPS 定位、心率血压监测、家属 App、电子围栏、SOS 呼叫、云端健康平台、5000mAh 电池和景区租赁订阅服务。",
    category: "senior-travel",
    targetUser: "银发游客、家属、景区、旅行社",
    channel: "b2b",
    values: { pain: 5, buyer: 3, trend: 5, demo: 4, innovation: 4, competition: 4, logistics: 2, margin: 2, bom: 5, compliance: 5, support: 5, brand: 4 },
    evidence: { evidenceTrend: true, evidenceReviews: false, evidenceSupplier: false, evidenceMargin: false, evidenceAssets: false },
  },
};

const sliderList = document.querySelector("#sliderList");
const presetEl = document.querySelector("#preset");
const resetBtn = document.querySelector("#resetBtn");
const productBriefEl = document.querySelector("#productBrief");
const runWorkflowBtn = document.querySelector("#runWorkflowBtn");
const autoReviewBtn = document.querySelector("#autoReviewBtn");
const autoReviewNote = document.querySelector("#autoReviewNote");
const scoringCard = document.querySelector(".scoring-card");
const marketKeywordsEl = document.querySelector("#marketKeywords");
const researchLinksEl = document.querySelector("#researchLinks");
const copyKeywordsBtn = document.querySelector("#copyKeywordsBtn");
const openResearchTabsBtn = document.querySelector("#openResearchTabsBtn");
const competitorDensityEl = document.querySelector("#competitorDensity");
const priceBandEl = document.querySelector("#priceBand");
const reviewSignalEl = document.querySelector("#reviewSignal");
const trendSignalEl = document.querySelector("#trendSignal");
const painPointEvidenceEl = document.querySelector("#painPointEvidence");
const autoMarketBtn = document.querySelector("#autoMarketBtn");
const marketReviewNote = document.querySelector("#marketReviewNote");
const designStageEl = document.querySelector("#designStage");
const styleTargetEl = document.querySelector("#styleTarget");
const designIntentEl = document.querySelector("#designIntent");
const autoAppearanceBtn = document.querySelector("#autoAppearanceBtn");
const appearanceReviewNote = document.querySelector("#appearanceReviewNote");
const assetUpload = document.querySelector("#assetUpload");
const dropZone = document.querySelector("#dropZone");
const assetPreview = document.querySelector("#assetPreview");
const uploadStats = document.querySelector("#uploadStats");
const clearFilesBtn = document.querySelector("#clearFilesBtn");
const uploadedAssets = [];
let latestAppearanceResult = null;
let latestMarketResult = null;

const appearanceDimensions = [
  { id: "clarity", label: "识别清晰度", caption: "三秒内能否看懂品类、方向和使用方式" },
  { id: "distinctive", label: "造型差异化", caption: "轮廓、比例、CMF 是否有记忆点" },
  { id: "ergonomics", label: "人机暗示", caption: "按钮、握持、开合、接触区是否自然" },
  { id: "cmf", label: "CMF 成熟度", caption: "颜色、材料、表面处理是否可信且一致" },
  { id: "manufacturing", label: "量产友好度", caption: "分件、缝线、拔模和工艺风险是否可控" },
  { id: "commerce", label: "电商呈现力", caption: "主图、场景图和卖点表达是否容易转化" },
];

function createSliders() {
  sliderList.innerHTML = sliders
    .map(
      (item) => `
        <div class="slider-item">
          <div class="slider-top">
            <label class="slider-label" for="${item.id}">${item.label}</label>
            <output class="slider-value" id="${item.id}Value">${item.defaultValue}</output>
          </div>
          <p class="slider-help">${item.help}</p>
          <input id="${item.id}" type="range" min="1" max="5" step="1" value="${item.defaultValue}" />
          <div class="slider-scale" aria-hidden="true">
            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
          </div>
        </div>
      `,
    )
    .join("");
}

function val(id) {
  return Number(document.querySelector(`#${id}`).value);
}

function positive(id) {
  return val(id) * 20;
}

function inverse(id) {
  return (6 - val(id)) * 20;
}

function checkedScore(ids) {
  const checked = ids.filter((id) => document.querySelector(`#${id}`).checked).length;
  return (checked / ids.length) * 100;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function weighted(parts) {
  return parts.reduce((sum, part) => sum + part.score * part.weight, 0);
}

function calculate() {
  const evidence = checkedScore(["evidenceTrend", "evidenceReviews", "evidenceSupplier", "evidenceMargin", "evidenceAssets"]);
  const market = weighted([
    { score: positive("pain"), weight: 0.34 },
    { score: positive("buyer"), weight: 0.24 },
    { score: positive("trend"), weight: 0.22 },
    { score: evidence, weight: 0.2 },
  ]);
  const differentiation = weighted([
    { score: positive("innovation"), weight: 0.34 },
    { score: positive("demo"), weight: 0.24 },
    { score: inverse("competition"), weight: 0.26 },
    { score: positive("brand"), weight: 0.16 },
  ]);
  const execution = weighted([
    { score: positive("logistics"), weight: 0.25 },
    { score: positive("margin"), weight: 0.25 },
    { score: inverse("bom"), weight: 0.28 },
    { score: evidence, weight: 0.22 },
  ]);
  const risk = weighted([
    { score: inverse("compliance"), weight: 0.38 },
    { score: inverse("support"), weight: 0.28 },
    { score: inverse("bom"), weight: 0.18 },
    { score: positive("logistics"), weight: 0.16 },
  ]);
  let score = weighted([
    { score: market, weight: 0.32 },
    { score: differentiation, weight: 0.24 },
    { score: execution, weight: 0.24 },
    { score: risk, weight: 0.2 },
  ]);
  const hardGatePenalty =
    (val("compliance") >= 5 ? 12 : 0) +
    (val("bom") >= 5 ? 8 : 0) +
    (val("support") >= 5 ? 7 : 0) +
    (val("competition") >= 5 && val("innovation") <= 2 ? 8 : 0);
  const marketAdjustment = latestMarketResult ? (latestMarketResult.score - 50) * 0.18 : 0;
  score = clamp(Math.round(score - hardGatePenalty + marketAdjustment), 8, 92);
  return {
    score,
    market: Math.round(market),
    differentiation: Math.round(differentiation),
    execution: Math.round(execution),
    risk: Math.round(risk),
    evidence: Math.round(evidence),
  };
}

function decision(score) {
  if (score >= 74) return { text: "建议打样", className: "good" };
  if (score >= 55) return { text: "先验证", className: "warn" };
  return { text: "暂缓立项", className: "danger" };
}

function scoreSummary(score) {
  if (score >= 74) return "当前概念具备进入样机或小批量测试的条件，重点控制首批库存和广告验证节奏。";
  if (score >= 55) return "当前概念有机会，但仍有关键不确定性，建议先做低成本验证再投入结构开模或电子研发。";
  return "当前概念前端风险偏高，建议收窄场景、降低硬件复杂度，或改成配件/套装再评估。";
}

function metricMarkup(label, value) {
  const captions = {
    市场机会: "痛点、购买人和趋势证据",
    差异化: "创新性、传播性和竞争环境",
    执行可行性: "物流、毛利和制造难度",
    风险可控性: "合规、售后和复杂度",
  };
  return `
    <div class="metric">
      <div class="metric-label">${label}</div>
      <div class="metric-value">${value}</div>
      <div class="bar" aria-hidden="true"><span style="width:${value}%"></span></div>
      <p class="metric-caption">${captions[label] || "综合分项判断"}</p>
    </div>
  `;
}

function renderInsights(result) {
  const insights = [];
  if (val("pain") >= 4 && val("buyer") >= 4) insights.push("痛点和购买人相对清晰，适合进入竞品差评和支付意愿验证。");
  if (val("demo") >= 4) insights.push("产品价值适合用短视频或动图展示，有利于 TikTok Shop、Amazon 视频和详情页转化。");
  if (val("innovation") <= 2 && val("competition") >= 4) insights.push("差异化不足且竞品拥挤，建议改成更窄人群或增加结构性卖点。");
  if (val("logistics") >= 4 && val("bom") <= 2) insights.push("物流和制造复杂度友好，适合作为跨境电商首款试水产品。");
  if (uploadedAssets.length > 0) insights.push("已上传设计资料，可进入外观、结构、包装和卖点一致性评审。");
  if (result.market < 55) insights.push("市场信号偏弱，需要先验证搜索词、内容热度和真实购买场景。");
  if (!insights.length) insights.push("当前结果较均衡，下一步应优先补充真实竞品和成本数据。");
  return insights;
}

function renderRisks() {
  const risks = [];
  if (val("compliance") >= 4) risks.push("合规风险偏高：涉及医疗、射频、锂电、健康数据或安全责任时，不宜按普通跨境小商品推进。");
  if (val("bom") >= 4) risks.push("制造复杂度偏高：多传感器、App、云服务或固件会显著增加打样周期和售后难度。");
  if (val("support") >= 4) risks.push("售后负担偏高：绑定、误报、安装教学、尺寸适配或联网问题会拉高客服成本。");
  if (val("margin") <= 2) risks.push("毛利空间不足：平台费、广告、退货和履约成本可能吞掉利润。");
  if (val("competition") >= 4) risks.push("竞品拥挤：需要避开泛品类，切到更具体的设备、人群或使用时刻。");
  if (!risks.length) risks.push("当前没有明显硬门槛，但仍需用竞品、成本和样机数据复核。");
  return risks;
}

function renderNextSteps(result) {
  if (result.score >= 74) {
    return ["做 3 个外观方向和 1 个功能样机，控制在 7-14 天内完成。", "找 10 个目标用户做可用性访谈，记录他们愿意付款的具体理由。", "上架前先跑 2 套详情页卖点测试：体面安全感和具体场景痛点。"];
  }
  if (result.score >= 55) {
    return ["在 Amazon、Etsy、TikTok Shop 搜 8-12 个关键词，统计价格带、评价数和差评痛点。", "把合规或制造复杂的功能砍到一个核心动作，再重新评分。", "用渲染图和一页式落地页测试点击率，不先开模。"];
  }
  return ["把产品改成更小的配件、套装或无电版本，优先降低合规和售后风险。", "重新定义使用者、购买者和渠道决策者，确认谁真正付款。", "只保留一个最强场景，删除所有会触发医疗、隐私、儿童安全或射频认证的承诺。"];
}

function finalDecision(score) {
  if (score >= 78) return { text: "优先推进", className: "good" };
  if (score >= 60) return { text: "验证后推进", className: "warn" };
  return { text: "暂缓推进", className: "danger" };
}

function renderFinal(commercialResult = null) {
  const scoreEl = document.querySelector("#finalScore");
  const badge = document.querySelector("#finalBadge");
  const summary = document.querySelector("#finalSummary");
  const actions = document.querySelector("#finalActions");
  const parts = [];
  if (latestAppearanceResult) parts.push({ score: latestAppearanceResult.score, weight: 0.28 });
  if (latestMarketResult) parts.push({ score: latestMarketResult.score, weight: 0.32 });
  if (commercialResult) parts.push({ score: commercialResult.score, weight: 0.4 });

  if (!parts.length) {
    scoreEl.value = "--";
    badge.textContent = "待评审";
    badge.className = "final-badge";
    summary.textContent = "完成外观预审、市场调研和商业成功率评审后，系统会给出总评分和产品落地建议。";
    actions.innerHTML = "<li>建议先上传产品图片/文件，填写产品简介，再依次执行市场调研、外观预审和商业评审。</li>";
    return;
  }

  const weightSum = parts.reduce((sum, item) => sum + item.weight, 0);
  const score = Math.round(parts.reduce((sum, item) => sum + item.score * item.weight, 0) / weightSum);
  const d = finalDecision(score);
  scoreEl.value = `${score}`;
  badge.textContent = d.text;
  badge.className = `final-badge ${d.className}`;
  summary.textContent =
    score >= 78
      ? "当前方案在外观成熟度、市场证据和落地可行性上具备推进条件，建议进入样机深化和小规模市场验证。"
      : score >= 60
        ? "当前方案有机会，但仍需要补齐市场证据或外观迭代，建议先做低成本验证后再投入开模或批量。"
        : "当前方案综合风险偏高，建议先重构定位、外观或产品复杂度，不宜直接推进打样或上市。";

  const next = [];
  if (!latestMarketResult) next.push("补齐市场调研：关键词、竞品密度、价格带、差评痛点和趋势信号。");
  if (!latestAppearanceResult) next.push("先完成外观预审：上传主视角、使用场景和 CMF/细节图。");
  if (commercialResult && commercialResult.score < 60) next.push("商业可行性偏弱：优先降低合规、制造、售后或物流风险。");
  if (latestMarketResult && latestMarketResult.score < 60) next.push("市场证据偏弱：重新寻找更窄场景或更强购买理由。");
  if (latestAppearanceResult && latestAppearanceResult.score < 60) next.push("外观成熟度偏低：先强化品类识别、人机暗示和主图表达。");
  if (!next.length) next.push("下一步建议做 2-3 个外观方向、竞品并排图和一页式卖点页面测试。");
  actions.innerHTML = next.map((item) => `<li>${item}</li>`).join("");
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function fileKind(file) {
  if (file.type.startsWith("image/")) return "图片";
  const ext = file.name.split(".").pop()?.toUpperCase() || "FILE";
  return ext.slice(0, 5);
}

function addFiles(fileList) {
  const nextFiles = Array.from(fileList);
  nextFiles.forEach((file) => {
    const key = `${file.name}-${file.size}-${file.lastModified}`;
    if (uploadedAssets.some((item) => item.key === key)) return;
    uploadedAssets.push({ key, file, previewUrl: file.type.startsWith("image/") ? URL.createObjectURL(file) : "" });
  });
  syncAssetEvidence();
  renderAssets();
  render();
}

function removeAsset(key) {
  const index = uploadedAssets.findIndex((item) => item.key === key);
  if (index < 0) return;
  if (uploadedAssets[index].previewUrl) URL.revokeObjectURL(uploadedAssets[index].previewUrl);
  uploadedAssets.splice(index, 1);
  syncAssetEvidence();
  renderAssets();
  render();
}

function clearAssets() {
  uploadedAssets.forEach((item) => {
    if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
  });
  uploadedAssets.length = 0;
  assetUpload.value = "";
  syncAssetEvidence();
  renderAssets();
  render();
}

function syncAssetEvidence() {
  document.querySelector("#evidenceAssets").checked = uploadedAssets.length > 0;
}

function textHas(text, words) {
  return words.some((word) => text.includes(word));
}

function keywordScore(text, groups, base = 3) {
  let score = base;
  groups.forEach((group) => {
    if (textHas(text, group.words)) score += group.delta;
  });
  return clamp(Math.round(score), 1, 5);
}

function collectReviewText() {
  return [
    document.querySelector("#productName").value,
    productBriefEl.value,
    document.querySelector("#targetUser").value,
    document.querySelector("#category").value,
    document.querySelector("#channel").value,
  ]
    .join(" ")
    .toLowerCase();
}

function categoryKeywordSeed(category) {
  const map = {
    "consumer-accessory": ["creator accessory", "desk setup accessory", "content creator gear"],
    "electronics-accessory": ["device accessory", "protective kit", "travel case"],
    "home-appliance": ["small appliance accessory", "countertop organizer", "kitchen appliance accessory"],
    outdoor: ["camping accessory", "outdoor gear organizer", "lightweight camping kit"],
    pet: ["pet travel bottle", "dog walking accessory", "pet outdoor kit"],
    travel: ["travel safety accessory", "carry on organizer", "travel kit"],
    kitchen: ["kitchen organizer", "food storage accessory", "cooking tool kit"],
    "health-wellness": ["wellness accessory", "daily health organizer", "non medical health product"],
    "baby-kids": ["kids travel accessory", "child safety product", "parenting organizer"],
    "senior-travel": ["senior travel accessory", "elderly travel safety kit", "anti lost travel aid"],
    "soft-goods": ["storage pouch", "travel organizer", "carry case"],
  };
  return map[category] || ["product accessory", "new product idea", "consumer product"];
}

function generateMarketKeywords() {
  const productName = document.querySelector("#productName").value.trim();
  const category = document.querySelector("#category").value;
  const targetUser = document.querySelector("#targetUser").value.trim();
  const brief = productBriefEl.value.trim();
  const seeds = categoryKeywordSeed(category);
  const shortName = productName || "product concept";
  const user = targetUser || "target user";
  const contextWords = brief
    .split(/[，。,.、\s]+/)
    .filter((word) => word.length >= 2 && word.length <= 18)
    .slice(0, 6);
  return [
    shortName,
    `${shortName} Amazon reviews`,
    `${shortName} TikTok Shop`,
    `${shortName} Etsy`,
    `${user} product pain points`,
    ...seeds,
    ...contextWords.map((word) => `${word} accessory`),
  ]
    .filter(Boolean)
    .slice(0, 12)
    .join("\n");
}

function marketKeywordList() {
  if (!marketKeywordsEl.value.trim()) {
    marketKeywordsEl.value = generateMarketKeywords();
  }
  return Array.from(
    new Set(
      marketKeywordsEl.value
        .split(/\n+/)
        .map((item) => item.trim())
        .filter(Boolean),
    ),
  ).slice(0, 12);
}

function encodeQuery(value) {
  return encodeURIComponent(value.trim());
}

function buildResearchLinks(keywords = marketKeywordList()) {
  const primary = keywords[0] || document.querySelector("#productName").value.trim() || "consumer product";
  const reviewQuery = `${primary} reviews pain points`;
  const trendQuery = `${primary} trend`;
  const supplierQuery = `${primary} supplier wholesale`;
  return [
    {
      name: "Amazon 竞品",
      hint: "看价格带、主图、评价数",
      url: `https://www.amazon.com/s?k=${encodeQuery(primary)}`,
    },
    {
      name: "Google 差评痛点",
      hint: "搜 reviews / pain points",
      url: `https://www.google.com/search?q=${encodeQuery(reviewQuery)}`,
    },
    {
      name: "TikTok 内容热度",
      hint: "看短视频演示和话题",
      url: `https://www.tiktok.com/search?q=${encodeQuery(primary)}`,
    },
    {
      name: "Pinterest 风格趋势",
      hint: "看造型、CMF、场景图",
      url: `https://www.pinterest.com/search/pins/?q=${encodeQuery(trendQuery)}`,
    },
    {
      name: "YouTube 评测",
      hint: "看真实使用和抱怨点",
      url: `https://www.youtube.com/results?search_query=${encodeQuery(reviewQuery)}`,
    },
    {
      name: "Etsy 小众机会",
      hint: "看手作、礼品、细分需求",
      url: `https://www.etsy.com/search?q=${encodeQuery(primary)}`,
    },
    {
      name: "Google Trends",
      hint: "看需求上升或下降",
      url: `https://trends.google.com/trends/explore?geo=US&q=${encodeQuery(primary)}`,
    },
    {
      name: "AliExpress 供应",
      hint: "看供应密度和低价带",
      url: `https://www.aliexpress.com/wholesale?SearchText=${encodeQuery(supplierQuery)}`,
    },
  ];
}

function renderResearchLinks(links = buildResearchLinks()) {
  if (!researchLinksEl) return;
  researchLinksEl.innerHTML = links
    .map(
      (item) => `
        <a class="research-link-card" href="${item.url}" target="_blank" rel="noopener noreferrer">
          <strong>${item.name}</strong>
          <span>${item.hint}</span>
        </a>
      `,
    )
    .join("");
}

function marketEvidenceCompleteness({ competitor, price, review, trend, evidenceText }) {
  return [
    competitor !== "unknown",
    price !== "unknown",
    review !== "unknown",
    trend !== "unknown",
    evidenceText.length > 24,
  ].filter(Boolean).length;
}

function optionScore(value, scoreMap, fallback = 50) {
  return scoreMap[value] ?? fallback;
}

function marketResearchFromInputs() {
  const keywordItems = marketKeywordList();
  const researchLinks = buildResearchLinks(keywordItems);
  const competitor = competitorDensityEl.value;
  const price = priceBandEl.value;
  const review = reviewSignalEl.value;
  const trend = trendSignalEl.value;
  const evidenceText = painPointEvidenceEl.value.trim();
  const completeness = marketEvidenceCompleteness({ competitor, price, review, trend, evidenceText });

  const competitorScore = optionScore(competitor, { low: 82, medium: 68, high: 38, unknown: 46 });
  const priceScore = optionScore(price, { healthy: 80, premium: 66, low: 42, unknown: 48 });
  const reviewScore = optionScore(review, { "clear-pain": 82, weak: 45, saturated: 52, unknown: 46 });
  const trendScore = optionScore(trend, { rising: 84, stable: 66, decline: 32, unknown: 48 });
  const evidenceBonus = evidenceText.length > 24 ? 8 : evidenceText.length > 0 ? 4 : 0;
  const score = clamp(Math.round(competitorScore * 0.28 + priceScore * 0.2 + reviewScore * 0.27 + trendScore * 0.25 + evidenceBonus), 8, 94);

  return {
    score,
    competitor,
    price,
    review,
    trend,
    completeness,
    researchLinks,
    keywords: marketKeywordsEl.value.trim(),
    evidenceText,
    metrics: {
      竞品密度: competitor === "unknown" ? "待调研" : competitorDensityEl.options[competitorDensityEl.selectedIndex].textContent,
      价格带: price === "unknown" ? "待调研" : priceBandEl.options[priceBandEl.selectedIndex].textContent,
      评论信号: review === "unknown" ? "待调研" : reviewSignalEl.options[reviewSignalEl.selectedIndex].textContent,
      趋势信号: trend === "unknown" ? "待调研" : trendSignalEl.options[trendSignalEl.selectedIndex].textContent,
      证据完整度: `${completeness}/5`,
    },
  };
}

function renderMarket(result = null) {
  const metrics = document.querySelector("#marketMetrics");
  const insights = document.querySelector("#marketInsights");
  if (!result) {
    renderResearchLinks();
    metrics.innerHTML = ["竞品密度", "价格带", "评论信号", "趋势信号", "证据完整度"]
      .map((item) => `<div class="market-metric"><span>${item}</span><strong>待调研</strong></div>`)
      .join("");
    insights.innerHTML = "<li>点击“生成调研框架并纳入评审”，系统会生成平台搜索入口、关键词和证据完整度；把你查到的价格带、差评痛点和趋势信号录入后会计入总评。</li>";
    return;
  }
  renderResearchLinks(result.researchLinks);

  metrics.innerHTML = Object.entries(result.metrics)
    .map(([label, value]) => `<div class="market-metric"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");

  const notes = [];
  if (result.competitor === "unknown" || result.price === "unknown" || result.review === "unknown" || result.trend === "unknown") {
    notes.push("市场证据仍不完整：建议至少补齐竞品密度、价格带、评论信号和趋势信号。");
  }
  if (result.competitor === "high") notes.push("竞品密度偏高，需要更窄人群、更强外观记忆点或不同销售场景。");
  if (result.price === "low") notes.push("价格带偏低，可能难以覆盖广告、平台费和履约成本。");
  if (result.review === "clear-pain") notes.push("竞品差评痛点清晰，适合围绕这些痛点定义结构和主图卖点。");
  if (result.trend === "rising") notes.push("趋势信号较好，可以优先做内容测试和关键词页面验证。");
  if (result.completeness < 3) notes.push("证据完整度偏低：建议至少补齐 3 项，包括竞品密度、价格带、评论痛点、趋势信号和差评摘录。");
  if (result.evidenceText) notes.push(`已记录机会摘录：${result.evidenceText.slice(0, 80)}${result.evidenceText.length > 80 ? "..." : ""}`);
  if (!notes.length) notes.push("市场信号偏中性，建议先完成平台关键词搜索和 5-10 个竞品差评样本。");
  insights.innerHTML = notes.map((item) => `<li>${item}</li>`).join("");
}

function runMarketReview() {
  latestMarketResult = marketResearchFromInputs();
  document.querySelector("#evidenceTrend").checked = latestMarketResult.trend === "rising" || latestMarketResult.trend === "stable";
  document.querySelector("#evidenceReviews").checked = latestMarketResult.review === "clear-pain";
  document.querySelector("#evidenceMargin").checked = latestMarketResult.price === "healthy" || latestMarketResult.price === "premium";
  renderMarket(latestMarketResult);
  marketReviewNote.textContent = `已生成 ${latestMarketResult.researchLinks.length} 个平台调研入口，证据完整度 ${latestMarketResult.completeness}/5，并已纳入成功率和总评。`;
  render();
}

async function copyMarketKeywords() {
  const keywords = marketKeywordList().join("\n");
  renderResearchLinks();
  try {
    await navigator.clipboard.writeText(keywords);
    marketReviewNote.textContent = "关键词已复制。打开调研入口后，可直接粘贴到平台搜索框。";
  } catch (error) {
    marketKeywordsEl.focus();
    marketKeywordsEl.select();
    document.execCommand("copy");
    marketReviewNote.textContent = "关键词已选中并尝试复制；如果浏览器拦截，请手动复制。";
  }
}

function openCoreResearchTabs() {
  const links = buildResearchLinks().slice(0, 4);
  renderResearchLinks(links.concat(buildResearchLinks().slice(4)));
  links.forEach((item, index) => {
    setTimeout(() => window.open(item.url, "_blank", "noopener,noreferrer"), index * 80);
  });
  marketReviewNote.textContent = "已尝试打开 Amazon、Google、TikTok、Pinterest 四个核心入口；若浏览器拦截弹窗，可点击下方卡片逐个打开。";
}

function autoScoreFromInputs() {
  const text = collectReviewText();
  const category = document.querySelector("#category").value;
  const channel = document.querySelector("#channel").value;
  const hasAssets = uploadedAssets.length > 0;

  const values = {
    pain: keywordScore(text, [
      { words: ["防走散", "丢失", "急救", "安全", "风险", "痛点", "焦虑", "提醒", "防丢"], delta: 1 },
      { words: ["创作者", "卖家", "宠物", "户外", "旅行", "露营", "家居", "厨房", "亲子", "儿童", "老人", "银发", "适老"], delta: 1 },
      { words: ["可有可无", "装饰", "普通"], delta: -1 },
    ]),
    buyer: keywordScore(text, [
      { words: ["面向", "目标", "用户", "购买人", "子女", "家属", "导游", "机构", "创作者", "卖家"], delta: 1 },
      { words: ["b2b", "景区", "旅行社", "amazon", "tiktok", "etsy", "独立站"], delta: 1 },
      { words: ["所有人", "大众", "通用人群"], delta: -1 },
    ]),
    trend: keywordScore(text, [
      { words: ["旅行", "户外", "露营", "创作者", "短视频", "智能眼镜", "智能戒指", "电纸书", "宠物", "家居", "通勤"], delta: 1 },
      { words: ["ai", "健康", "车露营", "银发", "适老", "低龄老人", "亲子", "环保", "可持续"], delta: 1 },
      { words: ["过时", "传统礼品"], delta: -1 },
    ]),
    demo: keywordScore(text, [
      { words: ["一键", "大按键", "对比", "演示", "短视频", "可视化", "变形", "折叠", "磁吸", "发光", "震动"], delta: 1 },
      { words: ["套装", "前后对比", "场景", "旅行团", "机场", "露营"], delta: 1 },
      { words: ["看不见", "后台", "纯软件"], delta: -1 },
    ]),
    innovation: keywordScore(text, [
      { words: ["模块化", "可替换", "重新设计", "适老", "磁吸", "折叠", "隐形", "体面", "不显老"], delta: 1 },
      { words: ["特定", "细分", "窄场景", "专用"], delta: 1 },
      { words: ["普通", "同款", "常规", "无差异"], delta: -1 },
    ]),
    competition: keywordScore(text, [
      { words: ["手机壳", "贴纸", "收纳袋", "普通", "通用", "咖啡杯", "水杯"], delta: 1 },
      { words: ["竞品多", "价格战", "红海"], delta: 1 },
      { words: ["窄场景", "专用", "早期", "新设备", "非电子配件"], delta: -1 },
    ]),
    logistics: keywordScore(text, [
      { words: ["体积小", "小", "轻", "轻量", "扁平", "无电", "非电子", "配件", "挂绳", "卡片", "套装"], delta: 1 },
      { words: ["非液体", "无电池", "不含电池"], delta: 1 },
      { words: ["电池", "液体", "玻璃", "大件", "重", "易碎", "5000mah"], delta: -1 },
    ], 4),
    margin: keywordScore(text, [
      { words: ["套装", "配件", "耗材", "礼盒", "多色", "系列化", "可替换"], delta: 1 },
      { words: ["售价", "毛利", "成本", "轻量", "小件"], delta: 1 },
      { words: ["订阅", "云端", "硬件终端", "高售后", "低价"], delta: -1 },
    ]),
    bom: keywordScore(text, [
      { words: ["gps", "蓝牙", "app", "云端", "传感器", "心率", "血压", "电池", "充电", "固件", "联网", "sim"], delta: 1 },
      { words: ["马达", "屏幕", "无线", "qi", "反向充电", "5000mah"], delta: 1 },
      { words: ["无电", "非电子", "卡片", "挂绳", "收纳", "软包"], delta: -1 },
    ], 2),
    compliance: keywordScore(text, [
      { words: ["医疗", "血压", "心率", "健康数据", "诊断", "治疗", "药", "儿童", "食品接触", "承重", "刀具", "燃气"], delta: 1 },
      { words: ["gps", "蓝牙", "射频", "电池", "定位", "隐私", "轨迹", "云端"], delta: 1 },
      { words: ["无电", "非医疗", "不做医疗宣称", "非电子", "普通配件"], delta: -1 },
    ], 2),
    support: keywordScore(text, [
      { words: ["app", "绑定", "联网", "云端", "误报", "定位", "教学", "安装", "sim", "订阅", "售后"], delta: 1 },
      { words: ["多尺码", "适配", "充电", "电池"], delta: 1 },
      { words: ["无电", "卡片", "无需设置", "即开即用", "非电子"], delta: -1 },
    ], 2),
    brand: keywordScore(text, [
      { words: ["体面", "不显老", "简洁", "高级", "apple", "礼盒", "美化", "上镜", "设计"], delta: 1 },
      { words: ["适老", "大字", "大按键", "易用", "亲属放心", "上镜", "好看", "高端", "统一", "品牌感"], delta: 1 },
      { words: ["廉价", "粗糙", "土", "复杂"], delta: -1 },
    ]),
  };

  if (category === "home-appliance") {
    values.compliance = clamp(values.compliance + 1, 1, 5);
    values.bom = clamp(values.bom + 1, 1, 5);
  }
  if (category === "baby-kids") {
    values.compliance = clamp(values.compliance + 2, 1, 5);
    values.support = clamp(values.support + 1, 1, 5);
  }
  if (category === "health-wellness") {
    values.compliance = clamp(values.compliance + 1, 1, 5);
  }
  if (category === "pet") {
    values.buyer = clamp(values.buyer + 1, 1, 5);
    values.demo = clamp(values.demo + 1, 1, 5);
  }
  if (category === "consumer-accessory" || category === "electronics-accessory") {
    values.logistics = clamp(values.logistics + 1, 1, 5);
  }
  if (channel === "b2b") {
    values.buyer = clamp(values.buyer + 1, 1, 5);
    values.support = clamp(values.support + 1, 1, 5);
  }
  if (hasAssets) {
    values.brand = clamp(values.brand + 1, 1, 5);
    values.demo = clamp(values.demo + 1, 1, 5);
  }

  return values;
}

function runAutoReview() {
  if (!latestMarketResult) {
    latestMarketResult = marketResearchFromInputs();
    renderMarket(latestMarketResult);
  }
  const values = autoScoreFromInputs();
  Object.entries(values).forEach(([id, value]) => {
    document.querySelector(`#${id}`).value = value;
  });

  const text = collectReviewText();
  document.querySelector("#evidenceTrend").checked = values.trend >= 4;
  document.querySelector("#evidenceReviews").checked = textHas(text, ["竞品", "差评", "评论", "评价", "amazon", "etsy", "tiktok"]);
  document.querySelector("#evidenceSupplier").checked = textHas(text, ["供应链", "工厂", "打样", "开模", "材料", "bom"]);
  document.querySelector("#evidenceMargin").checked = textHas(text, ["售价", "成本", "毛利", "利润", "价格带"]);
  syncAssetEvidence();
  if (scoringCard) scoringCard.open = true;
  autoReviewNote.textContent = "已根据产品简介和当前资料自动生成初评分。你仍可展开评分因子进行人工校准。";
  render();
}

function runFullWorkflow() {
  runMarketReview();
  runAppearanceReview();
  runAutoReview();
  autoReviewNote.textContent = "完整工作流已运行：市场调研、外观预审、商业成功率和综合结论已同步更新。";
  marketReviewNote.textContent = "市场调研已纳入总评；请把平台搜索结果、竞品差评和价格带继续补进来复核。";
  appearanceReviewNote.textContent = "外观预审已纳入总评；建议用主视角、使用场景、CMF/细节图继续校准。";
}

function collectAppearanceText() {
  return [
    document.querySelector("#productName").value,
    productBriefEl.value,
    document.querySelector("#targetUser").value,
    designIntentEl.value,
    designStageEl.value,
    styleTargetEl.value,
    document.querySelector("#category").value,
  ]
    .join(" ")
    .toLowerCase();
}

function appearanceScoreFromInputs() {
  const text = collectAppearanceText();
  const stage = designStageEl.value;
  const style = styleTargetEl.value;
  const imageCount = uploadedAssets.filter((item) => item.file.type.startsWith("image/")).length;

  const values = {
    clarity: keywordScore(text, [
      { words: ["清晰", "一眼", "正反", "大按键", "操作", "入口", "功能", "可视化", "识别"], delta: 1 },
      { words: ["复杂", "看不懂", "隐藏", "混乱"], delta: -1 },
    ]),
    distinctive: keywordScore(text, [
      { words: ["差异化", "记忆点", "独特", "轮廓", "比例", "标志性", "系列化", "可替换"], delta: 1 },
      { words: ["普通", "同质化", "同款", "无差异"], delta: -1 },
    ]),
    ergonomics: keywordScore(text, [
      { words: ["握持", "挂绳", "夹", "把手", "大按键", "开合", "防滑", "单手", "易用", "手感"], delta: 1 },
      { words: ["误触", "硌手", "难拿", "难开", "尖锐"], delta: -1 },
    ]),
    cmf: keywordScore(text, [
      { words: ["cmf", "材质", "配色", "表面", "磨砂", "亲肤", "金属", "硅胶", "织物", "高级", "体面", "不显老"], delta: 1 },
      { words: ["廉价", "粗糙", "土", "脏", "易刮"], delta: -1 },
    ]),
    manufacturing: keywordScore(text, [
      { words: ["分件", "拔模", "公差", "装配", "模具", "量产", "简单结构", "软包", "非电子"], delta: 1 },
      { words: ["倒扣", "复杂曲面", "透明件", "多材料包胶", "高光", "电镀", "防水"], delta: -1 },
    ]),
    commerce: keywordScore(text, [
      { words: ["主图", "场景", "礼盒", "套装", "对比", "上镜", "短视频", "颜色", "系列", "卖点"], delta: 1 },
      { words: ["看不见", "后台", "难解释", "纯软件"], delta: -1 },
    ]),
  };

  if (imageCount >= 1) {
    values.clarity = clamp(values.clarity + 1, 1, 5);
    values.commerce = clamp(values.commerce + 1, 1, 5);
  }
  if (imageCount >= 3) {
    values.cmf = clamp(values.cmf + 1, 1, 5);
  }
  if (stage === "prototype") {
    values.manufacturing = clamp(values.manufacturing + 1, 1, 5);
    values.ergonomics = clamp(values.ergonomics + 1, 1, 5);
  }
  if (stage === "concept") {
    values.manufacturing = clamp(values.manufacturing - 1, 1, 5);
  }
  if (style === "premium") {
    values.cmf = clamp(values.cmf + 1, 1, 5);
  }
  if (style === "outdoor") {
    values.ergonomics = clamp(values.ergonomics + 1, 1, 5);
    values.manufacturing = clamp(values.manufacturing + 1, 1, 5);
  }

  const score = Math.round(
    values.clarity * 0.18 * 20 +
      values.distinctive * 0.16 * 20 +
      values.ergonomics * 0.17 * 20 +
      values.cmf * 0.16 * 20 +
      values.manufacturing * 0.16 * 20 +
      values.commerce * 0.17 * 20,
  );

  return { values, score: clamp(score, 8, 94), imageCount };
}

function appearanceDecision(score) {
  if (score >= 78) return { text: "可进入深化", className: "good" };
  if (score >= 60) return { text: "需要迭代", className: "warn" };
  return { text: "先重构方向", className: "danger" };
}

function renderAppearance(result = null) {
  const scoreEl = document.querySelector("#appearanceScore");
  const badge = document.querySelector("#appearanceBadge");
  const summary = document.querySelector("#appearanceSummary");
  const dial = document.querySelector("#appearanceDial");
  const metrics = document.querySelector("#appearanceMetrics");
  const insights = document.querySelector("#appearanceInsights");

  if (!result) {
    dial.style.setProperty("--appearance-score", 0);
    scoreEl.value = "--";
    badge.textContent = "待评审";
    badge.className = "appearance-badge";
    metrics.innerHTML = appearanceDimensions
      .map((item) => `<div class="appearance-metric"><span>${item.label}</span><strong>--</strong><p>${item.caption}</p></div>`)
      .join("");
    insights.innerHTML = "<li>先上传图片并填写设计意图，系统会生成外观成熟度、主要风险和下一轮修改重点。</li>";
    return;
  }

  const d = appearanceDecision(result.score);
  dial.style.setProperty("--appearance-score", result.score);
  scoreEl.value = `${result.score}`;
  badge.textContent = d.text;
  badge.className = `appearance-badge ${d.className}`;
  summary.textContent =
    result.score >= 78
      ? "外观方案已经具备较好的识别度、成熟度和商品化表达，可以进入细节深化、CMF 打样和页面主图验证。"
      : result.score >= 60
        ? "外观方向有基础，但仍需要强化识别、CMF 或人机细节，建议先做一次针对性迭代再进入商业评审。"
        : "外观方案当前前端不够稳定，建议先重构品类识别、使用方式和目标审美，而不是直接进入打样。";
  metrics.innerHTML = appearanceDimensions
    .map((item) => {
      const value = result.values[item.id] * 20;
      return `<div class="appearance-metric"><span>${item.label}</span><strong>${value}</strong><div class="bar"><span style="width:${value}%"></span></div><p>${item.caption}</p></div>`;
    })
    .join("");

  const notes = [];
  if (result.imageCount === 0) notes.push("尚未上传外观图片，当前只能根据文字初评；建议补充至少 3 张图：主视角、使用场景、细节/CMF。");
  if (result.values.clarity <= 3) notes.push("第一眼识别还不够强，需要让用户更快看懂品类、使用方向和核心操作入口。");
  if (result.values.distinctive <= 3) notes.push("造型记忆点偏弱，建议加强轮廓比例、关键特征或系列化 CMF。");
  if (result.values.ergonomics <= 3) notes.push("人机暗示不足，需要明确握持、挂扣、按压、开合或接触区域。");
  if (result.values.manufacturing <= 3) notes.push("量产友好度需要复核，建议补充分件线、材料、表面处理和结构约束。");
  if (!notes.length) notes.push("外观评审没有明显硬伤，下一步可以进入 CMF 细化、竞品并排对比和首页主图测试。");
  insights.innerHTML = notes.map((item) => `<li>${item}</li>`).join("");
}

function runAppearanceReview() {
  const result = appearanceScoreFromInputs();
  latestAppearanceResult = result;
  renderAppearance(result);
  appearanceReviewNote.textContent = "已完成外观预审。此评分可作为商业成功率评审之前的设计成熟度判断。";
  renderFinal(calculate());
}

function renderAssets() {
  if (!uploadedAssets.length) {
    uploadStats.textContent = "尚未上传资料";
    assetPreview.innerHTML = "";
    return;
  }
  const imageCount = uploadedAssets.filter((item) => item.file.type.startsWith("image/")).length;
  const totalSize = uploadedAssets.reduce((sum, item) => sum + item.file.size, 0);
  uploadStats.textContent = `已上传 ${uploadedAssets.length} 个文件，其中 ${imageCount} 张图片，总计 ${formatBytes(totalSize)}`;
  assetPreview.innerHTML = uploadedAssets
    .map((item) => {
      const thumb = item.previewUrl ? `<img src="${item.previewUrl}" alt="${item.file.name}" />` : fileKind(item.file);
      return `
        <div class="asset-card">
          <div class="asset-thumb">${thumb}</div>
          <div>
            <div class="asset-name" title="${item.file.name}">${item.file.name}</div>
            <div class="asset-meta">${fileKind(item.file)} · ${formatBytes(item.file.size)}</div>
          </div>
          <button class="asset-remove" type="button" data-remove-asset="${item.key}" aria-label="移除 ${item.file.name}">×</button>
        </div>
      `;
    })
    .join("");
}

function render() {
  sliders.forEach((item) => {
    document.querySelector(`#${item.id}Value`).value = document.querySelector(`#${item.id}`).value;
  });
  const result = calculate();
  const d = decision(result.score);
  document.querySelector("#successScore").value = `${result.score}%`;
  document.querySelector("#scoreDial").style.setProperty("--score", result.score);
  const badge = document.querySelector("#decisionBadge");
  badge.textContent = d.text;
  badge.className = `decision-badge ${d.className}`;
  document.querySelector("#scoreSummary").textContent = scoreSummary(result.score);
  document.querySelector("#metricsGrid").innerHTML = [
    metricMarkup("市场机会", result.market),
    metricMarkup("差异化", result.differentiation),
    metricMarkup("执行可行性", result.execution),
    metricMarkup("风险可控性", result.risk),
  ].join("");
  document.querySelector("#insightList").innerHTML = renderInsights(result).map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#riskList").innerHTML = renderRisks().map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#nextSteps").innerHTML = renderNextSteps(result).map((item) => `<li>${item}</li>`).join("");
  renderFinal(result);
}

function applyPreset(key) {
  const preset = presets[key] || presets.custom;
  latestAppearanceResult = null;
  latestMarketResult = null;
  document.querySelector("#productName").value = preset.productName;
  productBriefEl.value = preset.productBrief || "";
  document.querySelector("#category").value = preset.category;
  document.querySelector("#targetUser").value = preset.targetUser;
  document.querySelector("#channel").value = preset.channel;
  sliders.forEach((item) => {
    document.querySelector(`#${item.id}`).value = preset.values[item.id] ?? item.defaultValue;
  });
  Object.entries(preset.evidence).forEach(([id, value]) => {
    document.querySelector(`#${id}`).checked = value;
  });
  if (uploadedAssets.length) document.querySelector("#evidenceAssets").checked = true;
  marketKeywordsEl.value = "";
  competitorDensityEl.value = "unknown";
  priceBandEl.value = "unknown";
  reviewSignalEl.value = "unknown";
  trendSignalEl.value = "unknown";
  painPointEvidenceEl.value = "";
  renderAppearance();
  renderMarket();
  render();
}

createSliders();
applyPreset("custom");
renderAssets();
renderAppearance();
renderMarket();
renderFinal();

document.querySelectorAll("input, select").forEach((el) => {
  el.addEventListener("input", render);
  el.addEventListener("change", render);
});

productBriefEl.addEventListener("input", () => {
  autoReviewNote.textContent = "简介已更新，点击自动评审可重新生成评分。";
  renderResearchLinks();
});
runWorkflowBtn.addEventListener("click", runFullWorkflow);
autoReviewBtn.addEventListener("click", runAutoReview);
autoMarketBtn.addEventListener("click", runMarketReview);
copyKeywordsBtn.addEventListener("click", copyMarketKeywords);
openResearchTabsBtn.addEventListener("click", openCoreResearchTabs);
marketKeywordsEl.addEventListener("input", () => renderResearchLinks());
autoAppearanceBtn.addEventListener("click", runAppearanceReview);
designIntentEl.addEventListener("input", () => {
  appearanceReviewNote.textContent = "设计意图已更新，点击评审外观设计可重新生成预审。";
});

assetUpload.addEventListener("change", (event) => addFiles(event.target.files));
dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropZone.classList.add("dragging");
});
dropZone.addEventListener("dragleave", () => dropZone.classList.remove("dragging"));
dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  dropZone.classList.remove("dragging");
  addFiles(event.dataTransfer.files);
});
assetPreview.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-asset]");
  if (button) removeAsset(button.dataset.removeAsset);
});
clearFilesBtn.addEventListener("click", clearAssets);
presetEl.addEventListener("change", () => applyPreset(presetEl.value));
resetBtn.addEventListener("click", () => {
  presetEl.value = "custom";
  applyPreset("custom");
});

window.productReviewUpload = {
  getFiles: () => uploadedAssets.map((item) => item.file),
  getSummary: () => ({
    count: uploadedAssets.length,
    imageCount: uploadedAssets.filter((item) => item.file.type.startsWith("image/")).length,
    totalBytes: uploadedAssets.reduce((sum, item) => sum + item.file.size, 0),
  }),
  clear: clearAssets,
};
