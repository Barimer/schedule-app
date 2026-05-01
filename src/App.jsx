import { useState, useEffect, useMemo, useCallback } from 'react';
import { studyData } from './studyData';
import './App.css';

// habit_rpg 패턴: 로컬 스토리지 자동 저장 훅
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// 원형 그래프 컴포넌트 (SVG 기반)
const CircularProgress = ({ percentage, color }) => {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg viewBox="0 0 36 36" className="circle-chart">
      <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
      <path 
        className="circle-progress" 
        stroke={color}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset: offset }}
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
      />
      <text x="18" y="21.5" className="circle-chart-text" textAnchor="middle" style={{ fontSize: '9px' }}>{percentage}%</text>
    </svg>
  );
};

function App() {
  const START_DATE_STR = '2026-04-27';
  
  // 날짜 계산 로직
  const getLocalDateKey = useCallback((date = new Date()) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }, []);

  const [todayKey] = useState(getLocalDateKey());

  const currentDay = useMemo(() => {
    const today = new Date(`${todayKey}T00:00:00`);
    const startDate = new Date(`${START_DATE_STR}T00:00:00`);
    const diffTime = today - startDate;
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return Math.max(1, Math.min(diffDays, 56));
  }, [todayKey]);

  // 이전 과제 자동 완료 처리 (Day 1~4)
  const initialCompletedIds = useMemo(() => {
    const ids = [];
    for (let d = 1; d < currentDay && d <= 4; d++) {
      const dayData = studyData.find(item => item.day === d);
      if (dayData) {
        dayData.tasks.forEach(t => ids.push(t.id));
      }
    }
    return ids;
  }, [currentDay]);

  // --- 상태 관리 ---
  const [activeTab, setActiveTab] = useState('study');
  const [completedTasks, setCompletedTasks] = useLocalStorage('sf_v6_completedTasks', initialCompletedIds);
  const [streak, setStreak] = useLocalStorage('sf_v6_streak', 5);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showFullSchedule, setShowFullSchedule] = useState(false);
  const [history, setHistory] = useLocalStorage('sf_v6_history', {});
  
  const [habits, setHabits] = useLocalStorage('sf_v6_habits', [
    { id: 1, title: '아침 물 한잔', emoji: '💧' },
    { id: 2, title: '스트레칭 10분', emoji: '🧘' }
  ]);
  const [completedHabits, setCompletedHabits] = useLocalStorage('sf_v6_completedHabits', []);
  const [newHabitTitle, setNewHabitTitle] = useState('');

  // 1~4일차 초기 히스토리 설정
  useEffect(() => {
    if (Object.keys(history).length === 0) {
      const initialHist = {};
      for (let d = 1; d < currentDay && d <= 4; d++) initialHist[d] = true;
      setHistory(initialHist);
    }
  }, [currentDay, history, setHistory]);

  // --- 비즈니스 로직 ---
  const todaysQuests = useMemo(() => {
    const data = studyData.find(d => d.day === currentDay);
    return data ? data.tasks : [];
  }, [currentDay]);

  const debtQuests = useMemo(() => {
    const debts = [];
    for (let d = 1; d < currentDay; d++) {
      const dayData = studyData.find(item => item.day === d);
      if (dayData) {
        dayData.tasks.forEach(task => {
          if (!completedTasks.includes(task.id)) {
            debts.push({ ...task, day: d });
          }
        });
      }
    }
    return debts;
  }, [currentDay, completedTasks]);

  const studyProgress = useMemo(() => {
    if (todaysQuests.length === 0) return 0;
    const completedCount = todaysQuests.filter(t => completedTasks.includes(t.id)).length;
    return Math.floor((completedCount / todaysQuests.length) * 100);
  }, [todaysQuests, completedTasks]);

  const habitProgress = useMemo(() => {
    if (habits.length === 0) return 0;
    const completedCount = habits.filter(h => completedHabits.includes(h.id)).length;
    return Math.floor((completedCount / habits.length) * 100);
  }, [habits, completedHabits]);

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => {
      const newCompleted = prev.includes(taskId) 
        ? prev.filter(id => id !== taskId) 
        : [...prev, taskId];
      
      const currentDayTaskIds = todaysQuests.map(t => t.id);
      const isDayComplete = currentDayTaskIds.length > 0 && currentDayTaskIds.every(id => newCompleted.includes(id));
      
      setHistory(prevHist => ({ ...prevHist, [currentDay]: isDayComplete }));
      return newCompleted;
    });
  };

  const handleAddHabit = (e) => {
    e.preventDefault();
    if (!newHabitTitle.trim()) return;
    setHabits([...habits, { id: Date.now(), title: newHabitTitle.trim(), emoji: '✨' }]);
    setNewHabitTitle('');
  };

  const toggleHabit = (id) => {
    setCompletedHabits(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter(h => h.id !== id));
    setCompletedHabits(completedHabits.filter(i => i !== id));
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header style={{ padding: '24px 20px', background: 'white', borderBottom: '1px solid #f0f0f0', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#8293b5', letterSpacing: '0.05em' }}>CURRENT PROGRESS</span>
          <span style={{ fontSize: '24px' }}>👤</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <h1 style={{ fontSize: '32px' }}>Day {currentDay}</h1>
          <span style={{ fontSize: '14px', color: '#75777e' }}>
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '20px' }}>
          <div style={{ background: 'white', padding: '16px', borderRadius: '16px', border: '1px solid #f0f0f0', boxShadow: 'var(--shadow)' }}>
            <div style={{ color: 'var(--secondary)', marginBottom: '8px' }}>📖</div>
            <div style={{ fontSize: '10px', color: '#75777e', fontWeight: 700 }}>TASKS</div>
            <div style={{ fontSize: '20px', fontWeight: 700 }}>
              {todaysQuests.length - todaysQuests.filter(t => completedTasks.includes(t.id)).length} <span style={{ fontSize: '14px', fontWeight: 400, color: '#75777e' }}>Remaining</span>
            </div>
          </div>
          <div style={{ background: 'white', padding: '16px', borderRadius: '16px', border: '1px solid #f0f0f0', boxShadow: 'var(--shadow)' }}>
            <div style={{ color: '#00a856', marginBottom: '8px' }}>⚡</div>
            <div style={{ fontSize: '10px', color: '#75777e', fontWeight: 700 }}>STREAK</div>
            <div style={{ fontSize: '20px', fontWeight: 700 }}>{streak} <span style={{ fontSize: '14px', fontWeight: 400, color: '#75777e' }}>Days</span></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '20px', flexGrow: 1 }}>
        {activeTab === 'study' ? (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '20px', margin: 0 }}>Study Schedule</h2>
              <button onClick={() => setShowFullSchedule(true)} className="pill-btn">📜 Full Roadmap</button>
            </div>

            {debtQuests.length > 0 && (
              <div className="debt-section">
                <div className="section-header debt"><span>⚠️</span> Delayed Tasks</div>
                {debtQuests.map(task => (
                  <div key={task.id} className="task-card" style={{ borderLeft: '4px solid var(--coral)' }}>
                    <div className={`check-circle ${completedTasks.includes(task.id) ? 'completed' : ''}`} onClick={() => toggleTask(task.id)}></div>
                    <div className="task-content">
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className="task-tag tag-debt">DEBT (Day {task.day})</span>
                        <span style={{ fontSize: '12px', color: '#75777e' }}>{task.revisionStep}st Read</span>
                      </div>
                      <h3 className="task-title">{task.title}</h3>
                      <p style={{ fontSize: '14px', color: '#44474d', margin: '0 0 8px 0' }}>({task.category})</p>
                      <div className="task-meta"><span>📚</span><span>{task.pages}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="today-section">
              <div className="section-header"><span>📅</span> Today's Tasks</div>
              <div className="task-list">
                {todaysQuests.map(task => (
                  <div key={task.id} className="task-card">
                    <div className={`check-circle ${completedTasks.includes(task.id) ? 'completed' : ''}`} onClick={() => toggleTask(task.id)}></div>
                    <div className="task-content">
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className={`task-tag ${task.type === 'new' ? 'tag-new' : 'tag-rev'}`}>{task.type === 'new' ? 'NEW' : `${task.gap} DAYS AGO`}</span>
                        <span style={{ fontSize: '12px', color: task.type === 'new' ? 'var(--secondary)' : '#75777e' }}>{task.revisionStep}st Read</span>
                      </div>
                      <h3 className="task-title">{task.title}</h3>
                      <p style={{ fontSize: '14px', color: '#44474d', margin: '0 0 8px 0' }}>({task.category})</p>
                      <div className="task-meta"><span>📚</span><span>{task.pages}</span></div>
                    </div>
                  </div>
                ))}
                {todaysQuests.length === 0 && <div className="empty-state">🎉 No tasks scheduled!</div>}
              </div>
            </div>
          </>
        ) : (
          <div className="habit-tab">
            <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Daily Habits</h2>
            <form className="habit-input-group" onSubmit={handleAddHabit}>
              <input type="text" className="habit-input" placeholder="새로운 습관 추가..." value={newHabitTitle} onChange={(e) => setNewHabitTitle(e.target.value)} />
              <button type="submit" className="add-btn">Add</button>
            </form>
            <div className="habit-list">
              {habits.map(h => (
                <div key={h.id} className="task-card">
                  <div className={`check-circle ${completedHabits.includes(h.id) ? 'completed' : ''}`} onClick={() => toggleHabit(h.id)}></div>
                  <div className="task-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h3 className="task-title" style={{ textDecoration: completedHabits.includes(h.id) ? 'line-through' : 'none', opacity: completedHabits.includes(h.id) ? 0.6 : 1 }}>
                        <span style={{ marginRight: '8px' }}>{h.emoji}</span>{h.title}
                      </h3>
                      <button className="delete-btn" onClick={() => deleteHabit(h.id)}>✕</button>
                    </div>
                  </div>
                </div>
              ))}
              {habits.length === 0 && <div className="empty-state">🧘 나만의 습관을 만들어보세요.</div>}
            </div>
          </div>
        )}
      </main>

      {/* Bottom Nav */}
      <nav style={{ position: 'sticky', bottom: 0, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', borderTop: '1px solid #f0f0f0', padding: '12px 20px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <div onClick={() => setActiveTab('study')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: activeTab === 'study' ? 'var(--secondary)' : '#8e9199', cursor: 'pointer' }}>
          <span style={{ fontSize: '20px' }}>📖</span><span style={{ fontSize: '10px', fontWeight: 600 }}>Study</span>
        </div>
        <div onClick={() => setActiveTab('habit')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: activeTab === 'habit' ? 'var(--secondary)' : '#8e9199', cursor: 'pointer' }}>
          <span style={{ fontSize: '20px' }}>✅</span><span style={{ fontSize: '10px', fontWeight: 600 }}>Habit</span>
        </div>
        <div onClick={() => setShowCalendar(true)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: showCalendar ? 'var(--secondary)' : '#8e9199', cursor: 'pointer' }}>
          <span style={{ fontSize: '20px' }}>📅</span><span style={{ fontSize: '10px', fontWeight: 600 }}>Calendar</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#8e9199' }}>
          <span style={{ fontSize: '20px' }}>👤</span><span style={{ fontSize: '10px', fontWeight: 600 }}>Profile</span>
        </div>
      </nav>

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="modal-overlay" onClick={() => setShowCalendar(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '24px' }}>Study Roadmap</h2>
              <button onClick={() => setShowCalendar(false)} style={{ background: 'none', border: 'none', fontSize: '24px', color: '#8293b5' }}>✕</button>
            </div>
            
            <div className="calendar-grid">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <div key={d} className="calendar-day-header">{d}</div>)}
              {Array.from({ length: 56 }).map((_, i) => {
                const dayNum = i + 1;
                const isCompleted = history[dayNum];
                return (
                  <div key={i} className={`calendar-cell ${isCompleted ? 'completed' : ''} ${dayNum === currentDay ? 'today' : ''} ${dayNum < currentDay && !isCompleted ? 'past' : ''} ${dayNum > currentDay ? 'future' : ''}`}>
                    <span className="day-num">D{dayNum}</span>
                    {isCompleted && <span style={{ fontSize: '10px' }}>🌟</span>}
                  </div>
                );
              })}
            </div>

            {/* Today's Summary Section */}
            <div className="summary-box">
              <h3 className="summary-title">Today's Summary</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-label">Study Completion</span>
                  <CircularProgress percentage={studyProgress} color="var(--secondary)" />
                  <span className="stat-subtext">
                    {todaysQuests.filter(t => completedTasks.includes(t.id)).length} / {todaysQuests.length} tasks
                  </span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Habit Completion</span>
                  <CircularProgress percentage={habitProgress} color="var(--mint)" />
                  <span className="stat-subtext">
                    {habits.filter(h => completedHabits.includes(`${todayKey}:${h.id}`)).length} / {habits.length} habits
                  </span>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: '20px', padding: '16px', background: 'white', borderRadius: '16px', border: '1px solid #f0f0f0', textAlign: 'center' }}>
              <p style={{ fontSize: '13px', margin: 0, color: '#44474d' }}>
                <strong>Tip:</strong> 꾸준한 복습이 장기 기억의 핵심입니다!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Roadmap Modal */}
      {showFullSchedule && (
        <div className="modal-overlay" onClick={() => setShowFullSchedule(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '24px' }}>Full Roadmap</h2>
              <button onClick={() => setShowFullSchedule(false)} style={{ background: 'none', border: 'none', fontSize: '24px', color: '#8293b5' }}>✕</button>
            </div>
            <div style={{ overflowY: 'auto', maxHeight: '60vh' }}>
              {Array.from({ length: 8 }).map((_, wIdx) => (
                <div key={wIdx} style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '14px', color: 'var(--secondary)', marginBottom: '12px', borderBottom: '2px solid var(--surface-container)', paddingBottom: '4px', fontWeight: 700 }}>Week {wIdx + 1}</h3>
                  {studyData.slice(wIdx * 7, (wIdx + 1) * 7).map(day => (
                    <div key={day.day} style={{ padding: '12px', background: day.day === currentDay ? 'rgba(41, 81, 203, 0.05)' : 'white', borderRadius: '12px', border: day.day === currentDay ? '1px solid var(--secondary)' : '1px solid #f0f0f0', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '14px' }}>
                        <span>Day {day.day} ({day.date})</span>
                        {history[day.day] && <span>🌟</span>}
                      </div>
                      {day.tasks.map(t => <div key={t.id} style={{ fontSize: '12px', color: '#44474d', marginTop: '2px' }}>• {t.title}</div>)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
