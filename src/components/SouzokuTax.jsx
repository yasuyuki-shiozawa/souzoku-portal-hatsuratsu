import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { 
  ArrowLeft, 
  Calculator, 
  FileText, 
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  BookOpen
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function SouzokuTax() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* ヘッダー */}
      <header className="bg-white shadow-soft border-b py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center text-neutral-700 hover:text-primary-500"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              トップページに戻る
            </Button>
            <div className="flex items-center">
              <Calculator className="h-6 w-6 text-primary-400 mr-2" />
              <span className="text-xl font-bold text-neutral-800">相続税の基礎</span>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* イントロダクション */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-neutral-800 mb-6">相続税の基礎知識</h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            相続税は、相続財産が一定額を超える場合に課される税金です。<br />
            基礎控除額や計算方法、各種特例について詳しく解説します。
          </p>
        </div>

        {/* 目次 */}
        <Card className="mb-12 border-primary-200 bg-primary-50">
          <CardHeader>
            <CardTitle className="text-2xl text-primary-700">目次</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="#tax-overview" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                <Calculator className="h-4 w-4 mr-2" />
                1. 相続税とは
              </a>
              <a href="#taxable-property" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                <DollarSign className="h-4 w-4 mr-2" />
                2. 課税対象となる財産
              </a>
              <a href="#basic-deduction" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                <TrendingUp className="h-4 w-4 mr-2" />
                3. 基礎控除額
              </a>
              <a href="#tax-calculation" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                <Calculator className="h-4 w-4 mr-2" />
                4. 相続税の計算方法
              </a>
              <a href="#special-provisions" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                <CheckCircle className="h-4 w-4 mr-2" />
                5. 主な特例
              </a>
              <a href="#filing-payment" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                <FileText className="h-4 w-4 mr-2" />
                6. 申告と納付
              </a>
            </div>
          </CardContent>
        </Card>

        {/* 1. 相続税とは */}
        <section id="tax-overview" className="mb-16">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Calculator className="h-6 w-6 mr-3 text-primary-500" />
                1. 相続税とは
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                相続税とは、亡くなった人（被相続人）から財産を相続した場合に課される税金です。
                ただし、すべての相続に相続税が課されるわけではなく、相続財産の総額が
                「基礎控除額」を超える場合にのみ課税されます。
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">相続税の特徴</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>累進税率</strong>：相続財産が多いほど税率が高くなります</li>
                  <li><strong>基礎控除</strong>：一定額までは非課税です</li>
                  <li><strong>申告納税制度</strong>：自ら計算して申告・納税する必要があります</li>
                  <li><strong>連帯納付義務</strong>：相続人は他の相続人の税額についても責任を負います</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold mb-4 text-yellow-800 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  相続税がかかる割合
                </h3>
                <p className="text-lg">
                  令和4年分の統計によると、相続税の課税対象となる相続は全体の約9.3%です。
                  つまり、約90%の相続では相続税はかかりません。
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 2. 課税対象となる財産 */}
        <section id="taxable-property" className="mb-16">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <DollarSign className="h-6 w-6 mr-3 text-primary-500" />
                2. 課税対象となる財産
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                相続税の課税対象となる財産は、現金、預貯金、株式などの有価証券、土地、建物など、
                金銭に見積もることができる経済的価値のある全ての財産です。
              </p>

              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">本来の相続財産</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">金融資産</h4>
                      <ul className="list-disc pl-4 space-y-1 text-sm">
                        <li>現金・預貯金</li>
                        <li>株式・債券</li>
                        <li>投資信託</li>
                        <li>生命保険契約に関する権利</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">不動産・その他</h4>
                      <ul className="list-disc pl-4 space-y-1 text-sm">
                        <li>土地・建物</li>
                        <li>自動車・貴金属</li>
                        <li>ゴルフ会員権</li>
                        <li>特許権・著作権</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">みなし相続財産</h3>
                  <p className="mb-4">被相続人の死亡に伴い支払われる財産で、相続によって取得したものとみなされます。</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-blue-700">生命保険金・死亡退職金</h4>
                      <p className="text-sm text-neutral-600">非課税限度額：500万円 × 法定相続人の数</p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="text-xl font-semibold mb-4 text-orange-800">生前贈与された財産</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-orange-700">相続開始前7年以内の贈与</h4>
                      <p className="text-sm text-neutral-600">相続時精算課税を適用していない場合でも、相続開始前7年以内の贈与は相続税の課税対象となります。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-700">相続時精算課税の適用を受けた贈与</h4>
                      <p className="text-sm text-neutral-600">生前に贈与を受け、相続時精算課税を選択した財産は相続税の課税対象となります。</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-semibold mb-4 text-red-800">課税対象から除かれる財産</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">非課税財産</h4>
                      <ul className="list-disc pl-4 space-y-1 text-sm">
                        <li>墓地・墓石・仏壇・仏具</li>
                        <li>公益事業用財産</li>
                        <li>心身障害者共済制度の給付金</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">債務・葬式費用</h4>
                      <ul className="list-disc pl-4 space-y-1 text-sm">
                        <li>借入金・未払金</li>
                        <li>未払税金</li>
                        <li>葬式費用</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 3. 基礎控除額 */}
        <section id="basic-deduction" className="mb-16">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <TrendingUp className="h-6 w-6 mr-3 text-primary-500" />
                3. 基礎控除額
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                基礎控除額は、相続税が課税されない金額の上限です。
                相続財産の課税価格がこの金額以下であれば、相続税はかかりません。
              </p>

              <div className="bg-primary-50 p-8 rounded-lg border border-primary-200 text-center mb-8">
                <h3 className="text-2xl font-bold text-primary-800 mb-4">基礎控除額の計算式</h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  3,000万円 + 600万円 × 法定相続人の数
                </div>
                <p className="text-sm text-neutral-600">※平成27年1月1日以降の相続</p>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-neutral-800">具体例</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-700 mb-2">配偶者と子2人の場合（法定相続人3人）</h4>
                  <p className="text-lg">3,000万円 + 600万円 × 3人 = <strong className="text-blue-800">4,800万円</strong></p>
                  <p className="text-sm text-neutral-600 mt-2">相続財産が4,800万円以下なら相続税はかかりません</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-2">配偶者のみの場合（法定相続人1人）</h4>
                  <p className="text-lg">3,000万円 + 600万円 × 1人 = <strong className="text-green-800">3,600万円</strong></p>
                  <p className="text-sm text-neutral-600 mt-2">相続財産が3,600万円以下なら相続税はかかりません</p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-700 mb-2">配偶者と父母の場合（法定相続人3人）</h4>
                  <p className="text-lg">3,000万円 + 600万円 × 3人 = <strong className="text-orange-800">4,800万円</strong></p>
                  <p className="text-sm text-neutral-600 mt-2">配偶者、父、母の3人が法定相続人となります</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mt-8">
                <h3 className="text-xl font-semibold mb-4 text-yellow-800 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  注意点
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>相続放棄をした人も法定相続人の数に含めます</li>
                  <li>養子は実子がいる場合は1人まで、いない場合は2人まで法定相続人の数に含めます</li>
                  <li>特例の適用により基礎控除額以下になる場合でも、申告が必要な場合があります</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 4. 相続税の計算方法 */}
        <section id="tax-calculation" className="mb-16">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Calculator className="h-6 w-6 mr-3 text-primary-500" />
                4. 相続税の計算方法
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                相続税の計算は複数のステップに分かれており、法定相続分に応じて計算した後、
                実際の取得割合で按分する仕組みになっています。
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">1</span>
                    課税遺産総額の計算
                  </h3>
                  <div className="space-y-2">
                    <p>① 相続財産の価額 + みなし相続財産 + 生前贈与財産</p>
                    <p>② ①から非課税財産、債務・葬式費用を差し引く</p>
                    <p>③ ②から基礎控除額を差し引く = <strong>課税遺産総額</strong></p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">2</span>
                    相続税の総額の計算
                  </h3>
                  <div className="space-y-2">
                    <p>① 課税遺産総額を法定相続分で分割</p>
                    <p>② 各人の取得金額に税率を適用</p>
                    <p>③ 各人の税額を合計 = <strong>相続税の総額</strong></p>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="text-xl font-semibold mb-4 text-orange-800 flex items-center">
                    <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">3</span>
                    各人の納付税額の計算
                  </h3>
                  <div className="space-y-2">
                    <p>① 相続税の総額を実際の取得割合で按分</p>
                    <p>② 各種税額控除を適用</p>
                    <p>③ 2割加算の適用（該当者のみ）</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 mt-8 text-neutral-800">相続税の税率表</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-3 text-left">法定相続分に応ずる取得金額</th>
                      <th className="border border-neutral-300 p-3 text-left">税率</th>
                      <th className="border border-neutral-300 p-3 text-left">控除額</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-3">1,000万円以下</td>
                      <td className="border border-neutral-300 p-3">10%</td>
                      <td className="border border-neutral-300 p-3">-</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-3">3,000万円以下</td>
                      <td className="border border-neutral-300 p-3">15%</td>
                      <td className="border border-neutral-300 p-3">50万円</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-3">5,000万円以下</td>
                      <td className="border border-neutral-300 p-3">20%</td>
                      <td className="border border-neutral-300 p-3">200万円</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-3">1億円以下</td>
                      <td className="border border-neutral-300 p-3">30%</td>
                      <td className="border border-neutral-300 p-3">700万円</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-3">2億円以下</td>
                      <td className="border border-neutral-300 p-3">40%</td>
                      <td className="border border-neutral-300 p-3">1,700万円</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-3">3億円以下</td>
                      <td className="border border-neutral-300 p-3">45%</td>
                      <td className="border border-neutral-300 p-3">2,700万円</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-3">6億円以下</td>
                      <td className="border border-neutral-300 p-3">50%</td>
                      <td className="border border-neutral-300 p-3">4,200万円</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-3">6億円超</td>
                      <td className="border border-neutral-300 p-3">55%</td>
                      <td className="border border-neutral-300 p-3">7,200万円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 5. 主な特例 */}
        <section id="special-provisions" className="mb-16">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 text-primary-500" />
                5. 主な特例
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                相続税には、納税者の負担を軽減するための様々な特例が設けられています。
                これらの特例を適切に活用することで、相続税を大幅に軽減できる場合があります。
              </p>

              <div className="space-y-6">
                <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                  <h3 className="text-xl font-semibold mb-4 text-pink-800">配偶者の税額軽減</h3>
                  <p className="mb-4">配偶者が相続した財産のうち、以下のいずれか多い金額までは相続税がかかりません。</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>1億6,000万円</strong></li>
                    <li><strong>配偶者の法定相続分相当額</strong></li>
                  </ul>
                  <div className="bg-white p-4 rounded border border-pink-300 mt-4">
                    <p className="text-sm"><strong>注意：</strong>適用には遺産分割協議の成立と相続税の申告が必要です。</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">小規模宅地等の特例</h3>
                  <p className="mb-4">被相続人等が居住用や事業用として使用していた宅地について、一定の要件を満たせば評価額を減額できます。</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">特定居住用宅地等</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>減額割合：80%</li>
                        <li>限度面積：330㎡</li>
                        <li>配偶者や同居親族が取得</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">特定事業用宅地等</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>減額割合：80%</li>
                        <li>限度面積：400㎡</li>
                        <li>事業を継続する親族が取得</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">生命保険金・死亡退職金の非課税枠</h3>
                  <p className="mb-4">相続人が受け取る生命保険金と死亡退職金には、それぞれ非課税枠があります。</p>
                  <div className="bg-white p-4 rounded border border-green-300">
                    <p className="text-lg font-semibold text-center">非課税限度額 = 500万円 × 法定相続人の数</p>
                  </div>
                  <p className="text-sm text-neutral-600 mt-2">例：法定相続人が3人の場合、1,500万円まで非課税</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-semibold mb-4 text-purple-800">未成年者控除・障害者控除</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-purple-700">未成年者控除</h4>
                      <p className="text-sm">相続人が未成年者の場合：<strong>10万円 × (18歳 - 相続開始時の年齢)</strong></p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-700">障害者控除</h4>
                      <p className="text-sm">一般障害者：<strong>10万円 × (85歳 - 相続開始時の年齢)</strong></p>
                      <p className="text-sm">特別障害者：<strong>20万円 × (85歳 - 相続開始時の年齢)</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mt-8">
                <h3 className="text-xl font-semibold mb-4 text-yellow-800 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  特例適用の注意点
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>多くの特例は相続税の申告書の提出が適用要件となっています</li>
                  <li>特例により税額が0円になる場合でも申告が必要です</li>
                  <li>適用要件を満たさない場合、後から特例の適用を受けることはできません</li>
                  <li>複数の特例を併用する場合は、適用順序や限度額に注意が必要です</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 6. 申告と納付 */}
        <section id="filing-payment" className="mb-16">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <FileText className="h-6 w-6 mr-3 text-primary-500" />
                6. 申告と納付
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                相続税の申告と納付には厳格な期限が定められています。
                期限を過ぎると加算税や延滞税が課される可能性があります。
              </p>

              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    申告・納付期限
                  </h3>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-600 mb-2">相続開始を知った日の翌日から10ヶ月以内</p>
                    <p className="text-sm text-neutral-600">例：1月15日に死亡した場合、11月15日が期限</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">申告が必要なケース</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>相続財産の課税価格が基礎控除額を超える場合</li>
                    <li>特例の適用により税額が0円になる場合</li>
                    <li>相続時精算課税の適用を受けた贈与財産がある場合</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">申告書の提出先</h3>
                  <p className="mb-4">被相続人の死亡時の住所地を管轄する税務署に提出します。</p>
                  <div className="bg-white p-4 rounded border border-green-300">
                    <p className="text-sm"><strong>注意：</strong>相続人の住所地ではなく、被相続人の住所地の税務署です。</p>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="text-xl font-semibold mb-4 text-orange-800">納付方法</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-orange-700 mb-2">現金納付</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>金融機関での納付</li>
                        <li>税務署での納付</li>
                        <li>コンビニでの納付（30万円以下）</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-700 mb-2">その他の納付方法</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>延納（分割払い）</li>
                        <li>物納（現物での納付）</li>
                        <li>クレジットカード納付</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-semibold mb-4 text-purple-800">延納・物納</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-purple-700">延納</h4>
                      <p className="text-sm">現金での一括納付が困難な場合、最長20年間の分割払いが可能です。ただし、利子税がかかります。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-700">物納</h4>
                      <p className="text-sm">現金での納付が困難で、延納によっても困難な場合、相続財産そのもので納付できます。</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mt-8">
                <h3 className="text-xl font-semibold mb-4 text-yellow-800">期限後申告のペナルティ</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>無申告加算税</strong>：原則として納付すべき税額の15%（50万円超の部分は20%）</li>
                  <li><strong>延滞税</strong>：期限の翌日から納付日まで年率約3%～9%</li>
                  <li><strong>重加算税</strong>：仮装・隠蔽があった場合は35%～40%</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* まとめ */}
        <section className="mb-16">
          <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle className="text-2xl text-primary-700">まとめ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed mb-6">
                相続税は複雑な計算が必要で、様々な特例があります。
                適切な申告と納税のためには、早めの準備と専門家への相談が重要です。
              </p>
              
              <div className="bg-white p-6 rounded-lg border border-primary-200">
                <h4 className="font-semibold text-primary-700 mb-3">相続税対策のポイント</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>生前からの計画的な対策が重要</li>
                  <li>特例の適用要件を正確に把握する</li>
                  <li>申告期限を厳守する</li>
                  <li>複雑な場合は税理士等の専門家に相談する</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 関連リンク */}
        <section>
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-xl">関連情報</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="justify-start h-auto p-4"
                  onClick={() => navigate('/souzoku-basics')}
                >
                  <BookOpen className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">相続の基礎知識</div>
                    <div className="text-sm text-neutral-600">相続の基本的な仕組み</div>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="justify-start h-auto p-4"
                  onClick={() => navigate('/will-testament')}
                >
                  <FileText className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">遺言書について</div>
                    <div className="text-sm text-neutral-600">遺言書の種類と作成方法</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

export default SouzokuTax;

