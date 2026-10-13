import React from 'react';
import './dash.css';

export default function Dashboard() {
  const userData = {
    name: "Gerrard",
    email: "gerrard.dev@mail.com",
    greeting: "Welcome back, Gerrard!",
    subtitle: "Here is your high-performance financial overview",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
  };

  const kpiData = [
    { title: "Total balance", amount: "$15,700.00", change: "+ 12.1% vs last month", positive: true },
    { title: "Income", amount: "$8,500.00", change: "+ 6.3% vs last month", positive: true },
    { title: "Expense", amount: "$6,222.00", change: "- 2.4% vs last month", positive: false },
    { title: "Total savings", amount: "$32,913.00", change: "+ 12.1% vs last month", positive: true },
  ];

  const transactions = [
    { date: "25 Jul 12:30", amount: "- $10.00", name: "YouTube Premium", method: "VISA **4521", category: "Subscription" },
    { date: "26 Jul 15:00", amount: "- $150.00", name: "Reserved Clothing", method: "Mastercard **2154", category: "Shopping" },
    { date: "27 Jul 9:00", amount: "- $80.00", name: "Yaposhka Restaurant", method: "Mastercard **2154", category: "Cafe & Restaurants" },
  ];

  const chartBars = [
    { month: "Jan", inc: "55%", exp: "48%" },
    { month: "Feb", inc: "62%", exp: "59%" },
    { month: "Mar", inc: "85%", exp: "62%" },
    { month: "Apr", inc: "78%", exp: "71%" },
    { month: "May", inc: "81%", exp: "74%" },
    { month: "Jun", inc: "49%", exp: "43%" },
    { month: "Jul", inc: "68%", exp: "56%" },
  ];

  const budgetCategories = [
    { name: "Cafe & Restaurants", amount: "$2,100.00", percent: "35%", color: "#6366f1" },
    { name: "Shopping & Tech", amount: "$1,822.00", percent: "30%", color: "#a855f7" },
    { name: "Food & Groceries", amount: "$1,300.00", percent: "21%", color: "#06b6d4" },
  ];

  const savingGoals = [
    { name: "MacBook Pro M3", saved: "$1,650", target: "$2,200", percent: "75%", color: "linear-gradient(90deg, #6366f1, #818cf8)" },
    { name: "New Car Deposit", saved: "$25,200", target: "$60,000", percent: "42%", color: "linear-gradient(90deg, #a855f7, #c084fc)" },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div>
          <div className="logo-box">
            <div className="logo-icon">A</div>
            <span>ApexWallet</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#dashboard" className="nav-link active">📊 Dashboard</a></li>
            <li><a href="#transactions" className="nav-link">💳 Transactions</a></li>
            <li><a href="#wallet" className="nav-link">💼 Wallet</a></li>
            <li><a href="#goals" className="nav-link">🎯 Goals</a></li>
            <li><a href="#budget" className="nav-link">📈 Budget</a></li>
            <li><a href="#analytics" className="nav-link">📉 Analytics</a></li>
            <li><a href="#settings" className="nav-link">⚙️ Settings</a></li>
          </ul>
        </div>
        <div style={{ color: '#94a3b8', fontSize: '12px', cursor: 'pointer', paddingLeft: '12px' }}>
          <p>❓ Help Center</p>
          <p style={{ marginTop: '8px', color: '#ef4444', fontWeight: 600 }}>🚪 Log out</p>
        </div>
      </aside>

      {/* Main Area */}
      <main className="main-area">
        {/* Top Header */}
        <header className="header-top">
          <div className="welcome-box">
            <h1>{userData.greeting}</h1>
            <p>{userData.subtitle}</p>
          </div>
          <div className="header-right">
            <div className="icon-btn">🔍</div>
            <div className="icon-btn">
              🔔
              <span className="badge-dot"></span>
            </div>
            <div className="profile-pill">
              <img src={userData.avatar} alt={userData.name} />
              <div className="profile-info">
                <div className="name">{userData.name}</div>
                <div className="email">{userData.email}</div>
              </div>
            </div>
          </div>
        </header>

        {/* 4 KPI Cards */}
        <section className="kpi-row">
          {kpiData.map((kpi, idx) => (
            <div className="kpi-box" key={idx}>
              <div className="kpi-header">
                <span>{kpi.title}</span>
                <span>↗</span>
              </div>
              <div className="kpi-value">{kpi.amount}</div>
              <div className={`trend-badge ${!kpi.positive ? 'negative' : ''}`}>
                {kpi.change}
              </div>
            </div>
          ))}
        </section>

        {/* 2-Column Main Split Grid */}
        <div className="dashboard-grid">
          {/* Left Column */}
          <div className="column-left">
            {/* Money Flow Chart */}
            <div className="card">
              <div className="card-header-flex">
                <div className="card-title">Money Flow Overview</div>
                <div style={{ display: 'flex', gap: '12px', fontSize: '11px', color: '#94a3b8' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '8px', height: '8px', background: '#6366f1', borderRadius: '2px' }}></span> Income
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '8px', height: '8px', background: '#a855f7', borderRadius: '2px' }}></span> Expense
                  </span>
                </div>
              </div>
              <div className="chart-wrapper">
                <div className="chart-y-axis">
                  <span>$10k</span>
                  <span>$5k</span>
                  <span>$0</span>
                </div>
                <div className="chart-body">
                  <div className="chart-bars-area">
                    {chartBars.map((item, idx) => (
                      <div className="bar-group" key={idx}>
                        <div className="bar-primary" style={{ height: item.inc }}></div>
                        <div className="bar-secondary" style={{ height: item.exp }}></div>
                      </div>
                    ))}
                  </div>
                  <div className="chart-x-labels">
                    {chartBars.map((item, idx) => (
                      <span key={idx}>{item.month}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="card">
              <div className="card-header-flex">
                <div className="card-title">Recent Transactions</div>
                <span style={{ fontSize: '11px', color: '#6366f1', fontWeight: 600 }}>See All →</span>
              </div>
              <table className="simple-table">
                <thead>
                  <tr>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                    <th>PAYMENT NAME</th>
                    <th>METHOD</th>
                    <th>CATEGORY</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx, idx) => (
                    <tr key={idx}>
                      <td style={{ color: '#94a3b8' }}>{tx.date}</td>
                      <td style={{ color: '#ef4444', fontWeight: 700 }}>{tx.amount}</td>
                      <td style={{ fontWeight: 600 }}>{tx.name}</td>
                      <td style={{ color: '#94a3b8' }}>{tx.method}</td>
                      <td>
                        <span style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8', padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 600 }}>
                          {tx.category}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column */}
          <div className="column-right">
            {/* Visa Card */}
            <div className="visa-widget">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="chip-icon"></div>
                <span style={{ fontWeight: 800, fontSize: '16px', fontStyle: 'italic' }}>VISA</span>
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: '16px', letterSpacing: '2px' }}>
                4521 •••• •••• 3254
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: '10px' }}>
                <div>
                  <div style={{ color: '#a5b4fc', fontSize: '8px' }}>CARDHOLDER</div>
                  <div style={{ fontWeight: 700, fontSize: '12px' }}>GERRARD</div>
                </div>
                <div>
                  <div style={{ color: '#a5b4fc', fontSize: '8px' }}>EXPIRES</div>
                  <div style={{ fontWeight: 700, fontSize: '12px' }}>08/28</div>
                </div>
              </div>
            </div>

            {/* Monthly Budget */}
            <div className="card">
              <div className="card-header-flex">
                <div className="card-title">Monthly Budget</div>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>$6,222 Total</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, justifyContent: 'center' }}>
                {budgetCategories.map((cat, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '3px' }}>
                      <span style={{ fontWeight: 600 }}>{cat.name}</span>
                      <span style={{ color: '#94a3b8' }}>{cat.amount}</span>
                    </div>
                    <div style={{ background: '#1e293b', height: '5px', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: cat.percent, height: '100%', background: cat.color }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Saving Goals */}
            <div className="card">
              <div className="card-header-flex">
                <div className="card-title">Saving Goals</div>
                <span style={{ fontSize: '11px', color: '#6366f1', fontWeight: 600 }}>+ Add</span>
              </div>
              <div className="goal-list">
                {savingGoals.map((goal, idx) => (
                  <div className="goal-card-item" key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 600 }}>
                      <span>{goal.name}</span>
                      <span style={{ color: '#818cf8' }}>{goal.percent}</span>
                    </div>
                    <div className="progress-bar-track">
                      <div style={{ width: goal.percent, height: '100%', background: goal.color }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}