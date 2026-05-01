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

function App() {
  const START_DATE_STR = '2026-04-27';
  
  // 날짜 계산 로직 (habit_rpg 방식)
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
  const initialCompleted = useMemo(() => {
    const ids = [];
    for (let d = 1; d < currentDay && d <= 4; d++) {
      const dayData = studyData.find(item => item.day === d);
      if (dayData) {
        dayData.tasks.forEach(t => ids.push(t.id));
      }
    }
    return ids;
  }, [currentDay]);

  // 상태 관리 (sf_v4 키 사용으로 초기화 방지 및 무결성 확보)
  const [completedTasks, setCompletedTasks] = useLocalStorage('sf_v4_completedTasks', initialCompleted);
  const [streak, setStreak] = useLocalStorage('sf_v4_streak', 5);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showFullSchedule, setShowFullSchedule] = useState(false);
  const [history, setHistory] = useLocalStorage('sf_v4_history', {});
  const [activeTab, setActiveTab] = useState('study');
  
  // 습관(Habit) 관련 상태
  const [habits, setHabits] = useLocalStorage('sf_v4_habits', [
    { id: 1, title: '아침 물 한잔', emoji: '💧' },
    { id: 2, title: '스트레칭 10분', emoji: '🧘' }
  ]);
  const [completedHabits, setCompletedHabits] = useLocalStorage('sf_v4_completedHabits', []);
  const [newHabitTitle, setNewHabitTitle] = useState('');

  // 1~4일차 초기 히스토리 설정 (최초 1회)
  useEffect(() => {
    if (Object.keys(history).length === 0) {
      const initialHist = {};
      for (let d = 1; d < currentDay && d <= 4; d++) initialHist[d] = true;
      setHistory(initialHist);
    }
  }, [currentDay, history, setHistory]);

  // 미룬 과제 (Debt) 계산
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

  // 현재 날짜의 퀘스트 필터링
  const todaysQuests = useMemo(() => {
    const data = studyData.find(d => d.day === currentDay);
    return data ? data.tasks : [];
  }, [currentDay]);

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => {
      const newCompleted = prev.includes(taskId) 
        ? prev.filter(id => id !== taskId) 
        : [...prev, taskId];
      
      const currentDayTaskIds = todaysQuests.map(t => t.id);
      const isDayComplete = currentDayTaskIds.length > 0 && currentDayTaskIds.every(id => newCompleted.includes(id));
      
      setHistory(prevHist => ({
        ...prevHist,
        [currentDay]: isDayComplete
      }));
      
      return newCompleted;
    });
  };

  // 습관 핸들러
  const handleAddHabit = (e) => {
    e.preventDefault();
    if (!newHabitTitle.trim()) return;
    const newHabit = {
      id: Date.now(),
      title: newHabitTitle.trim(),
      emoji: '✨'
    };
    setHabits([...habits, newHabit]);
    setNewHabitTitle('');
  };

  const toggleHabit = (habitId) => {
    setCompletedHabits(prev => 
      prev.includes(habitId) 
        ? prev.filter(id => id !== habitId) 
        : [...prev, habitId]
    );
  };

  const deleteHabit = (habitId) => {
    setHabits(habits.filter(h => h.id !== habitId));
    setCompletedHabits(completedHabits.filter(id => id !== habitId));
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header style={{ 
        padding: '24px 20px', 
        background: 'white', 
        borderBottom: '1px solid #f0f0f0',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#8293b5', letterSpacing: '0.05em' }}>CURRENT PROGRESS</span>
          <span style={{ fontSize: '24px' }}>👤</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <h1 style={{ fontSize: '32px' }}>Day {currentDay}</h1>
          <span style={{ fontSize: '14px', color: '#75777e' }}>Friday, May 1</span>
        </div>

        {/* Bento Stats */}
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
              <button 
                onClick={() => setShowFullSchedule(true)}
                style={{ 
                  padding: '6px 12px', 
                  borderRadius: '99px', 
                  background: 'var(--surface-container)', 
                  border: 'none', 
                  fontSize: '12px', 
                  fontWeight: 600, 
                  color: 'var(--secondary)',
                  cursor: 'pointer'
                }}
              >
                📜 Full Roadmap
              </button>
            </div>

            {/* Debt Section */}
            {debtQuests.length > 0 && (
              <div className="debt-section">
                <div className="section-header debt">
                  <span>⚠️</span> Delayed Tasks
                </div>
                {debtQuests.map(task => (
                  <div key={task.id} className="task-card" style={{ borderLeft: '4px solid var(--coral)' }}>
                    <div 
                      className={`check-circle ${completedTasks.includes(task.id) ? 'completed' : ''}`}
                      onClick={() => toggleTask(task.id)}
                    ></div>
                    <div className="task-content">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="task-tag tag-debt">DEBT (Day {task.day})</span>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#75777e' }}>
                          {task.revisionStep}st Read
                        </span>
                      </div>
                      <h3 className="task-title">{task.title}</h3>
                      <p style={{ fontSize: '14px', color: '#44474d', margin: '0 0 8px 0' }}>({task.category})</p>
                      <div className="task-meta">
                        <span>📚</span>
                        <span>{task.pages}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Today's Section */}
            <div className="today-section">
              <div className="section-header">
                <span>📅</span> Today's Tasks
              </div>
              <div className="task-list">
                {todaysQuests.map(task => (
                  <div key={task.id} className="task-card">
                    <div 
                      className={`check-circle ${completedTasks.includes(task.id) ? 'completed' : ''}`}
                      onClick={() => toggleTask(task.id)}
                    ></div>
                    <div className="task-content">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className={`task-tag ${task.type === 'new' ? 'tag-new' : 'tag-rev'}`}>
                          {task.type === 'new' ? 'NEW' : `${task.gap} DAYS AGO`}
                        </span>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: task.type === 'new' ? 'var(--secondary)' : '#75777e' }}>
                          {task.revisionStep}st Read
                        </span>
                      </div>
                      <h3 className="task-title">{task.title}</h3>
                      <p style={{ fontSize: '14px', color: '#44474d', margin: '0 0 8px 0' }}>({task.category})</p>
                      <div className="task-meta">
                        <span>📚</span>
                        <span>{task.pages}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {todaysQuests.length === 0 && (
                  <div className="empty-state">
                    <span style={{ fontSize: '40px', display: 'block', marginBottom: '10px' }}>🎉</span>
                    No tasks scheduled for today.
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="habit-tab">
            <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Daily Habits</h2>
            
            <form className="habit-input-group" onSubmit={handleAddHabit}>
              <input 
                type="text" 
                className="habit-input" 
                placeholder="새로운 습관 추가..." 
                value={newHabitTitle}
                onChange={(e) => setNewHabitTitle(e.target.value)}
              />
              <button type="submit" className="add-btn">Add</button>
            </form>

            <div className="habit-list">
              {habits.map(habit => (
                <div key={habit.id} className="task-card">
                  <div 
                    className={`check-circle ${completedHabits.includes(habit.id) ? 'completed' : ''}`}
                    onClick={() => toggleHabit(habit.id)}
                  ></div>
                  <div className="task-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h3 className="task-title" style={{ 
                        textDecoration: completedHabits.includes(habit.id) ? 'line-through' : 'none',
                        opacity: completedHabits.includes(habit.id) ? 0.6 : 1
                      }}>
                        <span style={{ marginRight: '8px' }}>{habit.emoji}</span>
                        {habit.title}
                      </h3>
                      <button className="delete-btn" onClick={() => deleteHabit(habit.id)}>✕</button>
                    </div>
                  </div>
                </div>
              ))}
              {habits.length === 0 && (
                <div className="empty-state">
                  <span style={{ fontSize: '40px', display: 'block', marginBottom: '10px' }}>🧘</span>
                  나만의 습관을 만들어보세요.
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Bottom Nav */}
      <nav style={{ 
        position: 'sticky', 
        bottom: 0, 
        background: 'rgba(255,255,255,0.9)', 
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid #f0f0f0',
        padding: '12px 20px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <div 
          onClick={() => setActiveTab('study')}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: activeTab === 'study' ? 'var(--secondary)' : '#8e9199', cursor: 'pointer' }}
        >
          <span style={{ fontSize: '20px' }}>📖</span>
          <span style={{ fontSize: '10px', fontWeight: 600 }}>Study</span>
        </div>
        <div 
          onClick={() => setActiveTab('habit')}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: activeTab === 'habit' ? 'var(--secondary)' : '#8e9199', cursor: 'pointer' }}
        >
          <span style={{ fontSize: '20px' }}>✅</span>
          <span style={{ fontSize: '10px', fontWeight: 600 }}>Habit</span>
        </div>
        <div 
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: showCalendar ? 'var(--secondary)' : '#8e9199', cursor: 'pointer' }}
          onClick={() => setShowCalendar(true)}
        >
          <span style={{ fontSize: '20px' }}>📅</span>
          <span style={{ fontSize: '10px', fontWeight: 600 }}>Calendar</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#8e9199' }}>
          <span style={{ fontSize: '20px' }}>👤</span>
          <span style={{ fontSize: '10px', fontWeight: 600 }}>Profile</span>
        </div>
      </nav>

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="modal-overlay" onClick={() => setShowCalendar(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '24px' }}>Study Roadmap</h2>
              <button 
                onClick={() => setShowCalendar(false)}
                style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#8293b5' }}
              >✕</button>
            </div>
            
            <div className="calendar-grid">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="calendar-day-header">{day}</div>
              ))}
              {Array.from({ length: 56 }).map((_, i) => {
                const dayNum = i + 1;
                const isCompleted = history[dayNum];
                const isToday = dayNum === currentDay;
                const isPast = dayNum < currentDay;
                const isFuture = dayNum > currentDay;

                return (
                  <div 
                    key={i} 
                    className={`calendar-cell ${isCompleted ? 'completed' : ''} ${isToday ? 'today' : ''} ${isPast && !isCompleted ? 'past' : ''} ${isFuture ? 'future' : ''}`}
                  >
                    <span className="day-num">D{dayNum}</span>
                    {isCompleted && <span style={{ fontSize: '10px' }}>🌟</span>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Full Schedule Modal */}
      {showFullSchedule && (
        <div className="modal-overlay" onClick={() => setShowFullSchedule(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '24px' }}>Full Roadmap</h2>
              <button 
                onClick={() => setShowFullSchedule(false)}
                style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#8293b5' }}
              >✕</button>
            </div>
            
            <div style={{ overflowY: 'auto', maxHeight: 'calc(85vh - 100px)' }}>
              {Array.from({ length: 8 }).map((_, weekIdx) => (
                <div key={weekIdx} style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '14px', color: 'var(--secondary)', marginBottom: '12px', borderBottom: '2px solid var(--surface-container)', paddingBottom: '4px', fontWeight: 700 }}>Week {weekIdx + 1}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {studyData.slice(weekIdx * 7, (weekIdx + 1) * 7).map(day => (
                      <div key={day.day} style={{ 
                        padding: '12px', 
                        background: day.day === currentDay ? 'rgba(41, 81, 203, 0.05)' : 'white',
                        borderRadius: '12px',
                        border: day.day === currentDay ? '1px solid var(--secondary)' : '1px solid #f0f0f0'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>
                          <span>Day {day.day} ({day.date})</span>
                          {history[day.day] && <span>🌟</span>}
                        </div>
                        {day.tasks.map(task => (
                          <div key={task.id} style={{ fontSize: '12px', color: '#44474d', display: 'flex', justifyContent: 'space-between', marginTop: '2px' }}>
                            <span>{task.title}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
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
