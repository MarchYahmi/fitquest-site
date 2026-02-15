'use client';

import { useState } from 'react';
import { config } from '../lib/config';

export default function PartnerForm({ t }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch(config.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
          _subject: `FitQuest Partner Request - ${formData.organization}`
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', organization: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="partner" className="py-20 px-6 bg-neutral-900">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-light mb-4">{t.organizers.title}</h2>
          <p className="text-white/50">{t.organizers.subtitle}</p>
        </div>

        {formStatus === 'success' ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">✓</div>
            <p className="text-green-400">{t.organizers.form.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.organizers.form.name}
                required
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-orange-500 transition"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.organizers.form.email}
                required
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-orange-500 transition"
              />
            </div>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder={t.organizers.form.organization}
              required
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-orange-500 transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.organizers.form.message}
              rows={4}
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-orange-500 transition resize-none"
            />

            {formStatus === 'error' && (
              <p className="text-red-400 text-sm">{t.organizers.form.error}</p>
            )}

            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full py-4 bg-orange-500 text-white font-medium rounded-xl hover:bg-orange-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === 'sending' ? '...' : t.organizers.form.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
