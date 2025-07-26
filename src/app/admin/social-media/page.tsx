'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Save, X, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialMedia {
  id: string;
  platform: string;
  url: string;
  username: string;
  isVisible: boolean;
}

export default function SocialMediaManagement() {
  const [socialMedia, setSocialMedia] = useState<SocialMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<SocialMedia>>({});
  const [newItem, setNewItem] = useState<Partial<SocialMedia>>({
    platform: '',
    url: '',
    username: '',
    isVisible: true
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [saving, setSaving] = useState(false);

  const platforms = [
    'linkedin', 'github', 'facebook', 'twitter', 'instagram', 
    'tiktok', 'youtube', 'discord', 'telegram', 'whatsapp'
  ];

  useEffect(() => {
    fetchSocialMedia();
  }, []);

  const fetchSocialMedia = async () => {
    try {
      const response = await fetch('/api/social-media');
      const data = await response.json();
      setSocialMedia(data);
    } catch (error) {
      console.error('Error fetching social media:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: SocialMedia) => {
    setEditingId(item.id);
    setEditForm(item);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleSaveEdit = async () => {
    if (!editingId || !editForm.platform || !editForm.url) return;

    setSaving(true);
    try {
      const updatedData = socialMedia.map(item => 
        item.id === editingId ? { ...item, ...editForm } : item
      );

      const response = await fetch('/api/social-media', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      });

      if (response.ok) {
        setSocialMedia(updatedData);
        setEditingId(null);
        setEditForm({});
      }
    } catch (error) {
      console.error('Error saving:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleAdd = async () => {
    if (!newItem.platform || !newItem.url) return;

    setSaving(true);
    try {
      const newData = [...socialMedia, { 
        id: Date.now().toString(), 
        platform: newItem.platform!,
        url: newItem.url!,
        username: newItem.username || '',
        isVisible: newItem.isVisible ?? true
      }];

      const response = await fetch('/api/social-media', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData)
      });

      if (response.ok) {
        setSocialMedia(newData);
        setNewItem({ platform: '', url: '', username: '', isVisible: true });
        setShowAddForm(false);
      }
    } catch (error) {
      console.error('Error adding:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا العنصر؟')) return;

    setSaving(true);
    try {
      const updatedData = socialMedia.filter(item => item.id !== id);

      const response = await fetch('/api/social-media', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      });

      if (response.ok) {
        setSocialMedia(updatedData);
      }
    } catch (error) {
      console.error('Error deleting:', error);
    } finally {
      setSaving(false);
    }
  };

  const toggleVisibility = async (id: string) => {
    setSaving(true);
    try {
      const updatedData = socialMedia.map(item => 
        item.id === id ? { ...item, isVisible: !item.isVisible } : item
      );

      const response = await fetch('/api/social-media', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      });

      if (response.ok) {
        setSocialMedia(updatedData);
      }
    } catch (error) {
      console.error('Error updating visibility:', error);
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
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            إدارة وسائل التواصل الاجتماعي
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            قم بإدارة روابط وسائل التواصل الاجتماعي الخاصة بك
          </p>
        </div>
        
        <Button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          إضافة رابط جديد
        </Button>
      </div>

      {/* Add Form */}
      {showAddForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            إضافة رابط جديد
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select
              value={newItem.platform}
              onChange={(e) => setNewItem({ ...newItem, platform: e.target.value })}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="">اختر المنصة</option>
              {platforms.map(platform => (
                <option key={platform} value={platform}>
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </option>
              ))}
            </select>
            
            <input
              type="url"
              placeholder="الرابط"
              value={newItem.url}
              onChange={(e) => setNewItem({ ...newItem, url: e.target.value })}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            
            <input
              type="text"
              placeholder="اسم المستخدم"
              value={newItem.username}
              onChange={(e) => setNewItem({ ...newItem, username: e.target.value })}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            
            <div className="flex gap-2">
              <Button
                onClick={handleAdd}
                disabled={saving || !newItem.platform || !newItem.url}
                className="bg-green-600 hover:bg-green-700"
              >
                <Save className="w-4 h-4 mr-2" />
                حفظ
              </Button>
              <Button
                onClick={() => setShowAddForm(false)}
                variant="outline"
              >
                <X className="w-4 h-4 mr-2" />
                إلغاء
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Social Media List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  المنصة
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  الرابط
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  اسم المستخدم
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  الحالة
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {socialMedia.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  {editingId === item.id ? (
                    <>
                      <td className="px-6 py-4">
                        <select
                          value={editForm.platform}
                          onChange={(e) => setEditForm({ ...editForm, platform: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        >
                          {platforms.map(platform => (
                            <option key={platform} value={platform}>
                              {platform.charAt(0).toUpperCase() + platform.slice(1)}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="url"
                          value={editForm.url}
                          onChange={(e) => setEditForm({ ...editForm, url: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          value={editForm.username}
                          onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={editForm.isVisible}
                            onChange={(e) => setEditForm({ ...editForm, isVisible: e.target.checked })}
                            className="mr-2"
                          />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {editForm.isVisible ? 'مرئي' : 'مخفي'}
                          </span>
                        </label>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <Button
                            onClick={handleSaveEdit}
                            disabled={saving}
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <Save className="w-4 h-4" />
                          </Button>
                          <Button
                            onClick={handleCancelEdit}
                            variant="outline"
                            size="sm"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
                          {item.platform.charAt(0).toUpperCase() + item.platform.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 truncate block max-w-xs"
                        >
                          {item.url}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                        @{item.username}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => toggleVisibility(item.id)}
                          className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            item.isVisible 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                          }`}
                        >
                          {item.isVisible ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                          {item.isVisible ? 'مرئي' : 'مخفي'}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <Button
                            onClick={() => handleEdit(item)}
                            variant="outline"
                            size="sm"
                          >
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button
                            onClick={() => handleDelete(item.id)}
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-600 hover:bg-red-50 dark:text-red-400 dark:border-red-400"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {socialMedia.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            لا توجد روابط وسائل تواصل اجتماعي حالياً
          </p>
        </div>
      )}
    </div>
  );
}
