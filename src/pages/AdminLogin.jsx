import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Lock, User } from 'lucide-react';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      sessionStorage.setItem('isAdmin', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login | Siddhi Coaching Classes</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-cream px-4 pt-24 pb-12">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-navy rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg">
              <Lock className="text-saffron w-8 h-8" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-navy">Admin Portal</h2>
            <p className="text-gray-500 text-sm mt-2">Sign in to manage leads and settings</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="bg-red-50 text-red-500 text-sm p-3 rounded-lg text-center border border-red-100">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="pl-10 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy" 
                  placeholder="Enter username" 
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="pl-10 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy" 
                  placeholder="Enter password" 
                  required
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-navy text-white font-heading font-semibold py-3 rounded-xl hover:bg-navy/90 transition-colors shadow-md mt-2"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
