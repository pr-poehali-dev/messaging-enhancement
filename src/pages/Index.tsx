import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('chats');
  const [onlineStatus, setOnlineStatus] = useState(true);

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

  const renderContent = () => {
    switch (activeTab) {
      case 'chats':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Чаты</h2>
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
                          <h3 className="font-semibold text-gray-900 truncate">{chat.name}</h3>
                          <span className="text-xs text-gray-500">{chat.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
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
              <h2 className="text-2xl font-bold text-gray-800">Лента новостей</h2>
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
                          <h4 className="font-semibold text-gray-900">{post.author}</h4>
                          <span className="text-xs text-gray-500">{post.time}</span>
                        </div>
                        <p className="text-gray-700 mb-3">{post.content}</p>
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
              <h2 className="text-2xl font-bold text-gray-800">История звонков</h2>
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
                          <h3 className="font-semibold text-gray-900">{call.name}</h3>
                          <Icon 
                            name={call.type === 'outgoing' ? 'PhoneOutgoing' : 'PhoneIncoming'} 
                            size={14} 
                            className={call.status === 'missed' ? 'text-red-500' : 'text-green-500'} 
                          />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
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
            <h2 className="text-2xl font-bold text-gray-800">Статусы</h2>
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
                        <h3 className="font-semibold text-gray-900">{status.name}</h3>
                        <p className="text-sm text-gray-600">{status.content}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-500">{status.time}</span>
                          {!status.isOwn && (
                            <>
                              <span className="text-xs text-gray-400">•</span>
                              <span className="text-xs text-gray-500">{status.views} просмотров</span>
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
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarFallback className="text-4xl">🧑‍🚀</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Космический Путешественник</h2>
                    <p className="text-gray-600">@space_explorer</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${onlineStatus ? 'bg-green-500' : 'bg-gray-400'} animate-pulse`}></div>
                    <span className="text-sm text-gray-600">
                      {onlineStatus ? 'В сети' : 'Не в сети'}
                    </span>
                  </div>
                  <Button 
                    onClick={() => setOnlineStatus(!onlineStatus)}
                    className="bg-game-purple hover:bg-purple-600 text-white"
                  >
                    Изменить статус
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Статистика</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-game-orange/10 rounded-lg">
                    <div className="text-2xl font-bold text-game-orange">127</div>
                    <div className="text-sm text-gray-600">Сообщений</div>
                  </div>
                  <div className="text-center p-4 bg-game-blue/10 rounded-lg">
                    <div className="text-2xl font-bold text-game-blue">45</div>
                    <div className="text-sm text-gray-600">Звонков</div>
                  </div>
                  <div className="text-center p-4 bg-game-teal/10 rounded-lg">
                    <div className="text-2xl font-bold text-game-teal">89</div>
                    <div className="text-sm text-gray-600">Контактов</div>
                  </div>
                  <div className="text-center p-4 bg-game-purple/10 rounded-lg">
                    <div className="text-2xl font-bold text-game-purple">12</div>
                    <div className="text-sm text-gray-600">Групп</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 capitalize">{activeTab}</h2>
            <Card className="animate-scale-in">
              <CardContent className="p-8 text-center">
                <Icon name="Rocket" size={48} className="mx-auto text-game-orange mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Скоро здесь будет контент!</h3>
                <p className="text-gray-600">Этот раздел находится в разработке</p>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-game-orange to-game-purple rounded-lg flex items-center justify-center">
                <Icon name="MessageCircle" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-game-orange to-game-purple bg-clip-text text-transparent">
                GameChat
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
                          : 'text-gray-700 hover:text-gray-900'
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
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 p-4">
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