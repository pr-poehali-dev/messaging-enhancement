import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('chats');
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'Космический Путешественник',
    username: 'space_explorer',
    email: 'explorer@space.com',
    bio: 'В космосе все хорошо! 🚀',
    avatar: '🧑‍🚀',
    theme: 'dark',
    notifications: true,
    privacy: 'public'
  });

  const navigationItems = [
    { id: 'chats', label: 'Чаты', icon: 'MessageCircle' },
    { id: 'feed', label: 'Лента', icon: 'Newspaper' },
    { id: 'calls', label: 'Звонки', icon: 'Phone' },
    { id: 'contacts', label: 'Контакты', icon: 'Users' },
    { id: 'status', label: 'Статусы', icon: 'Circle' },
    { id: 'groups', label: 'Группы', icon: 'Users2' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
    { id: 'profile', label: 'Профиль', icon: 'User' }
  ];

  const chats = [
    { id: 1, name: 'Команда разработчиков', lastMessage: 'Новая версия готова! 🚀', time: '14:32', unread: 3, online: true, avatar: '👨‍💻' },
    { id: 2, name: 'Семейный чат', lastMessage: 'Увидимся завтра!', time: '12:15', unread: 0, online: false, avatar: '👨‍👩‍👧‍👦' },
    { id: 3, name: 'Игровое сообщество', lastMessage: 'Кто играет в новую игру?', time: '11:45', unread: 12, online: true, avatar: '🎮' },
    { id: 4, name: 'Анна Соколова', lastMessage: 'Спасибо за помощь!', time: '10:30', unread: 1, online: true, avatar: '👩' }
  ];

  const feedPosts = [
    { id: 1, author: 'Максим Иванов', content: 'Запустил новый проект! Очень рад поделиться 🎉', likes: 24, comments: 8, time: '2 часа назад', avatar: '👨‍💼' },
    { id: 2, author: 'Елена Петрова', content: 'Сегодня отличная погода для прогулки', likes: 15, comments: 3, time: '4 часа назад', avatar: '👩‍🦱' },
    { id: 3, author: 'GameDev Community', content: 'Новый турнир начинается завтра!', likes: 67, comments: 23, time: '6 часов назад', avatar: '🏆' }
  ];

  const calls = [
    { id: 1, name: 'Михаил Козлов', type: 'outgoing', duration: '12:34', time: '15:30', status: 'answered', avatar: '👨‍🔬' },
    { id: 2, name: 'Рабочая группа', type: 'incoming', duration: '45:12', time: '14:15', status: 'missed', avatar: '👥' },
    { id: 3, name: 'Мама', type: 'outgoing', duration: '8:22', time: '13:45', status: 'answered', avatar: '👩‍🦳' }
  ];

  const statuses = [
    { id: 1, name: 'Ваш статус', content: 'В космосе все хорошо! 🚀', views: 0, time: 'Добавить статус', isOwn: true, avatar: '🧑‍🚀' },
    { id: 2, name: 'Александр', content: 'Работаю над новым проектом', views: 34, time: '2 часа назад', isOwn: false, avatar: '👨‍💻' },
    { id: 3, name: 'Мария', content: 'Отличный день для кодинга!', views: 18, time: '5 часов назад', isOwn: false, avatar: '👩‍💻' }
  ];

  const renderLoginForm = () => (
    <Card className="w-full max-w-md mx-auto animate-scale-in">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-game-orange to-game-purple rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="MessageCircle" size={32} className="text-white" />
        </div>
        <CardTitle className="text-2xl font-bold text-white">Добро пожаловать в ConnectX</CardTitle>
        <p className="text-gray-300">Войдите в аккаунт или создайте новый</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-white">Пароль</Label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
        <Button 
          className="w-full bg-gradient-to-r from-game-orange to-game-purple text-white"
          onClick={() => setIsLoggedIn(true)}
        >
          Войти
        </Button>
        <div className="text-center">
          <Button 
            variant="link" 
            className="text-game-orange hover:text-orange-400"
            onClick={() => setShowRegister(true)}
          >
            Нет аккаунта? Зарегистрироваться
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderRegisterForm = () => (
    <Card className="w-full max-w-md mx-auto animate-scale-in">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-game-orange to-game-purple rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="UserPlus" size={32} className="text-white" />
        </div>
        <CardTitle className="text-2xl font-bold text-white">Создать аккаунт</CardTitle>
        <p className="text-gray-300">Присоединяйтесь к ConnectX</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullname" className="text-white">Полное имя</Label>
          <Input id="fullname" placeholder="Ваше имя" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="username" className="text-white">Имя пользователя</Label>
          <Input id="username" placeholder="@username" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reg-email" className="text-white">Email</Label>
          <Input id="reg-email" type="email" placeholder="your@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reg-password" className="text-white">Пароль</Label>
          <Input id="reg-password" type="password" placeholder="••••••••" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password" className="text-white">Подтвердите пароль</Label>
          <Input id="confirm-password" type="password" placeholder="••••••••" />
        </div>
        <Button 
          className="w-full bg-gradient-to-r from-game-orange to-game-purple text-white"
          onClick={() => {
            setIsLoggedIn(true);
            setShowRegister(false);
          }}
        >
          Зарегистрироваться
        </Button>
        <div className="text-center">
          <Button 
            variant="link" 
            className="text-game-orange hover:text-orange-400"
            onClick={() => setShowRegister(false)}
          >
            Уже есть аккаунт? Войти
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'chats':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Чаты</h2>
              <Button size="sm" className="bg-game-orange hover:bg-orange-600 text-white">
                <Icon name="Plus" size={16} />
              </Button>
            </div>
            <div className="space-y-2">
              {chats.map((chat) => (
                <Card key={chat.id} className="hover-scale cursor-pointer animate-fade-in">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="text-xl">{chat.avatar}</AvatarFallback>
                        </Avatar>
                        {chat.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-white truncate">{chat.name}</h3>
                          <span className="text-xs text-gray-400">{chat.time}</span>
                        </div>
                        <p className="text-sm text-gray-300 truncate">{chat.lastMessage}</p>
                      </div>
                      {chat.unread > 0 && (
                        <Badge className="bg-game-orange text-white animate-bounce-in">
                          {chat.unread}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'feed':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Лента новостей</h2>
              <Button size="sm" className="bg-game-teal hover:bg-teal-600 text-white">
                <Icon name="PlusCircle" size={16} />
              </Button>
            </div>
            <div className="space-y-4">
              {feedPosts.map((post) => (
                <Card key={post.id} className="animate-scale-in">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="text-lg">{post.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-white">{post.author}</h4>
                          <span className="text-xs text-gray-400">{post.time}</span>
                        </div>
                        <p className="text-gray-300 mb-3">{post.content}</p>
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="text-game-orange hover:text-orange-600">
                            <Icon name="Heart" size={16} />
                            <span className="ml-1">{post.likes}</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="text-game-blue hover:text-blue-600">
                            <Icon name="MessageCircle" size={16} />
                            <span className="ml-1">{post.comments}</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                            <Icon name="Share2" size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'calls':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">История звонков</h2>
              <Button size="sm" className="bg-game-green hover:bg-green-700 text-white">
                <Icon name="PhonePlus" size={16} />
              </Button>
            </div>
            <div className="space-y-2">
              {calls.map((call) => (
                <Card key={call.id} className="hover-scale cursor-pointer animate-fade-in">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="text-lg">{call.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-white">{call.name}</h3>
                          <Icon 
                            name={call.type === 'outgoing' ? 'PhoneOutgoing' : 'PhoneIncoming'} 
                            size={14} 
                            className={call.status === 'missed' ? 'text-red-500' : 'text-green-500'} 
                          />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <span>{call.time}</span>
                          <span>•</span>
                          <span>{call.duration}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-game-green hover:text-green-700">
                        <Icon name="Phone" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'status':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Статусы</h2>
            <div className="space-y-3">
              {statuses.map((status) => (
                <Card key={status.id} className={`hover-scale cursor-pointer animate-fade-in ${status.isOwn ? 'border-game-orange' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="text-xl">{status.avatar}</AvatarFallback>
                        </Avatar>
                        {status.isOwn && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-game-orange rounded-full border-2 border-white">
                            <Icon name="Plus" size={10} className="text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{status.name}</h3>
                        <p className="text-sm text-gray-300">{status.content}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-400">{status.time}</span>
                          {!status.isOwn && (
                            <>
                              <span className="text-xs text-gray-400">•</span>
                              <span className="text-xs text-gray-400">{status.views} просмотров</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-6">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-white">Личный профиль</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <Avatar className="w-24 h-24 mx-auto">
                      <AvatarFallback className="text-4xl">{userProfile.avatar}</AvatarFallback>
                    </Avatar>
                    <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full bg-game-orange hover:bg-orange-600">
                      <Icon name="Camera" size={14} />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-white">{userProfile.name}</h2>
                    <p className="text-gray-300">@{userProfile.username}</p>
                    <p className="text-gray-400">{userProfile.email}</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${onlineStatus ? 'bg-green-500' : 'bg-gray-400'} animate-pulse`}></div>
                    <span className="text-sm text-gray-300">
                      {onlineStatus ? 'В сети' : 'Не в сети'}
                    </span>
                  </div>
                </div>
                
                <Separator className="bg-gray-700" />
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-white">О себе</Label>
                    <Textarea 
                      value={userProfile.bio}
                      onChange={(e) => setUserProfile({...userProfile, bio: e.target.value})}
                      className="mt-1"
                      placeholder="Расскажите о себе..."
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white">Имя</Label>
                      <Input 
                        value={userProfile.name}
                        onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label className="text-white">Имя пользователя</Label>
                      <Input 
                        value={userProfile.username}
                        onChange={(e) => setUserProfile({...userProfile, username: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-white">Email</Label>
                    <Input 
                      type="email"
                      value={userProfile.email}
                      onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <Separator className="bg-gray-700" />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Настройки</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Уведомления</Label>
                      <p className="text-sm text-gray-400">Получать push-уведомления</p>
                    </div>
                    <Switch 
                      checked={userProfile.notifications}
                      onCheckedChange={(checked) => setUserProfile({...userProfile, notifications: checked})}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Статус онлайн</Label>
                      <p className="text-sm text-gray-400">Показывать активность</p>
                    </div>
                    <Switch 
                      checked={onlineStatus}
                      onCheckedChange={setOnlineStatus}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-white">Приватность профиля</Label>
                    <div className="flex gap-2">
                      <Button 
                        variant={userProfile.privacy === 'public' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setUserProfile({...userProfile, privacy: 'public'})}
                        className={userProfile.privacy === 'public' ? 'bg-game-green text-white' : ''}
                      >
                        Открытый
                      </Button>
                      <Button 
                        variant={userProfile.privacy === 'private' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setUserProfile({...userProfile, privacy: 'private'})}
                        className={userProfile.privacy === 'private' ? 'bg-game-orange text-white' : ''}
                      >
                        Приватный
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button className="flex-1 bg-gradient-to-r from-game-orange to-game-purple text-white">
                    Сохранить изменения
                  </Button>
                  <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
                    Выйти
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Статистика</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-game-orange/10 rounded-lg">
                    <div className="text-2xl font-bold text-game-orange">127</div>
                    <div className="text-sm text-gray-300">Сообщений</div>
                  </div>
                  <div className="text-center p-4 bg-game-blue/10 rounded-lg">
                    <div className="text-2xl font-bold text-game-blue">45</div>
                    <div className="text-sm text-gray-300">Звонков</div>
                  </div>
                  <div className="text-center p-4 bg-game-teal/10 rounded-lg">
                    <div className="text-2xl font-bold text-game-teal">89</div>
                    <div className="text-sm text-gray-300">Контактов</div>
                  </div>
                  <div className="text-center p-4 bg-game-purple/10 rounded-lg">
                    <div className="text-2xl font-bold text-game-purple">12</div>
                    <div className="text-sm text-gray-300">Групп</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white capitalize">{activeTab}</h2>
            <Card className="animate-scale-in">
              <CardContent className="p-8 text-center">
                <Icon name="Rocket" size={48} className="mx-auto text-game-orange mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Скоро здесь будет контент!</h3>
                <p className="text-gray-300">Этот раздел находится в разработке</p>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        {showRegister ? renderRegisterForm() : renderLoginForm()}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-game-orange to-game-purple rounded-lg flex items-center justify-center">
                <Icon name="MessageCircle" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-game-orange to-game-purple bg-clip-text text-transparent">
                ConnectX
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="pulse-glow">
                <Icon name="Search" size={16} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Bell" size={16} />
              </Button>
              <Avatar className="w-8 h-8 cursor-pointer hover-scale">
                <AvatarFallback className="text-sm">🧑‍🚀</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 animate-slide-in-right">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {navigationItems.map((item) => (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? "default" : "ghost"}
                      className={`w-full justify-start gap-3 hover-scale ${
                        activeTab === item.id 
                          ? 'bg-gradient-to-r from-game-orange to-game-purple text-white' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      <Icon name={item.icon as any} size={18} />
                      {item.label}
                    </Button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <Button size="lg" className="rounded-full bg-gradient-to-r from-game-orange to-game-purple text-white shadow-lg hover:shadow-xl pulse-glow">
          <Icon name="MessageSquarePlus" size={24} />
        </Button>
      </div>

      {/* Bottom Message Input (for mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md border-t border-gray-700 p-4">
        <div className="flex items-center gap-2">
          <Input placeholder="Написать сообщение..." className="flex-1" />
          <Button size="sm" className="bg-game-orange text-white">
            <Icon name="Send" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;