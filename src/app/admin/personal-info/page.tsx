'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Edit2, User, Globe, FileText, MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PersonalInfo {
  id: string;
  fullName: string;
  title: string;
  bio: string;
  location: string;
  experience: string;
  resumeUrl: string;
  lang: string;
}

export default function PersonalInfoManagement() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<PersonalInfo>>({});
  const [saving, setSaving] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
    { code: 'tr', name: 'Türkçe' }
  ];

  useEffect(() => {
    fetchPersonalInfo();
  }, []);

  const fetchPersonalInfo = async () => {
    try {
      const response = await fetch('/api/personal-info');
      const data = await response.json();
      setPersonalInfo(data);
    } catch (error) {
      console.error('Error fetching personal info:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: PersonalInfo) => {
    setEditingId(item.id);
    setEditForm(item);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleSaveEdit = async () => {
    if (!editingId || !editForm.fullName || !editForm.title) return;

    setSaving(true);
    try {
      const updatedData = personalInfo.map(item => 
        item.id === editingId ? { ...item, ...editForm } : item
      );

      const response = await fetch('/api/personal-info', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      });

      if (response.ok) {
        setPersonalInfo(updatedData);
        setEditingId(null);
        setEditForm({});
      }
    } catch (error) {
      console.error('Error saving:', error);
    } finally {
      setSaving(false);
    }
  };



  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          إدارة المعلومات الشخصية
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          قم بإدارة معلوماتك الشخصية والمهنية في جميع اللغات
        </p>
      </div>

      <div className="grid gap-6">
        {personalInfo.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  {languages.find(l => l.code === item.lang)?.name || item.lang}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.fullName}
                </h3>
              </div>
              
              {editingId === item.id ? (
                <div className="flex gap-2">
                  <Button
                    onClick={handleSaveEdit}
                    disabled={saving}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    حفظ
                  </Button>
                  <Button
                    onClick={handleCancelEdit}
                    variant="outline"
                  >
                    إلغاء
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => handleEdit(item)}
                  variant="outline"
                >
                  <Edit2 className="w-4 h-4 mr-2" />
                  تعديل
                </Button>
              )}
            </div>

            {editingId === item.id ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <User className="w-4 h-4" />
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      value={editForm.fullName || ''}
                      onChange={(e) => setEditForm({ ...editForm, fullName: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="أدخل الاسم الكامل"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Briefcase className="w-4 h-4" />
                      المسمى الوظيفي
                    </label>
                    <input
                      type="text"
                      value={editForm.title || ''}
                      onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="أدخل المسمى الوظيفي"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <MapPin className="w-4 h-4" />
                      الموقع
                    </label>
                    <input
                      type="text"
                      value={editForm.location || ''}
                      onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="أدخل الموقع"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Briefcase className="w-4 h-4" />
                      سنوات الخبرة
                    </label>
                    <input
                      type="text"
                      value={editForm.experience || ''}
                      onChange={(e) => setEditForm({ ...editForm, experience: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="أدخل سنوات الخبرة"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <FileText className="w-4 h-4" />
                      النبذة الشخصية
                    </label>
                    <textarea
                      value={editForm.bio || ''}
                      onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none"
                      placeholder="أدخل النبذة الشخصية"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Globe className="w-4 h-4" />
                      رابط السيرة الذاتية
                    </label>
                    <input
                      type="url"
                      value={editForm.resumeUrl || ''}
                      onChange={(e) => setEditForm({ ...editForm, resumeUrl: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="أدخل رابط السيرة الذاتية"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">الاسم الكامل</h4>
                      <p className="text-gray-600 dark:text-gray-400">{item.fullName}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">المسمى الوظيفي</h4>
                      <p className="text-gray-600 dark:text-gray-400">{item.title}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">الموقع</h4>
                      <p className="text-gray-600 dark:text-gray-400">{item.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">سنوات الخبرة</h4>
                      <p className="text-gray-600 dark:text-gray-400">{item.experience}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">النبذة الشخصية</h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.bio}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">رابط السيرة الذاتية</h4>
                      <a 
                        href={item.resumeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 break-all"
                      >
                        {item.resumeUrl}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {personalInfo.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            لا توجد معلومات شخصية حالياً
          </p>
        </div>
      )}
    </div>
  );
}
