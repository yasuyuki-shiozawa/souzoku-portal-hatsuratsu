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
  Car,
  MessageCircle,
  Star,
  CheckCircle,
  TrendingUp,
  Calculator,
  HelpCircle,
  BookOpen,
  Search,
  ChevronRight
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
              <a href="#regional-info" className="text-gray-700 hover:text-blue-600 transition-colors">地域情報</a>
              <a href="#tools" className="text-gray-700 hover:text-blue-600 transition-colors">便利ツール</a>
              <a href="#experts" className="text-gray-700 hover:text-blue-600 transition-colors">専門家紹介</a>
              <a href="#knowledge" className="text-gray-700 hover:text-blue-600 transition-colors">相続知識</a>
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

      {/* Regional Info Section */}
      <section id="regional-info" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">神奈川県央地区の相続サポート</h2>
            <p className="text-lg text-gray-600">地域に密着した専門的なサービスを提供</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  対応エリア
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-blue-800">大和市</h4>
                    <p className="text-sm text-blue-600">本社所在地</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-blue-800">海老名市</h4>
                    <p className="text-sm text-blue-600">対応エリア</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-blue-800">座間市</h4>
                    <p className="text-sm text-blue-600">対応エリア</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-blue-800">綾瀬市</h4>
                    <p className="text-sm text-blue-600">対応エリア</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold mb-3">地域特化サービス</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      各市役所での手続きサポート
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      地域の不動産市場に精通
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      県央地区の専門家ネットワーク
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      地域密着型セミナー開催
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  地域の相続事情
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">県央地区の特徴</h4>
                    <p className="text-gray-600 text-sm">
                      神奈川県央地区は住宅地として人気が高く、相続不動産の需要も安定しています。
                      小田急線沿線の利便性の良さから、相続後の売却や活用の選択肢が豊富です。
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">よくある相続パターン</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 戸建て住宅の相続（築20-40年）</li>
                      <li>• マンションの相続と管理</li>
                      <li>• 小規模事業の事業承継</li>
                      <li>• 農地の相続と転用</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">地域の専門機関</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 横浜地方法務局大和出張所</li>
                      <li>• 大和税務署</li>
                      <li>• 各市役所市民課</li>
                      <li>• 神奈川県央地区の司法書士会</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section id="tools" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">便利ツール</h2>
            <p className="text-lg text-gray-600">相続に関する計算や手続きをサポートするツール</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-center">相続税簡易計算</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">相続財産の概算額から相続税を簡易計算</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  計算を開始
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-center">手続きチェックリスト</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">相続手続きの進捗を管理できるチェックリスト</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  チェックリストを見る
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-center">不動産査定依頼</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">相続不動産の無料査定をオンラインで依頼</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  査定を依頼
                </Button>
              </CardContent>
            </Card>
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

      {/* Experts Section */}
      <section id="experts" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">専門家紹介</h2>
            <p className="text-lg text-gray-600">神奈川県央地区の信頼できる専門家ネットワーク</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle>税理士</CardTitle>
                <CardDescription>相続税申告・節税対策</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">対応件数</span>
                    <span className="font-semibold">年間200件+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">平均経験年数</span>
                    <span className="font-semibold">15年</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">得意分野</span>
                    <span className="font-semibold text-sm">相続税・贈与税</span>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    税理士に相談
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle>司法書士</CardTitle>
                <CardDescription>不動産登記・遺産分割</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">対応件数</span>
                    <span className="font-semibold">年間150件+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">平均経験年数</span>
                    <span className="font-semibold">12年</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">得意分野</span>
                    <span className="font-semibold text-sm">相続登記・遺言</span>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    司法書士に相談
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle>弁護士</CardTitle>
                <CardDescription>遺産分割協議・相続争い</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">対応件数</span>
                    <span className="font-semibold">年間100件+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">平均経験年数</span>
                    <span className="font-semibold">18年</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">得意分野</span>
                    <span className="font-semibold text-sm">相続争い・調停</span>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    弁護士に相談
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Users className="h-5 w-5 mr-2" />
              すべての専門家を見る
            </Button>
          </div>
        </div>
      </section>

      {/* Knowledge Section */}
      <section id="knowledge" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">相続知識ライブラリ</h2>
            <p className="text-lg text-gray-600">相続に関する基礎知識から実践的な情報まで</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">基礎知識</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    相続とは何か
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    相続の流れ
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    相続人の範囲
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    法定相続分
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Calculator className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">相続税</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    相続税の仕組み
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    基礎控除額
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    税率と計算方法
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    節税対策
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <FileText className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">手続き</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    死亡届の提出
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    相続放棄
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    遺産分割協議
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    相続登記
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <HelpCircle className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">よくある質問</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    相続税はいくらから？
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    遺言書は必要？
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    不動産の評価方法
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    専門家への依頼時期
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <BookOpen className="h-5 w-5 mr-2" />
              知識ライブラリを見る
            </Button>
          </div>
        </div>
      </section>

      {/* Trust & Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">信頼の実績</h2>
            <p className="text-lg text-gray-600">数字で見る私たちのサービス</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">500+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">相談実績</h3>
              <p className="text-gray-600">年間相談件数</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">98%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">満足度</h3>
              <p className="text-gray-600">お客様満足度</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">15年</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">実績</h3>
              <p className="text-gray-600">業界経験年数</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">50+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">専門家</h3>
              <p className="text-gray-600">連携専門家数</p>
            </div>
          </div>

          {/* Customer Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-lg">大和市 K様</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  「父の相続で困っていましたが、地域の事情に詳しく、手続きから不動産売却まで一貫してサポートしていただけました。安心してお任せできました。」
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-lg">海老名市 T様</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  「相続税の計算から専門家の紹介まで、ワンストップでサービスを受けられたのが良かったです。料金も明確で安心でした。」
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-lg">座間市 M様</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  「セミナーに参加したことがきっかけでした。分かりやすい説明と丁寧な対応で、相続の不安が解消されました。」
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section id="company" className="py-20 bg-white">
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
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <MessageCircle className="h-5 w-5 mr-2" />
              LINEで相談
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

