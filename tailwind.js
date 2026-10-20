
(function() {
    const styleElement = document.createElement('style');
    styleElement.id = 'tailwind-offline-premium';
    styleElement.textContent = `
        /* 1. Global Reset Framework */
        html { font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.6; box-sizing: border-box; scroll-behavior: smooth; }
        *, ::before, ::after { box-sizing: inherit; }
        body { margin: 0; padding: 0; background-color: #f8fafc; color: #334155; -webkit-font-smoothing: antialiased; }
        
        /* 2. Structured Layout Containers */
        .max-w-6xl { max-w: 72rem; width: 100%; }
        .max-w-2xl { max-w: 42rem; width: 100%; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .px-4 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-16 { padding-top: 5rem; padding-bottom: 5rem; }
        .py-20 { padding-top: 6rem; padding-bottom: 6rem; }
        .p-4 { padding: 1rem; }
        .p-5 { padding: 1.5rem; }
        .p-6 { padding: 1.75rem; }
        .p-8 { padding: 2.25rem; }
        
        /* 3. Margin & Layout Spacing Utility Modules */
        .mb-1 { margin-bottom: 0.25rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-12 { margin-bottom: 3.5rem; }
        .mb-16 { margin-bottom: 4.5rem; }
        .mt-2 { margin-top: 0.5rem; }
        .mt-4 { margin-top: 1rem; }
        .pb-2 { padding-bottom: 0.625rem; }
        .space-x-4 > * + * { margin-left: 1rem; }
        .space-x-2 > * + * { margin-left: 0.5rem; }
        .space-y-4 > * + * { margin-top: 1rem; }
        .space-y-6 > * + * { margin-top: 1.5rem; }

        /* 4. Fine Typography Weights */
        .text-center { text-align: center; }
        .text-xs { font-size: 0.75rem; line-height: 1rem; font-weight: 600; }
        .text-2xs { font-size: 0.7rem; line-height: 0.9rem; font-weight: 700; letter-spacing: 0.05em; }
        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .text-base { font-size: 1rem; line-height: 1.5rem; }
        .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
        .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .text-2xl { font-size: 1.625rem; line-height: 2.125rem; }
        .text-3xl { font-size: 2.25rem; line-height: 2.75rem; font-weight: 800; tracking-spacing: -0.02em; }
        .text-4xl { font-size: 2.75rem; line-height: 3.25rem; font-weight: 800; }
        .text-5xl { font-size: 3.5rem; line-height: 1.1; font-weight: 900; }
        .font-medium { font-weight: 500; }
        .font-semibold { font-weight: 600; }
        .font-bold { font-weight: 700; }
        .font-extrabold { font-weight: 800; }
        .tracking-tight { letter-spacing: -0.025em; }
        .tracking-wider { letter-spacing: 0.05em; }
        .uppercase { text-transform: uppercase; }

        /* 5. Modern Component Color Palettes */
        .bg-white { background-color: #ffffff; }
        .bg-gray-50 { background-color: #f8fafc; }
        .bg-gray-100 { background-color: #f1f5f9; }
        .bg-gray-900 { background-color: #0f172a; }
        .text-gray-900 { color: #0f172a; }
        .text-gray-800 { color: #1e293b; }
        .text-gray-700 { color: #334155; }
        .text-gray-600 { color: #475569; }
        .text-gray-500 { color: #64748b; }
        .text-gray-400 { color: #94a3b8; }
        .text-white { color: #ffffff; }
        
        .bg-green-600 { background-color: #10b981; color: #ffffff; }
        .text-green-600 { color: #10b981; }
        .text-green-700 { color: #047857; }
        .border-green-200 { border-bottom-color: #a7f3d0; }
        
        /* Diet Specific Badges */
        .bg-red-100 { background-color: #fee2e2; } .text-red-800 { color: #991b1b; }
        .bg-green-100 { background-color: #d1fae5; } .text-green-800 { color: #065f46; }
        .bg-yellow-100 { background-color: #fef9c3; } .text-yellow-800 { color: #854d0e; }
        .bg-blue-100 { background-color: #e0f2fe; } .text-blue-800 { color: #0369a1; }
        .bg-purple-100 { background-color: #f3e8ff; } .text-purple-800 { color: #6b21a8; }
        .bg-emerald-100 { background-color: #ccfbf1; } .text-emerald-800 { color: #0f766e; }
        .bg-orange-100 { background-color: #ffedd5; } .text-orange-800 { color: #c2410c; }
        .bg-red-500 { background-color: #ef4444; }
                /* 6. Layout Structural Systems & Alignments */
        .border { border: 1px solid #e2e8f0; }
        .border-2 { border: 2px solid #10b981; }
        .border-b-2 { border-bottom: 2px solid #e2e8f0; }
        .border-gray-200 { border-color: #e2e8f0; }
        .border-gray-300 { border-color: #cbd5e1; }
        .rounded-lg { border-radius: 0.5rem; }
        .rounded-xl { border-radius: 0.75rem; }
        .rounded-2xl { border-radius: 1.25rem; }
        .rounded-3xl { border-radius: 1.75rem; }
        .rounded-full { border-radius: 9999px; }
        .rounded-md { border-radius: 0.375rem; }
        
        /* 7. Flexbox & Grid Column Layout Layout Modules */
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .justify-center { justify-content: center; }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .sticky { position: sticky; }
        .top-0 { top: 0; }
        .z-50 { z-index: 50; }
        .top-2 { top: 0.75rem; }
        .right-2 { right: 0.75rem; }
        .w-full { width: 100%; box-sizing: border-box; }
        .aspect-square { aspect-ratio: 1 / 1; }
        .overflow-hidden { overflow: hidden; }
        .block { display: block; }
        .hidden { display: none; }

        /* 8. Component Shadows & Transition Elements */
        .shadow-sm { box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05); }
        .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05); }
        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05); }
        .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15); }
        
        /* Forms styling elements */
        input, select { 
            width: 100%; border: 1px solid #cbd5e1; padding: 0.75rem 1rem; 
            border-radius: 0.5rem; background-color: #fff; box-sizing: border-box; 
            font-size: 0.95rem; color: #1e293b; transition: all 0.2s ease;
        }
        input:focus, select:focus { outline: none; border-color: #10b981; box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15); }
        label { display: block; font-size: 0.875rem; font-weight: 600; color: #475569; margin-bottom: 0.375rem; }
        
        /* Button Component Interactive Animations */
        button, .btn { 
            display: block; width: 100%; text-align: center; font-family: inherit; 
            font-weight: 600; padding: 0.75rem 1.25rem; border-radius: 0.75rem; 
            cursor: pointer; transition: all 0.2s ease; border: none; text-decoration: none;
        }
        .bg-green-600:hover { background-color: #059669; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2); }
        .bg-gray-900:hover { background-color: #1e293b; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2); }
        
        /* Disabled States */
        .bg-gray-300 { background-color: #e2e8f0; color: #94a3b8; }
        .cursor-not-allowed { cursor: not-allowed; }
        .bg-gray-300:hover { transform: none; box-shadow: none; }

        /* Premium Plan Card Specific Overrides */
        .plan-card { 
            background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem;
            display: flex; flex-direction: column; justify-content: space-between;
            padding: 1.5rem; position: relative; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .plan-card:hover { transform: translateY(-4px); box-shadow: 0 12px 20px -5px rgba(0, 0, 0, 0.05); border-color: #cbd5e1; }
        .plan-card-featured { border: 2px solid #10b981; background: linear-gradient(180deg, rgba(209, 250, 229, 0.1) 0%, rgba(255, 255, 255, 1) 100%); }
        .plan-card-featured:hover { border-color: #059669; box-shadow: 0 16px 24px -8px rgba(16, 185, 129, 0.15); }

        /* 9. CRITICAL CONSOLE column alignments GRID SCHEMAS */
        .grid { display: grid; grid-template-columns: 1fr; gap: 1.75rem; width: 100%; box-sizing: border-box; }
        
        /* Adaptive Multi-column Grid Scaling Rules */
        @media (min-width: 640px) { .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (min-width: 768px) { 
            .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .md\\:flex { display: flex; }
        }
        @media (min-width: 1024px) { 
            .grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
            .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }

        /* 10. Hero Visual Accent Enhancements */
        .hero-banner { background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%); position: relative; overflow: hidden; }
        .hero-badge { display: inline-block; background-color: #d1fae5; color: #065f46; font-size: 0.75rem; font-weight: 700; padding: 0.375rem 0.875rem; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.05em; }
        .hero-display-box { background: linear-gradient(135deg, #34d399 0%, #059669 100%); border-radius: 2rem; box-shadow: 0 20px 40px -15px rgba(5, 150, 105, 0.3); color: #ffffff; padding: 2.5rem; text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; }
    `;
    document.head.appendChild(styleElement);
    console.log("💎 Premium layout enhancements compiled and locked offline.");
})();
