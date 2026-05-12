import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/90 backdrop-blur-sm border-b border-[#e0e8f0]">
        <span className="text-sm font-bold tracking-widest text-[#005088] uppercase">
          理学療法士革命
        </span>
        <a
          href="#contact"
          className="text-sm text-white bg-[#0e78c2] px-5 py-2 rounded-full hover:bg-[#005088] transition-all duration-200 font-medium"
        >
          お問い合わせ
        </a>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-24 bg-white">
        <div className="max-w-5xl">
          <p className="text-[#0e78c2] text-xs tracking-widest uppercase mb-8 font-semibold">
            Sponsor Recruitment
          </p>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter mb-10 text-[#005088]">
            理学療法士・
            <br />
            作業療法士だけに、
            <br />
            <span className="text-[#0e78c2]">
              届ける広告。
            </span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12">
            <p className="text-[#555555] text-lg leading-relaxed max-w-xl">
              登録者26,000人・総再生470万回超。<br />
              PT/OT専門メディアとして積み上げた信頼を、<br />
              あなたのサービスのために活用してください。
            </p>
            <a
              href="#plans"
              className="inline-flex items-center gap-3 text-white bg-[#0e78c2] hover:bg-[#005088] px-8 py-4 rounded-full font-semibold transition-all whitespace-nowrap"
            >
              料金プランを見る
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-24 pb-16 border-t border-[#e0e8f0] pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl">
          {[
            { num: "26,000", unit: "人", label: "登録者数" },
            { num: "470万", unit: "回+", label: "総再生回数" },
            { num: "1K〜3K", unit: "回", label: "平均再生数/本" },
            { num: "PT/OT", unit: "", label: "完全特化チャンネル" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#005088]">
                {s.num}
                <span className="text-[#0e78c2] text-2xl">{s.unit}</span>
              </div>
              <div className="text-[#999999] text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Audience */}
      <section className="py-32 px-8 md:px-16 bg-[#f7f7f7]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-[#0e78c2] text-xs tracking-widest uppercase mb-4 font-semibold">Audience</p>
            <h2 className="text-4xl font-bold leading-tight mb-6 text-[#005088]">
              採用・教育・販売の<br />意思決定層が、<br />ここにいます。
            </h2>
            <p className="text-[#555555] leading-relaxed">
              本チャンネルの視聴者は、臨床現場で働くPT/OTを中心とした専門職集団です。キャリアアップや転職・副業に高い関心を持ち、信頼できる情報源からのサービスに反応します。
            </p>
          </div>
          <div className="space-y-6 pt-2">
            {[
              ["職種", "理学療法士（PT）・作業療法士（OT）"],
              ["年齢層", "20代〜30代前半が中心"],
              ["関心領域", "技術向上・キャリアアップ・転職・副業・独立"],
              ["特性", "臨床現場で働く医療職。専門性への信頼度が高い"],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-6 pb-6 border-b border-[#e0e8f0]">
                <span className="text-[#aaaaaa] text-sm w-20 flex-shrink-0 pt-0.5">{label}</span>
                <span className="text-[#333333] text-sm leading-relaxed">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-32 px-8 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#0e78c2] text-xs tracking-widest uppercase mb-4 font-semibold">Why Sponsor</p>
          <h2 className="text-4xl font-bold mb-20 text-[#005088]">選ばれる3つの理由</h2>
          <div className="space-y-0">
            {[
              {
                title: "ターゲットが明確",
                desc: "PT/OTに完全特化しているため、広告が無駄なく届きます。一般メディアと異なり、関係のない視聴者へのリーチコストがゼロです。",
              },
              {
                title: "信頼ベースのメディア",
                desc: "医療職向けコンテンツとして積み上げてきた信頼があります。視聴者がスポンサー商品を「信頼できる情報」として受け取る土台がある。",
              },
              {
                title: "コンバージョンまで設計できる",
                desc: "YouTube → LINE → LP という導線設計が可能です。視聴から問い合わせ・申込みまでの一連のフローを一緒に構築できます。",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="flex flex-col md:flex-row gap-8 md:gap-16 py-10 border-t border-[#e0e8f0] group"
              >
                <div className="text-[#ccddee] text-sm font-mono w-8 flex-shrink-0 mt-1 group-hover:text-[#0e78c2] transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-16">
                  <h3 className="text-xl font-bold md:w-48 flex-shrink-0 text-[#005088]">{item.title}</h3>
                  <p className="text-[#555555] leading-relaxed flex-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-32 px-8 md:px-16 bg-[#f0f6fb]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#0e78c2] text-xs tracking-widest uppercase mb-4 font-semibold">Promotions</p>
          <h2 className="text-4xl font-bold mb-16 text-[#005088]">提供できること</h2>
          <div className="grid md:grid-cols-2 gap-px bg-[#d0e4f0] rounded-xl overflow-hidden">
            {[
              {
                title: "動画内紹介",
                desc: "自然な流れで商品・サービスを紹介。視聴者に馴染む形での訴求。",
              },
              {
                title: "スポンサー専用動画",
                desc: "1本まるごと企画。深い理解と強い訴求が可能。実演・解説形式にも対応。",
              },
              {
                title: "概要欄・固定コメント",
                desc: "LP・LINE・応募フォームへの安定した流入経路を確保。",
              },
              {
                title: "Shorts連動",
                desc: "リーチの大幅拡大。本編への導線として機能します。",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 hover:bg-[#f7fbff] transition-colors">
                <div className="w-1 h-6 bg-[#0e78c2] mb-5 rounded-full" />
                <h3 className="font-bold text-lg mb-2 text-[#005088]">{item.title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-32 px-8 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#0e78c2] text-xs tracking-widest uppercase mb-4 font-semibold">Plans</p>
          <h2 className="text-4xl font-bold mb-20 text-[#005088]">料金プラン</h2>

          <div className="space-y-6">
            {/* Standard */}
            <div className="rounded-2xl border border-[#e0e8f0] bg-white p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-16 hover:border-[#0e78c2]/40 hover:shadow-sm transition-all">
              <div className="md:w-56 flex-shrink-0">
                <p className="text-[#999999] text-sm mb-1">スタンダード</p>
                <div className="text-4xl font-black text-[#005088]">¥150,000</div>
                <div className="text-[#aaaaaa] text-sm">/ 本</div>
              </div>
              <Separator orientation="vertical" className="hidden md:block h-20 bg-[#e0e8f0]" />
              <ul className="flex-1 grid grid-cols-2 gap-x-8 gap-y-2">
                {["動画内2〜3分紹介", "概要欄リンク", "固定コメント", "LINE / LP誘導"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#444444]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0e78c2] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="text-sm text-[#0e78c2] hover:text-[#005088] underline underline-offset-4 transition-colors whitespace-nowrap">
                申し込む →
              </a>
            </div>

            {/* Premium */}
            <div className="rounded-2xl border-2 border-[#0e78c2] bg-[#f0f6fb] p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-16 relative">
              <div className="absolute top-4 right-4 text-xs bg-[#0e78c2] text-white px-3 py-1 rounded-full font-medium">
                おすすめ
              </div>
              <div className="md:w-56 flex-shrink-0">
                <p className="text-[#0e78c2] text-sm mb-1 font-medium">プレミアム</p>
                <div className="text-4xl font-black text-[#005088]">¥300,000</div>
                <div className="text-[#aaaaaa] text-sm">/ 本</div>
              </div>
              <Separator orientation="vertical" className="hidden md:block h-20 bg-[#c0d8ec]" />
              <ul className="flex-1 grid grid-cols-2 gap-x-8 gap-y-2">
                {["スポンサー専用企画動画", "深掘り解説・実演可能", "概要欄・固定コメント", "Shorts切り抜き1本"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#333333]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0e78c2] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="text-sm text-white bg-[#0e78c2] hover:bg-[#005088] px-5 py-2 rounded-full transition-colors whitespace-nowrap font-medium">
                申し込む →
              </a>
            </div>

            {/* Monthly */}
            <div className="rounded-2xl border border-[#e0e8f0] bg-white p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-16 hover:border-[#0e78c2]/40 hover:shadow-sm transition-all">
              <div className="md:w-56 flex-shrink-0">
                <p className="text-[#999999] text-sm mb-1">月額スポンサー</p>
                <div className="text-4xl font-black text-[#005088]">¥600,000</div>
                <div className="text-[#aaaaaa] text-sm">/ 月</div>
              </div>
              <Separator orientation="vertical" className="hidden md:block h-20 bg-[#e0e8f0]" />
              <ul className="flex-1 grid grid-cols-2 gap-x-8 gap-y-2">
                {["全動画で30秒紹介", "概要欄リンク", "固定コメント"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#444444]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0e78c2] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="text-sm text-[#0e78c2] hover:text-[#005088] underline underline-offset-4 transition-colors whitespace-nowrap">
                申し込む →
              </a>
            </div>
          </div>

          <p className="text-[#aaaaaa] text-sm mt-6 text-center">
            ※ 内容はご相談に応じてカスタマイズ可能です
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 px-8 md:px-16 bg-[#f7f7f7]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#0e78c2] text-xs tracking-widest uppercase mb-4 font-semibold">Use Cases</p>
          <h2 className="text-4xl font-bold mb-4 text-[#005088]">こんな企業に使われています</h2>
          <p className="text-[#666666] mb-16 max-w-lg">
            PT/OTを採用・集客・販売ターゲットにしている企業であれば、ほぼすべてのケースで効果が見込めます。
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "採用",
                detail: "求人応募数の増加 / 若手PT・OTへの直接リーチ",
                clients: "医療職向け求人サービス・転職エージェント",
              },
              {
                category: "セミナー集客",
                detail: "申込数の増加 / 専門性の高い顧客獲得",
                clients: "セミナー会社・オンライン講座",
              },
              {
                category: "教材・サービス販売",
                detail: "高単価商品の訴求 / 信頼ベースでの購買促進",
                clients: "技術教材・リハビリ機器・医療系SaaS",
              },
            ].map((item) => (
              <div key={item.category} className="border-t-2 border-[#0e78c2] pt-8">
                <h3 className="font-bold text-lg mb-3 text-[#005088]">{item.category}</h3>
                <p className="text-[#555555] text-sm leading-relaxed mb-4">{item.detail}</p>
                <p className="text-[#aaaaaa] text-xs">{item.clients}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-32 px-8 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#0e78c2] text-xs tracking-widest uppercase mb-4 font-semibold">Comparison</p>
          <h2 className="text-4xl font-bold mb-16 text-[#005088]">他のメディアとの違い</h2>
          <div className="rounded-2xl border border-[#e0e8f0] overflow-hidden">
            <div className="grid grid-cols-3 bg-[#f0f6fb] border-b border-[#e0e8f0]">
              <div className="py-4 px-6 text-[#aaaaaa] text-sm" />
              <div className="py-4 px-6 text-[#888888] text-sm text-center border-l border-[#e0e8f0]">一般メディア</div>
              <div className="py-4 px-6 text-[#0e78c2] text-sm text-center font-semibold border-l border-[#e0e8f0]">理学療法士革命</div>
            </div>
            {[
              { label: "ターゲット精度", general: "広い", us: "PT/OTに特化" },
              { label: "広告の無駄打ち", general: "多い", us: "少ない" },
              { label: "視聴者の信頼性", general: "低〜中", us: "高い" },
              { label: "CV率", general: "低め", us: "高い" },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 border-b border-[#e0e8f0] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#fafbfc]"}`}
              >
                <div className="py-5 px-6 text-[#555555] text-sm">{row.label}</div>
                <div className="py-5 px-6 text-[#aaaaaa] text-sm text-center border-l border-[#e0e8f0]">{row.general}</div>
                <div className="py-5 px-6 text-[#0e78c2] text-sm text-center font-semibold border-l border-[#e0e8f0]">{row.us}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-8 md:px-16 bg-[#005088]">
        <div className="max-w-5xl mx-auto">
          <div className="md:grid md:grid-cols-2 gap-20">
            <div>
              <p className="text-[#7ab8e0] text-xs tracking-widest uppercase mb-4 font-semibold">Contact</p>
              <h2 className="text-4xl font-bold mb-6 text-white">
                まずは、<br />お気軽にご相談ください。
              </h2>
              <p className="text-[#a8cce0] leading-relaxed mb-10">
                スポンサープランの詳細や事例のご説明、カスタム提案などを承っています。メールまたはLINEよりお気軽にご連絡ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-white text-[#005088] hover:bg-[#f0f6fb] font-bold px-8 py-5 rounded-full">
                  メールで問い合わせる
                </Button>
                <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 px-8 py-5 rounded-full bg-transparent">
                  LINEで問い合わせる
                </Button>
              </div>
            </div>
            <div className="mt-12 md:mt-0 space-y-0">
              {[
                { label: "会社名", value: "株式会社理学ボディ" },
                { label: "担当者", value: "清水" },
                { label: "メール", value: "XXXX" },
                { label: "LINE", value: "XXXX" },
              ].map((item) => (
                <div key={item.label} className="flex gap-8 py-5 border-b border-white/15">
                  <span className="text-[#7ab8e0] text-sm w-20 flex-shrink-0">{item.label}</span>
                  <span className="text-white text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 py-8 border-t border-[#e0e8f0] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white">
        <span className="text-sm font-bold tracking-widest text-[#005088] uppercase">
          理学療法士革命
        </span>
        <span className="text-[#aaaaaa] text-xs">
          © 2024 株式会社理学ボディ. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
