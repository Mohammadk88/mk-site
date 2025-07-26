'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Save, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactInfo {
  id: string;
  type: string;
  value: string;
  label: string;
  lang: string;
  isPrimary: boolean;
}

export default function ContactManagement() {
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<ContactInfo>>({});
  const [newItem, setNewItem] = useState<Partial<ContactInfo>>({
    type: 'email',
    value: '',
    label: '',
    lang: 'en',
    isPrimary: false
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [saving, setSaving] = useState(false);

  const contactTypes = ['email', 'phone', 'address', 'website'];
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
    { code: 'tr', name: 'Türkçe' }
  ];

  useEffect(() => {
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    try {
      const response = await fetch('/api/contact-info');
      const data = await response.json();
      setContactInfo(data);
    } catch (error) {
      console.error('Error fetching contact info:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: ContactInfo) => {
    setEditingId(item.id);
    setEditForm(item);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleSaveEdit = async () => {
    if (!editingId || !editForm.type || !editForm.value) return;

    setSaving(true);
    try {
      const updatedData = contactInfo.map(item => 
        item.id === editingId ? { ...item, ...editForm } : item
      );

      const response = await fetch('/api/contact-info', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      });

      if (response.ok) {
        setContactInfo(updatedData);
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
    if (!newItem.type || !newItem.value || !newItem.label || !newItem.lang) return;

    setSaving(true);
    try {
      const newData = [...contactInfo, { 
        id: Date.now().toString(), 
        type: newItem.type!,
        value: newItem.value!,
        label: newItem.label!,
        lang: newItem.lang!,
        isPrimary: newItem.isPrimary ?? false
      }];

      const response = await fetch('/api/contact-info', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData)
      });

      if (response.ok) {
        setContactInfo(newData);
        setNewItem({ type: 'email', value: '', label: '', lang: 'en', isPrimary: false });
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
      const updatedData = contactInfo.filter(item => item.id !== id);

      const response = await fetch('/api/contact-info', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      });

      if (response.ok) {
        setContactInfo(updatedData);
      }
    } catch (error) {
      console.error('Error deleting:', error);
    } finally {
      setSaving(false);
    }
  };

  const togglePrimary = async (id: string) => {
    setSaving(true);
    try {
      const updatedData = contactInfo.map(item => {
        // If we're setting this item as primary, unset all others of the same type
        if (item.id === id) {
          return { ...item, isPrimary: !item.isPrimary };
        } else if (item.type === contactInfo.find(c => c.id === id)?.type) {
          return { ...item, isPrimary: false };
        }
        return item;
      });

      const response = await fetch('/api/contact-info', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      });

      if (response.ok) {
        setContactInfo(updatedData);
      }
    } catch (error) {
      console.error('Error updating primary status:', error);
    } finally {
      setSaving(false);
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'email': return 'بريد إلكتروني';
      case 'phone': return 'هاتف';
      case 'address': return 'عنوان';
      case 'website': return 'موقع ويب';
      default: return type;
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
            إدارة معلومات الاتصال
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            قم بإدارة معلومات الاتصال الخاصة بك (البريد الإلكتروني، الهاتف، العنوان)
          </p>
        </div>
        
        <Button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          إضافة معلومة جديدة
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
            إضافة معلومة اتصال جديدة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <select
              value={newItem.type}
              onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              aria-label="نوع معلومة الاتصال"
            >
              {contactTypes.map(type => (
                <option key={type} value={type}>
                  {getTypeLabel(type)}
                </option>
              ))}
            </select>
            
            <input
              type="text"
              placeholder="القيمة (البريد الإلكتروني، رقم الهاتف، إلخ)"
              value={newItem.value}
              onChange={(e) => setNewItem({ ...newItem, value: e.target.value })}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            
            <input
              type="text"
              placeholder="التسمية"
              value={newItem.label}
              onChange={(e) => setNewItem({ ...newItem, label: e.target.value })}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            
            <select
              value={newItem.lang}
              onChange={(e) => setNewItem({ ...newItem, lang: e.target.value })}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              aria-label="اللغة"
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
            
            <div className="flex gap-2">
              <Button
                onClick={handleAdd}
                disabled={saving || !newItem.type || !newItem.value || !newItem.label}
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

      {/* Contact Info List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  النوع
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  القيمة
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  التسمية
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  اللغة
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  أساسي
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {contactInfo.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  {editingId === item.id ? (
                    <>
                      <td className="px-6 py-4">
                        <select
                          value={editForm.type}
                          onChange={(e) => setEditForm({ ...editForm, type: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                          aria-label="نوع معلومة الاتصال"
                        >
                          {contactTypes.map(type => (
                            <option key={type} value={type}>
                              {getTypeLabel(type)}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          value={editForm.value}
                          onChange={(e) => setEditForm({ ...editForm, value: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                          placeholder="القيمة"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          value={editForm.label}
                          onChange={(e) => setEditForm({ ...editForm, label: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                          placeholder="التسمية"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={editForm.lang}
                          onChange={(e) => setEditForm({ ...editForm, lang: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                          aria-label="اللغة"
                        >
                          {languages.map(lang => (
                            <option key={lang.code} value={lang.code}>
                              {lang.name}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={editForm.isPrimary}
                            onChange={(e) => setEditForm({ ...editForm, isPrimary: e.target.checked })}
                            className="mr-2"
                            aria-label="معلومة أساسية"
                          />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {editForm.isPrimary ? 'أساسي' : 'عادي'}
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
                          {getTypeLabel(item.type)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                        {item.type === 'email' ? (
                          <a href={`mailto:${item.value}`} className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                            {item.value}
                          </a>
                        ) : item.type === 'phone' ? (
                          <a href={`tel:${item.value}`} className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                        {item.label}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-gray-700 dark:text-gray-300">
                          {languages.find(l => l.code === item.lang)?.name || item.lang}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => togglePrimary(item.id)}
                          className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            item.isPrimary 
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                          }`}
                        >
                          <Star className={`w-3 h-3 ${item.isPrimary ? 'fill-current' : ''}`} />
                          {item.isPrimary ? 'أساسي' : 'عادي'}
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

      {contactInfo.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            لا توجد معلومات اتصال حالياً
          </p>
        </div>
      )}
    </div>
  );
}
