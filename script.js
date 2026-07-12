// PART 1: 8-Week Challenge Exercise Definition Array
const weeks = [
        { num: 1, theme: "Foundation & Movement", exercises: [
            { name: "Inchworm", note: "", beg: "20", int: "40", adv: "60", link: "https://musclewiki.com/exercise/inchworm?model=f" }, 
            { name: "Sumo Squats", note: "With Weight", beg: "30", int: "60", adv: "100", link: "https://musclewiki.com/exercise/dumbbell-sumo-squat?model=f" },
            { name: "Push-Ups", note: "or Knee Push-Ups", beg: "20", int: "45", adv: "75", link: "https://musclewiki.com/exercise/push-up?model=f" },
            { name: "Glute Bridges", note: "Bodyweight or Weights", beg: "30", int: "60", adv: "100", link: "https://musclewiki.com/exercise/bodyweight-feet-elevated-glute-bridge?model=f" },
            { name: "Around the World Plank", note: "w or w/o Band", beg: "40s", int: "75s", adv: "120s", link: "https://musclewiki.com/exercise/mini-band-around-the-world-plank?model=f" },
        ]},
        { num: 2, theme: "Core & Cardio", exercises: [
            { name: "High Knees", note: "Left + Right = 1", beg: "50", int: "75", adv: "100", link: "https://musclewiki.com/exercise/cardio-knee-taps?model=f" },
            { name: "Bicycle Crunch", note: "Left+Right = 1", beg: "20", int: "30", adv: "50", link: "https://musclewiki.com/exercise/bicycle-crunch?model=f" },
            { name: "Core Combo", note: "1m Climbers - 30s Planks - 30s Knees to elbows", beg: "2", int: "3", adv: "5", link:"https://drive.google.com/file/d/10RVEJOoTpjPOhLM4-6pKUC8tbg0wTy88/view?usp=sharing" },
            { name: "Plank Jacks", note: "Out+in = 1", beg: "20", int: "50", adv: "75", link: "https://musclewiki.com/exercise/bodyweight-feet-plank-jack?model=f" },
            { name: "Pop Squats", note: "floor touch = 1", beg: "20", int: "40", adv: "70", link: "https://musclewiki.com/exercise/bodyweight-pop-squat?model=f" },
        ]},
        { num: 3, theme: "Lower Body Focus", exercises: [
            { name: "BW Curtsy Lunges", note: "each leg", beg: "20", int: "40", adv: "65", link: "https://musclewiki.com/exercise/curtsy-lunge?model=f" },
            { name: "Wall Sit", note: "80/90 degress", beg: "45s", int: "90s", adv: "150s", link: "https://musclewiki.com/exercise/wall-sit?model=f" },
            { name: "Calf Raises", note: "slow & controlled", beg: "60", int: "100", adv: "160", link: "https://musclewiki.com/exercise/calf-raises?model=f?model=f" },
            { name: "Glutes 3 in 1", note: "each movement - each side", beg: "10", int: "20", adv: "30", link: "https://www.instagram.com/reel/DXErQmyDGvo/?igsh=MTRrZmgyYjhrNmhhZA%3D%3D" },
            { name: "BW Reverse Lunges", note: "Left+Right = 1", beg: "20", int: "40", adv: "70", link: "https://musclewiki.com/exercise/bodyweight-alternating-reverse-lunges?model=f" },
        ]},
        { num: 4, theme: "Upper Body & Stability", exercises: [
            { name: "Front Raise", note: "", beg: "20", int: "40", adv: "60", link: "https://musclewiki.com/exercise/kettlebell-front-raise?model=f"},
            { name: "Triceps Dips", note: "chair, bench or Machine", beg: "25", int: "50", adv: "100", link: "https://musclewiki.com/exercise/bench-dips?model=f?model=f" },
            { name: "Incline Push-Ups", note: "Or decline", beg: "20", int: "40", adv: "65", link: "https://musclewiki.com/exercise/incline-push-up?model=f?model=f" },
            { name: "Shoulder Taps", note: "in plank - Each side", beg: "30", int: "60", adv: "100", link: "https://youtu.be/yyFBdDj7EbQ?si=PncNErBXeT2llXEa" },
            { name: "Superman Pull", note: "slow & controlled", beg: "15", int: "25", adv: "50", link: "https://musclewiki.com/exercise/bodyweight-superman-pull?model=f" },
        ]},
        { num: 5, theme: "Conditioning & Endurance", exercises: [
            { name: "Burpees", note: "Hate them but Not going away", beg: "10", int: "25", adv: "40", link: "https://musclewiki.com/exercise/burpee" },
            { name: "Jump Rope", note: "or imaginary", beg: "2min", int: "4min", adv: "6min", link: "https://musclewiki.com/exercise/jump-rope?model=f" },
            { name: "Walk Side by Side", note: "1 Step = 1", beg: "30", int: "65", adv: "100", link: "https://musclewiki.com/exercise/mini-band-walking-side-to-side?model=f" },
            { name: "Cardio In & Outs", note: "Steps for beg", beg: "40", int: "70", adv: "110", link:"https://musclewiki.com/exercise/cardio-in-and-outs?model=f?model=f"},
            { name: "Eccentric Dragonflag", note: "Slow and Controlled", beg: "10", int: "20", adv: "40", link: "https://musclewiki.com/exercise/eccentric-dragonflag?model=f" },
        ]},
        { num: 6, theme: "Core Control", exercises: [
            { name: "Russian Twists", note: "add weight if able", beg: "40", int: "80", adv: "130", link: "https://musclewiki.com/exercise/dumbbell-russian-twist?model=f?model=f" },
            { name: "Leg Raises", note: "lying flat", beg: "20", int: "45", adv: "75", link: "https://musclewiki.com/exercise/laying-leg-raises?model=f?model=f" },
            { name: "Plank Up-Downs", note: "elbow to hand", beg: "15", int: "30", adv: "50", link: "https://musclewiki.com/exercise/bodyweight-plank-up-down?model=f" },
            { name: "Alternating Leg Raise", note: "Left+Right = 1 rep", beg: "10", int: "20", adv: "30", link: "https://musclewiki.com/exercise/laying-alternating-leg-raise?model=f" },
            { name: "Plank Saw", note: "Front + Back = 1 rep", beg: "15", int: "30", adv: "60", link: "https://musclewiki.com/exercise/plank-2-saw?model=f?model=f" },
        ]},
        { num: 7, theme: "Power & Athleticism", exercises: [
            { name: "Squat Jumps", note: "or Squat Pulses for beg/int", beg: "30", int: "55", adv: "90", link: "https://musclewiki.com/exercise/jump-squats?model=f?model=f" },
            { name: "Lateral Skaters", note: "each side", beg: "30", int: "55", adv: "90", link: "https://musclewiki.com/exercise/cardio-skater?model=f?model=f"},
            { name: "Push-Up w/T-Rotation", note: "Just T-Rotation beg/Int - Each side", beg: "10", int: "24", adv: "40", link: "https://youtu.be/iChMWu10hVc?si=A3gYPHWQgKK4mTfj" },
            { name: "3 steps Heismans", note: "in place", beg: "90s", int: "2.5m", adv: "4m", link: "https://musclewiki.com/exercise/cardio-three-step-heismans?model=f?model=f" },
            { name: "Walking Lunges", note: "1 step = 1 Rep", beg: "20", int: "40", adv: "80", link: "https://musclewiki.com/exercise/lunge-walking?model=f" },
            { name: "Crow Pose - PIPO", note: "Optional", beg: "20s", int: "40s", adv: "80s", link: "https://musclewiki.com/exercise/crow-pose?model=f" },
        ]},
        { num: 8, theme: "Final Challenge Week", final: true, exercises: [
            { name: "Bulgarian Split Squats", note: "Each Leg", beg: "50", int: "100", adv: "150", link: "https://musclewiki.com/exercise/bulgarian-split-squat?model=f" },
            { name: "Push-Up Challenge", note: "any variation", beg: "60", int: "120", adv: "175", link: "https://musclewiki.com/exercise/push-up?model=f" },
            { name: "Single Leg Glute Bridge", note: "each Side", beg: "30", int: "45", adv: "70", link: "https://musclewiki.com/exercise/single-leg-glute-bridge?model=f" },
            { name: "Core Finisher", note: "3 30s of choice back to back", beg: "5", int: "10", adv: "15" },
            { name: "Burpees oh yeah", note: "no push-up or Jump for beg/Int", beg: "25", int: "55", adv: "85",  link: "https://musclewiki.com/exercise/burpee" },
            { name: "Wildcard", note: "your hardest move", beg: "5pts", int: "10pts", adv: "15pts" },
        ]}
    ];
// PART 2: Application Initialization & LocalStorage Engines
let editMode = false;
const STORAGE_LINKS = "exerciseLinks_v1";
const STORAGE_DONE = "exerciseProgress_v1";

// Administrative panel initialization via query parsing
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('admin') === 'true') {
  document.getElementById('adminToolbar').classList.add('admin-visible');
}

// System Alerts Engine
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; 
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}

// Storage indexing helper key mapper
function getKey(w, i) { 
  return `w${w}e${i}`; 
}

// Global scope registration for dynamically injected HTML action events
window.toggleDone = function(key) {
  const done = JSON.parse(localStorage.getItem(STORAGE_DONE) || "{}");
  if (!done[key]) {
    done[key] = 'beg';
  } else {
    delete done[key];
  }
  localStorage.setItem(STORAGE_DONE, JSON.stringify(done));
  render();
};

window.selectLevel = function(key, level, event) {
  event.stopPropagation(); // Block card element redirection bubbling
  const done = JSON.parse(localStorage.getItem(STORAGE_DONE) || "{}");
  if (done[key] === level) {
    delete done[key];
  } else {
    done[key] = level;
  }
  localStorage.setItem(STORAGE_DONE, JSON.stringify(done));
  render();
};

window.resetProgress = function() {
  if (confirm("This will clear all your checkmarks. Ready for a fresh start?")) {
    localStorage.removeItem(STORAGE_DONE);
    render();
    showToast("Progress Reset");
  }
};

window.saveLink = function(key, val) {
  const links = JSON.parse(localStorage.getItem(STORAGE_LINKS) || "{}");
  links[key] = val;
  localStorage.setItem(STORAGE_LINKS, JSON.stringify(links));
};
// PART 3: Core DOM Construction Engine & Event Handlers
function render() {
  const grid = document.getElementById('challengeGrid');
  const localLinks = JSON.parse(localStorage.getItem(STORAGE_LINKS) || "{}");
  const done = JSON.parse(localStorage.getItem(STORAGE_DONE) || "{}");
  grid.innerHTML = "";
  
  let totalEx = 0;
  let completedEx = 0;

  weeks.forEach(week => {
    const card = document.createElement('div');
    card.className = 'week-card';
    
    const rowsHtml = week.exercises.map((ex, idx) => {
      const key = getKey(week.num, idx);
      const link = localLinks[key] || ex.link || "";
      const completionValue = done[key]; 
      const isDone = !!completionValue;

      totalEx++;
      if (isDone) completedEx++;

      return `
        <div class="ex-row ${isDone ? 'done' : ''} ${(!editMode && link) ? 'clickable' : ''}" 
             onclick="if(!editMode && '${link}') window.open('${link}', '_blank')">
          <input type="checkbox" class="complete-check" ${isDone ? 'checked' : ''}
                 onclick="event.stopPropagation(); toggleDone('${key}')">
          <div class="ex-name">
            ${link ? `<span style="border-bottom:1px dashed #666; color:var(--fire)">${ex.name}</span>` : `<span>${ex.name}</span>`}
            <small>${ex.note}</small>
            ${editMode ? `<input class="link-input" style="width:100%; margin-top:5px; background:#000; color:#fff; border:1px solid #444; padding:4px;" placeholder="Paste demo link..." value="${link}" oninput="saveLink('${key}', this.value)" onclick="event.stopPropagation()">` : ''}
          </div>
          <div class="pill beg ${completionValue === 'beg' ? 'selected' : ''}" onclick="selectLevel('${key}', 'beg', event)">${ex.beg}</div>
          <div class="pill int ${completionValue === 'int' ? 'selected' : ''}" onclick="selectLevel('${key}', 'int', event)">${ex.int}</div>
          <div class="pill adv ${completionValue === 'adv' ? 'selected' : ''}" onclick="selectLevel('${key}', 'adv', event)">${ex.adv}</div>
        </div>`;
    }).join('');

    card.innerHTML = `
      <div class="week-header"><div class="week-title">WEEK ${week.num}: ${week.theme}</div></div>
      <div class="col-header"><span></span><span>Exercise</span><span>BEG</span><span>INT</span><span>ADV</span></div>
      <div class="exercises">${rowsHtml}</div>`;
    grid.appendChild(card);
  });

  const percent = totalEx > 0 ? Math.round((completedEx / totalEx) * 100) : 0;
  document.getElementById('progressText').textContent = percent + "%";
}

// Bind Button Interactivity
document.getElementById('resetBtn').onclick = window.resetProgress;

document.getElementById('editToggle').onclick = function() {
  editMode = !editMode;
  this.classList.toggle('on');
  render();
};

document.getElementById('shareBtn').onclick = function() {
  const links = localStorage.getItem(STORAGE_LINKS) || "{}";
  const b64 = btoa(links);
  const url = `${window.location.origin}${window.location.pathname}#links=${b64}`;
  navigator.clipboard.writeText(url).then(() => showToast("Share Link Copied!"));
};

// URL Import Listener Engine
const hash = window.location.hash;
if (hash.includes('links=')) {
  try {
    const b64 = hash.split('links=')[1]; // Fixed boundary split targeting
    const importedLinks = JSON.parse(atob(b64));
    const existingLinks = JSON.parse(localStorage.getItem(STORAGE_LINKS) || "{}");
    localStorage.setItem(STORAGE_LINKS, JSON.stringify({...existingLinks, ...importedLinks}));
    window.location.hash = ""; 
    showToast("Links Loaded!");
  } catch(e) { 
    console.error("Link import failed"); 
  }
}

// Initial Canvas Build Call
render();
