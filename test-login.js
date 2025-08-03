const fetch = require('node-fetch')

async function testLogin() {
  try {
    console.log('🧪 Testing admin login...')
    
    const response = await fetch('http://localhost:3000/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'admin@mohammadkfelati.com',
        password: 'admin123'
      })
    })

    const data = await response.json()
    
    if (response.ok) {
      console.log('✅ Login successful!')
      console.log('Admin user:', data.admin)
    } else {
      console.log('❌ Login failed:', data.error)
    }
  } catch (error) {
    console.error('❌ Test error:', error.message)
  }
}

testLogin()
