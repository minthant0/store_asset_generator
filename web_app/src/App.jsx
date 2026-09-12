import React, { useState, useEffect, useRef } from 'react';

// --- SVG Icons ---
const IconSettings = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconSparkles = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
  </svg>
);
const IconDownload = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
  </svg>
);
const IconPlus = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);
const IconChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
);
const IconChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
);
const IconUpload = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>
  </svg>
);
const IconEye = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
);
const IconEyeOff = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
);
const IconClose = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);
const IconSpinner = () => (
  <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
  </svg>
);
const IconZoomIn = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
  </svg>
);
const IconZoomOut = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/>
  </svg>
);
const IconMaximize = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
  </svg>
);
const IconFolder = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
);
const IconImage = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
  </svg>
);

const loadJSZip = async () => {
  if (window.JSZip) return window.JSZip;
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
    script.onload = () => resolve(window.JSZip);
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const PRESETS = {
  'play-feature': { name: 'Play Store Feature Graphic', width: 1024, height: 500 },
  'ios-6.5': { name: 'App Store (6.5" iPhone)', width: 1242, height: 2688 },
  'ios-5.5': { name: 'App Store (5.5" iPhone)', width: 1242, height: 2208 },
  'android-phone': { name: 'Play Store (Phone)', width: 1080, height: 1920 }
};

const LAYOUT_COMPOSITIONS = [
  { id: 'split-right', title: 'Split Right', desc: 'Text Left, Device Right', tag: 'Popular' },
  { id: 'split-left', title: 'Split Left', desc: 'Text Right, Device Left', tag: 'Classic' },
  { id: 'dual', title: 'Dual Devices', desc: 'Overlapping 2-Device Showcase', tag: 'Popular' },
  { id: 'hero-float', title: 'Hero Float', desc: 'Floating Dramatic 3D Angle', tag: 'Trending' },
  { id: 'isometric', title: 'Isometric 3D', desc: 'Deep Angled Dynamic Tilt', tag: '3D' },
  { id: 'tilted-cascade', title: 'Tilted Cascade', desc: 'Angled Cutoff Bleed Style', tag: 'Tech' },
  { id: 'centered-minimal', title: 'Centered Clean', desc: 'Large Centered Focus Hero', tag: 'Clean' },
  { id: 'stack', title: 'Vertical Stack', desc: 'Standard Portrait Feed Flow', tag: 'Standard' }
];

const COLOR_PALETTES = [
  { name: 'Google Play Indigo', c1: '#4338ca', c2: '#0284c7', angle: 'horizontal' },
  { name: 'Feature Sunset', c1: '#ea580c', c2: '#db2777', angle: 'diagonal' },
  { name: 'Emerald Tech', c1: '#065f46', c2: '#0d9488', angle: 'diagonal' },
  { name: 'Dark Cyber', c1: '#0f172a', c2: '#1e1b4b', angle: 'vertical' },
  { name: 'Neon Violet', c1: '#581c87', c2: '#2563eb', angle: 'horizontal' },
  { name: 'Crimson Rose', c1: '#881337', c2: '#e11d48', angle: 'diagonal' },
  { name: 'Pure Dark', c1: '#18181b', c2: '#09090b', angle: 'vertical' }
];

const INITIAL_SCREENS = [
  {
    id: 'screen-1',
    label: '1. Welcome',
    title: 'Your Amazing\nApp Name',
    subtitle: 'Showcase your core value proposition\nand hook users immediately.',
    titleColor: '#ffffff',
    titleSize: 64,
    subtitleColor: '#e0e7ff',
    subtitleSize: 30,
    layout: 'split-right',
    bgType: 'gradient',
    bgColor1: '#4338ca',
    bgColor2: '#0284c7',
    bgAngle: 'diagonal',
    deviceType: 'iphone',
    deviceScale: 1.1,
    yOffset: 30,
    screenshot: null,
    screenshot2: null
  },
  {
    id: 'screen-2',
    label: '2. Features',
    title: 'Highlight Key\nFeatures',
    subtitle: 'Explain how your app solves\nproblems with beautiful visuals.',
    titleColor: '#ffffff',
    titleSize: 64,
    subtitleColor: '#fed7aa',
    subtitleSize: 30,
    layout: 'split-right',
    bgType: 'gradient',
    bgColor1: '#ea580c',
    bgColor2: '#db2777',
    bgAngle: 'diagonal',
    deviceType: 'iphone',
    deviceScale: 1.1,
    yOffset: 30,
    screenshot: null,
    screenshot2: null
  },
  {
    id: 'screen-3',
    label: '3. Dashboard',
    title: 'Track Your\nProgress',
    subtitle: 'Keep users engaged with clear\nanalytics and data views.',
    titleColor: '#ffffff',
    titleSize: 64,
    subtitleColor: '#ccfbf1',
    subtitleSize: 30,
    layout: 'split-right',
    bgType: 'gradient',
    bgColor1: '#065f46',
    bgColor2: '#0d9488',
    bgAngle: 'diagonal',
    deviceType: 'iphone',
    deviceScale: 1.1,
    yOffset: 30,
    screenshot: null,
    screenshot2: null
  }
];

export default function App() {
  const canvasRef = useRef(null);
  const [screens, setScreens] = useState(INITIAL_SCREENS);
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('mockup');
  const [presetKey, setPresetKey] = useState('play-feature');
  const [width, setWidth] = useState(PRESETS['play-feature'].width);
  const [height, setHeight] = useState(PRESETS['play-feature'].height);

  // Settings (Gemini & Download Location)
  const [settingsTab, setSettingsTab] = useState('download'); // 'download' | 'gemini'
  const [downloadPath, setDownloadPath] = useState(() => localStorage.getItem('download_path_location') || 'Downloads/StoreMockups');
  const [autoSubfolder, setAutoSubfolder] = useState(() => localStorage.getItem('download_auto_subfolder') !== 'false');
  const [directoryHandle, setDirectoryHandle] = useState(null);
  const [dirName, setDirName] = useState(() => localStorage.getItem('download_dir_name') || '');

  // Gemini Settings
  const [geminiApiKey, setGeminiApiKey] = useState(() => localStorage.getItem('gemini_api_key') || '');
  const [geminiModel, setGeminiModel] = useState(() => localStorage.getItem('gemini_model') || 'gemini-1.5-flash');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const [testStatus, setTestStatus] = useState(null);
  const [testMessage, setTestMessage] = useState('');

  // Interactive View Screen Space (Zoom, Pan & Image Add)
  const [zoomLevel, setZoomLevel] = useState(1.0); // 0.25 to 3.0
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isDragOverCanvas, setIsDragOverCanvas] = useState(false);
  const fileInputRef = useRef(null);
  const viewContainerRef = useRef(null);

  // AI Generation states
  const [aiAppPrompt, setAiAppPrompt] = useState('Habit Tracker with Daily Streaks & Analytics');
  const [isGeneratingScreensAI, setIsGeneratingScreensAI] = useState(false);
  const [isGeneratingDescAI, setIsGeneratingDescAI] = useState(false);
  const [aiToast, setAiToast] = useState('');

  // Descriptions
  const [appName, setAppName] = useState('ZenFlow');
  const [shortDescMode, setShortDescMode] = useState('play-80');
  const [shortDescription, setShortDescription] = useState('Design stunning App Store & Google Play screenshots & mockups in seconds.');
  const [fullDescription, setFullDescription] = useState(
`🚀 Transform Your App Store Presence in Minutes!

ZenFlow is the ultimate mobile app asset generator built specifically for indie creators, developers, and mobile product teams. Say goodbye to complicated graphic software—craft high-converting screenshots, feature graphics, and store copy effortlessly.

✨ KEY FEATURES:
• 8 Modern Layout Compositions: Hero Float, Isometric 3D, Split-Screen & Classic Stacks
• Google Play Store Feature Graphic generator (1024x500) with dynamic lighting
• Multi-device Mockup Support: iPhone 15 Pro, Android punch-hole & dual device displays
• Batch Export to ZIP: Download complete store screenshot collections at native resolutions

⚡ WHY CHOOSE ZENFLOW?
Designed to help your app convert visitors into installs. Boost your ASO with captivating visual banners and sharp, professional previews.

Ready to give your app the spotlight it deserves?
Tap Install and launch your next high-converting store listing today!`
  );

  const [isExportingAll, setIsExportingAll] = useState(false);
  const [copiedShort, setCopiedShort] = useState(false);
  const [copiedFull, setCopiedFull] = useState(false);

  const current = screens[currentScreenIndex] || screens[0];

  const updateCurrentScreen = (updates) => {
    setScreens(prev => {
      const next = [...prev];
      next[currentScreenIndex] = { ...next[currentScreenIndex], ...updates };
      return next;
    });
  };

  const handlePickDirectory = async () => {
    if ('showDirectoryPicker' in window) {
      try {
        const handle = await window.showDirectoryPicker();
        setDirectoryHandle(handle);
        setDirName(handle.name);
        setDownloadPath(handle.name);
        localStorage.setItem('download_dir_name', handle.name);
        localStorage.setItem('download_path_location', handle.name);
        setTestStatus('success');
        setTestMessage(`Folder linked: ${handle.name}`);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setTestStatus('error');
          setTestMessage(err.message || 'Folder selection failed');
        }
      }
    } else {
      setTestStatus('error');
      setTestMessage('Direct folder picker not supported in this browser. Enter path manually below.');
    }
  };

  const handleSaveSettings = () => {
    localStorage.setItem('gemini_api_key', geminiApiKey.trim());
    localStorage.setItem('gemini_model', geminiModel);
    localStorage.setItem('download_path_location', downloadPath.trim());
    localStorage.setItem('download_auto_subfolder', autoSubfolder ? 'true' : 'false');
    setTestStatus('success');
    setTestMessage('Settings saved successfully!');
    setTimeout(() => {
      setIsSettingsOpen(false);
      setTestStatus(null);
      setTestMessage('');
    }, 1000);
  };


  const handleTestGeminiKey = async () => {
    const key = geminiApiKey.trim();
    if (!key) {
      setTestStatus('error');
      setTestMessage('Please enter an API key first.');
      return;
    }
    setTestStatus('testing');
    setTestMessage('Testing connection to Gemini API...');
    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${geminiModel}:generateContent?key=${key}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: 'Respond with VALID only.' }] }]
        })
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error.message || 'Invalid API Key');
      localStorage.setItem('gemini_api_key', key);
      localStorage.setItem('gemini_model', geminiModel);
      setTestStatus('success');
      setTestMessage('Connected! Gemini API key is valid.');
    } catch (err) {
      setTestStatus('error');
      setTestMessage(err.message || 'Failed to authenticate.');
    }
  };

  const callGemini = async (prompt) => {
    const key = geminiApiKey.trim();
    if (!key) throw new Error('NO_KEY');
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${geminiModel}:generateContent?key=${key}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
      })
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error.message || 'Gemini error');
    return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  };

  const handleGenerateScreensAI = async () => {
    setIsGeneratingScreensAI(true);
    const promptConcept = aiAppPrompt.trim() || 'Productivity & Focus App';
    const isFeature = presetKey === 'play-feature';

    try {
      let generatedData = null;
      if (geminiApiKey.trim()) {
        const sysPrompt = `You are an App Store & Google Play marketing designer.
Generate a cohesive 3-screen screenshot series configuration for app: "${promptConcept}".
Return STRICT JSON ONLY, no markdown ticks, no commentary. Format:
{
  "appName": "Short App Name",
  "screens": [
    {
      "label": "1. Welcome",
      "title": "Hooky Headline\\nNext Line",
      "subtitle": "Benefit-driven subtitle under 12 words",
      "bgColor1": "#hex1",
      "bgColor2": "#hex2",
      "bgAngle": "diagonal",
      "layout": "split-right"
    },
    {
      "label": "2. Core Feature",
      "title": "Action Headline\\nSecond Line",
      "subtitle": "Key feature explanation",
      "bgColor1": "#hex1",
      "bgColor2": "#hex2",
      "bgAngle": "diagonal",
      "layout": "hero-float"
    },
    {
      "label": "3. Insights",
      "title": "Track Progress\\nIn Real Time",
      "subtitle": "Outcome achieved with app",
      "bgColor1": "#hex1",
      "bgColor2": "#hex2",
      "bgAngle": "diagonal",
      "layout": "isometric"
    }
  ]
}`;
        const raw = await callGemini(sysPrompt);
        const cleaned = raw.replace(/```json/gi, '').replace(/```/g, '').trim();
        generatedData = JSON.parse(cleaned);
      } else {
        await new Promise(r => setTimeout(r, 600));
        const cleanName = promptConcept.split(' ')[0] || 'ZenFlow';
        generatedData = {
          appName: cleanName,
          screens: [
            {
              label: '1. Welcome',
              title: `${cleanName}\nMade Simple`,
              subtitle: `Master your daily ${promptConcept.toLowerCase()} with zero friction.`,
              bgColor1: '#4338ca',
              bgColor2: '#0284c7',
              bgAngle: 'diagonal',
              layout: isFeature ? 'split-right' : 'hero-float'
            },
            {
              label: '2. Features',
              title: `Powerful Tools\nAt Your Fingertips`,
              subtitle: 'Streamline actions with lightning-fast intuitive controls.',
              bgColor1: '#ea580c',
              bgColor2: '#db2777',
              bgAngle: 'diagonal',
              layout: isFeature ? 'split-right' : 'isometric'
            },
            {
              label: '3. Insights',
              title: `Visualize Your\nReal Progress`,
              subtitle: 'Actionable clarity with automated intelligent stats.',
              bgColor1: '#065f46',
              bgColor2: '#0d9488',
              bgAngle: 'diagonal',
              layout: isFeature ? 'dual' : 'stack'
            }
          ]
        };
      }

      if (generatedData?.screens) {
        if (generatedData.appName) setAppName(generatedData.appName);
        setScreens(prev => {
          const next = [...prev];
          generatedData.screens.forEach((aiScr, i) => {
            const tSize = isFeature ? 64 : 100;
            const sSize = isFeature ? 30 : 50;
            if (next[i]) {
              next[i] = {
                ...next[i],
                label: aiScr.label || next[i].label,
                title: aiScr.title || next[i].title,
                subtitle: aiScr.subtitle || next[i].subtitle,
                bgColor1: aiScr.bgColor1 || next[i].bgColor1,
                bgColor2: aiScr.bgColor2 || next[i].bgColor2,
                bgAngle: aiScr.bgAngle || 'diagonal',
                layout: aiScr.layout || 'split-right',
                titleSize: tSize,
                subtitleSize: sSize
              };
            }
          });
          return next;
        });
        setAiToast(`✨ Auto-generated 3 screens for "${promptConcept}"!`);
        setTimeout(() => setAiToast(''), 3500);
      }
    } catch (err) {
      console.error(err);
      setAiToast(`⚠️ Note: ${!geminiApiKey.trim() ? 'Add Gemini API Key in Settings for live AI.' : err.message}`);
      setTimeout(() => setAiToast(''), 4500);
    }
    setIsGeneratingScreensAI(false);
  };

  const handleGenerateDescAI = async () => {
    setIsGeneratingDescAI(true);
    const name = appName.trim() || 'ZenFlow';

    try {
      if (geminiApiKey.trim()) {
        const prompt = `You are a premier App Store Optimization (ASO) writer.
Write high-converting metadata for mobile app "${name}". Concept: ${aiAppPrompt}.
Screens showcase: ${screens.map(s => s.title.replace(/\n/g, ' ')).join(', ')}.

Return STRICT JSON ONLY, no extra keys, no markdown ticks:
{
  "shortPlay": "Punchy hook strictly under 80 characters",
  "subApple": "Apple subtitle strictly under 30 characters",
  "promoApple": "Apple promo text strictly under 170 characters",
  "fullDescription": "Complete 4000-char max App Store / Play Store long description with emoji bulleted features, Why Users Love It, and Call to Action."
}`;
        const raw = await callGemini(prompt);
        const cleaned = raw.replace(/```json/gi, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(cleaned);

        if (parsed.shortPlay) {
          if (shortDescMode === 'play-80') setShortDescription(parsed.shortPlay.slice(0, 80));
          else if (shortDescMode === 'ios-30') setShortDescription((parsed.subApple || parsed.shortPlay).slice(0, 30));
          else setShortDescription((parsed.promoApple || parsed.shortPlay).slice(0, 170));
        }
        if (parsed.fullDescription) setFullDescription(parsed.fullDescription);

        setAiToast('✨ Generated high-converting store description!');
        setTimeout(() => setAiToast(''), 3500);
      } else {
        await new Promise(r => setTimeout(r, 600));
        setShortDescription(`Boost your daily performance with ${name} — fast, smart, and delightfully simple.`);
        setFullDescription(
`🚀 Dominate Your Goals with ${name}!

${name} is built from the ground up to give you unmatched speed, clarity, and control. Designed for high achievers who demand better results with less friction.

✨ UNBEATABLE HIGHLIGHTS:
• ⚡ Lightning-Fast Performance: Zero lag, instant responsive design.
• 🎯 Focused & Frictionless: Built with a modern, distraction-free aesthetic.
• 🔒 Safe & 100% Private: Your confidential data stays on your device.
• 📱 Cross-Platform Flow: Designed for modern iOS & Android devices.

💡 WHY USERS LOVE ${name.toUpperCase()}:
"${name} completely redefined how I get things done every single day. A must-download!" - Tech Review

🎉 WHAT'S NEW IN THIS RELEASE:
- Added 3D perspective graphics and updated interface
- Performance enhancements for ultra-smooth rendering

Ready to experience a better way forward?
Tap Install and unlock the power of ${name} today!`
        );
        setAiToast('✨ Applied smart ASO copy. (Tip: Add Gemini Key in Settings for live AI)');
        setTimeout(() => setAiToast(''), 4000);
      }
    } catch (err) {
      console.error(err);
      setAiToast(`⚠️ Failed to generate: ${err.message}`);
      setTimeout(() => setAiToast(''), 3500);
    }
    setIsGeneratingDescAI(false);
  };

  const renderScreenToCanvas = (ctx, scr, targetW, targetH) => {
    ctx.clearRect(0, 0, targetW, targetH);

    // 1. BG
    if (scr.bgType === 'solid') {
      ctx.fillStyle = scr.bgColor1;
      ctx.fillRect(0, 0, targetW, targetH);
    } else {
      let grad;
      if (scr.bgAngle === 'horizontal') grad = ctx.createLinearGradient(0, 0, targetW, 0);
      else if (scr.bgAngle === 'vertical') grad = ctx.createLinearGradient(0, 0, 0, targetH);
      else grad = ctx.createLinearGradient(0, 0, targetW, targetH);
      grad.addColorStop(0, scr.bgColor1);
      grad.addColorStop(1, scr.bgColor2);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, targetW, targetH);
    }

    const glowGrad = ctx.createRadialGradient(targetW * 0.75, targetH * 0.35, 20, targetW * 0.75, targetH * 0.35, targetW * 0.65);
    glowGrad.addColorStop(0, 'rgba(255, 255, 255, 0.14)');
    glowGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = glowGrad;
    ctx.fillRect(0, 0, targetW, targetH);

    let textX, textY, deviceX, deviceY, baseDeviceW, textAlign, deviceAngle = 0;
    if (scr.layout === 'stack') {
      textX = targetW / 2; textY = targetH * 0.11; textAlign = 'center';
      deviceX = targetW / 2; deviceY = targetH * 0.65 + (scr.yOffset * 3);
      baseDeviceW = targetW * 0.75 * scr.deviceScale;
    } else if (scr.layout === 'split-left') {
      textX = targetW * 0.92; textY = targetH / 2 - (scr.titleSize * 1.1); textAlign = 'right';
      deviceX = targetW * 0.28; deviceY = targetH / 2 + (scr.yOffset * 2);
      baseDeviceW = targetH * 0.58 * scr.deviceScale;
    } else if (scr.layout === 'split-right') {
      textX = targetW * 0.08; textY = targetH / 2 - (scr.titleSize * 1.1); textAlign = 'left';
      deviceX = targetW * 0.76; deviceY = targetH / 2 + (scr.yOffset * 2);
      baseDeviceW = targetH * 0.60 * scr.deviceScale;
    } else if (scr.layout === 'dual') {
      textX = targetW * 0.08; textY = targetH / 2 - (scr.titleSize * 1.1); textAlign = 'left';
      deviceX = targetW * 0.65; deviceY = targetH / 2 + (scr.yOffset * 2);
      baseDeviceW = targetH * 0.52 * scr.deviceScale;
    } else if (scr.layout === 'hero-float') {
      const isLand = targetW > targetH;
      textX = isLand ? targetW * 0.08 : targetW / 2;
      textY = isLand ? targetH / 2 - (scr.titleSize * 1.1) : targetH * 0.10;
      textAlign = isLand ? 'left' : 'center';
      deviceX = isLand ? targetW * 0.74 : targetW * 0.5;
      deviceY = isLand ? targetH * 0.52 + (scr.yOffset * 2) : targetH * 0.64 + (scr.yOffset * 3);
      baseDeviceW = (isLand ? targetH * 0.65 : targetW * 0.82) * scr.deviceScale;
      deviceAngle = 9;
    } else if (scr.layout === 'isometric') {
      const isLand = targetW > targetH;
      textX = isLand ? targetW * 0.08 : targetW / 2;
      textY = isLand ? targetH / 2 - (scr.titleSize * 1.1) : targetH * 0.09;
      textAlign = isLand ? 'left' : 'center';
      deviceX = isLand ? targetW * 0.75 : targetW * 0.54;
      deviceY = isLand ? targetH * 0.54 + (scr.yOffset * 2) : targetH * 0.63 + (scr.yOffset * 3);
      baseDeviceW = (isLand ? targetH * 0.62 : targetW * 0.76) * scr.deviceScale;
      deviceAngle = -18;
    } else if (scr.layout === 'tilted-cascade') {
      const isLand = targetW > targetH;
      textX = isLand ? targetW * 0.08 : targetW / 2;
      textY = isLand ? targetH / 2 - (scr.titleSize * 1.1) : targetH * 0.09;
      textAlign = isLand ? 'left' : 'center';
      deviceX = isLand ? targetW * 0.82 : targetW * 0.62;
      deviceY = isLand ? targetH * 0.60 + (scr.yOffset * 2) : targetH * 0.68 + (scr.yOffset * 3);
      baseDeviceW = (isLand ? targetH * 0.75 : targetW * 0.90) * scr.deviceScale;
      deviceAngle = 14;
    } else {
      textX = targetW / 2; textY = targetH * 0.10; textAlign = 'center';
      deviceX = targetW / 2; deviceY = targetH * 0.63 + (scr.yOffset * 3);
      baseDeviceW = targetW * 0.82 * scr.deviceScale;
    }

    const drawText = (txt, x, y, size, color, isBold) => {
      if (!txt) return 0;
      ctx.font = `${isBold ? '800' : '500'} ${size}px 'Inter', sans-serif`;
      ctx.fillStyle = color;
      ctx.textAlign = textAlign;
      ctx.textBaseline = 'top';
      const lines = txt.split(/\r?\n|\\n/);
      lines.forEach((line, i) => {
        ctx.fillText(line, x, y + (i * size * 1.25));
      });
      return lines.length * size * 1.25;
    };

    const titleH = drawText(scr.title, textX, textY, scr.titleSize, scr.titleColor, true);
    drawText(scr.subtitle, textX, textY + titleH + (scr.titleSize * 0.25), scr.subtitleSize, scr.subtitleColor, false);

    const renderDevice = (cx, cy, devW, shotImg, angleDeg = 0) => {
      ctx.save();
      ctx.translate(cx, cy);
      if (angleDeg !== 0) ctx.rotate((angleDeg * Math.PI) / 180);

      const devType = scr.deviceType || 'iphone';

      if (devType === 'none') {
        let devWCustom = devW * 1.08;
        let devH = devWCustom * 2.16;
        if (shotImg) {
          const aspect = shotImg.height / shotImg.width;
          devH = devWCustom * aspect;
        }

        ctx.shadowColor = 'rgba(0,0,0,0.55)';
        ctx.shadowBlur = targetW * 0.04;
        ctx.shadowOffsetY = targetW * 0.02;

        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(-devWCustom/2, -devH/2, devWCustom, devH, devWCustom * 0.06);
        else ctx.rect(-devWCustom/2, -devH/2, devWCustom, devH);
        ctx.clip();

        if (shotImg) {
          ctx.drawImage(shotImg, -devWCustom/2, -devH/2, devWCustom, devH);
        } else {
          ctx.fillStyle = '#1e1b4b'; ctx.fill();
          ctx.fillStyle = '#818cf8'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.font = `${devWCustom * 0.065}px sans-serif`;
          ctx.fillText('Upload Screenshot', 0, 0);
        }
        ctx.restore();
        return;
      }

      if (devType === 'iphone') {
        const devH = devW * 2.16;
        const radius = devW * 0.12;
        const bezel = devW * 0.04;

        ctx.shadowColor = 'rgba(0,0,0,0.65)';
        ctx.shadowBlur = targetW * 0.045;
        ctx.shadowOffsetY = targetW * 0.025;

        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(-devW/2, -devH/2, devW, devH, radius);
        else ctx.rect(-devW/2, -devH/2, devW, devH);
        ctx.fill();
        ctx.shadowColor = 'transparent';

        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(-devW/2 + bezel, -devH/2 + bezel, devW - bezel*2, devH - bezel*2, radius * 0.8);
        else ctx.rect(-devW/2 + bezel, -devH/2 + bezel, devW - bezel*2, devH - bezel*2);
        ctx.save();
        ctx.clip();

        if (shotImg) {
          const sw = devW - bezel*2, sh = devH - bezel*2;
          const imgAspect = shotImg.width / shotImg.height;
          const screenAspect = sw / sh;
          let drawW = sw, drawH = sh, drawX = -sw/2, drawY = -sh/2;
          if (imgAspect > screenAspect) {
            drawH = sh; drawW = sh * imgAspect; drawX = -drawW/2;
          } else {
            drawW = sw; drawH = sw / imgAspect; drawY = -drawH/2;
          }
          ctx.drawImage(shotImg, drawX, drawY, drawW, drawH);
        } else {
          ctx.fillStyle = '#18181b'; ctx.fill();
          ctx.fillStyle = '#94a3b8'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.font = `${devW * 0.065}px sans-serif`;
          ctx.fillText('Upload Mockup', 0, 0);
        }
        ctx.restore();

        ctx.fillStyle = '#020617';
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(-devW * 0.14, -devH/2 + bezel + devW * 0.02, devW * 0.28, devW * 0.075, devW * 0.038);
        ctx.fill();

      } else if (devType === 'android') {
        const devH = devW * 2.22;
        const radius = devW * 0.08;
        const bezel = devW * 0.025;

        ctx.shadowColor = 'rgba(0,0,0,0.65)';
        ctx.shadowBlur = targetW * 0.045;
        ctx.shadowOffsetY = targetW * 0.025;

        ctx.fillStyle = '#18181b';
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(-devW/2, -devH/2, devW, devH, radius);
        else ctx.rect(-devW/2, -devH/2, devW, devH);
        ctx.fill();
        ctx.shadowColor = 'transparent';

        ctx.strokeStyle = 'rgba(255,255,255,0.15)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        const screenR = radius * 0.5;
        if (ctx.roundRect) ctx.roundRect(-devW/2 + bezel, -devH/2 + bezel, devW - bezel*2, devH - bezel*2, screenR);
        else ctx.rect(-devW/2 + bezel, -devH/2 + bezel, devW - bezel*2, devH - bezel*2);
        ctx.save();
        ctx.clip();

        if (shotImg) {
          const sw = devW - bezel*2, sh = devH - bezel*2;
          const imgAspect = shotImg.width / shotImg.height;
          const screenAspect = sw / sh;
          let drawW = sw, drawH = sh, drawX = -sw/2, drawY = -sh/2;
          if (imgAspect > screenAspect) {
            drawH = sh; drawW = sh * imgAspect; drawX = -drawW/2;
          } else {
            drawW = sw; drawH = sw / imgAspect; drawY = -drawH/2;
          }
          ctx.drawImage(shotImg, drawX, drawY, drawW, drawH);
        } else {
          ctx.fillStyle = '#18181b'; ctx.fill();
          ctx.fillStyle = '#94a3b8'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.font = `${devW * 0.065}px sans-serif`;
          ctx.fillText('Upload Mockup', 0, 0);
        }
        ctx.restore();

        ctx.fillStyle = '#09090b';
        ctx.beginPath();
        ctx.arc(0, -devH/2 + bezel + devW * 0.05, devW * 0.022, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    if (scr.layout === 'dual') {
      const secondImg = scr.screenshot2 || scr.screenshot;
      renderDevice(deviceX + baseDeviceW * 0.42, deviceY + baseDeviceW * 0.12, baseDeviceW * 0.92, secondImg, 7);
      renderDevice(deviceX - baseDeviceW * 0.12, deviceY - baseDeviceW * 0.04, baseDeviceW, scr.screenshot, -5);
    } else {
      renderDevice(deviceX, deviceY, baseDeviceW, scr.screenshot, deviceAngle);
    }
  };

  useEffect(() => {
    const p = PRESETS[presetKey];
    setWidth(p.width);
    setHeight(p.height);
  }, [presetKey]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    renderScreenToCanvas(ctx, current, width, height);
  }, [current, width, height]);

  const handleDownloadCurrent = async () => {
    if (!canvasRef.current) return;
    const cleanLabel = current.label.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const fileName = `${cleanLabel}-${width}x${height}.png`;

    // Direct filesystem access if directory handle was picked
    if (directoryHandle) {
      try {
        const fileHandle = await directoryHandle.getFileHandle(fileName, { create: true });
        const writable = await fileHandle.createWritable();
        const blob = await new Promise(resolve => canvasRef.current.toBlob(resolve, 'image/png'));
        await writable.write(blob);
        await writable.close();
        setAiToast(`💾 Saved directly to ${directoryHandle.name}/${fileName}!`);
        setTimeout(() => setAiToast(''), 3500);
        return;
      } catch (err) {
        console.warn('Direct file save failed, falling back to browser download', err);
      }
    }

    const link = document.createElement('a');
    const folderPrefix = downloadPath ? `${downloadPath.replace(/[^a-z0-9_-]/gi, '_')}_` : '';
    link.download = `${folderPrefix}${fileName}`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
    setAiToast(`💾 Download started for: ${downloadPath || 'Downloads'}/${fileName}`);
    setTimeout(() => setAiToast(''), 3500);
  };

  const handleExportAllScreens = async () => {
    setIsExportingAll(true);
    try {
      const JSZipClass = await loadJSZip();
      const zip = new JSZipClass();
      const folderName = autoSubfolder ? (downloadPath ? downloadPath.split('/').pop() || `${appName}_StoreAssets` : `${appName}_StoreAssets`) : "AppStore_Screenshots";
      const folder = zip.folder(folderName);
      for (let i = 0; i < screens.length; i++) {
        const scr = screens[i];
        const off = document.createElement('canvas');
        off.width = width; off.height = height;
        const ctx = off.getContext('2d');
        renderScreenToCanvas(ctx, scr, width, height);
        const base64 = off.toDataURL('image/png').split(',')[1];
        folder.file(`screen-${i + 1}-${scr.label.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`, base64, { base64: true });
      }
      zip.file("store_descriptions.txt", `APP: ${appName}\n\nSHORT DESCRIPTION:\n${shortDescription}\n\nFULL DESCRIPTION:\n${fullDescription}\n\nTARGET DOWNLOAD PATH:\n${downloadPath || 'Default Downloads'}`);
      const blob = await zip.generateAsync({ type: 'blob' });
      const zipName = `store-package-${presetKey}.zip`;

      if (directoryHandle) {
        try {
          const fileHandle = await directoryHandle.getFileHandle(zipName, { create: true });
          const writable = await fileHandle.createWritable();
          await writable.write(blob);
          await writable.close();
          setAiToast(`💾 ZIP package saved directly into ${directoryHandle.name}!`);
          setTimeout(() => setAiToast(''), 4000);
          setIsExportingAll(false);
          return;
        } catch (err) {
          console.warn('Direct zip save failed, falling back to download link', err);
        }
      }

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      const folderPrefix = downloadPath ? `${downloadPath.replace(/[^a-z0-9_-]/gi, '_')}_` : '';
      link.download = `${folderPrefix}${zipName}`;
      link.click();
      setAiToast(`📦 Store package downloaded to: ${downloadPath || 'Downloads'}/`);
      setTimeout(() => setAiToast(''), 4000);
    } catch (e) {
      console.error(e);
      setAiToast(`Export error: ${e.message}`);
    }
    setIsExportingAll(false);
  };

  const processImageFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        updateCurrentScreen({ screenshot: img });
        setAiToast('📷 Image added to mockup!');
        setTimeout(() => setAiToast(''), 3000);
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleUploadScreenshot = (e) => {
    const file = e.target?.files ? e.target.files[0] : (e instanceof File ? e : null);
    if (file) processImageFile(file);
  };

  const handleUploadScreenshot2 = (e) => {
    const file = e.target?.files ? e.target.files[0] : null;
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        updateCurrentScreen({ screenshot2: img });
        setAiToast('📷 Secondary screenshot added!');
        setTimeout(() => setAiToast(''), 3000);
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };

  // Zoom and Pan Controls
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(3.0, +(prev + 0.15).toFixed(2)));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(0.25, +(prev - 0.15).toFixed(2)));
  };

  const handleResetZoom = () => {
    setZoomLevel(1.0);
    setPanOffset({ x: 0, y: 0 });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
    setZoomLevel(prev => {
      const next = +(prev * zoomFactor).toFixed(2);
      return Math.min(3.0, Math.max(0.25, next));
    });
  };

  const handleMouseDown = (e) => {
    if (e.button === 0 || e.button === 1) {
      setIsPanning(true);
      setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
    }
  };

  const handleMouseMove = (e) => {
    if (!isPanning) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  // Drag & drop directly onto view screen space
  const handleCanvasDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOverCanvas(true);
  };

  const handleCanvasDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOverCanvas(false);
  };

  const handleCanvasDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOverCanvas(false);
    if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        processImageFile(file);
      }
    }
  };


  return (
    <div className="flex h-screen w-full bg-gray-950 text-gray-100 font-sans overflow-hidden">
      
      {/* Toast */}
      {aiToast && (
        <div className="fixed top-4 right-4 z-50 bg-indigo-900 border border-indigo-400 text-indigo-100 px-4 py-2.5 rounded-xl shadow-2xl text-xs font-medium flex items-center gap-2">
          <span>{aiToast}</span>
        </div>
      )}

      {/* Settings Modal (Download Path & Gemini AI) */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-gray-900 border border-gray-700 w-full max-w-md rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-indigo-600/20 text-indigo-400 rounded-lg">
                  <IconSettings />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">App Settings</h2>
                  <p className="text-[11px] text-gray-400">Configure Download Path & Gemini AI</p>
                </div>
              </div>
              <button onClick={() => setIsSettingsOpen(false)} className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-800 cursor-pointer">
                <IconClose />
              </button>
            </div>

            {/* Settings Tab Selector */}
            <div className="flex bg-gray-950 p-1 rounded-xl border border-gray-800">
              <button
                type="button"
                onClick={() => setSettingsTab('download')}
                className={`flex-1 py-1.5 text-xs font-medium rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${settingsTab === 'download' ? 'bg-indigo-600 text-white shadow' : 'text-gray-400 hover:text-gray-200'}`}
              >
                <IconFolder />
                <span>Download Path</span>
              </button>
              <button
                type="button"
                onClick={() => setSettingsTab('gemini')}
                className={`flex-1 py-1.5 text-xs font-medium rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${settingsTab === 'gemini' ? 'bg-indigo-600 text-white shadow' : 'text-gray-400 hover:text-gray-200'}`}
              >
                <IconSparkles />
                <span>Gemini AI Key</span>
              </button>
            </div>

            {/* Tab 1: Download Location */}
            {settingsTab === 'download' && (
              <div className="space-y-4 pt-1">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-medium text-gray-300">Download Path / Folder</label>
                    <button
                      type="button"
                      onClick={handlePickDirectory}
                      className="text-[11px] text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer hover:underline"
                      title="Choose a specific local folder on your computer"
                    >
                      <IconFolder />
                      <span>Browse Folder...</span>
                    </button>
                  </div>
                  <input
                    type="text"
                    value={downloadPath}
                    onChange={e => setDownloadPath(e.target.value)}
                    placeholder="Downloads/StoreMockups"
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
                  />
                  <p className="text-[10px] text-gray-500">
                    {dirName ? `✅ Direct Folder Access: ${dirName}` : 'Target path/folder prefix for exported PNGs and ZIP packages.'}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400">Quick Path Presets</label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { label: 'Downloads', path: 'Downloads/StoreMockups' },
                      { label: 'Pictures', path: 'Pictures/AppScreenshots' },
                      { label: 'Desktop', path: 'Desktop/StoreAssets' },
                      { label: 'Documents', path: 'Documents/Mockups' }
                    ].map(preset => (
                      <button
                        key={preset.label}
                        type="button"
                        onClick={() => {
                          setDownloadPath(preset.path);
                          setDirName('');
                        }}
                        className={`px-2.5 py-1.5 text-[11px] rounded-lg border text-left flex items-center justify-between cursor-pointer transition-colors ${downloadPath === preset.path ? 'bg-indigo-950/60 border-indigo-500/60 text-indigo-300' : 'bg-gray-950 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-200'}`}
                      >
                        <span className="font-medium">{preset.label}</span>
                        <span className="text-[9px] text-gray-500 font-mono truncate max-w-[80px]">{preset.path}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <label className="flex items-center gap-2.5 bg-gray-950 p-3 rounded-xl border border-gray-800 cursor-pointer hover:border-gray-700 transition-colors">
                  <input
                    type="checkbox"
                    checked={autoSubfolder}
                    onChange={e => setAutoSubfolder(e.target.checked)}
                    className="rounded accent-indigo-500 w-4 h-4 cursor-pointer"
                  />
                  <div className="text-xs">
                    <div className="text-gray-200 font-medium">Auto-organize batch export in subfolder</div>
                    <div className="text-[10px] text-gray-500">Creates an app-specific folder inside exported ZIP archives</div>
                  </div>
                </label>
              </div>
            )}

            {/* Tab 2: Gemini AI */}
            {settingsTab === 'gemini' && (
              <div className="space-y-3.5 pt-1">
                <div className="flex items-center justify-between bg-gray-950 p-2.5 rounded-xl border border-gray-800">
                  <span className="text-xs text-gray-400">Status</span>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium border flex items-center gap-1.5 ${geminiApiKey ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40' : 'bg-amber-950/40 text-amber-400 border-amber-500/30'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${geminiApiKey ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                    {geminiApiKey ? 'Key Configured' : 'No Key Set (Using Templates)'}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-300 flex justify-between">
                    <span>Gemini API Key</span>
                    <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300 text-[11px] underline">
                      Get Free Key ↗
                    </a>
                  </label>
                  <div className="relative">
                    <input
                      type={showApiKey ? "text" : "password"}
                      value={geminiApiKey}
                      onChange={e => setGeminiApiKey(e.target.value)}
                      placeholder="AIzaSy..."
                      className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-xs text-white pr-10 focus:outline-none focus:border-indigo-500 font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-200 cursor-pointer"
                    >
                      {showApiKey ? <IconEyeOff /> : <IconEye />}
                    </button>
                  </div>
                  <p className="text-[10px] text-gray-500">Stored safely in your browser's localStorage.</p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-300">Gemini Model</label>
                  <select
                    value={geminiModel}
                    onChange={e => setGeminiModel(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 cursor-pointer"
                  >
                    <option value="gemini-1.5-flash">gemini-1.5-flash (Fast & Recommended)</option>
                    <option value="gemini-1.5-pro">gemini-1.5-pro (High Reasoning)</option>
                    <option value="gemini-2.0-flash">gemini-2.0-flash (Latest)</option>
                  </select>
                </div>
              </div>
            )}

            {testMessage && (
              <div className={`text-xs p-2.5 rounded-lg border flex items-center gap-2 ${testStatus === 'success' ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300' : testStatus === 'error' ? 'bg-red-950/40 border-red-500/40 text-red-300' : 'bg-indigo-950/40 border-indigo-500/40 text-indigo-300'}`}>
                {testStatus === 'testing' && <IconSpinner />}
                <span>{testMessage}</span>
              </div>
            )}

            <div className="flex gap-2 pt-1">
              {settingsTab === 'gemini' && (
                <button
                  onClick={handleTestGeminiKey}
                  disabled={testStatus === 'testing'}
                  className="flex-1 py-2 px-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200 rounded-xl text-xs font-medium transition-colors cursor-pointer"
                >
                  Test Connection
                </button>
              )}
              <button
                onClick={handleSaveSettings}
                className="flex-1 py-2 px-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-indigo-900/30 transition-colors cursor-pointer"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div className="w-80 md:w-96 flex-shrink-0 bg-gray-900 border-r border-gray-800 flex flex-col h-full z-10 shadow-2xl">
        
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div>
            <h1 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <span>Store Mockup Studio</span>
              <span className="text-[10px] bg-indigo-900/60 text-indigo-300 font-semibold px-2 py-0.5 rounded-full border border-indigo-500/40">AI Pro</span>
            </h1>
            <p className="text-[11px] text-gray-400 mt-0.5">Feature Graphic & Screen Series</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSettingsOpen(true)}
              title="Settings & Download Location"
              className="relative p-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg border border-gray-700 transition-colors cursor-pointer"
            >
              <IconSettings />
              <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full ring-2 ring-gray-900 ${geminiApiKey ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            </button>

            <button 
              onClick={handleDownloadCurrent}
              title="Download Current PNG"
              className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg shadow-indigo-900/20 active:scale-95 cursor-pointer"
            >
              <IconDownload /> PNG
            </button>
          </div>
        </div>

        {/* Screen Carousel Strip */}
        <div className="bg-gray-950/80 px-4 py-2.5 border-b border-gray-800/80 flex items-center justify-between">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {screens.map((scr, idx) => (
              <button
                key={scr.id}
                onClick={() => setCurrentScreenIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-all cursor-pointer ${currentScreenIndex === idx ? 'bg-indigo-600/30 border-indigo-500 text-indigo-200 shadow ring-1 ring-indigo-500/50' : 'bg-gray-800/60 border-gray-700/80 text-gray-400 hover:text-gray-200'}`}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: scr.bgColor1 }}></span>
                <span>{scr.label}</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              const nextId = `screen-${Date.now()}`;
              const num = screens.length + 1;
              const pal = COLOR_PALETTES[(num - 1) % COLOR_PALETTES.length];
              setScreens(p => [...p, {
                ...current,
                id: nextId,
                label: `${num}. Screen ${num}`,
                title: `Feature ${num}\nHighlights`,
                subtitle: 'Showcase your core benefits.',
                bgColor1: pal.c1,
                bgColor2: pal.c2
              }]);
              setCurrentScreenIndex(screens.length);
            }}
            className="p-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-transform active:scale-95 cursor-pointer"
            title="Add Mockup Screen"
          >
            <IconPlus />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-800 bg-gray-900/50">
          {[
            { id: 'size', label: 'Layout & AI' },
            { id: 'text', label: 'Text' },
            { id: 'mockup', label: 'Mockup' },
            { id: 'bg', label: 'Background' },
            { id: 'descriptions', label: 'Descriptions' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2.5 text-xs font-medium border-b-2 transition-colors cursor-pointer ${activeTab === tab.id ? 'border-indigo-500 text-indigo-400 bg-gray-800/50 font-semibold' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5 scrollbar-thin">
          
          {/* Tab: Mockup (Restored to Clean Previous Aesthetic) */}
          {activeTab === 'mockup' && (
            <div className="space-y-5">
              
              {/* Primary Screenshot Upload Box */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-2">App Screenshot</label>
                <div className="relative border-2 border-dashed border-gray-700 rounded-xl p-6 hover:border-indigo-500 hover:bg-gray-800/50 transition-colors flex flex-col items-center justify-center text-center cursor-pointer group">
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleUploadScreenshot} 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      cursor: 'pointer',
                      zIndex: 20
                    }} 
                  />
                  <div className="bg-gray-800 rounded-full p-3 mb-2.5 group-hover:bg-indigo-900/50 group-hover:text-indigo-400 transition-colors">
                    <IconUpload />
                  </div>
                  <p className="text-xs font-medium text-gray-200">Click or drag image to upload</p>
                  <p className="text-[10px] text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                </div>
                {current.screenshot && (
                  <button 
                    onClick={() => updateCurrentScreen({ screenshot: null })} 
                    className="mt-2 text-xs text-red-400 hover:text-red-300 w-full text-right cursor-pointer"
                  >
                    Remove Screenshot
                  </button>
                )}
              </div>

              {/* Secondary Screenshot for Dual Mockup */}
              {current.layout === 'dual' && (
                <div className="bg-indigo-950/20 border border-indigo-500/30 p-3.5 rounded-xl space-y-2">
                  <label className="block text-xs font-medium text-indigo-300">Secondary Mockup (2nd Phone)</label>
                  <div className="relative border-2 border-dashed border-indigo-700/60 rounded-xl p-4 hover:border-indigo-400 hover:bg-gray-800/40 transition-colors flex flex-col items-center justify-center text-center cursor-pointer">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleUploadScreenshot2} 
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0,
                        cursor: 'pointer',
                        zIndex: 20
                      }} 
                    />
                    <p className="text-xs text-indigo-200">Upload 2nd Screenshot (Optional)</p>
                    <p className="text-[10px] text-indigo-400/70 mt-0.5">Will fallback to primary screenshot if empty</p>
                  </div>
                  {current.screenshot2 && (
                    <button 
                      onClick={() => updateCurrentScreen({ screenshot2: null })} 
                      className="text-xs text-red-400 hover:text-red-300 w-full text-right cursor-pointer"
                    >
                      Remove 2nd Screenshot
                    </button>
                  )}
                </div>
              )}

              {/* Device Frame Selector: iPhone | Android | None */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-2">Device Frame</label>
                <div className="flex bg-gray-800 rounded-lg p-1">
                  {[
                    { id: 'iphone', label: 'iPhone' },
                    { id: 'android', label: 'Android' },
                    { id: 'none', label: 'None (Clean)' }
                  ].map(type => (
                    <button
                      key={type.id}
                      onClick={() => updateCurrentScreen({ deviceType: type.id })}
                      className={`flex-1 py-1.5 text-xs font-medium rounded-md capitalize transition-colors cursor-pointer ${(current.deviceType || 'iphone') === type.id ? 'bg-indigo-600 text-white shadow' : 'text-gray-400 hover:text-gray-200'}`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Device Scale Slider */}
              <div>
                <label className="flex justify-between text-xs font-medium text-gray-300 mb-2">
                  <span>Device Scale</span>
                  <span className="text-gray-400 font-mono">{Math.round(current.deviceScale * 100)}%</span>
                </label>
                <input
                  type="range" 
                  min="0.5" 
                  max="1.6" 
                  step="0.05"
                  value={current.deviceScale}
                  onChange={e => updateCurrentScreen({ deviceScale: Number(e.target.value) })}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

              {/* Vertical Offset Slider */}
              <div>
                <label className="flex justify-between text-xs font-medium text-gray-300 mb-2">
                  <span>Vertical Position Offset</span>
                  <span className="text-gray-400 font-mono">{current.yOffset}px</span>
                </label>
                <input
                  type="range" 
                  min="-200" 
                  max="200" 
                  step="5"
                  value={current.yOffset}
                  onChange={e => updateCurrentScreen({ yOffset: Number(e.target.value) })}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

            </div>
          )}

          {/* Tab: Layout & AI */}
          {activeTab === 'size' && (
            <div className="space-y-4">
              
              {/* Gemini Auto-Generate Box */}
              <div className="bg-gradient-to-r from-indigo-950/80 via-purple-950/50 to-gray-900 border border-indigo-500/40 rounded-xl p-3.5 shadow-lg space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="p-1 bg-indigo-500/30 text-indigo-300 rounded-md">
                      <IconSparkles />
                    </span>
                    <span className="text-xs font-bold text-white">Generate with Gemini AI</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border ${geminiApiKey ? 'bg-emerald-900/40 text-emerald-300 border-emerald-500/40' : 'bg-gray-800 text-gray-400 border-gray-700'}`}>
                    {geminiApiKey ? 'Gemini AI Ready' : 'Template Demo'}
                  </span>
                </div>

                <p className="text-[11px] text-gray-300 leading-tight">
                  Enter your app concept to automatically design all 3 screens (titles, subtitles, color palettes, and compositions).
                </p>

                <div className="space-y-2">
                  <input
                    type="text"
                    value={aiAppPrompt}
                    onChange={e => setAiAppPrompt(e.target.value)}
                    placeholder="e.g. Habit Tracker, Crypto Wallet, Fitness App"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />

                  <button
                    onClick={handleGenerateScreensAI}
                    disabled={isGeneratingScreensAI}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 text-white rounded-lg text-xs font-semibold shadow-lg shadow-indigo-950/50 active:scale-98 cursor-pointer disabled:opacity-50"
                  >
                    {isGeneratingScreensAI ? <><IconSpinner /> Generating Mockups with AI...</> : <><IconSparkles /> AI Auto-Fill All Screens & Theme</>}
                  </button>
                </div>
              </div>

              {/* Preset Dims */}
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">Preset Dimensions</label>
                <div className="space-y-1.5">
                  {Object.entries(PRESETS).map(([k, p]) => (
                    <button
                      key={k}
                      onClick={() => setPresetKey(k)}
                      className={`w-full text-left px-3 py-2 rounded-lg border text-xs transition-all cursor-pointer ${presetKey === k ? 'bg-indigo-900/40 border-indigo-500 text-indigo-200 font-semibold' : 'bg-gray-800/80 border-gray-700 text-gray-300'}`}
                    >
                      <div>{p.name}</div>
                      <div className="text-[10px] opacity-60 font-mono">{p.width} × {p.height} px</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Compositions */}
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">Layout Compositions (8 Styles)</label>
                <div className="grid grid-cols-1 gap-1.5">
                  {LAYOUT_COMPOSITIONS.map(comp => (
                    <button
                      key={comp.id}
                      onClick={() => updateCurrentScreen({ layout: comp.id })}
                      className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${current.layout === comp.id ? 'bg-indigo-950/60 border-indigo-500 text-white' : 'bg-gray-800/60 border-gray-800 text-gray-300 hover:bg-gray-800'}`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium">{comp.title}</span>
                          <span className="text-[10px] px-1.5 py-0.2 bg-gray-700 text-gray-300 rounded">{comp.tag}</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-0.5">{comp.desc}</p>
                      </div>
                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${current.layout === comp.id ? 'border-indigo-400 bg-indigo-600' : 'border-gray-600'}`}>
                        {current.layout === comp.id && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Batch Export */}
              <button
                onClick={handleExportAllScreens}
                disabled={isExportingAll}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 cursor-pointer"
              >
                <IconDownload /> {isExportingAll ? 'Packing ZIP...' : `Export All ${screens.length} Screens + Copy (ZIP)`}
              </button>

            </div>
          )}

          {/* Tab: Descriptions */}
          {activeTab === 'descriptions' && (
            <div className="space-y-4">
              
              {/* AI Desc Card */}
              <div className="bg-gradient-to-r from-indigo-950/80 via-purple-950/50 to-gray-900 border border-indigo-500/40 rounded-xl p-3.5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="p-1 bg-indigo-500/30 text-indigo-300 rounded-md">
                      <IconSparkles />
                    </span>
                    <span className="text-xs font-bold text-white">Gemini ASO Copywriting</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border ${geminiApiKey ? 'bg-emerald-900/40 text-emerald-300 border-emerald-500/40' : 'bg-gray-800 text-gray-400 border-gray-700'}`}>
                    {geminiApiKey ? 'Gemini AI' : 'Smart Demo'}
                  </span>
                </div>

                <button
                  onClick={handleGenerateDescAI}
                  disabled={isGeneratingDescAI}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 text-white rounded-lg text-xs font-semibold shadow-lg active:scale-98 cursor-pointer disabled:opacity-50"
                >
                  {isGeneratingDescAI ? <><IconSpinner /> Generating Store Descriptions...</> : <><IconSparkles /> Auto-Generate Store Copy with AI</>}
                </button>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">App Name</label>
                <input
                  type="text"
                  value={appName}
                  onChange={e => setAppName(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 font-semibold"
                />
              </div>

              {/* Short Desc */}
              <div className="bg-gray-800/40 border border-gray-800 rounded-xl p-3 space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-indigo-300 uppercase">Short Description (Play Store 80)</label>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(shortDescription);
                      setCopiedShort(true);
                      setTimeout(() => setCopiedShort(false), 2000);
                    }}
                    className="text-[11px] bg-gray-800 hover:bg-gray-700 text-indigo-300 px-2 py-0.5 rounded border border-gray-700 cursor-pointer"
                  >
                    {copiedShort ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="flex justify-between text-[11px] font-mono text-gray-400">
                  <span className={shortDescription.length > 80 ? 'text-red-400 font-bold' : ''}>{shortDescription.length} / 80 chars</span>
                  <span>{80 - shortDescription.length} left</span>
                </div>
                <textarea
                  rows={2}
                  value={shortDescription}
                  onChange={e => setShortDescription(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-xs text-white focus:outline-none resize-none"
                />
              </div>

              {/* Full Desc */}
              <div className="bg-gray-800/40 border border-gray-800 rounded-xl p-3 space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-indigo-300 uppercase">Full Description</label>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(fullDescription);
                      setCopiedFull(true);
                      setTimeout(() => setCopiedFull(false), 2000);
                    }}
                    className="text-[11px] bg-gray-800 hover:bg-gray-700 text-indigo-300 px-2 py-0.5 rounded border border-gray-700 cursor-pointer"
                  >
                    {copiedFull ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <textarea
                  rows={8}
                  value={fullDescription}
                  onChange={e => setFullDescription(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-xs text-white focus:outline-none font-mono leading-relaxed"
                />
              </div>

            </div>
          )}

          {/* Tab: Text */}
          {activeTab === 'text' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Screen Label</label>
                <input
                  type="text"
                  value={current.label}
                  onChange={e => updateCurrentScreen({ label: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-xs font-medium text-gray-400">Headline Title</label>
                  <input
                    type="number"
                    value={current.titleSize}
                    onChange={e => updateCurrentScreen({ titleSize: Number(e.target.value) })}
                    className="w-12 bg-gray-800 border border-gray-700 rounded text-xs text-center"
                  />
                </div>
                <textarea
                  rows={2}
                  value={current.title}
                  onChange={e => updateCurrentScreen({ title: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-xs text-white resize-none"
                />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-xs font-medium text-gray-400">Subtitle</label>
                  <input
                    type="number"
                    value={current.subtitleSize}
                    onChange={e => updateCurrentScreen({ subtitleSize: Number(e.target.value) })}
                    className="w-12 bg-gray-800 border border-gray-700 rounded text-xs text-center"
                  />
                </div>
                <textarea
                  rows={3}
                  value={current.subtitle}
                  onChange={e => updateCurrentScreen({ subtitle: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-xs text-white resize-none"
                />
              </div>
            </div>
          )}

          {/* Tab: Background */}
          {activeTab === 'bg' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">Preset Palettes</label>
                <div className="grid grid-cols-2 gap-2">
                  {COLOR_PALETTES.map((pal, idx) => (
                    <button
                      key={idx}
                      onClick={() => updateCurrentScreen({ bgColor1: pal.c1, bgColor2: pal.c2, bgAngle: pal.angle, bgType: 'gradient' })}
                      className="flex items-center gap-2 p-2 rounded-lg bg-gray-800/60 border border-gray-700/60 hover:border-gray-500 text-left cursor-pointer"
                    >
                      <div className="w-5 h-5 rounded" style={{ background: `linear-gradient(135deg, ${pal.c1}, ${pal.c2})` }}></div>
                      <span className="text-[11px] truncate">{pal.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 bg-gray-800/40 p-3 rounded-xl border border-gray-800">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Start Color</label>
                  <div className="flex gap-2 items-center">
                    <input type="color" value={current.bgColor1} onChange={e => updateCurrentScreen({ bgColor1: e.target.value })} className="w-8 h-8 rounded border border-gray-700 cursor-pointer" />
                    <input type="text" value={current.bgColor1} onChange={e => updateCurrentScreen({ bgColor1: e.target.value })} className="flex-1 bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-white font-mono uppercase" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">End Color</label>
                  <div className="flex gap-2 items-center">
                    <input type="color" value={current.bgColor2} onChange={e => updateCurrentScreen({ bgColor2: e.target.value })} className="w-8 h-8 rounded border border-gray-700 cursor-pointer" />
                    <input type="text" value={current.bgColor2} onChange={e => updateCurrentScreen({ bgColor2: e.target.value })} className="flex-1 bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-white font-mono uppercase" />
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Hidden file input for direct image add in view screen space */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleUploadScreenshot}
        className="hidden"
      />

      {/* Center Canvas / View Screen Space */}
      <div 
        className="flex-1 flex flex-col items-center justify-between p-4 md:p-6 relative custom-checkerboard overflow-hidden select-none"
        onDragOver={handleCanvasDragOver}
        onDragLeave={handleCanvasDragLeave}
        onDrop={handleCanvasDrop}
      >
        
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 bg-gray-900/90 backdrop-blur-md px-3 md:px-4 py-2 rounded-2xl border border-gray-800 shadow-2xl z-20">
          
          {/* Screen Navigation */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                setCurrentScreenIndex(Math.max(0, currentScreenIndex - 1));
                handleResetZoom();
              }}
              disabled={currentScreenIndex === 0}
              className="p-1.5 rounded-lg border border-gray-700 hover:bg-gray-800 disabled:opacity-40 cursor-pointer text-gray-300 transition-colors"
              title="Previous Screen"
            >
              <IconChevronLeft />
            </button>
            <div className="text-xs font-semibold text-gray-300 flex items-center gap-2 px-1">
              <span>{currentScreenIndex + 1}/{screens.length}</span>
              <span className="text-gray-600">|</span>
              <span className="text-indigo-400 font-medium max-w-[90px] truncate">{current.label}</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-500 font-mono text-[11px]">{width}×{height}</span>
            </div>
            <button
              onClick={() => {
                setCurrentScreenIndex(Math.min(screens.length - 1, currentScreenIndex + 1));
                handleResetZoom();
              }}
              disabled={currentScreenIndex === screens.length - 1}
              className="p-1.5 rounded-lg border border-gray-700 hover:bg-gray-800 disabled:opacity-40 cursor-pointer text-gray-300 transition-colors"
              title="Next Screen"
            >
              <IconChevronRight />
            </button>
          </div>

          <div className="h-4 w-px bg-gray-700 mx-1 hidden sm:block"></div>

          {/* Image Add Function in View Screen Space */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 hover:text-white border border-indigo-500/40 rounded-xl text-xs font-medium transition-all shadow-sm active:scale-95 cursor-pointer"
            title="Add or replace mockup image"
          >
            <IconImage />
            <span>Add Image</span>
          </button>

          <div className="h-4 w-px bg-gray-700 mx-1 hidden sm:block"></div>

          {/* Zoom Controls (Zoom In, Zoom Out, Percentage & Fit) */}
          <div className="flex items-center gap-1 bg-gray-950/80 p-1 rounded-xl border border-gray-800">
            <button
              type="button"
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.25}
              className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 disabled:opacity-30 cursor-pointer transition-colors"
              title="Zoom Out (-15%)"
            >
              <IconZoomOut />
            </button>
            <button
              type="button"
              onClick={handleResetZoom}
              className="px-2 py-0.5 text-[11px] font-mono font-medium text-indigo-300 hover:text-white rounded hover:bg-gray-800 cursor-pointer"
              title="Click to Reset Zoom (100%)"
            >
              {Math.round(zoomLevel * 100)}%
            </button>
            <button
              type="button"
              onClick={handleZoomIn}
              disabled={zoomLevel >= 3.0}
              className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 disabled:opacity-30 cursor-pointer transition-colors"
              title="Zoom In (+15%)"
            >
              <IconZoomIn />
            </button>
            <button
              type="button"
              onClick={handleResetZoom}
              className="p-1 ml-0.5 rounded-lg text-gray-400 hover:text-indigo-300 hover:bg-gray-800 cursor-pointer transition-colors"
              title="Fit to Screen / Reset Pan & Zoom"
            >
              <IconMaximize />
            </button>
          </div>

        </div>

        {/* View Screen Space (Interactive Zoom & Pan Viewport) */}
        <div 
          ref={viewContainerRef}
          className={`relative flex-1 w-full flex items-center justify-center overflow-hidden cursor-${isPanning ? 'grabbing' : zoomLevel > 1 ? 'grab' : 'default'}`}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            style={{
              transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
              transformOrigin: 'center center',
              transition: isPanning ? 'none' : 'transform 0.1s ease-out'
            }}
            className="relative flex justify-center items-center pointer-events-none select-none"
          >
            <canvas
              ref={canvasRef}
              width={width}
              height={height}
              className="shadow-2xl shadow-black rounded-lg ring-1 ring-white/10"
              style={{ maxHeight: 'calc(100vh - 180px)', maxWidth: '100%', objectFit: 'contain' }}
            />

            {/* If no screenshot, elegant click-to-add button overlay */}
            {!current.screenshot && (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 m-auto w-44 h-11 flex items-center justify-center gap-2 bg-indigo-600/90 hover:bg-indigo-500 text-white rounded-xl shadow-2xl backdrop-blur font-medium text-xs border border-indigo-400/40 pointer-events-auto cursor-pointer transition-transform hover:scale-105"
              >
                <IconImage />
                <span>Click to Add Image</span>
              </button>
            )}
          </div>

          {/* Drag & Drop Visual Overlay */}
          {isDragOverCanvas && (
            <div className="absolute inset-4 bg-indigo-950/85 border-2 border-dashed border-indigo-400 rounded-2xl flex flex-col items-center justify-center z-30 pointer-events-none backdrop-blur-sm animate-pulse">
              <div className="p-3.5 bg-indigo-600/40 text-indigo-200 rounded-full mb-2">
                <IconUpload />
              </div>
              <p className="text-sm font-bold text-white">Drop image here to add to mockup</p>
              <p className="text-[11px] text-indigo-300 mt-0.5">Supports PNG, JPG, WebP</p>
            </div>
          )}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-2 text-[11px] text-gray-500 flex flex-wrap items-center justify-center gap-2 md:gap-4 z-10">
          <span>📁 Download Path: <b className="text-gray-400 font-mono">{downloadPath || 'Downloads'}</b></span>
          <span>•</span>
          <span>🔍 Scroll or use <b>+ / -</b> to Zoom ({Math.round(zoomLevel * 100)}%)</span>
          <span>•</span>
          <span>🖱️ Drag to Pan</span>
          <span>•</span>
          <span>📷 Drop image to add</span>
        </div>

      </div>

    </div>
  );
}
