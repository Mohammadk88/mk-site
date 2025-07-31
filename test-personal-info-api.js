async function testPersonalInfoAPI() {
  try {
    console.log('Testing Personal Info API...');
    
    // Test GET request
    const response = await fetch('http://localhost:3000/api/personal-info');
    const data = await response.json();
    
    console.log('API Response Status:', response.status);
    console.log('API Response Data:', JSON.stringify(data, null, 2));
    
    if (data === null) {
      console.log('✅ API correctly returns null when no data exists');
    } else if (typeof data === 'object' && !Array.isArray(data)) {
      console.log('✅ API correctly returns a single object (not an array)');
      console.log('✅ Data structure looks correct for the new implementation');
    } else {
      console.log('❌ Unexpected data structure');
    }
    
  } catch (error) {
    console.error('❌ Error testing API:', error);
  }
}

testPersonalInfoAPI();
