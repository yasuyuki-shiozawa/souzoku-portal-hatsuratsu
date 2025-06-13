import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
  ChevronRight,
  Menu,
  X,
  BookOpen,
  Scale,
  Calculator,
  FileCheck
} from 'lucide-react';
import heroImage from './assets/hero-image.jpg';
import SouzokuBasics from './components/SouzokuBasics.jsx';
import SouzokuTax from './components/SouzokuTax.jsx';
import WillTestament from './components/WillTestament.jsx';
import './App.css';

function HomePage() {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // スクロール位置を監視
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // セクションへスクロール
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setShowSidebar(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white font-sans">
      {/* ヘッダー - スティッキー化 */}
      <header className={`sticky top-0 z-50 bg-white shadow-soft border-b transition-all duration-300 ${scrollPosition > 50 ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Home className="h-8 w-8 text-primary-400 mr-2" />
              <span className="text-xl font-bold text-neutral-800">相続ナビ</span>
              <span className="text-sm text-neutral-500 ml-2">株式会社はつらつ</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a 
                onClick={() => scrollToSection('services')} 
                className="text-neutral-700 hover:text-primary-500 transition-colors text-lg cursor-pointer"
              >
                サービス
              </a>
              <a 
                onClick={() => scrollToSection('knowledge')} 
                className="text-neutral-700 hover:text-primary-500 transition-colors text-lg cursor-pointer"
              >
                相続知識
              </a>
              <a 
                onClick={() => scrollToSection('seminars')} 
                className="text-neutral-700 hover:text-primary-500 transition-colors text-lg cursor-pointer"
              >
                セミナー
              </a>
              <a 
                onClick={() => scrollToSection('experts')} 
                className="text-neutral-700 hover:text-primary-500 transition-colors text-lg cursor-pointer"
              >
                専門家紹介
              </a>
              <a 
                onClick={() => scrollToSection('company')} 
                className="text-neutral-700 hover:text-primary-500 transition-colors text-lg cursor-pointer"
              >
                会社概要
              </a>
              <a 
                onClick={() => scrollToSection('contact')} 
                className="text-neutral-700 hover:text-primary-500 transition-colors text-lg cursor-pointer"
              >
                お問い合わせ
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button className="bg-primary-400 hover:bg-primary-500 text-white shadow-soft">
                <Phone className="h-4 w-4 mr-2" />
                無料相談
              </Button>
              <button 
                className="md:hidden text-neutral-500 hover:text-primary-400"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                {showSidebar ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* モバイルサイドバー */}
      {showSidebar && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowSidebar(false)}></div>
          <div className="fixed right-0 top-0 bottom-0 w-64 bg-white shadow-lg p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-xl">メニュー</span>
              <button onClick={() => setShowSidebar(false)}>
                <X size={24} className="text-neutral-500" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <a 
                onClick={() => scrollToSection('services')} 
                className="text-neutral-700 hover:text-primary-400 transition-colors text-lg cursor-pointer"
              >
                サービス
              </a>
              <a 
                onClick={() => scrollToSection('knowledge')} 
                className="text-neutral-700 hover:text-primary-400 transition-colors text-lg cursor-pointer"
              >
                相続知識
              </a>
              <a 
                onClick={() => scrollToSection('seminars')} 
                className="text-neutral-700 hover:text-primary-400 transition-colors text-lg cursor-pointer"
              >
                セミナー
              </a>
              <a 
                onClick={() => scrollToSection('experts')} 
                className="text-neutral-700 hover:text-primary-400 transition-colors text-lg cursor-pointer"
              >
                専門家紹介
              </a>
              <a 
                onClick={() => scrollToSection('company')} 
                className="text-neutral-700 hover:text-primary-400 transition-colors text-lg cursor-pointer"
              >
                会社概要
              </a>
              <a 
                onClick={() => scrollToSection('contact')} 
                className="text-neutral-700 hover:text-primary-400 transition-colors text-lg cursor-pointer"
              >
                お問い合わせ
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* メインコンテンツ */}
      <div className="relative">
        {/* PC用右サイドバー - 固定表示 */}
        <div className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 z-30">
          <div className="bg-white rounded-xl shadow-card p-4 w-64">
            <h3 className="font-bold text-lg mb-4 text-primary-500 border-b pb-2">クイックナビ</h3>
            <nav className="flex flex-col space-y-3">
              <a 
                onClick={() => scrollToSection('services')} 
                className="flex items-center text-neutral-700 hover:text-primary-400 transition-colors cursor-pointer"
              >
                <ChevronRight size={16} className="mr-1 text-primary-400" />
                サービス
              </a>
              <a 
                onClick={() => scrollToSection('knowledge')} 
                className="flex items-center text-neutral-700 hover:text-primary-400 transition-colors cursor-pointer"
              >
                <ChevronRight size={16} className="mr-1 text-primary-400" />
                相続知識
              </a>
              <a 
                onClick={() => scrollToSection('seminars')} 
                className="flex items-center text-neutral-700 hover:text-primary-400 transition-colors cursor-pointer"
              >
                <ChevronRight size={16} className="mr-1 text-primary-400" />
                セミナー
              </a>
              <a 
                onClick={() => scrollToSection('experts')} 
                className="flex items-center text-neutral-700 hover:text-primary-400 transition-colors cursor-pointer"
              >
                <ChevronRight size={16} className="mr-1 text-primary-400" />
                専門家紹介
              </a>
              <a 
                onClick={() => scrollToSection('company')} 
                className="flex items-center text-neutral-700 hover:text-primary-400 transition-colors cursor-pointer"
              >
                <ChevronRight size={16} className="mr-1 text-primary-400" />
                会社概要
              </a>
              <a 
                onClick={() => scrollToSection('contact')} 
                className="flex items-center text-neutral-700 hover:text-primary-400 transition-colors cursor-pointer"
              >
                <ChevronRight size={16} className="mr-1 text-primary-400" />
                お問い合わせ
              </a>
            </nav>
            <div className="mt-6 pt-4 border-t">
              <Button className="w-full bg-primary-400 hover:bg-primary-500 text-white shadow-soft">
                <Phone className="h-4 w-4 mr-2" />
                無料相談する
              </Button>
            </div>
          </div>
        </div>

        {/* ヒーローセクション */}
        <section className="relative bg-gradient-to-r from-primary-300 to-primary-500 text-white">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjUiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjEuOSAyLjEgMi4xdjE5LjhjMCAxLjItLjkgMi4xLTIuMSAyLjFIMTguMWMtMS4yIDAtMi4xLS45LTIuMS0yLjFWMjAuMWMwLTEuMi45LTIuMSAyLjEtMi4xSDE4aDEwLjVIMzZ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-heading">
                  相続のお悩み、<br />
                  <span className="text-white">まるごと解決</span>
                </h1>
                <p className="text-xl mb-8 text-white leading-relaxed">
                  不動産相続から手続きまで、専門家チームが<br />
                  あなたの大切な資産を守ります
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-primary-500 hover:bg-neutral-100 shadow-soft">
                    <FileText className="h-5 w-5 mr-2" />
                    無料査定依頼
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-500">
                    <Calendar className="h-5 w-5 mr-2" />
                    セミナー予約
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-white/20 rounded-xl blur-xl"></div>
                <img 
                  src={heroImage} 
                  alt="相続相談の様子" 
                  className="relative rounded-xl shadow-card"
                />
              </div>
            </div>
          </div>
        </section>

        {/* サービスセクション */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-heading">私たちのサービス</h2>
              <p className="text-xl text-neutral-600">相続に関するあらゆるお悩みをワンストップで解決</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden group">
                <div className="h-1 bg-primary-400 w-full group-hover:bg-primary-500 transition-colors"></div>
                <CardHeader>
                  <div className="bg-primary-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Building className="h-10 w-10 text-primary-500" />
                  </div>
                  <CardTitle className="text-xl">不動産売却仲介</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 text-lg">相続不動産の適正価格での売却をサポート</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden group">
                <div className="h-1 bg-primary-400 w-full group-hover:bg-primary-500 transition-colors"></div>
                <CardHeader>
                  <div className="bg-primary-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary-500" />
                  </div>
                  <CardTitle className="text-xl">専門家連携</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 text-lg">行政書士・弁護士・税理士との連携サポート</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden group">
                <div className="h-1 bg-primary-400 w-full group-hover:bg-primary-500 transition-colors"></div>
                <CardHeader>
                  <div className="bg-primary-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-10 w-10 text-primary-500" />
                  </div>
                  <CardTitle className="text-xl">相続セミナー</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 text-lg">定期開催の相続知識向上セミナー</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden group">
                <div className="h-1 bg-primary-400 w-full group-hover:bg-primary-500 transition-colors"></div>
                <CardHeader>
                  <div className="bg-primary-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-10 w-10 text-primary-500" />
                  </div>
                  <CardTitle className="text-xl">手続きサポート</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 text-lg">複雑な相続手続きを専門家がサポート</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 相続知識セクション - 新規追加 */}
        <section id="knowledge" className="py-24 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-heading">相続の基礎知識</h2>
              <p className="text-xl text-neutral-600">法令に基づいた正確な情報で、相続について学びましょう</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden group">
                <div className="h-1 bg-primary-400 w-full group-hover:bg-primary-500 transition-colors"></div>
                <CardHeader>
                  <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-primary-500" />
                  </div>
                  <CardTitle className="text-xl">相続とは？</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-neutral-600 text-lg mb-4">相続の基本的な仕組みと法定相続人、相続分について詳しく解説します。</p>
                    <ul className="text-neutral-600 space-y-2">
                      <li>• 法定相続人の範囲と順位</li>
                      <li>• 法定相続分の計算方法</li>
                      <li>• 代襲相続の仕組み</li>
                    </ul>
                    <Button 
                      variant="outline" 
                      className="mt-4 w-full"
                      onClick={() => navigate('/souzoku-basics')}
                    >
                      詳しく見る
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden group">
                  <div className="h-1 bg-primary-400 w-full group-hover:bg-primary-500 transition-colors"></div>
                  <CardHeader>
                    <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Calculator className="h-8 w-8 text-primary-500" />
                    </div>
                    <CardTitle className="text-xl">相続税の基礎</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 text-lg mb-4">相続税の計算方法と基礎控除、各種特例について分かりやすく説明します。</p>
                    <ul className="text-neutral-600 space-y-2">
                      <li>• 基礎控除額の計算</li>
                      <li>• 相続税の税率と計算方法</li>
                      <li>• 配偶者の税額軽減</li>
                      <li>• 小規模宅地等の特例</li>
                    </ul>
                    <Button 
                      variant="outline" 
                      className="mt-4 w-full"
                      onClick={() => navigate('/souzoku-tax')}
                    >
                      詳しく見る
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden group">
                  <div className="h-1 bg-primary-400 w-full group-hover:bg-primary-500 transition-colors"></div>
                  <CardHeader>
                    <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <FileCheck className="h-8 w-8 text-primary-500" />
                    </div>
                    <CardTitle className="text-xl">遺言書の種類と効力</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 text-lg mb-4">遺言書の法的効力と種類、作成時の注意点について詳しく解説します。</p>
                    <ul className="text-neutral-600 space-y-2">
                      <li>• 自筆証書遺言</li>
                      <li>• 公正証書遺言</li>
                      <li>• 秘密証書遺言</li>
                      <li>• 遺言書の法的効力</li>
                    </ul>
                    <Button 
                      variant="outline" 
                      className="mt-4 w-full"
                      onClick={() => navigate('/will-testament')}
                    >
                      詳しく見る
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden group">
                  <div className="h-1 bg-primary-400 w-full group-hover:bg-primary-500 transition-colors"></div>
                  <CardHeader>
                    <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Scale className="h-8 w-8 text-primary-500" />
                    </div>
                    <CardTitle className="text-xl">相続の承認と放棄</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 text-lg mb-4">相続における3つの選択肢と、それぞれの手続きについて説明します。</p>
                    <ul className="text-neutral-600 space-y-2">
                      <li>• 単純承認</li>
                      <li>• 限定承認</li>
                      <li>• 相続放棄</li>
                      <li>• 手続きの期限と注意点</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden group">
                  <div className="h-1 bg-primary-400 w-full group-hover:bg-primary-500 transition-colors"></div>
                  <CardHeader>
                    <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <FileText className="h-8 w-8 text-primary-500" />
                    </div>
                    <CardTitle className="text-xl">遺産分割協議</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 text-lg mb-4">遺産分割協議の進め方と協議書の作成について詳しく解説します。</p>
                    <ul className="text-neutral-600 space-y-2">
                      <li>• 協議の進め方</li>
                      <li>• 協議書の作成方法</li>
                      <li>• 調停・審判の手続き</li>
                      <li>• 遺留分の考慮</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden group">
                  <div className="h-1 bg-primary-400 w-full group-hover:bg-primary-500 transition-colors"></div>
                  <CardHeader>
                    <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Clock className="h-8 w-8 text-primary-500" />
                    </div>
                    <CardTitle className="text-xl">相続手続きの流れ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 text-lg mb-4">相続開始から各種手続きまで、スケジュールを含めて解説します。</p>
                    <ul className="text-neutral-600 space-y-2">
                      <li>• 死亡届の提出</li>
                      <li>• 相続人・財産の調査</li>
                      <li>• 相続税の申告・納付</li>
                      <li>• 各種名義変更手続き</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <Button 
                  size="lg" 
                  className="bg-primary-400 hover:bg-primary-500 text-white shadow-soft"
                  onClick={() => navigate('/souzoku-basics')}
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  詳しい相続知識を見る
                </Button>
              </div>
            </div>
          </section>

        {/* セミナーセクション */}
        <section id="seminars" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-heading">相続セミナー</h2>
              <p className="text-xl text-neutral-600">定期開催の相続知識向上セミナー</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-primary-100 text-primary-600">基礎編</Badge>
                  <CardTitle className="text-xl">相続の基本知識</CardTitle>
                  <CardDescription className="text-lg">相続の基本的な仕組みから法定相続人、相続分まで分かりやすく解説</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-neutral-600">
                    <p><Calendar className="h-4 w-4 inline mr-2" />毎月第2土曜日 14:00-16:00</p>
                    <p><MapPin className="h-4 w-4 inline mr-2" />当社セミナールーム</p>
                    <p><Users className="h-4 w-4 inline mr-2" />定員：20名</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-secondary-100 text-secondary-600">実践編</Badge>
                  <CardTitle className="text-xl">相続税対策セミナー</CardTitle>
                  <CardDescription className="text-lg">相続税の計算方法から節税対策まで、実践的な内容をお伝えします</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-neutral-600">
                    <p><Calendar className="h-4 w-4 inline mr-2" />毎月第4土曜日 14:00-16:00</p>
                    <p><MapPin className="h-4 w-4 inline mr-2" />当社セミナールーム</p>
                    <p><Users className="h-4 w-4 inline mr-2" />定員：15名</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-accent-100 text-accent-600">応用編</Badge>
                  <CardTitle className="text-xl">不動産相続セミナー</CardTitle>
                  <CardDescription className="text-lg">不動産の相続に特化した専門的な内容をお伝えします</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-neutral-600">
                    <p><Calendar className="h-4 w-4 inline mr-2" />隔月第1日曜日 10:00-12:00</p>
                    <p><MapPin className="h-4 w-4 inline mr-2" />当社セミナールーム</p>
                    <p><Users className="h-4 w-4 inline mr-2" />定員：12名</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-primary-400 hover:bg-primary-500 text-white shadow-soft">
                <Calendar className="h-5 w-5 mr-2" />
                セミナーに申し込む
              </Button>
            </div>
          </div>
        </section>

        {/* 専門家紹介セクション */}
        <section id="experts" className="py-24 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-heading">専門家紹介</h2>
              <p className="text-xl text-neutral-600">信頼できる専門家ネットワーク</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl">
                <CardHeader>
                  <div className="bg-primary-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Scale className="h-10 w-10 text-primary-500" />
                  </div>
                  <CardTitle className="text-xl">弁護士</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 text-lg">相続トラブルの解決や遺言書作成をサポート</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl">
                <CardHeader>
                  <div className="bg-primary-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-10 w-10 text-primary-500" />
                  </div>
                  <CardTitle className="text-xl">税理士</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 text-lg">相続税申告や節税対策をプロがサポート</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl">
                <CardHeader>
                  <div className="bg-primary-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-10 w-10 text-primary-500" />
                  </div>
                  <CardTitle className="text-xl">行政書士</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 text-lg">相続手続きや書類作成を専門家がサポート</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 会社概要セクション */}
        <section id="company" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-heading">会社概要</h2>
              <p className="text-xl text-neutral-600">株式会社はつらつについて</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="rounded-xl shadow-card border-neutral-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Building className="h-5 w-5 mr-2 text-primary-400" />
                    基本情報
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-lg">所在地</p>
                      <p className="text-neutral-600 text-lg">〒242-0006<br />神奈川県大和市南林間７丁目１－１７条マート１階</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-lg">電話・FAX</p>
                      <p className="text-neutral-600 text-lg">046-240-6304</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-lg">営業時間</p>
                      <p className="text-neutral-600 text-lg">9:00～18:00</p>
                      <p className="text-neutral-500">定休日：土曜日・日曜日・祝日</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Car className="h-6 w-6 text-primary-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-lg">アクセス</p>
                      <p className="text-neutral-600 text-lg">小田急江ノ島線/南林間駅 徒歩8分<br />駐車場あり</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-xl shadow-card border-neutral-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Award className="h-5 w-5 mr-2 text-primary-400" />
                    免許・所属団体
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-primary-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-lg">代表者</p>
                      <p className="text-neutral-600 text-lg">伊藤 顕</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-primary-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-lg">免許番号</p>
                      <p className="text-neutral-600 text-lg">神奈川県知事免許 (1) 第32358号</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Building className="h-6 w-6 text-primary-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-lg">所属団体</p>
                      <ul className="text-neutral-600 text-lg space-y-1">
                        <li>• (公社)全日本不動産協会会員</li>
                        <li>• (公社)首都圏不動産公正取引協議会加盟</li>
                        <li>• (公社)不動産保証協会</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 当社の特徴セクション */}
        <section className="py-24 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-heading">当社の特徴</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl text-center shadow-soft">
                <p className="text-lg font-medium text-neutral-700">オンライン相談可</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-soft">
                <p className="text-lg font-medium text-neutral-700">駐車場あり</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-soft">
                <p className="text-lg font-medium text-neutral-700">メール対応可</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-soft">
                <p className="text-lg font-medium text-neutral-700">店内バリアフリー</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-soft">
                <p className="text-lg font-medium text-neutral-700">住み替え相談</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-soft">
                <p className="text-lg font-medium text-neutral-700">税金・法律に詳しい</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-soft">
                <p className="text-lg font-medium text-neutral-700">不動産相続の相談可</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-soft">
                <p className="text-lg font-medium text-neutral-700">高齢者歓迎</p>
              </div>
            </div>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-heading">お問い合わせ</h2>
              <p className="text-xl text-neutral-600">お気軽にご相談ください</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="rounded-xl shadow-card border-neutral-200">
                <CardHeader>
                  <CardTitle className="text-xl">お電話でのお問い合わせ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-500 mb-2">046-240-6304</p>
                    <p className="text-lg text-neutral-600">営業時間：9:00～18:00</p>
                    <p className="text-neutral-500">定休日：土曜日・日曜日・祝日</p>
                  </div>
                  <Button className="w-full bg-primary-400 hover:bg-primary-500 text-white shadow-soft">
                    <Phone className="h-4 w-4 mr-2" />
                    今すぐ電話する
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-xl shadow-card border-neutral-200">
                <CardHeader>
                  <CardTitle className="text-xl">メールでのお問い合わせ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg text-neutral-600">24時間受付中</p>
                  <p className="text-neutral-600">お名前、ご連絡先、ご相談内容をお聞かせください。</p>
                  <Button className="w-full bg-secondary-400 hover:bg-secondary-500 text-white shadow-soft">
                    <Mail className="h-4 w-4 mr-2" />
                    メールで問い合わせる
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      {/* フッター */}
      <footer className="bg-neutral-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Home className="h-6 w-6 mr-2" />
                <span className="text-lg font-bold">相続ナビ</span>
              </div>
              <p className="text-neutral-300">株式会社はつらつが運営する<br />相続専門ポータルサイト</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">サービス</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>不動産売却仲介</li>
                <li>専門家紹介</li>
                <li>相続セミナー</li>
                <li>手続きサポート</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">相続知識</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>相続の基礎知識</li>
                <li>相続税について</li>
                <li>遺言書の作成</li>
                <li>手続きの流れ</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">お問い合わせ</h3>
              <div className="space-y-2 text-neutral-300">
                <p>046-240-6304</p>
                <p>9:00～18:00</p>
                <p>神奈川県大和市南林間</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400">
            <p>&copy; 2024 株式会社はつらつ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/souzoku-basics" element={<SouzokuBasics />} />
        <Route path="/souzoku-tax" element={<SouzokuTax />} />
        <Route path="/will-testament" element={<WillTestament />} />
      </Routes>
    </Router>
  );
}

export default App;

