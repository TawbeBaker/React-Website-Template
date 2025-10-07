'use client';

import { useEffect, useState } from 'react';

export default function ThemeDebug() {
  const [htmlClass, setHtmlClass] = useState('');
  const [bg, setBg] = useState('');
  const [stored, setStored] = useState('');

  useEffect(() => {
    function update() {
      try {
        const html = document.documentElement;
        const body = document.body;
        setHtmlClass(html.className || '(none)');
        const comp = window.getComputedStyle(body).backgroundColor;
        setBg(comp);
        setStored(localStorage.getItem('baker-tech-theme') || '(none)');
      } catch (e) {
        // ignore
      }
    }

    update();
    const html = document.documentElement;
    const obs = new MutationObserver(() => update());
    obs.observe(html, { attributes: true, attributeFilter: ['class'] });

    // also poll for safety
    const t = setInterval(update, 1000);
    return () => {
      obs.disconnect();
      clearInterval(t);
    };
  }, []);

  const setLight = () => {
    localStorage.setItem('baker-tech-theme', 'light');
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    location.reload();
  };

  const setDark = () => {
    localStorage.setItem('baker-tech-theme', 'dark');
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    location.reload();
  };

  const clearStorage = () => {
    localStorage.removeItem('baker-tech-theme');
    location.reload();
  };

  return (
    <div style={{position: 'fixed', right: 12, bottom: 12, zIndex: 9999, background: 'rgba(0,0,0,0.6)', color: 'white', padding: '10px 12px', borderRadius: 8, fontSize: 12, fontFamily: 'sans-serif'}}>
      <div style={{marginBottom: 6}}><strong>Theme Debug</strong></div>
      <div>html.class: <code style={{color: '#ffd'}}>{htmlClass}</code></div>
      <div>computed bg: <code style={{color: '#ffd'}}>{bg}</code></div>
      <div>stored: <code style={{color: '#ffd'}}>{stored}</code></div>
      <div style={{marginTop: 8, display: 'flex', gap: 6}}>
        <button onClick={setLight} style={{padding: '6px 8px', borderRadius:6, border:0, cursor:'pointer'}}>Set Light</button>
        <button onClick={setDark} style={{padding: '6px 8px', borderRadius:6, border:0, cursor:'pointer'}}>Set Dark</button>
        <button onClick={clearStorage} style={{padding: '6px 8px', borderRadius:6, border:0, cursor:'pointer'}}>Clear</button>
      </div>
    </div>
  );
}
