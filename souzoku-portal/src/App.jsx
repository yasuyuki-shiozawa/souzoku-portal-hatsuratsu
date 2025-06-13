import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { 
  Home, 
  Users, 
  FileText, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Shield,
  Award,
  Building,
  Car
} from 'lucide-react';
import heroImage from './assets/hero-image.jpg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Home className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">相続ナビ</span>
              <span className="text-sm text-gray-500 ml-2">株式会社はつらつ</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">サービス</a>
              <a href="#seminars" className="text-gray-700 hover:text-blue-600 transition-colors">セミナー</a>
              <a href="#experts" className="text-gray-700 hover:text-blue-600 transition-colors">専門家紹介</a>
              <a href="#company" className="text-gray-700 hover:text-blue-600 transition-colors">会社概要</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">お問い合わせ</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Phone className="h-4 w-4 mr-2" />
              無料相談
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                相続のお悩み、<br />
                <span className="text-blue-200">まるごと解決</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                不動産相続から手続きまで、専門家チームが<br />
                あなたの大切な資産を守ります
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <FileText className="h-5 w-5 mr-2" />
                  無料査定依頼
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  セミナー予約
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="相続相談の様子" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">私たちのサービス</h2>
            <p className="text-lg text-gray-600">相続に関するあらゆるお悩みをワンストップで解決</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>不動産売却仲介</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">相続不動産の適正価格での売却をサポート</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>専門家連携</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">行政書士・弁護士・税理士との連携サポート</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>相続セミナー</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">定期開催の相続知識向上セミナー</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>手続きサポート</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">複雑な相続手続きを専門家がサポート</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section id="company" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">会社概要</h2>
            <p className="text-lg text-gray-600">株式会社はつらつについて</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="h-5 w-5 mr-2 text-blue-600" />
                  基本情報
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">所在地</p>
                    <p className="text-gray-600">〒242-0006<br />神奈川県大和市南林間７丁目１－１７条マート１階</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">電話・FAX</p>
                    <p className="text-gray-600">046-240-6304</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">営業時間</p>
                    <p className="text-gray-600">9:00～18:00</p>
                    <p className="text-sm text-gray-500">定休日：土曜日・日曜日・祝日</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Car className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">アクセス</p>
                    <p className="text-gray-600">小田急江ノ島線/南林間駅 徒歩8分</p>
                    <p className="text-sm text-gray-500">駐車場あり</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-blue-600" />
                  免許・所属団体
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium mb-2">代表者</p>
                  <p className="text-gray-600">伊藤 顕</p>
                </div>

                <div>
                  <p className="font-medium mb-2">免許番号</p>
                  <p className="text-gray-600">神奈川県知事免許（１）第３２３５８号</p>
                </div>

                <div>
                  <p className="font-medium mb-2">所属団体</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• (公社)全日本不動産協会会員</li>
                    <li>• (公社)首都圏不動産公正取引協議会加盟</li>
                    <li>• (公社)不動産保証協会</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">当社の特徴</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                'オンライン相談可', '駐車場あり', 'メール対応可', '店内バリアフリー',
                '女性スタッフ対応可', '保証人不要の相談可', '法人の契約取扱い可',
                '住み替え相談', '税金・法律に詳しい', '不動産相続の相談可',
                '高齢者歓迎', 'ひとり親応援'
              ].map((feature, index) => (
                <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">相続のお悩み、お気軽にご相談ください</h2>
          <p className="text-xl mb-8 text-blue-100">
            専門家チームがあなたの状況に合わせた最適な解決策をご提案します
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Phone className="h-5 w-5 mr-2" />
              046-240-6304
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="h-5 w-5 mr-2" />
              メールで相談
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Home className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-lg font-bold">相続ナビ</span>
              </div>
              <p className="text-gray-400">
                株式会社はつらつが運営する<br />
                相続専門ポータルサイト
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">サービス</h3>
              <ul className="space-y-2 text-gray-400">
                <li>不動産売却仲介</li>
                <li>専門家紹介</li>
                <li>相続セミナー</li>
                <li>手続きサポート</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">お問い合わせ</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 046-240-6304</p>
                <p>🕒 9:00～18:00</p>
                <p>📍 神奈川県大和市南林間</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 株式会社はつらつ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

