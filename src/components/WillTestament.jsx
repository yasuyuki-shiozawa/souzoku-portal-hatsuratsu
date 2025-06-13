import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { 
  ArrowLeft, 
  FileText, 
  PenTool, 
  Shield,
  AlertTriangle,
  CheckCircle,
  BookOpen,
  Scale
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function WillTestament() {
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
              <FileText className="h-6 w-6 text-primary-400 mr-2" />
              <span className="text-xl font-bold text-neutral-800">遺言書の種類と効力</span>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* イントロダクション */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-neutral-800 mb-6">遺言書の種類と効力</h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            遺言書は、被相続人の最後の意思を実現するための重要な法的文書です。<br />
            適切な方式で作成することで、確実に意思を伝えることができます。
          </p>
        </div>

        {/* 目次 */}
        <Card className="mb-12 border-primary-200 bg-primary-50">
          <CardHeader>
            <CardTitle className="text-2xl text-primary-700">目次</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="#will-overview" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                <FileText className="h-4 w-4 mr-2" />
                1. 遺言書とは
              </a>
              <a href="#will-types" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                <PenTool className="h-4 w-4 mr-2" />
                2. 遺言書の種類
              </a>
              <a href="#legal-effect" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                <Scale className="h-4 w-4 mr-2" />
                3. 遺言書の法的効力
              </a>
              <a href="#creation-points" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                <CheckCircle className="h-4 w-4 mr-2" />
                4. 作成時の注意点
              </a>
              <a href="#execution" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                <Shield className="h-4 w-4 mr-2" />
                5. 遺言の執行
              </a>
              <a href="#revocation" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                <AlertTriangle className="h-4 w-4 mr-2" />
                6. 遺言の撤回・変更
              </a>
            </div>
          </CardContent>
        </Card>

        {/* 1. 遺言書とは */}
        <section id="will-overview" className="mb-16">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <FileText className="h-6 w-6 mr-3 text-primary-500" />
                1. 遺言書とは
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                遺言書とは、遺言者が自分の死後の財産の処分や身分に関する事項について、
                自らの最終的な意思を表示した法的文書です。民法で定められた方式に従って作成することで、
                法的効力を持ちます。
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">遺言書の意義</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>意思の実現</strong>：被相続人の最後の意思を確実に実現できます</li>
                  <li><strong>紛争の防止</strong>：相続人間の争いを未然に防ぐことができます</li>
                  <li><strong>手続きの簡素化</strong>：遺産分割協議が不要になります</li>
                  <li><strong>第三者への遺贈</strong>：相続人以外への財産の譲渡が可能です</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-green-800">遺言書で定められること</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">財産に関する事項</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>相続分の指定</li>
                      <li>遺産分割方法の指定</li>
                      <li>遺贈（相続人以外への贈与）</li>
                      <li>寄付行為</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">身分に関する事項</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>認知</li>
                      <li>後見人の指定</li>
                      <li>相続人の廃除・取消</li>
                      <li>遺言執行者の指定</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold mb-4 text-yellow-800 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  遺言書作成の要件
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>満15歳以上</strong>：遺言能力があることが必要です</li>
                  <li><strong>意思能力</strong>：遺言の内容を理解し判断できることが必要です</li>
                  <li><strong>方式の遵守</strong>：民法で定められた方式に従う必要があります</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 2. 遺言書の種類 */}
        <section id="will-types" className="mb-16">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <PenTool className="h-6 w-6 mr-3 text-primary-500" />
                2. 遺言書の種類
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                民法では、普通方式の遺言として3つの種類が定められています。
                それぞれに特徴があり、状況に応じて適切な方式を選択することが重要です。
              </p>

              <div className="space-y-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
                    <PenTool className="h-5 w-5 mr-2" />
                    自筆証書遺言
                  </h3>
                  <p className="mb-4">遺言者が自分で書く遺言書です。最も簡単で費用もかからない方式です。</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">メリット</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>費用がかからない</li>
                        <li>いつでも作成できる</li>
                        <li>秘密が保たれる</li>
                        <li>証人が不要</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">デメリット</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>紛失・偽造のリスク</li>
                        <li>方式不備で無効になる可能性</li>
                        <li>家庭裁判所での検認が必要</li>
                        <li>内容の不明確さ</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-blue-300">
                    <h4 className="font-semibold text-blue-700 mb-2">作成要件</h4>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>遺言者が全文を自書する（財産目録はパソコン等でも可）</li>
                      <li>日付を自書する</li>
                      <li>氏名を自書する</li>
                      <li>押印する（実印でなくても可）</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded border border-green-200 mt-4">
                    <h4 className="font-semibold text-green-700 mb-2">法務局での保管制度</h4>
                    <p className="text-sm">令和2年7月から、自筆証書遺言を法務局で保管できる制度が始まりました。保管された遺言書は検認が不要になります。</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    公正証書遺言
                  </h3>
                  <p className="mb-4">公証人が作成する遺言書です。最も確実で安全な方式とされています。</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">メリット</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>無効になるリスクが低い</li>
                        <li>公証役場で保管される</li>
                        <li>検認手続きが不要</li>
                        <li>紛失・偽造の心配がない</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">デメリット</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>費用がかかる</li>
                        <li>証人2人が必要</li>
                        <li>手続きに時間がかかる</li>
                        <li>内容が証人に知られる</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-green-300">
                    <h4 className="font-semibold text-green-700 mb-2">作成手続き</h4>
                    <ol className="list-decimal pl-4 text-sm space-y-1">
                      <li>遺言者が公証人に遺言の趣旨を口授する</li>
                      <li>公証人が遺言者の口述を筆記し、遺言者と証人に読み聞かせる</li>
                      <li>遺言者と証人が筆記の正確なことを承認し、署名・押印する</li>
                      <li>公証人が法定の方式に従って作成したことを付記し、署名・押印する</li>
                    </ol>
                  </div>

                  <div className="bg-blue-50 p-4 rounded border border-blue-200 mt-4">
                    <h4 className="font-semibold text-blue-700 mb-2">費用の目安</h4>
                    <p className="text-sm">財産額に応じて公証人手数料が決まります。例：財産1,000万円の場合、約17,000円</p>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-semibold mb-4 text-purple-800 flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    秘密証書遺言
                  </h3>
                  <p className="mb-4">遺言の内容を秘密にしたまま、遺言書の存在のみを公証人に証明してもらう方式です。</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">メリット</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>内容を秘密にできる</li>
                        <li>パソコンでの作成も可能</li>
                        <li>遺言書の存在が証明される</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">デメリット</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>方式不備で無効になる可能性</li>
                        <li>検認手続きが必要</li>
                        <li>費用がかかる</li>
                        <li>証人2人が必要</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-purple-300">
                    <h4 className="font-semibold text-purple-700 mb-2">作成要件</h4>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>遺言者が遺言書に署名・押印する</li>
                      <li>遺言書を封じ、遺言書に用いた印章で封印する</li>
                      <li>公証人と証人2人の前に封書を提出し、自己の遺言書である旨を申述する</li>
                      <li>公証人が封紙に日付と遺言者の申述を記載し、遺言者・証人・公証人が署名・押印する</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded border border-yellow-200 mt-4">
                    <p className="text-sm"><strong>注意：</strong>実際にはあまり利用されていない方式です。内容を秘密にしたい場合は自筆証書遺言、確実性を求める場合は公正証書遺言が選ばれることが多いです。</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 3. 遺言書の法的効力 */}
        <section id="legal-effect" className="mb-16">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Scale className="h-6 w-6 mr-3 text-primary-500" />
                3. 遺言書の法的効力
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                適切に作成された遺言書は強い法的効力を持ちますが、
                一定の制約もあります。遺言書の効力について正しく理解することが重要です。
              </p>

              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">遺言書の優先性</h3>
                  <p className="mb-4">遺言書は法定相続分や遺産分割協議に優先します。</p>
                  <div className="bg-white p-4 rounded border border-green-300">
                    <h4 className="font-semibold text-green-700 mb-2">優先順位</h4>
                    <ol className="list-decimal pl-4 text-sm space-y-1">
                      <li><strong>遺言書</strong>（最優先）</li>
                      <li>遺産分割協議</li>
                      <li>法定相続分</li>
                    </ol>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-semibold mb-4 text-red-800">遺留分による制約</h3>
                  <p className="mb-4">遺言書があっても、一定の相続人には「遺留分」という最低限の相続分が保障されています。</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">遺留分権利者</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>配偶者</li>
                        <li>子（直系卑属）</li>
                        <li>父母（直系尊属）</li>
                      </ul>
                      <p className="text-xs text-neutral-600 mt-2">※兄弟姉妹には遺留分はありません</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">遺留分の割合</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>直系尊属のみ：1/3</li>
                        <li>その他の場合：1/2</li>
                      </ul>
                      <p className="text-xs text-neutral-600 mt-2">※各相続人の遺留分は、この割合に法定相続分を乗じて計算</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-red-300 mt-4">
                    <h4 className="font-semibold text-red-700 mb-2">遺留分侵害額請求</h4>
                    <p className="text-sm">遺留分を侵害された相続人は、侵害額に相当する金銭の支払いを請求できます（相続開始から1年以内）。</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">遺言書の効力発生時期</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-700">効力発生</h4>
                      <p className="text-sm">遺言書は遺言者の死亡時に効力を発生します。生前には効力はありません。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700">条件付き遺言</h4>
                      <p className="text-sm">「○○が先に死亡した場合は」などの条件を付けることも可能です。</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-semibold mb-4 text-purple-800">複数の遺言書がある場合</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-purple-700">日付の新しいものが有効</h4>
                      <p className="text-sm">複数の遺言書がある場合、日付の新しいものが優先されます。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-700">抵触する部分のみ無効</h4>
                      <p className="text-sm">内容が抵触しない部分については、古い遺言書も有効です。</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 4. 作成時の注意点 */}
        <section id="creation-points" className="mb-16">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 text-primary-500" />
                4. 作成時の注意点
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                遺言書を作成する際は、法的要件を満たすだけでなく、
                内容の明確性や実現可能性についても十分に検討する必要があります。
              </p>

              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    方式に関する注意点
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-700">自筆証書遺言の場合</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>必ず自分で書く（代筆・パソコン不可、ただし財産目録は除く）</li>
                        <li>日付は具体的に（「○年○月○日」）</li>
                        <li>訂正は法定の方式に従う</li>
                        <li>用紙・筆記具に制限はない</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700">公正証書遺言の場合</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>証人2人は利害関係者以外から選ぶ</li>
                        <li>事前に公証人と打ち合わせを行う</li>
                        <li>必要書類を準備する（戸籍謄本、印鑑証明書等）</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">内容に関する注意点</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-700">財産の特定</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>不動産は登記簿通りに記載</li>
                        <li>預貯金は金融機関名・支店名・口座番号を明記</li>
                        <li>「すべての財産を」などの包括的な記載も可能</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700">相続人・受遺者の特定</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>氏名・生年月日・続柄を明記</li>
                        <li>住所も記載することが望ましい</li>
                        <li>法人への遺贈の場合は正式名称を記載</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">実務上の注意点</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700">遺言執行者の指定</h4>
                      <p className="text-sm">遺言の内容を確実に実現するため、信頼できる人を遺言執行者に指定することをお勧めします。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700">予備的遺言</h4>
                      <p className="text-sm">「○○が先に死亡した場合は△△に相続させる」など、予備的な定めをしておくと安心です。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700">付言事項</h4>
                      <p className="text-sm">法的効力はありませんが、遺言の理由や家族への思いを記載することで、相続人の理解を得やすくなります。</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-800">よくある間違い</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">避けるべき表現</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>「○月吉日」（日付が特定できない）</li>
                        <li>「長男に家を」（財産が特定できない）</li>
                        <li>「仲良く分けて」（具体性がない）</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">推奨される表現</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>「令和○年○月○日」</li>
                        <li>「○市○町○番地の土地建物を」</li>
                        <li>「○○銀行○○支店の預金を」</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 5. 遺言の執行 */}
        <section id="execution" className="mb-16">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Shield className="h-6 w-6 mr-3 text-primary-500" />
                5. 遺言の執行
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                遺言書が発見されたら、その内容を実現するための手続きが必要です。
                遺言執行者がいる場合は、その人が中心となって手続きを進めます。
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">遺言書発見時の手続き</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-700">自筆証書遺言・秘密証書遺言の場合</h4>
                      <ol className="list-decimal pl-4 text-sm space-y-1">
                        <li>家庭裁判所に検認の申立てを行う</li>
                        <li>相続人全員に検認期日の通知</li>
                        <li>検認期日に遺言書を開封・確認</li>
                        <li>検認調書の作成</li>
                      </ol>
                      <p className="text-xs text-neutral-600 mt-2">※法務局保管の自筆証書遺言は検認不要</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700">公正証書遺言の場合</h4>
                      <p className="text-sm">検認手続きは不要です。すぐに遺言の執行に移ることができます。</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">遺言執行者の役割</h3>
                  <p className="mb-4">遺言執行者は、遺言の内容を実現するために必要な一切の行為を行う権限と義務を持ちます。</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">主な職務</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>相続財産の調査・管理</li>
                        <li>相続人・受遺者への通知</li>
                        <li>財産の引渡し</li>
                        <li>不動産の登記手続き</li>
                        <li>預貯金の解約・名義変更</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">権限</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>相続財産の管理・処分</li>
                        <li>相続人の相続財産への関与排除</li>
                        <li>第三者との法律行為</li>
                        <li>訴訟の提起・応訴</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="text-xl font-semibold mb-4 text-orange-800">遺言執行者の選任</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-orange-700">遺言による指定</h4>
                      <p className="text-sm">遺言書で遺言執行者を指定することができます。指定された人は就任を拒否することも可能です。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-700">家庭裁判所による選任</h4>
                      <p className="text-sm">遺言執行者の指定がない場合や、指定された人が就任を拒否した場合は、利害関係人の申立てにより家庭裁判所が選任します。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-700">適任者</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>相続人の一人</li>
                        <li>弁護士・司法書士等の専門家</li>
                        <li>信託銀行等の法人</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-semibold mb-4 text-purple-800">遺言執行者がいない場合</h3>
                  <p className="mb-4">遺言執行者がいない場合は、相続人が遺言の内容を実現する必要があります。</p>
                  <div className="space-y-2">
                    <p className="text-sm">• 相続人全員の協力が必要</p>
                    <p className="text-sm">• 手続きが複雑になる可能性</p>
                    <p className="text-sm">• 相続人間で意見が対立する場合は困難</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 6. 遺言の撤回・変更 */}
        <section id="revocation" className="mb-16">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-primary-500" />
                6. 遺言の撤回・変更
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                遺言者は、いつでも遺言の全部または一部を撤回・変更することができます。
                これは遺言者の重要な権利であり、この権利を放棄することはできません。
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">撤回・変更の方法</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-700">新しい遺言書による撤回</h4>
                      <p className="text-sm">新しい遺言書で「前の遺言を撤回する」旨を明記するか、前の遺言と抵触する内容の遺言をすることで撤回できます。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700">遺言書の破棄</h4>
                      <p className="text-sm">遺言者が故意に遺言書を破棄した場合、その部分について遺言を撤回したものとみなされます。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700">遺言の目的物の破棄</h4>
                      <p className="text-sm">遺言者が故意に遺言の目的である財産を破棄した場合、その部分について遺言を撤回したものとみなされます。</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">部分的な変更</h3>
                  <p className="mb-4">遺言の一部のみを変更したい場合は、以下の方法があります。</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700">追加の遺言書作成</h4>
                      <p className="text-sm">変更したい部分についてのみ新しい遺言書を作成します。日付の新しいものが優先されます。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700">遺言書の訂正</h4>
                      <p className="text-sm">自筆証書遺言の場合、法定の方式に従って訂正することができます。ただし、複雑な訂正は避け、新しい遺言書を作成することをお勧めします。</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-800">注意すべき点</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-yellow-700">公正証書遺言の撤回</h4>
                      <p className="text-sm">公正証書遺言も自筆証書遺言で撤回できます。ただし、確実性を考えると新しい公正証書遺言で撤回することをお勧めします。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-700">法務局保管の遺言書</h4>
                      <p className="text-sm">法務局に保管されている自筆証書遺言を撤回する場合は、保管の撤回手続きを行うとともに、新しい遺言書を作成します。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-700">撤回の撤回</h4>
                      <p className="text-sm">一度撤回した遺言は、撤回を撤回しても復活しません。改めて遺言書を作成する必要があります。</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    撤回権の放棄は無効
                  </h3>
                  <p className="text-sm">遺言者が「この遺言は撤回しない」などと記載しても、そのような撤回権の放棄は無効です。遺言者はいつでも遺言を撤回・変更することができます。</p>
                </div>
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
                遺言書は、自分の最後の意思を確実に実現するための重要な手段です。
                適切な方式で作成し、定期的に見直すことで、円滑な相続を実現できます。
              </p>
              
              <div className="bg-white p-6 rounded-lg border border-primary-200">
                <h4 className="font-semibold text-primary-700 mb-3">遺言書作成のポイント</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>法定の方式を正確に守る</li>
                  <li>内容を明確かつ具体的に記載する</li>
                  <li>遺言執行者を指定する</li>
                  <li>定期的に見直し、必要に応じて更新する</li>
                  <li>複雑な場合は専門家に相談する</li>
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
                  onClick={() => navigate('/souzoku-tax')}
                >
                  <FileText className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">相続税について</div>
                    <div className="text-sm text-neutral-600">相続税の計算方法と特例</div>
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

export default WillTestament;

