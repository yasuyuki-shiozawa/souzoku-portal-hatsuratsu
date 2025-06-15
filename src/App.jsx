import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; 
import {
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
  FileCheck,
  Home, // Homeアイコンを追加
  Users, // Usersアイコンを追加
  Calendar, // Calendarアイコンを追加
  FileText // FileTextアイコンを追加
} from 'lucide-react';
import heroImage from './assets/hero-image.jpg';
import SouzokuBasics from './components/SouzokuBasics.jsx';
import SouzokuTax from './components/SouzokuTax.jsx';
import WillTestament from './components/WillTestament.jsx';
import './App.css';

function App() {
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
                  <CardTitle className="text-xl">相続の基本</CardTitle>
                  <CardDescription>相続の開始から完了までの流れを解説</CardDescription>
                </CardHeader>
                <CardContent>
                  <SouzokuBasics />
                </CardContent>
              </Card>

              <Card 
                className="hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden group"
              >
                <div className="h-1 bg-primary-400 w-full group-hover:bg-primary-500 transition-colors"></div>
                <CardHeader>
                  <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Scale className="h-8 w-8 text-primary-500" />
                  </div>
                  <CardTitle className="text-xl">相続税について</CardTitle>
                  <CardDescription>相続税の計算方法と節税対策</CardDescription>
                </CardHeader>
                <CardContent>
                  <SouzokuTax />
                </CardContent>
              </Card>

              <Card 
                className="hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden group"
              >
                <div className="h-1 bg-primary-400 w-full group-hover:bg-primary-500 transition-colors"></div>
                <CardHeader>
                  <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <FileCheck className="h-8 w-8 text-primary-500" />
                  </div>
                  <CardTitle className="text-xl">遺言・遺産分割</CardTitle>
                  <CardDescription>遺言書の作成と遺産分割協議のポイント</CardDescription>
                </CardHeader>
                <CardContent>
                  <WillTestament />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* セミナーセクション */}
        <section id="seminars" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-heading">開催セミナー</h2>
              <p className="text-xl text-neutral-600">相続に関する知識を深めるセミナーを定期開催</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden group">
                <div className="h-1 bg-primary-400 w-full group-hover:bg-primary-500 transition-colors"></div>
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">【無料】はじめての相続セミナー</CardTitle>
                  <CardDescription className="flex items-center text-neutral-600">
                    <Clock className="h-4 w-4 mr-2" />
                    2025年7月15日(火) 14:00-16:00
                  </CardDescription>
                  <CardDescription className="flex items-center text-neutral-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    オンライン開催 (Zoom)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700 mb-4">相続の基本的な流れ、必要書類、よくあるトラブル事例などを分かりやすく解説します。これから相続について学びたい方に最適です。</p>
                  <Button className="bg-primary-400 hover:bg-primary-500 text-white shadow-soft">
                    <Calendar className="h-4 w-4 mr-2" />
                    セミナーに申し込む
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden group">
                <div className="h-1 bg-primary-400 w-full group-hover:bg-primary-500 transition-colors"></div>
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">【無料】相続税対策セミナー</CardTitle>
                  <CardDescription className="flex items-center text-neutral-600">
                    <Clock className="h-4 w-4 mr-2" />
                    2025年8月10日(土) 10:00-12:00
                  </CardDescription>
                  <CardDescription className="flex items-center text-neutral-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    会場開催 (東京都内)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700 mb-4">相続税の計算方法、控除の種類、生前贈与の活用など、具体的な節税対策を税理士が解説します。</p>
                  <Button className="bg-primary-400 hover:bg-primary-500 text-white shadow-soft">
                    <Calendar className="h-4 w-4 mr-2" />
                    セミナーに申し込む
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 専門家紹介セクション */}
        <section id="experts" className="py-24 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-heading">専門家紹介</h2>
              <p className="text-xl text-neutral-600">相続のプロフェッショナルがあなたの悩みを解決</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden group">
                <div className="h-1 bg-primary-400 w-full group-hover:bg-primary-500 transition-colors"></div>
                <CardHeader>
                  <div className="bg-primary-100 p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <img src="https://via.placeholder.com/96" alt="専門家1" className="rounded-full" />
                  </div>
                  <CardTitle className="text-xl">山田 太郎</CardTitle>
                  <CardDescription>行政書士</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700 text-lg">遺産分割協議書作成、相続関係説明図作成など、相続手続き全般をサポートします。</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden group">
                <div className="h-1 bg-primary-400 w-full group-hover:bg-primary-500 transition-colors"></div>
                <CardHeader>
                  <div className="bg-primary-100 p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <img src="https://via.placeholder.com/96" alt="専門家2" className="rounded-full" />
                  </div>
                  <CardTitle className="text-xl">佐藤 花子</CardTitle>
                  <CardDescription>弁護士</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700 text-lg">遺産分割調停・審判、遺留分侵害額請求など、法的な問題解決を支援します。</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-card transition-all duration-300 border-neutral-200 rounded-xl overflow-hidden group">
                <div className="h-1 bg-primary-400 w-full group-hover:bg-primary-500 transition-colors"></div>
                <CardHeader>
                  <div className="bg-primary-100 p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <img src="https://via.placeholder.com/96" alt="専門家3" className="rounded-full" />
                  </div>
                  <CardTitle className="text-xl">田中 健太</CardTitle>
                  <CardDescription>税理士</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700 text-lg">相続税申告、税務調査対応、節税対策など、相続税に関するあらゆるご相談に対応します。</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img src="https://via.placeholder.com/600x400" alt="会社外観" className="rounded-xl shadow-card" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">株式会社はつらつ</h3>
                <p className="text-neutral-700 mb-4">私たちは、相続に関するお客様の不安を解消し、円滑な相続をサポートすることを使命としています。専門家ネットワークと長年の経験を活かし、お客様一人ひとりに寄り添った最適なソリューションを提供します。</p>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-center"><MapPin className="h-5 w-5 mr-2 text-primary-400" /> 東京都渋谷区</li>
                  <li className="flex items-center"><Phone className="h-5 w-5 mr-2 text-primary-400" /> 03-1234-5678</li>
                  <li className="flex items-center"><Mail className="h-5 w-5 mr-2 text-primary-400" /> info@hatsuratsu.co.jp</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section id="contact" className="py-24 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-heading">お問い合わせ</h2>
              <p className="text-xl text-neutral-600">相続に関するご質問・ご相談はこちらから</p>
            </div>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-card">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-neutral-700 text-lg font-medium mb-2">お名前</label>
                  <input type="text" id="name" className="w-full p-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400" placeholder="お名前を入力してください" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-neutral-700 text-lg font-medium mb-2">メールアドレス</label>
                  <input type="email" id="email" className="w-full p-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400" placeholder="メールアドレスを入力してください" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-neutral-700 text-lg font-medium mb-2">お問い合わせ内容</label>
                  <textarea id="message" rows="5" className="w-full p-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400" placeholder="お問い合わせ内容を入力してください"></textarea>
                </div>
                <Button type="submit" className="w-full bg-primary-400 hover:bg-primary-500 text-white shadow-soft">
                  送信する
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* フッター */}
        <footer className="bg-neutral-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2025 株式会社はつらつ. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;


