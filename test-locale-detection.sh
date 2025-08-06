#!/bin/bash

# Test script for language detection and redirection
echo "🌐 Testing Language Detection and Redirection"
echo "=============================================="

BASE_URL="http://localhost:3000"

echo -e "\n📝 Test 1: Root path without Accept-Language header"
curl -I "$BASE_URL/" 2>/dev/null | grep -E "(HTTP|Location)"

echo -e "\n📝 Test 2: Root path with English preference"
curl -I -H "Accept-Language: en-US,en;q=0.9" "$BASE_URL/" 2>/dev/null | grep -E "(HTTP|Location)"

echo -e "\n📝 Test 3: Root path with Arabic preference"
curl -I -H "Accept-Language: ar-SA,ar;q=0.9,en;q=0.8" "$BASE_URL/" 2>/dev/null | grep -E "(HTTP|Location)"

echo -e "\n📝 Test 4: Root path with Turkish preference"
curl -I -H "Accept-Language: tr-TR,tr;q=0.9,en;q=0.8" "$BASE_URL/" 2>/dev/null | grep -E "(HTTP|Location)"

echo -e "\n📝 Test 5: Root path with unsupported language (French)"
curl -I -H "Accept-Language: fr-FR,fr;q=0.9" "$BASE_URL/" 2>/dev/null | grep -E "(HTTP|Location)"

echo -e "\n📝 Test 6: Sub-path without locale"
curl -I -H "Accept-Language: ar-SA,ar;q=0.9" "$BASE_URL/about" 2>/dev/null | grep -E "(HTTP|Location)"

echo -e "\n📝 Test 7: Admin path (should not redirect)"
curl -I "$BASE_URL/admin" 2>/dev/null | grep -E "(HTTP|Location)"

echo -e "\n📝 Test 8: API path (should not redirect)"
curl -I "$BASE_URL/api/projects" 2>/dev/null | grep -E "(HTTP|Location)"

echo -e "\n✅ Testing completed!"
echo "Expected behavior:"
echo "- Tests 1, 5: Redirect to /en (default)"
echo "- Test 2: Redirect to /en (English)"
echo "- Test 3: Redirect to /ar (Arabic)"
echo "- Test 4: Redirect to /tr (Turkish)"
echo "- Test 6: Redirect to /ar/about"
echo "- Tests 7, 8: No redirect (admin/api paths)"
