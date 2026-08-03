// pages/sandbox.js — Live Code Sandbox, powered by Pyodide (Python compiled to
// WebAssembly, running entirely client-side — no server, no code ever leaves
// the browser). Confirmed against the official Pyodide docs (pyodide.org)
// before writing this: the CDN script tag + loadPyodide() pattern, and the
// setStdout/setStderr output-capture API.
//
// IMPORTANT DETAIL (verified, not assumed): when Python code raises an
// UNCAUGHT exception, the traceback text does NOT reliably come through
// pyodide.setStderr()'s callback — it surfaces as the message of the JS
// exception that runPythonAsync() throws. So errors are read from the
// catch block below, not from the stderr redirection.

(function () {
  'use strict';

  const PYODIDE_VERSION = 'v314.0.3';
  const PYODIDE_CDN_URL = `https://cdn.jsdelivr.net/pyodide/${PYODIDE_VERSION}/full/pyodide.js`;

  const loadingPanel = document.getElementById('sandboxLoading');
  const loadingDetail = document.getElementById('sandboxLoadingDetail');
  const editor = document.getElementById('sandboxEditor');
  const runBtn = document.getElementById('sandboxRunBtn');
  const clearBtn = document.getElementById('sandboxClearBtn');
  const output = document.getElementById('sandboxOutput');
  const xpNote = document.getElementById('sandboxXpNote');

  if (!editor || !runBtn) return; // safety net if this ever loads on the wrong page

  let pyodideInstance = null;
  let isRunning = false;
  let rewardedRunsThisSession = 0;
  const MAX_REWARDED_RUNS = 5; // keeps XP from being farmed by spam-clicking Run
  let capturedText = '';

  function setOutput(text, isError) {
    output.textContent = text;
    output.classList.toggle('sandbox-output-error', !!isError);
    output.classList.toggle('sandbox-output-success', !isError);
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = () => reject(new Error('Failed to load ' + src));
      document.head.appendChild(script);
    });
  }

  async function initPyodide() {
    try {
      await loadScript(PYODIDE_CDN_URL);
      pyodideInstance = await window.loadPyodide();

      // Set up output capture ONCE; each run resets capturedText to '' first.
      pyodideInstance.setStdout({ batched: (msg) => { capturedText += msg + '\n'; } });
      pyodideInstance.setStderr({ batched: (msg) => { capturedText += msg + '\n'; } });

      loadingPanel.style.display = 'none';
      runBtn.disabled = false;
      setOutput('Ready. Click "Run Code" to execute the sample program above, or write your own.', false);
    } catch (err) {
      loadingDetail.textContent =
        'Could not load the Python runtime. Check your internet connection and reload this page. (' +
        (err && err.message ? err.message : 'unknown error') + ')';
      loadingPanel.classList.add('sandbox-loading-error');
    }
  }

  async function runCode() {
    if (!pyodideInstance || isRunning) return;
    isRunning = true;
    runBtn.disabled = true;
    runBtn.textContent = 'Running…';
    xpNote.style.display = 'none';
    capturedText = '';

    const code = editor.value;

    try {
      await pyodideInstance.runPythonAsync(code);
      setOutput(capturedText.length ? capturedText : '(Program ran with no output.)', false);
      awardXpForSuccess();
    } catch (err) {
      // Real Python tracebacks come through here, not through setStderr - verified directly.
      const combined = (capturedText ? capturedText + '\n' : '') + (err && err.message ? err.message : String(err));
      setOutput(combined, true);
    } finally {
      isRunning = false;
      runBtn.disabled = false;
      runBtn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg> Run Code';
    }
  }

  function awardXpForSuccess() {
    if (!window.MTC || rewardedRunsThisSession >= MAX_REWARDED_RUNS) return;
    rewardedRunsThisSession++;
    window.MTC.addXP(2);
    xpNote.style.display = 'block';
    xpNote.textContent = '+2 XP for a successful run';
    if (window.MTC.recordActivity) {
      window.MTC.recordActivity({
        type: 'sandbox',
        label: 'Live Code Sandbox',
        detail: 'Ran a Python program successfully',
        xp: 2
      });
    }
  }

  runBtn.addEventListener('click', runCode);

  clearBtn.addEventListener('click', () => {
    editor.value = '';
    setOutput('Output cleared. Write some Python above and click "Run Code".', false);
    xpNote.style.display = 'none';
    editor.focus();
  });

  document.addEventListener('DOMContentLoaded', initPyodide);
  if (document.readyState !== 'loading') initPyodide();
})();
