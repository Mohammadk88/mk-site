'use client';

import { useState, useEffect } from 'react';
import { User, Mail, Globe, Camera, Save, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface PersonalInfo {
  id: string;
  nameEn: string;
  nameAr: string;
  nameTr: string;
  titleEn: string;
  titleAr: string;
  titleTr: string;
  bioEn: string;
  bioAr: string;
  bioTr: string;
  avatar: string;
  resumeUrl: string;
  location: string;
  yearsExp: number;
}

interface ContactInfo {
  id: string;
  type: string;
  value: string;
  label: string;
  lang: string;
  isPrimary: boolean;
}

interface SocialMedia {
  id: string;
  platform: string;
  url: string;
  username: string;
  isVisible: boolean;
}

export default function SettingsPage() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
  const [socialMedia, setSocialMedia] = useState<SocialMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');

  // Load data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [personalRes, contactRes, socialRes] = await Promise.all([
        fetch('/api/personal-info'),
        fetch('/api/contact-info'),
        fetch('/api/social-media')
      ]);

      const [personalData, contactData, socialData] = await Promise.all([
        personalRes.json(),
        contactRes.json(),
        socialRes.json()
      ]);

      setPersonalInfo(personalData);
      setContactInfo(contactData);
      setSocialMedia(socialData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePersonalInfoUpdate = async () => {
    if (!personalInfo) return;
    
    setSaving(true);
    try {
      const response = await fetch('/api/personal-info', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(personalInfo)
      });

      if (response.ok) {
        alert('تم تحديث المعلومات الشخصية بنجاح');
      }
    } catch (error) {
      console.error('Error updating personal info:', error);
      alert('حدث خطأ أثناء التحديث');
    } finally {
      setSaving(false);
    }
  };

  const handleContactInfoUpdate = async () => {
    setSaving(true);
    try {
      const response = await fetch('/api/contact-info', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactInfo)
      });

      if (response.ok) {
        alert('تم تحديث معلومات التواصل بنجاح');
      }
    } catch (error) {
      console.error('Error updating contact info:', error);
      alert('حدث خطأ أثناء التحديث');
    } finally {
      setSaving(false);
    }
  };

  const handleSocialMediaUpdate = async () => {
    setSaving(true);
    try {
      const response = await fetch('/api/social-media', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(socialMedia)
      });

      if (response.ok) {
        alert('تم تحديث مواقع التواصل الاجتماعي بنجاح');
      }
    } catch (error) {
      console.error('Error updating social media:', error);
      alert('حدث خطأ أثناء التحديث');
    } finally {
      setSaving(false);
    }
  };

  const addContactInfo = () => {
    const newContact: ContactInfo = {
      id: Date.now().toString(),
      type: 'email',
      value: '',
      label: '',
      lang: 'en',
      isPrimary: false
    };
    setContactInfo([...contactInfo, newContact]);
  };

  const addSocialMedia = () => {
    const newSocial: SocialMedia = {
      id: Date.now().toString(),
      platform: 'github',
      url: '',
      username: '',
      isVisible: true
    };
    setSocialMedia([...socialMedia, newSocial]);
  };

  const removeContactInfo = (id: string) => {
    setContactInfo(contactInfo.filter(c => c.id !== id));
  };

  const removeSocialMedia = (id: string) => {
    setSocialMedia(socialMedia.filter(s => s.id !== id));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">الإعدادات</h1>
        <p className="text-gray-600 dark:text-gray-400">إدارة المعلومات الشخصية ومعلومات التواصل</p>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('personal')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'personal'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <User className="inline-block w-4 h-4 mr-2" />
              المعلومات الشخصية
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'contact'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Mail className="inline-block w-4 h-4 mr-2" />
              معلومات التواصل
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'social'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Globe className="inline-block w-4 h-4 mr-2" />
              مواقع التواصل الاجتماعي
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* Personal Info Tab */}
          {activeTab === 'personal' && personalInfo && (
            <div className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-600">
                    <Image
                      src={personalInfo.avatar || '/images/avatar.jpg'}
                      alt="Avatar"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <button 
                    className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                    title="تغيير الصورة"
                    aria-label="تغيير الصورة"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">الصورة الشخصية</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">JPG, GIF أو PNG. الحد الأقصى 1MB.</p>
                  <input
                    type="text"
                    placeholder="رابط الصورة"
                    title="رابط الصورة"
                    value={personalInfo.avatar}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, avatar: e.target.value })}
                    className="mt-2 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="nameAr" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    الاسم (عربي)
                  </label>
                  <input
                    id="nameAr"
                    type="text"
                    value={personalInfo.nameAr}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, nameAr: e.target.value })}
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="nameEn" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    الاسم (إنجليزي)
                  </label>
                  <input
                    id="nameEn"
                    type="text"
                    value={personalInfo.nameEn}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, nameEn: e.target.value })}
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="nameTr" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    الاسم (تركي)
                  </label>
                  <input
                    id="nameTr"
                    type="text"
                    value={personalInfo.nameTr}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, nameTr: e.target.value })}
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <Button 
                onClick={handlePersonalInfoUpdate} 
                disabled={saving}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Save className="w-4 h-4 mr-2" />
                {saving ? 'جاري الحفظ...' : 'حفظ المعلومات الشخصية'}
              </Button>
            </div>
          )}

          {/* Contact Info Tab */}
          {activeTab === 'contact' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">معلومات التواصل</h3>
                <Button onClick={addContactInfo} variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  إضافة معلومة تواصل
                </Button>
              </div>

              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <div key={contact.id} className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <div>
                      <label htmlFor={`type-${contact.id}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">النوع</label>
                      <select
                        id={`type-${contact.id}`}
                        value={contact.type}
                        onChange={(e) => {
                          const updated = contactInfo.map(c => 
                            c.id === contact.id ? { ...c, type: e.target.value } : c
                          );
                          setContactInfo(updated);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      >
                        <option value="email">إيميل</option>
                        <option value="phone">هاتف</option>
                        <option value="whatsapp">واتساب</option>
                        <option value="telegram">تليجرام</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor={`value-${contact.id}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">القيمة</label>
                      <input
                        id={`value-${contact.id}`}
                        type="text"
                        value={contact.value}
                        onChange={(e) => {
                          const updated = contactInfo.map(c => 
                            c.id === contact.id ? { ...c, value: e.target.value } : c
                          );
                          setContactInfo(updated);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div className="flex items-end">
                      <Button
                        onClick={() => removeContactInfo(contact.id)}
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                        title="حذف وسيلة التواصل"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                onClick={handleContactInfoUpdate} 
                disabled={saving}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Save className="w-4 h-4 mr-2" />
                {saving ? 'جاري الحفظ...' : 'حفظ معلومات التواصل'}
              </Button>
            </div>
          )}

          {/* Social Media Tab */}
          {activeTab === 'social' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">مواقع التواصل الاجتماعي</h3>
                <Button onClick={addSocialMedia} variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  إضافة موقع تواصل
                </Button>
              </div>

              <div className="space-y-4">
                {socialMedia.map((social) => (
                  <div key={social.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <div>
                      <label htmlFor={`platform-${social.id}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">المنصة</label>
                      <select
                        id={`platform-${social.id}`}
                        value={social.platform}
                        onChange={(e) => {
                          const updated = socialMedia.map(s => 
                            s.id === social.id ? { ...s, platform: e.target.value } : s
                          );
                          setSocialMedia(updated);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      >
                        <option value="github">GitHub</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="twitter">Twitter</option>
                        <option value="instagram">Instagram</option>
                        <option value="youtube">YouTube</option>
                        <option value="facebook">Facebook</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor={`url-${social.id}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">الرابط</label>
                      <input
                        id={`url-${social.id}`}
                        type="text"
                        value={social.url}
                        onChange={(e) => {
                          const updated = socialMedia.map(s => 
                            s.id === social.id ? { ...s, url: e.target.value } : s
                          );
                          setSocialMedia(updated);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor={`username-${social.id}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">اسم المستخدم</label>
                      <input
                        id={`username-${social.id}`}
                        type="text"
                        value={social.username}
                        onChange={(e) => {
                          const updated = socialMedia.map(s => 
                            s.id === social.id ? { ...s, username: e.target.value } : s
                          );
                          setSocialMedia(updated);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div className="flex items-end">
                      <Button
                        onClick={() => removeSocialMedia(social.id)}
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                        title="حذف حساب التواصل الاجتماعي"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                onClick={handleSocialMediaUpdate} 
                disabled={saving}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Save className="w-4 h-4 mr-2" />
                {saving ? 'جاري الحفظ...' : 'حفظ مواقع التواصل الاجتماعي'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
