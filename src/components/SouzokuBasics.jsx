import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { 
  ArrowLeft, 
  Users, 
  Calculator, 
  FileText, 
  Scale,
  Clock,
  BookOpen
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function SouzokuBasics() {
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
              <BookOpen className="h-6 w-6 text-primary-400 mr-2" />
              <span className="text-xl font-bold text-neutral-800">相続の基礎知識</span>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* イントロダクション */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-neutral-800 mb-6">相続の基礎知識</h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            相続は人生において重要な出来事の一つです。法令に基づいた正確な知識を身につけ、<br />
            適切な準備と手続きを行うことで、円滑な相続を実現しましょう。
          </p>
        </div>

        {/* 目次 */}
        <Card className="mb-12 border-primary-200 bg-primary-50">
          <CardHeader>
            <CardTitle className="text-2xl text-primary-700">目次</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="#what-is-souzoku" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                <Users className="h-4 w-4 mr-2" />
                1. 相続とは？
              </a>
              <a href="#legal-heirs" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                <Users className="h-4 w-4 mr-2" />
                2. 法定相続人と相続順位
              </a>
              <a href="#inheritance-share" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                <Calculator className="h-4 w-4 mr-2" />
                3. 法定相続分
              </a>
              <a href="#inheritance-acceptance" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                <Scale className="h-4 w-4 mr-2" />
                4. 相続の承認と放棄
              </a>
              <a href="#inheritance-division" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                <FileText className="h-4 w-4 mr-2" />
                5. 遺産分割協議
              </a>
              <a href="#inheritance-procedures" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                <Clock className="h-4 w-4 mr-2" />
                6. 相続手続きの流れ
              </a>
            </div>
          </CardContent>
        </Card>

        {/* 1. 相続とは？ */}
        <section id="what-is-souzoku" className="mb-16">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Users className="h-6 w-6 mr-3 text-primary-500" />
                1. 相続とは？
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                相続とは、亡くなった人（被相続人）の財産上の地位を、その配偶者や子などの相続人が引き継ぐことをいいます。
                相続は被相続人の死亡によって開始され、相続人は被相続人の財産に属した一切の権利義務を承継します。
                ただし、被相続人の一身に専属したもの（例：扶養義務、身元保証債務など）は相続の対象外となります。
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-neutral-800">相続の基本原則</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li><strong>当然承継</strong>：相続は被相続人の死亡と同時に自動的に開始されます</li>
                <li><strong>包括承継</strong>：プラスの財産だけでなく、借金などのマイナスの財産も含めて承継します</li>
                <li><strong>共同相続</strong>：相続人が複数いる場合は、遺産は相続人全員の共有となります</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-8 text-neutral-800">相続財産に含まれるもの</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary-600 mb-2">プラスの財産</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>現金・預貯金</li>
                    <li>不動産（土地・建物）</li>
                    <li>株式・債券</li>
                    <li>自動車・貴金属</li>
                    <li>知的財産権</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-600 mb-2">マイナスの財産</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>借金・ローン</li>
                    <li>未払金・未払税金</li>
                    <li>保証債務</li>
                    <li>損害賠償債務</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 2. 法定相続人と相続順位 */}
        <section id="legal-heirs" className="mb-16">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Users className="h-6 w-6 mr-3 text-primary-500" />
                2. 法定相続人と相続順位
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                法定相続人とは、民法で定められた相続人のことです。配偶者は常に相続人となり、
                その他の親族には相続順位が定められています。
              </p>

              <h3 className="text-xl font-semibold mb-4 text-neutral-800">相続順位</h3>
              
              <div className="space-y-6">
                <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
                  <h4 className="font-semibold text-primary-700 mb-3">配偶者</h4>
                  <p>常に相続人となります（順位なし）。ただし、法律上の婚姻関係にある配偶者に限られ、内縁関係の場合は相続人になりません。</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-700 mb-3">第1順位：子（直系卑属）</h4>
                  <p>被相続人の子が相続人となります。子が既に死亡している場合は、その子（被相続人の孫）が代襲相続します。養子も実子と同様に相続人となります。</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-3">第2順位：父母（直系尊属）</h4>
                  <p>第1順位の相続人がいない場合、被相続人の父母が相続人となります。父母が既に死亡している場合は、祖父母が相続人となります。</p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-700 mb-3">第3順位：兄弟姉妹</h4>
                  <p>第1順位・第2順位の相続人がいない場合、被相続人の兄弟姉妹が相続人となります。兄弟姉妹が既に死亡している場合は、その子（甥・姪）が代襲相続します。</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 mt-8 text-neutral-800">代襲相続</h3>
              <p className="text-lg leading-relaxed">
                代襲相続とは、本来相続人となるべき人が被相続人より先に死亡している場合などに、
                その人の子が代わって相続することです。子の代襲相続は無制限に続きますが、
                兄弟姉妹の代襲相続は一代限り（甥・姪まで）となります。
              </p>
            </CardContent>
          </Card>
        </section>

        {/* 3. 法定相続分 */}
        <section id="inheritance-share" className="mb-16">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Calculator className="h-6 w-6 mr-3 text-primary-500" />
                3. 法定相続分
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                法定相続分とは、民法で定められた各相続人の相続割合です。
                遺言書がない場合や、遺産分割協議で合意に至らない場合の基準となります。
              </p>

              <h3 className="text-xl font-semibold mb-4 text-neutral-800">相続人の組み合わせ別相続分</h3>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-lg border">
                  <h4 className="font-semibold text-primary-700 mb-3">配偶者と子がいる場合</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">配偶者：1/2</p>
                      <p className="font-medium">子：1/2（子が複数の場合は等分）</p>
                    </div>
                    <div className="text-sm text-neutral-600">
                      <p>例：配偶者と子2人の場合</p>
                      <p>配偶者：1/2、子A：1/4、子B：1/4</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border">
                  <h4 className="font-semibold text-green-700 mb-3">配偶者と父母がいる場合</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">配偶者：2/3</p>
                      <p className="font-medium">父母：1/3（父母で等分）</p>
                    </div>
                    <div className="text-sm text-neutral-600">
                      <p>例：配偶者と父母の場合</p>
                      <p>配偶者：2/3、父：1/6、母：1/6</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-6 rounded-lg border">
                  <h4 className="font-semibold text-orange-700 mb-3">配偶者と兄弟姉妹がいる場合</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">配偶者：3/4</p>
                      <p className="font-medium">兄弟姉妹：1/4（兄弟姉妹で等分）</p>
                    </div>
                    <div className="text-sm text-neutral-600">
                      <p>例：配偶者と兄弟2人の場合</p>
                      <p>配偶者：3/4、兄：1/8、弟：1/8</p>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg border">
                  <h4 className="font-semibold text-neutral-700 mb-3">配偶者のみの場合</h4>
                  <p className="font-medium">配偶者：全部（1/1）</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mt-8">
                <h4 className="font-semibold text-yellow-800 mb-3">重要なポイント</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>法定相続分は強制的なものではなく、相続人全員の合意があれば異なる分割も可能です</li>
                  <li>遺言書がある場合は、原則として遺言書の内容が優先されます</li>
                  <li>ただし、遺留分（法定相続人に保障された最低限の相続分）の制約があります</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 4. 相続の承認と放棄 */}
        <section id="inheritance-acceptance" className="mb-16">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Scale className="h-6 w-6 mr-3 text-primary-500" />
                4. 相続の承認と放棄
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                相続人は、相続開始を知った時から3ヶ月以内に、相続について以下の3つの選択肢から選ぶことができます。
              </p>

              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">1</span>
                    単純承認
                  </h4>
                  <p className="mb-3">被相続人の財産と債務をすべて無限に承継する方法です。</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-green-600 mb-2">メリット</h5>
                      <ul className="list-disc pl-4 text-sm">
                        <li>手続きが簡単</li>
                        <li>プラス財産をすべて取得できる</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-red-600 mb-2">デメリット</h5>
                      <ul className="list-disc pl-4 text-sm">
                        <li>債務も無限に承継する</li>
                        <li>債務が財産を上回る場合もある</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-700 mb-3 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">2</span>
                    限定承認
                  </h4>
                  <p className="mb-3">相続財産の範囲内でのみ債務を承継する方法です。</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-blue-600 mb-2">メリット</h5>
                      <ul className="list-disc pl-4 text-sm">
                        <li>債務が財産を上回っても自己負担なし</li>
                        <li>プラス財産が残れば取得できる</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-red-600 mb-2">注意点</h5>
                      <ul className="list-disc pl-4 text-sm">
                        <li>相続人全員で行う必要がある</li>
                        <li>家庭裁判所への申述が必要</li>
                        <li>手続きが複雑</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                    <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">3</span>
                    相続放棄
                  </h4>
                  <p className="mb-3">相続権を放棄し、財産も債務も一切承継しない方法です。</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-green-600 mb-2">メリット</h5>
                      <ul className="list-disc pl-4 text-sm">
                        <li>債務を一切承継しない</li>
                        <li>個人で手続き可能</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-red-600 mb-2">デメリット</h5>
                      <ul className="list-disc pl-4 text-sm">
                        <li>プラス財産も取得できない</li>
                        <li>撤回できない</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mt-8">
                <h4 className="font-semibold text-yellow-800 mb-3">重要な期限</h4>
                <p className="text-lg font-medium text-red-600 mb-2">相続開始を知った時から3ヶ月以内</p>
                <p>この期間を「熟慮期間」といい、この期間内に選択しなかった場合は自動的に単純承認したものとみなされます。期間の延長を家庭裁判所に申し立てることも可能です。</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 5. 遺産分割協議 */}
        <section id="inheritance-division" className="mb-16">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <FileText className="h-6 w-6 mr-3 text-primary-500" />
                5. 遺産分割協議
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                遺産分割協議とは、相続人全員で遺産の分け方を話し合うことです。
                遺言書がない場合や、遺言書があっても分割方法が具体的に定められていない場合に行います。
              </p>

              <h3 className="text-xl font-semibold mb-4 text-neutral-800">遺産分割の方法</h3>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-700 mb-3">現物分割</h4>
                  <p>財産をそのままの形で各相続人に分ける方法です。</p>
                  <p className="text-sm text-neutral-600 mt-2">例：長男が自宅、次男が預貯金、長女が株式を取得</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-3">代償分割</h4>
                  <p>一部の相続人が財産を多く取得し、他の相続人に金銭等で代償する方法です。</p>
                  <p className="text-sm text-neutral-600 mt-2">例：長男が自宅を取得し、次男に現金で代償金を支払う</p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-700 mb-3">換価分割</h4>
                  <p>財産を売却して現金化し、その代金を分ける方法です。</p>
                  <p className="text-sm text-neutral-600 mt-2">例：不動産を売却し、売却代金を相続人で分ける</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-700 mb-3">共有分割</h4>
                  <p>財産を相続人の共有とする方法です。</p>
                  <p className="text-sm text-neutral-600 mt-2">例：不動産を相続人全員の共有名義とする</p>
                  <p className="text-sm text-red-600 mt-1">※将来のトラブルの原因となりやすいため、一般的には推奨されません</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 mt-8 text-neutral-800">遺産分割協議書の作成</h3>
              <p className="text-lg leading-relaxed mb-4">
                協議がまとまったら、遺産分割協議書を作成します。この書面は不動産の名義変更や
                預貯金の解約などの手続きに必要となります。
              </p>

              <div className="bg-neutral-50 p-6 rounded-lg border">
                <h4 className="font-semibold text-neutral-700 mb-3">協議書に記載すべき事項</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>被相続人の氏名・死亡年月日・本籍・最後の住所</li>
                  <li>相続人全員の氏名・住所・続柄</li>
                  <li>各財産の具体的な分割内容</li>
                  <li>作成年月日</li>
                  <li>相続人全員の署名・実印による押印</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-4 mt-8 text-neutral-800">協議がまとまらない場合</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">家庭裁判所での調停</h4>
                  <p>調停委員が間に入って話し合いを進めます。</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">家庭裁判所での審判</h4>
                  <p>調停でも合意に至らない場合、裁判官が分割方法を決定します。</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 6. 相続手続きの流れ */}
        <section id="inheritance-procedures" className="mb-16">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Clock className="h-6 w-6 mr-3 text-primary-500" />
                6. 相続手続きの流れ
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                相続手続きは複数の段階に分かれており、それぞれに期限があります。
                適切なスケジュールで進めることが重要です。
              </p>

              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <div className="flex items-center mb-3">
                    <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                    <h4 className="font-semibold text-red-700">死亡届の提出（7日以内）</h4>
                  </div>
                  <p>市区町村役場に死亡届を提出し、火葬許可証を取得します。</p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <div className="flex items-center mb-3">
                    <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                    <h4 className="font-semibold text-orange-700">遺言書の確認（速やかに）</h4>
                  </div>
                  <p>遺言書の有無を確認し、自筆証書遺言の場合は家庭裁判所で検認手続きを行います。</p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <div className="flex items-center mb-3">
                    <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                    <h4 className="font-semibold text-yellow-700">相続人・相続財産の調査（3ヶ月以内）</h4>
                  </div>
                  <p>戸籍謄本等で相続人を確定し、財産・債務の調査を行います。</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                    <h4 className="font-semibold text-blue-700">相続の承認・放棄の選択（3ヶ月以内）</h4>
                  </div>
                  <p>単純承認、限定承認、相続放棄のいずれかを選択します。</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <div className="flex items-center mb-3">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
                    <h4 className="font-semibold text-green-700">準確定申告（4ヶ月以内）</h4>
                  </div>
                  <p>被相続人の所得税の確定申告を行います。</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <div className="flex items-center mb-3">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">6</span>
                    <h4 className="font-semibold text-purple-700">遺産分割協議（10ヶ月以内推奨）</h4>
                  </div>
                  <p>相続人全員で遺産の分け方を決定し、遺産分割協議書を作成します。</p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                  <div className="flex items-center mb-3">
                    <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">7</span>
                    <h4 className="font-semibold text-indigo-700">相続税の申告・納付（10ヶ月以内）</h4>
                  </div>
                  <p>相続税の申告が必要な場合は、税務署に申告書を提出し、納税します。</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <span className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">8</span>
                    <h4 className="font-semibold text-gray-700">各種名義変更手続き</h4>
                  </div>
                  <p>不動産の登記、預貯金の解約・名義変更、株式の名義変更などを行います。</p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border border-red-200 mt-8">
                <h4 className="font-semibold text-red-800 mb-3">重要な期限のまとめ</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>7日以内</strong>：死亡届の提出</li>
                  <li><strong>3ヶ月以内</strong>：相続の承認・放棄の選択</li>
                  <li><strong>4ヶ月以内</strong>：準確定申告</li>
                  <li><strong>10ヶ月以内</strong>：相続税の申告・納付</li>
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
                相続は複雑な手続きが多く、期限も厳格に定められています。
                適切な知識を身につけ、必要に応じて専門家に相談することで、
                円滑な相続を実現することができます。
              </p>
              
              <div className="bg-white p-6 rounded-lg border border-primary-200">
                <h4 className="font-semibold text-primary-700 mb-3">専門家への相談をお勧めするケース</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>相続財産が複雑で評価が困難な場合</li>
                  <li>相続人間で意見が対立している場合</li>
                  <li>相続税の申告が必要な場合</li>
                  <li>事業承継が関わる場合</li>
                  <li>海外財産がある場合</li>
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
                  onClick={() => navigate('/souzoku-tax')}
                >
                  <Calculator className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">相続税について</div>
                    <div className="text-sm text-neutral-600">相続税の計算方法と特例</div>
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

export default SouzokuBasics;

