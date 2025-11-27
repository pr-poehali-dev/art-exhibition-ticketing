import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'];

  const exhibitions = [
    {
      id: 1,
      title: 'Гималайская серия',
      description: 'Мистические горные пейзажи и духовные искания художника',
      date: '15 января - 28 февраля 2025',
      image: 'https://cdn.poehali.dev/projects/fe796d82-bdee-4481-9037-6f8265eaaee0/files/8cbd448b-d74b-4753-8778-5ad08e6468f6.jpg',
      price: 'от 300₽',
      status: 'Открыта',
      audience: 'Для детей и взрослых'
    },
    {
      id: 2,
      title: 'Русская история в живописи',
      description: 'Былинные сюжеты и древнерусская культура глазами Рериха',
      date: '1 марта - 15 апреля 2025',
      image: 'https://cdn.poehali.dev/projects/fe796d82-bdee-4481-9037-6f8265eaaee0/files/034fdb9a-d09a-48a0-ba2d-9080071dc63d.jpg',
      price: 'от 300₽',
      status: 'Скоро',
      audience: 'Для детей и взрослых'
    },
    {
      id: 3,
      title: 'Культура и просвещение',
      description: 'Воспитательная выставка о значении культуры в жизни народов',
      date: '20 апреля - 30 мая 2025',
      image: 'https://cdn.poehali.dev/projects/fe796d82-bdee-4481-9037-6f8265eaaee0/files/038a9b6e-d35e-4dd2-9973-13aea15f9646.jpg',
      price: 'от 250₽',
      status: 'Анонс',
      audience: 'Для детей и взрослых'
    }
  ];

  const events = [
    { date: '15 января', title: 'Открытие выставки "Гималайская серия"', time: '11:00', audience: 'Для всей семьи' },
    { date: '20 января', title: 'Лекция "Жизнь и творчество Н.К. Рериха"', time: '14:00', audience: 'Для взрослых' },
    { date: '25 января', title: 'Детская экскурсия "Путешествие в мир искусства"', time: '11:00', audience: 'Для детей 7-14 лет' },
    { date: '3 февраля', title: 'Мастер-класс по копированию картин Рериха', time: '15:00', audience: 'Для детей и взрослых' }
  ];

  const news = [
    {
      title: 'Передвижная выставка стартует в январе',
      content: 'Воспитательная художественная выставка работ Н.К. Рериха начинает путешествие по городам России',
      date: '10 января 2025'
    },
    {
      title: 'Специальные программы для школьников',
      content: 'Разработаны образовательные экскурсии с элементами интерактива для детей разных возрастов',
      date: '5 января 2025'
    },
    {
      title: 'Пакт Рериха: история и современность',
      content: 'Новая лекция о вкладе художника в защиту культурных ценностей человечества',
      date: '28 декабря 2024'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Palette" className="text-white" size={24} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-foreground leading-tight">
                  ВЕЛИКИЕ ХУДОЖНИКИ РОССИИ
                </h1>
                <p className="text-sm text-muted-foreground">НИКОЛАЙ КОНСТАНТИНОВИЧ РЕРИХ</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors font-medium">
                Главная
              </button>
              <button onClick={() => scrollToSection('exhibitions')} className="text-foreground hover:text-primary transition-colors font-medium">
                Выставки
              </button>
              <button onClick={() => scrollToSection('calendar')} className="text-foreground hover:text-primary transition-colors font-medium">
                Расписание
              </button>
              <button onClick={() => scrollToSection('tickets')} className="text-foreground hover:text-primary transition-colors font-medium">
                Билеты
              </button>
              <button onClick={() => scrollToSection('news')} className="text-foreground hover:text-primary transition-colors font-medium">
                Новости
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium">
                О нас
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors font-medium">
                Контакты
              </button>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="Ticket" size={18} className="mr-2" />
              Купить билет
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <Badge className="mb-6 px-4 py-2 text-sm bg-primary/20 text-primary hover:bg-primary/30">
              Передвижные выставки
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight uppercase">
              ВЕЛИКИЕ ХУДОЖНИКИ РОССИИ<br/>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">НИКОЛАЙ КОНСТАНТИНОВИЧ РЕРИХ</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Воспитательные художественные передвижные выставки для детей и взрослых. Познакомьтесь с творчеством великого сына России
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="text-lg px-8 hover-scale">
                <Icon name="Calendar" size={20} className="mr-2" />
                Посмотреть расписание
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 hover-scale">
                <Icon name="Play" size={20} className="mr-2" />
                Виртуальный тур
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="exhibitions" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Передвижные выставки</h2>
            <p className="text-xl text-muted-foreground">Творчество Николая Рериха для детей и взрослых</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exhibitions.map((exhibition) => (
              <Card key={exhibition.id} className="overflow-hidden hover-scale">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={exhibition.image}
                    alt={exhibition.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">
                    {exhibition.status}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{exhibition.title}</CardTitle>
                  <CardDescription className="text-base">{exhibition.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={16} />
                    {exhibition.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Users" size={16} />
                    {exhibition.audience}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Ticket" size={16} />
                    {exhibition.price}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full hover-scale">
                    Купить билет
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calendar" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Расписание событий</h2>
            <p className="text-xl text-muted-foreground">Выберите дату и узнайте, что происходит в галерее</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">Календарь</h3>
              <div className="flex gap-2 mb-4 flex-wrap">
                {months.map((month, index) => (
                  <Button
                    key={index}
                    variant={selectedMonth === index ? 'default' : 'outline'}
                    onClick={() => setSelectedMonth(index)}
                    size="sm"
                  >
                    {month}
                  </Button>
                ))}
              </div>
              <div className="bg-muted/50 rounded-lg p-8 text-center">
                <Icon name="Calendar" size={64} className="mx-auto mb-4 text-primary" />
                <p className="text-lg font-semibold">{months[selectedMonth]} 2025</p>
                <p className="text-muted-foreground mt-2">Выберите месяц для просмотра событий</p>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">Ближайшие события</h3>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors hover-scale">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex flex-col items-center justify-center text-white">
                      <span className="text-xs font-semibold">{event.date.split(' ')[0]}</span>
                      <span className="text-lg font-bold">{event.date.split(' ')[1]}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{event.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Icon name="Clock" size={14} />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon name="Users" size={12} />
                        {event.audience}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="tickets" className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Билеты и тарифы</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий вариант посещения</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl">Детский</CardTitle>
                <CardDescription>Для школьников и семей</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4 text-primary">200₽</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span>Вход на выставку</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span>Интерактивная экскурсия</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span>Материалы о Рерихе</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Купить</Button>
              </CardFooter>
            </Card>

            <Card className="hover-scale border-2 border-primary shadow-lg relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary">
                Популярный
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Взрослый</CardTitle>
                <CardDescription>С экскурсией и лекцией</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4 text-primary">300₽</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span>Вход на выставку</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span>Экскурсия с искусствоведом</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span>Лекция о Рерихе</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span>Буклет и материалы</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Купить</Button>
              </CardFooter>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl">Групповой</CardTitle>
                <CardDescription>Для школьных классов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4 text-primary">150₽</div>
                <p className="text-sm text-muted-foreground mb-4">на человека (от 15 чел.)</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span>Вход на выставку</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span>Воспитательная программа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span>Материалы для учителя</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Заказать</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section id="news" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Новости</h2>
            <p className="text-xl text-muted-foreground">Следите за событиями в мире искусства</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {news.map((item, index) => (
              <Card key={index} className="p-6 hover-scale">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <Badge variant="outline">{item.date}</Badge>
                </div>
                <p className="text-muted-foreground">{item.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О проекте</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Передвижные художественные выставки, посвящённые творчеству великого русского художника, философа и мыслителя 
              Николая Константиновича Рериха (1874-1947). Наша миссия — воспитание через искусство, приобщение детей и взрослых 
              к высокой культуре и духовным ценностям России.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">25,000+</h3>
                <p className="text-muted-foreground">Детей и взрослых посетили выставки</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p className="text-muted-foreground">Городов России</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Palette" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">7000+</h3>
                <p className="text-muted-foreground">Картин в коллекции</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Мы всегда рады ответить на ваши вопросы</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">г. Москва, ул. Художественная, д. 15</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@artspace.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-muted-foreground">Вт-Вс: 10:00 - 20:00<br/>Пн: Выходной</p>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6">Подписка на новости</h3>
                <p className="text-muted-foreground mb-4">
                  Получайте информацию о новых выставках и специальных предложениях
                </p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Ваш email"
                    className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="w-full">
                    <Icon name="Send" size={18} className="mr-2" />
                    Подписаться
                  </Button>
                </div>
                <div className="flex gap-4 mt-6 justify-center">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Icon name="Twitter" size={20} />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2025 ArtSpace. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;