import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Users, Trash2, LogOut, Calendar, Phone } from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    // Check auth
    if (sessionStorage.getItem('isAdmin') !== 'true') {
      navigate('/admin/login');
      return;
    }

    // Load leads
    const storedLeads = JSON.parse(localStorage.getItem('siddhi_leads') || '[]');
    setLeads(storedLeads);
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('isAdmin');
    navigate('/admin/login');
  };

  const handleClearLeads = () => {
    if (window.confirm('Are you sure you want to delete all leads? This cannot be undone.')) {
      localStorage.removeItem('siddhi_leads');
      setLeads([]);
    }
  };

  const handleDeleteLead = (id) => {
    if (window.confirm('Delete this lead?')) {
      const updatedLeads = leads.filter(l => l.id !== id);
      localStorage.setItem('siddhi_leads', JSON.stringify(updatedLeads));
      setLeads(updatedLeads);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Siddhi Coaching</title>
      </Helmet>

      <div className="min-h-screen bg-cream pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-heading font-bold text-navy">Leads Dashboard</h1>
              <p className="text-gray-500 mt-1">Manage inquiries and admission requests</p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleClearLeads}
                className="flex items-center gap-2 bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <Trash2 size={16} /> Clear All
              </button>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 bg-navy text-white hover:bg-navy/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <Users size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Total Leads</p>
                <p className="text-2xl font-bold text-navy">{leads.length}</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Users size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Admission Enquiries</p>
                <p className="text-2xl font-bold text-navy">{leads.filter(l => l.source === 'Admissions').length}</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                <Users size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Contact Form</p>
                <p className="text-2xl font-bold text-navy">{leads.filter(l => l.source === 'Contact').length}</p>
              </div>
            </div>
          </div>

          {/* Leads Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {leads.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                  <Users size={32} />
                </div>
                <h3 className="text-lg font-medium text-navy">No leads found</h3>
                <p className="text-gray-500 mt-1">When users submit forms, they will appear here.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 text-gray-600 border-b border-gray-100">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Date & Source</th>
                      <th className="px-6 py-4 font-semibold">Student & Parent</th>
                      <th className="px-6 py-4 font-semibold">Contact Info</th>
                      <th className="px-6 py-4 font-semibold">Course Details</th>
                      <th className="px-6 py-4 font-semibold">Message</th>
                      <th className="px-6 py-4 font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar size={14} className="text-gray-400" />
                            <span className="text-gray-600">{formatDate(lead.date)}</span>
                          </div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            lead.source === 'Admissions' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                          }`}>
                            {lead.source}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-semibold text-navy">{lead.studentName}</div>
                          {lead.parentName !== 'N/A' && <div className="text-gray-500 text-xs mt-1">Parent: {lead.parentName}</div>}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <a href={`tel:${lead.phone}`} className="flex items-center gap-1.5 text-navy hover:text-saffron transition-colors">
                            <Phone size={14} />
                            {lead.phone}
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          {lead.source === 'Admissions' ? (
                            <div className="space-y-1">
                              <div className="text-xs"><span className="text-gray-400">Class:</span> <span className="font-medium text-navy">{lead.class} ({lead.board})</span></div>
                              <div className="text-xs"><span className="text-gray-400">Batch:</span> <span className="font-medium text-navy">{lead.batch}</span></div>
                            </div>
                          ) : (
                            <span className="text-gray-400 italic text-xs">N/A</span>
                          )}
                        </td>
                        <td className="px-6 py-4 min-w-[200px] max-w-[300px]">
                          <p className="text-gray-600 text-xs truncate" title={lead.message}>
                            {lead.message || <span className="italic text-gray-400">No message</span>}
                          </p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <button 
                            onClick={() => handleDeleteLead(lead.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1.5 rounded-lg hover:bg-red-50"
                            title="Delete Lead"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
